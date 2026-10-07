import type { MetadataRoute } from 'next';

const BASE = 'https://easybiodatamaker.com';

// Only include lastModified when this release has a known content change date.
// Unchanged legacy URLs intentionally omit it rather than publishing a false date.
const changedOn = '2026-10-07';

const pages: Array<{ url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; lastModified?: string }> = [
  { url: '/', priority: 1.0, changeFrequency: 'daily' },
  { url: '/templates', priority: 0.9, changeFrequency: 'weekly' },
  { url: '/marriage-biodata-formats-by-community', priority: 0.88, changeFrequency: 'monthly', lastModified: changedOn },
  { url: '/marriage-biodata-format-word', priority: 0.84, changeFrequency: 'monthly', lastModified: changedOn },
  { url: '/indian-marriage-biodata-maker-usa', priority: 0.84, changeFrequency: 'monthly', lastModified: changedOn },
  { url: '/marriage-biodata-format-uk-canada', priority: 0.83, changeFrequency: 'monthly', lastModified: changedOn },

  { url: '/biodata-for-marriage-girl', priority: 0.92, changeFrequency: 'monthly' },
  { url: '/biodata-for-marriage-boy', priority: 0.90, changeFrequency: 'monthly' },

  { url: '/hindu-marriage-biodata-format', priority: 0.88, changeFrequency: 'monthly' },
  { url: '/muslim-marriage-biodata-format', priority: 0.87, changeFrequency: 'monthly', lastModified: changedOn },
  { url: '/sikh-marriage-biodata', priority: 0.85, changeFrequency: 'monthly', lastModified: changedOn },
  { url: '/jain-marriage-biodata', priority: 0.82, changeFrequency: 'monthly', lastModified: changedOn },
  { url: '/christian-marriage-biodata', priority: 0.80, changeFrequency: 'monthly', lastModified: changedOn },

  { url: '/gujarati-biodata-format', priority: 0.88, changeFrequency: 'monthly', lastModified: changedOn },
  { url: '/marathi-biodata-format', priority: 0.88, changeFrequency: 'monthly', lastModified: changedOn },
  { url: '/hindi-biodata-format', priority: 0.88, changeFrequency: 'monthly', lastModified: changedOn },
  { url: '/punjabi-biodata-format', priority: 0.85, changeFrequency: 'monthly', lastModified: changedOn },
  { url: '/tamil-biodata-format', priority: 0.85, changeFrequency: 'monthly', lastModified: changedOn },
  { url: '/telugu-biodata-format', priority: 0.83, changeFrequency: 'monthly', lastModified: changedOn },
  { url: '/bengali-biodata-format', priority: 0.83, changeFrequency: 'monthly', lastModified: changedOn },
  { url: '/kannada-biodata-format', priority: 0.82, changeFrequency: 'monthly', lastModified: changedOn },
  { url: '/rajasthani-biodata-format', priority: 0.80, changeFrequency: 'monthly', lastModified: changedOn },

  { url: '/blog', priority: 0.85, changeFrequency: 'weekly', lastModified: changedOn },
  { url: '/blog/how-to-write-biodata-for-marriage', priority: 0.88, changeFrequency: 'monthly' },
  { url: '/blog/marriage-biodata-format-india', priority: 0.86, changeFrequency: 'monthly' },
  { url: '/blog/what-to-write-in-partner-expectations', priority: 0.84, changeFrequency: 'monthly' },
  { url: '/blog/biodata-mistakes-to-avoid', priority: 0.83, changeFrequency: 'monthly' },
  { url: '/blog/free-biodata-maker-vs-word-template', priority: 0.80, changeFrequency: 'monthly' },
  { url: '/blog/nri-marriage-biodata-guide', priority: 0.79, changeFrequency: 'monthly', lastModified: changedOn },
  { url: '/blog/intercaste-marriage-biodata', priority: 0.78, changeFrequency: 'monthly' },
  { url: '/blog/second-marriage-biodata-guide', priority: 0.76, changeFrequency: 'monthly' },

  { url: '/faq', priority: 0.80, changeFrequency: 'monthly' },
  { url: '/about', priority: 0.70, changeFrequency: 'yearly' },
  { url: '/contact', priority: 0.68, changeFrequency: 'yearly' },
  { url: '/privacy-policy', priority: 0.40, changeFrequency: 'yearly' },
  { url: '/disclaimer', priority: 0.40, changeFrequency: 'yearly' },
  { url: '/terms-of-service', priority: 0.40, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${BASE}${page.url}`,
    priority: page.priority,
    changeFrequency: page.changeFrequency,
    ...(page.lastModified ? { lastModified: page.lastModified } : {}),
  }));
}
