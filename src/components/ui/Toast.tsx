'use client';

import { CheckCircle2, Info, X, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

export type ToastTone = 'success' | 'error' | 'info';

export function Toast({ tone = 'success', title, message, onClose }: { tone?: ToastTone; title: string; message?: ReactNode; onClose?: () => void }) {
  const Icon = tone === 'success' ? CheckCircle2 : tone === 'error' ? XCircle : Info;
  return (
    <div role="status" className="flex max-w-sm items-start gap-3 rounded-2xl border border-stone-200 bg-white p-4 shadow-luxe">
      <Icon className={cn('mt-0.5 size-5 shrink-0', tone === 'success' ? 'text-emerald' : tone === 'error' ? 'text-red-700' : 'text-gold')} />
      <div className="min-w-0 flex-1"><p className="text-sm font-semibold text-ink">{title}</p>{message && <p className="mt-1 text-xs leading-5 text-stone-500">{message}</p>}</div>
      {onClose && <button type="button" aria-label="Close notification" onClick={onClose} className="btn-ghost min-h-8 min-w-8 p-1"><X size={16} /></button>}
    </div>
  );
}
