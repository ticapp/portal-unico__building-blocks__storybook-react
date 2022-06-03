import React, { ReactElement, ReactNode, useMemo } from 'react';
import { AuthContext, AuthContextProps } from './AuthContext';
import { AuthService } from './AuthService';

interface AuthProviderProps {
  children: ReactNode;
  authService: AuthService;
}

export const AuthProvider = ({ children, authService }: AuthProviderProps): ReactElement => {
  const providerValue = useMemo(() => {
    return {
      authService
    } as AuthContextProps;
  }, [authService]);

  return <AuthContext.Provider value={providerValue}>{children}</AuthContext.Provider>;
};
