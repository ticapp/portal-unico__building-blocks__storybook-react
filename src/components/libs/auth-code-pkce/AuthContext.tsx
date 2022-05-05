import React from 'react';
import { AuthService } from './AuthService';

export interface AuthContextProps {
  authService?: AuthService;
}

export const AuthContext = React.createContext<AuthContextProps>({});
