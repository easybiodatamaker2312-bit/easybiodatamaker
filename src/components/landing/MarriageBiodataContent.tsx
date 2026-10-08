import Link from 'next/link';
import { ArrowRight, Check, FileText, Globe2, HeartHandshake, MessageCircle, ShieldCheck } from 'lucide-react';

const languages = [
  { name: 'Hindi', native: 'हिंदी', href: '/hindi-marriage-biodata', note: 'Hindi-first profiles for families who prefer familiar wording.' },
  { name: 'Gujarati', native: 'ગુજરાતી', href: '/gujarati-marriage-biodata', note: 'Gujarati family, education, career and community details.' },
  { name: 'Marathi', native: 'मराठी', href: '/marathi-marriage-biodata', note: 'Marathi biodata guidance for local and family-led introductions.' },
  { name: 'Tamil', native: 'தமிழ்', href: '/tamil-marriage-biodata', note: 'Tamil-friendly layouts with optional birth and family fields.' },
  { name: 'Telugu', native: 'తెలుగు', href: '/telugu-marriage-biodata', note: 'Telugu profiles with room for family, education and expectations.' },
  { name: 'Bengali', native: 'বাংলা', href: '/bengali-marriage-biodata', note: 'Bengali-friendly presentation for clear family introductions.' },
  { name: 'Kannada', native: 'ಕನ್ನಡ', href: '/kannada-marriage-biodata', note: 'Kannada profiles for traditional and contemporary families.' },
  { name: 'Punjabi', native: 'ਪੰਜਾਬੀ', href: '/punjabi-marriage-biodata', note: 'Punjabi language and family-context options.' },
  { name: 'Rajasthani', native: 'राजस्थानी', href: '/rajasthani-marriage-biodata', note: 'Rajasthani and Hindi-friendly family profile guidance.' },
];

const situations = [
  ['/biodata-for-marriage-boy', "Biodata for a boy", 'Career, education, family background and practical expectations without making the profile read like a job CV.'],
  ['/biodata-for-marriage-girl', "Biodata for a girl", 'Education, work, interests, family context and future preferences presented with equal weight.'],
  ['/simple-marriage-biodata-format', 'Simple format', 'A quieter layout when the goal is clarity and easy forwarding rather than decorative design.'],
  ['/modern-marriage-biodata-format', 'Modern format', 'Clean hierarchy, photo-led presentation and a more contemporary visual tone.'],
  ['/traditional-marriage-biodata-template', 'Traditional format', 'A familiar structure for families who prefer customary sections and a formal appearance.'],
  ['/single-page-marriage-biodata-format', 'One-page format', 'A compact A4 approach for introductions where every section needs to earn its space.'],
  ['/marriage-biodata-format-word', 'Word export', 'Useful when you want an editable document after creating the profile in the browser.'],
  ['/marriage-biodata-format-pdf', 'PDF sharing', 'A fixed A4 document for printing, email and family WhatsApp conversations.'],
];

const communityLinks = [
  ['/hindu-marriage-biodata-format', 'Hindu', 'Optional gotra, rashi, nakshatra and manglik fields when the family uses them.'],
  ['/muslim-marriage-biodata-format', 'Muslim', 'Family, faith and personal-practice details without assuming one universal format.'],
  ['/sikh-marriage-biodata', 'Sikh', 'Family, education, career and optional religious-practice context.'],
  ['/jain-marriage-biodata', 'Jain', 'Optional sect, family and lineage details with privacy-conscious sharing.'],
  ['/christian-marriage-biodata', 'Christian', 'Denomination, church and family information only when relevant to the person.'],
  ['/marriage-biodata-formats-by-community', 'More communities', 'Explore Gujarati, Marathi, Punjabi, Tamil, Telugu, Bengali, Kannada and Rajasthani guides.'],
];

export function MarriageBiodataContent() {
  return (
    <>
      <section className="border-y border-stone-200/70 bg-white px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <span className="eyebrow"><Globe2 size={14} /> Language-first marriage biodata</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">Write the biodata in the language your family actually reads.</h2>
            <p className="mt-5 text-base leading-8 text-stone-600">
              A marriage biodata is often passed from one person to another on a phone: a parent reads it, a sibling forwards it, and another family may print it before a first conversation. That is why language and readability matter as much as the template. EasyBiodataMaker gives you a dedicated path for each supported Indian language instead of forcing every family into one English-only format.
            </p>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {languages.map((language) => (
              <Link key={language.href} href={language.href} className="group rounded-2xl border border-stone-200 bg-ivory p-5 transition hover:-translate-y-0.5 hover:border-gold hover:shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div><p className="text-xs font-semibold uppercase tracking-[.14em] text-stone-400">{language.name}</p><p className="mt-2 font-serif text-2xl text-ink">{language.native}</p></div>
                  <ArrowRight size={17} className="mt-1 text-stone-400 transition group-hover:translate-x-1 group-hover:text-oxblood" />
                </div>
                <p className="mt-3 text-sm leading-6 text-stone-600">{language.note}</p>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-stone-500">You can also create a bilingual profile when one family member prefers English and another prefers an Indian script.</p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <span className="eyebrow"><FileText size={14} /> What belongs in a biodata</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">A good biodata answers the first questions without telling your whole life story.</h2>
            <p className="mt-5 text-base leading-8 text-stone-600">The strongest profiles are selective. They give a family enough context to decide whether a conversation makes sense, while leaving sensitive documents and deeply personal information for a later stage.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Personal details', 'Name, date and place of birth, height, city and other basics that the person is comfortable sharing.'],
              ['Education & career', 'Highest qualification, field, role, work location and income only at the level that is useful for the intended audience.'],
              ['Family background', 'Parents, siblings, native place and family context. Keep the wording factual rather than turning the page into a family history.'],
              ['About & expectations', 'A short human introduction plus realistic partner expectations. Values and life plans read better than a long list of demands.'],
            ].map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                <h3 className="font-display text-2xl font-semibold text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F3EEE5] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <span className="eyebrow">Choose the right starting point</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">Not every marriage biodata needs the same emphasis.</h2>
            <p className="mt-5 text-base leading-8 text-stone-600">A first introduction for a young professional can look different from a second-marriage profile or an NRI introduction. Start with the format that matches the conversation you are actually having.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {situations.map(([href, title, text]) => (
              <Link key={href} href={href} className="rounded-2xl border border-stone-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-gold">
                <h3 className="font-display text-xl font-semibold text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-600">{text}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-oxblood">Read the format <ArrowRight size={14} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200/70 bg-white px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <span className="eyebrow"><HeartHandshake size={14} /> Community-aware, not assumption-heavy</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">Traditional fields should be available, not forced.</h2>
            <p className="mt-5 text-base leading-8 text-stone-600">Indian marriage biodatas can include details such as gotra, rashi, nakshatra, sect, denomination, family deity or religious practice. Their importance varies by person, family and region. Our community guides explain where a field may be useful and where it is better left out, rather than treating one family's custom as a rule for everyone.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {communityLinks.map(([href, title, text]) => (
              <Link key={href} href={href} className="rounded-2xl border border-stone-200 bg-ivory p-6 transition hover:border-gold">
                <h3 className="font-display text-xl font-semibold text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-600">{text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <span className="eyebrow"><MessageCircle size={14} /> Before you share it</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">Make the document easy to read—and safe to forward.</h2>
            <p className="mt-5 text-base leading-8 text-stone-600">A biodata often travels farther than expected. A relative may forward it to a family group, save it to a phone, print it for a meeting or ask for an editable copy. Build the first version with that reality in mind.</p>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <article className="rounded-2xl border border-stone-200 bg-white p-7 shadow-sm">
              <h3 className="font-display text-2xl font-semibold">For WhatsApp</h3>
              <p className="mt-3 text-sm leading-7 text-stone-600">Use the image export when someone wants a quick visual preview in chat. Keep the first page readable at phone size and avoid filling every empty space with text.</p>
              <Link href="/biodata-maker-for-whatsapp" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-oxblood">WhatsApp sharing guide <ArrowRight size={14} /></Link>
            </article>
            <article className="rounded-2xl border border-stone-200 bg-white p-7 shadow-sm">
              <h3 className="font-display text-2xl font-semibold">For printing</h3>
              <p className="mt-3 text-sm leading-7 text-stone-600">PDF is the sensible choice when the biodata will be printed or forwarded as a formal document. Review the A4 preview before downloading so long sections do not become crowded.</p>
              <Link href="/marriage-biodata-format-pdf" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-oxblood">PDF format guide <ArrowRight size={14} /></Link>
            </article>
            <article className="rounded-2xl border border-stone-200 bg-white p-7 shadow-sm">
              <h3 className="font-display text-2xl font-semibold">For later editing</h3>
              <p className="mt-3 text-sm leading-7 text-stone-600">Keep an editable Word copy when the person's job, location, contact details or expectations may change. The final shared version can remain a clean PDF.</p>
              <Link href="/marriage-biodata-format-word" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-oxblood">Word format guide <ArrowRight size={14} /></Link>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200/70 bg-[#F3EEE5] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <span className="eyebrow"><ShieldCheck size={14} /> A practical privacy checklist</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">The first biodata should introduce a person, not expose an identity.</h2>
            <div className="mt-7 space-y-4">
              {[
                'Use a city or broad location instead of a full residential address when a precise address is unnecessary.',
                'Do not place Aadhaar, PAN, passport numbers, bank details or document scans in a marriage biodata.',
                'Share only the income or career detail that the intended family actually needs at the introduction stage.',
                'Review the phone number and email address before forwarding the final PDF or image.',
                'If a traditional field is not relevant to the person, leave it out rather than filling it with a placeholder.',
              ].map((item) => <div key={item} className="flex gap-3 text-sm leading-7 text-stone-700"><Check size={18} className="mt-1 shrink-0 text-deep-emerald" />{item}</div>)}
            </div>
          </div>
          <div className="rounded-3xl border border-stone-200 bg-white p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[.16em] text-gold">A better first conversation</p>
            <h3 className="mt-4 font-display text-3xl font-semibold">Clear beats crowded.</h3>
            <p className="mt-4 text-sm leading-7 text-stone-600">The goal is not to make the longest biodata. It is to make the right information easy to find. A family should be able to understand who the person is, where they are in life, what matters to them and what kind of match they are open to without decoding a wall of text.</p>
            <p className="mt-4 text-sm leading-7 text-stone-600">That is also why EasyBiodataMaker keeps the design and the information separate: you can change the visual treatment without rewriting the profile.</p>
            <Link href="/create" className="btn-primary mt-6 inline-flex">Start your biodata <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <span className="eyebrow">Marriage biodata, explained</span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">What families usually want to understand from the first page</h2>
          <div className="mt-8 space-y-7 text-base leading-8 text-stone-700">
            <p><strong className="text-ink">Who is this person?</strong> Start with the basics: name, age or date of birth, current city, education and occupation. A photograph can make the page more personal, but it should be clear and recent rather than heavily edited.</p>
            <p><strong className="text-ink">What is their family context?</strong> Parents, siblings and native place can give a useful first picture of the family. The exact level of detail is a choice. A first biodata does not need every relative, address or financial document.</p>
            <p><strong className="text-ink">What kind of life are they building?</strong> Education and career matter, but so do interests, lifestyle and future plans. A two- or three-line “about me” section often tells more than a page of adjectives.</p>
            <p><strong className="text-ink">What are they looking for?</strong> Partner expectations work best when they describe compatibility rather than demands. Mention values, location flexibility, career plans, family involvement or other priorities that genuinely matter.</p>
            <p><strong className="text-ink">Which cultural details are relevant?</strong> Some families use horoscope fields, gotra, caste, sect, denomination or other traditions. Include the fields that the person and family actually use. The document becomes more useful when optional information is clearly optional.</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/about-myself-for-marriage-biodata" className="rounded-full border border-stone-300 bg-white px-4 py-2.5 text-sm font-semibold hover:border-gold">About me examples</Link>
            <Link href="/partner-expectations-for-marriage-biodata" className="rounded-full border border-stone-300 bg-white px-4 py-2.5 text-sm font-semibold hover:border-gold">Partner expectations</Link>
            <Link href="/family-details-in-marriage-biodata" className="rounded-full border border-stone-300 bg-white px-4 py-2.5 text-sm font-semibold hover:border-gold">Family details guide</Link>
            <Link href="/marriage-biodata-profile-summary-examples" className="rounded-full border border-stone-300 bg-white px-4 py-2.5 text-sm font-semibold hover:border-gold">Profile summary examples</Link>
          </div>
        </div>
      </section>
    </>
  );
}
