import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { buildMetadata, getSitePage } from '@/lib/seo';
import { MARRIAGE_BIODATA_SAMPLES } from '@/lib/seo/marriageBiodataSamples';
const page = getSitePage('/marriage-biodata-samples');
export const metadata = buildMetadata({ title: page.title, description: page.description, path: page.path, type: 'website' });
export default function MarriageBiodataSamplesPage() {
  return <main className="min-h-screen bg-[#FBF7F0] text-stone-900"><Navbar />
    <header className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16"><p className="text-xs font-semibold uppercase tracking-[.16em] text-amber-700">Fictional examples · Copy and adapt</p><h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold sm:text-5xl">Marriage Biodata Samples for Different Life and Career Stages</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-stone-600">Compare eight filled examples for different situations. Every name and profile is fictional. Use the structure that fits, replace all details with accurate information, and remove anything you do not want circulated.</p><div className="mt-7 flex flex-wrap gap-3"><Link href="/create" className="btn-primary">Create your own biodata</Link><Link href="/templates" className="btn-secondary">Browse all templates</Link></div></header>
    <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-16 sm:px-8 md:grid-cols-2">
      {MARRIAGE_BIODATA_SAMPLES.map(sample => <article key={sample.id} className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-stone-100 px-6 py-4"><h2 className="font-display text-xl font-semibold">{sample.title}</h2><span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">Sample</span></div>
        <div className="p-6"><div className="rounded-2xl border border-[#D6C4A1] bg-[#FFFCF7] p-5"><p className="text-xs font-semibold uppercase tracking-[.15em] text-amber-800">Marriage Biodata</p>{sample.text.map((line,i)=><p key={line} className={i===0?'mt-4 font-display text-xl font-semibold':'mt-2 text-sm leading-6 text-stone-700'}>{line}</p>)}</div>
          <p className="mt-4 text-xs leading-6 text-stone-500">Fictional profile. Confirm the template ID is registered before customizing; replace all sample values before exporting.</p>
          <div className="mt-4 flex flex-wrap gap-3"><Link href={`/create?template=${sample.template}`} className="btn-primary">Use a template</Link></div>
        </div></article>)}
    </section><Footer /></main>;
}
