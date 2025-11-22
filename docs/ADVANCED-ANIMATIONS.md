# 🎬 ADVANCED ANIMATIONS - Sistema Premium de Animações

## 🎯 **OBJETIVO**

Criar experiência de animação **nível projeto de R$ 20.000+** que:
- Prenda a atenção do usuário do início ao fim
- Cada animação tenha **propósito** (não apenas enfeite)
- Seja **suave** e profissional (60fps)
- Conte uma **história visual**
- Diferencie COMPLETAMENTE de sites comuns
- Mantenha **performance mobile** impecável

---

## 🛠️ **STACK DE ANIMAÇÕES**

### Bibliotecas Principais

**1. Framer Motion** (Animações React)
```bash
npm install framer-motion
```
- Animações declarativas
- Spring physics
- Gestures (drag, tap, hover)
- Scroll-triggered animations
- Layout animations
- Exit animations

**2. GSAP (GreenSock)** (Animações complexas)
```bash
npm install gsap
```
- ScrollTrigger (scroll animations)
- Morphing SVG
- Timeline complexas
- Parallax
- Text animations
- Performance máxima

**3. Lottie** (Animações JSON)
```bash
npm install lottie-react
```
- Animações do After Effects
- Vetorial, escalável
- Performance excelente
- Ícones animados

**4. React Spring** (Physics-based)
```bash
npm install @react-spring/web
```
- Animações físicas realistas
- Gesture-based
- Interpolações suaves

---

## 🎨 **SISTEMA DE ANIMAÇÕES POR CATEGORIA**

### 1. PAGE LOAD ANIMATIONS (Primeira Impressão)

**Hero Reveal - Efeito "Cortina"**
```typescript
// Sequência cinematográfica de entrada
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
          }
        }
      }}
    >
      {/* Background reveal */}
      <motion.div
        className="absolute inset-0 bg-black"
        variants={{
          hidden: { scaleX: 0 },
          visible: {
            scaleX: 1,
            transition: {
              duration: 1.2,
              ease: [0.76, 0, 0.24, 1] // Custom cubic-bezier
            }
          }
        }}
        style={{ transformOrigin: "left" }}
      />

      {/* Título - Reveal por caractere */}
      <motion.h1
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }}
      >
        {title.split('').map((char, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: "easeOut"
                }
              }
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>

      {/* Elemento flutuante 3D */}
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            scale: 0.5,
            rotateX: -90
          },
          visible: {
            opacity: 1,
            scale: 1,
            rotateX: 0,
            transition: {
              type: "spring",
              damping: 15,
              stiffness: 100,
              duration: 1.5
            }
          }
        }}
        animate={{
          y: [0, -20, 0],
          rotateY: [0, 360],
        }}
        transition={{
          y: {
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut"
          },
          rotateY: {
            repeat: Infinity,
            duration: 20,
            ease: "linear"
          }
        }}
      >
        <FloatingElement />
      </motion.div>

      {/* CTAs com magnetic effect */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 0.8 }
          }
        }}
      >
        <MagneticButton>Agendar Aula Grátis</MagneticButton>
      </motion.div>
    </motion.section>
  );
};
```

**Propósito**: Criar expectativa, estabelecer tom premium desde o primeiro frame.

---

### 2. SCROLL ANIMATIONS (Reveal on Scroll)

**GSAP ScrollTrigger - Reveal Suave**
```typescript
'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StatsSection = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in + Slide up
      gsap.from(statsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: false,
          toggleActions: "play none none reverse",
          markers: false, // Debug
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.15, // Delay entre cada stat
        ease: "power3.out",
      });

      // Counter animation
      statsRef.current.forEach((stat, i) => {
        const value = parseInt(stat.getAttribute('data-value') || '0');
        gsap.from(stat, {
          scrollTrigger: {
            trigger: stat,
            start: "top 80%",
          },
          textContent: 0,
          duration: 2,
          delay: i * 0.15,
          ease: "power1.inOut",
          snap: { textContent: 1 },
          onUpdate: function() {
            stat.textContent = Math.ceil(this.targets()[0].textContent);
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef}>
      <div ref={el => statsRef.current[0] = el!} data-value="380">0</div>
      <div ref={el => statsRef.current[1] = el!} data-value="230">0</div>
      <div ref={el => statsRef.current[2] = el!} data-value="15">0</div>
      <div ref={el => statsRef.current[3] = el!} data-value="10000">0</div>
    </section>
  );
};
```

**Propósito**: Revelar conteúdo progressivamente mantendo engajamento.

---

### 3. PARALLAX EFFECTS (Profundidade)

**Multi-layer Parallax**
```typescript
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

const ParallaxSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Diferentes velocidades para cada layer
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -450]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Layer 1 - Background */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute inset-0"
      >
        <BackgroundPattern />
      </motion.div>

      {/* Layer 2 - Conteúdo */}
      <motion.div
        style={{ y: y2, scale }}
        className="relative z-10"
      >
        <Content />
      </motion.div>

      {/* Layer 3 - Foreground */}
      <motion.div
        style={{ y: y3 }}
        className="absolute inset-0 pointer-events-none"
      >
        <ForegroundElements />
      </motion.div>
    </section>
  );
};
```

**Propósito**: Criar profundidade, tornar scroll mais interessante.

---

### 4. MAGNETIC BUTTON (Efeito Premium)

**Button que "atrai" o cursor**
```typescript
'use client';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({ children }: { children: React.ReactNode }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Magnetic strength (quanto mais perto, mais forte)
    const strength = 0.3;
    setPosition({
      x: distanceX * strength,
      y: distanceY * strength
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      animate={{
        x: position.x,
        y: position.y
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1
      }}
      className="relative px-8 py-4 text-white bg-black border border-white/20 rounded-full overflow-hidden group"
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.4 }}
      />

      {/* Text com micro-animation */}
      <motion.span
        className="relative z-10"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>

      {/* Border glow animation */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-white"
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{
          opacity: [0, 1, 0],
          scale: [0.8, 1.2, 1.4],
        }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </motion.button>
  );
};
```

**Propósito**: Interação satisfatória, feedback tátil visual, CTAs irresistíveis.

---

### 5. TEXT REVEAL ANIMATIONS

**Stagger Text Reveal (Palavra por palavra)**
```typescript
import { motion } from 'framer-motion';

const AnimatedText = ({ text }: { text: string }) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.h2
      className="text-4xl font-bold"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.h2>
  );
};
```

**Split Text com Clip Path**
```typescript
const SplitTextReveal = ({ children }: { children: string }) => {
  return (
    <motion.div
      initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
      whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.span
        initial={{ y: '100%' }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className="block"
      >
        {children}
      </motion.span>
    </motion.div>
  );
};
```

**Propósito**: Hierarquia visual, direcionar atenção, revelar informação progressivamente.

---

### 6. CARD HOVER EFFECTS (Premium)

**Card com Tilt 3D + Glow**
```typescript
'use client';
import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const TiltCard = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative rounded-xl border border-white/10 bg-black/50 backdrop-blur p-6 transition-shadow hover:shadow-[0_0_50px_rgba(255,255,255,0.1)]"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div style={{ transform: "translateZ(50px)" }}>
        {children}
      </div>

      {/* Gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1), transparent 60%)",
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};
```

**Propósito**: Feedback rico, explorabilidade, destacar elementos importantes.

---

### 7. VIDEO MODAL ANIMATIONS

**Modal com Backdrop Blur + Scale**
```typescript
import { motion, AnimatePresence } from 'framer-motion';

const VideoModal = ({ isOpen, onClose, videoId }: VideoModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300,
            }}
          >
            <motion.div
              className="relative w-full max-w-4xl bg-black border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
              layoutId={`video-${videoId}`} // Shared layout animation
            >
              {/* Close button */}
              <motion.button
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 backdrop-blur"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Video player */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <YouTubeEmbed videoId={videoId} autoplay />
              </motion.div>

              {/* Content */}
              <motion.div
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3>Título do Vídeo</h3>
                <p>Descrição...</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
```

**Propósito**: Transição suave, contexto mantido, experiência cinematográfica.

---

### 8. LOADING STATES (Skeleton + Progress)

**Skeleton Loader com Shimmer**
```typescript
import { motion } from 'framer-motion';

const SkeletonCard = () => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-white/5 p-6">
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 -translate-x-full"
        animate={{
          translateX: ['100%', '-100%'],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "linear",
        }}
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
        }}
      />

      {/* Skeleton elements */}
      <div className="space-y-4">
        <div className="h-6 w-3/4 bg-white/10 rounded" />
        <div className="h-4 w-full bg-white/10 rounded" />
        <div className="h-4 w-5/6 bg-white/10 rounded" />
      </div>
    </div>
  );
};
```

**Loading Progress Bar**
```typescript
const LoadingProgress = ({ progress }: { progress: number }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        className="h-1 bg-gradient-to-r from-white/50 to-white"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </div>
  );
};
```

**Propósito**: Manter engajamento durante carregamento, expectativa positiva.

---

### 9. SCROLL PROGRESS INDICATOR

**Barra de progresso no topo**
```typescript
'use client';
import { motion, useScroll } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
};
```

**Circular Progress (Side)**
```typescript
const CircularScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="fixed bottom-8 right-8 w-16 h-16">
      <svg viewBox="0 0 100 100" className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="8"
        />
        {/* Progress circle */}
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="round"
          style={{
            pathLength,
            pathOffset: 0,
          }}
          strokeDasharray="0 1"
        />
      </svg>
    </div>
  );
};
```

**Propósito**: Orientação, gamificação (mostrar progresso), incentivar scroll.

---

### 10. NAVIGATION ANIMATIONS

**Navbar com blur e shrink ao scroll**
```typescript
'use client';
import { motion, useScroll, useTransform } from 'framer-motion';

const Navbar = () => {
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0,0,0,0)", "rgba(0,0,0,0.8)"]
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(20px)"]
  );

  const padding = useTransform(
    scrollY,
    [0, 100],
    ["1.5rem", "1rem"]
  );

  return (
    <motion.nav
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
        paddingTop: padding,
        paddingBottom: padding,
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Logo />
        </motion.div>

        {/* Menu items */}
        <motion.ul
          className="flex gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate="visible"
        >
          {['Modalidades', 'Mestres', 'Horários', 'Contato'].map((item, i) => (
            <motion.li
              key={item}
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -2 }}
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </motion.li>
          ))}
        </motion.ul>

        {/* CTA */}
        <MagneticButton>Aula Grátis</MagneticButton>
      </div>
    </motion.nav>
  );
};
```

**Propósito**: Acessibilidade visual, contexto de navegação, redução de desordem.

---

### 11. STAGGER GRID ANIMATIONS

**Grid que aparece em cascata**
```typescript
const ModalitiesGrid = ({ modalities }: { modalities: Modality[] }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {modalities.map((modality) => (
        <motion.div
          key={modality.id}
          variants={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <ModalityCard {...modality} />
        </motion.div>
      ))}
    </motion.div>
  );
};
```

**Propósito**: Revelar conteúdo de forma orgânica, direcionar atenção sequencialmente.

---

### 12. CUSTOM CURSOR (Desktop Only)

**Cursor customizado com trailing effect**
```typescript
'use client';
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A') {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-white pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Trailing dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: useSpring(cursorX, { damping: 30, stiffness: 200 }),
          y: useSpring(cursorY, { damping: 30, stiffness: 200 }),
          marginLeft: '13px',
          marginTop: '13px',
        }}
      />
    </>
  );
};
```

**Propósito**: Premium feel, feedback visual, guiar interação.

---

### 13. ACCORDION ANIMATIONS (FAQ)

**Accordion suave com height animation**
```typescript
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const AccordionItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <motion.button
        className="w-full py-6 flex items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ x: 4 }}
      >
        <span className="text-lg font-medium">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown />
        </motion.div>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: {
                  duration: 0.4,
                  ease: [0.04, 0.62, 0.23, 0.98]
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.15
                }
              }
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.3,
                },
                opacity: {
                  duration: 0.2
                }
              }
            }}
            className="overflow-hidden"
          >
            <motion.div
              className="pb-6 text-white/70"
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
            >
              {answer}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
```

**Propósito**: Revelar informação sem sair da página, progressão natural.

---

### 14. FLOATING ELEMENTS (Background)

**Partículas flutuantes no background**
```typescript
import { motion } from 'framer-motion';

const FloatingParticles = () => {
  const particles = Array.from({ length: 50 });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
```

**Propósito**: Profundidade, movimento sutil, vida ao background.

---

### 15. IMAGE REVEAL ANIMATIONS

**Image reveal com mask**
```typescript
const ImageReveal = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl"
      initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }}
      whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        initial={{ scale: 1.3 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        whileHover={{ scale: 1.05 }}
      />
    </motion.div>
  );
};
```

**Propósito**: Revelar imagens de forma dramática, manter atenção.

---

## 🎭 **ANIMAÇÕES POR SEÇÃO**

### Hero Section
- ✅ Page load reveal (cortina)
- ✅ Text reveal character-by-character
- ✅ Floating 3D element (rotate + float)
- ✅ Magnetic CTAs
- ✅ Scroll indicator bounce

### Stats Section
- ✅ Counter animation (0 → valor final)
- ✅ Stagger reveal (cada stat)
- ✅ Glow pulse effect nos números
- ✅ Parallax sutil

### Showcase Section
- ✅ Image reveal com clip-path
- ✅ Hover scale + brightness
- ✅ Lightbox modal animado

### Video Library Section
- ✅ Grid stagger animation
- ✅ Card hover tilt 3D
- ✅ Modal scale + backdrop blur
- ✅ Skeleton loader com shimmer
- ✅ Filter chips morph animation

### Modalidades Section
- ✅ Cards stagger grid
- ✅ Hover tilt + glow
- ✅ Image parallax dentro do card
- ✅ Button magnetic effect

### Masters Section
- ✅ Cards reveal em cascata
- ✅ Image zoom on hover
- ✅ Quote fade in
- ✅ Badges pop-in

### Transformations Section
- ✅ Before/After slider animado
- ✅ Carousel swipe
- ✅ Stats counter
- ✅ Quote typewriter effect

### Champions Section
- ✅ Trophy/medal bounce in
- ✅ Card flip on click
- ✅ Confetti animation (conquista)

### Schedule Section
- ✅ Accordion smooth expand
- ✅ Highlight current time
- ✅ Slot hover scale

### FAQ Section
- ✅ Accordion height animation
- ✅ Chevron rotate
- ✅ Answer fade in

### Final CTA
- ✅ Pulse glow effect
- ✅ Magnetic button
- ✅ Text shimmer
- ✅ Background radial gradient animate

---

## ⚡ **PERFORMANCE OPTIMIZATION**

### 1. GPU Acceleration
```css
.animated-element {
  will-change: transform, opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
}
```

### 2. Reduce Motion (Acessibilidade)
```typescript
import { useReducedMotion } from 'framer-motion';

const Component = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={shouldReduceMotion ? {} : {
        y: [0, -10, 0],
        transition: { repeat: Infinity }
      }}
    />
  );
};
```

### 3. Lazy Load Animations
```typescript
// Só carregar animações pesadas quando necessário
const HeavyAnimation = dynamic(() => import('./HeavyAnimation'), {
  ssr: false,
  loading: () => <SkeletonLoader />
});
```

### 4. Throttle Scroll Events
```typescript
import { useScroll } from 'framer-motion';
import { useThrottle } from '@/hooks/useThrottle';

const Component = () => {
  const { scrollY } = useScroll();
  const throttledScrollY = useThrottle(scrollY, 16); // 60fps
};
```

---

## 📊 **MÉTRICAS DE PERFORMANCE**

### Targets para Animações
- **60 FPS** constante (16.67ms/frame)
- **Jank-free** (sem quedas de frame)
- **No layout thrashing**
- **GPU-accelerated** quando possível

### Ferramentas de Debug
```typescript
// Framer Motion DevTools
import { MotionConfig } from 'framer-motion';

<MotionConfig reducedMotion="user">
  <App />
</MotionConfig>
```

---

## 🎯 **PRINCÍPIOS DE ANIMAÇÃO**

### 1. **Propósito**
Toda animação deve ter razão de existir:
- Direcionar atenção
- Fornecer feedback
- Mostrar relação entre elementos
- Manter engajamento
- Contar história

### 2. **Timing & Easing**
```typescript
// Easings personalizados
const easings = {
  smooth: [0.6, 0.01, -0.05, 0.95],
  expo: [0.87, 0, 0.13, 1],
  circ: [0.85, 0, 0.15, 1],
  bounce: [0.68, -0.55, 0.265, 1.55],
};

// Durações
const durations = {
  instant: 0.1,
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
  verySlow: 1.2,
};
```

### 3. **Hierarquia**
- Elementos importantes = animações mais dramáticas
- Backgrounds = animações sutis
- Micro-interactions = rápidas e responsivas

### 4. **Consistência**
- Mesma linguagem de animação em toda página
- Durações e easings padronizadas
- Design tokens para animations

---

## 🎬 **TIMELINE COMPLETA DE LOAD**

```
0ms   → Background fade in
200ms → Navbar slide down
400ms → Hero text reveal (stagger)
800ms → 3D element appear + float
1200ms → CTAs fade in + magnetic ready
1500ms → Scroll indicator bounce
2000ms → Page totalmente interativa
```

---

## 🚀 **PRÓXIMOS PASSOS**

1. ✅ Aprovar este sistema de animações
2. Implementar componentes base com animações
3. Testar performance em mobile
4. Ajustar timings e easings
5. Adicionar reduce-motion support
6. Deploy e teste A/B

---

**Este sistema de animações vai fazer a landing page ser completamente VICIANTE e memorável.** 🎬✨

Cada scroll, cada hover, cada clique será uma experiência satisfatória que prende o usuário do início ao fim!
