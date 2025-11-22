'use client';

import { motion } from 'framer-motion';
import { CalendarCheck, Building2, CreditCard, Flame, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const steps = [
  {
    id: 1,
    number: '01',
    icon: CalendarCheck,
    title: 'Agende Sua Aula Experimental',
    description: 'Clique no botão, escolha o melhor horário e pronto. Sua primeira aula é grátis, sem compromisso.',
    cta: 'Agendar Agora',
  },
  {
    id: 2,
    number: '02',
    icon: Building2,
    title: 'Conheça Nossa Estrutura',
    description: 'Venha conhecer o tatame, os professores e sentir a energia do treino. Vai entender por que somos diferentes.',
  },
  {
    id: 3,
    number: '03',
    icon: CreditCard,
    title: 'Escolha Seu Plano',
    description: 'Temos planos flexíveis para todos os objetivos e bolsos. Você escolhe a frequência e modalidades.',
  },
  {
    id: 4,
    number: '04',
    icon: Flame,
    title: 'Comece Sua Transformação',
    description: 'É só vestir o kimono e começar. Nossos professores cuidam de todo o resto. Em 30 dias você não vai se reconhecer.',
  },
];

const ProcessSection = () => {
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

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4 uppercase">
            Como Começar É Mais Fácil Do Que Você Imagina
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto font-sans">
            4 passos simples e você já está treinando
          </p>
        </motion.div>

        {/* Desktop - Horizontal Timeline */}
        <div className="hidden lg:block mb-12">
          <div className="relative max-w-6xl mx-auto">
            {/* Steps */}
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.id}
                    className="relative flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.2,
                      ease: [0.6, 0.01, 0.05, 0.95]
                    }}
                  >
                    {/* Connecting Line to Next Step (except last) */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-20 left-[calc(50%+80px)] right-[calc(-100%-80px)] h-0.5 z-0">
                        <div className="relative h-full bg-gradient-to-r from-white/30 to-white/10">
                          <motion.div
                            className="h-full bg-gradient-to-r from-white/80 to-white/50"
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.3 + 0.5, ease: [0.6, 0.01, 0.05, 0.95] }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Icon Circle */}
                    <motion.div
                      className="relative z-10 w-40 h-40 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center mb-6 backdrop-blur-sm"
                      whileHover={{ scale: 1.05, borderColor: 'rgba(255, 255, 255, 0.4)' }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity"
                        style={{ boxShadow: '0 0 40px rgba(255, 255, 255, 0.2)' }}
                      />

                      {/* Number */}
                      <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-display font-bold text-lg">
                        {step.number}
                      </div>

                      <Icon className="w-16 h-16 text-white/80" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-display font-bold mb-3 uppercase">
                      {step.title}
                    </h3>
                    <p className="text-white/70 font-sans text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* CTA for first step */}
                    {step.cta && (
                      <Button variant="secondary" size="sm" className="mt-2">
                        <span>{step.cta}</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet - Vertical Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                className="relative flex gap-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.6, 0.01, 0.05, 0.95]
                }}
              >
                {/* Left Side - Icon */}
                <div className="flex flex-col items-center flex-shrink-0">
                  {/* Icon Circle */}
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center backdrop-blur-sm">
                    {/* Number */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-display font-bold text-sm">
                      {step.number}
                    </div>
                    <Icon className="w-8 h-8 text-white/80" />
                  </div>

                  {/* Connecting Line (except last) */}
                  {index < steps.length - 1 && (
                    <div className="flex-1 w-0.5 mt-4 bg-gradient-to-b from-white/30 to-white/10 min-h-[80px]" />
                  )}
                </div>

                {/* Right Side - Content */}
                <div className="flex-1 pb-8">
                  <h3 className="text-xl sm:text-2xl font-display font-bold mb-2 uppercase">
                    {step.title}
                  </h3>
                  <p className="text-white/70 font-sans leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* CTA for first step */}
                  {step.cta && (
                    <Button variant="secondary" size="sm">
                      <span>{step.cta}</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-white/60 font-sans mb-6 text-lg">
            Pronto para dar o primeiro passo?
          </p>
          <Button variant="primary" size="lg" className="group">
            <span>Comece Agora - Aula Grátis</span>
            <Flame className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
          </Button>
        </motion.div>
      </Container>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};

export default ProcessSection;
