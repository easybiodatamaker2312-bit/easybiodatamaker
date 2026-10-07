'use client';

import { X } from 'lucide-react';
import type { ReactNode } from 'react';

export function Dialog({ open, title, children, onClose }: { open: boolean; title: string; children: ReactNode; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center p-4" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
      <button aria-label="Close dialog" className="absolute inset-0 cursor-default bg-ink/45 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-lg rounded-3xl border border-stone-200 bg-ivory p-5 shadow-luxe sm:p-7">
        <div className="flex items-start justify-between gap-4"><h2 id="dialog-title" className="text-2xl text-ink">{title}</h2><button type="button" onClick={onClose} aria-label="Close" className="btn-ghost min-h-10 min-w-10 p-2"><X size={18} /></button></div>
        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
}
