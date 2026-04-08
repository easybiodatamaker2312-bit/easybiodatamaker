import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';
import { Download, FileText, Star, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Biodata Format Download – Marriage Biodata PDF | EasyBiodataMaker',
  description:
    'Download free marriage biodata format in PDF. No Word doc needed – create a professional marriage biodata online and download instantly. Best free biodata format for all communities.',
  alternates: { canonical: 'https://easybiodatamaker.com/free-biodata-format-download' },
  keywords: [
    'free biodata format download',
    'marriage biodata format PDF download free',
    'biodata format for marriage in word free download',
    'shaadi biodata format download',
    'hindu marriage biodata format free download',
    'simple biodata format for marriage',
    'marriage biodata sample download',
    'biodata format in hindi download',
    'free biodata template for marriage india',
    'one page marriage biodata format download',
    'biodata format for marriage for girl pdf',
    'biodata format for marriage for boy pdf',
  ],
  openGraph: {
    title: 'Free Marriage Biodata Format – Download PDF Instantly',
    description: 'Create and download your free marriage biodata in professional PDF format.',
    url: 'https://easybiodatamaker.com/free-biodata-format-download',
  },
};

const formats = [
  {
    title: 'Classic Indian Biodata',
    desc: 'Traditional format with all essential fields. Perfect for Hindu, Sikh, Jain communities.',
    features: ['Auspicious heading', 'Complete personal + family details', 'Education & career section', 'Partner expectations'],
    badge: 'Most Popular',
    free: true,
  },
  {
    title: 'Modern Minimal Format',
    desc: 'Clean, contemporary design preferred by urban families and NRIs.',
    features: ['Clean typography', 'Photo placeholder', 'Concise layout', 'PDF optimized'],
    badge: 'Coming Soon',
    free: false,
  },
  {
    title: 'Detailed Community Format',
    desc: 'Extended 2-page format for South Indian and traditional communities.',
    features: ['Extended family tree', 'Astrological details', 'Property details', 'Reference contacts'],
    badge: 'Coming Soon',
    free: false,
  },
];

export default function FreeBiodataFormatPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">

        {/* Hero */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-14 px-4 border-b border-amber-100">
          <div className="max-w-4xl mx-auto text-center">
            <span className="section-tag">Free Download</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-maroon-900 mt-3 mb-5 leading-tight">
              Free Marriage Biodata Format Download
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Stop searching for biodata format in Word or PDF. Create a professional Indian
              marriage biodata online and download it free — better than any template!
            </p>
            <Link href="/create" className="btn-primary text-lg px-8 py-4">
              <Download size={20} /> Create & Download Free Biodata
            </Link>
          </div>
        </section>

        {/* Why online is better */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-maroon-900 text-center mb-10">
              Why Our Online Biodata Maker is Better Than a Word Template
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'No Formatting Headaches', desc: 'Word templates break their formatting on different computers. Our online tool always generates a perfectly formatted PDF.' },
                { title: 'Mobile Friendly', desc: 'Create your biodata directly on your phone. No need for a computer or printer to fill a Word document.' },
                { title: 'Always Up to Date', desc: 'Our biodata format is regularly updated to match what modern families and matrimonial sites expect.' },
                { title: 'Instant PDF Download', desc: 'Get your biodata as a high-quality PDF in seconds, ready to share on WhatsApp or email.' },
                { title: 'Privacy Protected', desc: 'Unlike downloading a template to your device, our data stays in your browser only.' },
                { title: 'Professional Design', desc: 'Beautiful typography and traditional Indian aesthetic — better than any DIY Word document.' },
              ].map(({ title, desc }) => (
                <div key={title} className="flex items-start gap-4 card p-5">
                  <CheckCircle size={20} className="text-saffron-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-maroon-800 mb-1 text-sm">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Templates */}
        <section className="py-14 px-4 bg-amber-50/40">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl font-bold text-maroon-900">
                Available Biodata Formats
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {formats.map(({ title, desc, features, badge, free }) => (
                <div key={title} className={`card p-6 relative ${!free ? 'opacity-70' : ''}`}>
                  <div className={`absolute top-4 right-4 text-xs font-bold px-2 py-1 rounded-full ${free ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                    {badge}
                  </div>
                  <div className="w-10 h-10 bg-saffron-100 rounded-xl flex items-center justify-center mb-4">
                    <FileText className="text-saffron-600" size={18} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-maroon-800 mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{desc}</p>
                  <ul className="space-y-1.5 mb-5">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
                        <span className="text-saffron-500">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  {free ? (
                    <Link href="/create" className="btn-primary w-full justify-center text-sm py-2">
                      Use This Format Free
                    </Link>
                  ) : (
                    <button disabled className="w-full btn-secondary justify-center text-sm py-2 opacity-50 cursor-not-allowed">
                      Coming Soon
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-maroon-900 mb-6">
              Everything You Need to Know About Free Biodata Formats
            </h2>
            <div className="space-y-5 text-gray-600 text-sm leading-relaxed">
              <div>
                <h3 className="font-bold text-maroon-800 mb-2 text-base">
                  What is the best free biodata format for marriage?
                </h3>
                <p>
                  The best marriage biodata format is one that is clean, complete, and follows the
                  traditional Indian layout. It should fit on a single A4 page and include all
                  essential sections: personal details, horoscope info, family background, education,
                  career, and contact information. EasyBiodataMaker provides exactly this format,
                  completely free.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-maroon-800 mb-2 text-base">
                  Can I get a marriage biodata format in Word for free?
                </h3>
                <p>
                  While Word templates exist, they have many drawbacks — formatting breaks on
                  different devices, they require Microsoft Word, and the output quality varies.
                  Instead, use EasyBiodataMaker to create a professionally designed biodata and
                  download it as a PDF instantly, for free. Our format looks better than any Word
                  template and works on all devices.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-maroon-800 mb-2 text-base">
                  Is there a biodata format in Hindi available?
                </h3>
                <p>
                  Currently EasyBiodataMaker generates biodatas in English format, which is the most
                  widely accepted format for matrimonial purposes across India, even in Hindi-speaking
                  states. We are working on a Hindi biodata format which will be available soon.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-maroon-800 mb-2 text-base">
                  What is the correct biodata format for marriage for girls vs boys?
                </h3>
                <p>
                  The standard biodata format is the same for both boys and girls in most communities.
                  The key sections (personal, family, education, career, contact) remain identical.
                  The information filled in will naturally differ — for example, girls' biodatas may
                  mention homemaking skills, while boys' biodatas typically emphasize career stability
                  and income.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 px-4 bg-gradient-to-r from-maroon-800 to-maroon-950 text-white text-center">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-gold-400 text-gold-400" />)}
            <span className="ml-2 text-amber-200 text-sm">Rated 4.9/5 by 10,000+ users</span>
          </div>
          <h2 className="font-display text-3xl font-bold mb-4">Download Your Free Biodata Now</h2>
          <p className="text-amber-200/80 mb-6">No registration · No cost · Instant PDF</p>
          <Link href="/create" className="btn-primary text-lg px-10 py-4">
            <Download size={20} /> Create & Download Free →
          </Link>
        </section>

      </main>
      <Footer />
    </div>
  );
}
