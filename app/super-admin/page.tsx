'use client';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { DashboardLayout } from '@/components/admin/DashboardLayout';
import { useAuth } from '@/lib/auth/AuthContext';
import { motion } from 'framer-motion';
import {
  Users,
  Shield,
  Activity,
  Database,
  Server,
  HardDrive,
  Zap,
  ArrowRight,
  TrendingUp,
  AlertCircle,
} from 'lucide-react';
import Link from 'next/link';

const SYSTEM_STATS = [
  {
    label: 'Total de Usuários',
    value: '2',
    change: 'Admin + Super Admin',
    icon: Users,
    color: 'from-blue-500/20 to-blue-600/20',
    borderColor: 'border-blue-500/30',
  },
  {
    label: 'Uptime do Sistema',
    value: '99.8%',
    change: 'Últimos 30 dias',
    icon: Activity,
    color: 'from-green-500/20 to-green-600/20',
    borderColor: 'border-green-500/30',
  },
  {
    label: 'Banco de Dados',
    value: '2.4 GB',
    change: '12% utilizado',
    icon: Database,
    color: 'from-purple-500/20 to-purple-600/20',
    borderColor: 'border-purple-500/30',
  },
  {
    label: 'Performance',
    value: 'Ótima',
    change: '< 100ms resposta',
    icon: Zap,
    color: 'from-yellow-500/20 to-yellow-600/20',
    borderColor: 'border-yellow-500/30',
  },
];

const ADMIN_ACTIONS = [
  {
    label: 'Gerenciar Usuários',
    description: 'Criar, editar e remover usuários admin',
    href: '/super-admin/users',
    icon: Users,
    color: 'bg-blue-500/10 border-blue-500/30 hover:bg-blue-500/20',
  },
  {
    label: 'Logs do Sistema',
    description: 'Ver histórico de ações e erros',
    href: '/super-admin/logs',
    icon: Server,
    color: 'bg-purple-500/10 border-purple-500/30 hover:bg-purple-500/20',
  },
  {
    label: 'Backup & Restore',
    description: 'Gerenciar backups do sistema',
    href: '/super-admin/backup',
    icon: HardDrive,
    color: 'bg-green-500/10 border-green-500/30 hover:bg-green-500/20',
  },
  {
    label: 'Configurações Avançadas',
    description: 'Configurar sistema e integrações',
    href: '/super-admin/settings',
    icon: Shield,
    color: 'bg-yellow-500/10 border-yellow-500/30 hover:bg-yellow-500/20',
  },
];

const RECENT_ACTIVITIES = [
  { id: 1, user: 'admin@academia.com', action: 'Criou evento "Campeonato Estadual"', time: 'Há 2 horas' },
  { id: 2, user: 'super@admin.com', action: 'Atualizou configurações do sistema', time: 'Há 5 horas' },
  { id: 3, user: 'admin@academia.com', action: 'Publicou novo vídeo', time: 'Há 1 dia' },
];

const ALERTS = [
  { id: 1, type: 'info', message: 'Backup automático executado com sucesso', time: 'Há 3 horas' },
  { id: 2, type: 'warning', message: 'Espaço em disco: 12% utilizado (OK)', time: 'Há 1 dia' },
];

function SuperAdminDashboard() {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-8 h-8 text-yellow-400" />
            <h1 className="text-3xl lg:text-4xl font-display font-bold">
              Super Admin Dashboard
            </h1>
          </div>
          <p className="text-white/60 font-sans">
            Controle total do sistema - <span className="text-yellow-400 font-semibold">{user?.name}</span>
          </p>
        </div>

        {/* System Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
          {SYSTEM_STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className={`relative overflow-hidden rounded-xl border ${stat.borderColor} bg-gradient-to-br ${stat.color} backdrop-blur-sm p-6`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <TrendingUp className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="text-white/60 font-sans text-sm mb-1">{stat.label}</p>
                  <p className="text-3xl font-display font-bold mb-1">{stat.value}</p>
                  <p className="text-white/50 font-sans text-xs">{stat.change}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Admin Actions */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-display font-bold mb-4">Ações de Super Admin</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ADMIN_ACTIONS.map((action) => {
              const Icon = action.icon;
              return (
                <Link
                  key={action.label}
                  href={action.href}
                  className={`flex flex-col gap-3 p-6 rounded-xl border ${action.color} transition-all group`}
                >
                  <Icon className="w-8 h-8 text-white/80 group-hover:text-white transition-colors" />
                  <div>
                    <h3 className="font-sans font-bold mb-1">{action.label}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{action.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all ml-auto" />
                </Link>
              );
            })}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activities */}
          <motion.div
            className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-display font-bold">Atividades Recentes</h2>
              <Link
                href="/super-admin/logs"
                className="text-sm text-white/60 hover:text-white transition-colors font-sans flex items-center gap-1"
              >
                Ver todos
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3">
              {RECENT_ACTIVITIES.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10"
                >
                  <Activity className="w-5 h-5 text-white/60 flex-shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-sm text-white/80">{activity.action}</p>
                    <p className="font-sans text-xs text-white/50 mt-1">{activity.user} • {activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* System Alerts */}
          <motion.div
            className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-xl font-display font-bold mb-4">Alertas do Sistema</h2>
            <div className="space-y-3">
              {ALERTS.map((alert) => (
                <div
                  key={alert.id}
                  className={`flex items-start gap-3 p-3 rounded-lg border ${
                    alert.type === 'warning'
                      ? 'bg-yellow-500/10 border-yellow-500/30'
                      : 'bg-blue-500/10 border-blue-500/30'
                  }`}
                >
                  <AlertCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                    alert.type === 'warning' ? 'text-yellow-400' : 'text-blue-400'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-sm text-white/80">{alert.message}</p>
                    <p className="font-sans text-xs text-white/50 mt-1">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default function SuperAdminPage() {
  return (
    <ProtectedRoute requiredRole="super-admin">
      <SuperAdminDashboard />
    </ProtectedRoute>
  );
}
