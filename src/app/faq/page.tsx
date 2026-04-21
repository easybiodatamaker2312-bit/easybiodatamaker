import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';
import { AEOBlock } from '@/components/ui/AEOBlock';

export const metadata: Metadata = {
  title: 'Marriage Biodata FAQ – Real Questions, Honest Answers | EasyBiodataMaker',
  description:
    'Answers to real questions about marriage biodata in India. What to write, what to skip, how long, which template, gotra, manglik, NRI biodata, photo tips — everything families actually ask.',
  keywords: [
    'marriage biodata faq india',
    'biodata kya hota hai',
    'marriage biodata questions answers',
    'shaadi biodata help',
    'biodata gotra kya likhein',
    'manglik biodata mein likhein ya nahi',
    'biodata photo tips india',
    'biodata kitna lamba hona chahiye',
    'biodata pdf ya word',
    'biodata kab update karein',
    'partner expectations mein kya likhein',
    'biodata mein income kaise likhein',
    'biodata without registration india',
  ],
  alternates: { canonical: 'https://easybiodatamaker.com/faq' },
  openGraph: {
    title: 'Marriage Biodata FAQ – Real Questions, Honest Answers',
    description: 'What to write in a marriage biodata, how long it should be, gotra, manglik, NRI tips — all the questions families actually ask.',
    url: 'https://easybiodatamaker.com/faq',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is EasyBiodataMaker actually free or is there a catch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "It is actually free. All 10 templates, photo upload, custom fields, and PDF download — no charges, no watermark on the content, no registration. The only thing on the PDF is a small EasyBiodataMaker.com credit at the bottom, like most free tools add. That is it.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long should a marriage biodata be?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "One A4 page. That is the standard across India — North, South, East, West. Families review dozens of biodatas and do not have time to read three pages. If your information does not fit on one page, you are either including too many details or need a more compact template. Two pages is acceptable only for some South Indian communities that traditionally use extended formats.",
      },
    },
    {
      '@type': 'Question',
      name: 'Should I write my exact income or use a range?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Always use a range. Writing exactly 14,32,500 rupees looks odd and opens you to income-based negotiation that gets uncomfortable fast. Use ranges like 12-18 LPA or 25-35 LPA. For NRI candidates, write both — USD 90,000 per year (approx 75 lakh INR) — so both sets of parents can understand.",
      },
    },
    {
      '@type': 'Question',
      name: 'My parents do not know my gotra. What should I write?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Ask your maternal grandfather or eldest relative — the gotra comes from the paternal line. If you truly cannot find out, write 'To be confirmed' or leave it blank with a note in the expectations section. Do not guess or make one up — gotra-based marriage restrictions are taken seriously in many communities and wrong information creates problems later.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do I have to mention manglik status in the biodata?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "For Hindu communities where kundali matching happens — yes, you should. Leaving it blank makes families assume you are hiding something. If you do not know, write 'Not Known' and suggest they get a kundali checked. If your community does not care about this (many urban and educated families are moving away from it), you can skip the field.",
      },
    },
    {
      '@type': 'Question',
      name: 'What kind of photo should I use in my biodata?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Not a passport photo. Those stiff, plain-background photos make you look like a government document. Use a recent photo where you are smiling naturally, dressed nicely — saree or salwar for women, formal shirt or sherwani for men. Good lighting matters more than an expensive photographer. A photo taken on a decent phone near natural light is better than a gloomy studio photo.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is PDF better than Word for sharing a biodata?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Always PDF. A Word document looks completely different on different computers — fonts shift, spacing breaks, sometimes the whole layout collapses. PDF looks exactly the same for everyone. It is also smaller for WhatsApp sharing and cannot be accidentally edited. Never send a biodata as a .docx file.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can my parents fill this form for my biodata?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Absolutely. Most biodatas in India are actually prepared by parents. Just have the information ready — date of birth, time of birth, qualifications, current job details, family information. The form is simple enough that anyone can fill it. If you want to be involved in the partner expectations section, write that part yourself.",
      },
    },
    {
      '@type': 'Question',
      name: 'What should I NOT include in a marriage biodata?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Skip: your full home address (city and state is enough — full address is a privacy risk), Instagram or social media handles, exact salary (use a range), political opinions, and a list of 10 specific requirements for your partner. Also avoid using studio passport photos with plain backgrounds. Keep personal information that could be misused to a minimum.",
      },
    },
    {
      '@type': 'Question',
      name: 'How often should I update my biodata?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Every 6 months at minimum, or whenever something significant changes — new job, promotion, move to a different city, income increase. Many people create a biodata at 25 and share the same one at 28 with the same old details. Families notice when information seems dated. A fresh, current biodata gets better responses.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between gotra and sub-caste?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Sub-caste is your community within the broader caste — like Leva Patel vs Kadva Patel, or Konkanastha vs Deshastha Brahmin. Gotra is different — it is the patrilineal clan lineage traced to an ancient sage (rishi), like Kashyap or Bharadwaj. Both are important for Hindu matrimonial matching, but for different reasons. Sub-caste is about social and community compatibility; gotra is about lineage rules (same gotra cannot marry).",
      },
    },
    {
      '@type': 'Question',
      name: 'Is my data safe on EasyBiodataMaker?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Your biodata information lives only in your browser's session storage. When you close the tab, it is gone. Nothing is sent to any server, nothing stored in any database. We genuinely cannot see your information even if we wanted to. This is why we tell people to complete and download their biodata in one session.",
      },
    },
  ],
};

type FAQ = { question: string; answer: string };

const categories: { title: string; emoji: string; faqs: FAQ[] }[] = [
  {
    title: 'About EasyBiodataMaker',
    emoji: '🛠',
    faqs: [
      {
        question: 'Is EasyBiodataMaker actually free or is there a catch?',
        answer: "It is actually free. All 10 templates, photo upload, custom fields, and PDF download — no charges, no watermark on the content, no registration. The only thing on the PDF is a small EasyBiodataMaker.com credit at the bottom, like most free tools do. That is it.",
      },
      {
        question: 'Is my data safe here?',
        answer: "Your information lives only in your browser's session storage. When you close the tab, it is gone. Nothing is sent to any server, nothing stored in any database. We genuinely cannot see your information even if we wanted to. Complete and download your biodata in one session.",
      },
      {
        question: 'Can my parents fill this form for my biodata?',
        answer: "Absolutely. Most biodatas in India are prepared by parents anyway. Have the details ready — date of birth, time of birth, qualifications, job details, family information. If you want input on the partner expectations section, write that part yourself.",
      },
    ],
  },
  {
    title: 'What to Write (and What to Skip)',
    emoji: '✍️',
    faqs: [
      {
        question: 'How long should a marriage biodata be?',
        answer: "One A4 page. That is the standard across India — North, South, East, West. Families go through dozens of biodatas and do not have time for three pages. If your information does not fit on one page, you are including too much detail. Two pages is acceptable only for some South Indian extended formats.",
      },
      {
        question: 'Should I write my exact income or use a range?',
        answer: "Always use a range. Writing ₹14,32,500 looks odd and opens awkward income negotiations. Use ranges like 12–18 LPA or 25–35 LPA. For NRIs, write both — USD 90,000 per year (approx ₹75 lakh) — so parents on both sides understand.",
      },
      {
        question: 'What should I not include in a marriage biodata?',
        answer: "Skip: full postal address (city and state is enough — your full address is a privacy risk), social media handles, exact salary, political opinions, and a long list of very specific partner requirements. Also avoid stiff passport photos with plain backgrounds.",
      },
      {
        question: 'How often should I update my biodata?',
        answer: "Every 6 months, or whenever something changes — new job, promotion, moved cities, income increase. Many people create a biodata at 25 and share the same one at 28 with outdated information. Families notice. A fresh, accurate biodata gets better responses.",
      },
    ],
  },
  {
    title: 'Gotra, Manglik, and Community Fields',
    emoji: '🕉️',
    faqs: [
      {
        question: 'My parents do not know my gotra. What do I write?',
        answer: "Ask your maternal grandfather or eldest relative — gotra comes from the paternal line. If you genuinely cannot find out, write 'To be confirmed' or leave it blank. Do not guess. Gotra-based marriage restrictions are taken seriously in many communities and wrong information causes problems later.",
      },
      {
        question: 'Do I have to mention manglik in the biodata?',
        answer: "For Hindu communities where kundali matching happens — yes. Leaving it blank makes families assume you are hiding something. If you do not know, write 'Not Known' and suggest they get it checked separately. If your community genuinely does not care about this, you can skip the field.",
      },
      {
        question: 'What is the difference between gotra and sub-caste?',
        answer: "Sub-caste is your community within the broader caste — like Leva Patel vs Kadva Patel, or Konkanastha vs Deshastha Brahmin. Gotra is the patrilineal clan lineage traced to an ancient sage (rishi). Sub-caste is about community compatibility; gotra is about lineage rules — same gotra cannot marry in Hindu tradition.",
      },
    ],
  },
  {
    title: 'Photos and Format',
    emoji: '📸',
    faqs: [
      {
        question: 'What kind of photo should I use in my biodata?',
        answer: "Not a passport photo. Those stiff, plain-background shots make you look like a government document. Use a recent photo where you are smiling naturally, dressed nicely. Good lighting matters more than an expensive photographer. A phone photo near natural light often looks better than a dark studio shot.",
      },
      {
        question: 'Is PDF better than Word for sharing a biodata?',
        answer: "Always PDF. A Word document looks completely different on different computers — fonts shift, spacing breaks, sometimes the whole layout collapses. PDF looks exactly the same for everyone, is smaller for WhatsApp sharing, and cannot be accidentally edited. Never send a biodata as a .docx file.",
      },
    ],
  },
];


const quickFaqs = [
  { question: 'What is a marriage biodata in India?', answer: "A marriage biodata is a one-page document used in Indian matrimonial matchmaking. It presents personal details (name, age, religion, caste, gotra), family background, education, career, and contact information — similar to a resume but for marriage. It is shared between families before they decide whether to meet." },
  { question: 'How long does it take to create a biodata on EasyBiodataMaker?', answer: "About 5 to 10 minutes if you have your information ready — date of birth, time of birth, gotra, education details, current job, family information. Gathering the information beforehand is the only part that takes time. The form itself is fast." },
  { question: 'What is the difference between a biodata and a matrimonial site profile?', answer: "A matrimonial site profile (Shaadi.com, Jeevansathi) is stored on their platform and browsed by other members. A biodata is a standalone PDF document you share directly — via WhatsApp, email, or in person. Many families prefer a PDF biodata because it looks more personal and professional than a website profile link." },
];
export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-14 px-4 border-b border-amber-100">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl font-bold text-maroon-900 mb-4">
              Marriage Biodata — Real Questions, Honest Answers
            </h1>
            <p className="text-gray-600 text-base leading-relaxed max-w-xl mx-auto">
              Not the usual generic FAQ. These are the actual questions families ask us — about gotra,
              manglik, income, photos, PDF vs Word, and everything else that comes up when making a
              marriage biodata.
            </p>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-14 px-4">
          <div className="max-w-3xl mx-auto space-y-14">
            {categories.map(({ title, emoji, faqs }) => (
              <div key={title}>
                <h2 className="font-display text-2xl font-bold text-maroon-900 mb-6 flex items-center gap-3">
                  <span className="text-2xl">{emoji}</span> {title}
                </h2>
                <div className="space-y-4">
                  {faqs.map(({ question, answer }) => (
                    <details key={question} className="card group" itemScope itemType="https://schema.org/Question">
                      <summary
                        className="p-5 cursor-pointer font-semibold text-maroon-800 hover:text-saffron-700 transition-colors flex items-center justify-between gap-3 list-none text-sm"
                        itemProp="name"
                      >
                        <span>{question}</span>
                        <span className="text-saffron-500 text-xl flex-shrink-0 leading-none select-none">+</span>
                      </summary>
                      <div
                        className="px-5 pb-5 text-gray-700 text-sm leading-relaxed border-t border-amber-50 pt-4"
                        itemScope
                        itemType="https://schema.org/Answer"
                        itemProp="acceptedAnswer"
                      >
                        <div itemProp="text">{answer}</div>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Still have questions */}
        <section className="py-12 px-4 bg-amber-50/40">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-display text-2xl font-bold text-maroon-900 mb-3">
              Something not covered here?
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              Email us at support@easybiodatamaker.com and we will get back to you within 24 hours.
              Real person responds, not a bot.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/contact" className="btn-secondary text-sm">Email Us</Link>
              <Link href="/create" className="btn-primary text-sm">Create Biodata Free</Link>
            </div>
          </div>
        </section>
      </main>

      <AEOBlock faqs={quickFaqs} title="Quick Answers to Common Biodata Questions" ctaHref="/create" ctaText="Create Your Biodata Free" />
      <Footer />
    </div>
  );
}
