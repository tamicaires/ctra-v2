'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Modalidades', href: '#modalidades' },
    { label: 'Mestres', href: '#mestres' },
    { label: 'Atletas', href: '#atletas' },
    { label: 'Horários', href: '#horarios' },
    { label: 'Contato', href: '#contato' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.nav
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
        WebkitBackdropFilter: backdropBlur,
      }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled && 'border-b border-white/10'
      )}
    >
      <Container>
        <div className="flex items-center justify-between py-4 lg:py-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#" className="flex items-center">
              <div className="rounded-full bg-white p-1 flex items-center justify-center"
                style={{
                  boxShadow: '0 0 15px rgba(255, 255, 255, 0.2)'
                }}
              >
                <Image
                  src="/logo.png"
                  alt="Rodrigo Argentino"
                  width={48}
                  height={48}
                  className="w-10 h-10 lg:w-12 lg:h-12 object-contain rounded-full"
                  priority
                />
              </div>
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <motion.ul
            className="hidden lg:flex items-center gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item) => (
              <motion.li key={item.label} variants={itemVariants}>
                <motion.a
                  href={item.href}
                  className="text-white/80 hover:text-white transition-colors relative group font-sans font-semibold text-lg"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"
                  />
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA Button - Desktop */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button variant="glow" size="md" magnetic>
              Aula Grátis
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          className="overflow-hidden lg:hidden"
        >
          <motion.ul
            className="flex flex-col gap-4 py-4 border-t border-white/10"
            variants={containerVariants}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
          >
            {navItems.map((item) => (
              <motion.li
                key={item.label}
                variants={itemVariants}
              >
                <a
                  href={item.href}
                  className="block py-2 text-white/80 hover:text-white transition-colors font-sans font-semibold text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
            <motion.li variants={itemVariants}>
              <Button variant="glow" size="lg" className="w-full">
                Aula Grátis
              </Button>
            </motion.li>
          </motion.ul>
        </motion.div>
      </Container>
    </motion.nav>
  );
};

export default Navbar;
