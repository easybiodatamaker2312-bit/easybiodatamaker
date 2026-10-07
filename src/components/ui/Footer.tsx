import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-ink text-stone-300 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="block mb-3">
              <div className="font-display font-bold text-white text-xl">Easy<span className="text-gold">Biodata</span>Maker</div>
              <div className="text-[10px] text-gold/70 uppercase tracking-widest">easybiodatamaker.com</div>
            </Link>
            <p className="text-sm text-stone-400 leading-relaxed mb-3">A calm, private marriage biodata maker for Indian families. Create, refine and share without a login.</p>
            <div className="text-xs text-stone-500">support@easybiodatamaker.com</div>
            <div className="text-xs text-stone-500">Made for Indian families</div>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4 text-xs uppercase tracking-wider">Language Biodatas</h3>
            <ul className="space-y-2 text-sm">
              {[
                ['/gujarati-biodata-format','Gujarati Biodata'],
                ['/marathi-biodata-format','Marathi Biodata'],
                ['/hindi-biodata-format','Hindi Biodata'],
                ['/punjabi-biodata-format','Punjabi Biodata'],
                ['/tamil-biodata-format','Tamil Biodata'],
                ['/bengali-biodata-format','Bengali Biodata'],
              ].map(([href,label]) => (
                <li key={href}><Link href={href} className="hover:text-gold transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4 text-xs uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2 text-sm">
              {[
                ['/templates','Templates'],
                ['/how-to-make-biodata-for-marriage','How to Make Biodata'],
                ['/hindu-marriage-biodata-format','Hindu Biodata'],
                ['/muslim-marriage-biodata-format','Muslim Nikah Biodata'],
                ['/free-biodata-format-download','Free Format Download'],
                ['/blog','Blog & Guides'],
                ['/faq','FAQs'],
              ].map(([href,label]) => (
                <li key={href}><Link href={href} className="hover:text-gold transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4 text-xs uppercase tracking-wider">Company</h3>
            <ul className="space-y-2 text-sm">
              {[
                ['/about','About Us'],
                ['/contact','Contact Us'],
                ['/privacy-policy','Privacy Policy'],
                ['/terms-of-service','Terms of Service'],
                ['/disclaimer','Disclaimer'],
                ['/sitemap.xml','Sitemap'],
              ].map(([href,label]) => (
                <li key={href}><Link href={href} className="hover:text-gold transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 mb-5">
          <p className="text-xs text-stone-500 leading-relaxed text-center">
            Popular: Biodata Maker for Marriage · Free Biodata Format Download · Gujarati Lagna Biodata · Marathi Vivah Biodata · Hindi Shaadi Biodata · Punjabi Vivah Biodata · Tamil Thirumanam Biodata · Bengali Bibaho Biodata · Muslim Nikah Biodata · Hindu Marriage Biodata Format · Marriage Biodata PDF Free · Biodata Kaise Banaye
          </p>
        </div>
        <div className="gold-divider mb-5 opacity-30" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-stone-500">
          <p>© EasyBiodataMaker.com · All rights reserved</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-gold">Privacy</Link>
            <Link href="/terms-of-service" className="hover:text-gold">Terms</Link>
            <Link href="/disclaimer" className="hover:text-gold">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
