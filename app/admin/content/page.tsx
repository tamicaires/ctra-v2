'use client';

import { useState } from 'react';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { DashboardLayout } from '@/components/admin/DashboardLayout';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  Plus,
  Edit,
  Trash2,
  X,
  Check,
  Search,
  Eye,
  Calendar,
  AlignLeft,
  Type,
  Image as ImageIcon,
} from 'lucide-react';
import Button from '@/components/ui/Button';

interface ContentItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: 'blog' | 'noticia' | 'dica' | 'anuncio';
  author: string;
  publishedAt: string;
  views: number;
  status: 'published' | 'draft';
}

const MOCK_CONTENT: ContentItem[] = [
  {
    id: '1',
    title: 'Benefícios do Muay Thai para Crianças',
    slug: 'beneficios-muay-thai-criancas',
    excerpt: 'Descubra como o Muay Thai pode ajudar no desenvolvimento físico e mental das crianças',
    content: 'Conteúdo completo do artigo...',
    featuredImage: '/placeholder-blog.jpg',
    category: 'blog',
    author: 'Rodrigo Argentino',
    publishedAt: '2024-11-10',
    views: 1240,
    status: 'published',
  },
  {
    id: '2',
    title: 'Novo Horário de Treinos - Dezembro 2024',
    slug: 'novo-horario-treinos-dezembro',
    excerpt: 'Confira os novos horários de treino para o mês de dezembro',
    content: 'Conteúdo completo do anúncio...',
    featuredImage: '/placeholder-blog.jpg',
    category: 'anuncio',
    author: 'Academia CTRA',
    publishedAt: '2024-11-08',
    views: 856,
    status: 'published',
  },
  {
    id: '3',
    title: '5 Dicas para Iniciantes no Jiu-Jitsu',
    slug: '5-dicas-iniciantes-jiu-jitsu',
    excerpt: 'Dicas essenciais para quem está começando a treinar Jiu-Jitsu',
    content: 'Conteúdo completo do artigo...',
    featuredImage: '/placeholder-blog.jpg',
    category: 'dica',
    author: 'Rodrigo Argentino',
    publishedAt: '2024-11-05',
    views: 2105,
    status: 'published',
  },
];

const CATEGORIES = [
  { value: 'blog', label: 'Blog', color: 'blue' },
  { value: 'noticia', label: 'Notícia', color: 'green' },
  { value: 'dica', label: 'Dica', color: 'purple' },
  { value: 'anuncio', label: 'Anúncio', color: 'yellow' },
];

function ContentManagement() {
  const [content, setContent] = useState<ContentItem[]>(MOCK_CONTENT);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingContent, setEditingContent] = useState<ContentItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    featuredImage: '',
    category: 'blog' as ContentItem['category'],
    author: 'Rodrigo Argentino',
    status: 'draft' as 'published' | 'draft',
  });

  const handleCreate = () => {
    setEditingContent(null);
    setFormData({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      featuredImage: '',
      category: 'blog',
      author: 'Rodrigo Argentino',
      status: 'draft',
    });
    setIsModalOpen(true);
  };

  const handleEdit = (item: ContentItem) => {
    setEditingContent(item);
    setFormData({
      title: item.title,
      slug: item.slug,
      excerpt: item.excerpt,
      content: item.content,
      featuredImage: item.featuredImage,
      category: item.category,
      author: item.author,
      status: item.status,
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Tem certeza que deseja deletar este conteúdo?')) {
      setContent(content.filter(c => c.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingContent) {
      setContent(content.map(c =>
        c.id === editingContent.id
          ? { ...c, ...formData }
          : c
      ));
    } else {
      const newContent: ContentItem = {
        id: Date.now().toString(),
        ...formData,
        views: 0,
        publishedAt: new Date().toISOString().split('T')[0],
      };
      setContent([newContent, ...content]);
    }

    setIsModalOpen(false);
  };

  // Auto-generate slug from title
  const handleTitleChange = (title: string) => {
    const slug = title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    setFormData({ ...formData, title, slug });
  };

  const filteredContent = content.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'all' || item.category === filterCategory;
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
              <FileText className="w-8 h-8 text-blue-400" />
              <h1 className="text-3xl lg:text-4xl font-display font-bold">
                Conteúdo
              </h1>
            </div>
            <p className="text-white/60 font-sans">
              Gerencie blog posts, notícias e anúncios
            </p>
          </div>
          <Button variant="primary" size="md" onClick={handleCreate}>
            <Plus className="w-5 h-5 mr-2" />
            Novo Conteúdo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm p-6">
            <div className="flex items-center gap-3 mb-2">
              <FileText className="w-6 h-6 text-blue-400" />
              <p className="text-white/60 font-sans text-sm">Total de Posts</p>
            </div>
            <p className="text-3xl font-display font-bold">{content.length}</p>
          </div>

          <div className="rounded-xl border border-green-500/30 bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm p-6">
            <div className="flex items-center gap-3 mb-2">
              <Check className="w-6 h-6 text-green-400" />
              <p className="text-white/60 font-sans text-sm">Publicados</p>
            </div>
            <p className="text-3xl font-display font-bold">
              {content.filter(c => c.status === 'published').length}
            </p>
          </div>

          <div className="rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm p-6">
            <div className="flex items-center gap-3 mb-2">
              <Eye className="w-6 h-6 text-purple-400" />
              <p className="text-white/60 font-sans text-sm">Total de Views</p>
            </div>
            <p className="text-3xl font-display font-bold">
              {content.reduce((sum, c) => sum + c.views, 0).toLocaleString()}
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-6">
            <div className="flex items-center gap-3 mb-2">
              <FileText className="w-6 h-6 text-white/60" />
              <p className="text-white/60 font-sans text-sm">Rascunhos</p>
            </div>
            <p className="text-3xl font-display font-bold">
              {content.filter(c => c.status === 'draft').length}
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
                placeholder="Buscar conteúdo..."
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

        {/* Content List */}
        <div className="space-y-4">
          {filteredContent.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-white/20 transition-all group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Featured Image Placeholder */}
                <div className="w-full lg:w-48 h-32 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ImageIcon className="w-12 h-12 text-white/20" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Badges */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-sans px-2 py-1 rounded-full border ${getCategoryColor(item.category)}`}>
                      {CATEGORIES.find(c => c.value === item.category)?.label}
                    </span>
                    <span className={`text-xs font-sans px-2 py-1 rounded-full border ${getStatusBadge(item.status)}`}>
                      {item.status === 'published' ? 'Publicado' : 'Rascunho'}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-white/60 font-sans text-sm mb-4 line-clamp-2">
                    {item.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs font-sans text-white/50 mb-4">
                    <div className="flex items-center gap-1">
                      <Type className="w-4 h-4" />
                      <span>{item.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(item.publishedAt).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{item.views.toLocaleString()} views</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500/20 transition-all font-sans font-semibold text-sm"
                    >
                      <Edit className="w-4 h-4" />
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 transition-all font-sans font-semibold text-sm"
                    >
                      <Trash2 className="w-4 h-4" />
                      Deletar
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-white/20 mx-auto mb-4" />
            <p className="text-white/60 font-sans">
              {searchQuery || filterCategory !== 'all' ? 'Nenhum conteúdo encontrado' : 'Nenhum conteúdo criado ainda'}
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
              className="relative w-full max-w-3xl bg-zinc-950 border border-white/10 rounded-2xl p-6 lg:p-8 my-8"
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
                {editingContent ? 'Editar Conteúdo' : 'Novo Conteúdo'}
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
                    onChange={(e) => handleTitleChange(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
                    placeholder="Ex: Benefícios do Muay Thai"
                  />
                </div>

                <div>
                  <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                    Slug (URL amigável)
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
                    placeholder="beneficios-muay-thai"
                  />
                </div>

                <div>
                  <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                    Resumo
                  </label>
                  <textarea
                    required
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    rows={2}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans resize-none"
                    placeholder="Breve resumo do conteúdo..."
                  />
                </div>

                <div>
                  <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                    Conteúdo Completo
                  </label>
                  <textarea
                    required
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    rows={8}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans resize-none"
                    placeholder="Escreva o conteúdo completo..."
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                      Autor
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.author}
                      onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
                      placeholder="Nome do autor"
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                      Imagem Destaque (URL)
                    </label>
                    <input
                      type="url"
                      value={formData.featuredImage}
                      onChange={(e) => setFormData({ ...formData, featuredImage: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
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
                        onClick={() => setFormData({ ...formData, category: cat.value as ContentItem['category'] })}
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
                    {editingContent ? 'Salvar' : 'Criar'}
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

export default function ContentPage() {
  return (
    <ProtectedRoute>
      <ContentManagement />
    </ProtectedRoute>
  );
}
