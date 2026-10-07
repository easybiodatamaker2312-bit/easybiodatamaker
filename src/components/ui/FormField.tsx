'use client';

import { AlertCircle } from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';

interface FormFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  hint?: string;
  className?: string;
  htmlFor?: string;
}

export function FormField({ label, error, required, children, hint, className, htmlFor }: FormFieldProps) {
  return (
    <div className={cn('flex min-w-0 flex-col', className)}>
      <label htmlFor={htmlFor} className="form-label">
        {label}{required && <span className="ml-1 text-oxblood" aria-hidden="true">*</span>}
      </label>
      {children}
      {hint && !error && <p className="mt-1.5 text-xs leading-5 text-stone-500">{hint}</p>}
      {error && <p className="form-error" role="alert"><AlertCircle size={13} aria-hidden="true" />{error}</p>}
    </div>
  );
}

export { Input } from './Input';
export { Select } from './Select';
export { Textarea } from './Textarea';
