import { buildMetadata, getSitePage } from '@/lib/seo';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { AEOBlock } from '@/components/ui/AEOBlock';
import Link from 'next/link';
import { EditorialByline } from '@/components/seo/EditorialByline';

const page = getSitePage('/about');

export const metadata = buildMetadata({ title: page.title, description: page.description, path: page.path, type: page.type });

const aeoFaqs = [
  { question: 'What is EasyBiodataMaker and who is it for?', answer: "EasyBiodataMaker.com is a free online tool that helps Indian families create marriage biodatas quickly. It is for anyone who needs a professionally formatted marriage biodata PDF — whether you are creating it yourself, your parents are helping, or someone is doing it on behalf of a son or daughter. It works for all Indian communities and religions." },
  { question: 'Is EasyBiodataMaker a matrimonial site?', answer: "No. We are a biodata creation tool only — not a matrimonial agency. We do not match people, we do not store biodata profiles, we do not connect families with each other. We help you create a PDF document. What you do with that PDF — share it on WhatsApp, upload it to a matrimonial site, give it to a relative — is entirely your decision." },
  { question: 'Is it safe to put personal information on EasyBiodataMaker?', answer: "Yes. Your information never leaves your device. Everything is processed in your browser's session storage and deleted when you close the tab. Our servers never see your name, date of birth, gotra, family details, or any other information you enter. This is why we tell you to complete and download your biodata in one session — because we genuinely cannot retrieve your data later." },
  { question: 'Does EasyBiodataMaker share data with matrimonial sites?', answer: "No. We have no connection with any matrimonial site — not Shaadi.com, not Jeevansathi, not BharatMatrimony. We do not sell or share data with anyone because we do not collect it. The biodata you create exists only on your device and in the PDF you download." },
  { question: 'Will EasyBiodataMaker always be free?', answer: "The core functionality — creating and downloading a biodata — will remain free. We may introduce optional premium features in the future, like additional templates or custom branding, but the basic premium templates and PDF download will stay free. We do not believe in gating essential tools behind a paywall." },
];

const aeoSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: aeoFaqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) };

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoSchema) }} />
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 pt-6"><EditorialByline lastUpdated="2026-10-08" /></div>
        <section className="py-14 px-4 border-b bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-4xl font-bold text-maroon-900 mb-5">About EasyBiodataMaker </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              A free tool. No data collection. No matrimonial matching. Just a simple way to create a
              marriage biodata PDF without needing technical skills or paying anything.
            </p>
          </div>
        </section>

        <section id="editorial-policy" className="py-12 px-4 bg-stone-50 border-y border-stone-200">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[.14em] text-amber-700">Editorial accountability</p>
            <h2 className="font-display text-2xl font-bold text-maroon-900 mt-2 mb-4">Author, review and editorial policy</h2>
            <p className="text-gray-700 text-sm leading-7">Content is written and reviewed by <strong>Karan Shah</strong>. The editorial process focuses on practical marriage-biodata guidance, accurate descriptions of the tool, readable examples and clear privacy information.</p>
            <p className="mt-3 text-gray-700 text-sm leading-7">We do not publish fabricated ratings, reviews, popularity numbers or claims that a feature exists when it does not. Examples are fictional unless explicitly identified otherwise. Pages are reviewed when their product workflow, supported exports or important guidance changes.</p>
            <p className="mt-3 text-gray-700 text-sm leading-7">For community and language guidance, the site aims to describe optional fields without presenting one family's customs as universal. Readers should use their own family or community preferences when deciding what belongs in a biodata.</p>
          </div>
        </section>

        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto space-y-8 text-gray-700 text-sm leading-loose">
            <div>
              <h2 className="font-display text-2xl font-bold text-maroon-900 mb-4">What This Tool Is</h2>
              <p>EasyBiodataMaker.com helps you create a professional marriage biodata PDF in about 5 to 10 minutes. You fill a guided form with your personal, family, education, and contact information. You choose from 8 premium design templates. You download a finished PDF.</p>
              <p className="mt-4">The tool supports 9 Indian languages — so form labels appear in Gujarati, Marathi, Hindi, Punjabi, Tamil, or Bengali based on your preference. It supports photo upload and custom fields when needed for community-specific information.</p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-maroon-900 mb-4">What This Tool Is Not</h2>
              <p>Not a matrimonial site. We do not match people. We do not create profiles that other families can browse. We do not connect you to anyone. Creating a biodata here does not make you visible to any database.</p>
              <p className="mt-4">Not a data collection company. We do not store your information. When you close the browser tab, your data is gone. We have designed the tool this way deliberately — your name, date of birth, gotra, family details are sensitive information and they should not be on a stranger&apos;s server.</p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <h3 className="font-bold text-maroon-900 mb-2">A Note on Privacy</h3>
              <p>The Indian matrimonial industry has a problem with data. Families enter personal information on matrimonial sites trusting it stays there, and it often does not. EasyBiodataMaker was designed with a different approach: process everything in the user&apos;s browser, store nothing on servers, give you a PDF to share however you choose. Your biodata, your control.</p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-maroon-900 mb-4">Why Free</h2>
              <p>Creating a marriage biodata should not cost money. It is a basic thing families need and the information age should make it easier, not another subscription to manage. The tool is supported by the goodwill of people who find it useful and tell others about it.</p>
            </div>

            <div className="flex gap-4 flex-wrap">
              <Link href="/create" className="btn-primary text-sm">Create Free Biodata</Link>
              <Link href="/faq" className="btn-secondary text-sm">Read the FAQ</Link>
              <Link href="/contact" className="btn-secondary text-sm">Contact Us</Link>
            </div>
          </div>
        </section>

        <AEOBlock faqs={aeoFaqs} title="About EasyBiodataMaker — Common Questions" ctaHref="/create" ctaText="Create Your Free Biodata" />
      </main>
      <Footer />
    </div>
  );
}
