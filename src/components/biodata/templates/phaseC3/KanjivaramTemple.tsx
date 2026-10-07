import React from 'react';
import type { Colorway, TemplateRenderProps } from '../../template-contract';
import { colorwayVariables, TEMPLATE_ROOT_STYLE } from '../../template-contract';
import { A4Root, PhotoImage, SymbolMark } from '../phaseB/SharedTemplateParts';

export const KANJIVARAM_COLORWAYS = [
  { id:'temple-purple', name:'Temple Purple', swatch:'#4A1D6B', variables:{paper:'#FBF4E8',ink:'#2B1838',accent:'#4A1D6B',accent2:'#B0206B',muted:'#715B73',display:'var(--font-tamil-serif), var(--font-telugu-serif), Georgia, serif',body:'InterLocal, var(--font-tamil-sans), var(--font-telugu-sans), var(--template-indic-sans-stack)'} },
  { id:'magenta-zari', name:'Magenta Zari', swatch:'#B0206B', variables:{paper:'#FFF5F1',ink:'#35152B',accent:'#B0206B',accent2:'#7B2B73',muted:'#765568',display:'var(--font-tamil-serif), var(--font-telugu-serif), Georgia, serif',body:'InterLocal, var(--font-tamil-sans), var(--font-telugu-sans), var(--template-indic-sans-stack)'} },
  { id:'plum-gold', name:'Plum Gold', swatch:'#8B5A2B', variables:{paper:'#F7F0E5',ink:'#321E2A',accent:'#6B2D5C',accent2:'#C38A2E',muted:'#765F62',display:'var(--font-tamil-serif), var(--font-telugu-serif), Georgia, serif',body:'InterLocal, var(--font-tamil-sans), var(--font-telugu-sans), var(--template-indic-sans-stack)'} },
] satisfies [Colorway,Colorway,Colorway];

function Gopuram({bottom=false}:{bottom?:boolean}){return <svg className={`kanjivaram-gopuram ${bottom?'is-bottom':''}`} viewBox="0 0 1200 80" preserveAspectRatio="none" aria-hidden="true"><path d="M0 76h1200M35 65h1130M80 53h1040M125 41h950M170 29h860M215 17h770M260 5h680"/><path d="M280 76V8m640 68V8M330 76V25m540 51V25M380 76V38m440 38V38"/><circle cx="600" cy="11" r="7"/><circle cx="560" cy="24" r="5"/><circle cx="640" cy="24" r="5"/></svg>}

export function KanjivaramTempleLayout({view,auspiciousSymbol,colorway}:TemplateRenderProps){
 const photo=view.photos[0]; const extra=view.photos.slice(1); const sections=view.sections.filter(s=>s.key!=='photos');
 return <A4Root className="kanjivaram-temple-layout" style={{...TEMPLATE_ROOT_STYLE,...colorwayVariables(colorway),fontFamily:'var(--template-body)'}}>
   <div className="kanjivaram-frame" aria-hidden="true"/><Gopuram/>
   <header className="kanjivaram-hero"><div className="kanjivaram-copy"><SymbolMark value={auspiciousSymbol}/><p>{view.headerCaption}</p><h1>{view.fullName}</h1><span className="kanjivaram-rule"/></div><div className="kanjivaram-portrait"><PhotoImage src={photo}/></div></header>
   <main className="kanjivaram-main">{sections.map((section,i)=><section className="kanjivaram-section" key={section.key}><div className="kanjivaram-tab"><span>{String(i+1).padStart(2,'0')}</span><h2>{section.title}</h2></div><div className="kanjivaram-box">{section.rows.map(row=><div className="kanjivaram-row" key={row.key}><span>{row.label}</span><strong>{row.value}</strong></div>)}</div></section>)}
   {extra.length>0&&<section className="kanjivaram-gallery"><h2>{view.sections.find(s=>s.key==='photos')?.title}</h2><div>{extra.map(src=><PhotoImage key={src} src={src}/>)}</div></section>}</main>
   <Gopuram bottom/><footer>{view.headerCaption}</footer>
 </A4Root>
}
export function KanjivaramTempleThumbnail(props:TemplateRenderProps){return <KanjivaramTempleLayout {...props}/>}
