import { buildMetadata, getSitePage } from '@/lib/seo';
import { EditorialByline } from '@/components/seo/EditorialByline';
import { AEOBlock } from '@/components/ui/AEOBlock';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';
import { AuthorBox } from '@/components/seo/AuthorBox';

const page = getSitePage('/blog/second-marriage-biodata-guide');

export const metadata = buildMetadata({ title: page.title, description: page.description, path: page.path, type: page.type });


const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Second Marriage / Remarriage Biodata Guide India | EasyBiodataMaker`,
    description: `Creating a biodata for second marriage or remarriage requires sensitivity. How to mention divorce, widowhood, children honestly yet compellingly. Complete guide for India.`,
    datePublished: '2024-12-28',
    dateModified: '2024-12-28',
    author: { '@type': 'Person', name: 'Karan Shah', url: 'https://easybiodatamaker.com/about' },
    publisher: { '@type': 'Organization', name: 'EasyBiodataMaker', logo: { '@type': 'ImageObject', url: 'https://easybiodatamaker.com/icon-192.png' } },
    mainEntityOfPage: `https://easybiodatamaker.com/blog/second-marriage-biodata-guide`,
    image: 'https://easybiodatamaker.com/og-image.png',
  };

const aeoFaqs = [
  { question: 'How to mention divorce in marriage biodata?', answer: 'Write \"Divorced\" clearly in the personal details section. Many modern families are completely open to divorced candidates. Hiding it is far worse than disclosing — it will be discovered and destroys trust.' },
  { question: 'Should children be mentioned in second marriage biodata?', answer: 'Yes, always. Mention the number of children and their ages. Example: \"1 daughter (age 7, living with maternal parents).\" Hiding children is never advisable and will cause serious problems when discovered.' },
];

const aeoSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: aeoFaqs.map((f: {question: string; answer: string}) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};
export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4"><EditorialByline lastUpdated="2024-12-28" /></div>
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-12 px-4 border-b border-amber-100">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-4 text-xs text-gray-400">
              <Link href="/blog" className="hover:text-saffron-600">Blog</Link>
              <span>/</span><span>Second Marriage Biodata Guide</span>
            </div>
            <h1 className="font-display text-3xl font-bold text-maroon-900 mb-4 leading-tight">
               Second Marriage Biodata Guide
            </h1>
            <p className="text-gray-600 leading-relaxed text-sm">Honest, Sensitive, and Compelling</p>
          </div>
        </section>
        <div className="max-w-3xl mx-auto px-4"><EditorialByline lastUpdated="2024-12-28" /></div>

        <AuthorBox reviewedOn="2026-10-11" />
        <article className="py-12 px-4">
          <div className="max-w-3xl mx-auto space-y-5">
            <div className="card p-6 text-sm text-gray-600 leading-relaxed whitespace-pre-line">
              A biodata for a second marriage requires extra honesty and sensitivity. Here is how to handle each situation:

If Divorced:
Write "Divorced" clearly in the personal details section — do not try to hide it. Families will discover it anyway. Many families are now completely open to divorced candidates.

If Widowed:
Write "Widowed" with the year if appropriate. This is viewed very sympathetically by most families.

If You Have Children:
Mention the number of children clearly. Example: "1 child (son, 8 years, living with maternal grandparents)". Hiding this is never advisable.

Partner Expectations for Remarriage:
"Looking for an understanding, mature partner open to a second chance at happiness. Divorced/widowed/single candidates all welcome. The most important quality is genuine kindness and emotional maturity."

Templates to Use:
The Classic Saffron or Emerald Modern templates work best — they look professional and dignified without being overly traditional or festive.
            </div>
            
            <section className="mt-9 rounded-2xl border border-amber-100 bg-white p-6">
              <h2 className="font-display text-xl font-bold text-maroon-900">Choose honest wording without sharing more than necessary</h2>
              <p className="mt-3 text-sm leading-7 text-gray-600">A remarriage biodata should help a prospective partner understand the broad circumstances that are relevant to a shared future. It does not need to tell the entire history of a previous relationship. A concise statement such as “Divorced; decree finalised in 2024” may be appropriate if accurate and if the candidate chooses to disclose the year. Another person may prefer to say “Previously married; details can be discussed respectfully at the appropriate stage.” The right level of detail depends on safety, legal status and personal comfort.</p>
              <p className="mt-3 text-sm leading-7 text-gray-600">If there are children, their existence and the practical responsibilities that affect a future household should not be concealed from a serious prospective partner. At the same time, a child’s full name, school, schedule, photographs and private circumstances should not be placed in a widely forwarded biodata. State the broad arrangement, then discuss sensitive details privately when trust and relevance justify it.</p>
              <h3 className="mt-6 font-semibold text-maroon-900">Sample wording by situation</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600">
                <li><strong>Divorced:</strong> “Previously married; divorce legally finalised. I value honesty and would prefer a respectful conversation about relevant details.”</li>
                <li><strong>Widowed:</strong> “Widowed. I am ready to consider a new partnership at a pace that is comfortable for everyone involved.”</li>
                <li><strong>Children:</strong> “I am a parent. The broad care arrangement can be discussed in a private conversation; my child’s personal details are kept private.”</li>
                <li><strong>Still resolving a legal matter:</strong> Do not imply the divorce is final if it is not. Get appropriate legal advice before making statements about legal status.</li>
              </ul>
              <p className="mt-3 text-sm leading-7 text-gray-600">It can also help to decide what belongs in the first document and what belongs in a conversation. The biodata can state the current marital status and any broad responsibility that directly affects future plans. Questions about the timeline of a previous relationship, legal paperwork or family arrangements can be handled privately, without an audience of relatives forwarding screenshots. The aim is not to conceal relevant facts; it is to share them in a safer, more considered way. If a candidate feels pressured to disclose intimate or identifying details before trust exists, it is reasonable to set a boundary and suggest a direct conversation instead.</p>
              <h3 className="mt-6 font-semibold text-maroon-900">What not to write</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">Avoid blaming an ex-partner, describing intimate details, publishing court papers, or presenting assumptions about why a relationship ended as established fact. Do not label a person as “damaged,” “complicated” or “adjustable.” Those phrases are disrespectful and tell readers little about compatibility. Also avoid hiding material facts that would affect a future partner’s decisions.</p>
              <h3 className="mt-6 font-semibold text-maroon-900">FAQ</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600"><strong>Must the full previous-marriage story be in the biodata?</strong> No. Share a truthful summary of relevant facts; fuller context can be discussed privately at the right time.</p>
              <p className="mt-3 text-sm leading-7 text-gray-600"><strong>Should a child’s details be included?</strong> Mention parenthood and relevant broad arrangements honestly, but protect the child’s identifying and routine information.</p>
            </section>

            <div className="bg-gradient-to-r from-maroon-800 to-maroon-950 rounded-2xl p-6 text-white text-center">
              <h2 className="font-display text-xl font-bold mb-3">Create Your Biodata Free</h2>
              <p className="text-amber-200/80 text-sm mb-4">premium templates · 9 Indian languages · Instant PDF</p>
              <Link href="/create" className="btn-primary text-sm">Create Free Biodata →</Link>
            </div>
          </div>
        </article>
      </main>
      <AEOBlock faqs={aeoFaqs} title="People Also Ask" ctaHref="/create" ctaText="Create Your Free Biodata" />
      <Footer />
    </div>
  );
}
