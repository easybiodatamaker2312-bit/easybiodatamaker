import React from 'react';
import type { TemplateRenderProps, Colorway } from '../../template-contract';
import { colorwayVariables, TEMPLATE_ROOT_STYLE } from '../../template-contract';
import { A4Root, PhotoImage, SymbolMark } from '../phaseB/SharedTemplateParts';
import './portrait-classic.css';

export const PORTRAIT_CLASSIC_COLORWAYS = [
  { id: 'portrait-gold', name: 'Portrait Gold', swatch: '#C58A2A', variables: { paper: '#FFFCF6', ink: '#172E3B', accent: '#C58A2A', accent2: '#EBD8B6', muted: '#6F6A61', display: 'var(--font-display), Georgia, serif', body: 'var(--font-ui), Arial, sans-serif' } },
  { id: 'portrait-rose', name: 'Portrait Rose', swatch: '#9B3650', variables: { paper: '#FFFAF7', ink: '#422B32', accent: '#9B3650', accent2: '#EBD6C8', muted: '#806E70', display: 'var(--font-display), Georgia, serif', body: 'var(--font-ui), Arial, sans-serif' } },
  { id: 'portrait-sage', name: 'Portrait Sage', swatch: '#557665', variables: { paper: '#FAFCF7', ink: '#263B35', accent: '#557665', accent2: '#E4D8BC', muted: '#718078', display: 'var(--font-display), Georgia, serif', body: 'var(--font-ui), Arial, sans-serif' } },
] satisfies [Colorway, Colorway, Colorway];

const SECTION_ORDER = ['basics', 'family', 'education', 'about', 'additional', 'contact', 'photos'];

function Section({ title, children, className = '' }: { title: string; children: React.ReactNode; className?: string }) {
  return <section className={`portrait-classic-section ${className}`}>
    <h2><span className="portrait-classic-section-icon" aria-hidden="true">✦</span>{title}</h2>
    {children}
  </section>;
}

function Rows({ rows }: { rows: TemplateRenderProps['view']['sections'][number]['rows'] }) {
  return <div className="portrait-classic-rows">{rows.map((row) => <div className="portrait-classic-row" key={row.key}><span>{row.label}</span><b>{row.value}</b></div>)}</div>;
}

export function PortraitClassicLayout({ view, auspiciousSymbol, colorway }: TemplateRenderProps) {
  const sections = SECTION_ORDER.map((key) => view.sections.find((section) => section.key === key)).filter((section) => section && section.rows.length);
  const basics = sections.find((section) => section?.key === 'basics');
  const family = sections.find((section) => section?.key === 'family');
  const education = sections.find((section) => section?.key === 'education');
  const about = sections.find((section) => section?.key === 'about');
  const others = sections.filter((section) => section && !['basics', 'family', 'education', 'about', 'photos'].includes(section.key));
  const photo = view.photos[0];
  const firstName = view.fullName.trim().split(/\s+/)[0] || view.fullName;
  return <A4Root className="portrait-classic" style={{ ...TEMPLATE_ROOT_STYLE, ...colorwayVariables(colorway) }}>
    <div className="portrait-classic-frame">
      <div className="portrait-classic-corner portrait-classic-corner-tl">❧</div>
      <div className="portrait-classic-corner portrait-classic-corner-tr">❧</div>
      <div className="portrait-classic-corner portrait-classic-corner-bl">❧</div>
      <div className="portrait-classic-corner portrait-classic-corner-br">❧</div>
      <header className="portrait-classic-header">
        <p>A PERSONAL INTRODUCTION</p>
        <div className="portrait-classic-lotus">— <span>♧</span> —</div>
        <h1>{firstName}</h1>
        <div className="portrait-classic-subtitle">MARRIAGE BIODATA</div>
        {auspiciousSymbol !== 'none' && <div className="portrait-classic-symbol"><SymbolMark auspiciousSymbol={auspiciousSymbol}/></div>}
      </header>

      <div className="portrait-classic-hero">
        <div className="portrait-classic-photo-wrap"><PhotoImage src={photo} alt={`${firstName} profile`} className="portrait-classic-photo"/></div>
        {basics && <Section title={basics.title} className="portrait-classic-personal"><Rows rows={basics.rows.filter((row) => row.key !== 'fullName')}/></Section>}
      </div>

      {family && <Section title={family.title}><Rows rows={family.rows}/></Section>}
      {education && <Section title={education.title}><Rows rows={education.rows}/></Section>}
      {about && <Section title={about.title} className="portrait-classic-about"><div className="portrait-classic-about-copy">{about.rows.map((row) => <p key={row.key}>{row.value}</p>)}</div></Section>}
      {others.map((section) => section && <Section key={section.key} title={section.title}><Rows rows={section.rows}/></Section>)}
      <footer className="portrait-classic-footer"><span/> <b>♧</b> <span/></footer>
    </div>
  </A4Root>;
}

export function PortraitClassicThumbnail(props: TemplateRenderProps) {
  return <PortraitClassicLayout {...props}/>;
}
