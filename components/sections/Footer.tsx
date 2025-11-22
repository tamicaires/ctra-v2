'use client';

import Image from 'next/image';
import { Instagram, Facebook, Youtube, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';
import Container from '@/components/ui/Container';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-white/10">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.01]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <Container className="relative z-10">
        {/* Main Footer */}
        <div className="py-12 lg:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Column 1 - Logo & Social */}
          <div>
            {/* Logo */}
            <div className="mb-6">
              <a href="#" className="inline-block">
                <div className="rounded-full bg-white p-1 flex items-center justify-center w-16 h-16"
                  style={{ boxShadow: '0 0 15px rgba(255, 255, 255, 0.2)' }}>
                  <Image
                    src="/logo.png"
                    alt="Rodrigo Argentino"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
              </a>
            </div>

            {/* Tagline */}
            <p className="text-white/60 font-sans text-sm mb-6 leading-relaxed max-w-xs">
              Formando campeões e transformando vidas através das artes marciais desde 1999.
            </p>

            {/* Social Media */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Youtube, href: '#', label: 'Youtube' },
                { icon: MessageCircle, href: '#', label: 'WhatsApp' },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 hover:border-white/30 transition-all"
                  >
                    <Icon className="w-5 h-5 text-white/70" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2 - Modalidades */}
          <div>
            <h3 className="font-display font-bold text-white text-lg uppercase mb-4">
              Modalidades
            </h3>
            <ul className="space-y-2 font-sans text-white/60 text-sm">
              {['Muay Thai', 'Jiu-Jitsu', 'Boxe', 'MMA', 'Infantil'].map((modality, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-white transition-colors inline-block">
                    {modality}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Institucional */}
          <div>
            <h3 className="font-display font-bold text-white text-lg uppercase mb-4">
              Institucional
            </h3>
            <ul className="space-y-2 font-sans text-white/60 text-sm">
              {['Sobre Nós', 'Nossos Mestres', 'Atletas', 'Horários', 'Planos'].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-white transition-colors inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contato */}
          <div>
            <h3 className="font-display font-bold text-white text-lg uppercase mb-4">
              Contato
            </h3>
            <ul className="space-y-3 font-sans text-white/60 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Rua Exemplo, 123<br />Centro - Cidade/UF<br />CEP 12345-678</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+5511999999999" className="hover:text-white transition-colors">
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 flex-shrink-0" />
                <a href="https://wa.me/5511999999999" className="hover:text-white transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:contato@academia.com" className="hover:text-white transition-colors">
                  contato@academia.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-5 h-5 flex-shrink-0" />
                <a href="https://instagram.com/academia" className="hover:text-white transition-colors">
                  @rodrigoargentino
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/50 font-sans text-xs">
            <div className="text-center sm:text-left">
              © {currentYear} Rodrigo Argentino - Brazilian Jiujitsu and Muaythai. Todos os direitos reservados.
            </div>
            <div className="flex items-center gap-4">
              <span>Desenvolvido com 🥋</span>
              <span className="text-white/20">|</span>
              <a href="#" className="hover:text-white transition-colors">
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
