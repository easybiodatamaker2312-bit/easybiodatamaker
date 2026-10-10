import React from 'react';
import type { Colorway, TemplateRenderProps } from '../../template-contract';
import { colorwayVariables, TEMPLATE_ROOT_STYLE } from '../../template-contract';
import { A4Root, PhotoImage, SymbolMark } from '../phaseB/SharedTemplateParts';

export const CLASSIC_IVORY_COLORWAYS = [
 {id:'ivory-gold',name:'Ivory Gold',swatch:'#B88A45',variables:{paper:'#FFFCF5',ink:'#38291F',accent:'#B88A45',accent2:'#7D2D35',muted:'#796C5F',display:'Libre Baskerville, Georgia, serif',body:'Noto Sans, InterLocal, var(--template-indic-sans-stack)'}},
 {id:'ivory-maroon',name:'Ivory Maroon',swatch:'#7D2D35',variables:{paper:'#FFFCF7',ink:'#34231F',accent:'#7D2D35',accent2:'#C5A46D',muted:'#796C5F',display:'Libre Baskerville, Georgia, serif',body:'Noto Sans, InterLocal, var(--template-indic-sans-stack)'}},
 {id:'ivory-sage',name:'Ivory Sage',swatch:'#647A60',variables:{paper:'#FCFBF5',ink:'#2D382F',accent:'#647A60',accent2:'#B89A62',muted:'#687168',display:'Libre Baskerville, Georgia, serif',body:'Noto Sans, InterLocal, var(--template-indic-sans-stack)'}}
] satisfies [Colorway,Colorway,Colorway];
export const ROSE_ARCH_COLORWAYS = [
 {id:'rose-clay',name:'Rose Clay',swatch:'#A85E64',variables:{paper:'#FFF8F5',ink:'#422C30',accent:'#A85E64',accent2:'#D8B58D',muted:'#826C6C',display:'DM Serif Display, Georgia, serif',body:'Noto Sans, InterLocal, var(--template-indic-sans-stack)'}},
 {id:'blush-gold',name:'Blush Gold',swatch:'#C29A72',variables:{paper:'#FFFAF4',ink:'#4A3430',accent:'#C29A72',accent2:'#B86F78',muted:'#86746A',display:'DM Serif Display, Georgia, serif',body:'Noto Sans, InterLocal, var(--template-indic-sans-stack)'}},
 {id:'plum-rose',name:'Plum Rose',swatch:'#704453',variables:{paper:'#FCF7F7',ink:'#382832',accent:'#704453',accent2:'#C6A4A8',muted:'#7B6B74',display:'DM Serif Display, Georgia, serif',body:'Noto Sans, InterLocal, var(--template-indic-sans-stack)'}}
] satisfies [Colorway,Colorway,Colorway];
export const BLUE_LEDGER_COLORWAYS = [
 {id:'blue-ivory',name:'Blue Ivory',swatch:'#315A78',variables:{paper:'#FAFCFD',ink:'#243746',accent:'#315A78',accent2:'#B9945A',muted:'#687985',display:'Lora, Georgia, serif',body:'Noto Sans, InterLocal, var(--template-indic-sans-stack)'}},
 {id:'slate-silver',name:'Slate Silver',swatch:'#65798C',variables:{paper:'#FBFCFD',ink:'#2F3B46',accent:'#65798C',accent2:'#B6BDC5',muted:'#75808A',display:'Lora, Georgia, serif',body:'Noto Sans, InterLocal, var(--template-indic-sans-stack)'}},
 {id:'teal-paper',name:'Teal Paper',swatch:'#287C78',variables:{paper:'#F8FCFA',ink:'#243C3A',accent:'#287C78',accent2:'#C3A06A',muted:'#6C817D',display:'Lora, Georgia, serif',body:'Noto Sans, InterLocal, var(--template-indic-sans-stack)'}}
] satisfies [Colorway,Colorway,Colorway];
export const GARDEN_GREEN_COLORWAYS = [
 {id:'garden-sage',name:'Garden Sage',swatch:'#58765E',variables:{paper:'#FBFCF7',ink:'#2E3C31',accent:'#58765E',accent2:'#C3A46C',muted:'#738075',display:'Prata, Georgia, serif',body:'Noto Sans, InterLocal, var(--template-indic-sans-stack)'}},
 {id:'forest-gold',name:'Forest Gold',swatch:'#244E3B',variables:{paper:'#FAFBF5',ink:'#26372E',accent:'#244E3B',accent2:'#C5A15E',muted:'#6C7B70',display:'Prata, Georgia, serif',body:'Noto Sans, InterLocal, var(--template-indic-sans-stack)'}},
 {id:'olive-cream',name:'Olive Cream',swatch:'#85834D',variables:{paper:'#FCFBF4',ink:'#3F402B',accent:'#85834D',accent2:'#C4A16A',muted:'#797963',display:'Prata, Georgia, serif',body:'Noto Sans, InterLocal, var(--template-indic-sans-stack)'}}
] satisfies [Colorway,Colorway,Colorway];
export const MODERN_SPLIT_COLORWAYS = [
 {id:'terracotta',name:'Terracotta',swatch:'#C65E3B',variables:{paper:'#FFF9F3',ink:'#3C2B27',accent:'#C65E3B',accent2:'#D5A66F',muted:'#806D65',display:'Cormorant Infant, Georgia, serif',body:'Noto Sans, InterLocal, var(--template-indic-sans-stack)'}},
 {id:'cobalt',name:'Cobalt',swatch:'#3154A4',variables:{paper:'#F8FAFF',ink:'#26334D',accent:'#3154A4',accent2:'#D0AD65',muted:'#727D93',display:'Cormorant Infant, Georgia, serif',body:'Noto Sans, InterLocal, var(--template-indic-sans-stack)'}},
 {id:'cocoa',name:'Cocoa',swatch:'#705044',variables:{paper:'#FCF8F2',ink:'#382C27',accent:'#705044',accent2:'#BFA078',muted:'#81736A',display:'Cormorant Infant, Georgia, serif',body:'Noto Sans, InterLocal, var(--template-indic-sans-stack)'}}
] satisfies [Colorway,Colorway,Colorway];
export const GOLD_FRAME_COLORWAYS = [
 {id:'antique-gold',name:'Antique Gold',swatch:'#B28A42',variables:{paper:'#FFFCF4',ink:'#3B3023',accent:'#B28A42',accent2:'#7B2E35',muted:'#786B58',display:'EB Garamond, Georgia, serif',body:'Noto Sans, InterLocal, var(--template-indic-sans-stack)'}},
 {id:'rose-gold',name:'Rose Gold',swatch:'#B98275',variables:{paper:'#FFFAF7',ink:'#3F302D',accent:'#B98275',accent2:'#9A555C',muted:'#806E69',display:'EB Garamond, Georgia, serif',body:'Noto Sans, InterLocal, var(--template-indic-sans-stack)'}},
 {id:'champagne',name:'Champagne',swatch:'#C4A66D',variables:{paper:'#FFFDF8',ink:'#3A342A',accent:'#C4A66D',accent2:'#8A7758',muted:'#7A7468',display:'EB Garamond, Georgia, serif',body:'Noto Sans, InterLocal, var(--template-indic-sans-stack)'}}
] satisfies [Colorway,Colorway,Colorway];
export const MINIMAL_GRID_COLORWAYS = [
 {id:'ink-paper',name:'Ink Paper',swatch:'#272727',variables:{paper:'#FFFFFF',ink:'#272727',accent:'#272727',accent2:'#B9A27A',muted:'#707070',display:'Spectral, Georgia, serif',body:'Noto Sans, InterLocal, var(--template-indic-sans-stack)'}},
 {id:'navy-paper',name:'Navy Paper',swatch:'#263A50',variables:{paper:'#FFFFFF',ink:'#263A50',accent:'#263A50',accent2:'#A8B6C4',muted:'#707C88',display:'Spectral, Georgia, serif',body:'Noto Sans, InterLocal, var(--template-indic-sans-stack)'}},
 {id:'olive-paper',name:'Olive Paper',swatch:'#657052',variables:{paper:'#FFFDF8',ink:'#343B2C',accent:'#657052',accent2:'#C2A875',muted:'#777C6D',display:'Spectral, Georgia, serif',body:'Noto Sans, InterLocal, var(--template-indic-sans-stack)'}}
] satisfies [Colorway,Colorway,Colorway];
export const FLORAL_BORDER_COLORWAYS = [
 {id:'peach-bloom',name:'Peach Bloom',swatch:'#D48E72',variables:{paper:'#FFFAF5',ink:'#49342E',accent:'#D48E72',accent2:'#A35D66',muted:'#846E63',display:'Alegreya, Georgia, serif',body:'Noto Sans, InterLocal, var(--template-indic-sans-stack)'}},
 {id:'lavender-bloom',name:'Lavender Bloom',swatch:'#927DAA',variables:{paper:'#FCFAFF',ink:'#3E3548',accent:'#927DAA',accent2:'#C8A26B',muted:'#7C7285',display:'Alegreya, Georgia, serif',body:'Noto Sans, InterLocal, var(--template-indic-sans-stack)'}},
 {id:'sage-bloom',name:'Sage Bloom',swatch:'#78947D',variables:{paper:'#FBFCF7',ink:'#344337',accent:'#78947D',accent2:'#D0AD7D',muted:'#758176',display:'Alegreya, Georgia, serif',body:'Noto Sans, InterLocal, var(--template-indic-sans-stack)'}}
] satisfies [Colorway,Colorway,Colorway];
export const ROYAL_MAROON_COLORWAYS = [
 {id:'royal-maroon',name:'Royal Maroon',swatch:'#7A1727',variables:{paper:'#FFF9F0',ink:'#3A2025',accent:'#7A1727',accent2:'#C5A15B',muted:'#79635F',display:'Bree Serif, Georgia, serif',body:'Noto Sans, InterLocal, var(--template-indic-sans-stack)'}},
 {id:'wine-gold',name:'Wine Gold',swatch:'#5C2039',variables:{paper:'#FFFAF4',ink:'#39232D',accent:'#5C2039',accent2:'#D0B16D',muted:'#786771',display:'Bree Serif, Georgia, serif',body:'Noto Sans, InterLocal, var(--template-indic-sans-stack)'}},
 {id:'ruby-cream',name:'Ruby Cream',swatch:'#9A3037',variables:{paper:'#FFFBF5',ink:'#452A2A',accent:'#9A3037',accent2:'#C9A66B',muted:'#806B67',display:'Bree Serif, Georgia, serif',body:'Noto Sans, InterLocal, var(--template-indic-sans-stack)'}}
] satisfies [Colorway,Colorway,Colorway];
export const CONTEMPORARY_CARD_COLORWAYS = [
 {id:'sky-copper',name:'Sky Copper',swatch:'#387B88',variables:{paper:'#F9FCFC',ink:'#263B40',accent:'#387B88',accent2:'#C58C63',muted:'#71858A',display:'Gelasio, Georgia, serif',body:'Noto Sans, InterLocal, var(--template-indic-sans-stack)'}},
 {id:'berry-blush',name:'Berry Blush',swatch:'#8E536A',variables:{paper:'#FFFAFC',ink:'#3D2D35',accent:'#8E536A',accent2:'#D7A7A9',muted:'#806D77',display:'Gelasio, Georgia, serif',body:'Noto Sans, InterLocal, var(--template-indic-sans-stack)'}},
 {id:'charcoal-copper',name:'Charcoal Copper',swatch:'#3A4148',variables:{paper:'#FBFAF7',ink:'#2F3438',accent:'#3A4148',accent2:'#BE8B60',muted:'#747A7D',display:'Gelasio, Georgia, serif',body:'Noto Sans, InterLocal, var(--template-indic-sans-stack)'}}
] satisfies [Colorway,Colorway,Colorway];

const palettes = {
 'classic-ivory': { frame:'double', hero:'center', accent:'gold', photo:'oval', columns:'single' },
 'rose-arch': { frame:'soft', hero:'left', accent:'rose', photo:'arch', columns:'single' },
 'blue-ledger': { frame:'line', hero:'right', accent:'blue', photo:'square', columns:'two' },
 'garden-green': { frame:'botanical', hero:'center', accent:'green', photo:'round', columns:'single' },
 'modern-split': { frame:'none', hero:'split', accent:'terracotta', photo:'square', columns:'two' },
 'gold-frame': { frame:'ornate', hero:'center', accent:'gold', photo:'arch', columns:'single' },
 'minimal-grid': { frame:'line', hero:'left', accent:'mono', photo:'square', columns:'two' },
 'floral-border': { frame:'floral', hero:'center', accent:'rose', photo:'round', columns:'single' },
 'royal-maroon': { frame:'ornate', hero:'right', accent:'maroon', photo:'arch', columns:'single' },
 'contemporary-card': { frame:'soft', hero:'split', accent:'blue', photo:'square', columns:'two' },
} as const;
type InspiredId = keyof typeof palettes;

function InspiredLayout({view,auspiciousSymbol,colorway,id}:TemplateRenderProps & {id:InspiredId}) {
 const style = palettes[id];
 const photo = view.photos[0];
 const sections = view.sections.filter(section => section.key !== 'photos');
 const split = style.hero === 'split';
 const Ornament = ({'classic-ivory':'aside','rose-arch':'figure','blue-ledger':'nav','garden-green':'section','modern-split':'header','gold-frame':'footer','minimal-grid':'address','floral-border':'details','royal-maroon':'main','contemporary-card':'summary'} as const)[id];
 return <A4Root className={`inspired-template inspired-${id}`} style={{...TEMPLATE_ROOT_STYLE,...colorwayVariables(colorway),fontFamily:'var(--template-body)',padding:'13mm',position:'relative',overflow:'hidden'}}>
  {React.createElement(Ornament, { className: `inspired-frame frame-${style.frame}`, 'aria-hidden': 'true' })}
  <header className={`inspired-hero hero-${style.hero}`}>
   {style.hero === 'right' && <div className="inspired-portrait"><PhotoImage src={photo}/></div>}
   {style.hero === 'split' && <div className="inspired-split-portrait"><PhotoImage src={photo}/></div>}
   <div className="inspired-title"><SymbolMark auspiciousSymbol={auspiciousSymbol}/><p className="inspired-kicker">{view.headerCaption || 'Marriage Biodata'}</p><h1>{view.fullName || 'Your Name'}</h1><span>{view.sections[0]?.title || 'Personal Details'}</span></div>
   {style.hero === 'center' && <div className="inspired-center-portrait"><PhotoImage src={photo}/></div>}
   {style.hero === 'left' && <div className="inspired-portrait"><PhotoImage src={photo}/></div>}
  </header>
  <div className="inspired-rule"><span>✦</span></div>
  <main className={`inspired-sections sections-${style.columns}`}>
   {sections.map((section,index)=><section className="inspired-section" key={section.key}>
    <div className="inspired-section-title"><span>{String(index+1).padStart(2,'0')}</span><h2>{section.title}</h2></div>
    <div className="inspired-rows">{section.rows.map(row=><div className="inspired-row" key={row.key}><span>{row.label}</span><strong>{row.value}</strong></div>)}</div>
   </section>)}
   {view.photos.length>1 && <section className="inspired-section inspired-extra-photos"><div className="inspired-section-title"><span>✦</span><h2>{view.sections.find(s=>s.key==='photos')?.title || 'Photos'}</h2></div><div className="inspired-photo-gallery">{view.photos.slice(1).map(src=><PhotoImage key={src} src={src}/>)}</div></section>}
  </main>
  <footer className="inspired-footer"><span>{view.headerCaption || 'A personal introduction'}</span><span>{view.language.toUpperCase()}</span></footer>
 </A4Root>
}

export function ClassicIvoryLayout(p:TemplateRenderProps){return <InspiredLayout {...p} id="classic-ivory"/>} export function ClassicIvoryThumbnail(p:TemplateRenderProps){return <ClassicIvoryLayout {...p}/>}
export function RoseArchLayout(p:TemplateRenderProps){return <InspiredLayout {...p} id="rose-arch"/>} export function RoseArchThumbnail(p:TemplateRenderProps){return <RoseArchLayout {...p}/>}
export function BlueLedgerLayout(p:TemplateRenderProps){return <InspiredLayout {...p} id="blue-ledger"/>} export function BlueLedgerThumbnail(p:TemplateRenderProps){return <BlueLedgerLayout {...p}/>}
export function GardenGreenLayout(p:TemplateRenderProps){return <InspiredLayout {...p} id="garden-green"/>} export function GardenGreenThumbnail(p:TemplateRenderProps){return <GardenGreenLayout {...p}/>}
export function ModernSplitLayout(p:TemplateRenderProps){return <InspiredLayout {...p} id="modern-split"/>} export function ModernSplitThumbnail(p:TemplateRenderProps){return <ModernSplitLayout {...p}/>}
export function GoldFrameLayout(p:TemplateRenderProps){return <InspiredLayout {...p} id="gold-frame"/>} export function GoldFrameThumbnail(p:TemplateRenderProps){return <GoldFrameLayout {...p}/>}
export function MinimalGridLayout(p:TemplateRenderProps){return <InspiredLayout {...p} id="minimal-grid"/>} export function MinimalGridThumbnail(p:TemplateRenderProps){return <MinimalGridLayout {...p}/>}
export function FloralBorderLayout(p:TemplateRenderProps){return <InspiredLayout {...p} id="floral-border"/>} export function FloralBorderThumbnail(p:TemplateRenderProps){return <FloralBorderLayout {...p}/>}
export function RoyalMaroonLayout(p:TemplateRenderProps){return <InspiredLayout {...p} id="royal-maroon"/>} export function RoyalMaroonThumbnail(p:TemplateRenderProps){return <RoyalMaroonLayout {...p}/>}
export function ContemporaryCardLayout(p:TemplateRenderProps){return <InspiredLayout {...p} id="contemporary-card"/>} export function ContemporaryCardThumbnail(p:TemplateRenderProps){return <ContemporaryCardLayout {...p}/>}
