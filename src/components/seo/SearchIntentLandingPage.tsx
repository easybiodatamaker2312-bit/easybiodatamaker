// TODO: needs native-speaker review before publish — Hindi, Gujarati and Marathi sample copy below.
import Link from 'next/link';
import { AEOBlock } from '@/components/ui/AEOBlock';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SoftwareApplicationSchema } from '@/components/seo/SoftwareApplicationSchema';
import { SEARCH_INTENT_ENHANCEMENTS } from '@/lib/seo/searchIntentEnhancements';
import { EditorialByline } from '@/components/seo/EditorialByline';
import { AuthorBox } from '@/components/seo/AuthorBox';

export type SearchIntentPageConfig = {
  path: string;
  updatedAt: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  quickAnswer: string;
  sections: Array<{ heading: string; paragraphs: string[] }>;
  checklist: string[];
  related: Array<{ href: string; label: string }>;
  faqs: Array<{ question: string; answer: string }>;
};

const templatePreviewByPath: Record<string, { id: string; alt: string }> = {
  '/simple-marriage-biodata-format': { id: 'editorial-mono', alt: 'Editorial Mono simple marriage biodata template preview' },
  '/modern-marriage-biodata-format': { id: 'blush-rose-floral', alt: 'Blush Rose Floral modern marriage biodata template preview' },
  '/traditional-marriage-biodata-template': { id: 'midnight-gold', alt: 'Midnight Gold traditional marriage biodata template preview' },
  '/royal-wedding-biodata-format': { id: 'royal-peacock', alt: 'Royal Peacock royal wedding biodata template preview' },
  '/marriage-biodata-template-free-download': { id: 'sandstone-rajasthan', alt: 'Sandstone Rajasthan marriage biodata template preview' },
};

export type SearchIntentEnhancement = {
  sampleImage: string;
  sampleAlt: string;
  examples: string[];
  mistakes: string[];
  sections: Array<{ heading: string; paragraphs: string[] }>;
};


const filledSamples: Record<string, { heading: string; lines: string[]; note: string }> = {
  '/marriage-biodata-format': { heading: 'Complete fictional biodata sample', lines: ['Name: Aarav Mehta', 'Age: 29 · Height: 178 cm', 'Current city: Pune, Maharashtra', 'Education: B.E. Computer Engineering', 'Occupation: Software engineer', 'Family: Parents Neeraj and Kavita Mehta; one younger sister', 'About: Curious, calm and close to family; enjoys reading, hiking and cooking.', 'Expectations: Hopes to meet a kind, communicative partner who values mutual respect and each person’s goals.'], note: 'Replace every fictional detail with accurate information before sharing.' },
  '/marriage-biodata-format-word': { heading: 'Word-ready fictional sample', lines: ['Name: Riya Desai', 'Age: 27 · Current city: Ahmedabad', 'Education: M.Com', 'Occupation: Accounts manager', 'Family: Parents and one sibling', 'About: Practical, warm and interested in music and travel.', 'Expectations: A thoughtful partner who supports open communication and shared decisions.'], note: 'Keep headings and values as selectable text in the Word file; avoid using screenshots of text.' },
  '/marriage-biodata-format-pdf': { heading: 'PDF-ready fictional sample', lines: ['Name: Dev Patel', 'Age: 30 · Height: 175 cm', 'Education: M.Tech', 'Occupation: Product analyst · Bengaluru', 'Family: Parents live in Vadodara', 'About: Enjoys cycling, books and spending time with family.', 'Expectations: Values kindness, independence and practical conversations about the future.'], note: 'Check the exported PDF at phone size and A4 print size before sending.' },
  '/marriage-biodata-maker-online': { heading: 'Filled sample profile', lines: ['Name: Ananya Rao', 'Age: 28 · Current city: Hyderabad', 'Education: MBA', 'Occupation: Project manager', 'Family: Parents and an older brother', 'About: Enjoys classical music, weekend walks and learning new recipes.', 'Expectations: Looking for a supportive relationship built on respect and shared responsibility.'], note: 'This sample is fictional and illustrates structure, not a preferred profile.' },
  '/biodata-for-marriage-girl': { heading: 'Fictional bride biodata sample', lines: ['Name: Aditi Shah', 'Age: 28 · Height: 163 cm', 'Education: MBA, Finance', 'Occupation: Finance manager · Ahmedabad', 'Family: Father runs a small business; mother is a teacher; one brother.', 'About: Enjoys reading, travel and family gatherings.', 'Expectations: Values a considerate partner who respects both families and career goals.'], note: 'A bride’s biodata should describe her own priorities, not assumed expectations.' },
  '/biodata-for-marriage-boy': { heading: 'Fictional groom biodata sample', lines: ['Name: Kunal Joshi', 'Age: 30 · Height: 180 cm', 'Education: B.Tech, Information Technology', 'Occupation: Software developer · Pune', 'Family: Parents and a younger sister.', 'About: Enjoys badminton, cooking and exploring new places.', 'Expectations: Hopes for an equal partnership with honest communication and shared decisions.'], note: 'A groom’s biodata should use the same standards of honesty and respect as any profile.' },
  '/hindu-marriage-biodata-format': { heading: 'Fictional Hindu biodata sample', lines: ['Name: Nikhil Sharma', 'Age: 29 · Current city: Jaipur', 'Education: M.Com · Occupation: Chartered-accounting professional', 'Family: Parents and one sibling; native place: Jaipur', 'Traditional details: Gotra and horoscope fields omitted from this example.', 'About: Enjoys cricket, volunteering and family time.', 'Expectations: Values respect, conversation and a balanced family life.'], note: 'Gotra, caste, rashi and horoscope details are optional and family-specific; verify before including them.' },
  '/muslim-marriage-biodata-format': { heading: 'Fictional Muslim biodata sample', lines: ['Name: Amaan Khan', 'Age: 29 · Current city: Hyderabad', 'Education: B.Com', 'Occupation: Business analyst', 'Family: Parents and two siblings.', 'About: Enjoys reading, community volunteering and spending time with family.', 'Expectations: Seeks a respectful, communicative partner with compatible values and life goals.'], note: 'Religious practice and family preferences differ. Include only details the candidate chooses to share.' },
  '/about-myself-for-marriage-biodata': { heading: 'Fictional “About myself” example', lines: ['“I am a thoughtful and optimistic person who enjoys learning, reading and spending time with family. I value direct communication, respect different perspectives and try to maintain a healthy balance between work and personal life.”'], note: 'Keep this paragraph personal. Remove any quality that does not genuinely describe you.' },
  '/partner-expectations-for-marriage-biodata': { heading: 'Fictional partner expectations example', lines: ['“I hope to meet someone kind, emotionally mature and comfortable discussing important decisions openly. I value mutual respect, support for each other’s work and a willingness to build a life together. Location and family plans can be discussed honestly as we get to know each other.”'], note: 'Describe values and practical preferences; avoid turning expectations into a long list of demands.' },
  '/family-details-in-marriage-biodata': { heading: 'Fictional family details example', lines: ['Father: Rajesh Mehta · small business owner', 'Mother: Kavita Mehta · school teacher', 'Siblings: One younger sister, currently studying', 'Family base: Indore, Madhya Pradesh', 'Family note: “We value education, kindness and maintaining close relationships while respecting individual choices.”'], note: 'Ask family members before sharing their occupations or other personal information.' },
  '/gujarati-marriage-biodata': { heading: 'Fictional Gujarati biodata sample', lines: ['Name: Aarav Patel', 'Age: 29 · Ahmedabad, Gujarat', 'Education: B.E. Computer Engineering', 'Occupation: Software engineer', 'Family roots: Ahmedabad; gam field omitted in this example', 'About: Enjoys garba, reading and weekend travel.', 'Expectations: Values mutual respect and supportive family relationships.'], note: 'Use gam, gotra or community details only when relevant and verified.' },
  '/hindi-marriage-biodata': { heading: 'काल्पनिक विवाह बायोडाटा नमूना', lines: ['नाम: आरव शर्मा', 'आयु: 29 वर्ष · वर्तमान शहर: जयपुर', 'शिक्षा: बी.टेक, कंप्यूटर साइंस', 'पेशा: सॉफ्टवेयर इंजीनियर', 'परिवार: माता-पिता और एक छोटी बहन', 'परिचय: पढ़ना, यात्रा करना और परिवार के साथ समय बिताना पसंद है।', 'अपेक्षाएँ: आपसी सम्मान, स्पष्ट बातचीत और एक-दूसरे के लक्ष्यों का समर्थन।'], note: 'यह काल्पनिक उदाहरण है। साझा करने से पहले सभी विवरण सही करें और निजी जानकारी सीमित रखें।' },
  '/marathi-marriage-biodata': { heading: 'काल्पनिक मराठी विवाह बायोडाटा नमुना', lines: ['नाव: आरव कुलकर्णी', 'वय: ३० वर्षे · सध्याचे शहर: पुणे', 'शिक्षण: एम.टेक', 'व्यवसाय: अभियंता', 'कुटुंब: आई-वडील आणि एक बहीण', 'परिचय: वाचन, प्रवास आणि कुटुंबासोबत वेळ घालवायला आवडते.', 'अपेक्षा: परस्पर आदर, मोकळा संवाद आणि एकमेकांच्या ध्येयांना साथ.'], note: 'हा काल्पनिक नमुना आहे. प्रकाशित करण्यापूर्वी स्थानिक भाषेतील मजकूर तपासून घ्या.' }
};

export function SearchIntentLandingPage({ page, includeSoftwareSchema = false }: { page: SearchIntentPageConfig; includeSoftwareSchema?: boolean }) {
  const enhancement = SEARCH_INTENT_ENHANCEMENTS[page.path];
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://easybiodatamaker.com/' },
      { '@type': 'ListItem', position: 2, name: page.title, item: `https://easybiodatamaker.com${page.path}` },
    ],
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((faq) => ({
      '@type': 'Question', name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <main lang="en" className="min-h-screen bg-[#FBF7F0] text-[var(--ink)]">
      {includeSoftwareSchema ? <SoftwareApplicationSchema /> : null}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="mx-auto max-w-5xl px-5 py-8 sm:px-8 sm:py-12">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: page.title }]} />
        <EditorialByline lastUpdated={page.updatedAt} />
        {['/divorcee-marriage-biodata-format', '/widow-widower-marriage-biodata', '/late-marriage-biodata-format'].includes(page.path) ? <AuthorBox reviewedOn="2026-10-11" /> : null}
        <p className="mt-4 text-xs font-medium uppercase tracking-[.14em] text-stone-500">Last updated: {page.updatedAt}</p>

        <header className="mt-8 max-w-4xl">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">{page.title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-600 sm:text-lg">{page.intro}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/create" className="btn-primary">Create your biodata</Link>
            <Link href="/templates" className="btn-secondary">Explore templates</Link>
          </div>
        </header>

        <section className="mt-10 rounded-3xl border border-amber-100 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[.16em] text-amber-700">Quick answer</p>
          <p className="mt-3 text-base leading-8 text-stone-700">{page.quickAnswer}</p>
        </section>

        {filledSamples[page.path] ? (
          <section className="mt-10 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[.16em] text-amber-700">Fictional example</p>
            <h2 className="mt-2 font-display text-2xl font-semibold">{filledSamples[page.path].heading}</h2>
            <div className="mt-5 rounded-2xl border border-stone-200 bg-[#FFFCF7] p-5">
              {filledSamples[page.path].lines.map((line) => <p key={line} className="border-b border-stone-100 py-2 text-sm leading-7 text-stone-700 last:border-0">{line}</p>)}
            </div>
            <p className="mt-4 text-xs leading-6 text-stone-500">{filledSamples[page.path].note}</p>
          </section>
        ) : null}

        {templatePreviewByPath[page.path] ? (
          <section className="mt-10 overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
            <img src={`/templates/${templatePreviewByPath[page.path].id}.webp`} alt={templatePreviewByPath[page.path].alt} width={910} height={1287} loading="lazy" decoding="async" className="mx-auto h-auto max-h-[760px] w-full object-contain" />
          </section>
        ) : null}

        {enhancement ? (
          <section className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
            <figure className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
              <img src={enhancement.sampleImage} alt={enhancement.sampleAlt} width={1200} height={900} loading="lazy" decoding="async" className="h-auto w-full" />
              <figcaption className="px-5 py-4 text-xs leading-5 text-stone-500">Fictional sample for layout guidance. Replace every value with your own verified information.</figcaption>
            </figure>
            <div className="card p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[.16em] text-amber-700">Filled sample</p>
              <h2 className="mt-2 font-display text-2xl font-semibold">What this example demonstrates</h2>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-stone-600">
                {enhancement.examples.map((example) => <li key={example}>✓ {example}</li>)}
              </ul>
            </div>
          </section>
        ) : null}

        <section className="mt-12 space-y-7">
          {page.sections.map((section) => (
            <article key={section.heading} className="card p-6 sm:p-8">
              <h2 className="font-display text-2xl font-semibold">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-3 text-sm leading-7 text-stone-600">{paragraph}</p>)}
            </article>
          ))}
        </section>

        {enhancement ? (
          <>
            <section className="mt-12 grid gap-7 lg:grid-cols-2">
              <article className="card p-6 sm:p-8">
                <h2 className="font-display text-2xl font-semibold">Common mistakes for this intent</h2>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-stone-600">
                  {enhancement.mistakes.map((mistake) => <li key={mistake}>• {mistake}</li>)}
                </ul>
              </article>
              <article className="card p-6 sm:p-8">
                <h2 className="font-display text-2xl font-semibold">Practical examples to compare</h2>
                <ol className="mt-5 space-y-3 text-sm leading-7 text-stone-600">
                  {enhancement.examples.map((example, index) => <li key={example}><span className="font-semibold text-stone-900">{index + 1}.</span> {example}</li>)}
                </ol>
              </article>
            </section>

            <section className="mt-12 space-y-7">
              {enhancement.sections.map((section) => (
                <article key={section.heading} className="card p-6 sm:p-8">
                  <h2 className="font-display text-2xl font-semibold">{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-3 text-sm leading-7 text-stone-600">{paragraph}</p>)}
                </article>
              ))}
            </section>
          </>
        ) : null}

        <section className="mt-12 rounded-3xl bg-[var(--ink)] p-7 text-white sm:p-9">
          <h2 className="font-display text-2xl font-semibold">A practical checklist</h2>
          <ul className="mt-5 grid gap-3 text-sm leading-6 text-stone-200 sm:grid-cols-2">
            {page.checklist.map((item) => <li key={item}>✓ {item}</li>)}
          </ul>
          <Link href="/create" className="mt-7 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-stone-900">Start a free biodata</Link>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">Related biodata resources</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {page.related.map((link) => <Link key={link.href} href={link.href} className="rounded-2xl border border-stone-200 bg-white p-4 text-sm font-semibold hover:border-stone-400">{link.label}</Link>)}
          </div>
        </section>
      </div>
      <AEOBlock faqs={page.faqs} title="Frequently asked questions" ctaHref="/create" ctaText="Create a free biodata" />
    </main>
  );
}
