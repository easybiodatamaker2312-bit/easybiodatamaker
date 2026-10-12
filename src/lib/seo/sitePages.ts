export type SitePageType = 'website' | 'article';

export interface SitePageConfig {
  path: string;
  title: string;
  description: string;
  type?: SitePageType;
  updatedAt: string;
}

// These dates reflect the metadata/content changes made in this release.
export const SITE_PAGES: SitePageConfig[] = [
  { path: '/', title: 'Marriage Biodata Maker Online | EasyBiodataMaker', description: 'Create an Indian marriage biodata online with A4 templates, photos and export options. Free to use, privacy-first and no login required for the builder.', updatedAt: '2026-10-11' },
  { path: '/templates', title: 'Marriage Biodata Templates | EasyBiodataMaker', description: 'Browse marriage biodata templates for Indian families, with printable A4 layouts, photos, custom fields and language-aware styling.', updatedAt: '2026-10-11' },
  { path: '/marriage-biodata-guides', title: 'Marriage Biodata Guides | Formats & Maker Help', description: 'Explore practical guides for marriage biodata formats, writing, PDF and Word export, photos, community fields, mobile use and sharing.', updatedAt: '2026-10-08' },
  { path: '/marriage-biodata-formats-by-community', title: 'Marriage Biodata Formats by Community', description: 'Explore marriage biodata formats for Gujarati, Marathi, Hindi, Punjabi, Tamil, Telugu, Bengali, Kannada, Jain, Muslim, Sikh, Christian and Rajasthani homes.', updatedAt: '2026-10-09' },
  { path: '/marriage-biodata-format-word', title: 'Marriage Biodata Format in Word | Free Maker', description: 'Create a marriage biodata and download an editable Word document with A4 layout and selectable text. No login required for the builder.', updatedAt: '2026-10-11' },
  { path: '/indian-marriage-biodata-maker-usa', title: 'Indian Marriage Biodata Maker USA | NRI', description: 'Create an Indian marriage biodata for USA-based NRIs with country, residency, relocation and overseas details. Free, no login.', updatedAt: '2026-10-10' },
  { path: '/marriage-biodata-format-uk-canada', title: 'Marriage Biodata Format UK & Canada | NRI', description: 'Create an Indian marriage biodata for UK or Canada with location, residency, relocation and overseas work details. Free, no login.', updatedAt: '2026-10-06' },
  { path: '/biodata-for-marriage-girl', title: "Girl's Marriage Biodata | Format & Guide", description: 'Create a marriage biodata for a girl with personal, family, education and career details, plus a photo and respectful expectations section.', updatedAt: '2026-10-11' },
  { path: '/biodata-for-marriage-boy', title: "Boy's Marriage Biodata | Format & Guide", description: 'Create a marriage biodata for a boy with personal, family, education and career details, plus a photo and clear expectations section.', updatedAt: '2026-10-11' },
  { path: '/hindu-marriage-biodata-format', title: 'Hindu Marriage Biodata Format | Gotra & Kundali', description: 'Create a Hindu marriage biodata with optional gotra, manglik, birth, family, education and career fields for families that use these details.', updatedAt: '2026-10-11' },
  { path: '/blog', title: 'Marriage Biodata Blog | Tips & Practical Guides', description: 'Read practical marriage biodata guides covering writing, formats, community fields, partner expectations, common mistakes and NRI profiles.', updatedAt: '2026-10-09' },
  { path: '/blog/how-to-write-biodata-for-marriage', title: 'How to Write a Marriage Biodata | Guide', description: 'Learn how to write a clear Indian marriage biodata with practical examples for personal details, family, education, career and expectations.', type: 'article', updatedAt: '2026-10-05' },
  { path: '/blog/marriage-biodata-format-india', title: 'Marriage Biodata Format in India | Guide', description: 'Understand what to include in an Indian marriage biodata, what to keep optional and how to make each section easy for families to read.', type: 'article', updatedAt: '2026-10-09' },
  { path: '/blog/what-to-write-in-partner-expectations', title: 'Partner Expectations in Biodata | Examples', description: 'Learn how to write respectful partner expectations in a marriage biodata with practical examples focused on values, location and life goals.', type: 'article', updatedAt: '2026-10-08' },
  { path: '/blog/biodata-mistakes-to-avoid', title: 'Marriage Biodata Mistakes to Avoid | Guide', description: 'Avoid common marriage biodata mistakes involving personal details, photos, family information, expectations, privacy and outdated profile facts.', type: 'article', updatedAt: '2026-10-04' },
  { path: '/blog/free-biodata-maker-vs-word-template', title: 'Biodata Maker vs Word Template | Comparison', description: 'Compare an online marriage biodata maker with a Word template for editing, layout consistency, mobile use, privacy and final sharing.', type: 'article', updatedAt: '2026-10-09' },
  { path: '/blog/nri-marriage-biodata-guide', title: 'NRI Marriage Biodata Guide | Indians Abroad', description: 'Learn what NRIs can include in a marriage biodata, including country, residency, relocation plans, career details and safe contact information.', type: 'article', updatedAt: '2026-10-06' },
  { path: '/blog/intercaste-marriage-biodata', title: 'Inter-Caste Marriage Biodata | Writing Guide', description: 'Learn how to state an open-to-community or inter-caste preference clearly in a marriage biodata without making the profile feel demanding.', type: 'article', updatedAt: '2026-10-05' },
  { path: '/blog/second-marriage-biodata-guide', title: 'Second Marriage Biodata | Sensitive Writing Guide', description: 'Learn how to write a second-marriage biodata with honest details about previous marriage history, children, family and future expectations.', type: 'article', updatedAt: '2026-10-05' },
  { path: '/faq', title: 'Marriage Biodata FAQ | Honest Answers', description: 'Get clear answers about marriage biodata fields, length, photos, templates, community details, NRI profiles, sharing and privacy.', updatedAt: '2026-10-06' },
  { path: '/about', title: 'About EasyBiodataMaker | Marriage Biodata Tool', description: 'Learn what EasyBiodataMaker does, how the browser-based tool is designed and what privacy principles guide the marriage biodata product.', updatedAt: '2026-10-09' },
  { path: '/contact', title: 'Contact EasyBiodataMaker | Support', description: 'Contact EasyBiodataMaker for product support, feedback or questions about creating and sharing a marriage biodata online.', updatedAt: '2026-10-08' },
  { path: '/privacy-policy', title: 'Privacy Policy | EasyBiodataMaker', description: 'Read the EasyBiodataMaker privacy policy to understand browser storage, personal information, exports and how the marriage biodata tool handles data.', updatedAt: '2026-10-06' },
  { path: '/disclaimer', title: 'Disclaimer | EasyBiodataMaker', description: 'Read the EasyBiodataMaker disclaimer covering the free marriage biodata tool, user-provided information, exports and general product limitations.', updatedAt: '2026-10-05' },
  { path: '/terms-of-service', title: 'Terms of Service | EasyBiodataMaker', description: 'Read the terms for using EasyBiodataMaker, including acceptable use, user-provided content, exports, privacy and general service limitations.', updatedAt: '2026-10-10' },
  { path: "/blog/gotra-kya-hota-hai-biodata-mein", title: "Gotra Kya Hota Hai Biodata Mein? A Practical Guide", description: "Understand how gotra may be included in a marriage biodata, where to place it, and how to avoid assumptions or unverified family details.", type: 'article', updatedAt: '2026-10-11' },
  { path: "/blog/manglik-kya-hota-hai", title: "Manglik Kya Hota Hai? Biodata Mein Kaise Likhen", description: "A careful Hindi guide to describing Manglik status in a marriage biodata, verifying family horoscope details and using neutral wording.", type: 'article', updatedAt: '2026-10-11' },
  { path: "/blog/shaadi-ka-biodata-kaise-banaye", title: "Shaadi Ka Biodata Kaise Banaye: A Simple Hinglish Guide", description: "Follow practical steps to make a clear marriage biodata with accurate personal, family, education, career and expectations details.", type: 'article', updatedAt: '2026-10-11' },
  { path: "/blog/biodata-photo-tips", title: "Marriage Biodata Photo Tips: Choose and Prepare a Good Portrait", description: "Choose a current, clear biodata photo, crop it for print and mobile, and share it with privacy in mind.", type: 'article', updatedAt: '2026-10-11' },
  { path: "/blog/marriage-biodata-sample-girl-boy", title: "Marriage Biodata Samples for Girl and Boy", description: "Review fictional bride and groom biodata samples and adapt the structure to accurate details and personal preferences.", type: 'article', updatedAt: '2026-10-11' },
  { path: "/blog/mumbai-marriage-biodata", title: "Marriage Biodata in Mumbai: A Practical City-Based Guide", description: "Present current city, family roots, career and relocation preferences clearly in a marriage biodata for Mumbai-based candidates.", type: 'article', updatedAt: '2026-10-11' },
  { path: "/marriage-biodata-samples", title: "Marriage Biodata Samples for Boy, Girl, Doctor & More", description: "Explore eight fictional marriage biodata samples for different careers and life situations, then adapt a premium template.", type: 'website', updatedAt: '2026-10-11' },
  { path: "/blog/what-is-biodata-for-marriage", title: "What Is Biodata for Marriage? Meaning and Examples", description: "Understand marriage biodata, what to include, and how it differs from a resume or matrimonial profile.", type: 'article', updatedAt: '2026-10-11' },
  { path: "/blog/should-you-mention-income-in-marriage-biodata", title: "Should You Mention Income in a Marriage Biodata?", description: "Learn when income may be useful in a marriage biodata, how to word it accurately, and which financial details to keep private.", type: 'article', updatedAt: '2026-10-11' },
  { path: "/blog/rashi-nakshatra-in-marriage-biodata", title: "Rashi and Nakshatra in a Marriage Biodata", description: "Learn when rashi and nakshatra fields may be relevant, how to verify them, and how to share traditional details carefully.", type: 'article', updatedAt: '2026-10-11' },
  { path: "/blog/how-to-write-height-complexion-diet-in-biodata", title: "Height, Complexion and Diet in a Marriage Biodata", description: "Use accurate, respectful wording for height, complexion and diet without discriminatory labels or unnecessary personal details.", type: 'article', updatedAt: '2026-10-11' },
  { path: "/blog/how-to-share-marriage-biodata-on-whatsapp-safely", title: "How to Share a Marriage Biodata on WhatsApp Safely", description: "Review practical privacy steps for sharing a biodata on WhatsApp, including what to hide and how to choose recipients.", type: 'article', updatedAt: '2026-10-11' },
  { path: "/tools/about-me-generator", title: "About Me Generator for Marriage Biodata", description: "Create an editable about-me paragraph for a marriage biodata from a few personal inputs. Free to use, no login required.", type: 'website', updatedAt: '2026-10-11' },
  { path: "/tools/partner-expectations-generator", title: "Partner Expectations Generator for Marriage Biodata", description: "Draft respectful partner expectations for a marriage biodata with editable wording about values, location and shared goals.", type: 'website', updatedAt: '2026-10-11' },
];

export function getSitePage(path: string) {
  const page = SITE_PAGES.find((item) => item.path === path);
  if (!page) throw new Error(`Missing site page config for ${path}`);
  return page;
}
