import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import { LangProvider } from '@/lib/LangContext';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';

const inter = localFont({ src: [
  { path: '../../public/fonts/premium/latin/Inter-Regular.woff2', weight: '400' },
  { path: '../../public/fonts/premium/latin/Inter-Medium.woff2', weight: '500' },
  { path: '../../public/fonts/premium/latin/Inter-SemiBold.woff2', weight: '600' },
  { path: '../../public/fonts/premium/latin/Inter-Bold.woff2', weight: '700' },
], variable: '--font-ui', display: 'swap' });

const display = localFont({
  src: '../../public/fonts/premium/latin/NotoSerifDisplay-Regular.woff2',
  variable: '--font-display',
  display: 'swap',
});



const devanagariSans = localFont({
  preload: false,
  src: [{ path: '../../public/fonts/indic/woff2/NotoSansDevanagari-400.woff2', weight: '400' }, { path: '../../public/fonts/indic/woff2/NotoSansDevanagari-600.woff2', weight: '600' }, { path: '../../public/fonts/indic/woff2/NotoSansDevanagari-700.woff2', weight: '700' },],
  variable: '--font-devanagari-sans',
  display: 'swap',
});

const devanagariSerif = localFont({
  preload: false,
  src: [{ path: '../../public/fonts/indic/woff2/NotoSerifDevanagari-400.woff2', weight: '400' }, { path: '../../public/fonts/indic/woff2/NotoSerifDevanagari-600.woff2', weight: '600' }, { path: '../../public/fonts/indic/woff2/NotoSerifDevanagari-700.woff2', weight: '700' },],
  variable: '--font-devanagari-serif',
  display: 'swap',
});

const gujaratiSans = localFont({
  preload: false,
  src: [{ path: '../../public/fonts/indic/woff2/NotoSansGujarati-400.woff2', weight: '400' }, { path: '../../public/fonts/indic/woff2/NotoSansGujarati-600.woff2', weight: '600' }, { path: '../../public/fonts/indic/woff2/NotoSansGujarati-700.woff2', weight: '700' },],
  variable: '--font-gujarati-sans',
  display: 'swap',
});

const gujaratiSerif = localFont({
  preload: false,
  src: [{ path: '../../public/fonts/indic/woff2/NotoSerifGujarati-400.woff2', weight: '400' }, { path: '../../public/fonts/indic/woff2/NotoSerifGujarati-600.woff2', weight: '600' }, { path: '../../public/fonts/indic/woff2/NotoSerifGujarati-700.woff2', weight: '700' },],
  variable: '--font-gujarati-serif',
  display: 'swap',
});

const tamilSans = localFont({
  preload: false,
  src: [{ path: '../../public/fonts/indic/woff2/NotoSansTamil-400.woff2', weight: '400' }, { path: '../../public/fonts/indic/woff2/NotoSansTamil-600.woff2', weight: '600' }, { path: '../../public/fonts/indic/woff2/NotoSansTamil-700.woff2', weight: '700' },],
  variable: '--font-tamil-sans',
  display: 'swap',
});

const tamilSerif = localFont({
  preload: false,
  src: [{ path: '../../public/fonts/indic/woff2/NotoSerifTamil-400.woff2', weight: '400' }, { path: '../../public/fonts/indic/woff2/NotoSerifTamil-600.woff2', weight: '600' }, { path: '../../public/fonts/indic/woff2/NotoSerifTamil-700.woff2', weight: '700' },],
  variable: '--font-tamil-serif',
  display: 'swap',
});

const bengaliSans = localFont({
  preload: false,
  src: [{ path: '../../public/fonts/indic/woff2/NotoSansBengali-400.woff2', weight: '400' }, { path: '../../public/fonts/indic/woff2/NotoSansBengali-600.woff2', weight: '600' }, { path: '../../public/fonts/indic/woff2/NotoSansBengali-700.woff2', weight: '700' },],
  variable: '--font-bengali-sans',
  display: 'swap',
});

const bengaliSerif = localFont({
  preload: false,
  src: [{ path: '../../public/fonts/indic/woff2/NotoSerifBengali-400.woff2', weight: '400' }, { path: '../../public/fonts/indic/woff2/NotoSerifBengali-600.woff2', weight: '600' }, { path: '../../public/fonts/indic/woff2/NotoSerifBengali-700.woff2', weight: '700' },],
  variable: '--font-bengali-serif',
  display: 'swap',
});

const gurmukhiSans = localFont({
  preload: false,
  src: [{ path: '../../public/fonts/indic/woff2/NotoSansGurmukhi-400.woff2', weight: '400' }, { path: '../../public/fonts/indic/woff2/NotoSansGurmukhi-600.woff2', weight: '600' }, { path: '../../public/fonts/indic/woff2/NotoSansGurmukhi-700.woff2', weight: '700' },],
  variable: '--font-gurmukhi-sans',
  display: 'swap',
});

const gurmukhiSerif = localFont({
  preload: false,
  src: [{ path: '../../public/fonts/indic/woff2/NotoSerifGurmukhi-400.woff2', weight: '400' }, { path: '../../public/fonts/indic/woff2/NotoSerifGurmukhi-600.woff2', weight: '600' }, { path: '../../public/fonts/indic/woff2/NotoSerifGurmukhi-700.woff2', weight: '700' },],
  variable: '--font-gurmukhi-serif',
  display: 'swap',
});

const kannadaSans = localFont({
  preload: false,
  src: [{ path: '../../public/fonts/indic/woff2/NotoSansKannada-400.woff2', weight: '400' }, { path: '../../public/fonts/indic/woff2/NotoSansKannada-600.woff2', weight: '600' }, { path: '../../public/fonts/indic/woff2/NotoSansKannada-700.woff2', weight: '700' },],
  variable: '--font-kannada-sans',
  display: 'swap',
});

const kannadaSerif = localFont({
  preload: false,
  src: [{ path: '../../public/fonts/indic/woff2/NotoSerifKannada-400.woff2', weight: '400' }, { path: '../../public/fonts/indic/woff2/NotoSerifKannada-600.woff2', weight: '600' }, { path: '../../public/fonts/indic/woff2/NotoSerifKannada-700.woff2', weight: '700' },],
  variable: '--font-kannada-serif',
  display: 'swap',
});

const teluguSans = localFont({
  preload: false,
  src: [{ path: '../../public/fonts/indic/woff2/NotoSansTelugu-400.woff2', weight: '400' }, { path: '../../public/fonts/indic/woff2/NotoSansTelugu-600.woff2', weight: '600' }, { path: '../../public/fonts/indic/woff2/NotoSansTelugu-700.woff2', weight: '700' },],
  variable: '--font-telugu-sans',
  display: 'swap',
});

const teluguSerif = localFont({
  preload: false,
  src: [{ path: '../../public/fonts/indic/woff2/NotoSerifTelugu-400.woff2', weight: '400' }, { path: '../../public/fonts/indic/woff2/NotoSerifTelugu-600.woff2', weight: '600' }, { path: '../../public/fonts/indic/woff2/NotoSerifTelugu-700.woff2', weight: '700' },],
  variable: '--font-telugu-serif',
  display: 'swap',
});

const indicFonts = {
  devanagariSans,
  devanagariSerif,
  gujaratiSans,
  gujaratiSerif,
  tamilSans,
  tamilSerif,
  bengaliSans,
  bengaliSerif,
  gurmukhiSans,
  gurmukhiSerif,
  kannadaSans,
  kannadaSerif,
  teluguSans,
  teluguSerif,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://easybiodatamaker.com'),
  title: {
    default: 'Marriage Biodata Maker Online | EasyBiodataMaker',
    template: '%s | EasyBiodataMaker.com',
  },
  description: 'Create an Indian marriage biodata online with A4 templates, photos and export options. Free to use, privacy-first and no login required for the builder.',
  keywords: ['biodata maker for marriage','free biodata maker online india','shaadi biodata maker','marriage biodata format india','online biodata maker no login','free biodata pdf download','biodata maker gujarati','biodata maker hindi','biodata maker marathi','shaadi ka biodata kaise banaye','free biodata format download','vivah biodata maker','lagna biodata online free'],
  authors: [{ name: 'EasyBiodataMaker', url: 'https://easybiodatamaker.com' }],
  creator: 'EasyBiodataMaker',
  publisher: 'EasyBiodataMaker',
  category: 'Matrimonial Tools',
  robots: { index: true, follow: true, nocache: false, googleBot: { index: true, follow: true, noimageindex: false, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  openGraph: { type: 'website', locale: 'en_IN', url: 'https://easybiodatamaker.com', siteName: 'EasyBiodataMaker', title: 'Free Marriage Biodata Maker – Premium Templates, 9 Indian Languages, Photo Upload', description: 'Create marriage biodata online free. premium templates, 9 Indian languages, photo upload, A4 PDF. No login.', images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'EasyBiodataMaker – Free Marriage Biodata Maker', type: 'image/png' }] },
  twitter: { card: 'summary_large_image', site: '@easybiodata', creator: '@easybiodata', title: 'EasyBiodataMaker – Free Marriage Biodata Maker India', description: 'premium templates · 9 Indian languages · Photo upload · Custom fields · Instant PDF · No login', images: [{ url: '/og-image.png', alt: 'EasyBiodataMaker' }] },
  alternates: { canonical: 'https://easybiodatamaker.com' },
  verification: { google: process.env.NEXT_PUBLIC_GSC_TOKEN },
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }, { url: '/icon-192.png', sizes: '192x192', type: 'image/png' }], apple: '/apple-touch-icon.png' },
};

const websiteSchema = {
  '@context': 'https://schema.org', '@type': 'WebSite', '@id': 'https://easybiodatamaker.com/#website',
  name: 'EasyBiodataMaker', alternateName: ['Easy Biodata Maker','EasyBiodata'],
  url: 'https://easybiodatamaker.com', description: 'Free online marriage biodata maker for Indian families — premium templates in 9 Indian languages',
  inLanguage: ['en-IN','gu-IN','mr-IN','hi-IN','pa-IN','ta-IN','bn-IN','te-IN','kn-IN'],
};

// TODO: add sameAs only after verified official profile URLs are provided by the owner.
const orgSchema = {
  '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://easybiodatamaker.com/#organization',
  name: 'EasyBiodataMaker', url: 'https://easybiodatamaker.com',
  logo: { '@type': 'ImageObject', url: 'https://easybiodatamaker.com/icon-192.png', width: 192, height: 192 },
  description: 'Free online marriage biodata maker with premium templates in 9 Indian languages.',
  contactPoint: [{ '@type': 'ContactPoint', contactType: 'customer support', email: 'support@easybiodatamaker.com', availableLanguage: ['English','Hindi','Gujarati','Marathi','Tamil','Bengali','Punjabi','Telugu','Kannada'] }],
  };


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${display.variable} ${indicFonts.devanagariSans.variable} ${indicFonts.devanagariSerif.variable} ${indicFonts.gujaratiSans.variable} ${indicFonts.gujaratiSerif.variable} ${indicFonts.tamilSans.variable} ${indicFonts.tamilSerif.variable} ${indicFonts.bengaliSans.variable} ${indicFonts.bengaliSerif.variable} ${indicFonts.gurmukhiSans.variable} ${indicFonts.gurmukhiSerif.variable} ${indicFonts.kannadaSans.variable} ${indicFonts.kannadaSerif.variable} ${indicFonts.teluguSans.variable} ${indicFonts.teluguSerif.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FBF7F0" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        {/* PWA */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Performance preconnects */}
        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body className="font-sans antialiased bg-ivory text-ink">
        <LangProvider>{children}</LangProvider>
        <GoogleAnalytics />
    </body>
    </html>
  );
}
