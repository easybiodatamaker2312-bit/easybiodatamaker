'use client';

import { cn } from '@/lib/utils';
import { AlertCircle } from 'lucide-react';
import React from 'react';

interface FormFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  hint?: string;
  className?: string;
}

export function FormField({ label, error, required, children, hint, className }: FormFieldProps) {
  return (
    <div className={cn('flex flex-col', className)}>
      <label className="form-label">
        {label}
        {required && <span className="text-saffron-500 ml-0.5">*</span>}
      </label>
      {children}
      {hint && !error && <p className="text-xs text-gray-400 mt-1">{hint}</p>}
      {error && (
        <p className="form-error">
          <AlertCircle size={12} />
          {error}
        </p>
      )}
    </div>
  );
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export function Input({ error, className, ...props }: InputProps) {
  return (
    <input
      className={cn('form-input', error && 'border-red-400 focus:ring-red-400', className)}
      {...props}
    />
  );
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
  placeholder?: string;
}

export function Select({ error, placeholder, children, className, ...props }: SelectProps) {
  return (
    <div className="relative">
      <select
        className={cn(
          'form-select pr-10',
          error && 'border-red-400 focus:ring-red-400',
          className
        )}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {children}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export function Textarea({ error, className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        'form-input resize-none',
        error && 'border-red-400 focus:ring-red-400',
        className
      )}
      {...props}
    />
  );
}
