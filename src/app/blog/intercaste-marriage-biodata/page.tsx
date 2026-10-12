import { buildMetadata, getSitePage } from '@/lib/seo';
import { EditorialByline } from '@/components/seo/EditorialByline';
import { AEOBlock } from '@/components/ui/AEOBlock';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';
import { AuthorBox } from '@/components/seo/AuthorBox';

const page = getSitePage('/blog/intercaste-marriage-biodata');

export const metadata = buildMetadata({ title: page.title, description: page.description, path: page.path, type: page.type });


const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Inter-Caste Marriage Biodata – How to Write Caste No Bar`,
    description: `If you are open to inter-caste or inter-religion marriage, your biodata must say so clearly. Here is how to write the caste no bar section and what to expect.`,
    datePublished: '2024-12-28',
    dateModified: '2024-12-28',
    author: { '@type': 'Person', name: 'Karan Shah', url: 'https://easybiodatamaker.com/about' },
    publisher: { '@type': 'Organization', name: 'EasyBiodataMaker', logo: { '@type': 'ImageObject', url: 'https://easybiodatamaker.com/icon-192.png' } },
    mainEntityOfPage: `https://easybiodatamaker.com/blog/intercaste-marriage-biodata`,
    image: 'https://easybiodatamaker.com/og-image.png',
  };

const aeoFaqs = [
  { question: 'How to write inter-caste in marriage biodata?', answer: 'Write \"Caste no bar\" clearly in the partner expectations section. For more detail: \"Open to all Hindu communities, caste no bar\" or \"Open to all communities and religions.\" This signals openness and dramatically increases the number of interested responses.' },
  { question: 'Does writing caste no bar reduce responses?', answer: 'No — writing \"caste no bar\" typically increases responses significantly. It opens your profile to thousands of additional families and signals progressive, open-minded thinking that many educated families appreciate.' },
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
              <span>/</span><span>Inter-Caste Marriage Biodata – Writing Caste No Bar</span>
            </div>
            <h1 className="font-display text-3xl font-bold text-maroon-900 mb-4 leading-tight">
               Inter-Caste Marriage Biodata – Writing Caste No Bar
            </h1>
            <p className="text-gray-600 leading-relaxed text-sm">How to Communicate Openness Respectfully</p>
          </div>
        </section>
        <div className="max-w-3xl mx-auto px-4"><EditorialByline lastUpdated="2024-12-28" /></div>

        <AuthorBox reviewedOn="2026-10-11" />
        <article className="py-12 px-4">
          <div className="max-w-3xl mx-auto space-y-5">
            <div className="card p-6 text-sm text-gray-600 leading-relaxed whitespace-pre-line">
              Writing "Caste No Bar" in your biodata is one of the most impactful decisions you can make if you genuinely mean it. It opens your prospects to thousands of more families.

How to phrase it:
• Simple: "Caste no bar" (at the end of partner expectations)
• Full: "Open to all Hindu communities, caste no bar"
• Broad: "Open to all communities and religions"
• Specific: "Prefer same religion but caste no bar"

What NOT to do:
• Do not write "Caste no bar" but then reject non-same-caste proposals — it wastes everyone\'s time
• Do not add "but prefer own caste" — this contradicts the message
• Do not list specific castes you will not accept

If your family is traditional but you personally are open, have a frank conversation with them first before putting it in the biodata.
            </div>
            
            <section className="mt-9 rounded-2xl border border-amber-100 bg-white p-6">
              <h2 className="font-display text-xl font-bold text-maroon-900">A practical way to discuss openness with family</h2>
              <p className="mt-3 text-sm leading-7 text-gray-600">Before putting a phrase such as “caste no bar” in a shared profile, distinguish your own preference from what your family is ready to support. A biodata is often forwarded by relatives, so a short phrase can trigger conversations you should be prepared to have. Talk through whether the statement means openness within the same religion, across communities, or across religions. These are different preferences and should not be blurred into one line.</p>
              <p className="mt-3 text-sm leading-7 text-gray-600">For example, “Open to meeting people from different caste backgrounds; shared values and mutual respect matter most” is clearer than a slogan if that accurately reflects the candidate’s view. If family participation is important, say “Our family is open to discussing matches across caste backgrounds” only when that is genuinely agreed. Avoid presenting one person’s preference as a family-wide position without consent.</p>
              <h3 className="mt-6 font-semibold text-maroon-900">What to confirm before sharing</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600">
                <li>Does the wording reflect the candidate’s own preference?</li>
                <li>Does “open” mean caste, community, religion, language, or a combination?</li>
                <li>Are there practical preferences about location, language, children or family involvement that should be discussed separately?</li>
                <li>Have relatives been asked before their views are represented in the biodata?</li>
              </ul>
              <h3 className="mt-6 font-semibold text-maroon-900">What not to write</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">Avoid insulting a community, describing a group as inferior, or saying “caste no bar” while privately treating it as an absolute filter. Do not use a biodata to debate social issues or disclose another person’s family conflict. Keep the wording about the candidate’s genuine openness and let deeper conversations happen respectfully.</p>
              <h3 className="mt-6 font-semibold text-maroon-900">FAQ</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600"><strong>Should I write “caste no bar” if my parents disagree?</strong> Do not imply family agreement that does not exist. Discuss the disagreement first, or state your own position clearly if you are the person managing the profile.</p>
              <p className="mt-3 text-sm leading-7 text-gray-600"><strong>Should I include religion separately?</strong> If it matters to your matching preferences, describe it accurately and respectfully rather than expecting readers to infer it from “caste no bar.”</p>
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
