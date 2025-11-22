'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, Zap, Shield, Trophy, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const modalities = [
  {
    id: 1,
    slug: 'muay-thai',
    title: 'Muay Thai',
    tagline: 'A Arte das Oito Armas',
    description: 'Desenvolva uma resistência sobre-humana, força explosiva e técnicas letais. O Muay Thai não apenas esculpe seu corpo - ele forja guerreiros.',
    features: [
      { icon: Zap, text: 'Condicionamento extremo' },
      { icon: Shield, text: 'Defesa pessoal letal' },
      { icon: Trophy, text: 'Preparação para competição' },
      { icon: Check, text: 'Cardio que queima 800+ calorias/aula' },
    ],
    gradient: 'from-red-950/20 to-orange-950/20',
  },
  {
    id: 2,
    slug: 'jiu-jitsu',
    title: 'Jiu-Jitsu',
    tagline: 'A Arte Suave',
    description: 'Técnica sobre força bruta. Inteligência sobre tamanho. Aprenda a arte que permite vencer adversários muito maiores usando apenas conhecimento e estratégia.',
    features: [
      { icon: Check, text: 'Técnica refinada' },
      { icon: Shield, text: 'Xadrez físico' },
      { icon: Trophy, text: 'Defesa pessoal comprovada' },
      { icon: Zap, text: 'Sistema de graduação por faixas' },
    ],
    gradient: 'from-blue-950/20 to-purple-950/20',
  },
  {
    id: 3,
    slug: 'boxe',
    title: 'Boxe',
    tagline: 'A Nobre Arte',
    description: 'Reflexos de aço, precisão cirúrgica, cardio imbatível. O boxe é a base de todo lutador e o melhor treino cardiovascular que existe.',
    features: [
      { icon: Zap, text: 'Cardio explosivo' },
      { icon: Check, text: 'Coordenação superior' },
      { icon: Shield, text: 'Velocidade e timing' },
      { icon: Trophy, text: 'Confiança inabalável' },
    ],
    gradient: 'from-yellow-950/20 to-amber-950/20',
  },
  {
    id: 4,
    slug: 'mma',
    title: 'MMA',
    tagline: 'O Combate Completo',
    description: 'Combine múltiplas artes marciais e torne-se um lutador completo. Striking, grappling, wrestling - domine tudo.',
    features: [
      { icon: Trophy, text: 'Versatilidade total' },
      { icon: Check, text: 'Preparação competitiva' },
      { icon: Shield, text: 'Combate real' },
      { icon: Zap, text: 'Atletas profissionais' },
    ],
    gradient: 'from-green-950/20 to-emerald-950/20',
  },
];

const ModalitiesSection = () => {
  return (
    <section className="section py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial Gradients */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-white/[0.015] rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[90px]" />

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4 uppercase">
            Escolha Sua Arte
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto font-sans">
            Cada modalidade é uma jornada única. Todas transformam vidas.
          </p>
        </motion.div>

        {/* Grid de Modalidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {modalities.map((modality, index) => (
            <motion.div
              key={modality.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-md bg-black/40 p-6 lg:p-8 hover:border-white/30 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.6, 0.01, 0.05, 0.95]
              }}
              whileHover={{ y: -5 }}
              style={{
                boxShadow: '0 0 0 rgba(255, 255, 255, 0)',
              }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${modality.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: 'inset 0 0 40px rgba(255, 255, 255, 0.05), 0 0 40px rgba(255, 255, 255, 0.1)',
                }}
              />

              <div className="relative z-10">
                {/* Tagline */}
                <p className="text-xs sm:text-sm text-white/50 uppercase tracking-wider mb-2 font-sans">
                  {modality.tagline}
                </p>

                {/* Title */}
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
                  {modality.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 mb-6 font-sans leading-relaxed">
                  {modality.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {modality.features.map((feature, idx) => {
                    const Icon = feature.icon;
                    return (
                      <motion.li
                        key={idx}
                        className="flex items-center gap-3 text-white/80 font-sans"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + idx * 0.05 }}
                      >
                        <Icon className="w-5 h-5 text-white/60 flex-shrink-0" />
                        <span>{feature.text}</span>
                      </motion.li>
                    );
                  })}
                </ul>

                {/* CTA Button */}
                <Link href={`/modalidade/${modality.slug}`} className="block">
                  <Button
                    variant="secondary"
                    size="md"
                    className="w-full group-hover:border-white/40 transition-all"
                  >
                    <span>Saiba Mais</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};

export default ModalitiesSection;
