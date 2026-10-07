'use client';

import { cn } from '@/lib/utils';
import type { InputHTMLAttributes } from 'react';

export function Input({ error, className, ...props }: InputHTMLAttributes<HTMLInputElement> & { error?: boolean }) {
  return <input className={cn('form-input', error && 'border-red-500 focus:border-red-500 focus:ring-red-100', className)} {...props} />;
}
