import React from 'react';
import type { Colorway, TemplateRenderProps } from '../../template-contract';
import { colorwayVariables, TEMPLATE_ROOT_STYLE } from '../../template-contract';
import { A4Root, PhotoImage, SymbolMark } from '../phaseB/SharedTemplateParts';

export const RAJWADA_CRIMSON_COLORWAYS = [
  { id:'crimson', name:'Crimson', swatch:'#7A0F1E', variables:{ paper:'#F7F0E3', ink:'#32181A', accent:'#7A0F1E', muted:'#735B56', accent2:'#B8893B', frame:'#7A0F1E', display:'Playfair Display, Georgia, serif', body:'Cormorant Garamond, Georgia, var(--template-indic-serif-stack)' } },
  { id:'wine', name:'Wine', swatch:'#4C1827', variables:{ paper:'#FAF2E8', ink:'#301B24', accent:'#4C1827', muted:'#745E66', accent2:'#C49A58', frame:'#4C1827', display:'Playfair Display, Georgia, serif', body:'Cormorant Garamond, Georgia, var(--template-indic-serif-stack)' } },
  { id:'indigo', name:'Indigo', swatch:'#263B63', variables:{ paper:'#F4F0E8', ink:'#1D2634', accent:'#263B63', muted:'#68717E', accent2:'#B8893B', frame:'#263B63', display:'Playfair Display, Georgia, serif', body:'Cormorant Garamond, Georgia, var(--template-indic-serif-stack)' } },
] satisfies [Colorway, Colorway, Colorway];

function MandalaBand(){return <svg className="rajwada-band" viewBox="0 0 800 90" preserveAspectRatio="none" aria-hidden="true"><path d="M0 45H800"/><g transform="translate(400 45)"><circle r="28"/><circle r="18"/><path d="M0-38L9-12L38 0L9 12L0 38L-9 12L-38 0L-9-12Z"/></g></svg>}

export function RajwadaCrimsonLayout({view,auspiciousSymbol,colorway}:TemplateRenderProps){
 const photo=view.photos[0], extra=view.photos.slice(1);
 return <A4Root className="rajwada-crimson-layout" style={{...TEMPLATE_ROOT_STYLE,...colorwayVariables(colorway),fontFamily:'var(--template-body)',padding:'8mm'}}>
   <div className="rajwada-frame"><div className="rajwada-inner">
    <header className="rajwada-header"><SymbolMark value={auspiciousSymbol}/><div className="rajwada-caption">{view.headerCaption}</div><h1>{view.fullName}</h1><div className="rajwada-arch"><PhotoImage src={photo}/></div></header>
    <MandalaBand/>
    <main className="rajwada-body">{view.sections.filter(s=>s.key!=='photos').map(section=><section key={section.key}><h2><span>{section.title}</span></h2><div className="rajwada-ribbon">{section.title}</div><div className="rajwada-rows">{section.rows.map(row=><div className="rajwada-row" key={row.key}><span>{row.label}</span><b>{row.value}</b></div>)}</div></section>)}</main>
    {extra.length>0&&<section className="rajwada-gallery"><h2>{view.sections.find(s=>s.key==='photos')?.title}</h2><div>{extra.map(src=><PhotoImage key={src} src={src}/>)}</div></section>}
    <footer>{view.headerCaption}</footer>
   </div></div>
 </A4Root>
}
export function RajwadaCrimsonThumbnail(props:TemplateRenderProps){return <RajwadaCrimsonLayout {...props}/>}
