'use client';

import { useState } from 'react';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { DashboardLayout } from '@/components/admin/DashboardLayout';
import { motion } from 'framer-motion';
import {
  Server,
  Search,
  Filter,
  Download,
  AlertCircle,
  Info,
  CheckCircle,
  XCircle,
  Calendar,
  User,
  Activity,
  RefreshCw,
} from 'lucide-react';
import Button from '@/components/ui/Button';

interface LogEntry {
  id: string;
  timestamp: string;
  level: 'info' | 'warning' | 'error' | 'success';
  action: string;
  user: string;
  details: string;
  ip: string;
}

const MOCK_LOGS: LogEntry[] = [
  {
    id: '1',
    timestamp: '2024-11-16 14:32:15',
    level: 'success',
    action: 'LOGIN',
    user: 'super@admin.com',
    details: 'Login realizado com sucesso',
    ip: '192.168.1.100',
  },
  {
    id: '2',
    timestamp: '2024-11-16 14:28:42',
    level: 'info',
    action: 'EVENT_CREATED',
    user: 'admin@academia.com',
    details: 'Criou evento "Campeonato Estadual"',
    ip: '192.168.1.105',
  },
  {
    id: '3',
    timestamp: '2024-11-16 14:15:30',
    level: 'warning',
    action: 'FAILED_LOGIN',
    user: 'unknown@test.com',
    details: 'Tentativa de login com credenciais inválidas',
    ip: '203.0.113.42',
  },
  {
    id: '4',
    timestamp: '2024-11-16 13:45:12',
    level: 'info',
    action: 'VIDEO_UPLOAD',
    user: 'admin@academia.com',
    details: 'Upload de vídeo "Técnica de Chute Circular"',
    ip: '192.168.1.105',
  },
  {
    id: '5',
    timestamp: '2024-11-16 12:20:05',
    level: 'error',
    action: 'DATABASE_ERROR',
    user: 'system',
    details: 'Erro ao conectar com banco de dados (recuperado automaticamente)',
    ip: 'localhost',
  },
  {
    id: '6',
    timestamp: '2024-11-16 11:15:33',
    level: 'success',
    action: 'USER_CREATED',
    user: 'super@admin.com',
    details: 'Criou novo usuário admin',
    ip: '192.168.1.100',
  },
  {
    id: '7',
    timestamp: '2024-11-16 10:30:22',
    level: 'info',
    action: 'CONTENT_PUBLISHED',
    user: 'admin@academia.com',
    details: 'Publicou artigo "Benefícios do Muay Thai"',
    ip: '192.168.1.105',
  },
  {
    id: '8',
    timestamp: '2024-11-16 09:45:18',
    level: 'warning',
    action: 'STORAGE_WARNING',
    user: 'system',
    details: 'Espaço em disco: 75% utilizado',
    ip: 'localhost',
  },
];

const LOG_LEVELS = [
  { value: 'all', label: 'Todos', icon: Activity },
  { value: 'info', label: 'Info', icon: Info },
  { value: 'success', label: 'Success', icon: CheckCircle },
  { value: 'warning', label: 'Warning', icon: AlertCircle },
  { value: 'error', label: 'Error', icon: XCircle },
];

function SystemLogs() {
  const [logs, setLogs] = useState<LogEntry[]>(MOCK_LOGS);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterLevel, setFilterLevel] = useState<string>('all');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulate refresh
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  const handleExport = () => {
    // Simulate export
    const dataStr = JSON.stringify(filteredLogs, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `system-logs-${new Date().toISOString()}.json`;
    link.click();
  };

  const filteredLogs = logs.filter(log => {
    const matchesSearch = log.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         log.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         log.details.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = filterLevel === 'all' || log.level === filterLevel;
    return matchesSearch && matchesLevel;
  });

  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'info': return Info;
      case 'warning': return AlertCircle;
      case 'error': return XCircle;
      case 'success': return CheckCircle;
      default: return Activity;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'info': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'warning': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'error': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'success': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-white/10 text-white/60 border-white/20';
    }
  };

  const getLogStats = () => {
    return {
      total: logs.length,
      info: logs.filter(l => l.level === 'info').length,
      success: logs.filter(l => l.level === 'success').length,
      warning: logs.filter(l => l.level === 'warning').length,
      error: logs.filter(l => l.level === 'error').length,
    };
  };

  const stats = getLogStats();

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Server className="w-8 h-8 text-purple-400" />
              <h1 className="text-3xl lg:text-4xl font-display font-bold">
                Logs do Sistema
              </h1>
            </div>
            <p className="text-white/60 font-sans">
              Monitore atividades e eventos do sistema
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="secondary"
              size="md"
              onClick={handleRefresh}
              disabled={isRefreshing}
            >
              <RefreshCw className={`w-5 h-5 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
              Atualizar
            </Button>
            <Button variant="primary" size="md" onClick={handleExport}>
              <Download className="w-5 h-5 mr-2" />
              Exportar
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-4">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-5 h-5 text-white/60" />
              <p className="text-white/60 font-sans text-xs">Total</p>
            </div>
            <p className="text-2xl font-display font-bold">{stats.total}</p>
          </div>

          <div className="rounded-xl border border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm p-4">
            <div className="flex items-center gap-2 mb-2">
              <Info className="w-5 h-5 text-blue-400" />
              <p className="text-white/60 font-sans text-xs">Info</p>
            </div>
            <p className="text-2xl font-display font-bold">{stats.info}</p>
          </div>

          <div className="rounded-xl border border-green-500/30 bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <p className="text-white/60 font-sans text-xs">Success</p>
            </div>
            <p className="text-2xl font-display font-bold">{stats.success}</p>
          </div>

          <div className="rounded-xl border border-yellow-500/30 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 backdrop-blur-sm p-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-5 h-5 text-yellow-400" />
              <p className="text-white/60 font-sans text-xs">Warning</p>
            </div>
            <p className="text-2xl font-display font-bold">{stats.warning}</p>
          </div>

          <div className="rounded-xl border border-red-500/30 bg-gradient-to-br from-red-500/20 to-red-600/20 backdrop-blur-sm p-4">
            <div className="flex items-center gap-2 mb-2">
              <XCircle className="w-5 h-5 text-red-400" />
              <p className="text-white/60 font-sans text-xs">Error</p>
            </div>
            <p className="text-2xl font-display font-bold">{stats.error}</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          {/* Search */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Buscar em logs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
              />
            </div>
          </div>

          {/* Level Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {LOG_LEVELS.map(level => {
              const Icon = level.icon;
              return (
                <button
                  key={level.value}
                  onClick={() => setFilterLevel(level.value)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-sans font-semibold text-sm whitespace-nowrap transition-all ${
                    filterLevel === level.value
                      ? 'bg-white/20 text-white border border-white/30'
                      : 'bg-white/5 text-white/60 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {level.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Logs List */}
        <div className="space-y-3">
          {filteredLogs.map((log, index) => {
            const LevelIcon = getLevelIcon(log.level);
            return (
              <motion.div
                key={log.id}
                className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 hover:border-white/20 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.02 }}
              >
                <div className="flex items-start gap-4">
                  {/* Level Icon */}
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${getLevelColor(log.level).replace('text-', 'bg-').replace('/20', '/10')}`}>
                    <LevelIcon className={`w-5 h-5 ${getLevelColor(log.level).split(' ')[1]}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-xs font-sans px-2 py-1 rounded-full border ${getLevelColor(log.level)}`}>
                          {log.level.toUpperCase()}
                        </span>
                        <span className="font-sans font-bold text-sm">
                          {log.action}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-white/50 font-sans text-xs whitespace-nowrap">
                        <Calendar className="w-3 h-3" />
                        <span>{log.timestamp}</span>
                      </div>
                    </div>

                    <p className="text-white/80 font-sans text-sm mb-3">
                      {log.details}
                    </p>

                    <div className="flex items-center gap-4 text-xs font-sans text-white/50">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{log.user}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Server className="w-3 h-3" />
                        <span>{log.ip}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredLogs.length === 0 && (
          <div className="text-center py-12">
            <Server className="w-16 h-16 text-white/20 mx-auto mb-4" />
            <p className="text-white/60 font-sans">
              {searchQuery || filterLevel !== 'all' ? 'Nenhum log encontrado' : 'Nenhum log registrado'}
            </p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

export default function LogsPage() {
  return (
    <ProtectedRoute requiredRole="super-admin">
      <SystemLogs />
    </ProtectedRoute>
  );
}
