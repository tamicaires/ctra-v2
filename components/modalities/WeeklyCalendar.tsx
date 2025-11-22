'use client';

import { motion } from 'framer-motion';
import { Clock, Users, Award } from 'lucide-react';
import { Schedule } from '@/lib/data/modalities';

interface WeeklyCalendarProps {
  schedule: Schedule[];
  modalityName: string;
}

const WeeklyCalendar = ({ schedule, modalityName }: WeeklyCalendarProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const dayVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, 0.01, 0.05, 0.95]
      }
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Iniciante':
        return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'Intermediário':
        return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      case 'Avançado':
        return 'bg-red-500/10 text-red-400 border-red-500/20';
      case 'Todos':
        return 'bg-white/10 text-white border-white/20';
      default:
        return 'bg-white/10 text-white border-white/20';
    }
  };

  const getAvailabilityColor = (available: number, total: number) => {
    const percentage = (available / total) * 100;
    if (percentage > 50) return 'text-green-400';
    if (percentage > 20) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="w-full">
      <motion.div
        className="mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Horários de {modalityName}
        </h2>
        <p className="text-white/70 text-lg">
          Escolha o melhor horário para sua rotina
        </p>
      </motion.div>

      {/* Calendar Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {schedule.map((day, dayIndex) => (
          <motion.div
            key={day.day}
            variants={dayVariants}
            className="relative"
          >
            {/* Day Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300">
              {/* Day Header */}
              <div className="mb-6 pb-4 border-b border-white/10">
                <h3 className="text-xl font-display font-bold text-white">
                  {day.day}
                </h3>
                <p className="text-sm text-white/50 uppercase tracking-wider">
                  {day.dayShort}
                </p>
              </div>

              {/* Time Slots */}
              <div className="space-y-3">
                {day.slots.length > 0 ? (
                  day.slots.map((slot, slotIndex) => (
                    <motion.div
                      key={`${day.day}-${slot.time}-${slotIndex}`}
                      className="bg-black/20 border border-white/10 rounded-xl p-4 hover:bg-black/30 hover:border-white/20 transition-all duration-200 group cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Time */}
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-white/70" />
                        <span className="font-semibold text-white">
                          {slot.time}
                        </span>
                      </div>

                      {/* Instructor */}
                      <div className="text-sm text-white/60 mb-2">
                        {slot.instructor}
                      </div>

                      {/* Level Badge */}
                      <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border mb-2 ${getLevelColor(slot.level)}`}>
                        <Award className="w-3 h-3" />
                        {slot.level}
                      </div>

                      {/* Availability */}
                      <div className="flex items-center gap-2 mt-3 pt-3 border-t border-white/10">
                        <Users className="w-4 h-4 text-white/70" />
                        <span className={`text-sm font-medium ${getAvailabilityColor(slot.available, slot.total)}`}>
                          {slot.available} / {slot.total} vagas
                        </span>
                      </div>

                      {/* Hover indicator */}
                      <div className="absolute inset-0 rounded-xl border-2 border-white/0 group-hover:border-white/10 transition-all duration-200 pointer-events-none" />
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-8 text-white/40">
                    Sem aulas neste dia
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Legend */}
      <motion.div
        className="mt-8 flex flex-wrap gap-4 justify-center items-center text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-white/60">Iniciante</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="text-white/60">Intermediário</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <span className="text-white/60">Avançado</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-white" />
          <span className="text-white/60">Todos os níveis</span>
        </div>
      </motion.div>
    </div>
  );
};

export default WeeklyCalendar;
