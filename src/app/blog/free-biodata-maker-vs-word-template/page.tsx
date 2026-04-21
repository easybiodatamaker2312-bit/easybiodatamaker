import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { AEOBlock } from '@/components/ui/AEOBlock';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Online Biodata Maker vs Word Template – The Honest Comparison | EasyBiodataMaker',
  description: 'Should you use an online biodata maker or download a Word template for your marriage biodata? Honest comparison on formatting, design, mobile use, privacy, and final output.',
  keywords: ['biodata maker vs word template','online biodata maker vs word','should i use biodata maker or word template','biodata word format problems','online biodata better than word','free biodata word template problems india'],
  alternates: { canonical: 'https://easybiodatamaker.com/blog/free-biodata-maker-vs-word-template' },
  openGraph: { title: 'Online Biodata Maker vs Word Template – Honest Comparison', description: 'Formatting, design, mobile support, privacy compared. An honest look at both options.', url: 'https://easybiodatamaker.com/blog/free-biodata-maker-vs-word-template', type: 'article' },
};

const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Online Biodata Maker vs Word Template – The Honest Comparison', datePublished: '2024-12-24', dateModified: '2024-12-24', author: { '@type': 'Organization', name: 'EasyBiodataMaker', url: 'https://easybiodatamaker.com' }, publisher: { '@type': 'Organization', name: 'EasyBiodataMaker', logo: { '@type': 'ImageObject', url: 'https://easybiodatamaker.com/logo.png' } }, mainEntityOfPage: 'https://easybiodatamaker.com/blog/free-biodata-maker-vs-word-template' };

const aeoFaqs = [
  { question: 'Why do Word biodata templates look bad when you send them?', answer: "Because Word documents are sensitive to the environment they open in. The fonts you installed on your computer may not exist on the recipient's phone. Line spacing and margins render differently across versions of Word. Tables shift. Borders disappear. The PDF you download from an online maker is a fixed image of the layout — it looks exactly the same on every device, every operating system, every screen size." },
  { question: 'Can I make a marriage biodata on my phone using Word?', answer: "Technically yes, but it is frustrating. Mobile Word has limited formatting capabilities. The templates designed for desktop look broken on mobile editing. Most people end up with messy formatting they cannot fix on a small screen. An online biodata maker is designed to work on mobile from the ground up — the form fits the screen, photos upload from your gallery, and the PDF downloads cleanly." },
  { question: 'Which is better — online biodata maker or Word template?', answer: "For almost everyone, online biodata maker. The PDF output is better looking, more consistent, works on all devices, and requires no software. The only case where Word wins: if you are highly technically skilled with Word formatting and specifically need to print on a certain paper size or add very unusual customisation." },
  { question: 'Are there any situations where a Word template is better?', answer: "A few edge cases: if you need to edit the biodata frequently without going back to the form, Word gives you direct text editing. If you need very specific formatting that no template matches. If your company or community has a specific Word template required by their matrimonial committee. But for 95% of people creating a standard marriage biodata, an online maker produces better results faster." },
];

const aeoSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: aeoFaqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) };

const comparison = [
  { aspect: 'Final design quality', word: 'Depends on your design skills. Most Word biodatas look like form documents.', online: 'Professional templates designed specifically for Indian biodatas. Looks polished without any skill.' },
  { aspect: 'Consistency across devices', word: 'Breaks on different computers. Fonts shift. Tables move. Borders disappear.', online: 'PDF looks identical everywhere — phone, laptop, print, WhatsApp.' },
  { aspect: 'Mobile usability', word: 'Poor. Mobile Word has limited formatting. Edits create new problems.', online: 'Designed for mobile. Form works on any smartphone browser.' },
  { aspect: 'Software required', word: 'Microsoft Office or a compatible editor.', online: 'Any browser. No installation.' },
  { aspect: 'Photo handling', word: 'Manual — you insert and resize a photo yourself, often creating alignment issues.', online: 'Upload and it is positioned correctly automatically.' },
  { aspect: 'Language support', word: 'You type in whatever language you like, but templates are usually English only.', online: 'Form labels switch to Gujarati, Marathi, Hindi, Punjabi, Tamil, Bengali automatically.' },
  { aspect: 'Privacy', word: 'The file exists on your device and wherever you send it.', online: 'Data stays in your browser only — never reaches any server.' },
  { aspect: 'Community templates', word: 'Generic templates. No Gujarati Navratri or Marathi Wari format.', online: '10 templates designed for specific Indian communities.' },
];

export default function BiodataVsWordPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoSchema) }} />

      <main className="flex-1">
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-12 px-4 border-b border-amber-100">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-4 text-xs text-gray-400">
              <Link href="/blog" className="hover:text-saffron-600">Blog</Link>
              <span>/</span><span>Biodata Maker vs Word Template</span>
            </div>
            <h1 className="font-display text-3xl font-bold text-maroon-900 mb-4 leading-tight">
              Online Biodata Maker vs Word Template — The Honest Comparison
            </h1>
            <p className="text-gray-700 leading-relaxed text-sm">
              People download Word templates thinking it is the simpler path. Then the formatting
              breaks on someone else&apos;s phone and they end up on Google looking for something
              better. Here is an honest look at both options.
            </p>
          </div>
        </section>

        <article className="py-12 px-4">
          <div className="max-w-3xl mx-auto space-y-8">

            <section className="space-y-4 text-gray-700 text-sm leading-loose">
              <h2 className="font-display text-2xl font-bold text-maroon-900">The Word Template Experience Most People Have</h2>
              <p>You find a decent-looking Word biodata template, download it, open it on your laptop. It looks good. You type your information in, fiddle with the fonts, get the layout right. You save it and send it to a family friend on WhatsApp.</p>
              <p>They open it on their Android phone. The fonts are different because their phone does not have the ones you used. The table has shifted. The border has disappeared. One of the sections has moved to a second page because their version of Word handles line spacing differently.</p>
              <p>You receive a screenshot of what they are seeing. You spend another hour trying to fix it.</p>
              <p>This is the typical Word template experience for biodata creation — and it is why people switched to online makers.</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-maroon-900 mb-5">The Comparison</h2>
              <div className="space-y-4">
                {comparison.map(({ aspect, word, online }) => (
                  <div key={aspect} className="card p-4">
                    <h3 className="font-bold text-maroon-800 text-sm mb-3">{aspect}</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-red-50 rounded-lg p-3">
                        <div className="text-xs font-bold text-red-600 mb-1">Word Template</div>
                        <div className="text-xs text-gray-700 leading-relaxed">{word}</div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-3">
                        <div className="text-xs font-bold text-green-600 mb-1">Online Maker</div>
                        <div className="text-xs text-gray-700 leading-relaxed">{online}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4 text-gray-700 text-sm leading-loose">
              <h2 className="font-display text-2xl font-bold text-maroon-900">When Word Actually Makes Sense</h2>
              <p>Being fair here. Word has legitimate advantages in specific situations: if you need to frequently edit small details without going back to a form, direct text editing is faster. If your community has a specific mandatory template. If you need unusual customisation that no online tool provides.</p>
              <p>For everyone else — which is the vast majority of people creating a marriage biodata — an online maker produces better results in less time.</p>
            </section>

            <div className="bg-gradient-to-r from-maroon-800 to-maroon-950 rounded-2xl p-6 text-white text-center">
              <h2 className="font-display text-xl font-bold mb-3">Try the Online Approach</h2>
              <p className="text-amber-200/80 text-sm mb-4">10 templates · 7 languages · Photo upload · PDF in 5 minutes · Free</p>
              <Link href="/create" className="btn-primary text-sm">Create Biodata Free →</Link>
            </div>
          </div>
        </article>

        <AEOBlock faqs={aeoFaqs} title="Biodata Maker vs Word — Questions Answered" ctaHref="/create" ctaText="Try the Online Maker Free" />
      </main>
      <Footer />
    </div>
  );
}
