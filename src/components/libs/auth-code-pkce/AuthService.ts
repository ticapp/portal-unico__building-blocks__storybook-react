import getPkce from 'oauth-pkce';

import jwtDecode from 'jwt-decode';

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

      reject('failed');
    });
  });
};

export class AuthService<TIDToken = JWTIDToken> {
  private props: AuthServiceProps;

  private timeout?: number;

  private discoveredEndpoints: OpenIdEndpoints | null;

  constructor(props: AuthServiceProps) {
    this.discoveredEndpoints = null;
    this.props = props;
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

    this.setItem('pkce', JSON.stringify(pkce));
    this.setItem('preAuthUri', window.location.href);

    this.removeItem('auth');

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
    this.removeItem('pkce');
    this.removeItem('auth');
    this.removeItem('preAuthUri');

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
    return JSON.parse(this.getItem('auth') || '{}');
  }

  get Endpoints(): OpenIdEndpoints | null {
    return this.discoveredEndpoints;
  }

  get Pending(): boolean {
    return this.getItem('pkce') !== null && this.getItem('auth') === null;
  }

  get Authenticated(): boolean {
    return this.getItem('auth') !== null;
  }

  private async resumeFlow(): Promise<void> {
    const code = getCodeFromLocation();

    if (code !== null) {
      try {
        await this.fetchTokens(code, false);

        const uri = this.getItem('preAuthUri');
        this.removeItem('preAuthUri');

        if (uri !== null) {
          window.location.replace(uri);
        }

        removeCodeFromLocation();
      } catch (e) {
        this.removeItem('pkce');
        this.removeItem('auth');
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

    this.removeItem('pkce');

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

  private getItem(key: string): string | null {
    return window.localStorage.getItem(key);
  }

  private setItem(key: string, value: string): void {
    window.localStorage.setItem(key, value);
  }

  private removeItem(key: string): void {
    window.localStorage.removeItem(key);
  }

  private getPkce(): PKCECodePair {
    const pkce = this.getItem('pkce');
    if (pkce === null) {
      throw new Error('PKCE pair not found in local storage');
    } else {
      return JSON.parse(pkce);
    }
  }

  private setAuthTokens(auth: AuthTokens): void {
    const { refreshSlack = 5 } = this.props;
    const now = new Date().getTime();
    auth.expires_at = now + (auth.expires_in + refreshSlack) * 1000;
    this.setItem('auth', JSON.stringify(auth));
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
            this.removeItem('auth');
            removeCodeFromLocation();
          }
        })
        .catch(() => {
          this.removeItem('auth');
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
      this.removeItem('auth');
      removeCodeFromLocation();
    }
  }
}
