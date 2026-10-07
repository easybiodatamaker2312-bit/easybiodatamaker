import React from 'react';
import type { Colorway, TemplateRenderProps } from '../../template-contract';
import { colorwayVariables, TEMPLATE_ROOT_STYLE } from '../../template-contract';
import { A4Root, PhotoImage, SymbolMark } from '../phaseB/SharedTemplateParts';

export const PEARL_LAVENDER_COLORWAYS = [
 {id:'lavender',name:'Pearl Lavender',swatch:'#9B8BC7',variables:{paper:'#E9E2F7',ink:'#29233E',accent:'#6F5AA8',accent2:'#C9BCE6',muted:'#6C6480',display:'Manrope, InterLocal, sans-serif',body:'Manrope, InterLocal, var(--template-indic-sans-stack)'}},
 {id:'indigo',name:'Pearl Indigo',swatch:'#3B2F74',variables:{paper:'#EDE9F8',ink:'#25213A',accent:'#3B2F74',accent2:'#B9B0DC',muted:'#625C76',display:'Manrope, InterLocal, sans-serif',body:'Manrope, InterLocal, var(--template-indic-sans-stack)'}},
 {id:'lilac',name:'Soft Lilac',swatch:'#B8A6DB',variables:{paper:'#F0EAF9',ink:'#2E263C',accent:'#8A6FB9',accent2:'#D7CCE9',muted:'#6E627B',display:'Manrope, InterLocal, sans-serif',body:'Manrope, InterLocal, var(--template-indic-sans-stack)'}},
] satisfies [Colorway,Colorway,Colorway];

function GlassIcon(){return <svg viewBox="0 0 80 80" className="pearl-glass-icon" aria-hidden="true"><circle cx="40" cy="40" r="27"/><path d="M20 40h40M40 20v40"/><circle cx="40" cy="40" r="5"/></svg>}

export function PearlLavenderLayout({view,auspiciousSymbol,colorway}:TemplateRenderProps){
 const photo=view.photos[0], extra=view.photos.slice(1);
 const sections=view.sections.filter(s=>s.key!=='photos');
 return <A4Root className="pearl-lavender-layout" style={{...TEMPLATE_ROOT_STYLE,...colorwayVariables(colorway),fontFamily:'var(--template-body)',padding:'0'}}>
   <div className="pearl-orb pearl-orb-a"/><div className="pearl-orb pearl-orb-b"/>
   <aside className="pearl-sidebar"><div className="pearl-cameo"><PhotoImage src={photo}/></div><div className="pearl-sidebar-rule"/><SymbolMark value={auspiciousSymbol}/><p>{view.headerCaption}</p><div className="pearl-sidebar-mark"><GlassIcon/></div></aside>
   <main className="pearl-main"><header><span className="pearl-eyebrow">{view.headerCaption}</span><h1>{view.fullName}</h1><div className="pearl-title-line"/></header><div className="pearl-grid">{sections.map((section,i)=><section className="pearl-card" key={section.key}><div className="pearl-card-head"><span>{String(i+1).padStart(2,'0')}</span><h2>{section.title}</h2></div>{section.rows.map(row=><div className="pearl-row" key={row.key}><span>{row.label}</span><strong>{row.value}</strong></div>)}</section>)}</div>{extra.length>0&&<section className="pearl-gallery"><h2>{view.sections.find(s=>s.key==='photos')?.title}</h2><div>{extra.map(src=><PhotoImage key={src} src={src}/>)}</div></section>}</main>
   <footer className="pearl-footer">{view.headerCaption}</footer>
 </A4Root>
}
export function PearlLavenderThumbnail(props:TemplateRenderProps){return <PearlLavenderLayout {...props}/>}
