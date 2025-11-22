'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Trophy, Calendar, Activity } from 'lucide-react';
import Container from '@/components/ui/Container';

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}

const StatItem = ({ icon, value, suffix = '', label, delay = 0 }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.6, 0.01, 0.05, 0.95]
      }}
    >
      {/* Icon */}
      <motion.div
        className="mb-4 p-4 rounded-full border border-white/10 bg-white/5 group-hover:border-white/30 group-hover:bg-white/10 transition-all duration-300"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {icon}
      </motion.div>

      {/* Number */}
      <div className="mb-2">
        <motion.span
          className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display"
          style={{
            textShadow: '0 0 20px rgba(255, 255, 255, 0.2), 0 0 40px rgba(255, 255, 255, 0.1)',
          }}
        >
          {count.toLocaleString()}
          {suffix}
        </motion.span>
      </div>

      {/* Label */}
      <p className="text-base sm:text-lg text-white/70 font-sans">
        {label}
      </p>
    </motion.div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-white" />,
      value: 380,
      suffix: '+',
      label: 'Alunos Ativos'
    },
    {
      icon: <Trophy className="w-8 h-8 text-white" />,
      value: 230,
      suffix: '+',
      label: 'Campeões Formados'
    },
    {
      icon: <Calendar className="w-8 h-8 text-white" />,
      value: 15,
      suffix: '+',
      label: 'Anos de Excelência'
    },
    {
      icon: <Activity className="w-8 h-8 text-white" />,
      value: 10000,
      suffix: '+',
      label: 'Horas de Treino/Mês'
    },
  ];

  return (
    <section id="stats" className="section py-20 sm:py-24 lg:py-32 relative overflow-hidden">
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

      {/* Radial Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/[0.02] rounded-full blur-[120px]" />

      {/* Decorative Circles */}
      <div className="absolute top-10 right-10 w-32 h-32 border border-white/5 rounded-full" />
      <div className="absolute bottom-10 left-10 w-40 h-40 border border-white/5 rounded-full" />

      <Container className="relative z-10">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 0.15}
            />
          ))}
        </div>
      </Container>

      {/* Divider line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};

export default StatsSection;
