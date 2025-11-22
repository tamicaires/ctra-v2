'use client';

import { useState } from 'react';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { DashboardLayout } from '@/components/admin/DashboardLayout';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  Plus,
  Edit,
  Trash2,
  X,
  Check,
  Search,
  Shield,
  User,
  Mail,
  Lock,
  Calendar,
} from 'lucide-react';
import Button from '@/components/ui/Button';

interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: 'super-admin' | 'admin';
  createdAt: string;
  lastLogin: string;
}

const MOCK_USERS: AdminUser[] = [
  {
    id: '1',
    name: 'Super Administrador',
    email: 'super@admin.com',
    role: 'super-admin',
    createdAt: '2024-01-15',
    lastLogin: '2024-11-16 14:30',
  },
  {
    id: '2',
    name: 'Rodrigo Argentino',
    email: 'admin@academia.com',
    role: 'admin',
    createdAt: '2024-02-20',
    lastLogin: '2024-11-16 10:15',
  },
];

function UsersManagement() {
  const [users, setUsers] = useState<AdminUser[]>(MOCK_USERS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<AdminUser | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'admin' as 'admin' | 'super-admin',
  });

  const handleCreate = () => {
    setEditingUser(null);
    setFormData({
      name: '',
      email: '',
      password: '',
      role: 'admin',
    });
    setIsModalOpen(true);
  };

  const handleEdit = (user: AdminUser) => {
    setEditingUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      password: '', // Don't show existing password
      role: user.role,
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    const userToDelete = users.find(u => u.id === id);

    // Prevent deleting the last super-admin
    if (userToDelete?.role === 'super-admin') {
      const superAdminCount = users.filter(u => u.role === 'super-admin').length;
      if (superAdminCount <= 1) {
        alert('Não é possível deletar o último Super Admin!');
        return;
      }
    }

    if (confirm('Tem certeza que deseja deletar este usuário?')) {
      setUsers(users.filter(u => u.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingUser) {
      // Update
      setUsers(users.map(u =>
        u.id === editingUser.id
          ? {
              ...u,
              name: formData.name,
              email: formData.email,
              role: formData.role,
              // Password would be updated only if provided
            }
          : u
      ));
    } else {
      // Create
      const newUser: AdminUser = {
        id: Date.now().toString(),
        name: formData.name,
        email: formData.email,
        role: formData.role,
        createdAt: new Date().toISOString().split('T')[0],
        lastLogin: 'Nunca',
      };
      setUsers([newUser, ...users]);
    }

    setIsModalOpen(false);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getRoleBadge = (role: string) => {
    if (role === 'super-admin') {
      return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    }
    return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
  };

  const getRoleLabel = (role: string) => {
    return role === 'super-admin' ? 'Super Admin' : 'Admin';
  };

  const getRoleIcon = (role: string) => {
    return role === 'super-admin' ? Shield : User;
  };

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Shield className="w-8 h-8 text-yellow-400" />
              <h1 className="text-3xl lg:text-4xl font-display font-bold">
                Gerenciar Usuários
              </h1>
            </div>
            <p className="text-white/60 font-sans">
              Controle completo sobre admins e super-admins
            </p>
          </div>
          <Button variant="primary" size="md" onClick={handleCreate}>
            <Plus className="w-5 h-5 mr-2" />
            Novo Usuário
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm p-6">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-6 h-6 text-blue-400" />
              <p className="text-white/60 font-sans text-sm">Total de Usuários</p>
            </div>
            <p className="text-3xl font-display font-bold">{users.length}</p>
          </div>

          <div className="rounded-xl border border-yellow-500/30 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 backdrop-blur-sm p-6">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="w-6 h-6 text-yellow-400" />
              <p className="text-white/60 font-sans text-sm">Super Admins</p>
            </div>
            <p className="text-3xl font-display font-bold">
              {users.filter(u => u.role === 'super-admin').length}
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm p-6">
            <div className="flex items-center gap-3 mb-2">
              <User className="w-6 h-6 text-green-400" />
              <p className="text-white/60 font-sans text-sm">Admins</p>
            </div>
            <p className="text-3xl font-display font-bold">
              {users.filter(u => u.role === 'admin').length}
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6 max-w-md">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              placeholder="Buscar usuários..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
            />
          </div>
        </div>

        {/* Users Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredUsers.map((user, index) => {
            const RoleIcon = getRoleIcon(user.role);
            return (
              <motion.div
                key={user.id}
                className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-white/20 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {/* Role Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`text-xs font-sans px-3 py-1 rounded-full border ${getRoleBadge(user.role)}`}>
                    {getRoleLabel(user.role)}
                  </span>
                </div>

                {/* Content */}
                <div className="mb-4">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      user.role === 'super-admin'
                        ? 'bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border-2 border-yellow-500/30'
                        : 'bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-2 border-blue-500/30'
                    }`}>
                      <RoleIcon className={`w-8 h-8 ${
                        user.role === 'super-admin' ? 'text-yellow-400' : 'text-blue-400'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0 pr-24">
                      <h3 className="text-xl font-display font-bold mb-1 truncate">
                        {user.name}
                      </h3>
                      <p className="text-white/60 font-sans text-sm truncate">
                        {user.email}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm font-sans text-white/70">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-white/60" />
                      <span>Criado em: {new Date(user.createdAt).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-white/60" />
                      <span>Último acesso: {user.lastLogin}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(user)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500/20 transition-all font-sans font-semibold text-sm"
                  >
                    <Edit className="w-4 h-4" />
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 transition-all font-sans font-semibold text-sm"
                  >
                    <Trash2 className="w-4 h-4" />
                    Deletar
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredUsers.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-white/20 mx-auto mb-4" />
            <p className="text-white/60 font-sans">
              {searchQuery ? 'Nenhum usuário encontrado' : 'Nenhum usuário cadastrado ainda'}
            </p>
          </div>
        )}
      </div>

      {/* Modal Create/Edit */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-2xl bg-zinc-950 border border-white/10 rounded-2xl p-6 lg:p-8"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title */}
              <h2 className="text-2xl lg:text-3xl font-display font-bold mb-6">
                {editingUser ? 'Editar Usuário' : 'Novo Usuário'}
              </h2>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                    Nome Completo
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
                      placeholder="Ex: João Silva"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
                      placeholder="email@exemplo.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                    Senha {editingUser && <span className="text-white/50 text-xs">(deixe em branco para manter a atual)</span>}
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="password"
                      required={!editingUser}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
                      placeholder="••••••••"
                      minLength={6}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                    Nível de Acesso
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, role: 'admin' })}
                      className={`flex items-center justify-center gap-2 p-4 rounded-xl border transition-all ${
                        formData.role === 'admin'
                          ? 'bg-blue-500/20 border-blue-500/50 text-blue-400'
                          : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10'
                      }`}
                    >
                      <User className="w-5 h-5" />
                      <span className="font-sans font-semibold">Admin</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, role: 'super-admin' })}
                      className={`flex items-center justify-center gap-2 p-4 rounded-xl border transition-all ${
                        formData.role === 'super-admin'
                          ? 'bg-yellow-500/20 border-yellow-500/50 text-yellow-400'
                          : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10'
                      }`}
                    >
                      <Shield className="w-5 h-5" />
                      <span className="font-sans font-semibold">Super Admin</span>
                    </button>
                  </div>
                  <p className="text-white/50 font-sans text-xs mt-2">
                    {formData.role === 'super-admin'
                      ? 'Acesso completo ao sistema, incluindo gerenciamento de usuários'
                      : 'Acesso a eventos, vídeos e conteúdo da academia'}
                  </p>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 transition-all font-sans font-semibold"
                  >
                    Cancelar
                  </button>
                  <Button type="submit" variant="primary" size="lg" className="flex-1">
                    <Check className="w-5 h-5 mr-2" />
                    {editingUser ? 'Salvar' : 'Criar'}
                  </Button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </DashboardLayout>
  );
}

export default function UsersPage() {
  return (
    <ProtectedRoute requiredRole="super-admin">
      <UsersManagement />
    </ProtectedRoute>
  );
}
