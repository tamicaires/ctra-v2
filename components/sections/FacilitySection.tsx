'use client';

import { motion } from 'framer-motion';
import { Check, Dumbbell, Users, ShieldCheck, MapPin, Car, ShoppingBag, Sparkles } from 'lucide-react';
import Container from '@/components/ui/Container';

const features = [
  {
    icon: Sparkles,
    title: '450m² de tatame profissional',
    description: 'O maior da região, com piso especial importado',
  },
  {
    icon: Dumbbell,
    title: 'Equipamentos de última geração',
    description: 'Sacos, paos, luvas e tudo que você precisa',
  },
  {
    icon: Users,
    title: 'Vestiários completos',
    description: 'Masculino e feminino com duchas quentes',
  },
  {
    icon: ShieldCheck,
    title: 'Área de musculação complementar',
    description: 'Para preparação física e condicionamento',
  },
  {
    icon: ShoppingBag,
    title: 'Loja de produtos',
    description: 'Equipamentos e suplementos',
  },
  {
    icon: Car,
    title: 'Estacionamento amplo',
    description: 'Vagas para alunos e visitantes',
  },
  {
    icon: MapPin,
    title: 'Localização privilegiada',
    description: 'Fácil acesso por transporte público',
  },
];

const gallery = [
  {
    id: 1,
    title: 'Tatame Principal',
    description: '450m² de área para treino',
    size: 'large', // 2 cols
  },
  {
    id: 2,
    title: 'Área de Equipamentos',
    description: 'Sacos e aparelhos profissionais',
    size: 'small',
  },
  {
    id: 3,
    title: 'Vestiários',
    description: 'Completos e climatizados',
    size: 'small',
  },
  {
    id: 4,
    title: 'Academia',
    description: 'Área de musculação integrada',
    size: 'small',
  },
  {
    id: 5,
    title: 'Recepção',
    description: 'Atendimento e loja',
    size: 'small',
  },
];

const FacilitySection = () => {
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
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-white/[0.015] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[100px]" />

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
            O Maior Tatame da Região
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto font-sans leading-relaxed">
            Possuímos um dos maiores tatames da região, com área total de 450m². Equipamentos profissionais, vestiários completos e toda infraestrutura que um atleta merece.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
            {gallery.map((item, index) => (
              <motion.div
                key={item.id}
                className={`relative group cursor-pointer overflow-hidden rounded-xl ${
                  item.size === 'large'
                    ? 'lg:col-span-2 lg:row-span-2 h-[400px] lg:h-[500px]'
                    : 'h-[250px]'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.6, 0.01, 0.05, 0.95]
                }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Background Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 to-zinc-900" />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '30px 30px',
                  }}
                />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <h3 className={`font-display font-bold mb-2 ${
                      item.size === 'large' ? 'text-3xl lg:text-4xl' : 'text-xl lg:text-2xl'
                    }`}>
                      {item.title}
                    </h3>
                    <p className="text-white/80 font-sans text-sm">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Border glow on hover */}
                <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 rounded-xl transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features List */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl lg:text-3xl font-display font-bold text-center mb-10 uppercase">
            Diferenciais da Estrutura
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/30 hover:bg-white/10 transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index }}
                  whileHover={{ y: -5 }}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                    <Icon className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
                  </div>

                  {/* Content */}
                  <h4 className="font-sans font-bold text-white mb-2 text-lg">
                    {feature.title}
                  </h4>
                  <p className="text-white/60 font-sans text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Check mark */}
                  <div className="absolute top-6 right-6">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                      <Check className="w-3 h-3 text-green-400" />
                    </div>
                  </div>

                  {/* Subtle glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
                    style={{ boxShadow: 'inset 0 0 40px rgba(255, 255, 255, 0.05)' }}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {[
            { value: '450m²', label: 'Área de Tatame' },
            { value: '24/7', label: 'Câmeras de Segurança' },
            { value: '100+', label: 'Equipamentos' },
            { value: '4', label: 'Vestiários' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="text-3xl lg:text-4xl font-display font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white/60 font-sans">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-12 lg:mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <MapPin className="w-5 h-5 text-white/70" />
            <span className="font-sans text-white/80">
              Venha conhecer nossa estrutura presencialmente
            </span>
          </div>
        </motion.div>
      </Container>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};

export default FacilitySection;
