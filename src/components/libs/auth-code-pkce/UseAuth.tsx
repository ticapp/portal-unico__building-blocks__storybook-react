import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { AuthTokens, JWTIDToken } from './AuthService';

export interface UseAuthProps {
  login: () => Promise<void>;
  logout: (endSession?: boolean) => Promise<void>;

  getUser: () => JWTIDToken | null;
  getTokens: () => AuthTokens;

  isReady: () => boolean;
  isPending: () => boolean;
  isAuthenticated: () => boolean;
}

export const useAuth = (): UseAuthProps => {
  const { authService } = useContext(AuthContext);
  const [isReady, setIsReady] = useState(false);
  const [, setIsInitialized] = useState(false);

  if (authService === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  useEffect(() => {
    setIsInitialized((lastIsInitializedValue: boolean) => {
      if (!lastIsInitializedValue) {
        authService.discover().then(() => {
          setIsReady(!!authService.Endpoints);
        });
        return true;
      }
      return lastIsInitializedValue;
    });
  }, [authService]);

  return {
    login: () => authService.login(),
    logout: (endSession: boolean = false) => authService.logout(endSession),
    getUser: () => authService.User,
    getTokens: () => authService.Tokens,
    isReady: () => isReady,
    isPending: () => authService.Pending,
    isAuthenticated: () => authService.Authenticated,
  };
};