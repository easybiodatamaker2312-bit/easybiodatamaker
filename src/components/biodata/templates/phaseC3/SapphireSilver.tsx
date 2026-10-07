import React from 'react';
import type { Colorway, TemplateRenderProps } from '../../template-contract';
import { colorwayVariables, TEMPLATE_ROOT_STYLE } from '../../template-contract';
import { A4Root, PhotoImage, SymbolMark } from '../phaseB/SharedTemplateParts';

export const SAPPHIRE_SILVER_COLORWAYS = [
  { id:'sapphire', name:'Sapphire Silver', swatch:'#14213D', variables:{paper:'#F8F5ED',ink:'#14213D',accent:'#52657E',accent2:'#C0C7D1',muted:'#667184',display:'Noto Serif Display, Georgia, serif',body:'InterLocal, var(--template-indic-sans-stack)'} },
  { id:'silver-blue', name:'Silver Blue', swatch:'#8B9BB2', variables:{paper:'#F4F5F7',ink:'#1E2B3E',accent:'#6E8099',accent2:'#C7CDD5',muted:'#687486',display:'Noto Serif Display, Georgia, serif',body:'InterLocal, var(--template-indic-sans-stack)'} },
  { id:'ivory-royal', name:'Ivory Royal', swatch:'#C7A75A', variables:{paper:'#FBF7EF',ink:'#192944',accent:'#8D6D2F',accent2:'#BFC7D1',muted:'#6B7078',display:'Noto Serif Display, Georgia, serif',body:'InterLocal, var(--template-indic-sans-stack)'} },
] satisfies [Colorway,Colorway,Colorway];

function DoubleRule(){return <svg className="sapphire-double-rule" viewBox="0 0 1200 34" preserveAspectRatio="none" aria-hidden="true"><rect x="2" y="5" width="1196" height="24" fill="none"/><rect x="8" y="11" width="1184" height="12" fill="none"/></svg>}

export function SapphireSilverLayout({view,auspiciousSymbol,colorway}:TemplateRenderProps){
 const photo=view.photos[0]; const extra=view.photos.slice(1);
 return <A4Root className="sapphire-silver-layout" style={{ ...TEMPLATE_ROOT_STYLE, ...colorwayVariables(colorway), fontFamily: 'var(--template-body)' }}>
   <div className="sapphire-frame" aria-hidden="true"/><header className="sapphire-header"><div className="sapphire-brand"><SymbolMark auspiciousSymbol={auspiciousSymbol}/><p>{view.headerCaption}</p><h1>{view.fullName}</h1></div><div className="sapphire-photo"><PhotoImage src={photo}/></div></header>
   <main className="sapphire-main">{view.sections.filter(s=>s.key!=='photos').map((section,i)=>section.key==='education' ? <SapphireEducation section={section} key={section.key}/> : <section className="sapphire-section" key={section.key}><div className="sapphire-section-title"><span>{String(i+1).padStart(2,'0')}</span><h2>{section.title}</h2></div><div className="sapphire-cert"><div className="sapphire-cert-head"><span>{section.title}</span></div>{section.rows.map(row=><div className="sapphire-row" key={row.key}><span>{row.label}</span><strong>{row.value}</strong></div>)}</div></section>)}
   {extra.length>0&&<section className="sapphire-gallery"><h2>{view.sections.find(s=>s.key==='photos')?.title}</h2><div>{extra.map(src=><PhotoImage key={src} src={src}/>)}</div></section>}</main>
   <footer><SapphireSilverRule/><span>{view.headerCaption}</span></footer>
 </A4Root>
}

function SapphireEducation({section}:{section:TemplateRenderProps['view']['sections'][number]}){return <section className="sapphire-timeline"><div className="sapphire-title"><span>{section.title.toUpperCase()}</span><h2>{section.title}</h2></div><div className="sapphire-track">{section.rows.map((row,i)=><div className="sapphire-event" key={row.key}><span className="sapphire-dot">{String(i+1).padStart(2,'0')}</span><div><small>{row.label}</small><strong>{row.value}</strong></div></div>)}</div></section>}
function SapphireSilverSection({sections}:{sections:TemplateRenderProps['view']['sections']}){return <main className="sapphire-main">{sections.map((section,i)=><section className="sapphire-section" key={section.key}><div className="sapphire-section-title"><span>0{i+1}</span><h2>{section.title}</h2></div><div className="sapphire-cert"><div className="sapphire-cert-head"><span>{section.title}</span></div>{section.rows.map(row=><div className="sapphire-row" key={row.key}><span>{row.label}</span><strong>{row.value}</strong></div>)}</div></section>)}</main>}
function SapphireSilverRule(){return <DoubleRule/>}
export function SapphireSilverThumbnail(props:TemplateRenderProps){return <SapphireSilverLayout {...props}/>}
