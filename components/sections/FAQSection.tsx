'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import Container from '@/components/ui/Container';

const faqs = [
  {
    id: 1,
    question: 'Nunca treinei nada na vida. Posso começar?',
    answer: 'SIM! 70% dos nossos alunos nunca haviam pisado em um tatame antes. Nossas turmas de iniciantes são feitas exatamente para quem está começando do zero. Os professores são especialistas em ensinar fundamentos com paciência e didática. Você evolui no seu ritmo, sem pressa, sem pressão.',
  },
  {
    id: 2,
    question: 'Preciso estar em forma para começar?',
    answer: 'Absolutamente não. O treino é que vai te colocar em forma. Temos alunos de todos os níveis de condicionamento físico - de sedentários completos a atletas. Adaptamos cada exercício para seu nível atual. Você começa de onde está e evolui naturalmente.',
  },
  {
    id: 3,
    question: 'Tenho medo de me machucar. É seguro?',
    answer: 'Total segurança. Usamos equipamentos profissionais de proteção, turmas separadas por nível, e professores atentos a cada aluno. Artes marciais, quando bem ensinadas, são MAIS seguras que futebol ou corrida. Taxa de lesão aqui é mínima.',
  },
  {
    id: 4,
    question: 'Qual equipamento preciso ter?',
    answer: 'Para a PRIMEIRA AULA: apenas roupa confortável (calção/legging e camiseta). Temos luvas, caneleiras e todo equipamento básico para você usar. Só precisa trazer vontade. Conforme avança, te orientamos sobre o que comprar.',
  },
  {
    id: 5,
    question: 'Quanto tempo até ver resultados?',
    answer: 'Resultados MENTAIS (confiança, disciplina): imediato, primeiro dia. Resultados FÍSICOS (definição, perda de peso): 2-3 semanas. Resultados TÉCNICOS (saber se defender): 1-2 meses. Condicionamento cardio e força: progressivo, melhora a cada semana.',
  },
  {
    id: 6,
    question: 'Posso treinar mais de uma modalidade?',
    answer: 'Sim, e é até recomendado! Muitos alunos combinam Muay Thai + Jiu-Jitsu, ou Boxe + MMA. Nossos planos intermediário e premium incluem acesso a múltiplas modalidades. Isso acelera sua evolução como lutador completo.',
  },
  {
    id: 7,
    question: 'Tem treino para crianças?',
    answer: 'Sim! Turmas infantis a partir de 6 anos, com metodologia lúdica e educativa. Desenvolvemos disciplina, respeito, coordenação motora e autoconfiança. Muitos pais treinam no mesmo horário que os filhos.',
  },
  {
    id: 8,
    question: 'Qual a idade máxima para começar?',
    answer: 'Não existe! Nosso aluno mais velho começou aos 63 anos e está há 3 anos firme. Se você consegue se movimentar, consegue treinar. Adaptamos tudo para sua condição física atual.',
  },
  {
    id: 9,
    question: 'Quanto custa?',
    answer: 'Temos planos a partir de R$ 199/mês. Primeira aula é GRÁTIS para você conhecer. Sem taxa de matrícula, sem pegadinha. Venha experimentar sem compromisso.',
  },
  {
    id: 10,
    question: 'Posso cancelar quando quiser?',
    answer: 'Sim. Não trabalhamos com contratos de fidelidade abusivos. Você fica enquanto estiver feliz. Mas garanto: vai querer ficar para sempre.',
  },
];

const FAQSection = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

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
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-white/[0.015] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[100px]" />

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
            Perguntas Frequentes
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto font-sans">
            Tudo o que você precisa saber antes de começar
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                ease: [0.6, 0.01, 0.05, 0.95]
              }}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-5 lg:px-8 lg:py-6 flex items-start gap-4 text-left hover:bg-white/5 transition-colors"
              >
                {/* Icon */}
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-white/70" />
                  </div>
                </div>

                {/* Question Text */}
                <div className="flex-1">
                  <h3 className="font-sans font-bold text-white text-lg lg:text-xl pr-4">
                    {faq.question}
                  </h3>
                </div>

                {/* Chevron */}
                <div className="flex-shrink-0 mt-1">
                  <motion.div
                    animate={{ rotate: openId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-white/60" />
                  </motion.div>
                </div>
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.6, 0.01, 0.05, 0.95] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 lg:px-8 lg:pb-8 pl-20 lg:pl-24">
                      <div className="pt-2 border-t border-white/10">
                        <p className="text-white/70 font-sans leading-relaxed pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Subtle glow on hover */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 40px rgba(255, 255, 255, 0.03)' }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 lg:mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-white/60 font-sans mb-4">
            Ainda tem dúvidas?
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors font-sans font-semibold"
          >
            Entre em contato pelo WhatsApp
            <span className="text-xl">→</span>
          </a>
        </motion.div>
      </Container>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};

export default FAQSection;
