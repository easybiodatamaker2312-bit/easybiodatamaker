import React from 'react';
import type { TemplateRenderProps, Colorway } from '../../template-contract';
import { colorwayVariables, TEMPLATE_ROOT_STYLE } from '../../template-contract';
import { A4Root, PhotoImage, SectionRows, SymbolMark } from './SharedTemplateParts';

export const MIDNIGHT_GOLD_COLORWAYS = [
  { id: 'gold', name: 'Gold Foil', swatch: '#E7C873', variables: { paper: '#0E0B14', ink: '#F8F0DD', accent: '#E7C873', muted: '#B9A989', accent2: '#8A6A2B', display: 'Cinzel, Georgia, serif', body: 'Cormorant Garamond, Georgia, serif' } },
  { id: 'rose-gold', name: 'Rose Gold', swatch: '#C98F87', variables: { paper: '#120D13', ink: '#F8E8E5', accent: '#C98F87', muted: '#C6A9A5', accent2: '#8E5B60', display: 'Cinzel, Georgia, serif', body: 'Cormorant Garamond, Georgia, serif' } },
  { id: 'silver', name: 'Silver', swatch: '#C8CCD2', variables: { paper: '#0E1015', ink: '#F0F2F5', accent: '#C8CCD2', muted: '#A6ACB5', accent2: '#777F8C', display: 'Cinzel, Georgia, serif', body: 'Cormorant Garamond, Georgia, serif' } },
] satisfies [Colorway, Colorway, Colorway];

function Filigree() {
  return <svg className="midnight-filigree" viewBox="0 0 180 180" aria-hidden="true"><path d="M4 76C18 24 49 5 76 4M4 42C19 18 39 5 66 4M4 112C22 64 50 48 86 46M176 76C162 24 131 5 104 4M176 42C161 18 141 5 114 4M176 112C158 64 130 48 94 46"/><path d="M16 16c21 10 34 27 40 51M164 16c-21 10-34 27-40 51"/><circle cx="90" cy="90" r="3"/></svg>;
}

export function MidnightGoldLayout({ view, auspiciousSymbol, colorway }: TemplateRenderProps) {
  const orderedSections = view.sections;
  const photo = view.photos[0];
  return <A4Root className="midnight-gold-layout" style={{ ...TEMPLATE_ROOT_STYLE, ...colorwayVariables(colorway), fontFamily: 'var(--template-body)', background: 'var(--template-paper)', color: 'var(--template-ink)', padding: '15mm 16mm' }}>
    <Filigree /><div className="midnight-filigree right"><Filigree /></div>
    <div className="midnight-inner-frame" />
    <header className="midnight-header">
      <SymbolMark value={auspiciousSymbol} />
      <p className="midnight-caption">{view.headerCaption}</p>
      <h1>{view.sections.length || view.photos.length ? view.sections[0]?.rows.find((r) => r.key === 'fullName')?.value || '' : ''}</h1>
      <div className="midnight-name">{view.fullName}</div>
      <div className="midnight-rule"><span /><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2L12 2Z"/></svg><span /></div>
      {photo ? <div className="midnight-arch"><PhotoImage src={photo} /></div> : <div className="midnight-arch empty"><PhotoImage /></div>}
    </header>
    <div className="midnight-columns">{orderedSections.map((section, index) => section.key === 'photos' ? (view.photos.length > 1 ? <section className="midnight-gallery" key={section.key}><h2>{section.title}</h2><div>{view.photos.slice(1).map((src) => <PhotoImage key={src} src={src} />)}</div></section> : null) : <section className={index === 0 ? 'midnight-section midnight-section-first' : 'midnight-section'} key={section.key}><h2>{section.title}</h2><SectionRows section={section} /></section>)}</div>
    <footer>{view.headerCaption}</footer>
  </A4Root>;
}

export function MidnightGoldThumbnail(props: TemplateRenderProps) { return <MidnightGoldLayout {...props} />; }
