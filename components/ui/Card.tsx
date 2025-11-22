'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// Composition Pattern Components

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

const Card = ({ children, className, hover = false, glow = false }: CardProps) => {
  return (
    <motion.div
      className={cn(
        'rounded-xl border border-white/10 bg-black-light/50 backdrop-blur-md p-6',
        hover && 'transition-all duration-300 hover:border-white/30 hover:scale-[1.02]',
        glow && 'hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: [0.6, 0.01, 0.05, 0.95] }}
    >
      {children}
    </motion.div>
  );
};

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

const CardHeader = ({ children, className }: CardHeaderProps) => {
  return (
    <div className={cn('mb-4', className)}>
      {children}
    </div>
  );
};

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

const CardTitle = ({ children, className }: CardTitleProps) => {
  return (
    <h3 className={cn('text-2xl font-serif font-bold', className)}>
      {children}
    </h3>
  );
};

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

const CardDescription = ({ children, className }: CardDescriptionProps) => {
  return (
    <p className={cn('text-white/70 leading-relaxed', className)}>
      {children}
    </p>
  );
};

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

const CardContent = ({ children, className }: CardContentProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

const CardFooter = ({ children, className }: CardFooterProps) => {
  return (
    <div className={cn('mt-6 pt-6 border-t border-white/10', className)}>
      {children}
    </div>
  );
};

// Export as composition
Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
