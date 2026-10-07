import React from 'react';
import type { TemplateRenderProps, Colorway } from '../../template-contract';
import { colorwayVariables, TEMPLATE_ROOT_STYLE } from '../../template-contract';
import { A4Root, PhotoImage, SectionRows, SymbolMark } from './SharedTemplateParts';

export const BLUSH_ROSE_COLORWAYS = [
  { id: 'rose', name: 'Blush Rose', swatch: '#C46A7A', variables: { paper: '#F7E1E3', ink: '#38272B', accent: '#C46A7A', muted: '#7D6269', accent2: '#8FA58B', display: 'Great Vibes, cursive', body: 'Jost, Inter, sans-serif' } },
  { id: 'sage', name: 'Rose Sage', swatch: '#8FA58B', variables: { paper: '#EEF1E9', ink: '#28322C', accent: '#8FA58B', muted: '#68756C', accent2: '#C46A7A', display: 'Great Vibes, cursive', body: 'Jost, Inter, sans-serif' } },
  { id: 'plum', name: 'Rose Plum', swatch: '#87506A', variables: { paper: '#F5E7EF', ink: '#36242F', accent: '#87506A', muted: '#76606E', accent2: '#C89AAB', display: 'Great Vibes, cursive', body: 'Jost, Inter, sans-serif' } },
] satisfies [Colorway, Colorway, Colorway];

function FloralCorner({ flip = false }: { flip?: boolean }) { return <svg className={`blush-floral-corner ${flip ? 'flip' : ''}`} viewBox="0 0 180 180" aria-hidden="true"><path d="M12 166C30 110 66 67 128 34"/><path d="M28 146c2-22 16-36 37-43M53 112c5-21 18-31 37-37M80 79c7-16 18-23 34-27"/><g><circle cx="36" cy="127" r="9"/><circle cx="52" cy="118" r="7"/><circle cx="67" cy="104" r="8"/><circle cx="91" cy="77" r="7"/></g></svg>; }

export function BlushRoseFloralLayout({ view, auspiciousSymbol, colorway }: TemplateRenderProps) {
  const photo = view.photos[0];
  return <A4Root className="blush-rose-layout" style={{ ...TEMPLATE_ROOT_STYLE, ...colorwayVariables(colorway), background: 'var(--template-paper)', color: 'var(--template-ink)', padding: '15mm 15mm', fontFamily: 'var(--template-body)' }}>
    <FloralCorner /><FloralCorner flip />
    <header className="blush-header"><SymbolMark auspiciousSymbol={auspiciousSymbol}/><div className="blush-photo-wrap"><PhotoImage src={photo} className="blush-photo" /></div><p>{view.headerCaption}</p><h1>{view.fullName}</h1><div className="blush-line" /></header>
    <div className="blush-card-grid">{view.sections.filter((s) => s.key !== 'photos').map((section) => <section className="blush-card" key={section.key}><h2>{section.title}</h2><SectionRows section={section} /></section>)}</div>
    {view.photos.length > 1 && <section className="blush-gallery"><h2>{view.sections.find((s) => s.key === 'photos')?.title}</h2><div>{view.photos.slice(1).map((src) => <PhotoImage key={src} src={src} />)}</div></section>}
    <footer>{view.headerCaption}</footer>
  </A4Root>;
}
export function BlushRoseFloralThumbnail(props: TemplateRenderProps) { return <BlushRoseFloralLayout {...props}/>; }
