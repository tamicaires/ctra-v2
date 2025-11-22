'use client';

import { motion } from 'framer-motion';
import { Trophy, Award, Star, Medal } from 'lucide-react';
import Container from '@/components/ui/Container';

const masters = [
  {
    id: 1,
    name: 'Rodrigo Argentino',
    title: 'Faixa Preta 4º Dan',
    speciality: 'Jiu-Jitsu Brasileiro',
    experience: '25 anos de experiência',
    quote: 'Não ensino apenas técnicas. Ensino meus alunos a descobrirem o guerreiro que existe dentro deles.',
    achievements: [
      'Campeão Mundial IBJJF 2015, 2017',
      'Campeão Pan-Americano 2018, 2019',
      'Formou 50+ faixas pretas',
      '200+ alunos em competições',
    ],
  },
  {
    id: 2,
    name: 'Master Silva',
    title: 'Campeão Nacional',
    speciality: 'Muay Thai',
    experience: '20 anos de experiência',
    quote: 'Cada golpe é uma oportunidade de superar seus limites. Muay Thai não é sobre bater - é sobre se tornar imparável.',
    achievements: [
      'Campeão Brasileiro 2016, 2018, 2020',
      'Vice-Campeão Mundial WMC 2019',
      '45 vitórias profissionais',
      'Treinador de 15 campeões estaduais',
    ],
  },
  {
    id: 3,
    name: 'Coach Martinez',
    title: 'Treinador Olímpico',
    speciality: 'Boxe',
    experience: '18 anos de experiência',
    quote: 'Boxe é ciência. Cada movimento calculado, cada golpe com propósito. Transformo lutadores em estrategistas.',
    achievements: [
      'Treinador Seleção Brasileira 2016-2020',
      'Medalha de Bronze Pan-Americano',
      'Formou 8 campeões nacionais',
      'Especialista em técnica avançada',
    ],
  },
];

const MastersSection = () => {
  return (
    <section className="section py-20 sm:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black">
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
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-white/[0.015] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[100px]" />

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
            Aprenda Com Os Melhores
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto font-sans">
            Nossos mestres não apenas ensinam técnicas. Eles formam campeões e transformam vidas.
          </p>
        </motion.div>

        {/* Grid de Mestres */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {masters.map((master, index) => (
            <motion.div
              key={master.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm hover:border-white/30 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.6, 0.01, 0.05, 0.95]
              }}
              whileHover={{ y: -10 }}
            >
              {/* Photo Placeholder (será substituído por foto real) */}
              <div className="relative h-80 bg-gradient-to-br from-zinc-700 to-zinc-900 overflow-hidden">
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                {/* Decorative icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
                  <Trophy className="w-32 h-32" />
                </div>

                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl lg:text-3xl font-display font-bold mb-1">
                    {master.name}
                  </h3>
                  <p className="text-white/80 font-sans text-sm">
                    {master.title}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Speciality */}
                <div className="flex items-center gap-2 mb-4">
                  <Medal className="w-5 h-5 text-white/60" />
                  <span className="text-white/70 font-sans text-sm font-semibold">
                    {master.speciality}
                  </span>
                </div>

                {/* Experience */}
                <p className="text-white/50 font-sans text-sm mb-4">
                  {master.experience}
                </p>

                {/* Quote */}
                <blockquote className="relative mb-6 pl-4 border-l-2 border-white/20">
                  <p className="text-white/80 font-sans italic text-sm leading-relaxed">
                    "{master.quote}"
                  </p>
                </blockquote>

                {/* Achievements */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white/60 mb-2">
                    <Trophy className="w-4 h-4" />
                    <span className="text-xs font-sans font-semibold uppercase tracking-wider">
                      Conquistas
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {master.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-white/60 font-sans text-sm">
                        <Star className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 fill-white/20" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 60px rgba(255, 255, 255, 0.05), 0 0 40px rgba(255, 255, 255, 0.1)' }}
              />
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};

export default MastersSection;
