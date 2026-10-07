import React from 'react';
import type { Colorway, TemplateRenderProps } from '../../template-contract';
import { colorwayVariables, TEMPLATE_ROOT_STYLE } from '../../template-contract';
import { A4Root, PhotoImage, SymbolMark } from '../phaseB/SharedTemplateParts';

export const HALDI_MARIGOLD_COLORWAYS = [
  { id:'haldi', name:'Haldi Marigold', swatch:'#F5B700', variables:{ paper:'#FFF8E8', ink:'#3B2414', accent:'#F5B700', accent2:'#E8590C', muted:'#7B6048', display:'Yatra One, Tiro Devanagari, serif', body:'InterLocal, var(--template-indic-sans-stack)' } },
  { id:'saffron', name:'Saffron Sun', swatch:'#E8590C', variables:{ paper:'#FFF5E7', ink:'#3B2015', accent:'#E8590C', accent2:'#F5B700', muted:'#80634B', display:'Yatra One, Tiro Devanagari, serif', body:'InterLocal, var(--template-indic-sans-stack)' } },
  { id:'ivory', name:'Ivory Marigold', swatch:'#D49A00', variables:{ paper:'#FBF7F0', ink:'#322417', accent:'#D49A00', accent2:'#C95A22', muted:'#78614C', display:'Yatra One, Tiro Devanagari, serif', body:'InterLocal, var(--template-indic-sans-stack)' } },
] satisfies [Colorway, Colorway, Colorway];

function RangoliBorder(){return <svg className="haldi-rangoli" viewBox="0 0 1000 90" preserveAspectRatio="none" aria-hidden="true"><defs><pattern id="haldi-rangoli-pattern" width="80" height="80" patternUnits="userSpaceOnUse"><path d="M40 3C51 22 58 29 77 40C58 51 51 58 40 77C29 58 22 51 3 40C22 29 29 22 40 3Z" fill="none"/><circle cx="40" cy="40" r="7"/><circle cx="15" cy="40" r="2"/><circle cx="65" cy="40" r="2"/></pattern></defs><rect width="1000" height="90" fill="url(#haldi-rangoli-pattern)"/></svg>}

export function HaldiMarigoldLayout({view,auspiciousSymbol,colorway}:TemplateRenderProps){
 const photo=view.photos[0]; const extra=view.photos.slice(1);
 return <A4Root className="haldi-marigold-layout" style={{...TEMPLATE_ROOT_STYLE,...colorwayVariables(colorway),fontFamily:'var(--template-body)',padding:'12mm 13mm'}}>
   <div className="haldi-border haldi-border-top"><RangoliBorder/></div>
   <header className="haldi-header"><div className="haldi-sun"><span aria-hidden="true">+</span></div><div className="haldi-head-copy"><SymbolMark value={auspiciousSymbol}/><p>{view.headerCaption}</p><h1>{view.fullName}</h1></div><div className="haldi-polaroid"><PhotoImage src={photo}/><span/></div></header>
   <div className="haldi-intro-line"/>
   <main className="haldi-content">{view.sections.filter(s=>s.key!=='photos').map((section,i)=><section className="haldi-section" key={section.key}><div className="haldi-section-title"><span>{String(i+1).padStart(2,'0')}</span><h2>{section.title}</h2></div><div className="haldi-zebra">{section.rows.map((row,j)=><div className={j%2?'haldi-row alt':'haldi-row'} key={row.key}><span>{row.label}</span><strong>{row.value}</strong></div>)}</div></section>)}</main>
   {extra.length>0&&<section className="haldi-extra"><h2>{view.sections.find(s=>s.key==='photos')?.title}</h2><div>{extra.map(src=><PhotoImage key={src} src={src}/>)}</div></section>}
   <footer>{view.headerCaption}</footer><div className="haldi-border haldi-border-bottom"><RangoliBorder/></div>
 </A4Root>
}
export function HaldiMarigoldThumbnail(props:TemplateRenderProps){return <HaldiMarigoldLayout {...props}/>}
