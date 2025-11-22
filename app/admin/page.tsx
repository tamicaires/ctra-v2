'use client';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { DashboardLayout } from '@/components/admin/DashboardLayout';
import { useAuth } from '@/lib/auth/AuthContext';
import { motion } from 'framer-motion';
import {
  Calendar,
  Users,
  Video,
  TrendingUp,
  Clock,
  Eye,
  Award,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

const STATS = [
  {
    label: 'Eventos Ativos',
    value: '12',
    change: '+3 este mês',
    icon: Calendar,
    color: 'from-blue-500/20 to-blue-600/20',
    borderColor: 'border-blue-500/30',
  },
  {
    label: 'Total de Alunos',
    value: '380',
    change: '+24 este mês',
    icon: Users,
    color: 'from-green-500/20 to-green-600/20',
    borderColor: 'border-green-500/30',
  },
  {
    label: 'Vídeos Publicados',
    value: '48',
    change: '+5 esta semana',
    icon: Video,
    color: 'from-purple-500/20 to-purple-600/20',
    borderColor: 'border-purple-500/30',
  },
  {
    label: 'Visualizações',
    value: '12.5k',
    change: '+18% vs último mês',
    icon: Eye,
    color: 'from-yellow-500/20 to-yellow-600/20',
    borderColor: 'border-yellow-500/30',
  },
];

const RECENT_EVENTS = [
  { id: 1, title: 'Campeonato Estadual', date: '25 Nov 2024', status: 'Próximo' },
  { id: 2, title: 'Treino Especial Kids', date: '20 Nov 2024', status: 'Em andamento' },
  { id: 3, title: 'Workshop de Defesa', date: '15 Nov 2024', status: 'Concluído' },
];

const QUICK_ACTIONS = [
  {
    label: 'Criar Evento',
    href: '/admin/events',
    icon: Calendar,
    color: 'bg-blue-500/10 border-blue-500/30 hover:bg-blue-500/20',
  },
  {
    label: 'Upload Vídeo',
    href: '/admin/videos',
    icon: Video,
    color: 'bg-purple-500/10 border-purple-500/30 hover:bg-purple-500/20',
  },
  {
    label: 'Gerenciar Alunos',
    href: '/admin/students',
    icon: Users,
    color: 'bg-green-500/10 border-green-500/30 hover:bg-green-500/20',
  },
  {
    label: 'Configurações',
    href: '/admin/settings',
    icon: Award,
    color: 'bg-yellow-500/10 border-yellow-500/30 hover:bg-yellow-500/20',
  },
];

function AdminDashboard() {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-display font-bold mb-2">
            Dashboard
          </h1>
          <p className="text-white/60 font-sans">
            Bem-vindo de volta, <span className="text-white font-semibold">{user?.name}</span>
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
          {STATS.map((stat, index) => {
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Recent Events */}
          <motion.div
            className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-display font-bold">Eventos Recentes</h2>
              <Link
                href="/admin/events"
                className="text-sm text-white/60 hover:text-white transition-colors font-sans flex items-center gap-1"
              >
                Ver todos
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3">
              {RECENT_EVENTS.map((event) => (
                <div
                  key={event.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10"
                >
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-white/60" />
                    <div>
                      <p className="font-sans font-semibold text-sm">{event.title}</p>
                      <p className="font-sans text-xs text-white/60">{event.date}</p>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-sans px-2 py-1 rounded-full ${
                      event.status === 'Próximo'
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        : event.status === 'Em andamento'
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-white/10 text-white/60 border border-white/20'
                    }`}
                  >
                    {event.status}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-xl font-display font-bold mb-4">Ações Rápidas</h2>
            <div className="grid grid-cols-2 gap-3">
              {QUICK_ACTIONS.map((action) => {
                const Icon = action.icon;
                return (
                  <Link
                    key={action.label}
                    href={action.href}
                    className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border ${action.color} transition-all group`}
                  >
                    <Icon className="w-6 h-6 text-white/80 group-hover:text-white transition-colors" />
                    <span className="text-sm font-sans font-semibold text-center">
                      {action.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default function AdminPage() {
  return (
    <ProtectedRoute>
      <AdminDashboard />
    </ProtectedRoute>
  );
}
