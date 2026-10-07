import Link from 'next/link';
import type { CommunityPageData } from '@/lib/seo/communityPages';
import { TEMPLATES } from '@/components/biodata/TemplateRegistry';
import { useBiodataView } from '@/lib/useBiodataView';
import { defaultBiodata } from '@/lib/biodata-schema';
import type { SupportedLanguage } from '@/lib/translations';
import { createPackFields, getFieldPack } from '@/lib/field-packs';
import { createReligionPresetFields, getReligionPreset, RELIGION_PRESETS } from '@/lib/religion-presets';
import { CommunityLang } from './CommunityLang';
import { AEOBlock } from '@/components/ui/AEOBlock';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import type { CustomBiodataField } from '@/store/biodataStore';

function sampleData(name: string) {
  return { ...defaultBiodata, fullName: name, dateOfBirth: '1997-08-14', placeOfBirth: 'Ahmedabad', height: '5\'8"', religion: 'Hindu', caste: 'Family tradition', subCaste: '', gotra: 'Optional family field', fatherName: 'Rajesh Shah', fatherOccupation: 'Business', motherName: 'Meena Shah', motherOccupation: 'Teacher', brothers: '1', sisters: '1', familyType: 'Nuclear', familyStatus: 'Comfortable', nativePlace: 'Ahmedabad, Gujarat', highestQualification: 'B.E. Computer Engineering', fieldOfStudy: 'Computer Engineering', college: 'Gujarat University', occupation: 'Software Engineer', employedIn: 'Private', organization: 'Technology company', designation: 'Senior Software Engineer', annualIncome: '₹18 lakh', workLocation: 'Ahmedabad', aboutMe: 'Calm, family-oriented and professionally curious. Enjoys travel, reading and weekend time with family.', hobbies: 'Travel, reading, badminton', languages: 'English, Hindi, Gujarati', expectations: 'Looking for a kind, independent partner who values family, communication and mutual respect.', phone: '+91 98765 43210', email: 'family@example.com', city: 'Ahmedabad', state: 'Gujarat', pinCode: '380015', address: 'Ahmedabad, Gujarat' };
}

export function CommunityLandingPage({ page }: { page: CommunityPageData }) {
  const template = TEMPLATES[page.template];
  const data = sampleData(page.name === 'Marathi' ? 'Aarav Kulkarni' : page.name === 'Punjabi' ? 'Harpreet Singh' : page.name === 'Bengali' ? 'Anirban Sen' : page.name === 'Tamil' ? 'Arjun Raman' : page.name === 'Telugu' ? 'Aditya Rao' : page.name === 'Kannada' ? 'Karthik Shetty' : page.name === 'Rajasthani' ? 'Raghav Agarwal' : page.name === 'Jain' ? 'Rohan Mehta' : page.name === 'Muslim' ? 'Amaan Khan' : page.name === 'Sikh' ? 'Gurpreet Singh' : page.name === 'Christian' ? 'Daniel Mathew' : page.name === 'Hindu' ? 'Arjun Sharma' : 'Aarav Patel');
  const language = page.lang as SupportedLanguage;
  const religion = page.name === 'Muslim' ? 'Muslim' : page.name === 'Sikh' ? 'Sikh' : page.name === 'Christian' ? 'Christian' : page.name === 'Jain' ? 'Jain' : 'Hindu';
  const preset = getReligionPreset(religion);
  const communityPack = getFieldPack(page.slug);
  const presetFields: CustomBiodataField[] = preset ? createReligionPresetFields(preset, language).slice(0, 2).map((field, index) => ({ ...field, value: index === 0 ? (religion === 'Hindu' ? 'Optional family detail' : 'Optional family/community detail') : 'Example value' })) : [];
  const packFields: CustomBiodataField[] = communityPack ? createPackFields(communityPack, language).slice(0, 2).map((field, index) => ({ ...field, value: index === 0 ? 'Optional example' : 'Example value' })) : [];
  const sampleCustomFields = [...presetFields, ...packFields.filter((field) => !presetFields.some((item) => item.id === field.id))];
  const view = useBiodataView(data, language, ['basics','family','education','about','contact','photos'], {}, true, [], sampleCustomFields);
  const Layout = template.Layout;
  const colorway = template.colorways[0];
  const faqs = page.faqs;
  const faqSchema = { '@context':'https://schema.org', '@type':'FAQPage', mainEntity:faqs.map((f)=>({'@type':'Question',name:f.question,acceptedAnswer:{'@type':'Answer',text:f.answer}})) };
  const hubSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: page.title,
    description: page.description,
    url: `https://easybiodatamaker.com${page.path}`,
    inLanguage: language === 'en' ? 'en-IN' : `${language}-IN`,
    isPartOf: { '@type': 'WebSite', name: 'EasyBiodataMaker', url: 'https://easybiodatamaker.com' },
    mainEntity: { '@type': 'ItemList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: `${page.name} marriage biodata format`, url: `https://easybiodatamaker.com${page.path}` },
      { '@type': 'ListItem', position: 2, name: `${page.name} biodata creator`, url: `https://easybiodatamaker.com/create?community=${page.slug}&template=${page.template}` },
      { '@type': 'ListItem', position: 3, name: 'Formats by community', url: 'https://easybiodatamaker.com/marriage-biodata-formats-by-community' },
    ] }
  };
  return <>
    <CommunityLang lang={page.lang}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(hubSchema)}} />
    <main lang={page.lang === 'en' ? 'en' : `${page.lang}-IN`} className="min-h-screen bg-[var(--ivory,#FBF7F0)] text-stone-900">
      <Breadcrumbs items={[{label:'Home',href:'/'},{label:'Formats by community',href:'/marriage-biodata-formats-by-community'},{label:page.name}]} />
      <section className="border-b border-stone-200 bg-white px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-[1.05fr_.95fr] items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[.18em] text-[#B8893B]">{page.nativeName} · Marriage Biodata</p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl text-[#1C1917]">{page.name} Marriage Biodata Format</h1>
            <p className="mt-5 max-w-2xl text-base sm:text-lg leading-8 text-stone-600">{page.intro}</p>
            <Link href={`/create?community=${page.slug}&template=${page.template}`} className="btn-primary mt-7 inline-flex">Create {page.name} biodata</Link>
            <p className="mt-3 text-sm text-stone-500">No login. Your draft stays in your browser.</p>
          </div>
          <div className="overflow-auto rounded-2xl border border-stone-200 bg-stone-100 p-3 shadow-xl">
            <div className="mx-auto w-fit" aria-label={`Rendered ${page.name} biodata sample`}><Layout view={view} auspiciousSymbol={preset ? RELIGION_PRESETS[preset].symbol : 'none'} colorway={colorway}/></div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4 py-12 space-y-10">
        {page.sections.map((section)=><article key={section.heading}><h2 className="font-display text-2xl sm:text-3xl text-[#1C1917]">{section.heading}</h2>{section.paragraphs.map((p)=><p key={p} className="mt-4 leading-8 text-stone-700">{p}</p>)}</article>)}
        <article><h2 className="font-display text-2xl sm:text-3xl">Community-specific fields</h2><div className="mt-5 overflow-x-auto rounded-2xl border border-stone-200 bg-white"><table className="w-full text-left text-sm"><thead><tr className="border-b bg-stone-50"><th className="p-4 font-semibold">Field</th><th className="p-4 font-semibold">When to use it</th></tr></thead><tbody>{page.fields.map((f)=><tr key={f.name} className="border-b last:border-0"><td className="p-4 font-medium text-stone-900">{f.name}</td><td className="p-4 text-stone-600">{f.explanation}</td></tr>)}</tbody></table></div></article>
        <div className="rounded-2xl border border-[#B8893B]/30 bg-[#FBF7F0] p-6"><h2 className="font-display text-2xl">Ready to create it?</h2><p className="mt-2 text-stone-600">Start with the recommended template, then turn optional fields on or off before you share the final biodata.</p><Link href={`/create?community=${page.slug}&template=${page.template}`} className="btn-primary mt-5 inline-flex">Create this {page.name} biodata</Link></div>
        <article><h2 className="font-display text-2xl sm:text-3xl">Related guides</h2><div className="mt-4 flex flex-wrap gap-3">{page.related.map((r)=><Link key={r.href} href={r.href} className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm hover:border-[#B8893B]">{r.label}</Link>)}</div></article>
      </section>
      <AEOBlock faqs={faqs} title="Frequently asked questions" ctaHref={`/create?community=${page.slug}&template=${page.template}`} ctaText={`Create ${page.name} biodata`} />
    </main>
  </>;
}
