import { buildMetadata, getSitePage } from '@/lib/seo';
import { NriLandingPage, type NriPageConfig } from '@/components/seo/NriLandingPage';

const sitePage = getSitePage('/indian-marriage-biodata-maker-usa');

export const metadata = buildMetadata({ title: sitePage.title, description: sitePage.description, path: sitePage.path, type: sitePage.type });

const pageConfig: NriPageConfig = {
  path: '/indian-marriage-biodata-maker-usa',
  title: 'Indian Marriage Biodata Maker for USA',
  eyebrow: 'USA NRI marriage biodata format',
  intro: 'A USA-based Indian marriage biodata needs enough overseas context to make a first introduction useful, without turning the profile into a visa or résumé document. This format focuses on the details families commonly need to understand location, residency, work and relocation expectations.',
  countryLabel: 'Make the USA location easy to understand',
  countryBody: 'Write the city and state where you currently live, followed by the country. If your work involves frequent moves, use the current location rather than listing every previous city. You can also keep your Indian native city or family roots in the biodata so the profile gives both sides of the family useful geographic context. Avoid publishing a full residential address when a city and state are enough for an initial introduction.',
  residencyBody: 'A simple status such as US citizen, permanent resident, H-1B, F-1/OPT or another current status can answer an important practical question. Use the status that is actually current, and avoid making promises about future immigration outcomes. If a status is temporary or changing, a short accurate note is better than a vague phrase such as “settled in USA.”',
  relocationBody: 'State relocation expectations plainly. Examples include “open to returning to India,” “comfortable with a partner relocating to the USA,” or “location preference can be discussed.” The right wording depends on the person and family. The goal is to reduce ambiguity, not to make a demand before a conversation has started.',
  moneyBody: 'For work, mention role, industry and city where useful. Income can be shown in USD if you choose to share it; an approximate INR reference can help Indian readers but should be clearly labelled as approximate. Avoid presenting currency conversion as an exact or permanent figure because exchange rates change.',
  familyBody: 'An overseas biodata still benefits from a concise family introduction. Mention parents, siblings and family location only to the level you are comfortable sharing. If you visit India regularly, you may mention that as part of family connection. Do not add passport numbers, visa documents, employer confidential information or a full home address to a public-facing biodata.',
  checklist: ['Current USA city and state', 'Current visa, residency or citizenship status', 'Role and broad work location', 'Relocation or return-to-India preference', 'Indian native place or family roots', 'Only the contact details you want to share'],
  faqs: [
    { question: 'What should an Indian in the USA include in a marriage biodata?', answer: 'Include the current USA location, work or education, current residency or citizenship status, Indian family roots, and a clear but flexible note about relocation or return plans when relevant.' },
    { question: 'Should I mention my US visa status?', answer: 'If it is useful to the families considering the match, yes. State the current status accurately and briefly. Do not publish visa document numbers or other sensitive identifiers.' },
    { question: 'Should USA income be converted to INR?', answer: 'You can show the income in USD and optionally add an approximate INR reference. Label conversions as approximate because exchange rates change.' },
    { question: 'Can I create the USA NRI biodata without an account?', answer: 'Yes. The NRI builder opens without a login and the overseas fields are optional.' },
  ],
};

export default function Page() { return <NriLandingPage page={pageConfig} />; }
