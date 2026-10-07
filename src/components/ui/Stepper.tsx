'use client';

import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface StepItem { id: string; label: string; shortLabel?: string; }

export function Stepper({ steps, activeIndex, onChange }: { steps: StepItem[]; activeIndex: number; onChange?: (index: number) => void }) {
  return (
    <nav aria-label="Biodata progress" className="w-full">
      <ol className="flex items-start">
        {steps.map((step, index) => {
          const complete = index < activeIndex;
          const active = index === activeIndex;
          return (
            <li key={step.id} className="relative flex min-w-0 flex-1 items-start">
              {index > 0 && <div aria-hidden className={cn('absolute left-0 right-1/2 top-5 h-px -translate-y-1/2', complete ? 'bg-gold' : 'bg-stone-200')} />}
              <button
                type="button"
                onClick={() => onChange?.(index)}
                disabled={!onChange}
                aria-current={active ? 'step' : undefined}
                className="relative z-10 flex min-w-0 flex-col items-center gap-2 disabled:cursor-default"
              >
                <span className={cn('grid size-10 place-items-center rounded-full border text-sm font-semibold transition-all', complete && 'border-gold bg-gold text-white', active && 'border-ink bg-ink text-white shadow-lg shadow-ink/10', !complete && !active && 'border-stone-200 bg-white text-stone-500') }>
                  {complete ? <Check size={16} strokeWidth={2.5} /> : index + 1}
                </span>
                <span className={cn('max-w-24 text-center text-[11px] font-medium sm:text-xs', active ? 'text-ink' : 'text-stone-500')}>
                  <span className="hidden sm:inline">{step.label}</span><span className="sm:hidden">{step.shortLabel ?? step.label}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
