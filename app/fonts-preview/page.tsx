'use client';

import {
  Inter,
  Playfair_Display,
  Montserrat,
  Lora,
  Poppins,
  Crimson_Pro,
  Work_Sans,
  Merriweather,
  Bebas_Neue,
  Space_Grotesk,
  Source_Serif_4,
  // FONTES FORTES E DIFERENCIADAS
  Oswald,
  Anton,
  Kanit,
  Russo_One,
  Saira_Condensed,
  Rajdhani,
  Barlow_Condensed,
  Black_Ops_One,
  Staatliches,
  Teko
} from 'next/font/google';

// === FONTES PREMIUM/SUAVES ===
const inter = Inter({ subsets: ['latin'], weight: ['400', '600', '700', '900'] });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700', '900'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '600', '700', '900'] });
const lora = Lora({ subsets: ['latin'], weight: ['400', '600', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700', '900'] });
const crimsonPro = Crimson_Pro({ subsets: ['latin'], weight: ['400', '600', '700', '900'] });
const workSans = Work_Sans({ subsets: ['latin'], weight: ['400', '600', '700', '900'] });
const merriweather = Merriweather({ subsets: ['latin'], weight: ['400', '700', '900'] });
const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: ['400'] });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400', '600', '700'] });
const sourceSerif = Source_Serif_4({ subsets: ['latin'], weight: ['400', '600', '700', '900'] });

// === FONTES FORTES/IMPACTO ===
const oswald = Oswald({ subsets: ['latin'], weight: ['400', '600', '700'] });
const anton = Anton({ subsets: ['latin'], weight: ['400'] });
const kanit = Kanit({ subsets: ['latin'], weight: ['400', '600', '700', '900'] });
const russoOne = Russo_One({ subsets: ['latin'], weight: ['400'] });
const sairaCondensed = Saira_Condensed({ subsets: ['latin'], weight: ['400', '600', '700', '900'] });
const rajdhani = Rajdhani({ subsets: ['latin'], weight: ['400', '600', '700'] });
const barlowCondensed = Barlow_Condensed({ subsets: ['latin'], weight: ['400', '600', '700', '900'] });
const blackOpsOne = Black_Ops_One({ subsets: ['latin'], weight: ['400'] });
const staatliches = Staatliches({ subsets: ['latin'], weight: ['400'] });
const teko = Teko({ subsets: ['latin'], weight: ['400', '600', '700'] });

const premiumFonts = [
  {
    name: 'Opção 1: Elegante & Clássico',
    subtitle: 'Inter + Playfair Display (Atual)',
    sans: inter.className,
    serif: playfair.className,
    recommended: false,
  },
  {
    name: 'Opção 2: Forte & Moderno',
    subtitle: 'Montserrat + Lora',
    sans: montserrat.className,
    serif: lora.className,
    recommended: true,
    badge: 'Recomendado',
  },
  {
    name: 'Opção 3: Minimalista & Premium',
    subtitle: 'Poppins + Crimson Pro',
    sans: poppins.className,
    serif: crimsonPro.className,
    recommended: false,
  },
  {
    name: 'Opção 4: Editorial & Profissional',
    subtitle: 'Work Sans + Merriweather',
    sans: workSans.className,
    serif: merriweather.className,
    recommended: false,
  },
  {
    name: 'Opção 5: Impacto Máximo',
    subtitle: 'Bebas Neue + Inter + Playfair',
    display: bebasNeue.className,
    sans: inter.className,
    serif: playfair.className,
    recommended: true,
    badge: 'Impacto',
  },
  {
    name: 'Opção 6: Tech & Forte',
    subtitle: 'Space Grotesk + Source Serif Pro',
    sans: spaceGrotesk.className,
    serif: sourceSerif.className,
    recommended: false,
  },
];

const strongFonts = [
  {
    name: 'IMPACTO 1: Ultra Bold',
    subtitle: 'Anton + Barlow Condensed + Inter',
    display: anton.className,
    sans: barlowCondensed.className,
    body: inter.className,
    recommended: true,
    badge: 'ULTRA FORTE',
    description: 'Anton é ultra-bold e impactante. Perfeito para headlines gigantes.',
  },
  {
    name: 'IMPACTO 2: Condensed Power',
    subtitle: 'Oswald + Rajdhani + Lora',
    display: oswald.className,
    sans: rajdhani.className,
    serif: lora.className,
    recommended: true,
    badge: 'MUITO USADO',
    description: 'Oswald é condensada e forte. Visual atlético e profissional.',
  },
  {
    name: 'IMPACTO 3: Muay Thai Spirit',
    subtitle: 'Kanit + Saira Condensed + Inter',
    display: kanit.className,
    sans: sairaCondensed.className,
    body: inter.className,
    recommended: true,
    badge: '🥊 MUAY THAI',
    description: 'Kanit é tailandesa! Perfeita para Muay Thai. Moderna e forte.',
  },
  {
    name: 'IMPACTO 4: Military Strength',
    subtitle: 'Black Ops One + Teko + Work Sans',
    display: blackOpsOne.className,
    sans: teko.className,
    body: workSans.className,
    recommended: true,
    badge: 'MILITAR',
    description: 'Black Ops One tem visual militar/tático. Muito diferenciada!',
  },
  {
    name: 'IMPACTO 5: Bold & Unique',
    subtitle: 'Russo One + Barlow Condensed + Inter',
    display: russoOne.className,
    sans: barlowCondensed.className,
    body: inter.className,
    recommended: true,
    badge: 'ÚNICA',
    description: 'Russo One é única e chamativa. Visual russo/forte.',
  },
  {
    name: 'IMPACTO 6: German Power',
    subtitle: 'Staatliches + Rajdhani + Source Serif',
    display: staatliches.className,
    sans: rajdhani.className,
    serif: sourceSerif.className,
    recommended: true,
    badge: 'ALEMÃ',
    description: 'Staatliches (alemão = estatal). Visual autoritário e forte.',
  },
  {
    name: 'IMPACTO 7: Condensed Tech',
    subtitle: 'Teko + Saira Condensed + Inter',
    display: teko.className,
    sans: sairaCondensed.className,
    body: inter.className,
    recommended: false,
    badge: 'TECH',
    description: 'Teko é ultra-condensada. Visual tech e moderno.',
  },
  {
    name: 'IMPACTO 8: The Beast',
    subtitle: 'Bebas Neue + Oswald + Rajdhani',
    display: bebasNeue.className,
    sans: oswald.className,
    body: rajdhani.className,
    recommended: true,
    badge: '🔥 FAVORITA',
    description: 'Combo de 3 fontes condensadas. Máximo impacto visual!',
  },
];

interface FontCardProps {
  option: any;
  index: number;
  isStrong?: boolean;
}

function FontCard({ option, index, isStrong = false }: FontCardProps) {
  return (
    <div
      className="border border-white/10 rounded-2xl p-6 lg:p-8 relative overflow-hidden hover:border-white/30 transition-all bg-black"
    >
      {/* Badge */}
      {option.recommended && (
        <div className="absolute top-4 right-4 px-3 py-1 bg-white text-black text-xs font-bold rounded-full">
          {option.badge}
        </div>
      )}

      {/* Title */}
      <div className="mb-6">
        <h2 className={`text-xl lg:text-2xl font-bold mb-2 ${inter.className}`}>
          {option.name}
        </h2>
        <p className="text-white/50 text-sm mb-2">
          {option.subtitle}
        </p>
        {option.description && (
          <p className="text-white/40 text-xs italic">
            {option.description}
          </p>
        )}
      </div>

      {/* Examples */}
      <div className="space-y-6">
        {/* Headline - usa display se tiver, senão serif */}
        <div>
          <span className="text-xs text-white/40 uppercase tracking-wider block mb-2">
            Headline (H1)
          </span>
          <h1 className={`text-3xl lg:text-5xl font-bold leading-tight ${option.display || option.serif}`}>
            Domine Seu Corpo. Fortaleça Sua Mente.
          </h1>
        </div>

        {/* Subtitle */}
        <div>
          <span className="text-xs text-white/40 uppercase tracking-wider block mb-2">
            Subtitle (H2)
          </span>
          <h2 className={`text-xl lg:text-2xl font-semibold ${option.serif || option.sans}`}>
            Treinamento de Elite em Artes Marciais
          </h2>
        </div>

        {/* Body */}
        <div>
          <span className="text-xs text-white/40 uppercase tracking-wider block mb-2">
            Body Text
          </span>
          <p className={`text-sm lg:text-base text-white/70 max-w-2xl ${option.body || option.sans}`}>
            Do completo iniciante ao competidor profissional. Desenvolva força, disciplina e confiança através das artes marciais.
          </p>
        </div>

        {/* Button */}
        <div>
          <span className="text-xs text-white/40 uppercase tracking-wider block mb-2">
            Button / CTA
          </span>
          <button className={`px-6 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform text-sm ${option.body || option.sans}`}>
            Agende Sua Aula Grátis
          </button>
        </div>

        {/* Stats */}
        <div>
          <span className="text-xs text-white/40 uppercase tracking-wider block mb-2">
            Stats Section
          </span>
          <div className="flex gap-6">
            <div>
              <div className={`text-4xl font-bold ${option.display || option.serif}`}>
                380+
              </div>
              <div className={`text-xs text-white/70 ${option.body || option.sans}`}>
                Alunos Ativos
              </div>
            </div>
            <div>
              <div className={`text-4xl font-bold ${option.display || option.serif}`}>
                15+
              </div>
              <div className={`text-xs text-white/70 ${option.body || option.sans}`}>
                Anos
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FontsPreview() {
  return (
    <div className="min-h-screen bg-black text-white py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl lg:text-5xl font-bold mb-4 ${inter.className}`}>
            Preview de Fontes
          </h1>
          <p className="text-white/70 text-base lg:text-lg mb-6">
            Escolha a combinação que melhor representa sua academia
          </p>
          <a
            href="/"
            className="inline-block px-6 py-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors text-sm"
          >
            ← Voltar para Home
          </a>
        </div>

        {/* SEÇÃO: FONTES FORTES E DIFERENCIADAS */}
        <div className="mb-16">
          <div className="mb-8 pb-4 border-b border-white/20">
            <h2 className={`text-3xl lg:text-4xl font-bold mb-2 ${bebasNeue.className}`}>
              💥 FONTES FORTES E DIFERENCIADAS
            </h2>
            <p className="text-white/60 text-sm lg:text-base">
              Opções com máximo impacto visual. Perfeitas para transmitir força e atitude.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {strongFonts.map((option, index) => (
              <FontCard key={index} option={option} index={index} isStrong={true} />
            ))}
          </div>
        </div>

        {/* SEÇÃO: FONTES PREMIUM/SUAVES */}
        <div className="mb-8">
          <div className="mb-8 pb-4 border-b border-white/20">
            <h2 className={`text-3xl lg:text-4xl font-bold mb-2 ${playfair.className}`}>
              ✨ Fontes Premium e Elegantes
            </h2>
            <p className="text-white/60 text-sm lg:text-base">
              Opções mais sofisticadas e clássicas. Visual clean e profissional.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {premiumFonts.map((option, index) => (
              <FontCard key={index} option={option} index={index} isStrong={false} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 py-8 border-t border-white/10">
          <p className="text-white/50 text-sm">
            Todas as fontes são do Google Fonts e gratuitas para uso comercial
          </p>
        </div>
      </div>
    </div>
  );
}
