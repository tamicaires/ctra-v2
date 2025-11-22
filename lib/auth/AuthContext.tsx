'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthState } from './types';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users - em produção isso virá do backend
const MOCK_USERS: Array<User & { password: string }> = [
  {
    id: '1',
    email: 'super@admin.com',
    password: 'super123',
    name: 'Super Admin',
    role: 'super-admin',
  },
  {
    id: '2',
    email: 'admin@academia.com',
    password: 'admin123',
    name: 'Admin Academia',
    role: 'admin',
  },
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  // Carregar usuário do localStorage ao iniciar
  useEffect(() => {
    const loadUser = () => {
      try {
        const storedUser = localStorage.getItem('auth_user');
        if (storedUser) {
          const user = JSON.parse(storedUser);
          setAuthState({
            user,
            isAuthenticated: true,
            isLoading: false,
          });
        } else {
          setAuthState(prev => ({ ...prev, isLoading: false }));
        }
      } catch (error) {
        console.error('Error loading user:', error);
        setAuthState(prev => ({ ...prev, isLoading: false }));
      }
    };

    loadUser();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock login - em produção isso seria uma chamada API
    const user = MOCK_USERS.find(
      u => u.email === email && u.password === password
    );

    if (user) {
      const { password: _, ...userWithoutPassword } = user;

      // Salvar no localStorage
      localStorage.setItem('auth_user', JSON.stringify(userWithoutPassword));

      setAuthState({
        user: userWithoutPassword,
        isAuthenticated: true,
        isLoading: false,
      });

      return true;
    }

    return false;
  };

  const logout = () => {
    localStorage.removeItem('auth_user');
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
