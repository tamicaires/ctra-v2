'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Calendar,
  Users,
  Video,
  FileText,
  Settings,
  LogOut,
  Menu,
  X,
  Shield,
  ChevronRight,
} from 'lucide-react';
import { useAuth } from '@/lib/auth/AuthContext';

interface NavItem {
  label: string;
  href: string;
  icon: typeof LayoutDashboard;
  requiredRole?: 'super-admin';
}

const NAV_ITEMS: NavItem[] = [
  {
    label: 'Dashboard',
    href: '/admin',
    icon: LayoutDashboard,
  },
  {
    label: 'Eventos',
    href: '/admin/events',
    icon: Calendar,
  },
  {
    label: 'Vídeos',
    href: '/admin/videos',
    icon: Video,
  },
  {
    label: 'Conteúdo',
    href: '/admin/content',
    icon: FileText,
  },
  {
    label: 'Configurações',
    href: '/admin/settings',
    icon: Settings,
  },
];

const SUPER_ADMIN_ITEMS: NavItem[] = [
  {
    label: 'Super Admin',
    href: '/super-admin',
    icon: Shield,
    requiredRole: 'super-admin',
  },
  {
    label: 'Usuários',
    href: '/super-admin/users',
    icon: Users,
    requiredRole: 'super-admin',
  },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user, logout } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isSuperAdmin = user?.role === 'super-admin';

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  const navItems = isSuperAdmin ? [...NAV_ITEMS, ...SUPER_ADMIN_ITEMS] : NAV_ITEMS;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-white p-0.5 w-10 h-10">
              <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div>
              <h1 className="font-display font-bold text-sm">Admin Panel</h1>
              <p className="text-xs text-white/60 font-sans">{user?.name}</p>
            </div>
          </div>

          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition-colors"
          >
            {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <AnimatePresence>
        {(isSidebarOpen || window.innerWidth >= 1024) && (
          <motion.aside
            className="fixed top-0 left-0 bottom-0 z-40 w-64 bg-zinc-950 border-r border-white/10 lg:translate-x-0"
            initial={{ x: -256 }}
            animate={{ x: 0 }}
            exit={{ x: -256 }}
            transition={{ type: 'spring', damping: 25 }}
          >
            <div className="flex flex-col h-full">
              {/* Logo */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-white p-0.5 w-12 h-12">
                    <Image
                      src="/logo.png"
                      alt="Logo"
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h1 className="font-display font-bold">Admin Panel</h1>
                    {isSuperAdmin && (
                      <span className="text-xs text-yellow-400 font-sans font-semibold">
                        SUPER ADMIN
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsSidebarOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all group ${
                        isActive
                          ? 'bg-white/10 text-white border border-white/20'
                          : 'text-white/60 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <span className="font-sans font-semibold text-sm flex-1">
                        {item.label}
                      </span>
                      {isActive && <ChevronRight className="w-4 h-4" />}
                    </Link>
                  );
                })}
              </nav>

              {/* User Info & Logout */}
              <div className="p-4 border-t border-white/10">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-sans font-semibold text-sm truncate">{user?.name}</p>
                    <p className="text-xs text-white/60 truncate">{user?.email}</p>
                  </div>
                </div>

                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 transition-all font-sans font-semibold text-sm"
                >
                  <LogOut className="w-5 h-5" />
                  Sair
                </button>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="lg:ml-64 pt-20 lg:pt-0">
        {children}
      </main>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
