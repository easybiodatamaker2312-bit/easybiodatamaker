import { buildMetadata, getSitePage } from '@/lib/seo';
import { SoftwareApplicationSchema } from '@/components/seo/SoftwareApplicationSchema';
import Link from 'next/link';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { ArrowRight, Check, ChevronDown, Download, FileText, Heart, LockKeyhole, Palette, ShieldCheck, Sparkles, Upload } from 'lucide-react';
import { LandingTemplatePreview, default as TemplateShowcase } from '@/components/landing/TemplateShowcase';
import { MarriageBiodataContent } from '@/components/landing/MarriageBiodataContent';

const page = getSitePage('/');

export const metadata = buildMetadata({ title: page.title, description: page.description, path: page.path, type: page.type });

const faqs = [
  ['Do I need to create an account?', 'No. EasyBiodataMaker is designed for quick, private creation without a login.'],
  ['Does my biodata get uploaded to a server?', 'The builder is designed around browser-side data handling. Your personal details are not needed on an account or database to create your biodata.'],
  ['Can I make a biodata in an Indian language?', 'Yes. Create biodatas in English and regional Indian languages with script-aware typography and labels.'],
  ['Can I add my photo?', 'Yes. The builder supports a profile photo and additional photos, with the images prepared for a clean A4 layout.'],
  ['Can I change the design after filling the form?', 'Yes. Your biodata data and design selection are kept separate, so you can switch templates without filling the form again.'],
  ['Is the PDF suitable for WhatsApp?', 'Save a sharp A4 PDF from your browser or download a PNG for WhatsApp Status and social sharing.'],
];


function Ornament({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 120 120" fill="none">
      <circle cx="60" cy="60" r="42" stroke="currentColor" strokeOpacity=".28" />
      <circle cx="60" cy="60" r="31" stroke="currentColor" strokeOpacity=".18" />
      <path d="M60 18c5 14 14 23 28 28-14 5-23 14-28 28-5-14-14-23-28-28 14-5 23-14 28-28Z" stroke="currentColor" strokeOpacity=".25" />
      <path d="M102 60c-14 5-23 14-28 28-5-14-14-23-28-28 14-5 23-14 28-28 5 14 14 23 28 28Z" stroke="currentColor" strokeOpacity=".16" />
    </svg>
  );
}

function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return <div className="mx-auto max-w-2xl text-center"><span className="eyebrow">{eyebrow}</span><h2 className="mt-3 text-balance font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">{title}</h2><p className="mt-4 text-base leading-7 text-stone-600">{body}</p></div>;
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-ivory text-ink">
      <Navbar />

      <main>
        <SoftwareApplicationSchema />
        <section className="relative overflow-hidden border-b border-stone-200/70 bg-ivory">
          <div className="absolute -right-20 -top-16 hidden text-gold/70 md:block"><Ornament className="h-64 w-64" /></div>
          <div className="absolute -bottom-28 -left-20 text-gold/50"><Ornament className="h-64 w-64" /></div>
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:grid-cols-[1.02fr_.98fr] lg:gap-16 lg:px-10 lg:pt-24">
            <div className="max-w-2xl">
              <div className="eyebrow"><Sparkles size={14} /> Made for Indian families</div>
              <h1 className="mt-5 text-balance font-display text-[46px] font-semibold leading-[.98] tracking-[-.035em] text-ink sm:text-6xl lg:text-7xl">
                A marriage biodata that feels <span className="text-oxblood">worthy of the occasion.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600 sm:text-xl">
                Create a refined, wedding-ready biodata in about five minutes. Choose a beautiful design, add your story and photos, and make an A4 document your family will be proud to share.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/create" className="btn-primary px-6 py-3.5 text-base"><span>Create my biodata</span><ArrowRight size={17} /></Link>
                <Link href="/templates" className="btn-secondary px-6 py-3.5 text-base"><Palette size={17} /> Explore templates</Link>
              </div>
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-stone-500">
                {['No login', 'Privacy-first', 'A4-ready', 'Indian languages'].map(item => <span key={item} className="inline-flex items-center gap-2"><Check size={15} className="text-deep-emerald" />{item}</span>)}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[520px] lg:justify-self-end">
              <div className="absolute -left-5 top-12 hidden w-36 rounded-2xl border border-stone-200 bg-white/90 p-4 shadow-xl backdrop-blur sm:block">
                <p className="text-[10px] font-semibold uppercase tracking-[.16em] text-gold">Your details</p>
                <p className="mt-2 font-display text-lg text-ink">Live preview</p>
                <div className="mt-2 h-1 w-14 rounded bg-gold/40" />
              </div>
              <div className="mx-auto w-[73%] sm:w-[67%]">
                <LandingTemplatePreview templateId="midnight-gold" />
              </div>
              <div className="absolute -bottom-4 -right-1 rounded-2xl border border-stone-200 bg-white px-4 py-3 shadow-xl sm:-right-5">
                <div className="flex items-center gap-3"><div className="grid size-9 place-items-center rounded-full bg-emerald-50 text-deep-emerald"><ShieldCheck size={18} /></div><div><p className="text-xs font-semibold text-ink">Private by design</p><p className="text-[11px] text-stone-500">No account needed</p></div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-stone-200/70 bg-white px-5 py-10 sm:px-8">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-4 text-center text-sm text-stone-500">
            <span className="inline-flex items-center gap-2"><LockKeyhole size={16} className="text-gold" /> Your information stays yours</span>
            <span className="hidden h-5 w-px bg-stone-200 sm:block" />
            <span className="inline-flex items-center gap-2"><FileText size={16} className="text-gold" /> Designed for A4 sharing</span>
            <span className="hidden h-5 w-px bg-stone-200 sm:block" />
            <span className="inline-flex items-center gap-2"><Heart size={16} className="text-gold" /> Made for family introductions</span>
          </div>
                  </section>

        <section className="px-5 py-20 sm:px-8 sm:py-24">
          <SectionHeading eyebrow="How it works" title="From blank page to family-ready in three calm steps." body="No design skills. No complicated field editor. Just the information that matters, presented beautifully." />
          <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-3">
            {[{ n:'01', icon: FileText, title:'Tell us about them', text:'Fill in personal, family, education, career and partner-preference details in a simple guided flow.' }, { n:'02', icon: Upload, title:'Add the finishing touches', text:'Upload a profile photo and supporting photos, choose your language, and keep only the details you want to share.' }, { n:'03', icon: Download, title:'Choose a design & share', text:'See a live biodata preview, switch designs whenever you like, then download a polished A4 document.' }].map(({n,icon:Icon,title,text}) => <div key={n} className="card motif-corner p-7 sm:p-8"><div className="flex items-center justify-between"><div className="grid size-11 place-items-center rounded-full bg-stone-100 text-ink"><Icon size={19} /></div><span className="font-display text-2xl text-gold/70">{n}</span></div><h3 className="mt-7 font-display text-2xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-stone-600">{text}</p></div>)}
          </div>
        </section>

        <section className="bg-[#F3EEE5] px-5 py-20 sm:px-8 sm:py-24">
          <SectionHeading eyebrow="Templates" title="Wedding stationery, not a generic form." body="Each design is built around typography, spacing and information hierarchy—not clip-art. Start with a style and make it yours." />
          <TemplateShowcase />
          <div className="mt-9 text-center"><Link href="/templates" className="btn-secondary">View the template gallery <ArrowRight size={15} /></Link></div>
        </section>

        <section className="border-y border-stone-200/70 bg-white px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
            <div><span className="eyebrow"><ShieldCheck size={14} /> Privacy-first</span><h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">A family document should stay a family document.</h2><p className="mt-5 max-w-xl text-base leading-7 text-stone-600">You should not have to create an account just to prepare a biodata. The product is designed around browser-side creation, minimal data handling and straightforward sharing.</p><div className="mt-8 space-y-4">{['No account or login flow', 'No invented social proof or ratings', 'Clear privacy and sharing controls', 'Edit your information before you export'].map(item => <div key={item} className="flex gap-3 text-sm text-stone-700"><Check size={18} className="mt-0.5 shrink-0 text-deep-emerald" />{item}</div>)}</div></div>
            <div className="rounded-3xl border border-stone-200 bg-ivory p-7 sm:p-9"><LockKeyhole size={21} className="text-gold" /><h3 className="mt-5 font-display text-2xl font-semibold">No login. No pressure.</h3><p className="mt-3 text-sm leading-6 text-stone-600">Start when you are ready, make the document, and keep control over where you share it. If you leave and return, the builder can help you resume your work on the same device.</p><div className="gold-divider my-7" /><p className="text-xs leading-5 text-stone-500">Privacy details are explained in plain language rather than hidden behind marketing claims.</p><Link href="/privacy-policy" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-oxblood">Read the privacy policy <ArrowRight size={15} /></Link></div>
          </div>
                  </section>

        <MarriageBiodataContent />

        <section className="px-5 py-20 sm:px-8 sm:py-24">
          <SectionHeading eyebrow="Questions, answered honestly" title="A few things families usually want to know." body="No inflated claims. If a feature is not available yet, we will say so." />
          <div className="mx-auto mt-10 max-w-3xl divide-y divide-stone-200 rounded-2xl border border-stone-200 bg-white">{faqs.map(([question,answer]) => <details key={question} className="group p-5 sm:p-6"><summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-5 font-semibold text-ink [&::-webkit-details-marker]:hidden">{question}<ChevronDown size={18} className="shrink-0 text-stone-400 transition-transform group-open:rotate-180" /></summary><p className="max-w-2xl pr-8 pt-2 text-sm leading-6 text-stone-600">{answer}</p></details>)}</div>
        </section>

        <section className="px-5 pb-20 sm:px-8 sm:pb-24">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-ink px-6 py-12 text-center text-white sm:px-12 sm:py-16"><div className="absolute -right-10 -top-10 text-gold"><Ornament className="h-48 w-48" /></div><div className="relative"><span className="eyebrow text-gold">Ready when you are</span><h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">Make something your family will be happy to share.</h2><p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-stone-300">Start with the details you already know. You can refine the design, photos and sections before you download.</p><Link href="/create" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5">Create my biodata <ArrowRight size={17} /></Link></div></div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
