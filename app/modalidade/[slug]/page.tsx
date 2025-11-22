'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Check } from 'lucide-react';
import { getModalityBySlug } from '@/lib/data/modalities';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import WeeklyCalendar from '@/components/modalities/WeeklyCalendar';
import { use } from 'react';

interface ModalityPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ModalityPage({ params }: ModalityPageProps) {
  const { slug } = use(params);
  const modality = getModalityBySlug(slug);

  if (!modality) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[100px]" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <Container>
          {/* Back Button */}
          <Link
            href="/#modalidades"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Voltar para Modalidades
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm mb-6">
                {modality.title}
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 uppercase tracking-wide"
                style={{
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.15), 0 0 40px rgba(255, 255, 255, 0.08)',
                }}
              >
                {modality.tagline}
              </h1>

              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                {modality.fullDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="glow" size="lg" magnetic>
                  Agende Sua Aula Grátis
                </Button>
                <Button variant="secondary" size="lg">
                  Falar com Instrutor
                </Button>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-10" />
              <Image
                src={modality.heroImage}
                alt={modality.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 border-t border-white/10">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Benefícios
            </h2>
            <p className="text-white/70 text-lg">
              O que você vai conquistar com {modality.title}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modality.benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="relative py-20 border-t border-white/10">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              O Que Oferecemos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {modality.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/[0.07] transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-white/90 leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Schedule Section */}
      <section className="relative py-20 border-t border-white/10">
        <Container>
          <WeeklyCalendar
            schedule={modality.schedule}
            modalityName={modality.title}
          />
        </Container>
      </section>

      {/* Requirements & What to Expect */}
      <section className="relative py-20 border-t border-white/10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Requirements */}
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                O Que Você Precisa
              </h2>
              <div className="space-y-4">
                {modality.requirements.map((requirement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green-400" />
                    </div>
                    <p className="text-white/90 leading-relaxed">
                      {requirement}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* What to Expect */}
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                O Que Esperar
              </h2>
              <div className="space-y-4">
                {modality.whatToExpect.map((expectation, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-white/20 border border-white/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-white/90 leading-relaxed">
                      {expectation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing Section */}
      <section className="relative py-20 border-t border-white/10">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Planos e Valores
            </h2>
            <p className="text-white/70 text-lg">
              Escolha o plano ideal para você
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Monthly */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300">
              <h3 className="text-2xl font-display font-bold mb-2">Mensal</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">R$ {modality.pricing.monthly}</span>
                <span className="text-white/50">/mês</span>
              </div>
              <Button variant="secondary" size="lg" className="w-full">
                Assinar Mensal
              </Button>
            </div>

            {/* Quarterly - Popular */}
            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-8 relative hover:bg-white/[0.12] transition-all duration-300 scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-sm font-bold">
                Mais Popular
              </div>
              <h3 className="text-2xl font-display font-bold mb-2">Trimestral</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">R$ {modality.pricing.quarterly}</span>
                <span className="text-white/50">/mês</span>
                <div className="text-sm text-green-400 mt-1">
                  Economize {Math.round((1 - modality.pricing.quarterly / modality.pricing.monthly) * 100)}%
                </div>
              </div>
              <Button variant="glow" size="lg" className="w-full">
                Assinar Trimestral
              </Button>
            </div>

            {/* Annual */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300">
              <h3 className="text-2xl font-display font-bold mb-2">Anual</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">R$ {modality.pricing.annual}</span>
                <span className="text-white/50">/mês</span>
                <div className="text-sm text-green-400 mt-1">
                  Economize {Math.round((1 - modality.pricing.annual / modality.pricing.monthly) * 100)}%
                </div>
              </div>
              <Button variant="secondary" size="lg" className="w-full">
                Assinar Anual
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 border-t border-white/10">
        <Container>
          <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Pronto Para Começar?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Agende sua aula experimental gratuita e descubra como {modality.title} pode transformar sua vida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glow" size="lg" magnetic className="min-w-[240px]">
                Agendar Aula Grátis
              </Button>
              <Button variant="secondary" size="lg" className="min-w-[240px]">
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Gradient overlay bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </main>
  );
}
