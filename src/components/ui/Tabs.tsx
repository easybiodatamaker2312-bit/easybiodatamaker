'use client';

import { cn } from '@/lib/utils';

export function Tabs({ items, value, onChange }: { items: { id: string; label: string }[]; value: string; onChange: (id: string) => void }) {
  return (
    <div role="tablist" className="inline-flex rounded-xl border border-stone-200 bg-white p-1 shadow-sm">
      {items.map(item => (
        <button key={item.id} type="button" role="tab" aria-selected={value === item.id} onClick={() => onChange(item.id)} className={cn('min-h-10 rounded-lg px-4 text-sm font-medium transition-colors', value === item.id ? 'bg-ink text-white' : 'text-stone-600 hover:bg-stone-100')}>
          {item.label}
        </button>
      ))}
    </div>
  );
}
