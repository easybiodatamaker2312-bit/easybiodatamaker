import React from 'react';
import type { Colorway, TemplateRenderProps } from '../../template-contract';
import { colorwayVariables, TEMPLATE_ROOT_STYLE } from '../../template-contract';
import { A4Root, PhotoImage, SymbolMark } from '../phaseB/SharedTemplateParts';

export const ROYAL_PEACOCK_COLORWAYS = [
  { id:'peacock', name:'Peacock', swatch:'#0F5E6B', variables:{ paper:'#F8F2E8', ink:'#17333A', accent:'#0F5E6B', muted:'#62767A', accent2:'#A3195B', sidebar:'#0F5E6B', display:'Bodoni Moda, Georgia, serif', body:'Inter, Arial, var(--template-indic-sans-stack)' } },
  { id:'magenta', name:'Magenta', swatch:'#A3195B', variables:{ paper:'#FAF1F5', ink:'#351D2A', accent:'#A3195B', muted:'#76616B', accent2:'#0F5E6B', sidebar:'#7A174A', display:'Bodoni Moda, Georgia, serif', body:'Inter, Arial, var(--template-indic-sans-stack)' } },
  { id:'sapphire', name:'Sapphire', swatch:'#244E78', variables:{ paper:'#F2F5F8', ink:'#203040', accent:'#244E78', muted:'#687684', accent2:'#B8893B', sidebar:'#173B60', display:'Bodoni Moda, Georgia, serif', body:'Inter, Arial, var(--template-indic-sans-stack)' } },
] satisfies [Colorway, Colorway, Colorway];

function PeacockFeather(){return <svg className="peacock-feather" viewBox="0 0 160 260" aria-hidden="true"><path d="M80 250C35 190 32 92 80 18c48 74 45 172 0 232Z"/><ellipse cx="80" cy="85" rx="28" ry="46"/><ellipse cx="80" cy="88" rx="14" ry="27"/><path d="M80 113v88"/></svg>}

export function RoyalPeacockLayout({ view, auspiciousSymbol, colorway }: TemplateRenderProps){
  const photo=view.photos[0]; const extra=view.photos.slice(1);
  return <A4Root className="royal-peacock-layout" style={{...TEMPLATE_ROOT_STYLE,...colorwayVariables(colorway),fontFamily:'var(--template-body)',padding:0}}>
    <aside className="peacock-sidebar"><PeacockFeather/><SymbolMark value={auspiciousSymbol}/><div className="peacock-vertical">{view.headerCaption}</div></aside>
    <main className="peacock-main"><header><div className="peacock-kicker">{view.headerCaption}</div><h1>{view.fullName}</h1><div className="peacock-rule"/></header>
      <div className="peacock-hero"><PhotoImage src={photo} className="peacock-photo"/><div className="peacock-hero-note">{view.sections.find(s=>s.key==='basics')?.rows.slice(0,3).map(r=><span key={r.key}><b>{r.label}</b>{r.value}</span>)}</div></div>
      <div className="peacock-grid">{view.sections.filter(s=>s.key!=='photos').map(section=><section key={section.key}><h2>{section.title}</h2>{section.rows.map(row=><div className="peacock-row" key={row.key}><span>{row.label}</span><b>{row.value}</b></div>)}</section>)}</div>
      {extra.length>0 && <section className="peacock-gallery"><h2>{view.sections.find(s=>s.key==='photos')?.title}</h2><div>{extra.map(src=><PhotoImage key={src} src={src}/>)}</div></section>}
    </main>
  </A4Root>
}
export function RoyalPeacockThumbnail(props: TemplateRenderProps){return <RoyalPeacockLayout {...props}/>}
