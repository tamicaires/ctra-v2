'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth/AuthContext';
import { UserRole } from '@/lib/auth/types';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: UserRole;
}

export function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      // Se não está autenticado, redireciona para login
      if (!isAuthenticated) {
        router.push('/login');
        return;
      }

      // Se precisa de super-admin mas o usuário não é
      if (requiredRole === 'super-admin' && user?.role !== 'super-admin') {
        router.push('/admin');
        return;
      }
    }
  }, [isAuthenticated, isLoading, user, requiredRole, router]);

  // Mostra loading enquanto verifica autenticação
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white font-sans">
          <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
          <p>Carregando...</p>
        </div>
      </div>
    );
  }

  // Se não está autenticado ou não tem permissão, não renderiza nada
  // (o useEffect acima já está fazendo o redirect)
  if (!isAuthenticated) {
    return null;
  }

  if (requiredRole === 'super-admin' && user?.role !== 'super-admin') {
    return null;
  }

  return <>{children}</>;
}
