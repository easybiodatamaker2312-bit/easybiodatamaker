import type { MetadataRoute } from 'next';
import { COMMUNITY_PAGES } from '@/lib/seo/communityPages';
import { SEARCH_INTENT_PAGES } from '@/lib/seo/searchIntentPages';
import { SITE_PAGES } from '@/lib/seo/sitePages';

const BASE = 'https://easybiodatamaker.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    ...SITE_PAGES,
    ...COMMUNITY_PAGES,
    ...SEARCH_INTENT_PAGES,
  ];

  return pages.map((page) => ({
    url: `${BASE}${page.path}`,
    lastModified: page.updatedAt,
  }));
}
