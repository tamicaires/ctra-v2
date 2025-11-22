import { Zap, Shield, Trophy, Check, Heart, Users, Target, Brain } from 'lucide-react';

export interface Schedule {
  day: string;
  dayShort: string;
  slots: {
    time: string;
    instructor: string;
    level: 'Iniciante' | 'Intermediário' | 'Avançado' | 'Todos';
    available: number;
    total: number;
  }[];
}

export interface Modality {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  gradient: string;
  heroImage: string;
  benefits: {
    icon: any;
    title: string;
    description: string;
  }[];
  features: {
    icon: any;
    text: string;
  }[];
  schedule: Schedule[];
  requirements: string[];
  whatToExpect: string[];
  pricing: {
    monthly: number;
    quarterly: number;
    annual: number;
  };
}

export const modalities: Modality[] = [
  {
    id: 1,
    slug: 'muay-thai',
    title: 'Muay Thai',
    tagline: 'A Arte das Oito Armas',
    shortDescription: 'Desenvolva uma resistência sobre-humana, força explosiva e técnicas letais. O Muay Thai não apenas esculpe seu corpo - ele forja guerreiros.',
    fullDescription: 'O Muay Thai é conhecido como "A Arte das Oito Armas" porque combina o uso de socos, chutes, joelhadas e cotoveladas. Originado na Tailândia há mais de 1000 anos, esta arte marcial se tornou uma das mais eficazes formas de luta em pé do mundo. Nosso programa combina condicionamento físico extremo com técnicas tradicionais tailandesas, preparando você para qualquer desafio.',
    gradient: 'from-red-950/20 to-orange-950/20',
    heroImage: '/modalities/muay-thai.jpg',
    benefits: [
      {
        icon: Zap,
        title: 'Condicionamento Extremo',
        description: 'Desenvolva resistência cardiovascular e muscular incomparável através de treinos de alta intensidade'
      },
      {
        icon: Shield,
        title: 'Defesa Pessoal Letal',
        description: 'Aprenda técnicas comprovadas de combate real usado por forças militares ao redor do mundo'
      },
      {
        icon: Trophy,
        title: 'Preparação Competitiva',
        description: 'Treine com atletas profissionais e amadores em um ambiente que simula competições reais'
      },
      {
        icon: Heart,
        title: 'Queima Calórica Intensa',
        description: 'Queime até 800+ calorias por aula enquanto esculpe seu corpo e mente'
      },
    ],
    features: [
      { icon: Zap, text: 'Condicionamento extremo' },
      { icon: Shield, text: 'Defesa pessoal letal' },
      { icon: Trophy, text: 'Preparação para competição' },
      { icon: Check, text: 'Cardio que queima 800+ calorias/aula' },
    ],
    schedule: [
      {
        day: 'Segunda-feira',
        dayShort: 'SEG',
        slots: [
          { time: '06:00 - 07:00', instructor: 'Rodrigo Argentino', level: 'Todos', available: 8, total: 15 },
          { time: '18:00 - 19:00', instructor: 'Prof. Carlos', level: 'Iniciante', available: 5, total: 20 },
          { time: '19:30 - 21:00', instructor: 'Rodrigo Argentino', level: 'Avançado', available: 12, total: 15 },
        ]
      },
      {
        day: 'Terça-feira',
        dayShort: 'TER',
        slots: [
          { time: '07:00 - 08:00', instructor: 'Prof. Carlos', level: 'Intermediário', available: 10, total: 15 },
          { time: '18:30 - 19:30', instructor: 'Rodrigo Argentino', level: 'Todos', available: 3, total: 20 },
        ]
      },
      {
        day: 'Quarta-feira',
        dayShort: 'QUA',
        slots: [
          { time: '06:00 - 07:00', instructor: 'Rodrigo Argentino', level: 'Todos', available: 8, total: 15 },
          { time: '18:00 - 19:00', instructor: 'Prof. Carlos', level: 'Iniciante', available: 5, total: 20 },
          { time: '19:30 - 21:00', instructor: 'Rodrigo Argentino', level: 'Avançado', available: 12, total: 15 },
        ]
      },
      {
        day: 'Quinta-feira',
        dayShort: 'QUI',
        slots: [
          { time: '07:00 - 08:00', instructor: 'Prof. Carlos', level: 'Intermediário', available: 10, total: 15 },
          { time: '18:30 - 19:30', instructor: 'Rodrigo Argentino', level: 'Todos', available: 3, total: 20 },
        ]
      },
      {
        day: 'Sexta-feira',
        dayShort: 'SEX',
        slots: [
          { time: '06:00 - 07:00', instructor: 'Rodrigo Argentino', level: 'Todos', available: 8, total: 15 },
          { time: '18:00 - 19:30', instructor: 'Prof. Carlos', level: 'Sparring', available: 15, total: 20 },
        ]
      },
      {
        day: 'Sábado',
        dayShort: 'SÁB',
        slots: [
          { time: '09:00 - 10:30', instructor: 'Rodrigo Argentino', level: 'Todos', available: 18, total: 25 },
        ]
      },
      {
        day: 'Domingo',
        dayShort: 'DOM',
        slots: []
      },
    ],
    requirements: [
      'Roupa confortável para exercícios (shorts, camiseta)',
      'Bandagens para as mãos (fornecemos nas primeiras aulas)',
      'Luvas de boxe (disponíveis para aluguel)',
      'Protetor bucal (obrigatório para sparring)',
      'Vontade de se superar'
    ],
    whatToExpect: [
      'Aquecimento dinâmico de 10-15 minutos',
      'Técnicas de shadowboxing e trabalho de saco',
      'Treinamento de pads (Thai pads) com instrutor',
      'Condicionamento físico específico para Muay Thai',
      'Alongamento e recuperação'
    ],
    pricing: {
      monthly: 197,
      quarterly: 547,
      annual: 1970
    }
  },
  {
    id: 2,
    slug: 'jiu-jitsu',
    title: 'Jiu-Jitsu',
    tagline: 'A Arte Suave',
    shortDescription: 'Técnica sobre força bruta. Inteligência sobre tamanho. Aprenda a arte que permite vencer adversários muito maiores usando apenas conhecimento e estratégia.',
    fullDescription: 'Brazilian Jiu-Jitsu é uma arte marcial de grappling que se concentra em técnicas de solo e submissões. Desenvolvido pela família Gracie no Brasil, o BJJ revolucionou as artes marciais ao provar que um lutador menor e mais técnico pode derrotar oponentes maiores e mais fortes. Nosso programa segue a linhagem tradicional Gracie, com ênfase em defesa pessoal real e competição esportiva.',
    gradient: 'from-blue-950/20 to-purple-950/20',
    heroImage: '/modalities/jiu-jitsu.jpg',
    benefits: [
      {
        icon: Brain,
        title: 'Xadrez Físico',
        description: 'Desenvolva raciocínio estratégico enquanto aprende técnicas complexas de controle e submissão'
      },
      {
        icon: Shield,
        title: 'Defesa Pessoal Comprovada',
        description: 'Sistema de luta testado e aprovado em situações reais ao redor do mundo'
      },
      {
        icon: Target,
        title: 'Sistema de Graduação',
        description: 'Progrida através do sistema de faixas reconhecido internacionalmente'
      },
      {
        icon: Users,
        title: 'Comunidade Unida',
        description: 'Faça parte de uma família global de praticantes dedicados'
      },
    ],
    features: [
      { icon: Check, text: 'Técnica refinada' },
      { icon: Shield, text: 'Xadrez físico' },
      { icon: Trophy, text: 'Defesa pessoal comprovada' },
      { icon: Zap, text: 'Sistema de graduação por faixas' },
    ],
    schedule: [
      {
        day: 'Segunda-feira',
        dayShort: 'SEG',
        slots: [
          { time: '07:00 - 08:00', instructor: 'Prof. Marcos (Faixa Preta)', level: 'Iniciante', available: 12, total: 20 },
          { time: '19:00 - 20:30', instructor: 'Rodrigo Argentino', level: 'Todos', available: 5, total: 25 },
        ]
      },
      {
        day: 'Terça-feira',
        dayShort: 'TER',
        slots: [
          { time: '06:00 - 07:00', instructor: 'Prof. Marcos', level: 'Avançado', available: 8, total: 15 },
          { time: '18:00 - 19:00', instructor: 'Rodrigo Argentino', level: 'Intermediário', available: 10, total: 20 },
        ]
      },
      {
        day: 'Quarta-feira',
        dayShort: 'QUA',
        slots: [
          { time: '07:00 - 08:00', instructor: 'Prof. Marcos', level: 'Iniciante', available: 12, total: 20 },
          { time: '19:00 - 20:30', instructor: 'Rodrigo Argentino', level: 'Todos', available: 5, total: 25 },
        ]
      },
      {
        day: 'Quinta-feira',
        dayShort: 'QUI',
        slots: [
          { time: '06:00 - 07:00', instructor: 'Prof. Marcos', level: 'Avançado', available: 8, total: 15 },
          { time: '18:00 - 19:00', instructor: 'Rodrigo Argentino', level: 'Intermediário', available: 10, total: 20 },
        ]
      },
      {
        day: 'Sexta-feira',
        dayShort: 'SEX',
        slots: [
          { time: '07:00 - 08:00', instructor: 'Prof. Marcos', level: 'Todos', available: 15, total: 20 },
          { time: '19:00 - 20:30', instructor: 'Rodrigo Argentino', level: 'Sparring', available: 12, total: 15 },
        ]
      },
      {
        day: 'Sábado',
        dayShort: 'SÁB',
        slots: [
          { time: '10:00 - 12:00', instructor: 'Rodrigo Argentino', level: 'Todos', available: 20, total: 30 },
        ]
      },
      {
        day: 'Domingo',
        dayShort: 'DOM',
        slots: []
      },
    ],
    requirements: [
      'Kimono de Jiu-Jitsu (Gi) - disponível para compra na academia',
      'Camiseta para usar por baixo do kimono',
      'Shorts (para treino No-Gi)',
      'Protetor bucal recomendado',
      'Unhas cortadas (segurança)'
    ],
    whatToExpect: [
      'Aquecimento específico de Jiu-Jitsu',
      'Drills de movimentação e técnica',
      'Instrução de técnicas e posições',
      'Rolling (sparring) supervisionado',
      'Q&A e dicas do professor'
    ],
    pricing: {
      monthly: 197,
      quarterly: 547,
      annual: 1970
    }
  },
  {
    id: 3,
    slug: 'boxe',
    title: 'Boxe',
    tagline: 'A Nobre Arte',
    shortDescription: 'Reflexos de aço, precisão cirúrgica, cardio imbatível. O boxe é a base de todo lutador e o melhor treino cardiovascular que existe.',
    fullDescription: 'Conhecido como "A Nobre Arte", o boxe é muito mais do que apenas socos. É ciência, é arte, é disciplina. Nossa metodologia combina técnicas clássicas com treinamento moderno, focando em footwork, defesa, timing e poder. Seja seu objetivo fitness, competição ou defesa pessoal, o boxe oferece benefícios incomparáveis.',
    gradient: 'from-yellow-950/20 to-amber-950/20',
    heroImage: '/modalities/boxe.jpg',
    benefits: [
      {
        icon: Zap,
        title: 'Cardio Explosivo',
        description: 'O melhor treino cardiovascular - desenvolva resistência incomparável'
      },
      {
        icon: Target,
        title: 'Coordenação Superior',
        description: 'Melhore drasticamente coordenação olho-mão e consciência corporal'
      },
      {
        icon: Shield,
        title: 'Velocidade e Timing',
        description: 'Desenvolva reflexos rápidos e timing perfeito através de treinamento específico'
      },
      {
        icon: Trophy,
        title: 'Confiança Inabalável',
        description: 'Construa autoconfiança que se reflete em todas áreas da vida'
      },
    ],
    features: [
      { icon: Zap, text: 'Cardio explosivo' },
      { icon: Check, text: 'Coordenação superior' },
      { icon: Shield, text: 'Velocidade e timing' },
      { icon: Trophy, text: 'Confiança inabalável' },
    ],
    schedule: [
      {
        day: 'Segunda-feira',
        dayShort: 'SEG',
        slots: [
          { time: '08:00 - 09:00', instructor: 'Prof. Lucas', level: 'Iniciante', available: 10, total: 18 },
          { time: '17:00 - 18:00', instructor: 'Prof. Lucas', level: 'Intermediário', available: 8, total: 18 },
        ]
      },
      {
        day: 'Terça-feira',
        dayShort: 'TER',
        slots: [
          { time: '09:00 - 10:00', instructor: 'Prof. Lucas', level: 'Avançado', available: 12, total: 15 },
          { time: '17:30 - 18:30', instructor: 'Rodrigo Argentino', level: 'Todos', available: 6, total: 20 },
        ]
      },
      {
        day: 'Quarta-feira',
        dayShort: 'QUA',
        slots: [
          { time: '08:00 - 09:00', instructor: 'Prof. Lucas', level: 'Iniciante', available: 10, total: 18 },
          { time: '17:00 - 18:00', instructor: 'Prof. Lucas', level: 'Intermediário', available: 8, total: 18 },
        ]
      },
      {
        day: 'Quinta-feira',
        dayShort: 'QUI',
        slots: [
          { time: '09:00 - 10:00', instructor: 'Prof. Lucas', level: 'Avançado', available: 12, total: 15 },
          { time: '17:30 - 18:30', instructor: 'Rodrigo Argentino', level: 'Todos', available: 6, total: 20 },
        ]
      },
      {
        day: 'Sexta-feira',
        dayShort: 'SEX',
        slots: [
          { time: '08:00 - 09:30', instructor: 'Prof. Lucas', level: 'Sparring', available: 14, total: 16 },
        ]
      },
      {
        day: 'Sábado',
        dayShort: 'SÁB',
        slots: [
          { time: '08:00 - 09:30', instructor: 'Rodrigo Argentino', level: 'Todos', available: 15, total: 25 },
        ]
      },
      {
        day: 'Domingo',
        dayShort: 'DOM',
        slots: []
      },
    ],
    requirements: [
      'Roupa confortável de treino',
      'Luvas de boxe (disponíveis para aluguel)',
      'Bandagens de mão',
      'Protetor bucal',
      'Toalha e garrafa de água'
    ],
    whatToExpect: [
      'Aquecimento com jump rope e shadowboxing',
      'Trabalho técnico no espelho',
      'Treino de pads com instrutor',
      'Trabalho de saco pesado e velocidade',
      'Condicionamento específico de boxe'
    ],
    pricing: {
      monthly: 197,
      quarterly: 547,
      annual: 1970
    }
  },
  {
    id: 4,
    slug: 'mma',
    title: 'MMA',
    tagline: 'O Combate Completo',
    shortDescription: 'Combine múltiplas artes marciais e torne-se um lutador completo. Striking, grappling, wrestling - domine tudo.',
    fullDescription: 'Mixed Martial Arts é a forma mais completa de combate. Combinando as melhores técnicas de striking (Muay Thai, Boxe, Karatê) com grappling (Jiu-Jitsu, Wrestling, Judô), o MMA cria atletas versáteis e altamente condicionados. Nosso programa MMA integra todas as modalidades da academia em um sistema coeso de luta completa.',
    gradient: 'from-green-950/20 to-emerald-950/20',
    heroImage: '/modalities/mma.jpg',
    benefits: [
      {
        icon: Trophy,
        title: 'Versatilidade Total',
        description: 'Domine todas as áreas do combate - striking, clinch, takedowns e solo'
      },
      {
        icon: Target,
        title: 'Preparação Competitiva',
        description: 'Treine para competir ou simplesmente tenha o condicionamento de um atleta profissional'
      },
      {
        icon: Shield,
        title: 'Combate Real',
        description: 'O MMA é testado constantemente - as técnicas que ensinamos funcionam'
      },
      {
        icon: Users,
        title: 'Atletas Profissionais',
        description: 'Treine ao lado de lutadores profissionais e amadores competitivos'
      },
    ],
    features: [
      { icon: Trophy, text: 'Versatilidade total' },
      { icon: Check, text: 'Preparação competitiva' },
      { icon: Shield, text: 'Combate real' },
      { icon: Zap, text: 'Atletas profissionais' },
    ],
    schedule: [
      {
        day: 'Segunda-feira',
        dayShort: 'SEG',
        slots: [
          { time: '20:00 - 21:30', instructor: 'Rodrigo Argentino', level: 'Intermediário', available: 8, total: 20 },
        ]
      },
      {
        day: 'Terça-feira',
        dayShort: 'TER',
        slots: [
          { time: '20:00 - 21:30', instructor: 'Rodrigo Argentino', level: 'Avançado', available: 5, total: 15 },
        ]
      },
      {
        day: 'Quarta-feira',
        dayShort: 'QUA',
        slots: [
          { time: '20:00 - 21:30', instructor: 'Rodrigo Argentino', level: 'Intermediário', available: 8, total: 20 },
        ]
      },
      {
        day: 'Quinta-feira',
        dayShort: 'QUI',
        slots: [
          { time: '20:00 - 21:30', instructor: 'Rodrigo Argentino', level: 'Avançado', available: 5, total: 15 },
        ]
      },
      {
        day: 'Sexta-feira',
        dayShort: 'SEX',
        slots: [
          { time: '20:00 - 22:00', instructor: 'Rodrigo Argentino', level: 'Sparring', available: 10, total: 12 },
        ]
      },
      {
        day: 'Sábado',
        dayShort: 'SÁB',
        slots: [
          { time: '11:00 - 13:00', instructor: 'Rodrigo Argentino', level: 'Todos', available: 18, total: 25 },
        ]
      },
      {
        day: 'Domingo',
        dayShort: 'DOM',
        slots: []
      },
    ],
    requirements: [
      'Shorts de MMA ou grappling',
      'Camiseta (rashguard recomendado)',
      'Protetor bucal obrigatório',
      'Luvas de MMA 4oz (para sparring)',
      'Caneleira e protetor de cabeça (para sparring)',
      'Experiência em pelo menos uma arte marcial (recomendado)'
    ],
    whatToExpect: [
      'Aquecimento funcional completo',
      'Treino técnico de striking e grappling',
      'Transições entre luta em pé e solo',
      'Sparring leve a moderado (baseado em nível)',
      'Condicionamento de atleta de MMA'
    ],
    pricing: {
      monthly: 247,
      quarterly: 697,
      annual: 2470
    }
  }
];

export function getModalityBySlug(slug: string): Modality | undefined {
  return modalities.find(m => m.slug === slug);
}

export function getAllModalitySlugs(): string[] {
  return modalities.map(m => m.slug);
}
