import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Muslim Marriage Biodata Format – Free Nikah Biodata PDF | EasyBiodataMaker',
  description:
    'Create a Muslim marriage biodata (nikah biodata) online for free. Includes all essential fields for Muslim matrimonial – sect, family background, Islamic values. Download free PDF.',
  alternates: { canonical: 'https://easybiodatamaker.com/muslim-marriage-biodata-format' },
  keywords: [
    'muslim marriage biodata format',
    'nikah biodata format',
    'muslim shaadi biodata',
    'islamic marriage biodata',
    'muslim matrimonial biodata format india',
    'sunni biodata format marriage',
    'shia biodata format marriage',
    'muslim biodata for marriage free download',
    'muslim biodata format in english',
    'muslim girl biodata for marriage',
    'muslim boy biodata for marriage',
    'nikah biodata kaise banaye',
  ],
  openGraph: {
    title: 'Muslim Marriage Biodata (Nikah Biodata) – Free PDF',
    description: 'Create a complete Muslim marriage biodata online for free. Instant PDF download.',
    url: 'https://easybiodatamaker.com/muslim-marriage-biodata-format',
  },
};

const muslimFields = [
  { field: 'Sect / Maslak', desc: 'Sunni, Shia, Deobandi, Barelvi, Ahmadiyya, etc. Helps families find religiously compatible matches.' },
  { field: 'Caste / Biradari', desc: 'Syed, Sheikh, Pathan/Pashto, Ansari, Qureshi, Mughal, etc. Biradari compatibility is important in many Muslim communities.' },
  { field: 'Religious Practices', desc: 'Namaz-reading frequency, Quran recitation, hijab (for girls), beard (for boys) — for religiously observant families.' },
  { field: 'Auspicious Opening', desc: 'Begin with "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ" (Bismillah) to set an Islamic tone.' },
  { field: 'Father\'s Full Name with Title', desc: 'Include "Janab" (Mr.) prefix. e.g., Janab Mohammed Salim Khan.' },
  { field: 'Mahr Expectations', desc: 'Some biodatas mention expected Mahr amount. This is optional but valued in traditional families.' },
];

export default function MuslimBiodataPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">

        <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-14 px-4 border-b border-amber-100">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-3xl mb-3">☪️</div>
            <span className="section-tag">Muslim Biodata Format</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-maroon-900 mt-3 mb-5 leading-tight">
              Muslim Marriage Biodata Format
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Create a complete Muslim marriage biodata (nikah biodata) online — with all Islamic
              and community-specific fields. Free PDF download, no login required.
            </p>
            <Link href="/create" className="btn-primary text-lg px-8 py-4">
              Create Nikah Biodata Free <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        <section className="py-14 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-maroon-900 mb-8">
              Muslim-Specific Fields in a Nikah Biodata
            </h2>
            <div className="space-y-4">
              {muslimFields.map(({ field, desc }) => (
                <div key={field} className="card p-5 flex items-start gap-4">
                  <CheckCircle size={20} className="text-saffron-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-maroon-800 mb-1">{field}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 px-4 bg-amber-50/40">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-display text-2xl font-bold text-maroon-900">
              How to Write a Muslim Marriage Biodata
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              A Muslim marriage biodata (also called <strong>nikah biodata</strong> or{' '}
              <strong>rishta biodata</strong>) follows the same basic format as other Indian biodatas
              but has some important additions relevant to Muslim families.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Start with "Bismillah" at the top. Then include the candidate's full name, date of
              birth, height, complexion, sect (Sunni/Shia/etc.), biradari/caste, education, career,
              family details, and contact information. Many Muslim biodatas also include whether the
              candidate is practicing (namaz-reading, hijab, etc.).
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              EasyBiodataMaker's standard form covers all of these fields. Under "Religion," select
              "Muslim." Use the Caste field to enter your biradari (e.g., Syed, Sheikh, Pathan, Ansari,
              Qureshi, Mughal, Ansari, Memon). The Sub-Caste field can be used for sect (Sunni Barelvi,
              Sunni Deobandi, etc.).
            </p>
            <div className="bg-saffron-50 border border-saffron-200 rounded-2xl p-6">
              <h3 className="font-bold text-maroon-800 mb-2">
                Create Your Muslim Marriage Biodata Free
              </h3>
              <Link href="/create" className="btn-primary text-sm">Start Now →</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
