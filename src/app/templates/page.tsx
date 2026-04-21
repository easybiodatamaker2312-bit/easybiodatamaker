import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { AEOBlock } from '@/components/ui/AEOBlock';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '10 Free Marriage Biodata Templates – All Communities | EasyBiodataMaker',
  description: 'Browse all 10 free marriage biodata templates. Classic Saffron, Royal Navy Gold, Rose Bloom, Emerald Modern, Gujarati Navratri, Marathi Wari, Hindi Shaadi, Purple Temple, Islamic Green, Punjabi Royal.',
  keywords: ['free marriage biodata templates','best marriage biodata template india','biodata template for marriage all communities','rose bloom biodata template','classic saffron template','royal navy gold biodata','gujarati navratri template','marathi wari biodata','hindi shaadi template','purple temple south indian biodata'],
  alternates: { canonical: 'https://easybiodatamaker.com/templates' },
  openGraph: { title: '10 Free Marriage Biodata Templates — All Communities', description: 'All 10 free templates with honest descriptions. Classic, Royal, Rose, Modern, Gujarati, Marathi, Hindi, South Indian, Muslim, Punjabi.', url: 'https://easybiodatamaker.com/templates' },
};

const aeoFaqs = [
  { question: 'Which is the most popular marriage biodata template on EasyBiodataMaker?', answer: "Classic Saffron is the most used overall — it is a traditional saffron and maroon design that works for almost every Hindu community. Rose Bloom is the most popular specifically for girls' biodatas. For NRI candidates and senior professionals, Royal Navy Gold is preferred. Language-specific templates (Gujarati Navratri, Marathi Wari, Hindi Shaadi) are popular within their communities." },
  { question: 'Can I switch templates after filling the form?', answer: "Yes, and this is one of the most useful features. On the preview page, you can switch between all 10 templates instantly without re-entering any information. Your data is saved in your browser for the session. This means you can preview how your biodata looks in Classic Saffron, then switch to Rose Bloom, then to Emerald Modern — until you find the one that looks right for your family." },
  { question: 'Which template should I use for a girl seeking a match in a traditional family?', answer: "Rose Bloom for most communities — it is soft pink with an elegant oval photo frame and looks feminine without being over-the-top. Classic Saffron if the family receiving the biodata is very traditional and might find the pink design too modern. For Gujarati girls: Gujarati Navratri is often the right choice for families that want to signal community pride. For South Indian girls: Purple Temple." },
  { question: 'Which biodata template works best for NRI candidates?', answer: "Royal Navy Gold — dark navy with gold accents has a premium look that works well internationally and signals seriousness. Emerald Modern (clean white with green header) is the second choice for NRI candidates. Both work well in digital format on email or PDF. Avoid overly traditional festive templates if the biodata is going to families abroad who may find the design dated." },
  { question: 'Are all 10 templates really free with no hidden charges?', answer: "Yes. All 10 templates are available from the start at no cost. You do not need to pay for premium templates. The only thing on the PDF is a small EasyBiodataMaker.com credit at the bottom — the templates themselves are completely free." },
];

const aeoSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: aeoFaqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) };

const templates = [
  { emoji: '🕉️', name: 'Classic Saffron', id: 'classic', community: 'All Hindu communities', colors: 'Saffron & deep maroon', style: 'Traditional A4 layout with Sanskrit invocation. Double gold divider lines, elegant serif font. The most universally accepted template.', bestFor: 'Any Hindu community, conservative families, parents who value tradition' },
  { emoji: '👑', name: 'Royal Navy Gold', id: 'royal', community: 'All communities, NRI preferred', colors: 'Dark navy sidebar + gold', style: 'Two-column layout with a dark navy sidebar and white content area. The sidebar shows personal details; main area has family and career. Looks prestigious without being flashy.', bestFor: 'Senior professionals, NRI candidates, families wanting a premium look' },
  { emoji: '🌸', name: 'Rose Bloom', id: 'rose', community: 'All communities — girls preferred', colors: 'Soft pink & rose', style: 'Oval photo frame at top-left, pink floral accents on section dividers. Elegant and feminine without being childish. Keeps all the standard fields but in a warmer palette.', bestFor: "Girls' biodatas, families who appreciate a modern-feminine aesthetic" },
  { emoji: '✦', name: 'Emerald Modern', id: 'emerald', community: 'Urban & NRI', colors: 'Deep emerald green header', style: 'Full-width dark emerald header with name and occupation prominently placed. Icon-led sections (👤🎓👨‍👩‍👧📞). Clean and professional without any traditional Indian design elements.', bestFor: 'IT professionals, doctors in corporate hospitals, families who prefer a modern look' },
  { emoji: '🪔', name: 'Gujarati Navratri', id: 'gujarati', community: 'Gujarati families', colors: 'Red, green & gold stripes', style: 'Repeating red-green-gold stripe header and footer — Navratri festival colours. Section headings in Gujarati script with English fields. Has a distinctly festive Gujarati feel.', bestFor: 'All Gujarati communities — Patel, Jain, Vaniya, Brahmin' },
  { emoji: '🌼', name: 'Marathi Wari', id: 'marathi', community: 'Marathi families', colors: 'Orange & green Ganpati', style: 'Opens with गणपती बाप्पा मोरया. Orange gradient header, Marathi script section headings, traditional double-line border. Respectful and community-appropriate.', bestFor: 'Maharashtra families — Brahmin, Maratha, CKP, Mali, all communities' },
  { emoji: '📜', name: 'Hindi Shaadi', id: 'hindi', community: 'Hindi-speaking families', colors: 'Deep maroon & gold', style: 'Classic North Indian double border design. Opens with ॐ श्री गणेशाय नमः. Section headings in Devanagari. Bullet points with ● marker before each section. Very traditional appearance.', bestFor: 'UP, Bihar, Rajasthan, MP, Delhi, Uttarakhand families' },
  { emoji: '🌺', name: 'Purple Temple', id: 'south', community: 'South Indian families', colors: 'Royal purple gradient', style: 'Deep purple-to-violet gradient header with white text. A gold horizontal divider mid-header. Section headers use a small purple dot. Elegant and South Indian in feel without being over-designed.', bestFor: 'Tamil, Telugu, Kannada, and Malayalam-speaking families' },
  { emoji: '☪️', name: 'Islamic Green', id: 'islamic', community: 'Muslim families', colors: 'Forest green & gold', style: 'Opens with بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ (Bismillah). Deep green colour scheme, ☽ symbol on section headers. Designed specifically for Muslim matrimonial biodatas.', bestFor: 'All Muslim communities — Sunni, Shia, Bohra, Memon, all biraderis' },
  { emoji: '🌾', name: 'Punjabi Royal', id: 'punjabi', community: 'Punjabi & Sikh families', colors: 'Royal blue & white', style: 'Opens with ੴ ਵਾਹਿਗੁਰੂ ਜੀ ਕਾ ਖਾਲਸਾ in Gurmukhi. Royal blue header with Punjabi script section headings. Clean and respectful.', bestFor: 'Sikh families (Jat, Arora, Khatri, Ramgarhia), Hindu Punjabi families' },
];

export default function TemplatesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoSchema) }} />
      <main className="flex-1">
        <section className="py-14 px-4 border-b bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-maroon-900 mb-4">
              All 10 Free Marriage Biodata Templates
            </h1>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Each template is genuinely different — different design, different colours, different
              community feel. Hover over any to see who it is best for. All free, no login.
            </p>
            <Link href="/create" className="btn-primary text-lg px-8 py-4">Create Your Biodata Free →</Link>
          </div>
        </section>

        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto space-y-6">
            {templates.map(({ emoji, name, community, colors, style, bestFor }) => (
              <div key={name} className="card p-6 flex gap-5 hover:shadow-lg transition-shadow">
                <div className="text-4xl flex-shrink-0">{emoji}</div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h2 className="font-display text-xl font-bold text-maroon-900">{name}</h2>
                    <span className="text-xs bg-saffron-50 border border-saffron-200 text-saffron-700 px-2.5 py-1 rounded-full flex-shrink-0">{colors}</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-2 font-medium uppercase tracking-wide">{community}</p>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">{style}</p>
                  <p className="text-xs text-saffron-700 font-semibold">Best for: {bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 px-4 bg-amber-50/40 text-center">
          <h2 className="font-display text-2xl font-bold text-maroon-900 mb-3">Try All 10 on Your Biodata</h2>
          <p className="text-gray-600 text-sm mb-6 max-w-md mx-auto">Fill the form once. On the preview page, switch between all 10 templates instantly until you find the right one.</p>
          <Link href="/create" className="btn-primary">Create Biodata Free →</Link>
        </section>

        <AEOBlock faqs={aeoFaqs} title="Template Questions — Honest Answers" ctaHref="/create" ctaText="Create Your Biodata" />
      </main>
      <Footer />
    </div>
  );
}
