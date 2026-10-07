import React from 'react';
import type { Colorway, TemplateRenderProps } from '../../template-contract';
import { colorwayVariables, TEMPLATE_ROOT_STYLE } from '../../template-contract';
import { A4Root, PhotoImage, SymbolMark } from '../phaseB/SharedTemplateParts';

export const NOOR_NAVY_COLORWAYS = [
  { id:'navy-gold', name:'Navy Gold', swatch:'#D6B76C', variables:{paper:'#0B2545',ink:'#F5F1E7',accent:'#D6B76C',accent2:'#BFC7D2',muted:'#B9C2CF',display:'Cormorant Garamond, Georgia, serif',body:'Noto Sans, InterLocal, var(--template-indic-sans-stack)'} },
  { id:'navy-silver', name:'Navy Silver', swatch:'#C0C7D1', variables:{paper:'#0A1E38',ink:'#F5F6F7',accent:'#C0C7D1',accent2:'#8D9BAE',muted:'#AEB8C5',display:'Cormorant Garamond, Georgia, serif',body:'Noto Sans, InterLocal, var(--template-indic-sans-stack)'} },
  { id:'ink-champagne', name:'Ink Champagne', swatch:'#E5C99B', variables:{paper:'#111C2B',ink:'#FAF4E8',accent:'#E5C99B',accent2:'#9EAAB8',muted:'#B5B8BE',display:'Cormorant Garamond, Georgia, serif',body:'Noto Sans, InterLocal, var(--template-indic-sans-stack)'} },
] satisfies [Colorway,Colorway,Colorway];

function Girih(){return <svg className="noor-girih" viewBox="0 0 1200 170" preserveAspectRatio="none" aria-hidden="true"><defs><pattern id="noor-star" width="90" height="90" patternUnits="userSpaceOnUse"><path d="M45 4L55 34L86 45L55 56L45 86L35 56L4 45L35 34Z" fill="none"/><path d="M18 18L72 72M72 18L18 72"/></pattern></defs><rect width="1200" height="170" fill="url(#noor-star)"/></svg>}

export function NoorNavyLayout({view,auspiciousSymbol,colorway}:TemplateRenderProps){
 const photo=view.photos[0]; const extra=view.photos.slice(1); const sections=view.sections.filter(s=>s.key!=='photos');
 return <A4Root className="noor-navy-layout" style={{...TEMPLATE_ROOT_STYLE,...colorwayVariables(colorway),fontFamily:'var(--template-body)'}}>
   <div className="noor-border" aria-hidden="true"/><header className="noor-hero"><div className="noor-hero-copy"><SymbolMark value={auspiciousSymbol}/><p>{view.headerCaption}</p><h1>{view.fullName}</h1><span>{view.sections[0]?.title}</span></div><div className="noor-hero-photo"><PhotoImage src={photo}/></div></header>
   <Girih/>
   <main className="noor-main">{sections.map((section,i)=><section className="noor-section" key={section.key}><div className="noor-section-head"><span>{String(i+1).padStart(2,'0')}</span><h2>{section.title}</h2></div><div className="noor-rows">{section.rows.map(row=><div className="noor-row" key={row.key}><span>{row.label}</span><strong>{row.value}</strong></div>)}</div></section>)}
   {extra.length>0&&<section className="noor-gallery"><h2>{view.sections.find(s=>s.key==='photos')?.title}</h2><div>{extra.map(src=><PhotoImage key={src} src={src}/>)}</div></section>}</main>
   <footer><span>{view.headerCaption}</span><span>{view.language.toUpperCase()}</span></footer>
 </A4Root>
}
export function NoorNavyThumbnail(props:TemplateRenderProps){return <NoorNavyLayout {...props}/>}
