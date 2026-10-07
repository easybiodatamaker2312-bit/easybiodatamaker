'use client';

import { cn } from '@/lib/utils';
import type { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ variant = 'primary', size = 'md', className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        variant === 'primary' ? 'btn-primary' : variant === 'secondary' ? 'btn-secondary' : 'btn-ghost',
        size === 'sm' && 'min-h-10 px-3 text-xs',
        size === 'lg' && 'min-h-12 rounded-2xl px-6 text-base',
        'disabled:cursor-not-allowed disabled:opacity-50 disabled:transform-none',
        className,
      )}
      {...props}
    />
  );
}
