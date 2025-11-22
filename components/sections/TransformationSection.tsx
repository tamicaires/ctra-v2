'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check, Quote, ArrowRightLeft } from 'lucide-react';
import Container from '@/components/ui/Container';

const transformations = [
  {
    id: 1,
    name: 'Maria Santos',
    age: 34,
    modality: 'Muay Thai',
    duration: '8 meses de treino',
    story: 'Comecei com 92kg, sedentária e depressiva. Hoje peso 68kg, compito amadoramente e sou uma pessoa completamente diferente. Não foi fácil, mas foi a melhor decisão da minha vida. O tatame me salvou.',
    quote: 'O tatame me salvou. Encontrei não só um corpo novo, mas uma nova versão de mim.',
    results: [
      '24kg perdidos',
      '3 competições amadoras',
      'Confiança transformada',
      'Depressão superada',
    ],
  },
  {
    id: 2,
    name: 'Carlos Mendes',
    age: 42,
    modality: 'Jiu-Jitsu',
    duration: '1 ano e 4 meses',
    story: 'Executivo estressado, com pressão alta e problemas de coluna. O Jiu-Jitsu não só melhorou minha saúde física, mas me ensinou disciplina e controle emocional que aplico no trabalho e em casa.',
    quote: 'Aos 42 anos, descobri que nunca é tarde para começar. Hoje sou faixa azul e mais saudável do que aos 30.',
    results: [
      'Pressão normalizada',
      'Dores na coluna eliminadas',
      'Faixa azul conquistada',
      'Estresse reduzido em 80%',
    ],
  },
  {
    id: 3,
    name: 'Amanda Costa',
    age: 28,
    modality: 'Boxe',
    duration: '10 meses',
    story: 'Vítima de relacionamento abusivo, sem autoestima. O boxe me deu força física e mental para reconstruir minha vida. Hoje sou independente, forte e ensino outras mulheres a se defenderem.',
    quote: 'Cada soco que aprendi me fez mais forte por dentro. Hoje sou a guerreira que sempre quis ser.',
    results: [
      'Autoestima recuperada',
      'Cintura definida',
      '12kg de músculo ganhos',
      'Instrutora voluntária',
    ],
  },
  {
    id: 4,
    name: 'Ricardo Silva',
    age: 19,
    modality: 'MMA',
    duration: '2 anos',
    story: 'Jovem sem direção, envolvido com más companhias. Os mestres da academia me acolheram, me disciplinaram. Hoje treino para competir profissionalmente e inspiro outros jovens da comunidade.',
    quote: 'A academia me tirou das ruas e me colocou no caminho certo. Aqui encontrei família e propósito.',
    results: [
      '5 vitórias amadoras',
      'Bolsa de estudos conquistada',
      'Mentor de 10 jovens',
      'Vida transformada',
    ],
  },
];

const TransformationSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) return transformations.length - 1;
      if (nextIndex >= transformations.length) return 0;
      return nextIndex;
    });
  };

  const currentTransformation = transformations[currentIndex];

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
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-white/[0.015] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[100px]" />

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
            Transformações Reais. Pessoas Reais.
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto font-sans">
            Eles eram como você. Veja onde estão agora.
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative min-h-[600px] lg:min-h-[500px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full"
              >
                {/* Card */}
                <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm overflow-hidden">
                  {/* Glow effect */}
                  <div className="absolute inset-0 opacity-50"
                    style={{ boxShadow: 'inset 0 0 60px rgba(255, 255, 255, 0.05)' }}
                  />

                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Left Side - Photo */}
                    <div className="relative h-[300px] lg:h-auto bg-gradient-to-br from-zinc-700 to-zinc-900">
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                      {/* Before/After icon */}
                      <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                        <ArrowRightLeft className="w-6 h-6 text-white/70" />
                      </div>

                      {/* Decorative quote */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5">
                        <Quote className="w-40 h-40" />
                      </div>

                      {/* Info overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="text-xs text-white/50 uppercase tracking-wider mb-2 font-sans">
                          {currentTransformation.modality}
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-display font-bold mb-1">
                          {currentTransformation.name}
                        </h3>
                        <p className="text-white/80 font-sans">
                          {currentTransformation.age} anos • {currentTransformation.duration}
                        </p>
                      </div>
                    </div>

                    {/* Right Side - Story */}
                    <div className="p-8 lg:p-10 flex flex-col justify-center">
                      {/* Quote */}
                      <div className="mb-6">
                        <Quote className="w-8 h-8 text-white/20 mb-4" />
                        <blockquote className="text-xl lg:text-2xl font-serif italic text-white/90 leading-relaxed">
                          "{currentTransformation.quote}"
                        </blockquote>
                      </div>

                      {/* Story */}
                      <p className="text-white/70 font-sans leading-relaxed mb-6">
                        {currentTransformation.story}
                      </p>

                      {/* Results */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-white/60 mb-3">
                          <Check className="w-4 h-4" />
                          <span className="text-xs font-sans font-semibold uppercase tracking-wider">
                            Resultados
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {currentTransformation.results.map((result, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-white/80 font-sans text-sm"
                            >
                              <div className="w-5 h-5 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center flex-shrink-0">
                                <Check className="w-3 h-3 text-green-400" />
                              </div>
                              <span>{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 lg:-left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
            aria-label="Previous transformation"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 lg:-right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
            aria-label="Next transformation"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {transformations.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex
                    ? 'w-8 h-2 bg-white'
                    : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to transformation ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        
      </Container>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};

export default TransformationSection;
