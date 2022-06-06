import jwtDecode from 'jwt-decode';
import getPkce from 'oauth-pkce';

export interface OpenIdEndpoints {
  authorization_endpoint: string;
  end_session_endpoint: string;
  token_endpoint: string;
}

export type PKCECodePair = {
  codeVerifier: string;
  codeChallenge: string;
  createdAt: Date;
};

export interface AuthServiceProps {
  clientId: string;
  provider: string;
  redirectUri: string;
  scopes: string[];

  contentType?: string;
  authorizeEndpoint?: string;
  tokenEndpoint?: string;
  logoutEndpoint?: string;
  audience?: string;
  autoRefresh?: boolean;
  refreshSlack?: number;
}

export interface AuthTokens {
  id_token: string;
  access_token: string;
  refresh_token: string;
  expires_in: number;
  expires_at?: number; // calculated on login
  token_type: string;
}

export interface JWTIDToken {
  given_name: string;
  family_name: string;
  name: string;
  email: string;
}

export interface TokenRequestBody {
  clientId: string;
  grantType: string;
  redirectUri?: string;
  refresh_token?: string;
  code?: string;
  codeVerifier?: string;
}

const getCodeFromLocation = (): string | null => {
  const split = window.location.toString().split('?');
  if (split.length < 2) {
    return null;
  }
  const pairs = split[1].split('&');

  const codePair = pairs.find((pair) => {
    const key = pair.split('=').shift();
    return key === 'code';
  });

  if (codePair) {
    const val = codePair.split('=').pop();
    return decodeURIComponent(val || '');
  }

  return null;
};

const removeCodeFromLocation = (): void => {
  const [base, search] = window.location.href.split('?');
  if (!search) {
    return;
  }
  const newSearch = search
    .split('&')
    .map((param) => param.split('='))
    .filter(([key]) => key !== 'code')
    .map((keyAndVal) => keyAndVal.join('='))
    .join('&');
  window.history.replaceState(window.history.state, 'null', base + (newSearch.length ? `?${newSearch}` : ''));
};

const toUrlEncoded = (obj = {}): string => {
  return Object.keys(obj)
    .map((k) => {
      const snakeCasedKey = k
        .split(/(?=[A-Z])/)
        .join('_')
        .toLowerCase();

      const encodedKey = encodeURIComponent(snakeCasedKey);
      const encodedValue = encodeURIComponent(obj[k]);

      return `${encodedKey}=${encodedValue}`;
    })
    .join('&');
};

const generatePKCECodes = (): Promise<PKCECodePair> => {
  return new Promise((resolve, reject) => {
    getPkce(128, (error, { verifier, challenge }) => {
      if (!error) {
        resolve({
          codeVerifier: verifier,
          codeChallenge: challenge,
          createdAt: new Date()
        } as PKCECodePair);
      }

      reject(new Error('failed'));
    });
  });
};

export class AuthService<TIDToken = JWTIDToken> {
  private props: AuthServiceProps;

  private timeout?: number;

  private discoveredEndpoints: OpenIdEndpoints | null;

  private storage;

  constructor(props: AuthServiceProps) {
    this.discoveredEndpoints = null;
    this.props = props;
    this.storage = new Storage();
  }

  public async discover(): Promise<void> {
    const { provider } = this.props;

    const response = await fetch(`${provider}/.well-known/openid-configuration`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    });

    if (!response.ok) {
      throw new Error('Provider does not support discovery endpoint (/.well-known/openid-configuration)');
    }

    const json = await response.json();

    this.discoveredEndpoints = json as OpenIdEndpoints;

    //  TRY TO RESUME ONGOING FLOW
    this.resumeFlow();
  }

  public async login(): Promise<void> {
    // this will do a full page reload and to to the OAuth2 provider's login page and then redirect back to redirectUri
    const { clientId, authorizeEndpoint, redirectUri, scopes, audience } = this.props;

    const pkce = await generatePKCECodes();

    const { codeChallenge } = pkce;

    this.storage.setItem('pkce', JSON.stringify(pkce));
    this.storage.setItem('preAuthUri', window.location.href);

    this.storage.removeItem('auth');

    const query = {
      clientId,
      scope: scopes.join(' '),
      responseType: 'code',
      redirectUri,
      ...(audience && { audience }),
      codeChallenge,
      codeChallengeMethod: 'S256'
    };

    const endpoint = authorizeEndpoint || this.Endpoints?.authorization_endpoint || '';

    // Should responds with a 302 redirect
    const url = `${endpoint}?${toUrlEncoded(query)}`;

    window.location.replace(url);
  }

  public logout(endSession = false): void {
    this.storage.removeItem('pkce');
    this.storage.removeItem('auth');
    this.storage.removeItem('preAuthUri');

    if (!endSession) {
      window.location.reload();
    } else {
      const { clientId, logoutEndpoint, redirectUri } = this.props;

      const query = {
        client_id: clientId,
        post_logout_redirect_uri: redirectUri
      };

      const endpoint = logoutEndpoint || this.Endpoints?.end_session_endpoint || '';

      const url = `${endpoint}?${toUrlEncoded(query)}`;
      window.location.replace(url);
    }
  }

  get User(): TIDToken | null {
    if (this.Tokens === null) {
      return null;
    }

    return jwtDecode(this.Tokens.id_token);
  }

  get Tokens(): AuthTokens {
    return JSON.parse(this.storage.getItem('auth') || '{}');
  }

  get Endpoints(): OpenIdEndpoints | null {
    return this.discoveredEndpoints;
  }

  get Pending(): boolean {
    return this.storage.getItem('pkce') !== null && this.storage.getItem('auth') === null;
  }

  get Authenticated(): boolean {
    return this.storage.getItem('auth') !== null;
  }

  private async resumeFlow(): Promise<void> {
    const code = getCodeFromLocation();

    if (code !== null) {
      try {
        await this.fetchTokens(code, false);

        const uri = this.storage.getItem('preAuthUri');
        this.storage.removeItem('preAuthUri');

        if (uri !== null) {
          window.location.replace(uri);
        }

        removeCodeFromLocation();
      } catch (e) {
        this.storage.removeItem('pkce');
        this.storage.removeItem('auth');
        removeCodeFromLocation();
      }
    } else if (this.props.autoRefresh) {
      this.startTimer();
    }
  }

  private async fetchTokens(code: string, isRefresh: boolean): Promise<AuthTokens> {
    // this happens after a full page reload. Read the code from localstorage
    const { clientId, contentType, tokenEndpoint, redirectUri, autoRefresh = true } = this.props;

    let payload: TokenRequestBody = {
      clientId,
      redirectUri,
      grantType: 'authorization_code'
    };

    if (isRefresh) {
      payload = {
        ...payload,
        grantType: 'refresh_token',
        refresh_token: code
      };
    } else {
      const pkce: PKCECodePair = this.getPkce();
      const { codeVerifier } = pkce;
      payload = {
        ...payload,
        code,
        codeVerifier
      };
    }

    const endpoint = tokenEndpoint || this.Endpoints?.token_endpoint || '';

    const response = await fetch(`${endpoint}`, {
      headers: {
        'Content-Type': contentType || 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      body: toUrlEncoded(payload)
    });

    if (!response.ok) {
      throw new Error('Failed to fetch token');
    }

    this.storage.removeItem('pkce');

    const json = await response.json();

    if (isRefresh && !json.refresh_token) {
      json.refresh_token = payload.refresh_token;
    }

    this.setAuthTokens(json as AuthTokens);

    if (autoRefresh) {
      this.startTimer();
    }

    return this.Tokens;
  }

  private getPkce(): PKCECodePair {
    const pkce = this.storage.getItem('pkce');
    if (pkce === null) {
      throw new Error('PKCE pair not found in local storage');
    } else {
      return JSON.parse(pkce);
    }
  }

  private setAuthTokens(auth: AuthTokens): void {
    const { refreshSlack = 5 } = this.props;

    const now = new Date().getTime();

    const authData = {
      ...auth,
      expires_at: now + (auth.expires_in + refreshSlack) * 1000
    };

    this.storage.setItem('auth', JSON.stringify(authData));
  }

  private armRefreshTimer(refreshToken: string, timeoutDuration: number): void {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    this.timeout = window.setTimeout(() => {
      this.fetchTokens(refreshToken, true)
        .then(({ refresh_token: newRefreshToken, expires_at: expiresAt }) => {
          if (!expiresAt) return;

          const now = new Date().getTime();
          const timeout = expiresAt - now;

          if (timeout > 0) {
            this.armRefreshTimer(newRefreshToken, timeout);
          } else {
            this.storage.removeItem('auth');
            removeCodeFromLocation();
          }
        })
        .catch(() => {
          this.storage.removeItem('auth');
          removeCodeFromLocation();
        });
    }, timeoutDuration);
  }

  private startTimer(): void {
    const authTokens = this.Tokens;

    if (!authTokens) {
      return;
    }

    const { refresh_token: refreshToken, expires_at: expiresAt } = authTokens;

    if (!expiresAt || !refreshToken) {
      return;
    }
    const now = new Date().getTime();
    const timeout = expiresAt - now;

    if (timeout > 0) {
      this.armRefreshTimer(refreshToken, timeout);
    } else {
      this.storage.removeItem('auth');
      removeCodeFromLocation();
    }
  }
}
