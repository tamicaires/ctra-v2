'use client';

import { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onAnimationEnd'
> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  magnetic?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', size = 'md', magnetic = false, className, ...props }, ref) => {
    const baseClasses = 'relative inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-300 overflow-hidden gpu-accelerated whitespace-nowrap';

    const variantClasses = {
      primary: 'bg-white text-black hover:bg-white/90 hover:scale-105 active:scale-95',
      secondary: 'border border-white/20 text-white hover:bg-white/10 hover:border-white/40',
      ghost: 'text-white hover:bg-white/5',
      glow: 'bg-white text-black border-2 border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]',
    };

    const sizeClasses = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg min-h-[48px]',
    };

    if (magnetic) {
      return (
        <motion.button
          ref={ref}
          className={cn(
            baseClasses,
            variantClasses[variant],
            sizeClasses[size],
            className
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17
          }}
          {...props}
        >
          {/* Glow effect on hover */}
          <motion.span
            className="absolute inset-0 rounded-full opacity-0"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
            }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          <span className="relative z-10 inline-flex items-center gap-2 whitespace-nowrap">{children}</span>

          {/* Border animation */}
          {variant === 'glow' && (
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-white"
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{
                opacity: [0, 1, 0],
                scale: [0.8, 1.2, 1.4],
              }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          )}
        </motion.button>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        <span className="relative z-10 inline-flex items-center gap-2 whitespace-nowrap">{children}</span>
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
