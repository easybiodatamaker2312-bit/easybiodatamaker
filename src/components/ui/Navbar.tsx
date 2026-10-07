import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-ivory/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex min-h-11 items-center gap-3" aria-label="EasyBiodataMaker home">
          <span className="grid size-9 place-items-center rounded-xl border border-gold/40 bg-white text-oxblood shadow-sm transition-transform duration-200 group-hover:-rotate-2">
            <Sparkles size={16} aria-hidden="true" />
          </span>
          <span>
            <span className="block font-display text-[19px] font-semibold leading-none text-ink">Easy<span className="text-oxblood">Biodata</span></span>
            <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[.18em] text-stone-500">Made for families</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-2 sm:flex" aria-label="Primary navigation">
          <Link href="/templates" className="btn-ghost">Templates</Link>
          <Link href="/faq" className="btn-ghost">FAQ</Link>
          <Link href="/create" className="btn-primary ml-1">Create biodata <ArrowRight size={16} aria-hidden="true" /></Link>
        </nav>

        <Link href="/create" className="btn-primary px-4 sm:hidden">Create <ArrowRight size={15} aria-hidden="true" /></Link>
      </div>
    </header>
  );
}
