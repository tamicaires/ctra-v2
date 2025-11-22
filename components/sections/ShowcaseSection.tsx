'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import Container from '@/components/ui/Container';

const showcaseItems = [
  {
    id: 1,
    type: 'video',
    title: 'Treino Intenso',
    caption: 'A energia que transforma vidas',
    size: 'large', // ocupará 2 colunas
  },
  {
    id: 2,
    type: 'image',
    title: 'Comunidade',
    caption: 'Muito mais que uma academia',
    size: 'small',
  },
  {
    id: 3,
    type: 'video',
    title: 'Técnica',
    caption: 'Precisão e dedicação',
    size: 'small',
  },
];

const ShowcaseSection = () => {
  return (
    <section className="section py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Radial Gradient */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[120px]" />

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
            Sinta a Energia
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto font-sans">
            Não é só treino. É uma experiência que muda vidas.
          </p>
        </motion.div>

        {/* Grid de Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.id}
              className={`relative group cursor-pointer overflow-hidden rounded-xl ${
                item.size === 'large' ? 'lg:col-span-2 lg:row-span-2 h-[400px] lg:h-[600px]' : 'h-[300px]'
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
              {/* Background Placeholder (will be replaced with actual image) */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5" />

              {/* Imagem placeholder com gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900" />

              {/* Overlay com gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

              {/* Play button para vídeos */}
              {item.type === 'video' && (
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div
                    className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300"
                    style={{
                      boxShadow: '0 0 30px rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    <Play className="w-8 h-8 lg:w-10 lg:h-10 text-white fill-white ml-1" />
                  </div>
                </motion.div>
              )}

              {/* Conteúdo */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <h3 className="text-2xl lg:text-3xl font-display font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/80 font-sans">
                    {item.caption}
                  </p>
                </motion.div>
              </div>

              {/* Border glow on hover */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 rounded-xl transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};

export default ShowcaseSection;
