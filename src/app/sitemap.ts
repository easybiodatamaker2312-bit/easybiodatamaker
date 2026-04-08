import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://easybiodatamaker.com';
  const now = new Date();

  const pages = [
    { url: '/', priority: 1.0, cf: 'weekly' },
    { url: '/create', priority: 0.95, cf: 'monthly' },
    { url: '/templates', priority: 0.9, cf: 'weekly' },
    { url: '/how-to-make-biodata-for-marriage', priority: 0.95, cf: 'monthly' },
    { url: '/free-biodata-format-download', priority: 0.9, cf: 'monthly' },
    { url: '/hindu-marriage-biodata-format', priority: 0.9, cf: 'monthly' },
    { url: '/muslim-marriage-biodata-format', priority: 0.88, cf: 'monthly' },
    { url: '/gujarati-biodata-format', priority: 0.9, cf: 'monthly' },
    { url: '/marathi-biodata-format', priority: 0.9, cf: 'monthly' },
    { url: '/hindi-biodata-format', priority: 0.9, cf: 'monthly' },
    { url: '/punjabi-biodata-format', priority: 0.88, cf: 'monthly' },
    { url: '/tamil-biodata-format', priority: 0.88, cf: 'monthly' },
    { url: '/bengali-biodata-format', priority: 0.85, cf: 'monthly' },
    { url: '/blog', priority: 0.8, cf: 'weekly' },
    { url: '/faq', priority: 0.82, cf: 'monthly' },
    { url: '/about', priority: 0.7, cf: 'yearly' },
    { url: '/contact', priority: 0.7, cf: 'yearly' },
    { url: '/privacy-policy', priority: 0.4, cf: 'yearly' },
    { url: '/disclaimer', priority: 0.4, cf: 'yearly' },
    { url: '/terms-of-service', priority: 0.4, cf: 'yearly' },
  ];

  return pages.map(({ url, priority, cf }) => ({
    url: `${baseUrl}${url}`,
    lastModified: now,
    changeFrequency: cf as 'weekly' | 'monthly' | 'yearly',
    priority,
  }));
}
