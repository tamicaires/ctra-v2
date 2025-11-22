'use client';

import { motion } from 'framer-motion';
import { Award, Users, Maximize2, TrendingUp, Clock, Heart } from 'lucide-react';
import Container from '@/components/ui/Container';

const differentials = [
  {
    id: 1,
    icon: Award,
    title: 'Mestres de Verdade',
    description: 'Nossos professores não apenas ensinam - eles competem, vencem e vivem as artes marciais. Você aprende com quem realmente sabe.',
  },
  {
    id: 2,
    icon: Users,
    title: 'Comunidade de Apoio',
    description: 'Do primeiro dia você faz parte da família. Não importa seu nível, todos se ajudam. É impossível desistir quando tem 380 pessoas te apoiando.',
  },
  {
    id: 3,
    icon: Maximize2,
    title: 'Maior Tatame da Região',
    description: '450m² de tatame profissional, equipamentos de ponta e toda estrutura que você merece para treinar com segurança e conforto.',
  },
  {
    id: 4,
    icon: TrendingUp,
    title: 'Resultados Comprovados',
    description: '230+ campeões formados, milhares de vidas transformadas. Nossos resultados falam por nós. Você será o próximo.',
  },
  {
    id: 5,
    icon: Clock,
    title: 'Horários Flexíveis',
    description: 'Aulas de segunda a sábado, manhã, tarde e noite. Não importa sua rotina - tem um horário perfeito para você.',
  },
  {
    id: 6,
    icon: Heart,
    title: 'Todas as Idades',
    description: 'De crianças a adultos de 60+. Turmas separadas por idade e nível. Nunca é cedo ou tarde demais para começar.',
  },
];

const WhyUsSection = () => {
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/[0.015] rounded-full blur-[120px]" />
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
            Por Que Somos Diferentes
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto font-sans">
            Não somos apenas mais uma academia. Somos uma família que forma campeões.
          </p>
        </motion.div>

        {/* Grid of Differentials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm p-8 hover:border-white/30 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.6, 0.01, 0.05, 0.95]
                }}
                whileHover={{ y: -10 }}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: 'inset 0 0 60px rgba(255, 255, 255, 0.05), 0 0 40px rgba(255, 255, 255, 0.1)' }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-6 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-500">
                    <Icon className="w-8 h-8 text-white/80 group-hover:text-white transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-display font-bold mb-4 uppercase">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 lg:mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="inline-flex flex-col items-center gap-4 px-8 py-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm">
            <p className="text-white/80 font-sans text-lg max-w-2xl">
              Tudo isso para garantir que você tenha a melhor experiência possível e alcance seus objetivos.
            </p>
            <div className="text-sm text-white/60 font-sans">
              Faça parte dessa família de campeões
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};

export default WhyUsSection;
