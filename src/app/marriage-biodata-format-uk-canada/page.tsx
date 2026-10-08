import { buildMetadata, getSitePage } from '@/lib/seo';
import { NriLandingPage, type NriPageConfig } from '@/components/seo/NriLandingPage';

const sitePage = getSitePage('/marriage-biodata-format-uk-canada');

export const metadata = buildMetadata({ title: sitePage.title, description: sitePage.description, path: sitePage.path, type: sitePage.type });

const pageConfig: NriPageConfig = {
  path: '/marriage-biodata-format-uk-canada',
  title: 'Marriage Biodata Format for Indians in UK & Canada',
  eyebrow: 'UK and Canada NRI marriage biodata',
  intro: 'For Indians living in the UK or Canada, a useful marriage biodata should bridge two contexts: the person’s current life abroad and the family background that matters to the introduction. This format keeps those details separate and easy to scan rather than copying a generic NRI template.',
  countryLabel: 'Name the current country and city clearly',
  countryBody: 'Start with the current city and country, such as London, UK or Toronto, Canada. A city is generally enough for an initial biodata; a complete home address is unnecessary. Keep the Indian native place or family base elsewhere in the biodata so readers can understand both current location and family connection without mixing the two.',
  residencyBody: 'For the UK, a concise status such as British citizen, settled status, ILR or current visa category can be useful when accurate. For Canada, citizenship, permanent residence or a current permit may be relevant. Use the status you currently hold rather than describing a hoped-for future outcome. Sensitive document numbers should never be part of the biodata.',
  relocationBody: 'UK and Canada matches can involve different expectations about where a couple will live. Instead of a vague “looking for a suitable match,” say whether you prefer to remain abroad, are open to India, or are flexible about location. If the answer depends on career or family circumstances, say that it can be discussed.',
  moneyBody: 'Mention your occupation and broad industry first. If you include compensation, use GBP for the UK or CAD for Canada and optionally add a clearly approximate INR equivalent. Avoid excessive salary detail, employer-confidential information and exchange-rate precision that can quickly become outdated.',
  familyBody: 'Family information can remain similar to a standard Indian biodata: parents, siblings, native place, education and values. The overseas section should add context, not replace the family introduction. If you have a strong connection to India through regular visits or family responsibilities, mention it only if it helps explain your expectations.',
  checklist: ['Current UK or Canada city', 'Accurate residency or citizenship status', 'Occupation and broad industry', 'Relocation or India-return preference', 'Indian native place and family context', 'Private contact details shared only when appropriate'],
  faqs: [
    { question: 'What is different about a UK or Canada marriage biodata?', answer: 'The core biodata remains Indian in structure, but it should add the current country and city, accurate residency or citizenship status, overseas work context and a clear relocation preference when relevant.' },
    { question: 'Should I write UK or Canada residency status?', answer: 'It can be useful when families need that practical context. Keep it brief and accurate, and never include visa or immigration document numbers.' },
    { question: 'Should I list salary in GBP or CAD and INR?', answer: 'The local currency is usually the clearest starting point. An approximate INR reference can be added if useful, but it should be labelled approximate.' },
    { question: 'Can I make this biodata without creating an account?', answer: 'Yes. The builder is designed for no-login creation and lets you turn NRI fields on only when you need them.' },
  ],
};

export default function Page() { return <NriLandingPage page={pageConfig} />; }
