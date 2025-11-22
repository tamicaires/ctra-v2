'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Search, Filter, X, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import Container from '@/components/ui/Container';

// Mock data de vídeos (em produção virá do YouTube)
const videos = [
  { id: 1, title: 'Jab Cruzado Perfeito', modality: 'Boxe', level: 'Iniciante', type: 'Técnica', duration: '1:24', youtubeId: 'dQw4w9WgXcQ' },
  { id: 2, title: 'Kimura do Lado', modality: 'Jiu-Jitsu', level: 'Avançado', type: 'Técnica', duration: '2:15', youtubeId: 'dQw4w9WgXcQ' },
  { id: 3, title: 'Low Kick Devastador', modality: 'Muay Thai', level: 'Intermediário', type: 'Técnica', duration: '0:58', youtubeId: 'dQw4w9WgXcQ' },
  { id: 4, title: 'Defesa de Queda', modality: 'MMA', level: 'Intermediário', type: 'Defesa', duration: '1:45', youtubeId: 'dQw4w9WgXcQ' },
  { id: 5, title: 'Esquiva e Contra', modality: 'Boxe', level: 'Avançado', type: 'Treino', duration: '2:30', youtubeId: 'dQw4w9WgXcQ' },
  { id: 6, title: 'Passagem de Guarda', modality: 'Jiu-Jitsu', level: 'Intermediário', type: 'Técnica', duration: '1:52', youtubeId: 'dQw4w9WgXcQ' },
  { id: 7, title: 'Clinch Thai', modality: 'Muay Thai', level: 'Iniciante', type: 'Técnica', duration: '1:15', youtubeId: 'dQw4w9WgXcQ' },
  { id: 8, title: 'Transições Ground', modality: 'MMA', level: 'Avançado', type: 'Técnica', duration: '2:05', youtubeId: 'dQw4w9WgXcQ' },
  { id: 9, title: 'Combinações Boxe', modality: 'Boxe', level: 'Intermediário', type: 'Treino', duration: '1:38', youtubeId: 'dQw4w9WgXcQ' },
];

const VideoLibrarySection = () => {
  const [selectedModality, setSelectedModality] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);

  const modalities = ['Todos', 'Muay Thai', 'Jiu-Jitsu', 'Boxe', 'MMA'];

  // Filtrar vídeos
  const filteredVideos = videos.filter(video => {
    const matchesModality = selectedModality === 'Todos' || video.modality === selectedModality;
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.modality.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesModality && matchesSearch;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Iniciante': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Intermediário': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Avançado': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-white/10 text-white/70 border-white/20';
    }
  };

  return (
    <section className="section py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Patterns */}
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
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[120px]" />

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4 uppercase">
            Biblioteca de Técnicas
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto font-sans">
            Aprenda com os melhores. Domine cada movimento.
          </p>
        </motion.div>

        {/* Filtros e Busca */}
        <motion.div
          className="mb-8 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {/* Filtros de Modalidade */}
          <div className="flex flex-wrap gap-2 justify-center">
            {modalities.map((modality) => (
              <button
                key={modality}
                onClick={() => setSelectedModality(modality)}
                className={`px-4 py-2 rounded-full font-sans font-semibold text-sm transition-all duration-300 ${
                  selectedModality === modality
                    ? 'bg-white text-black'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 border border-white/20'
                }`}
              >
                {modality}
              </button>
            ))}
          </div>

          {/* Busca */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              placeholder="Buscar técnicas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
            />
          </div>
        </motion.div>

        {/* Grid de Vídeos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedVideo(video)}
                whileHover={{ y: -5 }}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 group-hover:border-white/30 transition-all duration-300">
                  {/* Placeholder para thumbnail */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white/5 to-white/10">
                    <Play className="w-16 h-16 text-white/30 group-hover:text-white/60 group-hover:scale-110 transition-all duration-300" />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                  {/* Play Button Overlay */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                      <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 rounded text-xs font-sans flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {video.duration}
                  </div>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ boxShadow: '0 0 30px rgba(255, 255, 255, 0.1)' }}
                  />
                </div>

                {/* Info */}
                <div className="mt-3">
                  <h3 className="font-sans font-bold text-white group-hover:text-white/90 transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-sm text-white/60 font-sans">{video.modality}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full border font-sans ${getLevelColor(video.level)}`}>
                      {video.level}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Nenhum resultado */}
        {filteredVideos.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-white/50 font-sans">Nenhum vídeo encontrado. Tente outra busca.</p>
          </motion.div>
        )}
      </Container>

      {/* Modal de Vídeo */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl bg-black border border-white/20 rounded-2xl overflow-hidden"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Video Player (YouTube Embed) */}
              <div className="aspect-video bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold mb-2">{selectedVideo.title}</h3>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-white/70 font-sans">{selectedVideo.modality}</span>
                  <span className={`text-xs px-3 py-1 rounded-full border font-sans ${getLevelColor(selectedVideo.level)}`}>
                    {selectedVideo.level}
                  </span>
                  <span className="text-white/60 font-sans flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {selectedVideo.duration}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};

export default VideoLibrarySection;
