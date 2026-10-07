'use client';

import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { SelectHTMLAttributes } from 'react';

export function Select({ error, className, children, ...props }: SelectHTMLAttributes<HTMLSelectElement> & { error?: boolean }) {
  return (
    <div className="relative">
      <select className={cn('form-select pr-10', error && 'border-red-500', className)} {...props}>{children}</select>
      <ChevronDown aria-hidden className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-stone-400" />
    </div>
  );
}
