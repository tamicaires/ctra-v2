# 🥋 Landing Page - Centro de Treinamento de Artes Marciais

Landing page premium com animações avançadas nível R$ 20.000+

## 🚀 Status Atual

### ✅ Implementado

**Infraestrutura**:
- ✅ Next.js 15.5.6 com App Router
- ✅ TypeScript (strict mode)
- ✅ Tailwind CSS com design tokens customizados
- ✅ Framer Motion para animações
- ✅ GSAP (instalado, aguardando uso)
- ✅ Lucide React (ícones)

**Componentes Base**:
- ✅ Container (responsive, composition pattern)
- ✅ Button (4 variantes com animações)
- ✅ Card (composition pattern completo)

**Seções Implementadas**:
1. ✅ **Navbar** - Com blur no scroll, mobile responsive, animações suaves
2. ✅ **Hero Section** - Reveal cinematográfico, floating element, CTAs magnéticos
3. ✅ **Stats Section** - Counter animation, icons animados, glow effects

### 🔨 Próximas Seções

4. ⏳ Showcase Section (fotos/vídeos)
5. ⏳ Modalidades Section
6. ⏳ Video Library Section (estilo Netflix)
7. ⏳ Masters Section
8. ⏳ Transformations Section
9. ⏳ Champions Section
10. ⏳ Facility Section
11. ⏳ Schedule Section
12. ⏳ Process Section
13. ⏳ Testimonials Section
14. ⏳ Why Us Section
15. ⏳ FAQ Section
16. ⏳ Guarantee Section
17. ⏳ Final CTA Section
18. ⏳ Footer

---

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start
```

---

## 🌐 Acessar

**Local**: http://localhost:3000
**Network**: http://192.168.0.190:3000

---

## 🎨 Design Tokens

### Cores
- **Background**: Preto profundo (#000, #0a0a0a, #111)
- **Text**: Branco (#FFF) e variações
- **Accent**: White glow effects

### Tipografia
- **Sans**: Inter (UI, body text)
- **Serif**: Playfair Display (headings)

### Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

---

## 🎬 Animações

### Implementadas
- ✅ Page load reveal (Hero)
- ✅ Stagger animations (Navbar, Stats)
- ✅ Floating animation (3D element)
- ✅ Counter animation (Stats numbers)
- ✅ Scroll-triggered reveals
- ✅ Hover states (buttons, cards)
- ✅ Magnetic buttons
- ✅ Backdrop blur (navbar on scroll)

### Planejadas
- ⏳ Parallax effects
- ⏳ Scroll progress indicator
- ⏳ Custom cursor (desktop)
- ⏳ Text reveal animations
- ⏳ Image reveal com clip-path
- ⏳ 3D tilt effects nos cards
- ⏳ Video modal transitions
- ⏳ Skeleton loaders
- ⏳ Accordion smooth animations

---

## 📁 Estrutura de Pastas

```
ctra-v2/
├── app/
│   ├── globals.css          # Estilos globais + Tailwind
│   ├── layout.tsx            # Layout raiz
│   └── page.tsx              # Home page
├── components/
│   ├── ui/                   # Componentes primitivos
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Container.tsx
│   ├── sections/             # Seções da landing page
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   └── StatsSection.tsx
│   └── effects/              # Efeitos visuais (aguardando)
├── lib/
│   └── utils.ts              # Utilitários (cn, etc)
├── hooks/                    # Custom hooks (aguardando)
├── data/                     # Dados mockados (aguardando)
├── public/                   # Assets estáticos
└── docs/                     # Documentação de planejamento
    ├── PLANEJAMENTO-V2.md
    ├── VIDEO-LIBRARY-SECTION.md
    ├── MOBILE-FIRST-STRATEGY.md
    └── ADVANCED-ANIMATIONS.md
```

---

## 📚 Documentação

Toda a documentação de planejamento está na pasta `/docs`:

- **PLANEJAMENTO-V2.md** - Planejamento completo das 18 seções
- **VIDEO-LIBRARY-SECTION.md** - Biblioteca de vídeos estilo Netflix
- **MOBILE-FIRST-STRATEGY.md** - Estratégia mobile-first detalhada
- **ADVANCED-ANIMATIONS.md** - Sistema de animações premium

---

## 🎯 Princípios do Projeto

### Mobile-First
- Design inicia em 375px (iPhone)
- Progressive enhancement para desktop
- Touch targets mínimo 44px
- Performance mobile > 90 Lighthouse

### Animações com Propósito
- Toda animação tem razão de existir
- 60 FPS constante
- GPU-accelerated quando possível
- Suporte a prefers-reduced-motion

### Performance
- Lazy loading de imagens
- Code splitting
- Otimização de fontes
- YouTube embeds leves

---

## 🔧 Tecnologias

- **Next.js 15** - Framework React
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animações React
- **GSAP** - Animações complexas
- **Lucide React** - Ícones
- **clsx + tailwind-merge** - Class utilities

---

## 📝 Próximos Passos

1. ✅ Setup completo do projeto
2. ✅ Componentes base
3. ✅ Navbar, Hero, Stats
4. ⏳ Implementar Showcase Section
5. ⏳ Implementar Modalidades Section
6. ⏳ Implementar Video Library Section
7. ⏳ Implementar demais seções progressivamente
8. ⏳ Adicionar conteúdo real
9. ⏳ Otimizar performance
10. ⏳ Deploy

---

## 🎬 Features Premium

- Animações cinematográficas (page load reveals)
- Magnetic buttons (efeito "imã")
- Counter animations nos stats
- Floating 3D elements
- Blur navbar on scroll
- Stagger animations (cascata)
- Glow effects
- Smooth transitions (spring physics)
- Responsive em todos os dispositivos
- Composition pattern (componentes compostos)

---

## 📱 Mobile Optimization

- Touch-friendly (44px+ targets)
- Swipe gestures nos carousels
- Hamburger menu animado
- Full-width CTAs
- Otimizado para conexões lentas
- Lazy loading agressivo

---

## ⚡ Performance Targets

- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1
- **Lighthouse Performance**: > 90
- **First Load JS**: < 100kb

---

**Desenvolvido com 🥋 usando Next.js, Framer Motion e muito carinho**
