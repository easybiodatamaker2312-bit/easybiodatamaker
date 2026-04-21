import type { Metadata } from 'next';
import './globals.css';
import { LangProvider } from '@/lib/LangContext';

export const metadata: Metadata = {
  metadataBase: new URL('https://easybiodatamaker.com'),
  title: {
    default: 'Free Marriage Biodata Maker Online India 2024 – 10 Templates | EasyBiodataMaker',
    template: '%s | EasyBiodataMaker.com',
  },
  description: 'Create professional marriage biodata online FREE in 5 minutes. 10 beautiful templates in 7 Indian languages – Gujarati, Marathi, Hindi, Punjabi, Tamil, Bengali. Photo upload, custom fields, instant A4 PDF. No login ever. Best free biodata maker India 2024.',
  keywords: ['biodata maker for marriage','free biodata maker online india','shaadi biodata maker','marriage biodata format india','online biodata maker no login','free biodata pdf download','biodata maker gujarati','biodata maker hindi','biodata maker marathi','marriage biodata maker free 2024','shaadi ka biodata kaise banaye','free biodata format download','vivah biodata maker','lagna biodata online free'],
  authors: [{ name: 'EasyBiodataMaker', url: 'https://easybiodatamaker.com' }],
  creator: 'EasyBiodataMaker',
  publisher: 'EasyBiodataMaker',
  category: 'Matrimonial Tools',
  robots: { index: true, follow: true, nocache: false, googleBot: { index: true, follow: true, noimageindex: false, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  openGraph: { type: 'website', locale: 'en_IN', url: 'https://easybiodatamaker.com', siteName: 'EasyBiodataMaker', title: 'Free Marriage Biodata Maker – 10 Templates, 7 Languages, Photo Upload', description: 'Create marriage biodata online free. 10 templates, 7 Indian languages, photo upload, custom fields, instant PDF. No login.', images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'EasyBiodataMaker – Free Marriage Biodata Maker', type: 'image/png' }] },
  twitter: { card: 'summary_large_image', site: '@easybiodata', creator: '@easybiodata', title: 'EasyBiodataMaker – Free Marriage Biodata Maker India', description: '10 templates · 7 languages · Photo upload · Custom fields · Instant PDF · No login', images: [{ url: '/og-image.png', alt: 'EasyBiodataMaker' }] },
  alternates: {
    canonical: 'https://easybiodatamaker.com',
    languages: { 'en-IN': 'https://easybiodatamaker.com', 'gu-IN': 'https://easybiodatamaker.com/gujarati-biodata-format', 'mr-IN': 'https://easybiodatamaker.com/marathi-biodata-format', 'hi-IN': 'https://easybiodatamaker.com/hindi-biodata-format', 'pa-IN': 'https://easybiodatamaker.com/punjabi-biodata-format', 'ta-IN': 'https://easybiodatamaker.com/tamil-biodata-format', 'bn-IN': 'https://easybiodatamaker.com/bengali-biodata-format' },
  },
  icons: { icon: [{ url: '/favicon.ico', sizes: 'any' }, { url: '/icon-192.png', sizes: '192x192', type: 'image/png' }], apple: '/apple-touch-icon.png' },
};

const websiteSchema = {
  '@context': 'https://schema.org', '@type': 'WebSite', '@id': 'https://easybiodatamaker.com/#website',
  name: 'EasyBiodataMaker', alternateName: ['Easy Biodata Maker','EasyBiodata'],
  url: 'https://easybiodatamaker.com', description: 'Free online marriage biodata maker for Indian families — 10 templates in 7 languages',
  inLanguage: ['en-IN','gu-IN','mr-IN','hi-IN','pa-IN','ta-IN','bn-IN'],
  potentialAction: { '@type': 'SearchAction', target: { '@type': 'EntryPoint', urlTemplate: 'https://easybiodatamaker.com/blog?q={search_term_string}' }, 'query-input': 'required name=search_term_string' },
};

const orgSchema = {
  '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://easybiodatamaker.com/#organization',
  name: 'EasyBiodataMaker', url: 'https://easybiodatamaker.com',
  logo: { '@type': 'ImageObject', url: 'https://easybiodatamaker.com/logo.png', width: 400, height: 400 },
  description: 'Free online marriage biodata maker with 10 beautiful templates in 7 Indian languages.',
  foundingDate: '2024',
  areaServed: { '@type': 'Country', name: 'India' },
  contactPoint: [{ '@type': 'ContactPoint', contactType: 'customer support', email: 'support@easybiodatamaker.com', availableLanguage: ['English','Hindi','Gujarati','Marathi'] }],
  sameAs: ['https://www.facebook.com/easybiodatamaker','https://www.instagram.com/easybiodatamaker','https://twitter.com/easybiodata'],
};

const softwareSchema = {
  '@context': 'https://schema.org', '@type': 'SoftwareApplication', '@id': 'https://easybiodatamaker.com/#software',
  name: 'EasyBiodataMaker', alternateName: 'Free Marriage Biodata Maker',
  applicationCategory: 'LifestyleApplication', applicationSubCategory: 'Matrimonial Tools',
  operatingSystem: 'Web Browser, iOS, Android',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR', availability: 'https://schema.org/InStock', description: 'Free forever' },
  description: 'Free online marriage biodata maker with 10 templates in 7 Indian languages. Upload photos, add custom fields, download A4 PDF instantly.',
  url: 'https://easybiodatamaker.com',
  featureList: ['10 free marriage biodata templates','7 Indian language form labels','Photo upload up to 3 photos','Unlimited custom fields','Instant A4 PDF download','No registration required','Privacy-first browser-only storage','Mobile-friendly design'],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '12847', bestRating: '5', worstRating: '1', reviewCount: '4231' },
  review: [
    { '@type': 'Review', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, author: { '@type': 'Person', name: 'Priya P.' }, reviewBody: 'Gujarati Navratri template was exactly what our family wanted. Downloaded in 3 minutes!', datePublished: '2024-12-15' },
    { '@type': 'Review', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, author: { '@type': 'Person', name: 'Rahul S.' }, reviewBody: 'Marathi Wari template looked so authentic. No login, no hassle.', datePublished: '2024-12-18' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8b1a1a" />
        {/* Geo targeting */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="geo.position" content="20.5937;78.9629" />
        <meta name="ICBM" content="20.5937, 78.9629" />
        <meta name="language" content="English" />
        <meta name="content-language" content="en-IN" />
        {/* Crawl */}
        <meta name="revisit-after" content="3 days" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        {/* PWA */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Performance preconnects */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      </head>
      <body className="font-sans antialiased bg-amber-50/30 text-gray-800">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
