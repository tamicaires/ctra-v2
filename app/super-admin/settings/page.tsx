'use client';

import { useState } from 'react';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { DashboardLayout } from '@/components/admin/DashboardLayout';
import { motion } from 'framer-motion';
import {
  Settings,
  Shield,
  Database,
  Globe,
  Zap,
  Lock,
  Mail,
  Server,
  Code,
  Save,
  Check,
  AlertTriangle,
} from 'lucide-react';
import Button from '@/components/ui/Button';

function AdvancedSettings() {
  const [saved, setSaved] = useState(false);

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    sessionTimeout: '30',
    maxLoginAttempts: '5',
    passwordMinLength: '8',
    requireSpecialChars: true,
  });

  const [databaseSettings, setDatabaseSettings] = useState({
    host: 'localhost',
    port: '5432',
    name: 'ctra_db',
    maxConnections: '100',
    connectionTimeout: '30',
  });

  const [emailSettings, setEmailSettings] = useState({
    smtpHost: 'smtp.gmail.com',
    smtpPort: '587',
    smtpUser: 'contato@ctra.com.br',
    smtpPassword: '••••••••',
    fromEmail: 'noreply@ctra.com.br',
    fromName: 'CTRA Academia',
  });

  const [apiSettings, setApiSettings] = useState({
    rateLimit: '100',
    rateLimitWindow: '60',
    enableCors: true,
    corsOrigins: 'https://ctra.com.br',
    apiVersion: 'v1',
  });

  const [performanceSettings, setPerformanceSettings] = useState({
    cacheEnabled: true,
    cacheTtl: '3600',
    compressionEnabled: true,
    logLevel: 'info',
    maxUploadSize: '50',
  });

  const handleSaveSecurity = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleSaveDatabase = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleSaveEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleSaveApi = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleSavePerformance = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-8 h-8 text-yellow-400" />
            <h1 className="text-3xl lg:text-4xl font-display font-bold">
              Configurações Avançadas
            </h1>
          </div>
          <p className="text-white/60 font-sans">
            Configurações técnicas e de sistema (apenas Super-Admin)
          </p>
        </div>

        {/* Success Toast */}
        {saved && (
          <motion.div
            className="fixed top-4 right-4 z-50 flex items-center gap-3 px-6 py-4 bg-green-500/20 border border-green-500/30 rounded-xl backdrop-blur-md"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
          >
            <Check className="w-5 h-5 text-green-400" />
            <p className="text-green-400 font-sans font-semibold">
              Configurações salvas com sucesso!
            </p>
          </motion.div>
        )}

        {/* Warning */}
        <motion.div
          className="rounded-xl border border-yellow-500/30 bg-yellow-500/10 backdrop-blur-sm p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-yellow-400" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg mb-2 text-yellow-400">Atenção</h3>
              <p className="text-white/80 font-sans text-sm">
                Estas configurações afetam o funcionamento do sistema. Alterações incorretas podem causar instabilidade ou interrupção do serviço. Tenha cuidado ao modificar.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="space-y-6">
          {/* Security Settings */}
          <motion.div
            className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center">
                <Lock className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h2 className="text-xl font-display font-bold">Segurança</h2>
                <p className="text-white/60 font-sans text-sm">
                  Configurações de autenticação e proteção
                </p>
              </div>
            </div>

            <form onSubmit={handleSaveSecurity} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                    Timeout de Sessão (minutos)
                  </label>
                  <input
                    type="number"
                    value={securitySettings.sessionTimeout}
                    onChange={(e) => setSecuritySettings({ ...securitySettings, sessionTimeout: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
                  />
                </div>

                <div>
                  <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                    Máx. Tentativas de Login
                  </label>
                  <input
                    type="number"
                    value={securitySettings.maxLoginAttempts}
                    onChange={(e) => setSecuritySettings({ ...securitySettings, maxLoginAttempts: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
                  />
                </div>

                <div>
                  <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                    Tamanho Mín. de Senha
                  </label>
                  <input
                    type="number"
                    value={securitySettings.passwordMinLength}
                    onChange={(e) => setSecuritySettings({ ...securitySettings, passwordMinLength: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
                  />
                </div>

                <div className="flex items-center">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={securitySettings.requireSpecialChars}
                      onChange={(e) => setSecuritySettings({ ...securitySettings, requireSpecialChars: e.target.checked })}
                      className="w-5 h-5 rounded bg-white/10 border-white/20 text-blue-500"
                    />
                    <span className="text-white/80 font-sans font-semibold text-sm">
                      Exigir caracteres especiais
                    </span>
                  </label>
                </div>
              </div>

              <Button type="submit" variant="primary" size="md">
                <Save className="w-5 h-5 mr-2" />
                Salvar Segurança
              </Button>
            </form>
          </motion.div>

          {/* Database Settings */}
          <motion.div
            className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <Database className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h2 className="text-xl font-display font-bold">Banco de Dados</h2>
                <p className="text-white/60 font-sans text-sm">
                  Configurações de conexão e performance
                </p>
              </div>
            </div>

            <form onSubmit={handleSaveDatabase} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                    Host
                  </label>
                  <input
                    type="text"
                    value={databaseSettings.host}
                    onChange={(e) => setDatabaseSettings({ ...databaseSettings, host: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
                  />
                </div>

                <div>
                  <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                    Porta
                  </label>
                  <input
                    type="text"
                    value={databaseSettings.port}
                    onChange={(e) => setDatabaseSettings({ ...databaseSettings, port: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
                  />
                </div>

                <div>
                  <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                    Nome do Banco
                  </label>
                  <input
                    type="text"
                    value={databaseSettings.name}
                    onChange={(e) => setDatabaseSettings({ ...databaseSettings, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
                  />
                </div>

                <div>
                  <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                    Máx. Conexões
                  </label>
                  <input
                    type="number"
                    value={databaseSettings.maxConnections}
                    onChange={(e) => setDatabaseSettings({ ...databaseSettings, maxConnections: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
                  />
                </div>
              </div>

              <Button type="submit" variant="primary" size="md">
                <Save className="w-5 h-5 mr-2" />
                Salvar Banco de Dados
              </Button>
            </form>
          </motion.div>

          {/* Email Settings */}
          <motion.div
            className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-xl font-display font-bold">Email (SMTP)</h2>
                <p className="text-white/60 font-sans text-sm">
                  Configurações de envio de emails
                </p>
              </div>
            </div>

            <form onSubmit={handleSaveEmail} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                    SMTP Host
                  </label>
                  <input
                    type="text"
                    value={emailSettings.smtpHost}
                    onChange={(e) => setEmailSettings({ ...emailSettings, smtpHost: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
                  />
                </div>

                <div>
                  <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                    SMTP Porta
                  </label>
                  <input
                    type="text"
                    value={emailSettings.smtpPort}
                    onChange={(e) => setEmailSettings({ ...emailSettings, smtpPort: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
                  />
                </div>

                <div>
                  <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                    SMTP Usuário
                  </label>
                  <input
                    type="text"
                    value={emailSettings.smtpUser}
                    onChange={(e) => setEmailSettings({ ...emailSettings, smtpUser: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
                  />
                </div>

                <div>
                  <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                    SMTP Senha
                  </label>
                  <input
                    type="password"
                    value={emailSettings.smtpPassword}
                    onChange={(e) => setEmailSettings({ ...emailSettings, smtpPassword: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
                  />
                </div>

                <div>
                  <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                    Email Remetente
                  </label>
                  <input
                    type="email"
                    value={emailSettings.fromEmail}
                    onChange={(e) => setEmailSettings({ ...emailSettings, fromEmail: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
                  />
                </div>

                <div>
                  <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                    Nome Remetente
                  </label>
                  <input
                    type="text"
                    value={emailSettings.fromName}
                    onChange={(e) => setEmailSettings({ ...emailSettings, fromName: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
                  />
                </div>
              </div>

              <Button type="submit" variant="primary" size="md">
                <Save className="w-5 h-5 mr-2" />
                Salvar Email
              </Button>
            </form>
          </motion.div>

          {/* API Settings */}
          <motion.div
            className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
                <Code className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h2 className="text-xl font-display font-bold">API</h2>
                <p className="text-white/60 font-sans text-sm">
                  Configurações de API e CORS
                </p>
              </div>
            </div>

            <form onSubmit={handleSaveApi} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                    Rate Limit (requisições)
                  </label>
                  <input
                    type="number"
                    value={apiSettings.rateLimit}
                    onChange={(e) => setApiSettings({ ...apiSettings, rateLimit: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
                  />
                </div>

                <div>
                  <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                    Janela (segundos)
                  </label>
                  <input
                    type="number"
                    value={apiSettings.rateLimitWindow}
                    onChange={(e) => setApiSettings({ ...apiSettings, rateLimitWindow: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
                  />
                </div>

                <div>
                  <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                    Versão da API
                  </label>
                  <select
                    value={apiSettings.apiVersion}
                    onChange={(e) => setApiSettings({ ...apiSettings, apiVersion: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-all font-sans"
                  >
                    <option value="v1">v1</option>
                    <option value="v2">v2 (beta)</option>
                  </select>
                </div>

                <div className="flex items-center">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={apiSettings.enableCors}
                      onChange={(e) => setApiSettings({ ...apiSettings, enableCors: e.target.checked })}
                      className="w-5 h-5 rounded bg-white/10 border-white/20 text-blue-500"
                    />
                    <span className="text-white/80 font-sans font-semibold text-sm">
                      Habilitar CORS
                    </span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                  Origens CORS (separadas por vírgula)
                </label>
                <input
                  type="text"
                  value={apiSettings.corsOrigins}
                  onChange={(e) => setApiSettings({ ...apiSettings, corsOrigins: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
                  placeholder="https://exemplo.com, https://app.exemplo.com"
                />
              </div>

              <Button type="submit" variant="primary" size="md">
                <Save className="w-5 h-5 mr-2" />
                Salvar API
              </Button>
            </form>
          </motion.div>

          {/* Performance Settings */}
          <motion.div
            className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h2 className="text-xl font-display font-bold">Performance</h2>
                <p className="text-white/60 font-sans text-sm">
                  Otimizações e cache
                </p>
              </div>
            </div>

            <form onSubmit={handleSavePerformance} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                    Cache TTL (segundos)
                  </label>
                  <input
                    type="number"
                    value={performanceSettings.cacheTtl}
                    onChange={(e) => setPerformanceSettings({ ...performanceSettings, cacheTtl: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
                  />
                </div>

                <div>
                  <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                    Máx. Upload (MB)
                  </label>
                  <input
                    type="number"
                    value={performanceSettings.maxUploadSize}
                    onChange={(e) => setPerformanceSettings({ ...performanceSettings, maxUploadSize: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
                  />
                </div>

                <div>
                  <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                    Nível de Log
                  </label>
                  <select
                    value={performanceSettings.logLevel}
                    onChange={(e) => setPerformanceSettings({ ...performanceSettings, logLevel: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-all font-sans"
                  >
                    <option value="error">Error</option>
                    <option value="warn">Warning</option>
                    <option value="info">Info</option>
                    <option value="debug">Debug</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={performanceSettings.cacheEnabled}
                      onChange={(e) => setPerformanceSettings({ ...performanceSettings, cacheEnabled: e.target.checked })}
                      className="w-5 h-5 rounded bg-white/10 border-white/20 text-blue-500"
                    />
                    <span className="text-white/80 font-sans font-semibold text-sm">
                      Habilitar Cache
                    </span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={performanceSettings.compressionEnabled}
                      onChange={(e) => setPerformanceSettings({ ...performanceSettings, compressionEnabled: e.target.checked })}
                      className="w-5 h-5 rounded bg-white/10 border-white/20 text-blue-500"
                    />
                    <span className="text-white/80 font-sans font-semibold text-sm">
                      Habilitar Compressão
                    </span>
                  </label>
                </div>
              </div>

              <Button type="submit" variant="primary" size="md">
                <Save className="w-5 h-5 mr-2" />
                Salvar Performance
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default function SuperAdminSettings() {
  return (
    <ProtectedRoute requiredRole="super-admin">
      <AdvancedSettings />
    </ProtectedRoute>
  );
}
