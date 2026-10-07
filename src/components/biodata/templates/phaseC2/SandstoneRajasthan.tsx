import React from 'react';
import type { Colorway, TemplateRenderProps } from '../../template-contract';
import { colorwayVariables, TEMPLATE_ROOT_STYLE } from '../../template-contract';
import { A4Root, PhotoImage, SymbolMark } from '../phaseB/SharedTemplateParts';

export const SANDSTONE_RAJASTHAN_COLORWAYS = [
 {id:'sandstone',name:'Sandstone',swatch:'#A8452B',variables:{paper:'#E8D5B5',ink:'#35231D',accent:'#A8452B',accent2:'#233C69',muted:'#725A4B',display:'Tiro Devanagari, Georgia, serif',body:'Playfair Display, Noto Serif, var(--template-indic-serif-stack)'}},
 {id:'indigo-clay',name:'Indigo Clay',swatch:'#233C69',variables:{paper:'#EFE0C7',ink:'#2D2925',accent:'#233C69',accent2:'#A8452B',muted:'#6B5A4B',display:'Tiro Devanagari, Georgia, serif',body:'Playfair Display, Noto Serif, var(--template-indic-serif-stack)'}},
 {id:'terracotta',name:'Terracotta',swatch:'#C15D3A',variables:{paper:'#F0DCC0',ink:'#35231D',accent:'#C15D3A',accent2:'#394F75',muted:'#755A4B',display:'Tiro Devanagari, Georgia, serif',body:'Playfair Display, Noto Serif, var(--template-indic-serif-stack)'}},
] satisfies [Colorway,Colorway,Colorway];

function BlockPrint(){return <svg className="sandstone-print" viewBox="0 0 1200 70" preserveAspectRatio="none" aria-hidden="true"><defs><pattern id="sandstone-block" width="56" height="56" patternUnits="userSpaceOnUse"><path d="M28 3l8 17 17 8-17 8-8 17-8-17-17-8 17-8z"/><circle cx="28" cy="28" r="5"/></pattern></defs><rect width="1200" height="70" fill="url(#sandstone-block)"/></svg>}

export function SandstoneRajasthanLayout({view,auspiciousSymbol,colorway}:TemplateRenderProps){
 const photo=view.photos[0], extra=view.photos.slice(1); const sections=view.sections.filter(s=>s.key!=='photos');
 return <A4Root className="sandstone-rajasthan-layout" style={{...TEMPLATE_ROOT_STYLE,...colorwayVariables(colorway),fontFamily:'var(--template-body)',padding:'0'}}>
   <div className="sandstone-topprint"><BlockPrint/></div>
   <header className="sandstone-header"><div className="sandstone-portrait"><PhotoImage src={photo}/></div><div className="sandstone-title"><SymbolMark value={auspiciousSymbol}/><p>{view.headerCaption}</p><h1>{view.fullName}</h1><span>{view.headerCaption}</span></div></header>
   <main className="sandstone-main">{sections.map((section,i)=><section className="sandstone-section" key={section.key}><div className="sandstone-section-title"><span>{String(i+1).padStart(2,'0')}</span><h2>{section.title}</h2></div><div className="sandstone-table">{section.rows.map(row=><div className="sandstone-table-row" key={row.key}><span>{row.label}</span><i/><strong>{row.value}</strong></div>)}</div></section>)}
   {extra.length>0&&<section className="sandstone-extra"><h2>{view.sections.find(s=>s.key==='photos')?.title}</h2><div>{extra.map(src=><PhotoImage key={src} src={src}/>)}</div></section>}</main>
   <footer>{view.headerCaption}</footer><div className="sandstone-bottomprint"><BlockPrint/></div>
 </A4Root>
}
export function SandstoneRajasthanThumbnail(props:TemplateRenderProps){return <SandstoneRajasthanLayout {...props}/>}
