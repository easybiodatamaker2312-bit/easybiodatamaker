// ── SEO utilities for consistent metadata across public pages ────────────────

import type { Metadata } from 'next';

export const BASE_URL = 'https://easybiodatamaker.com';
export const SITE_NAME = 'EasyBiodataMaker';
export const DEFAULT_OG_IMAGE = '/og-image.png';

interface SEOConfig {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  type?: 'website' | 'article';
  noIndex?: boolean;
}

export function buildMetadata(config: SEOConfig): Metadata {
  const canonical = `${BASE_URL}${config.path}`;
  const ogTitle = config.ogTitle || config.title;
  const ogDesc = config.ogDescription || config.description;

  return {
    // Absolute prevents the root title template from appending a second suffix.
    title: { absolute: config.title },
    description: config.description,
    ...(config.keywords?.length ? { keywords: config.keywords } : {}),
    alternates: { canonical },
    robots: config.noIndex
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      type: config.type || 'website',
      locale: 'en_IN',
      url: canonical,
      siteName: SITE_NAME,
      title: ogTitle,
      description: ogDesc,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: ogTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@easybiodata',
      title: ogTitle,
      description: ogDesc,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export function buildArticleSchema(config: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: config.title,
    description: config.description,
    ...(config.datePublished ? { datePublished: config.datePublished } : {}),
    ...(config.dateModified ? { dateModified: config.dateModified } : {}),
    author: { '@type': 'Person', name: 'Karan Shah', url: `${BASE_URL}/about` },
    publisher: {
      '@type': 'Organization',
      name: 'EasyBiodataMaker',
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/icon-192.png` },
    },
    mainEntityOfPage: `${BASE_URL}${config.path}`,
    image: `${BASE_URL}${DEFAULT_OG_IMAGE}`,
    url: `${BASE_URL}${config.path}`,
  };
}

export function buildWebPageSchema(config: {
  title: string;
  description: string;
  path: string;
  breadcrumbs?: { name: string; path: string }[];
}) {
  const breadcrumbs = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    ...(config.breadcrumbs || []).map((b, i) => ({
      '@type': 'ListItem', position: i + 2, name: b.name, item: `${BASE_URL}${b.path}`,
    })),
    { '@type': 'ListItem', position: (config.breadcrumbs?.length || 0) + 2, name: config.title, item: `${BASE_URL}${config.path}` },
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: config.title,
    description: config.description,
    url: `${BASE_URL}${config.path}`,
    isPartOf: { '@type': 'WebSite', '@id': `${BASE_URL}/#website`, name: SITE_NAME },
    breadcrumb: { '@type': 'BreadcrumbList', itemListElement: breadcrumbs },
  };
}

export function buildFAQSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question', name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

export function buildHowToSchema(config: {
  name: string;
  description: string;
  totalTime?: string;
  steps: { name: string; text: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: config.name,
    description: config.description,
    totalTime: config.totalTime || 'PT5M',
    step: config.steps.map(s => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
  };
}

export { getSitePage } from '@/lib/seo/sitePages';
