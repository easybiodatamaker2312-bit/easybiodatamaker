'use client';

import { cn } from '@/lib/utils';
import type { TextareaHTMLAttributes } from 'react';

export function Textarea({ error, className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement> & { error?: boolean }) {
  return <textarea className={cn('form-textarea', error && 'border-red-500 focus:border-red-500')} {...props} />;
}
