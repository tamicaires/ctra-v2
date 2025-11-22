'use client';

import { motion } from 'framer-motion';
import { Flame, ArrowRight, ShieldCheck, Gift, Clock } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const FinalCTASection = () => {
  return (
    <section className="section py-20 sm:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black">
      {/* Dramatic Background Effects */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Multiple Radial Gradients for dramatic effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-white/[0.03] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }}
        >
          {/* Fire Icon */}
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 border border-white/20 mb-8"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Flame className="w-10 h-10 text-white/90" />
          </motion.div>

          {/* Giant Headline */}
          <motion.h2
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-8 uppercase leading-tight"
            style={{
              textShadow: '0 0 30px rgba(255, 255, 255, 0.2), 0 0 60px rgba(255, 255, 255, 0.1)',
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Quanto Tempo Você Vai Esperar?
          </motion.h2>

          {/* Emotional Subtitle */}
          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl text-white/80 max-w-4xl mx-auto mb-12 font-sans leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Há <span className="font-bold text-white">380 pessoas</span> que decidiram começar. Elas não são diferentes de você - apenas decidiram agir.
            <br className="hidden lg:block" />
            Sua primeira aula grátis está a um clique de distância.
          </motion.p>

          {/* Giant CTA Button */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Button
              variant="primary"
              size="lg"
              className="group text-lg lg:text-xl px-12 py-6 lg:px-16 lg:py-8 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] transition-all"
            >
              <span>Agendar Minha Aula Grátis Agora</span>
              <ArrowRight className="w-6 h-6 lg:w-7 lg:h-7 ml-3 group-hover:translate-x-2 transition-transform" />
            </Button>
          </motion.div>

          {/* Micro-copy / Guarantees */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 lg:gap-8 text-white/60 font-sans text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <Gift className="w-5 h-5" />
              <span>100% Grátis</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              <span>Sem Compromisso</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Resposta em Minutos</span>
            </div>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            className="mt-12 pt-8 border-t border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-2 text-white/50 font-sans text-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-white/10 border-2 border-black flex items-center justify-center"
                  >
                    <span className="text-xs">👤</span>
                  </div>
                ))}
              </div>
              <span className="ml-2">
                <span className="text-white font-semibold">52 pessoas</span> agendaram essa semana
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/5 rounded-full" />
        <div className="absolute bottom-10 right-10 w-40 h-40 border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-0 w-24 h-24 border border-white/5 rounded-full" />
        <div className="absolute top-1/3 right-0 w-28 h-28 border border-white/5 rounded-full" />
      </Container>
    </section>
  );
};

export default FinalCTASection;
