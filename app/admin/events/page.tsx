'use client';

import { useState } from 'react';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { DashboardLayout } from '@/components/admin/DashboardLayout';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Plus,
  Edit,
  Trash2,
  MapPin,
  Clock,
  Users,
  X,
  Check,
  Search,
} from 'lucide-react';
import Button from '@/components/ui/Button';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  maxParticipants: number;
  currentParticipants: number;
  status: 'upcoming' | 'ongoing' | 'completed';
}

const MOCK_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Campeonato Estadual de Muay Thai',
    date: '2024-11-25',
    time: '09:00',
    location: 'Ginásio Municipal',
    description: 'Competição estadual com categorias júnior e adulto',
    maxParticipants: 50,
    currentParticipants: 38,
    status: 'upcoming',
  },
  {
    id: '2',
    title: 'Treino Especial Kids',
    date: '2024-11-20',
    time: '15:00',
    location: 'Academia - Tatame Principal',
    description: 'Aula especial para crianças com atividades lúdicas',
    maxParticipants: 30,
    currentParticipants: 25,
    status: 'ongoing',
  },
  {
    id: '3',
    title: 'Workshop de Defesa Pessoal',
    date: '2024-11-15',
    time: '10:00',
    location: 'Academia - Sala 2',
    description: 'Workshop gratuito aberto ao público',
    maxParticipants: 40,
    currentParticipants: 40,
    status: 'completed',
  },
];

function EventsManagement() {
  const [events, setEvents] = useState<Event[]>(MOCK_EVENTS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    maxParticipants: 30,
  });

  const handleCreate = () => {
    setEditingEvent(null);
    setFormData({
      title: '',
      date: '',
      time: '',
      location: '',
      description: '',
      maxParticipants: 30,
    });
    setIsModalOpen(true);
  };

  const handleEdit = (event: Event) => {
    setEditingEvent(event);
    setFormData({
      title: event.title,
      date: event.date,
      time: event.time,
      location: event.location,
      description: event.description,
      maxParticipants: event.maxParticipants,
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Tem certeza que deseja deletar este evento?')) {
      setEvents(events.filter(e => e.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingEvent) {
      // Update
      setEvents(events.map(ev =>
        ev.id === editingEvent.id
          ? { ...ev, ...formData }
          : ev
      ));
    } else {
      // Create
      const newEvent: Event = {
        id: Date.now().toString(),
        ...formData,
        currentParticipants: 0,
        status: 'upcoming',
      };
      setEvents([newEvent, ...events]);
    }

    setIsModalOpen(false);
  };

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'ongoing':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'completed':
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      default:
        return 'bg-white/10 text-white/60 border-white/20';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'upcoming': return 'Próximo';
      case 'ongoing': return 'Em andamento';
      case 'completed': return 'Concluído';
      default: return status;
    }
  };

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl lg:text-4xl font-display font-bold mb-2">
              Eventos
            </h1>
            <p className="text-white/60 font-sans">
              Gerencie competições, workshops e treinos especiais
            </p>
          </div>
          <Button variant="primary" size="md" onClick={handleCreate} className='flex flex-rowgap-1'>
            <Plus className="w-5 h-5 mr-2" />
            Novo Evento
          </Button>
        </div>

        {/* Search */}
        <div className="mb-6 max-w-md">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              placeholder="Buscar eventos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
            />
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-white/20 transition-all group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <span className={`text-xs font-sans px-3 py-1 rounded-full border ${getStatusColor(event.status)}`}>
                  {getStatusLabel(event.status)}
                </span>
              </div>

              {/* Content */}
              <div className="mb-4">
                <h3 className="text-xl font-display font-bold mb-3 pr-24">
                  {event.title}
                </h3>

                <div className="space-y-2 text-sm font-sans text-white/70">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-white/60" />
                    <span>{new Date(event.date).toLocaleDateString('pt-BR')} às {event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-white/60" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-white/60" />
                    <span>{event.currentParticipants} / {event.maxParticipants} participantes</span>
                  </div>
                </div>

                <p className="text-white/60 font-sans text-sm mt-3 line-clamp-2">
                  {event.description}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
                    style={{
                      width: `${(event.currentParticipants / event.maxParticipants) * 100}%`,
                    }}
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(event)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500/20 transition-all font-sans font-semibold text-sm"
                >
                  <Edit className="w-4 h-4" />
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(event.id)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 transition-all font-sans font-semibold text-sm"
                >
                  <Trash2 className="w-4 h-4" />
                  Deletar
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 text-white/20 mx-auto mb-4" />
            <p className="text-white/60 font-sans">
              {searchQuery ? 'Nenhum evento encontrado' : 'Nenhum evento criado ainda'}
            </p>
          </div>
        )}
      </div>

      {/* Modal Create/Edit */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-2xl bg-zinc-950 border border-white/10 rounded-2xl p-6 lg:p-8"
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
                {editingEvent ? 'Editar Evento' : 'Novo Evento'}
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
                    placeholder="Ex: Campeonato Estadual"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                      Data
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-all font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                      Horário
                    </label>
                    <input
                      type="time"
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-all font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                    Local
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans"
                    placeholder="Ex: Ginásio Municipal"
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
                    placeholder="Descreva o evento..."
                  />
                </div>

                <div>
                  <label className="block text-white/80 font-sans font-semibold text-sm mb-2">
                    Máximo de Participantes
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={formData.maxParticipants}
                    onChange={(e) => setFormData({ ...formData, maxParticipants: parseInt(e.target.value) })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-all font-sans"
                  />
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
                    {editingEvent ? 'Salvar' : 'Criar'}
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

export default function EventsPage() {
  return (
    <ProtectedRoute>
      <EventsManagement />
    </ProtectedRoute>
  );
}
