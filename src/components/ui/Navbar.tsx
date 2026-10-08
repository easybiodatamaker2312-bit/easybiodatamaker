import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-ivory/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex min-h-11 items-center" aria-label="EasyBiodataMaker home">
          <Image
            src="/brand-logo.png"
            alt="EasyBiodataMaker"
            width={261}
            height={158}
            priority
            className="h-[58px] w-auto object-contain transition-transform duration-200 group-hover:scale-[1.015] sm:h-[64px]"
          />
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
