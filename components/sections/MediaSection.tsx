'use client';

import { motion } from 'framer-motion';
import { Newspaper, Tv, Radio, Video, ExternalLink, Calendar, Play, Eye } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const mediaItems = [
  {
    id: 1,
    type: 'tv',
    title: 'Academia CTRA - Formando Campeões',
    outlet: 'TV Globo - Esporte Espetacular',
    date: '15 de Dezembro, 2024',
    description: 'Reportagem especial mostrando a metodologia de treino que transformou atletas amadores em campeões nacionais.',
    thumbnail: '/media/tv-globo-feature.jpg',
    duration: '12:34',
    views: '1.2M',
    url: 'https://youtube.com/watch?v=example',
    featured: true,
    gradient: 'from-blue-600/30 via-indigo-600/20 to-transparent',
  },
  {
    id: 2,
    type: 'newspaper',
    title: 'O Segredo Por Trás dos Campeões de Muay Thai',
    outlet: 'Folha de São Paulo - Esportes',
    date: '28 de Novembro, 2024',
    description: 'Entrevista exclusiva com o fundador Rodrigo Argentino sobre a filosofia de treino e a formação de atletas de elite.',
    thumbnail: '/media/folha-article.jpg',
    readTime: '8 min',
    url: 'https://folha.com.br/example',
    featured: false,
    gradient: 'from-orange-600/30 via-red-600/20 to-transparent',
  },
  {
    id: 3,
    type: 'podcast',
    title: 'Flow Podcast #458 - Rodrigo Argentino',
    outlet: 'Flow Podcast',
    date: '10 de Novembro, 2024',
    description: 'Papo sobre artes marciais, preparação mental de lutadores e os bastidores da formação de campeões.',
    thumbnail: '/media/flow-podcast.jpg',
    duration: '2:15:30',
    views: '850K',
    url: 'https://youtube.com/watch?v=example',
    featured: true,
    gradient: 'from-purple-600/30 via-pink-600/20 to-transparent',
  },
  {
    id: 4,
    type: 'video',
    title: 'Tour Completo pela Academia CTRA',
    outlet: 'Canal Combate',
    date: '5 de Outubro, 2024',
    description: 'Visita guiada mostrando toda a estrutura, equipamentos de última geração e os segredos do tatame.',
    thumbnail: '/media/canal-combate.jpg',
    duration: '18:42',
    views: '420K',
    url: 'https://youtube.com/watch?v=example',
    featured: false,
    gradient: 'from-green-600/30 via-emerald-600/20 to-transparent',
  },
  {
    id: 5,
    type: 'newspaper',
    title: 'A Revolução do Jiu-Jitsu Feminino',
    outlet: 'O Estado de S. Paulo',
    date: '22 de Setembro, 2024',
    description: 'Matéria sobre o crescimento do Jiu-Jitsu feminino e o papel da CTRA na formação de campeãs.',
    thumbnail: '/media/estadao-article.jpg',
    readTime: '6 min',
    url: 'https://estadao.com.br/example',
    featured: false,
    gradient: 'from-pink-600/30 via-rose-600/20 to-transparent',
  },
  {
    id: 6,
    type: 'radio',
    title: 'Jovem Pan Esportes - Entrevista com Rodrigo Argentino',
    outlet: 'Jovem Pan',
    date: '8 de Setembro, 2024',
    description: 'Bate-papo sobre a preparação de atletas para competições internacionais e os desafios do esporte de alto rendimento.',
    thumbnail: '/media/jovem-pan.jpg',
    duration: '45:20',
    url: 'https://jovempan.com.br/example',
    featured: false,
    gradient: 'from-yellow-600/30 via-orange-600/20 to-transparent',
  },
];

const getMediaTypeInfo = (type: string) => {
  switch (type) {
    case 'tv':
      return { icon: Tv, label: 'TV', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' };
    case 'newspaper':
      return { icon: Newspaper, label: 'Matéria', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' };
    case 'podcast':
      return { icon: Radio, label: 'Podcast', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' };
    case 'video':
      return { icon: Video, label: 'Vídeo', color: 'bg-green-500/20 text-green-400 border-green-500/30' };
    case 'radio':
      return { icon: Radio, label: 'Rádio', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' };
    default:
      return { icon: Newspaper, label: 'Mídia', color: 'bg-white/10 text-white/70 border-white/20' };
  }
};

const MediaSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.01, 0.05, 0.95]
      }
    }
  };

  return (
    <section className="section py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial Gradients */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-white/[0.015] rounded-full blur-[100px]" />

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
            CTRA na Mídia
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto font-sans">
            Acompanhe nossas aparições em entrevistas, reportagens e podcasts
          </p>
        </motion.div>

        {/* Featured Items - Large Cards */}
        <motion.div
          className="mb-12 lg:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mediaItems.filter(item => item.featured).map((item) => {
              const typeInfo = getMediaTypeInfo(item.type);
              const Icon = typeInfo.icon;

              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="group relative"
                >
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md hover:border-white/30 transition-all duration-500 group-hover:scale-[1.02]">
                      {/* Thumbnail */}
                      <div className="relative h-64 lg:h-80 overflow-hidden">
                        {/* Gradient Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />

                        {/* Play Icon (for video/podcast) */}
                        {(item.type === 'tv' || item.type === 'video' || item.type === 'podcast') && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Play className="w-10 h-10 text-white ml-1" fill="white" />
                            </div>
                          </div>
                        )}

                        {/* Type Badge */}
                        <div className="absolute top-6 left-6 z-10">
                          <div className={`px-4 py-2 rounded-full border backdrop-blur-xl ${typeInfo.color}`}>
                            <div className="flex items-center gap-2">
                              <Icon className="w-4 h-4" />
                              <span className="text-sm font-bold tracking-wide">
                                {typeInfo.label}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Duration/Read Time */}
                        {item.duration && (
                          <div className="absolute top-6 right-6 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/20">
                            <span className="text-sm font-mono font-semibold text-white">
                              {item.duration}
                            </span>
                          </div>
                        )}
                        {item.readTime && (
                          <div className="absolute top-6 right-6 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/20">
                            <span className="text-sm font-sans font-semibold text-white">
                              {item.readTime} leitura
                            </span>
                          </div>
                        )}

                        {/* Views (if available) */}
                        {item.views && (
                          <div className="absolute bottom-6 right-6 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/20">
                            <div className="flex items-center gap-2">
                              <Eye className="w-4 h-4 text-white/70" />
                              <span className="text-sm font-semibold text-white">
                                {item.views}
                              </span>
                            </div>
                          </div>
                        )}

                        {/* Bottom Info */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <div className="flex items-center gap-2 text-white/60 mb-2">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm font-sans">{item.date}</span>
                          </div>
                          <h3 className="text-2xl lg:text-3xl font-display font-bold mb-2 leading-tight">
                            {item.title}
                          </h3>
                          <p className="text-sm text-white/80 font-sans font-medium">
                            {item.outlet}
                          </p>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <p className="text-white/70 font-sans leading-relaxed mb-4">
                          {item.description}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-white/50 text-sm font-sans">
                            <ExternalLink className="w-4 h-4" />
                            <span>Ver matéria completa</span>
                          </div>
                          <div className="text-white/70 group-hover:text-white transition-colors">
                            <ExternalLink className="w-5 h-5" />
                          </div>
                        </div>
                      </div>

                      {/* Glow Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                        style={{
                          boxShadow: 'inset 0 0 80px rgba(255, 255, 255, 0.05), 0 0 60px rgba(255, 255, 255, 0.1)'
                        }}
                      />
                    </div>
                  </a>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Regular Items - Smaller Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaItems.filter(item => !item.featured).map((item) => {
              const typeInfo = getMediaTypeInfo(item.type);
              const Icon = typeInfo.icon;

              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="group relative"
                >
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md hover:border-white/20 transition-all duration-500 h-full">
                      {/* Thumbnail */}
                      <div className="relative h-48 overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                        {/* Type Badge */}
                        <div className="absolute top-4 left-4">
                          <div className={`px-3 py-1.5 rounded-full border backdrop-blur-xl text-xs ${typeInfo.color}`}>
                            <div className="flex items-center gap-1.5">
                              <Icon className="w-3.5 h-3.5" />
                              <span className="font-bold">
                                {typeInfo.label}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Duration/Read Time */}
                        {item.duration && (
                          <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-xl border border-white/20">
                            <span className="text-xs font-mono font-semibold text-white">
                              {item.duration}
                            </span>
                          </div>
                        )}
                        {item.readTime && (
                          <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-xl border border-white/20">
                            <span className="text-xs font-sans font-semibold text-white">
                              {item.readTime}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <div className="flex items-center gap-2 text-white/50 mb-2">
                          <Calendar className="w-3.5 h-3.5" />
                          <span className="text-xs font-sans">{item.date}</span>
                        </div>

                        <h3 className="text-lg font-display font-bold mb-2 leading-tight line-clamp-2">
                          {item.title}
                        </h3>

                        <p className="text-sm text-white/70 font-sans font-medium mb-3">
                          {item.outlet}
                        </p>

                        <p className="text-sm text-white/60 font-sans leading-relaxed line-clamp-2 mb-4">
                          {item.description}
                        </p>

                        <div className="flex items-center gap-2 text-white/50 text-xs font-sans group-hover:text-white/70 transition-colors">
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Ver completo</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <Newspaper className="w-8 h-8 text-white/60" />
            <div>
              <h3 className="text-xl font-display font-bold mb-2">
                Imprensa
              </h3>
              <p className="text-white/70 font-sans mb-4">
                Quer entrevistar nossos atletas ou conhecer nossa história?
              </p>
              <Button variant="secondary" size="md">
                Contato para Imprensa
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};

export default MediaSection;
