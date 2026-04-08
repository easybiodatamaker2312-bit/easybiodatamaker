import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-amber-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-saffron-500 to-maroon-700 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
            <span className="text-white font-bold text-sm font-serif">EB</span>
          </div>
          <div>
            <div className="font-display font-bold text-maroon-800 text-lg leading-tight">
              Easy<span className="text-saffron-500">Biodata</span>Maker
            </div>
            <div className="text-[10px] text-gray-400 uppercase tracking-widest leading-none">
              Free · Instant · No Login
            </div>
          </div>
        </Link>

        {/* Nav */}
        <nav className="hidden sm:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-gray-600 hover:text-maroon-700 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/create"
            className="text-sm font-medium text-gray-600 hover:text-maroon-700 transition-colors"
          >
            Create Biodata
          </Link>
          <Link href="/create" className="btn-primary text-sm py-2 px-4">
            Get Started Free
          </Link>
        </nav>

        {/* Mobile CTA */}
        <Link href="/create" className="sm:hidden btn-primary text-sm py-2 px-3">
          Create Free
        </Link>
      </div>
    </header>
  );
}
