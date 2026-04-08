import type { Metadata } from 'next';
import { Poppins, Playfair_Display } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://easybiodatamaker.com'),
  title: {
    default: 'EasyBiodataMaker – Free Marriage Biodata Maker Online',
    template: '%s | EasyBiodataMaker',
  },
  description:
    'Create beautiful marriage biodata online for free. Download instantly as PDF. No login required. Best biodata maker for Indian marriage – supports all religions & communities.',
  keywords: [
    'biodata maker for marriage',
    'marriage biodata format India',
    'free biodata maker online',
    'biodata maker',
    'marriage resume format',
    'shadi biodata maker',
    'hindu biodata format',
    'biodata download PDF',
    'marriage biodata template',
    'shaadi biodata',
  ],
  authors: [{ name: 'EasyBiodataMaker' }],
  creator: 'EasyBiodataMaker',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://easybiodatamaker.com',
    siteName: 'EasyBiodataMaker',
    title: 'EasyBiodataMaker – Free Marriage Biodata Maker Online',
    description:
      'Create beautiful marriage biodata for free. Download as PDF instantly. No login required.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'EasyBiodataMaker' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EasyBiodataMaker – Free Marriage Biodata Maker',
    description: 'Create beautiful marriage biodata online for free.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'EasyBiodataMaker',
  url: 'https://easybiodatamaker.com',
  description: 'Free online marriage biodata maker for Indian families',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://easybiodatamaker.com/blog?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'EasyBiodataMaker',
  applicationCategory: 'LifestyleApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
  description: 'Free online marriage biodata maker for Indian families',
  url: 'https://easybiodatamaker.com',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '10000',
    bestRating: '5',
    worstRating: '1',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${poppins.variable} ${playfair.variable}`}>
      <head>
        <meta name="theme-color" content="#8b1a1a" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      </head>
      <body className="font-sans antialiased bg-amber-50/30 text-gray-800">
        {children}
      </body>
    </html>
  );
}
