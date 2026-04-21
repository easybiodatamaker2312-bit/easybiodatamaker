import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { AEOBlock } from '@/components/ui/AEOBlock';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Muslim Marriage Biodata – Free Nikah Biodata Online | EasyBiodataMaker',
  description:
    'Create a Muslim marriage biodata (nikah biodata) online for free. Starts with Bismillah. Covers biradari, sect, education, career. All Muslim communities in India supported. PDF download.',
  keywords: [
    'muslim marriage biodata format',
    'nikah biodata free online',
    'muslim rishta biodata',
    'sunni biodata format india',
    'shia biodata format',
    'muslim biodata with bismillah',
    'biradari biodata muslim',
    'syed sheikh pathan ansari biodata',
    'muslim shaadi biodata kaise banaye',
    'muslim biodata pdf free download',
    'hyderabad muslim biodata',
    'muslim biodata for girl',
    'muslim biodata for boy',
  ],
  alternates: { canonical: 'https://easybiodatamaker.com/muslim-marriage-biodata-format' },
  openGraph: {
    title: 'Muslim Nikah Biodata Free – Online Rishta Profile',
    description: 'Free Muslim marriage biodata starting with Bismillah. Covers biradari, sect, religious practices. All Indian Muslim communities. Instant PDF.',
    url: 'https://easybiodatamaker.com/muslim-marriage-biodata-format',
  },
};

const aeoFaqs = [
  {
    question: 'Muslim nikah biodata mein kya likhte hain?',
    answer: "Nikah biodata mein likhte hain: pura naam, DOB, height, biradari (Syed/Sheikh/Pathan/Ansari/Qureshi etc.), sect (Sunni/Shia), religious practices (namaz, hijab for girls, beard for boys agar mention karna hai), education, job, family details (abbu-ammi ka naam aur kaam, bhai-behen), address, aur partner ki apeksha.",
  },
  {
    question: 'What is biradari in a Muslim biodata and why does it matter?',
    answer: "Biradari is the Muslim sub-community or clan. Common biraderis in India: Syed (descendants of the Prophet), Sheikh, Pathan (Pashtun origin), Ansari (weavers), Qureshi (butchers), Mughal, Memon, Bohra, Khoja. Many traditional Muslim families prefer matches within the same biradari. Some modern families are more open. Mention yours clearly — it is typically the first field checked.",
  },
  {
    question: 'Should I mention sect (Sunni/Shia) in my nikah biodata?',
    answer: "Yes, if it matters to your family. Sunni-Shia compatibility is something many families check, especially in communities where religious practices differ significantly. If your family is flexible about it, you can skip it or write 'Flexible.' But if your family has a preference, be honest upfront rather than creating complications later.",
  },
  {
    question: 'Islamic nikah biodata mein income kaise likhein?',
    answer: "Exact salary avoid karein — ₹8,23,000 per year likhna awkward lagta hai. Ranges use karein: 8–12 LPA, 15–25 LPA, etc. NRI candidates ke liye dono currencies mein likhein — USD 80,000 per year (approx ₹66 lakh) — taaki India mein baithay gharwaley samajh sakein.",
  },
  {
    question: 'Does EasyBiodataMaker have a template that starts with Bismillah?',
    answer: "Yes. The Islamic Green template opens with بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ (Bismillah ir-Rahman ir-Rahim) and uses a deep green colour scheme. Section headings have a ☽ symbol. It is designed specifically for Muslim families and looks appropriate and professional.",
  },
];

const aeoSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: aeoFaqs.map(f => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

export default function MuslimBiodataPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoSchema) }} />

      <main className="flex-1">
        <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-14 px-4 border-b border-green-100">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl mb-3">☪️</div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-maroon-900 mb-5 leading-tight">
              Muslim Marriage Biodata
              <span className="block text-xl mt-2 text-green-700 font-normal">
                Nikah Biodata · Rishta Profile · Free · No Login
              </span>
            </h1>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Our Islamic Green template starts with Bismillah and covers all the fields Muslim
              families ask about — biradari, sect, religious practices. Simple to fill, downloads
              as a clean PDF. No registration.
            </p>
            <Link href="/create" className="btn-primary text-lg px-8 py-4">
              ☪️ Nikah Biodata Banao — Free
            </Link>
            <p className="text-sm text-gray-400 mt-3">
              Preview page par &ldquo;Islamic Green&rdquo; template select karein
            </p>
          </div>
        </section>

        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto space-y-8 text-gray-700 text-sm leading-loose">

            <h2 className="font-display text-2xl font-bold text-maroon-900">
              What Muslim Families Look At First
            </h2>

            <p>
              In most Muslim matrimonial settings, the first thing families check is
              <strong> biradari</strong> — the community or clan. Syed, Sheikh, Pathan, Ansari,
              Qureshi, Mughal, Memon, Bohra — these distinctions matter to many families.
              Write yours clearly in the caste field.
            </p>

            <p>
              Sect comes next for many families. Sunni or Shia, and in some cases the specific
              school of thought (Barelvi, Deobandi, Ahle Hadith). If your family is flexible and
              does not mind marrying outside your specific tradition, you can note that in the
              partner expectations section. But if it matters, be upfront.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-5">
              <h3 className="font-bold text-green-900 mb-2">Religious Practices Section</h3>
              <p>
                Some families want to know about daily religious observance — whether the candidate
                offers namaz regularly, whether a girl wears hijab, whether a boy has a beard. This
                is personal and not everyone includes it, but for families where religious
                compatibility is important, you can add these details in the custom fields section
                of EasyBiodataMaker.
              </p>
            </div>

            <h2 className="font-display text-2xl font-bold text-maroon-900">
              NRI Muslim Biodata — Extra Fields
            </h2>

            <p>
              A significant portion of Indian Muslims are settled in UAE, Saudi Arabia, Kuwait,
              UK, USA, and Canada. For NRI candidates, families on both sides need to know:
            </p>

            <ul className="space-y-2 pl-4 border-l-2 border-green-300">
              <li><strong>Country and emirate/city</strong> — Dubai is different from Sharjah even within UAE</li>
              <li><strong>Visa status</strong> — Employment visa vs. residence permit vs. citizenship changes the picture</li>
              <li><strong>Income in both currencies</strong> — AED 15,000 per month means little to a family in Hyderabad without the INR equivalent</li>
              <li><strong>Return plans</strong> — Permanent abroad, or planning to return to India?</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-maroon-900">
              Communities This Works For
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                'Syed', 'Sheikh', 'Pathan (Pashtun)', 'Ansari', 'Qureshi',
                'Mughal', 'Memon', 'Bohra', 'Khoja', 'Sunni (Barelvi)',
                'Sunni (Deobandi)', 'Shia', 'Ahle Hadith', 'Kashmiri Muslim',
              ].map(c => (
                <span key={c} className="bg-green-50 border border-green-200 text-green-800 text-xs px-3 py-1.5 rounded-full font-medium">
                  {c}
                </span>
              ))}
            </div>

            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mt-4">
              <h3 className="font-bold text-green-900 mb-2">Nikah Biodata Tayar Karein — Free</h3>
              <p className="text-gray-600 text-sm mb-4">No registration. Fill the form, pick Islamic Green template, download PDF.</p>
              <Link href="/create" className="btn-primary text-sm">☪️ Start — Free</Link>
            </div>
          </div>
        </section>

        <AEOBlock faqs={aeoFaqs} title="Muslim Biodata — Sawaal Aur Jawab" ctaHref="/create" ctaText="Nikah Biodata Banao Free" />
      </main>

      <Footer />
    </div>
  );
}
