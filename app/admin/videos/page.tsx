'use client';

import { useState } from 'react';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { DashboardLayout } from '@/components/admin/DashboardLayout';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Video,
  Plus,
  Edit,
  Trash2,
  X,
  Check,
  Search,
  Play,
  Eye,
  Clock,
  Upload,
  Link as LinkIcon,
  Image as ImageIcon,
} from 'lucide-react';
import Button from '@/components/ui/Button';

interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  category: 'tecnica' | 'treino' | 'competicao' | 'tutorial';
  duration: string;
  views: number;
  uploadedAt: string;
  status: 'published' | 'draft';
}

const MOCK_VIDEOS: VideoItem[] = [
  {
    id: '1',
    title: 'Técnica de Chute Circular - Muay Thai',
    description: 'Aprenda a técnica correta do chute circular com o mestre Rodrigo',
    thumbnail: '/placeholder-video.jpg',
    videoUrl: 'https://youtube.com/watch?v=example1',
    category: 'tecnica',
    duration: '12:45',
    views: 2840,
    uploadedAt: '2024-11-10',
    status: 'published',
  },
  {
    id: '2',
    title: 'Preparação para Competição - Treino Completo',
    description: 'Rotina de treino completa para preparação de campeonato',
    thumbnail: '/placeholder-video.jpg',
    videoUrl: 'https://youtube.com/watch?v=example2',
    category: 'treino',
    duration: '45:20',
    views: 1523,
    uploadedAt: '2024-11-08',
    status: 'published',
  },
  {
    id: '3',
    title: 'Highlights - Campeonato Estadual 2024',
    description: 'Melhores momentos do campeonato estadual',
    thumbnail: '/placeholder-video.jpg',
    videoUrl: 'https://youtube.com/watch?v=example3',
    category: 'competicao',
    duration: '8:15',
    views: 4215,
    uploadedAt: '2024-11-05',
    status: 'published',
  },
];

const CATEGORIES = [
  { value: 'tecnica', label: 'Técnica', color: 'blue' },
  { value: 'treino', label: 'Treino', color: 'green' },
  { value: 'competicao', label: 'Competição', color: 'purple' },
  { value: 'tutorial', label: 'Tutorial', color: 'yellow' },
];

function VideosManagement() {
  const [videos, setVideos] = useState<VideoItem[]>(MOCK_VIDEOS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingVideo, setEditingVideo] = useState<VideoItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    thumbnail: '',
    videoUrl: '',
    category: 'tecnica' as VideoItem['category'],
    duration: '',
    status: 'draft' as 'published' | 'draft',
  });

  const handleCreate = () => {
    setEditingVideo(null);
    setFormData({
      title: '',
      description: '',
      thumbnail: '',
      videoUrl: '',
      category: 'tecnica',
      duration: '',
      status: 'draft',
    });
    setIsModalOpen(true);
  };

  const handleEdit = (video: VideoItem) => {
    setEditingVideo(video);
    setFormData({
      title: video.title,
      description: video.description,
      thumbnail: video.thumbnail,
      videoUrl: video.videoUrl,
      category: video.category,
      duration: video.duration,
      status: video.status,
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Tem certeza que deseja deletar este vídeo?')) {
      setVideos(videos.filter(v => v.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingVideo) {
      setVideos(videos.map(v =>
        v.id === editingVideo.id
          ? { ...v, ...formData }
          : v
      ));
    } else {
      const newVideo: VideoItem = {
        id: Date.now().toString(),
        ...formData,
        views: 0,
        uploadedAt: new Date().toISOString().split('T')[0],
      };
      setVideos([newVideo, ...videos]);
    }

    setIsModalOpen(false);
  };

  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'all' || video.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    const cat = CATEGORIES.find(c => c.value === category);
    const colors: Record<string, string> = {
      blue: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      green: 'bg-green-500/20 text-green-400 border-green-500/30',
      purple: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      yellow: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    };
    return colors[cat?.color || 'blue'];
  };

  const getStatusBadge = (status: string) => {
    return status === 'published'
      ? 'bg-green-500/20 text-green-400 border-green-500/30'
      : 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Video className="w-8 h-8 text-purple-400" />
              <h1 className="text-3xl lg:text-4xl font-display font-bold">
                Biblioteca de Vídeos
              </h1>
            </div>
            <p className="text-white/60 font-sans">
              Gerencie tutoriais, técnicas e conteúdo em vídeo
            </p>
          </div>
          <Button variant="primary" size="md" onClick={handleCreate}>
            <Plus className="w-5 h-5 mr-2" />
            Novo Vídeo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm p-6">
            <div className="flex items-center gap-3 mb-2">
              <Video className="w-6 h-6 text-purple-400" />
              <p className="text-white/60 font-sans text-sm">Total de Vídeos</p>
            </div>
            <p className="text-3xl font-display font-bold">{videos.length}</p>
          </div>

          <div className="rounded-xl border border-green-500/30 bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm p-6">
            <div className="flex items-center gap-3 mb-2">
              <Play className="w-6 h-6 text-green-400" />
              <p className="text-white/60 font-sans text-sm">Publicados</p>
            </div>
            <p className="text-3xl font-display font-bold">
              {videos.filter(v => v.status === 'published').length}
            </p>
          </div>

          <div className="rounded-xl border border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm p-6">
            <div className="flex items-center gap-3 mb-2">
              <Eye className="w-6 h-6 text-blue-400" />
              <p className="text-white/60 font-sans text-sm">Total de Views</p>
            </div>
            <p className="text-3xl font-display font-bold">
              {videos.reduce((sum, v) => sum + v.views, 0).toLocaleString()}
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-6">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-6 h-6 text-white/60" />
              <p className="text-white/60 font-sans text-sm">Rascunhos</p>
            </div>
            <p className="text-3xl font-display font-bold">
              {videos.filter(v => v.status === 'draft').length}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          {/* Search */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Buscar vídeos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-4 py-2 rounded-lg font-sans font-semibold text-sm whitespace-nowrap transition-all ${
                filterCategory === 'all'
                  ? 'bg-white/20 text-white border border-white/30'
                  : 'bg-white/5 text-white/60 border border-white/10 hover:bg-white/10'
              }`}
            >
              Todos
            </button>
            {CATEGORIES.map(cat => (
              <button
                key={cat.value}
                onClick={() => setFilterCategory(cat.value)}
                className={`px-4 py-2 rounded-lg font-sans font-semibold text-sm whitespace-nowrap transition-all ${
                  filterCategory === cat.value
                    ? getCategoryColor(cat.value).replace('/20', '/30')
                    : 'bg-white/5 text-white/60 border border-white/10 hover:bg-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-white/5 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-16 h-16 text-white/40 group-hover:text-white/60 transition-colors" />
                </div>
                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 backdrop-blur-sm rounded text-xs font-sans font-semibold">
                  {video.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Badges */}
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-sans px-2 py-1 rounded-full border ${getCategoryColor(video.category)}`}>
                    {CATEGORIES.find(c => c.value === video.category)?.label}
                  </span>
                  <span className={`text-xs font-sans px-2 py-1 rounded-full border ${getStatusBadge(video.status)}`}>
                    {video.status === 'published' ? 'Publicado' : 'Rascunho'}
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold mb-2 line-clamp-2">
                  {video.title}
                </h3>

                <p className="text-white/60 font-sans text-sm mb-4 line-clamp-2">
                  {video.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 text-xs font-sans text-white/50 mb-4">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{video.views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{new Date(video.uploadedAt).toLocaleDateString('pt-BR')}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(video)}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500/20 transition-all font-sans font-semibold text-sm"
                  >
                    <Edit className="w-4 h-4" />
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(video.id)}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 transition-all font-sans font-semibold text-sm"
                  >
                    <Trash2 className="w-4 h-4" />
                    Deletar
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <Video className="w-16 h-16 text-white/20 mx-auto mb-4" />
            <p className="text-white/60 font-sans">
              {searchQuery || filterCategory !== 'all' ? 'Nenhum vídeo encontrado' : 'Nenhum vídeo cadastrado ainda'}
            </p>
          </div>
        )}
      </div>

      {/* Modal Create/Edit */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-2xl bg-zinc-950 border border-white/10 rounded-2xl p-6 lg:p-8 my-8"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title */}
              <h2 className="text-2xl lg:text-3xl font-display font-bold mb-6">
                {editingVideo ? 'Editar Vídeo' : 'Novo Vídeo'}
              </h2>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                    Título
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
                    placeholder="Ex: Técnica de Chute Circular"
                  />
                </div>

                <div>
                  <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                    Descrição
                  </label>
                  <textarea
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans resize-none"
                    placeholder="Descreva o conteúdo do vídeo..."
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                      URL do Vídeo
                    </label>
                    <div className="relative">
                      <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <input
                        type="url"
                        required
                        value={formData.videoUrl}
                        onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
                        placeholder="https://..."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                      Duração
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <input
                        type="text"
                        required
                        value={formData.duration}
                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
                        placeholder="12:45"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                    URL da Thumbnail (opcional)
                  </label>
                  <div className="relative">
                    <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="url"
                      value={formData.thumbnail}
                      onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
                      placeholder="https://..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                    Categoria
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, category: cat.value as VideoItem['category'] })}
                        className={`p-3 rounded-xl border transition-all font-sans font-semibold text-sm ${
                          formData.category === cat.value
                            ? getCategoryColor(cat.value).replace('/20', '/30')
                            : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                    Status
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, status: 'draft' })}
                      className={`p-3 rounded-xl border transition-all font-sans font-semibold text-sm ${
                        formData.status === 'draft'
                          ? 'bg-gray-500/20 border-gray-500/50 text-gray-400'
                          : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10'
                      }`}
                    >
                      Rascunho
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, status: 'published' })}
                      className={`p-3 rounded-xl border transition-all font-sans font-semibold text-sm ${
                        formData.status === 'published'
                          ? 'bg-green-500/20 border-green-500/50 text-green-400'
                          : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10'
                      }`}
                    >
                      Publicado
                    </button>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 transition-all font-sans font-semibold"
                  >
                    Cancelar
                  </button>
                  <Button type="submit" variant="primary" size="lg" className="flex-1">
                    <Check className="w-5 h-5 mr-2" />
                    {editingVideo ? 'Salvar' : 'Criar'}
                  </Button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </DashboardLayout>
  );
}

export default function VideosPage() {
  return (
    <ProtectedRoute>
      <VideosManagement />
    </ProtectedRoute>
  );
}
