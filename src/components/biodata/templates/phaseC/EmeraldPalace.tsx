import React from 'react';
import type { Colorway, TemplateRenderProps } from '../../template-contract';
import { colorwayVariables, TEMPLATE_ROOT_STYLE } from '../../template-contract';
import { A4Root, PhotoImage, SymbolMark } from '../phaseB/SharedTemplateParts';

export const EMERALD_PALACE_COLORWAYS = [
  { id: 'emerald-gold', name: 'Emerald Gold', swatch: '#B8893B', variables: { paper:'#0B3B2E', ink:'#F8F1DF', accent:'#D8B45B', muted:'#B7C9BD', accent2:'#153F35', display:'Marcellus, Georgia, serif', body:'Fraunces, Georgia, var(--template-indic-serif-stack)' } },
  { id: 'forest-ivory', name: 'Forest Ivory', swatch: '#EFE4C8', variables: { paper:'#17352C', ink:'#FFF8E8', accent:'#EFE4C8', muted:'#C5D0C8', accent2:'#2B5648', display:'Marcellus, Georgia, serif', body:'Fraunces, Georgia, var(--template-indic-serif-stack)' } },
  { id: 'pine-copper', name: 'Pine Copper', swatch: '#C77C50', variables: { paper:'#0C332C', ink:'#FFF0E7', accent:'#C77C50', muted:'#C4B8AD', accent2:'#5B3329', display:'Marcellus, Georgia, serif', body:'Fraunces, Georgia, var(--template-indic-serif-stack)' } },
] satisfies [Colorway, Colorway, Colorway];

function Jaali() { return <svg className="emerald-jaali" viewBox="0 0 600 130" preserveAspectRatio="none" aria-hidden="true"><defs><pattern id="emerald-jaali-pattern" width="36" height="36" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 18H36M18 0V36"/><circle cx="18" cy="18" r="6"/></pattern></defs><rect width="600" height="130" fill="url(#emerald-jaali-pattern)"/></svg>; }

export function EmeraldPalaceLayout({ view, auspiciousSymbol, colorway }: TemplateRenderProps) {
  const photo = view.photos[0];
  const extra = view.photos.slice(1);
  return <A4Root className="emerald-palace-layout" style={{ ...TEMPLATE_ROOT_STYLE, ...colorwayVariables(colorway), fontFamily:'var(--template-body)', padding:0 }}>
    <div className="emerald-top"><Jaali/><div className="emerald-top-copy"><SymbolMark auspiciousSymbol={auspiciousSymbol}/><div className="emerald-caption">{view.headerCaption}</div><h1>{view.fullName}</h1></div></div>
    <main className="emerald-main">
      <aside className="emerald-portrait"><PhotoImage src={photo} className="emerald-diamond"/><span className="emerald-diamond-ring"/></aside>
      <div className="emerald-sections">{view.sections.filter(s=>s.key!=='photos').map((section,i)=><section className="emerald-section" key={section.key}><h2><span>{String(i+1).padStart(2,'0')}</span>{section.title}</h2><div className="emerald-rows">{section.rows.map(row=><div className="emerald-row" key={row.key}><b>{row.label}</b><span>{row.value}</span></div>)}</div></section>)}</div>
    </main>
    {extra.length>0 && <section className="emerald-gallery"><h2>{view.sections.find(s=>s.key==='photos')?.title}</h2><div>{extra.map(src=><PhotoImage key={src} src={src}/>)}</div></section>}
    <footer className="emerald-footer">{view.headerCaption}</footer>
  </A4Root>;
}
export function EmeraldPalaceThumbnail(props: TemplateRenderProps){ return <EmeraldPalaceLayout {...props}/>; }
