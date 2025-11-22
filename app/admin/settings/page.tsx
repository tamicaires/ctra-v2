'use client';

import { useState } from 'react';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { DashboardLayout } from '@/components/admin/DashboardLayout';
import { motion } from 'framer-motion';
import {
  Settings,
  User,
  Bell,
  Globe,
  Lock,
  Palette,
  Save,
  Mail,
  Phone,
  MapPin,
  Clock,
  Check,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import { useAuth } from '@/lib/auth/AuthContext';

function SettingsPage() {
  const { user } = useAuth();
  const [saved, setSaved] = useState(false);

  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '(11) 98765-4321',
    bio: 'Instrutor de Muay Thai e Jiu-Jitsu',
  });

  const [academyData, setAcademyData] = useState({
    name: 'CTRA - Rodrigo Argentino',
    address: 'Rua Exemplo, 123 - São Paulo, SP',
    phone: '(11) 1234-5678',
    email: 'contato@ctra.com.br',
    website: 'https://ctra.com.br',
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    newEvents: true,
    newStudents: true,
    systemUpdates: false,
  });

  const [scheduleSettings, setScheduleSettings] = useState({
    weekdayStart: '06:00',
    weekdayEnd: '22:00',
    weekendStart: '08:00',
    weekendEnd: '18:00',
    timezone: 'America/Sao_Paulo',
  });

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleSaveAcademy = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleSaveNotifications = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleSaveSchedule = (e: React.FormEvent) => {
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
            <Settings className="w-8 h-8 text-white/60" />
            <h1 className="text-3xl lg:text-4xl font-display font-bold">
              Configurações
            </h1>
          </div>
          <p className="text-white/60 font-sans">
            Gerencie suas preferências e informações da academia
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Profile Settings */}
          <motion.div
            className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <User className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-xl font-display font-bold">Perfil</h2>
                <p className="text-white/60 font-sans text-sm">
                  Suas informações pessoais
                </p>
              </div>
            </div>

            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div>
                <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
                />
              </div>

              <div>
                <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
                />
              </div>

              <div>
                <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  value={profileData.phone}
                  onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
                />
              </div>

              <div>
                <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                  Bio
                </label>
                <textarea
                  value={profileData.bio}
                  onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans resize-none"
                />
              </div>

              <Button type="submit" variant="primary" size="md" className="w-full">
                <Save className="w-5 h-5 mr-2" />
                Salvar Perfil
              </Button>
            </form>
          </motion.div>

          {/* Academy Information */}
          <motion.div
            className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h2 className="text-xl font-display font-bold">Informações da Academia</h2>
                <p className="text-white/60 font-sans text-sm">
                  Dados de contato e localização
                </p>
              </div>
            </div>

            <form onSubmit={handleSaveAcademy} className="space-y-4">
              <div>
                <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                  Nome da Academia
                </label>
                <input
                  type="text"
                  value={academyData.name}
                  onChange={(e) => setAcademyData({ ...academyData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
                />
              </div>

              <div>
                <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                  Endereço
                </label>
                <input
                  type="text"
                  value={academyData.address}
                  onChange={(e) => setAcademyData({ ...academyData, address: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    value={academyData.phone}
                    onChange={(e) => setAcademyData({ ...academyData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
                  />
                </div>

                <div>
                  <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={academyData.email}
                    onChange={(e) => setAcademyData({ ...academyData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                  Website
                </label>
                <input
                  type="url"
                  value={academyData.website}
                  onChange={(e) => setAcademyData({ ...academyData, website: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
                />
              </div>

              <Button type="submit" variant="primary" size="md" className="w-full">
                <Save className="w-5 h-5 mr-2" />
                Salvar Informações
              </Button>
            </form>
          </motion.div>

          {/* Notifications */}
          <motion.div
            className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <Bell className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h2 className="text-xl font-display font-bold">Notificações</h2>
                <p className="text-white/60 font-sans text-sm">
                  Gerencie suas preferências de notificação
                </p>
              </div>
            </div>

            <form onSubmit={handleSaveNotifications} className="space-y-4">
              <div className="space-y-3">
                <label className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-white/60" />
                    <div>
                      <p className="font-sans font-semibold text-sm">Email</p>
                      <p className="text-xs text-white/50">Receber notificações por email</p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={notificationSettings.emailNotifications}
                    onChange={(e) => setNotificationSettings({ ...notificationSettings, emailNotifications: e.target.checked })}
                    className="w-5 h-5 rounded bg-white/10 border-white/20 text-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0"
                  />
                </label>

                <label className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-3">
                    <Bell className="w-5 h-5 text-white/60" />
                    <div>
                      <p className="font-sans font-semibold text-sm">Novos Eventos</p>
                      <p className="text-xs text-white/50">Notificar sobre novos eventos</p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={notificationSettings.newEvents}
                    onChange={(e) => setNotificationSettings({ ...notificationSettings, newEvents: e.target.checked })}
                    className="w-5 h-5 rounded bg-white/10 border-white/20 text-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0"
                  />
                </label>

                <label className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-white/60" />
                    <div>
                      <p className="font-sans font-semibold text-sm">Novos Alunos</p>
                      <p className="text-xs text-white/50">Notificar sobre novos cadastros</p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={notificationSettings.newStudents}
                    onChange={(e) => setNotificationSettings({ ...notificationSettings, newStudents: e.target.checked })}
                    className="w-5 h-5 rounded bg-white/10 border-white/20 text-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0"
                  />
                </label>

                <label className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-3">
                    <Settings className="w-5 h-5 text-white/60" />
                    <div>
                      <p className="font-sans font-semibold text-sm">Atualizações do Sistema</p>
                      <p className="text-xs text-white/50">Notificar sobre updates</p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={notificationSettings.systemUpdates}
                    onChange={(e) => setNotificationSettings({ ...notificationSettings, systemUpdates: e.target.checked })}
                    className="w-5 h-5 rounded bg-white/10 border-white/20 text-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0"
                  />
                </label>
              </div>

              <Button type="submit" variant="primary" size="md" className="w-full">
                <Save className="w-5 h-5 mr-2" />
                Salvar Preferências
              </Button>
            </form>
          </motion.div>

          {/* Schedule Settings */}
          <motion.div
            className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h2 className="text-xl font-display font-bold">Horários de Funcionamento</h2>
                <p className="text-white/60 font-sans text-sm">
                  Configure os horários da academia
                </p>
              </div>
            </div>

            <form onSubmit={handleSaveSchedule} className="space-y-4">
              <div>
                <label className="block text-white/80 font-sans font-semibold text-sm mb-3">
                  Segunda a Sexta
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-white/60 font-sans text-xs mb-2">
                      Abertura
                    </label>
                    <input
                      type="time"
                      value={scheduleSettings.weekdayStart}
                      onChange={(e) => setScheduleSettings({ ...scheduleSettings, weekdayStart: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-all font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 font-sans text-xs mb-2">
                      Fechamento
                    </label>
                    <input
                      type="time"
                      value={scheduleSettings.weekdayEnd}
                      onChange={(e) => setScheduleSettings({ ...scheduleSettings, weekdayEnd: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-all font-sans"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-white/80 font-sans font-semibold text-sm mb-3">
                  Sábado e Domingo
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-white/60 font-sans text-xs mb-2">
                      Abertura
                    </label>
                    <input
                      type="time"
                      value={scheduleSettings.weekendStart}
                      onChange={(e) => setScheduleSettings({ ...scheduleSettings, weekendStart: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-all font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 font-sans text-xs mb-2">
                      Fechamento
                    </label>
                    <input
                      type="time"
                      value={scheduleSettings.weekendEnd}
                      onChange={(e) => setScheduleSettings({ ...scheduleSettings, weekendEnd: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-all font-sans"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                  Fuso Horário
                </label>
                <select
                  value={scheduleSettings.timezone}
                  onChange={(e) => setScheduleSettings({ ...scheduleSettings, timezone: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-all font-sans"
                >
                  <option value="America/Sao_Paulo">Brasília (GMT-3)</option>
                  <option value="America/Manaus">Manaus (GMT-4)</option>
                  <option value="America/Rio_Branco">Rio Branco (GMT-5)</option>
                </select>
              </div>

              <Button type="submit" variant="primary" size="md" className="w-full">
                <Save className="w-5 h-5 mr-2" />
                Salvar Horários
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default function Settings() {
  return (
    <ProtectedRoute>
      <SettingsPage />
    </ProtectedRoute>
  );
}
