'use client';

import { useState } from 'react';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { DashboardLayout } from '@/components/admin/DashboardLayout';
import { motion } from 'framer-motion';
import {
  HardDrive,
  Download,
  Upload,
  RefreshCw,
  Check,
  AlertCircle,
  Calendar,
  Database,
  Archive,
  Trash2,
  Clock,
} from 'lucide-react';
import Button from '@/components/ui/Button';

interface BackupItem {
  id: string;
  name: string;
  size: string;
  createdAt: string;
  type: 'auto' | 'manual';
  status: 'completed' | 'in-progress' | 'failed';
}

const MOCK_BACKUPS: BackupItem[] = [
  {
    id: '1',
    name: 'backup-2024-11-16-auto.sql',
    size: '245 MB',
    createdAt: '2024-11-16 03:00:00',
    type: 'auto',
    status: 'completed',
  },
  {
    id: '2',
    name: 'backup-2024-11-15-manual.sql',
    size: '243 MB',
    createdAt: '2024-11-15 14:30:22',
    type: 'manual',
    status: 'completed',
  },
  {
    id: '3',
    name: 'backup-2024-11-15-auto.sql',
    size: '242 MB',
    createdAt: '2024-11-15 03:00:00',
    type: 'auto',
    status: 'completed',
  },
  {
    id: '4',
    name: 'backup-2024-11-14-auto.sql',
    size: '240 MB',
    createdAt: '2024-11-14 03:00:00',
    type: 'auto',
    status: 'completed',
  },
  {
    id: '5',
    name: 'backup-2024-11-13-auto.sql',
    size: '238 MB',
    createdAt: '2024-11-13 03:00:00',
    type: 'auto',
    status: 'completed',
  },
];

function BackupManagement() {
  const [backups, setBackups] = useState<BackupItem[]>(MOCK_BACKUPS);
  const [isCreating, setIsCreating] = useState(false);
  const [isRestoring, setIsRestoring] = useState(false);
  const [autoBackupEnabled, setAutoBackupEnabled] = useState(true);
  const [backupFrequency, setBackupFrequency] = useState('daily');

  const handleCreateBackup = () => {
    setIsCreating(true);

    // Simulate backup creation
    setTimeout(() => {
      const newBackup: BackupItem = {
        id: Date.now().toString(),
        name: `backup-${new Date().toISOString().split('T')[0]}-manual.sql`,
        size: '245 MB',
        createdAt: new Date().toISOString().replace('T', ' ').split('.')[0],
        type: 'manual',
        status: 'completed',
      };
      setBackups([newBackup, ...backups]);
      setIsCreating(false);
    }, 3000);
  };

  const handleDownload = (backup: BackupItem) => {
    // Simulate download
    alert(`Downloading: ${backup.name}`);
  };

  const handleRestore = (backup: BackupItem) => {
    if (confirm(`Tem certeza que deseja restaurar o backup "${backup.name}"? Esta ação substituirá todos os dados atuais.`)) {
      setIsRestoring(true);

      // Simulate restore
      setTimeout(() => {
        setIsRestoring(false);
        alert('Backup restaurado com sucesso!');
      }, 3000);
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('Tem certeza que deseja deletar este backup?')) {
      setBackups(backups.filter(b => b.id !== id));
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'in-progress': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'failed': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-white/10 text-white/60 border-white/20';
    }
  };

  const getTypeColor = (type: string) => {
    return type === 'auto'
      ? 'bg-purple-500/20 text-purple-400 border-purple-500/30'
      : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
  };

  const getTotalSize = () => {
    return backups.reduce((sum, b) => {
      const size = parseFloat(b.size.split(' ')[0]);
      return sum + size;
    }, 0).toFixed(0);
  };

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <HardDrive className="w-8 h-8 text-green-400" />
              <h1 className="text-3xl lg:text-4xl font-display font-bold">
                Backup & Restore
              </h1>
            </div>
            <p className="text-white/60 font-sans">
              Gerencie backups e restaure dados do sistema
            </p>
          </div>
          <Button
            variant="primary"
            size="md"
            onClick={handleCreateBackup}
            disabled={isCreating}
          >
            {isCreating ? (
              <>
                <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                Criando...
              </>
            ) : (
              <>
                <Archive className="w-5 h-5 mr-2" />
                Criar Backup Manual
              </>
            )}
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm p-6">
            <div className="flex items-center gap-3 mb-2">
              <Database className="w-6 h-6 text-green-400" />
              <p className="text-white/60 font-sans text-sm">Total de Backups</p>
            </div>
            <p className="text-3xl font-display font-bold">{backups.length}</p>
          </div>

          <div className="rounded-xl border border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm p-6">
            <div className="flex items-center gap-3 mb-2">
              <HardDrive className="w-6 h-6 text-blue-400" />
              <p className="text-white/60 font-sans text-sm">Espaço Total</p>
            </div>
            <p className="text-3xl font-display font-bold">{getTotalSize()} MB</p>
          </div>

          <div className="rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm p-6">
            <div className="flex items-center gap-3 mb-2">
              <RefreshCw className="w-6 h-6 text-purple-400" />
              <p className="text-white/60 font-sans text-sm">Backups Automáticos</p>
            </div>
            <p className="text-3xl font-display font-bold">
              {backups.filter(b => b.type === 'auto').length}
            </p>
          </div>

          <div className="rounded-xl border border-yellow-500/30 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 backdrop-blur-sm p-6">
            <div className="flex items-center gap-3 mb-2">
              <Archive className="w-6 h-6 text-yellow-400" />
              <p className="text-white/60 font-sans text-sm">Backups Manuais</p>
            </div>
            <p className="text-3xl font-display font-bold">
              {backups.filter(b => b.type === 'manual').length}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Auto Backup Settings */}
          <motion.div
            className="lg:col-span-1 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <RefreshCw className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h2 className="text-xl font-display font-bold">Backup Automático</h2>
                <p className="text-white/60 font-sans text-sm">
                  Configurações de backup
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <label className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition-all">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-white/60" />
                  <div>
                    <p className="font-sans font-semibold text-sm">Ativar backup automático</p>
                    <p className="text-xs text-white/50">Backup diário às 03:00</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={autoBackupEnabled}
                  onChange={(e) => setAutoBackupEnabled(e.target.checked)}
                  className="w-5 h-5 rounded bg-white/10 border-white/20 text-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0"
                />
              </label>

              <div>
                <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                  Frequência
                </label>
                <select
                  value={backupFrequency}
                  onChange={(e) => setBackupFrequency(e.target.value)}
                  disabled={!autoBackupEnabled}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-all font-sans disabled:opacity-50"
                >
                  <option value="hourly">A cada hora</option>
                  <option value="daily">Diariamente</option>
                  <option value="weekly">Semanalmente</option>
                  <option value="monthly">Mensalmente</option>
                </select>
              </div>

              <div className="pt-2">
                <Button variant="primary" size="md" className="w-full" disabled={!autoBackupEnabled}>
                  <Check className="w-5 h-5 mr-2" />
                  Salvar Configurações
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Backup List */}
          <motion.div
            className="lg:col-span-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-display font-bold mb-6">Backups Disponíveis</h2>

            <div className="space-y-3">
              {backups.map((backup, index) => (
                <motion.div
                  key={backup.id}
                  className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 hover:border-white/20 transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                        <Database className="w-6 h-6 text-white/60" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-xs font-sans px-2 py-1 rounded-full border ${getTypeColor(backup.type)}`}>
                            {backup.type === 'auto' ? 'Automático' : 'Manual'}
                          </span>
                          <span className={`text-xs font-sans px-2 py-1 rounded-full border ${getStatusColor(backup.status)}`}>
                            {backup.status === 'completed' ? 'Completo' : backup.status}
                          </span>
                        </div>

                        <h3 className="font-sans font-semibold text-sm mb-1 truncate">
                          {backup.name}
                        </h3>

                        <div className="flex items-center gap-4 text-xs font-sans text-white/50">
                          <div className="flex items-center gap-1">
                            <HardDrive className="w-3 h-3" />
                            <span>{backup.size}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{new Date(backup.createdAt).toLocaleString('pt-BR')}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 flex-shrink-0">
                      <button
                        onClick={() => handleDownload(backup)}
                        className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500/20 transition-all"
                        title="Download"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleRestore(backup)}
                        disabled={isRestoring}
                        className="p-2 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500/20 transition-all disabled:opacity-50"
                        title="Restaurar"
                      >
                        <Upload className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(backup.id)}
                        className="p-2 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 transition-all"
                        title="Deletar"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {backups.length === 0 && (
              <div className="text-center py-12">
                <Database className="w-16 h-16 text-white/20 mx-auto mb-4" />
                <p className="text-white/60 font-sans">
                  Nenhum backup disponível
                </p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Info Box */}
        <motion.div
          className="rounded-xl border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg mb-2">Importante</h3>
              <ul className="space-y-2 text-white/80 font-sans text-sm">
                <li>• Backups automáticos são criados diariamente às 03:00 AM</li>
                <li>• Recomendamos manter pelo menos 7 backups recentes</li>
                <li>• Faça backups manuais antes de grandes atualizações</li>
                <li>• Backups mais antigos que 30 dias são automaticamente removidos</li>
                <li>• Restaurar um backup substituirá todos os dados atuais</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}

export default function BackupPage() {
  return (
    <ProtectedRoute requiredRole="super-admin">
      <BackupManagement />
    </ProtectedRoute>
  );
}
