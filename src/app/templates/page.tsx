'use client';

import Link from 'next/link';
import { useState } from 'react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { TEMPLATES, type TemplateId } from '@/components/biodata/TemplateRegistry';
import { defaultBiodata } from '@/lib/biodata-schema';
import { useBiodataView } from '@/lib/useBiodataView';

const sample = { ...defaultBiodata, fullName: 'Aarav Mehta', dateOfBirth: '1997-08-14', placeOfBirth: 'Ahmedabad', height: '5\'10"', religion: 'Hindu', caste: 'Vaishnav', fatherName: 'Rajesh Mehta', motherName: 'Nisha Mehta', highestQualification: 'B.Tech, Computer Science', occupation: 'Product Engineer', organization: 'Technology Company', city: 'Ahmedabad', state: 'Gujarat', phone: '+91 98765 43210', email: 'aarav@example.com', aboutMe: 'Calm, family-oriented and curious about the world. I enjoy travel, reading and building useful products.', expectations: 'Looking for a kind, grounded partner who values family, growth and mutual respect.' };


export default function TemplatesPage() {
  const [filter, setFilter] = useState<'All' | 'Traditional' | 'Modern' | 'Minimal' | 'Regional'>('All');
  const view = useBiodataView(sample, 'en', ['basics', 'family', 'education', 'about', 'contact', 'photos'], {}, true, [], []);
  const items = (Object.keys(TEMPLATES) as TemplateId[]).filter((id) => filter === 'All' || TEMPLATES[id].category === filter);
  return <div className="min-h-screen bg-[var(--ivory)]"><Navbar /><main>
    <section className="border-b border-stone-200 px-4 py-16 sm:py-20"><div className="mx-auto max-w-6xl"><p className="eyebrow">Premium template collection</p><h1 className="mt-3 max-w-3xl font-display text-5xl leading-[.95] text-[var(--ink)] sm:text-6xl">Twelve distinct wedding stationery directions, each designed as its own visual world.</h1><p className="mt-6 max-w-2xl text-base leading-7 text-stone-600">Choose from twelve independent layouts with different palettes, typography, ornaments and photo treatments. Every design is built to carry the complete biodata, not just a shortened preview.</p><div className="mt-8 flex flex-wrap gap-2">{['All','Traditional','Modern','Minimal','Regional'].map((f) => <button key={f} onClick={() => setFilter(f as typeof filter)} className={`rounded-full border px-4 py-2 text-sm font-medium transition ${filter === f ? 'border-[var(--ink)] bg-[var(--ink)] text-white' : 'border-stone-300 bg-white text-stone-700 hover:border-[var(--gold)]'}`}>{f}</button>)}</div></div></section>
    <section className="px-4 py-12 sm:py-16"><div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">{items.map((id) => { const t = TEMPLATES[id]; const colorway = t.colorways[0]; const Layout = t.Thumbnail; return <article key={id} className="group"><div className="overflow-hidden rounded-[28px] border border-stone-200 bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"><div className="template-thumbnail overflow-hidden rounded-[20px] bg-stone-100"><div className="origin-top-left scale-[.42] sm:scale-[.47]" style={{ width: '210mm', height: '297mm' }}><Layout view={view} auspiciousSymbol="none" colorway={colorway} /></div></div></div><div className="px-1 pt-4"><div className="flex items-center justify-between gap-3"><h2 className="font-display text-2xl text-[var(--ink)]">{t.name}</h2><span className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-600">{t.category}</span></div><p className="mt-2 text-sm leading-6 text-stone-600">{t.mood}</p><div className="mt-4 flex items-center justify-between gap-3"><div className="flex gap-1.5">{t.colorways.map((cw) => <span key={cw.id} className="h-5 w-5 rounded-full border border-white shadow-sm" style={{ background: cw.swatch }} title={cw.name} />)}</div><Link href={`/create?template=${id}`} className="btn-secondary !min-h-10 !px-4">Use this template</Link></div></div></article>; })}</div></section>
  </main><Footer /></div>;
}
