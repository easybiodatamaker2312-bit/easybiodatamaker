import React from 'react';
import type { BiodataViewSection, BiodataViewRow } from '@/lib/useBiodataView';
import type { TemplateRenderProps } from '../../template-contract';

export function SymbolMark({ auspiciousSymbol }: Pick<TemplateRenderProps, 'auspiciousSymbol'>) {
  if (auspiciousSymbol === 'none') return null;
  if (auspiciousSymbol === 'swastik') return <span aria-hidden="true" className="template-symbol template-symbol-glyph">卐</span>;
  if (auspiciousSymbol === 'crescent-star') return <span aria-hidden="true" className="template-symbol template-symbol-crescent">☪</span>;
  const marks: Record<Exclude<TemplateRenderProps['auspiciousSymbol'], 'none' | 'swastik' | 'crescent-star'>, string> = {
    om: 'ॐ',
    ganesh: 'श्री गणेश',
    'radha-krishna': 'राधा • कृष्ण',
    'ik-onkar': 'ੴ',
    khanda: '☬',
    cross: '✝',
    bismillah: '﷽',
  };
  return <span aria-hidden="true" className="template-symbol">{marks[auspiciousSymbol]}</span>;
}

export function PhotoPlaceholder({ className = '' }: { className?: string }) {
  return <div className={`template-photo-placeholder ${className}`} aria-hidden="true" />;
}

export function PhotoImage({ src, className = '', alt = '' }: { src?: string; className?: string; alt?: string }) {
  if (!src) return <PhotoPlaceholder className={className} />;
  return <img src={src} alt={alt} className={className} loading="lazy" decoding="async" />;
}

export function SectionRows({ section }: { section: BiodataViewSection }) {
  return <div className="template-rows">{section.rows.map((row) => <div className="template-row" key={row.key}><span className="template-row-label">{row.label}</span><span className="template-row-value">{row.value}</span></div>)}</div>;
}

export function allDataRows(view: TemplateRenderProps['view']): BiodataViewRow[] {
  return view.sections.flatMap((section) => section.rows);
}

export function A4Root({ children, className = '', style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return <article className={`template-a4 template-print-safe ${className}`} style={{ ...style }}>{children}</article>;
}
