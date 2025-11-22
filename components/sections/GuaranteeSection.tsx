'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Gift, XCircle, CheckCircle2, Shield } from 'lucide-react';
import Container from '@/components/ui/Container';

const guarantees = [
  {
    id: 1,
    icon: Gift,
    title: 'Primeira Aula 100% Grátis',
    description: 'Conheça sem compromisso',
  },
  {
    id: 2,
    icon: XCircle,
    title: 'Sem Taxa de Matrícula',
    description: 'Zero custos para começar',
  },
  {
    id: 3,
    icon: CheckCircle2,
    title: 'Sem Multa de Cancelamento',
    description: 'Cancele quando quiser',
  },
  {
    id: 4,
    icon: ShieldCheck,
    title: 'Garantia de 30 Dias',
    description: 'Satisfação garantida',
  },
  {
    id: 5,
    icon: Shield,
    title: 'Equipamentos Inclusos',
    description: 'Para iniciantes',
  },
];

const GuaranteeSection = () => {
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[150px]" />

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
            Nossa Promessa Para Você
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto font-sans">
            Não queremos apenas sua matrícula. Queremos sua transformação.
          </p>
        </motion.div>

        

        {/* Main Copy */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 lg:p-12">
            {/* Large quote mark decoration */}
            <div className="absolute top-8 left-8 text-white/5 text-9xl font-serif leading-none">
              "
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 opacity-30"
              style={{ boxShadow: 'inset 0 0 80px rgba(255, 255, 255, 0.05)' }}
            />

            <div className="relative z-10">
              {/* Shield Icon */}
              <div className="w-16 h-16 mx-auto rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-white/90" />
              </div>

              {/* Main Promise */}
              <p className="text-xl lg:text-2xl font-sans text-center leading-relaxed text-white/90 mb-8">
                Se em <span className="font-bold text-white">30 dias</span> você não sentir que está no caminho da transformação, <span className="font-bold text-white">cancele a qualquer momento</span>. Sem perguntas, sem burocracia.
              </p>

              {/* Reason */}
              <p className="text-center text-white/70 font-sans italic">
                Porque acreditamos tanto no nosso trabalho que assumimos todo o risco.
              </p>

              {/* Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-8 pt-8 border-t border-white/10">
                {[
                  'Primeira aula 100% grátis',
                  'Sem taxa de matrícula',
                  'Sem multa de cancelamento',
                  'Garantia de 30 dias',
                  'Equipamentos inclusos',
                  'Professores qualificados',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-green-400" />
                    </div>
                    <span className="text-white/80 font-sans text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};

export default GuaranteeSection;
