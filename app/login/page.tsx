'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Lock, LogIn, AlertCircle } from 'lucide-react';
import { useAuth } from '@/lib/auth/AuthContext';
import Button from '@/components/ui/Button';

export default function LoginPage() {
  const router = useRouter();
  const { login, isAuthenticated, user } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Redirect se já está autenticado
  useEffect(() => {
    if (isAuthenticated && user) {
      if (user.role === 'super-admin') {
        router.push('/super-admin');
      } else {
        router.push('/admin');
      }
    }
  }, [isAuthenticated, user, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const success = await login(email, password);

      if (success) {
        // O redirect acontecerá pelo useEffect acima
      } else {
        setError('Email ou senha incorretos');
      }
    } catch (err) {
      setError('Erro ao fazer login. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Radial Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/[0.015] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/[0.015] rounded-full blur-[120px]" />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Card */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md p-8 lg:p-10">
          {/* Glow effect */}
          <div className="absolute inset-0 opacity-30"
            style={{ boxShadow: 'inset 0 0 60px rgba(255, 255, 255, 0.05)' }}
          />

          <div className="relative z-10">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <div className="rounded-full bg-white p-1 flex items-center justify-center w-20 h-20"
                style={{ boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)' }}>
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
            </div>

            {/* Title */}
            <div className="text-center mb-8">
              <h1 className="text-3xl lg:text-4xl font-display font-bold uppercase mb-2">
                Admin Login
              </h1>
              <p className="text-white/60 font-sans text-sm">
                Acesse o painel administrativo
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                  Senha
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
                  />
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <motion.div
                  className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/30"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <p className="text-red-400 font-sans text-sm">{error}</p>
                </motion.div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                    <span>Entrando...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <LogIn className="w-5 h-5" />
                    <span>Entrar</span>
                  </div>
                )}
              </Button>
            </form>

            {/* Demo Credentials */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-white/60 font-sans text-xs text-center mb-3">
                Credenciais de demonstração:
              </p>
              <div className="space-y-2 text-xs font-sans">
                <div className="p-2 rounded bg-white/5 border border-white/10">
                  <p className="text-white/80 font-semibold">Super Admin:</p>
                  <p className="text-white/60">super@admin.com / super123</p>
                </div>
                <div className="p-2 rounded bg-white/5 border border-white/10">
                  <p className="text-white/80 font-semibold">Admin:</p>
                  <p className="text-white/60">admin@academia.com / admin123</p>
                </div>
              </div>
            </div>

            {/* Back to Home */}
            <div className="mt-6 text-center">
              <a
                href="/"
                className="text-white/60 hover:text-white transition-colors font-sans text-sm"
              >
                ← Voltar para o site
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
