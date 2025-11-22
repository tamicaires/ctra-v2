'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, MapPin, Users, Trophy, Ticket, Star, Zap, Award, Bell, ExternalLink, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

interface EventsSectionProps {
  mode?: 'preview' | 'full';
}

export const events = [
  {
    id: 1,
    type: 'featured',
    title: 'Campeonato Interno de Muay Thai',
    tagline: 'A BATALHA DOS GUERREIROS',
    date: '15 de Janeiro, 2025',
    time: '14:00 - 20:00',
    location: 'Academia CTRA - Arena Principal',
    description: 'Evento principal do ano! Competição aberta para todos os níveis com premiação em dinheiro e troféus personalizados.',
    spots: 48,
    totalSpots: 64,
    category: 'Muay Thai',
    prizes: ['R$ 5.000 em prêmios', 'Troféus e Medalhas', 'Certificados'],
    gradient: 'from-red-600/30 via-orange-600/20 to-transparent',
    icon: Trophy,
    featured: true,
  },
  {
    id: 2,
    type: 'tournament',
    title: 'Torneio Aberto de Jiu-Jitsu',
    tagline: 'TÉCNICA E ESTRATÉGIA',
    date: '28 de Janeiro, 2025',
    time: '09:00 - 18:00',
    location: 'Ginásio Municipal',
    description: 'Torneio oficial com sistema de pontos IBJJF. Aberto para todas as faixas e idades.',
    spots: 32,
    totalSpots: 48,
    category: 'Jiu-Jitsu',
    prizes: ['Medalhas para Top 3', 'Pontos no Ranking'],
    gradient: 'from-blue-600/30 via-purple-600/20 to-transparent',
    icon: Award,
    featured: false,
  },
  {
    id: 3,
    type: 'workshop',
    title: 'Workshop: Defesa Pessoal Feminina',
    tagline: 'EMPODERAMENTO E SEGURANÇA',
    date: '10 de Fevereiro, 2025',
    time: '10:00 - 13:00',
    location: 'Academia CTRA - Sala 1',
    description: 'Workshop exclusivo focado em técnicas práticas de defesa pessoal para mulheres.',
    spots: 8,
    totalSpots: 20,
    category: 'Defesa Pessoal',
    prizes: ['Certificado de Participação', 'Material Didático'],
    gradient: 'from-pink-600/30 via-purple-600/20 to-transparent',
    icon: Star,
    featured: false,
  },
  {
    id: 4,
    type: 'championship',
    title: 'Copa Regional de Boxe',
    tagline: 'VELOCIDADE E PRECISÃO',
    date: '22 de Fevereiro, 2025',
    time: '13:00 - 21:00',
    location: 'Centro de Eventos - Ringue Oficial',
    description: 'Competição oficial com árbitros certificados. Vagas limitadas por categoria de peso.',
    spots: 24,
    totalSpots: 32,
    category: 'Boxe',
    prizes: ['Cinturões para Campeões', 'R$ 3.000 em prêmios'],
    gradient: 'from-yellow-600/30 via-amber-600/20 to-transparent',
    icon: Zap,
    featured: false,
  },
  {
    id: 5,
    type: 'seminar',
    title: 'Seminário: Preparação Mental para Lutadores',
    tagline: 'MENTE DE CAMPEÃO',
    date: '5 de Março, 2025',
    time: '19:00 - 21:00',
    location: 'Academia CTRA - Auditório',
    description: 'Palestra com psicólogo esportivo especializado em artes marciais e esportes de combate.',
    spots: 15,
    totalSpots: 30,
    category: 'Desenvolvimento',
    prizes: ['Material Digital', 'Sessão Q&A'],
    gradient: 'from-indigo-600/30 via-violet-600/20 to-transparent',
    icon: Bell,
    featured: false,
  },
  {
    id: 6,
    type: 'tournament',
    title: 'Open de MMA - Amador',
    tagline: 'O COMBATE COMPLETO',
    date: '18 de Março, 2025',
    time: '15:00 - 22:00',
    location: 'Arena Fight Club',
    description: 'Evento de MMA amador com regras unificadas. Lutas de 3 rounds de 3 minutos.',
    spots: 16,
    totalSpots: 24,
    category: 'MMA',
    prizes: ['Troféus', 'Oportunidade Profissional'],
    gradient: 'from-green-600/30 via-emerald-600/20 to-transparent',
    icon: Trophy,
    featured: false,
  },
];

const getEventTypeLabel = (type: string) => {
  switch (type) {
    case 'featured': return { label: 'Destaque', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' };
    case 'tournament': return { label: 'Torneio', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' };
    case 'championship': return { label: 'Campeonato', color: 'bg-red-500/20 text-red-400 border-red-500/30' };
    case 'workshop': return { label: 'Workshop', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' };
    case 'seminar': return { label: 'Seminário', color: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30' };
    default: return { label: 'Evento', color: 'bg-white/10 text-white/70 border-white/20' };
  }
};

const getAvailabilityStatus = (spots: number, total: number) => {
  const percentage = (spots / total) * 100;
  if (percentage > 50) return { label: 'Vagas Disponíveis', color: 'text-green-400' };
  if (percentage > 20) return { label: 'Poucas Vagas', color: 'text-yellow-400' };
  return { label: 'Últimas Vagas', color: 'text-red-400' };
};

// Large Event Card Component
const LargeEventCard = ({ event }: { event: typeof events[0] }) => {
  const Icon = event.icon;
  const typeInfo = getEventTypeLabel(event.type);
  const availabilityInfo = getAvailabilityStatus(event.spots, event.totalSpots);
  const isFeatured = event.featured;

  return (
    <div className="group relative">
      <div className={`relative overflow-hidden rounded-3xl border ${isFeatured ? 'border-white/30' : 'border-white/10'} bg-black/40 backdrop-blur-md hover:border-white/40 transition-all duration-500`}>
        {isFeatured && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="px-6 py-2 rounded-full bg-gradient-to-r from-yellow-500/30 via-yellow-400/30 to-yellow-500/30 backdrop-blur-xl border border-yellow-500/50 shadow-xl z-50">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-bold text-yellow-400 tracking-wide uppercase">Evento Destaque</span>
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          <div className="relative h-64 lg:h-auto overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient}`} />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.1]">
              <Icon className="w-64 h-64" />
            </div>

            <div className="relative h-full flex flex-col justify-between p-8">
              <div className="flex items-start gap-3">
                <div className={`px-4 py-2 rounded-full border backdrop-blur-xl ${typeInfo.color}`}>
                  <span className="text-sm font-bold tracking-wide">{typeInfo.label}</span>
                </div>
              </div>

              <div>
                <div className="text-xs text-white/50 uppercase tracking-[0.2em] mb-2 font-sans font-semibold">{event.category}</div>
                <h3 className="text-3xl lg:text-4xl font-display font-bold leading-tight mb-2">{event.title}</h3>
                <p className="text-sm text-white/60 font-sans font-bold tracking-wider">{event.tagline}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 p-8 lg:p-10 space-y-6">
            <p className="text-white/80 font-sans text-lg leading-relaxed">{event.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="p-3 rounded-lg bg-white/10 border border-white/20">
                  <Calendar className="w-5 h-5 text-white/70" />
                </div>
                <div>
                  <div className="text-xs text-white/50 uppercase tracking-wider mb-1 font-sans font-semibold">Data e Horário</div>
                  <div className="text-sm text-white/90 font-sans font-medium">{event.date}</div>
                  <div className="text-sm text-white/70 font-sans">{event.time}</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="p-3 rounded-lg bg-white/10 border border-white/20">
                  <MapPin className="w-5 h-5 text-white/70" />
                </div>
                <div>
                  <div className="text-xs text-white/50 uppercase tracking-wider mb-1 font-sans font-semibold">Local</div>
                  <div className="text-sm text-white/90 font-sans font-medium">{event.location}</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="p-3 rounded-lg bg-white/10 border border-white/20">
                  <Users className="w-5 h-5 text-white/70" />
                </div>
                <div>
                  <div className="text-xs text-white/50 uppercase tracking-wider mb-1 font-sans font-semibold">Vagas</div>
                  <div className={`text-sm font-sans font-bold ${availabilityInfo.color}`}>
                    {event.spots} de {event.totalSpots} disponíveis
                  </div>
                  <div className="text-xs text-white/60 font-sans">{availabilityInfo.label}</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="p-3 rounded-lg bg-white/10 border border-white/20">
                  <Trophy className="w-5 h-5 text-white/70" />
                </div>
                <div>
                  <div className="text-xs text-white/50 uppercase tracking-wider mb-1 font-sans font-semibold">Premiação</div>
                  {event.prizes.map((prize, idx) => (
                    <div key={idx} className="text-sm text-white/90 font-sans">{prize}</div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-white/50 uppercase tracking-wider font-sans font-semibold">Inscrições</span>
                <span className="text-xs text-white/70 font-mono font-bold">
                  {Math.round(((event.totalSpots - event.spots) / event.totalSpots) * 100)}%
                </span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${((event.totalSpots - event.spots) / event.totalSpots) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button variant="glow" size="lg" className="flex-1">
                <Ticket className="w-5 h-5" />
                <span>Inscrever-se Agora</span>
              </Button>
              <Button variant="secondary" size="lg" className="sm:w-auto">
                <ExternalLink className="w-5 h-5" />
                <span>Mais Informações</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
          style={{
            boxShadow: isFeatured
              ? 'inset 0 0 100px rgba(255, 255, 255, 0.08), 0 0 80px rgba(255, 255, 255, 0.12)'
              : 'inset 0 0 80px rgba(255, 255, 255, 0.05), 0 0 60px rgba(255, 255, 255, 0.08)'
          }}
        />
      </div>
    </div>
  );
};

// Small Event Card Component
const SmallEventCard = ({ event }: { event: typeof events[0] }) => {
  const Icon = event.icon;
  const typeInfo = getEventTypeLabel(event.type);
  const availabilityInfo = getAvailabilityStatus(event.spots, event.totalSpots);

  return (
    <div className="group relative h-full">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md hover:border-white/30 transition-all duration-500 h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.1]">
            <Icon className="w-32 h-32" />
          </div>

          <div className="absolute top-4 left-4">
            <div className={`px-3 py-1.5 rounded-full border backdrop-blur-xl text-xs ${typeInfo.color}`}>
              <div className="flex items-center gap-1.5">
                <Icon className="w-3.5 h-3.5" />
                <span className="font-bold">{typeInfo.label}</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 right-4">
            <div className="text-xs text-white/50 uppercase tracking-wider mb-1.5 font-sans font-semibold">{event.category}</div>
            <h3 className="text-xl font-display font-bold leading-tight line-clamp-2">{event.title}</h3>
          </div>
        </div>

        <div className="p-5 flex-1 flex flex-col">
          <p className="text-sm text-white/70 font-sans leading-relaxed line-clamp-2 mb-4">{event.description}</p>

          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-2 text-white/60">
              <Calendar className="w-4 h-4" />
              <span className="text-xs font-sans">{event.date}</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <MapPin className="w-4 h-4" />
              <span className="text-xs font-sans line-clamp-1">{event.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-white/60" />
              <span className={`text-xs font-sans font-bold ${availabilityInfo.color}`}>
                {event.spots}/{event.totalSpots} vagas
              </span>
            </div>
          </div>

          <div className="mb-4">
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                initial={{ width: 0 }}
                whileInView={{ width: `${((event.totalSpots - event.spots) / event.totalSpots) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </div>

          <div className="mt-auto">
            <Button variant="secondary" size="sm" className="w-full">
              <Ticket className="w-4 h-4" />
              <span>Inscrever-se</span>
            </Button>
          </div>
        </div>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
          style={{ boxShadow: 'inset 0 0 60px rgba(255, 255, 255, 0.05), 0 0 40px rgba(255, 255, 255, 0.08)' }}
        />
      </div>
    </div>
  );
};

const EventsSection = ({ mode = 'full' }: EventsSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.01, 0.05, 0.95]
      }
    }
  };

  const displayEvents = mode === 'preview' ? events.slice(0, 4) : events;
  const featuredEvent = displayEvents.find(e => e.featured);
  const regularEvents = displayEvents.filter(e => !e.featured);

  return (
    <section className="section py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-white/[0.015] rounded-full blur-[100px]" />

      <Container className="relative z-10">
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4 uppercase">
            Próximos Eventos
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto font-sans">
            Participe de competições, workshops e eventos exclusivos
          </p>
        </motion.div>

        {featuredEvent && (
          <motion.div
            className="mb-8"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <LargeEventCard event={featuredEvent} />
          </motion.div>
        )}

        {regularEvents.length > 0 && (
          <motion.div
            className={`grid grid-cols-1 ${mode === 'preview' ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {regularEvents.map((event) => (
              <motion.div key={event.id} variants={itemVariants}>
                <SmallEventCard event={event} />
              </motion.div>
            ))}
          </motion.div>
        )}

        {mode === 'preview' && (
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link href="/eventos">
              <Button variant="glow" size="lg" magnetic>
                <span>Ver Todos os Eventos</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        )}

        {mode === 'full' && (
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Bell className="w-8 h-8 text-white/60" />
              <div>
                <h3 className="text-xl font-display font-bold mb-2">Não Perca Nenhum Evento</h3>
                <p className="text-white/70 font-sans mb-4">Cadastre-se para receber notificações sobre novos eventos</p>
                <Button variant="secondary" size="md">Ativar Notificações</Button>
              </div>
            </div>
          </motion.div>
        )}
      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};

export default EventsSection;
