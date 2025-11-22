'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

// Fixed particle positions to avoid hydration mismatch
const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: (i * 37 % 100),
  top: (i * 53 % 100),
  x: (i % 3) * 10 - 10,
  duration: 3 + (i % 3),
  delay: (i % 5) * 0.4,
}));

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, 0.05, 0.95]
      }
    }
  };

  const pulsarAnimation = {
    scale: [1, 1.05, 1],
    opacity: [0.9, 1, 0.9],
  };

  const pulsarTransition = {
    scale: {
      repeat: Infinity,
      duration: 4,
      ease: "easeInOut"
    },
    opacity: {
      repeat: Infinity,
      duration: 4,
      ease: "easeInOut"
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Radial Gradients (múltiplos) */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[100px]" />
      <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-white/[0.015] rounded-full blur-[80px]" />

      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative Lines */}
      <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Vertical Lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />

      {/* Decorative Corners */}
      <div className="absolute top-24 left-8 w-20 h-20 border-l border-t border-white/10" />
      <div className="absolute top-24 right-8 w-20 h-20 border-r border-t border-white/10" />
      <div className="absolute bottom-24 left-8 w-20 h-20 border-l border-b border-white/10" />
      <div className="absolute bottom-24 right-8 w-20 h-20 border-r border-b border-white/10" />

      {/* Floating particles (fixed positions to avoid hydration mismatch) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, particle.x, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <Container className="relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* LEFT COLUMN - Content */}
          <div className="flex flex-col text-left order-2 lg:order-1">
            {/* Main Headline */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-display font-bold mb-6 uppercase tracking-wide"
              style={{
                textShadow: '0 0 20px rgba(255, 255, 255, 0.15), 0 0 40px rgba(255, 255, 255, 0.08)',
              }}
              variants={itemVariants}
            >
              <span className="block">Domine Seu Corpo.</span>
              <span className="block">Fortaleça Sua Mente.</span>
              <span className="block text-white/90">Mude Sua Vida.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg sm:text-xl lg:text-2xl text-white/70 mb-8 lg:mb-12 font-sans"
              variants={itemVariants}
            >
              Treinamento de elite em artes marciais. Do completo iniciante ao competidor profissional.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              variants={itemVariants}
            >
              <Button variant="glow" size="lg" magnetic className="min-w-[240px]">
                Agende Sua Aula Grátis
              </Button>
              <Button variant="secondary" size="lg" className="min-w-[240px]">
                Conheça as Modalidades
              </Button>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - Logo */}
          <div className="flex items-center justify-center order-1 lg:order-2">
            <motion.div
              className="w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateX: 0,
              }}
              transition={{
                type: "spring",
                damping: 15,
                stiffness: 100,
                duration: 1.5
              }}
            >
              <motion.div
                className="w-full h-full flex items-center justify-center relative rounded-full bg-white p-1"
                animate={pulsarAnimation}
                transition={pulsarTransition}
                style={{
                  boxShadow: '0 0 30px rgba(255, 255, 255, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.15)'
                }}
              >
                <Image
                  src="/logo.png"
                  alt="Rodrigo Argentino - Brazilian Jiujitsu and Muaythai"
                  width={384}
                  height={384}
                  className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] rounded-full"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 2,
            duration: 0.8,
          }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 cursor-pointer group"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut"
            }}
            onClick={() => {
              document.querySelector('#stats')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="text-sm text-white/50 group-hover:text-white/70 transition-colors">
              Role para descobrir
            </span>
            <ChevronDown className="w-6 h-6 text-white/50 group-hover:text-white/70 transition-colors" />
          </motion.div>
        </motion.div>
      </Container>

      {/* Gradient overlay bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default HeroSection;
