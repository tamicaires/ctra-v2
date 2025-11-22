'use client';

import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Target, Flame, Calendar, Star, TrendingUp, Shield, Instagram } from 'lucide-react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const recentAchievements = [
  {
    id: 1,
    medal: 'gold',
    title: 'Campeonato Estadual 2024',
    athletes: '3 ouros',
    icon: Trophy,
  },
  {
    id: 2,
    medal: 'silver',
    title: 'Copa Nacional de Muay Thai',
    athletes: '2 pratas, 1 ouro',
    icon: Medal,
  },
  {
    id: 3,
    medal: 'bronze',
    title: 'Torneio Regional de Jiu-Jitsu',
    athletes: '5 pódios',
    icon: Award,
  },
  {
    id: 4,
    medal: 'gold',
    title: 'Open de Boxe Amador',
    athletes: '2 campeões',
    icon: Flame,
  },
];

const champions = [
  {
    id: 1,
    name: 'Pedro Oliveira',
    modality: 'Muay Thai',
    category: 'Peso Leve',
    record: '15-2-0',
    wins: 15,
    losses: 2,
    winRate: 88,
    titles: [
      { medal: 'gold', title: 'Campeão Estadual 2023' },
      { medal: 'gold', title: 'Campeão Regional 2023' },
      { medal: 'silver', title: 'Vice-Campeão Nacional 2024' },
      { medal: 'bronze', title: 'Medalha de Bronze Pan-Americano' },
    ],
    nextFight: 'Campeonato Brasileiro - Janeiro 2025',
    image: '/athletes/pedro-oliveira.jpg',
    gradient: 'from-red-500/20 via-orange-500/10 to-transparent',
    instagram: '@pedrofighter',
  },
  {
    id: 2,
    name: 'Ana Carolina',
    modality: 'Jiu-Jitsu',
    category: 'Faixa Roxa - Peso Médio',
    record: '8-0-0',
    wins: 8,
    losses: 0,
    winRate: 100,
    titles: [
      { medal: 'gold', title: 'Campeã Brasileira 2024' },
      { medal: 'gold', title: 'Campeã Sul-Americana 2023' },
      { medal: 'silver', title: 'Vice Mundial IBJJF 2024' },
      { medal: 'gold', title: 'Tricampeã Estadual' },
    ],
    nextFight: 'Mundial IBJJF - Junho 2025',
    image: '/athletes/ana-carolina.jpg',
    gradient: 'from-blue-500/20 via-purple-500/10 to-transparent',
    instagram: '@anabjj',
  },
  {
    id: 3,
    name: 'Lucas Ferreira',
    modality: 'Boxe',
    category: 'Peso Médio',
    record: '22-3-0',
    wins: 22,
    losses: 3,
    winRate: 88,
    titles: [
      { medal: 'gold', title: 'Campeão Regional 2024' },
      { medal: 'silver', title: 'Vice-Campeão Nacional 2023' },
      { medal: 'bronze', title: 'Bronze nos Jogos Estaduais' },
      { medal: 'gold', title: 'Campeão Torneio Aberto' },
    ],
    nextFight: 'Seletiva Olímpica - Março 2025',
    image: '/athletes/lucas-ferreira.jpg',
    gradient: 'from-yellow-500/20 via-amber-500/10 to-transparent',
    instagram: '@lucasboxer',
  },
  {
    id: 4,
    name: 'Julia Santos',
    modality: 'MMA',
    category: 'Peso Mosca Feminino',
    record: '7-1-0',
    wins: 7,
    losses: 1,
    winRate: 88,
    titles: [
      { medal: 'gold', title: 'Campeã Amadora Estadual 2024' },
      { medal: 'silver', title: 'Vice-Campeã Nacional 2023' },
      { medal: 'gold', title: 'Campeã Torneio Revelação' },
      { medal: 'bronze', title: 'Bronze Copa Brasil' },
    ],
    nextFight: 'Debut Profissional - Fevereiro 2025',
    image: '/athletes/julia-santos.jpg',
    gradient: 'from-green-500/20 via-emerald-500/10 to-transparent',
    instagram: '@juliammaofficial',
  },
  {
    id: 5,
    name: 'Rafael Costa',
    modality: 'Jiu-Jitsu',
    category: 'Faixa Preta - Peso Pesado',
    record: '32-8-0',
    wins: 32,
    losses: 8,
    winRate: 80,
    titles: [
      { medal: 'silver', title: 'Vice-Campeão Mundial Master 2024' },
      { medal: 'gold', title: 'Pentacampeão Estadual' },
      { medal: 'gold', title: 'Campeão Brasileiro 2022' },
      { medal: 'bronze', title: 'Bronze Pan-Americano 2023' },
    ],
    nextFight: 'Mundial Master - Agosto 2025',
    image: '/athletes/rafael-costa.jpg',
    gradient: 'from-indigo-500/20 via-violet-500/10 to-transparent',
    instagram: '@rafaheavybjj',
  },
  {
    id: 6,
    name: 'Beatriz Lima',
    modality: 'Muay Thai',
    category: 'Peso Pena Feminino',
    record: '12-2-0',
    wins: 12,
    losses: 2,
    winRate: 86,
    titles: [
      { medal: 'gold', title: 'Campeã Estadual 2024' },
      { medal: 'gold', title: 'Campeã Regional 2023, 2024' },
      { medal: 'silver', title: 'Vice-Campeã Nacional 2023' },
      { medal: 'gold', title: 'Campeã Torneio Internacional' },
    ],
    nextFight: 'Campeonato Sul-Americano - Abril 2025',
    image: '/athletes/beatriz-lima.jpg',
    gradient: 'from-pink-500/20 via-rose-500/10 to-transparent',
    instagram: '@bialimafighter',
  },
];

const getMedalColor = (medal: string) => {
  switch (medal) {
    case 'gold': return 'text-yellow-500/80 bg-yellow-500/10 border-yellow-500/30';
    case 'silver': return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    case 'bronze': return 'text-orange-400/80 bg-orange-400/10 border-orange-400/30';
    default: return 'text-white/50 bg-white/10 border-white/20';
  }
};

const getMedalIcon = (medal: string) => {
  switch (medal) {
    case 'gold': return '🥇';
    case 'silver': return '🥈';
    case 'bronze': return '🥉';
    default: return '🏅';
  }
};

const ChampionsSection = () => {
  return (
    <section className="section py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Radial Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/[0.015] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[100px]" />

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4 uppercase">
            Nossos Campeões
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto font-sans">
            Formamos atletas que competem e vencem nos mais altos níveis
          </p>
        </motion.div>

        {/* Recent Achievements Gallery */}
        {/* <motion.div
          className="mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl lg:text-3xl font-display font-bold text-center mb-8 uppercase">
            Conquistas Recentes
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {recentAchievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.id}
                  className={`relative p-6 rounded-xl border backdrop-blur-sm ${getMedalColor(achievement.medal)}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="text-3xl">{getMedalIcon(achievement.medal)}</div>
                    <Icon className="w-6 h-6 flex-shrink-0 mt-1" />
                  </div>
                  <h4 className="font-sans font-bold text-white mb-2 text-sm lg:text-base">
                    {achievement.title}
                  </h4>
                  <p className="text-xs text-white/60 font-sans">
                    {achievement.athletes}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div> */}

        {/* Champions Grid - REDESIGNED */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {champions.map((champion, index) => (
              <motion.div
                key={champion.id}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.6, 0.01, 0.05, 0.95]
                }}
              >
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md hover:border-white/30 transition-all duration-500 group-hover:scale-[1.02]">
                  {/* Photo Section */}
                  <div className="relative h-80 overflow-hidden">
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${champion.gradient}`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />

                    {/* Trophy Icon Watermark */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.07]">
                      <Trophy className="w-48 h-48" />
                    </div>

                    {/* Modality Badge */}
                    <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-black/60 backdrop-blur-xl border border-white/20 shadow-xl">
                      <span className="text-sm font-sans font-bold text-white tracking-wide">
                        {champion.modality}
                      </span>
                    </div>

                    {/* Win Rate Badge */}
                    <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-green-500/20 backdrop-blur-xl border border-green-500/30">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        <span className="text-sm font-bold text-green-400">
                          {champion.winRate}%
                        </span>
                      </div>
                    </div>

                    {/* Name Section */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <h3 className="text-3xl font-display font-bold mb-1.5 leading-tight">
                            {champion.name}
                          </h3>
                          <p className="text-white/80 font-sans text-sm mb-1">
                            {champion.category}
                          </p>
                          <div className="flex items-center gap-2 text-white/60">
                            <Shield className="w-3.5 h-3.5" />
                            <span className="text-xs font-mono font-semibold">
                              {champion.record}
                            </span>
                          </div>
                        </div>

                        {/* Instagram */}
                        <a
                          href={`https://instagram.com/${champion.instagram.replace('@', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all"
                        >
                          <Instagram className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 space-y-6">
                    {/* Record Stats */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-2xl font-display font-bold text-green-400">
                          {champion.wins}
                        </div>
                        <div className="text-xs text-white/50 uppercase tracking-wider mt-1">
                          Vitórias
                        </div>
                      </div>
                      <div className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-2xl font-display font-bold text-red-400">
                          {champion.losses}
                        </div>
                        <div className="text-xs text-white/50 uppercase tracking-wider mt-1">
                          Derrotas
                        </div>
                      </div>
                      <div className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-2xl font-display font-bold text-yellow-400">
                          {champion.titles.filter(t => t.medal === 'gold').length}
                        </div>
                        <div className="text-xs text-white/50 uppercase tracking-wider mt-1">
                          Ouros
                        </div>
                      </div>
                    </div>

                    {/* Titles */}
                    <div>
                      <div className="flex items-center gap-2 text-white/50 mb-3">
                        <Star className="w-4 h-4" />
                        <span className="text-xs font-sans font-bold uppercase tracking-wider">
                          Principais Títulos
                        </span>
                      </div>
                      <div className="space-y-2.5">
                        {champion.titles.slice(0, 3).map((title, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10"
                          >
                            <span className="text-xl flex-shrink-0 mt-0.5">
                              {getMedalIcon(title.medal)}
                            </span>
                            <span className="text-white/80 font-sans text-sm leading-relaxed">
                              {title.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Next Fight */}
                    <div className="pt-4 border-t border-white/10">
                      <div className="flex items-start gap-3">
                        <div className="p-2.5 rounded-lg bg-white/10 border border-white/20">
                          <Calendar className="w-4 h-4 text-white/70" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-white/50 uppercase tracking-wider mb-1.5 font-sans font-semibold">
                            Próxima Luta
                          </div>
                          <div className="text-sm text-white/90 font-sans font-medium leading-relaxed">
                            {champion.nextFight}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                    style={{
                      boxShadow: 'inset 0 0 80px rgba(255, 255, 255, 0.05), 0 0 60px rgba(255, 255, 255, 0.1)'
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <motion.div
          className="mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {[
            { icon: Trophy, value: '230+', label: 'Campeões Formados' },
            { icon: Medal, value: '450+', label: 'Medalhas Conquistadas' },
            { icon: Flame, value: '89%', label: 'Taxa de Vitórias' },
            { icon: Award, value: '50+', label: 'Competições/Ano' },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="text-center p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <Icon className="w-8 h-8 mx-auto mb-3 text-white/60" />
                <div className="text-3xl lg:text-4xl font-display font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60 font-sans">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </motion.div>
      </Container>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};

export default ChampionsSection;
