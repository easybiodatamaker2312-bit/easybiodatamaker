// TODO: needs native-speaker review before publish — localized Hindi, Gujarati and Marathi copy below.
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
  const localizedHeading: Record<string, string> = {
    gujarati: 'ગુજરાતી લગ્ન બાયોડેટા ફોર્મેટ',
    marathi: 'मराठी विवाह बायोडाटा फॉरमॅट',
    hindi: 'हिंदी विवाह बायोडाटा फॉर्मेट',
  };
  const localizedQuickAnswer: Record<string, string> = {
    gujarati: 'સારી રીતે ગોઠવેલા બાયોડેટામાં વ્યક્તિગત વિગતો, પરિવાર, શિક્ષણ, વ્યવસાય અને અપેક્ષાઓનો સમાવેશ થાય છે. ગોત્ર અથવા ગામ જેવી પરંપરાગત વિગતો તમારા પરિવાર માટે જરૂરી હોય ત્યારે જ ઉમેરો.',
    marathi: 'चांगल्या विवाह बायोडाट्यात वैयक्तिक माहिती, कुटुंब, शिक्षण, व्यवसाय आणि अपेक्षा स्पष्टपणे असतात. गोत्र किंवा कुलदैवतासारखी पारंपरिक माहिती कुटुंबासाठी महत्त्वाची असेल तेव्हाच जोडा.',
    hindi: 'एक उपयोगी विवाह बायोडाटा व्यक्तिगत जानकारी, परिवार, शिक्षा, करियर और अपेक्षाओं को स्पष्ट रूप से रखता है। गोत्र या कुंडली जैसी पारंपरिक जानकारी तभी जोड़ें जब वह आपके परिवार के लिए प्रासंगिक और सत्यापित हो।',
  };
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
    <section className="mx-auto mt-10 max-w-5xl px-5 sm:px-8" aria-labelledby="community-filled-sample">
      <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[.16em] text-amber-700">Fictional example</p>
        <h2 id="community-filled-sample" className="mt-2 font-display text-2xl font-semibold">A filled {page.name} biodata example</h2>
        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          {[
            ['Name', data.fullName], ['Age', '29'], ['Current city', data.city], ['Education', data.highestQualification],
            ['Occupation', data.occupation], ['Family', `${data.fatherName} and ${data.motherName}`],
            ['About', data.aboutMe], ['Expectations', data.expectations],
          ].map(([label, value]) => <p key={label} className="rounded-xl border border-stone-100 bg-[#FFFCF7] p-3 text-sm leading-6"><strong>{label}:</strong> {value}</p>)}
        </div>
        <p className="mt-4 text-xs leading-6 text-stone-500">This example uses fictional details. Replace them with verified information, omit fields that do not apply, and do not circulate private contact details widely.</p>
      </div>
    </section>
    <main lang={page.lang === 'en' ? 'en' : `${page.lang}-IN`} className="min-h-screen bg-[var(--ivory,#FBF7F0)] text-stone-900">
      <Breadcrumbs items={[{label:'Home',href:'/'},{label:'Formats by community',href:'/marriage-biodata-formats-by-community'},{label:page.name}]} schemaPath={page.path} />
      <section className="border-b border-stone-200 bg-white px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-[1.05fr_.95fr] items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[.18em] text-[#B8893B]">{page.nativeName} · Marriage Biodata</p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl text-[#1C1917]">{localizedHeading[page.slug] ?? `${page.name} Marriage Biodata Format`}</h1>
            <p className="mt-5 max-w-2xl text-base sm:text-lg leading-8 text-stone-600">{page.intro}</p>
            {localizedQuickAnswer[page.slug] ? <div className="mt-5 rounded-2xl border border-amber-100 bg-[#FFFCF7] p-4"><p className="text-xs font-semibold uppercase tracking-wide text-amber-800">{page.lang === 'hi' ? 'संक्षिप्त उत्तर' : page.lang === 'mr' ? 'थोडक्यात उत्तर' : 'ઝડપી જવાબ'}</p><p className="mt-2 text-sm leading-7 text-stone-700">{localizedQuickAnswer[page.slug]}</p></div> : null}
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
