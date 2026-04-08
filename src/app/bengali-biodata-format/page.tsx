import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bengali Marriage Biodata | বাংলা বিবাহ বায়োডেটা Free | EasyBiodataMaker',
  description:
    'Create Bengali marriage biodata (bibaho biodata) online for free. Bengali + English format. Brahmin, Kayastha, Baidya, Tili, Namasudra communities. West Bengal & Bangladesh Hindus supported.',
  alternates: { canonical: 'https://easybiodatamaker.com/bengali-biodata-format' },
  keywords: [
    'bengali marriage biodata format',
    'bangla bibaho biodata',
    'bengali biodata maker free',
    'west bengal marriage biodata',
    'bengali brahmin biodata format',
    'kulin brahmin biodata bengali',
    'kayastha biodata bengali format',
    'baidya biodata format',
    'bengali biodata in bengali language',
    'kolkata marriage biodata format',
    'bengali biodata pdf download free',
    'bengali biodata banano',
  ],
};

export default function BengaliBiodataPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-14 px-4 border-b" style={{ background: 'linear-gradient(135deg, #fdf2f8, #fce7f3)' }}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl mb-3">🪷</div>
            <span className="section-tag">বাংলা বায়োডেটা</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-maroon-900 mt-3 mb-5 leading-tight">
              Bengali Marriage Biodata Format
              <span className="block text-2xl mt-2 text-pink-700 font-normal">বিবাহ বায়োডেটা | Bibaho Biodata</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Create a Bengali marriage biodata with gotra, kulin status, and all traditional Bengali
              fields. For West Bengal Brahmin, Kayastha, Baidya, Namasudra communities. Free PDF.
            </p>
            <Link href="/create" className="btn-primary text-lg px-8 py-4">
              🪷 বায়োডেটা তৈরি করুন (Free)
            </Link>
          </div>
        </section>

        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto space-y-5 text-sm text-gray-600 leading-relaxed">
            <h2 className="font-display text-2xl font-bold text-maroon-900">Bengali Marriage Biodata – Key Fields</h2>
            {[
              { h: 'কুলীন / Kulin Status', p: 'Kulin status is unique to Bengali Brahmin matrimonial culture. Kulin Brahmin families have historically held higher social rank. Must be specified for Brahmin biodatas.' },
              { h: 'গোত্র / Gotra', p: 'Essential for all Hindu Bengali communities. Common Bengali Brahmin gotras: Sandilya, Kashyap, Bharadwaj, Shaktrey, Vatsa.' },
              { h: 'কুলদেবতা / Kul Devata', p: 'Family deity for the household. Common among Kayastha and Brahmin families: Durga, Kali, Lakshmi, Shiva. Durga Puja importance should be mentioned.' },
              { h: 'পাড়া / Para (Locality)', p: 'In Kolkata culture, the "para" (neighbourhood) carries social significance. Families from North Kolkata vs South Kolkata may have different social circles.' },
              { h: 'ঠাকুর পরিবার / Zamindar Lineage', p: 'Some families trace lineage to zamindars or notable families. This is rarely mentioned explicitly but may be discussed in family introductions.' },
            ].map(({ h, p }) => (
              <div key={h} className="card p-5">
                <h3 className="font-bold text-pink-900 mb-2">{h}</h3>
                <p>{p}</p>
              </div>
            ))}
            <div className="bg-pink-50 border border-pink-200 rounded-2xl p-6">
              <h3 className="font-bold text-pink-900 mb-2">বিবাহ বায়োডেটা তৈরি করুন – Free!</h3>
              <p className="text-gray-600 text-sm mb-3">Use Classic Indian template — works beautifully for Bengali biodatas.</p>
              <Link href="/create" className="btn-primary text-sm">🪷 Create Bengali Biodata →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
