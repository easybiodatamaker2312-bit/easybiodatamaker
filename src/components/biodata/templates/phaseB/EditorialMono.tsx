import React from 'react';
import type { TemplateRenderProps, Colorway } from '../../template-contract';
import { colorwayVariables, TEMPLATE_ROOT_STYLE } from '../../template-contract';
import { A4Root, PhotoImage, SectionRows, SymbolMark } from './SharedTemplateParts';

export const EDITORIAL_MONO_COLORWAYS = [
  { id: 'vermilion', name: 'Vermilion', swatch: '#E4572E', variables: { paper: '#FFFFFF', ink: '#111111', accent: '#E4572E', muted: '#686868', accent2: '#111111', display: 'Fraunces, Georgia, serif', body: 'Space Grotesk, Inter, sans-serif' } },
  { id: 'cobalt', name: 'Cobalt', swatch: '#2457A6', variables: { paper: '#FFFFFF', ink: '#111111', accent: '#2457A6', muted: '#686868', accent2: '#111111', display: 'Fraunces, Georgia, serif', body: 'Space Grotesk, Inter, sans-serif' } },
  { id: 'forest', name: 'Forest', swatch: '#1F6B55', variables: { paper: '#FFFFFF', ink: '#111111', accent: '#1F6B55', muted: '#686868', accent2: '#111111', display: 'Fraunces, Georgia, serif', body: 'Space Grotesk, Inter, sans-serif' } },
] satisfies [Colorway, Colorway, Colorway];

export function EditorialMonoLayout({ view, auspiciousSymbol, colorway }: TemplateRenderProps) {
  const sections = view.sections.filter((s) => s.key !== 'photos');
  const photo = view.photos[0];
  return <A4Root className="editorial-mono-layout" style={{ ...TEMPLATE_ROOT_STYLE, ...colorwayVariables(colorway), background: 'var(--template-paper)', color: 'var(--template-ink)', padding: '13mm 14mm', fontFamily: 'var(--template-body)' }}>
    <header className="editorial-hero"><div className="editorial-meta"><span>{view.headerCaption}</span><SymbolMark auspiciousSymbol={auspiciousSymbol}/></div><div className="editorial-hero-grid"><div><p className="editorial-kicker">01</p><h1>{view.fullName}</h1><p className="editorial-sub">{view.headerCaption}</p></div><PhotoImage src={photo} className="editorial-photo" /></div></header>
    <main>{sections.map((section, index) => <section className="editorial-section" key={section.key}><div className="editorial-number">{String(index + 1).padStart(2, '0')}</div><div><h2>{section.title}</h2><SectionRows section={section} /></div></section>)}</main>
    {view.photos.length > 1 && <section className="editorial-gallery"><div className="editorial-number">{String(sections.length + 1).padStart(2, '0')}</div><div><h2>{view.sections.find((s) => s.key === 'photos')?.title}</h2><div>{view.photos.slice(1).map((src) => <PhotoImage key={src} src={src} />)}</div></div></section>}
    <footer><span>{view.headerCaption}</span><span>—</span><span>{view.fullName}</span></footer>
  </A4Root>;
}
export function EditorialMonoThumbnail(props: TemplateRenderProps) { return <EditorialMonoLayout {...props}/>; }
