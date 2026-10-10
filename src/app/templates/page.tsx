'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Check, Search, X, Eye, ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { TEMPLATES, type TemplateId } from '@/components/biodata/TemplateRegistry';
import { defaultBiodata } from '@/lib/biodata-schema';
import { useBiodataView } from '@/lib/useBiodataView';
import { TEMPLATE_PREVIEWS } from '@/lib/seo/templatePreviews';

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': 'https://easybiodatamaker.com/#software',
  name: 'EasyBiodataMaker',
  applicationCategory: 'LifestyleApplication',
  applicationSubCategory: 'Matrimonial Tools',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
  description: 'Free online marriage biodata maker with templates, photo upload, custom fields and A4 export.',
  url: 'https://easybiodatamaker.com',
};

const ALL_TEMPLATE_IDS = Object.keys(TEMPLATES) as TemplateId[];

const sample = { ...defaultBiodata, fullName: 'Aarav Mehta', dateOfBirth: '1997-08-14', placeOfBirth: 'Ahmedabad', height: '5\'10"', religion: 'Hindu', caste: 'Vaishnav', fatherName: 'Rajesh Mehta', motherName: 'Nisha Mehta', highestQualification: 'B.Tech, Computer Science', occupation: 'Product Engineer', organization: 'Technology Company', city: 'Ahmedabad', state: 'Gujarat', phone: '+91 98765 43210', email: 'aarav@example.com', aboutMe: 'Calm, family-oriented and curious about the world. I enjoy travel, reading and building useful products.', expectations: 'Looking for a kind, grounded partner who values family, growth and mutual respect.' };


export default function TemplatesPage() {
  const [filter, setFilter] = useState<'All' | 'Traditional' | 'Modern' | 'Minimal' | 'Regional'>('All');
  const [search, setSearch] = useState('');
  const [colorwayByTemplate, setColorwayByTemplate] = useState<Partial<Record<TemplateId, string>>>({});
  const [quickViewId, setQuickViewId] = useState<TemplateId | null>(null);
  const view = useBiodataView(sample, 'en', ['basics', 'family', 'education', 'about', 'contact', 'photos'], {}, true, [], []);
  const allIds = ALL_TEMPLATE_IDS;
  const items = useMemo(() => allIds.filter((id) => {
    const template = TEMPLATES[id];
    const matchesFilter = filter === 'All' || template.category === filter;
    const q = search.trim().toLowerCase();
    const matchesSearch = !q || `${template.name} ${template.category} ${template.mood}`.toLowerCase().includes(q);
    return matchesFilter && matchesSearch;
  }), [filter, search]);
  const quickView = quickViewId ? TEMPLATES[quickViewId] : null;
  const selectedColorway = (id: TemplateId) => {
    const template = TEMPLATES[id];
    return template.colorways.find((cw) => cw.id === colorwayByTemplate[id]) ?? template.colorways[0];
  };

  return <div className="min-h-screen bg-[var(--ivory)]"><Navbar /><main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
    <section className="relative overflow-hidden border-b border-[#e7d8c1] bg-[radial-gradient(ellipse_at_82%_12%,rgba(184,137,59,.13),transparent_38%),linear-gradient(180deg,#fffdf8_0%,#f5ecdf_100%)] px-4 py-14 sm:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#c9a76c]/30 sm:h-96 sm:w-96" />
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[.22em] text-[#9a7335]"><span className="h-px w-8 bg-[#b8893b]" /> The design atelier <span className="rounded-full border border-[#d8c29b] bg-white/70 px-3 py-1 tracking-[.12em]">{allIds.length} original layouts</span></div>
        <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-end">
          <div><h1 className="max-w-4xl font-display text-4xl leading-[1.02] text-[var(--ink)] sm:text-6xl lg:text-7xl">A first impression, <span className="italic text-[#9b7137]">beautifully</span> considered.</h1><p className="mt-6 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg">Explore distinct marriage biodata layouts—from understated and modern to ceremonial and richly detailed. Preview the actual design, try its colorways, then continue with your own details.</p></div>
          <div className="rounded-2xl border border-[#e5d5b9] bg-white/75 p-5 shadow-[0_16px_45px_rgba(72,49,25,.07)] backdrop-blur"><p className="font-display text-2xl text-[var(--ink)]">Made for your story</p><p className="mt-2 text-sm leading-6 text-stone-600">Your selected layout follows the details and sections you add in the builder. Choose a style first; personalize the content next.</p><div className="mt-4 flex items-center gap-2 text-xs text-stone-500"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f3eadb] text-[#8b642d]">01</span> Browse <span className="text-[#bba47c]">—</span><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f3eadb] text-[#8b642d]">02</span> Customize <span className="text-[#bba47c]">—</span><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f3eadb] text-[#8b642d]">03</span> Export</div></div>
        </div>
      </div>
    </section>

    <section className="bg-[#fffdf9] px-4 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 border-b border-[#eadfce] pb-6 lg:flex-row lg:items-center lg:justify-between">
          <div><p className="text-xs font-semibold uppercase tracking-[.18em] text-[#9a7335]">Find your style</p><h2 className="mt-1 font-display text-3xl text-[var(--ink)]">The template collection</h2><p className="mt-1 text-sm text-stone-500">Showing {items.length} of {allIds.length} designs</p></div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <label className="flex min-h-11 items-center gap-2 rounded-full border border-[#e2d5c3] bg-white px-4 shadow-sm focus-within:border-[#b8893b] focus-within:ring-2 focus-within:ring-[#b8893b]/15"><Search size={16} className="shrink-0 text-stone-400" /><span className="sr-only">Search templates</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search style or mood" className="w-full min-w-0 bg-transparent text-sm text-stone-800 outline-none placeholder:text-stone-400 sm:w-52" /></label>
            <div className="flex flex-wrap gap-2">{(['All','Traditional','Modern','Minimal','Regional'] as const).map((f) => <button key={f} onClick={() => setFilter(f)} aria-pressed={filter === f} className={`rounded-full border px-3.5 py-2 text-sm font-medium transition ${filter === f ? 'border-[#34251b] bg-[#34251b] text-white shadow-sm' : 'border-[#e2d5c3] bg-white text-stone-700 hover:border-[#b8893b] hover:text-[#805c29]'}`}>{f}</button>)}</div>
          </div>
        </div>

        {items.length ? <div className="grid gap-x-5 gap-y-10 pt-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{items.map((id, index) => {
          const t = TEMPLATES[id];
          const cw = selectedColorway(id);
          const Layout = t.Layout;
          return <article key={id} className="group min-w-0">
            <div className="relative rounded-[22px] border border-[#e5d8c5] bg-white p-2 shadow-[0_7px_28px_rgba(71,45,30,.055)] transition duration-300 hover:-translate-y-1 hover:border-[#c3a064] hover:shadow-[0_20px_44px_rgba(71,45,30,.13)]">
              <div className="template-thumbnail overflow-hidden rounded-[14px] bg-[#f7f0e5]">
                <div className="template-live-preview"><div><Layout view={view} auspiciousSymbol="none" colorway={cw} /></div></div>
              </div>
              <span className="absolute left-4 top-4 rounded-full border border-white/80 bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[.13em] text-stone-600 shadow-sm">{String(index + 1).padStart(2, '0')}</span>
              <button onClick={() => setQuickViewId(id)} className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full border border-[#e6d7c1] bg-white/95 px-3 py-2 text-xs font-semibold text-[#49372a] shadow-md transition hover:bg-[#34251b] hover:text-white" aria-label={`Quick preview ${t.name}`}><Eye size={14} /> Quick view</button>
            </div>
            <div className="px-1 pt-4">
              <div className="flex items-start justify-between gap-2"><h3 className="font-display text-[1.35rem] leading-tight text-[var(--ink)]">{t.name}</h3><span className="shrink-0 rounded-full bg-[#f4ecdf] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#80633b]">{t.category}</span></div>
              <p className="mt-2 min-h-[3rem] text-sm leading-6 text-stone-600">{t.mood}</p>
              <div className="mt-4 flex items-center justify-between gap-3 border-t border-[#eee5d8] pt-3">
                <div className="flex items-center gap-2" aria-label={`Colorways for ${t.name}`}>{t.colorways.map((option) => <button key={option.id} type="button" onClick={() => setColorwayByTemplate((current) => ({ ...current, [id]: option.id }))} aria-label={`${option.name} colorway`} aria-pressed={cw.id === option.id} title={option.name} className={`flex h-7 w-7 items-center justify-center rounded-full border-2 transition ${cw.id === option.id ? 'scale-110 border-[#34251b] ring-2 ring-[#c5a36a]/40 ring-offset-1' : 'border-white shadow-sm hover:scale-105'}`} style={{ backgroundColor: option.swatch }}>{cw.id === option.id && <Check size={13} className="text-white drop-shadow" />}</button>)}</div>
                <Link href={`/create?template=${id}`} className="inline-flex min-h-10 items-center gap-1.5 rounded-full bg-[#34251b] px-4 text-xs font-semibold text-white transition hover:bg-[#8a632e]">Use design <ArrowUpRight size={14} /></Link>
              </div>
              <p className="mt-2 text-[11px] text-stone-400">Selected: {cw.name}</p>
            </div>
          </article>;
        })}</div> : <div className="py-20 text-center"><p className="font-display text-2xl text-[var(--ink)]">No matching designs</p><p className="mt-2 text-sm text-stone-500">Try a different search or clear the category filter.</p><button onClick={() => { setSearch(''); setFilter('All'); }} className="mt-5 rounded-full bg-[#34251b] px-5 py-2.5 text-sm font-semibold text-white">Show all templates</button></div>}
      </div>
    </section>
  </main><Footer />
  {quickView && quickViewId && <div className="fixed inset-0 z-[100] flex items-end justify-center bg-[#201710]/65 p-0 backdrop-blur-sm sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-labelledby="template-quick-view-title" onMouseDown={(event) => { if (event.target === event.currentTarget) setQuickViewId(null); }}><div className="relative max-h-[94vh] w-full max-w-5xl overflow-y-auto rounded-t-3xl bg-[#fbf7f0] p-4 shadow-2xl sm:rounded-3xl sm:p-7"><button type="button" onClick={() => setQuickViewId(null)} aria-label="Close preview" className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#e1d4c0] bg-white text-stone-700 hover:bg-stone-100"><X size={18} /></button><div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_280px] md:items-start"><div className="mx-auto w-full max-w-[470px]"><div className="overflow-hidden rounded-xl border border-[#e4d6c1] bg-white p-2 shadow-xl"><div className="template-live-preview"><div><quickView.Layout view={view} auspiciousSymbol="none" colorway={selectedColorway(quickViewId)} /></div></div></div></div><div className="pt-2 md:sticky md:top-2"><p className="text-xs font-semibold uppercase tracking-[.18em] text-[#9a7335]">Template preview</p><h2 id="template-quick-view-title" className="mt-2 pr-10 font-display text-3xl text-[var(--ink)]">{quickView.name}</h2><span className="mt-3 inline-flex rounded-full bg-[#efe4d1] px-3 py-1 text-xs font-semibold text-[#73552e]">{quickView.category}</span><p className="mt-4 text-sm leading-6 text-stone-600">{quickView.mood}</p><p className="mt-6 text-xs font-semibold uppercase tracking-[.15em] text-stone-500">Choose a colorway</p><div className="mt-3 grid gap-2">{quickView.colorways.map((option) => <button key={option.id} onClick={() => setColorwayByTemplate((current) => ({ ...current, [quickViewId]: option.id }))} className={`flex items-center gap-3 rounded-xl border p-3 text-left transition ${selectedColorway(quickViewId).id === option.id ? 'border-[#8b642d] bg-white shadow-sm' : 'border-[#e3d7c4] bg-white/50 hover:bg-white'}`}><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/5" style={{ background: option.swatch }}>{selectedColorway(quickViewId).id === option.id && <Check size={15} className="text-white drop-shadow" />}</span><span className="flex-1 text-sm font-medium text-stone-800">{option.name}</span>{selectedColorway(quickViewId).id === option.id && <Check size={16} className="text-[#8b642d]" />}</button>)}</div><Link href={`/create?template=${quickViewId}&colorway=${selectedColorway(quickViewId).id}`} className="mt-6 flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#34251b] px-5 text-sm font-semibold text-white transition hover:bg-[#8a632e]">Customize this design <ArrowUpRight size={16} /></Link><p className="mt-3 text-xs leading-5 text-stone-500">This is a sample preview. Your own details and chosen sections will replace the sample content in the builder.</p></div></div></div></div>}
  </div>;
}
