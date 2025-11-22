'use client';

import { motion } from 'framer-motion';
import { Quote, Star, User } from 'lucide-react';
import Container from '@/components/ui/Container';

const testimonials = [
  {
    id: 1,
    name: 'Ana Paula',
    age: 29,
    modality: 'Muay Thai',
    rating: 5,
    quote: 'Nunca imaginei que com 29 anos eu fosse descobrir minha paixão. O Muay Thai me deu confiança, saúde e uma família. Melhor investimento da minha vida.',
  },
  {
    id: 2,
    name: 'Carlos Eduardo',
    age: 42,
    modality: 'Jiu-Jitsu',
    rating: 5,
    quote: 'Comecei do absoluto zero aos 42 anos. Hoje, 2 anos depois, tenho faixa roxa e compito. Se eu consegui, qualquer um consegue. Os professores são incríveis.',
  },
  {
    id: 3,
    name: 'Roberta Lima',
    age: 35,
    modality: 'Boxe',
    rating: 5,
    quote: 'Perdi 18kg em 6 meses e ganhei uma disciplina que mudou minha vida profissional também. O boxe não é só sobre socar - é sobre superar limites.',
  },
  {
    id: 4,
    name: 'Fernando Santos',
    age: 38,
    modality: 'MMA',
    rating: 5,
    quote: 'Treino há 3 anos e minha vida mudou completamente. Perdi 25kg, ganhei disciplina e hoje compito amadoramente. A equipe é sensacional.',
  },
  {
    id: 5,
    name: 'Juliana Costa',
    age: 31,
    modality: 'Muay Thai',
    rating: 5,
    quote: 'Sempre tive medo de lutas, mas os professores me acolheram e me ensinaram com paciência. Hoje sou faixa azul e não consigo imaginar minha vida sem o tatame.',
  },
  {
    id: 6,
    name: 'Ricardo Alves',
    age: 45,
    modality: 'Jiu-Jitsu',
    rating: 5,
    quote: 'Comecei aos 45 anos achando que era tarde demais. Hoje, aos 47, sou faixa roxa e nunca me senti tão bem. Nunca é tarde para começar!',
  },
  {
    id: 7,
    name: 'Mariana Oliveira',
    age: 26,
    modality: 'Boxe',
    rating: 5,
    quote: 'O boxe me ensinou muito mais que socar. Me ensinou disciplina, respeito e autoconfiança. Transformou completamente minha postura na vida.',
  },
  {
    id: 8,
    name: 'Paulo Henrique',
    age: 33,
    modality: 'MMA',
    rating: 5,
    quote: 'Melhor academia da região, sem dúvidas. Estrutura impecável, professores extremamente qualificados e um ambiente que realmente motiva você a evoluir.',
  },
  {
    id: 9,
    name: 'Camila Rodrigues',
    age: 28,
    modality: 'Muay Thai',
    rating: 5,
    quote: 'Entrei na academia insegura e com baixa autoestima. Hoje sou uma pessoa completamente diferente. O Muay Thai me salvou em todos os sentidos.',
  },
];

const TestimonialsSection = () => {
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
            O Que Nossos Alunos Dizem
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto font-sans">
            Palavras de quem vive a transformação todos os dias
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm p-6 lg:p-8 hover:border-white/30 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.6, 0.01, 0.05, 0.95]
              }}
              whileHover={{ y: -5 }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 40px rgba(255, 255, 255, 0.05)' }}
              />

              <div className="relative z-10">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-10 h-10 text-white/20" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500/80 fill-yellow-500/80" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-white/80 font-sans leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/20 to-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-white/60" />
                  </div>

                  {/* Details */}
                  <div>
                    <div className="font-sans font-bold text-white text-sm">
                      {testimonial.name}, {testimonial.age}
                    </div>
                    <div className="text-white/60 font-sans text-xs">
                      {testimonial.modality}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {[
            { value: '4.9/5', label: 'Avaliação Média', icon: Star },
            { value: '380+', label: 'Alunos Ativos', icon: User },
            { value: '98%', label: 'Recomendam', icon: Quote },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="text-center p-6 lg:p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <Icon className="w-8 h-8 mx-auto mb-3 text-white/60" />
                <div className="text-3xl lg:text-4xl font-display font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60 font-sans">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </motion.div>
      </Container>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};

export default TestimonialsSection;
