import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://easybiodatamaker.com';
  const now = new Date();

  const pages = [
    // ── Tier 1: Core conversion pages ──────────────────────────────────────
    { url: '/',                              p: 1.00, cf: 'daily'   },
    { url: '/create',                        p: 0.95, cf: 'monthly' },
    { url: '/templates',                     p: 0.90, cf: 'weekly'  },

    // ── Tier 2: Primary keyword landing pages ───────────────────────────────
    { url: '/shaadi-biodata-maker',          p: 0.95, cf: 'monthly' },
    { url: '/online-biodata-maker',          p: 0.93, cf: 'monthly' },
    { url: '/free-biodata-format-download',  p: 0.90, cf: 'monthly' },
    { url: '/how-to-make-biodata-for-marriage', p: 0.92, cf: 'monthly' },

    // ── Tier 3: Gender-specific (HIGH traffic) ──────────────────────────────
    { url: '/biodata-for-marriage-girl',     p: 0.92, cf: 'monthly' },
    { url: '/biodata-for-marriage-boy',      p: 0.90, cf: 'monthly' },

    // ── Tier 4: Religion pages ──────────────────────────────────────────────
    { url: '/hindu-marriage-biodata-format', p: 0.88, cf: 'monthly' },
    { url: '/muslim-marriage-biodata-format',p: 0.87, cf: 'monthly' },
    { url: '/sikh-marriage-biodata',         p: 0.85, cf: 'monthly' },
    { url: '/jain-marriage-biodata',         p: 0.82, cf: 'monthly' },
    { url: '/christian-marriage-biodata',    p: 0.80, cf: 'monthly' },

    // ── Tier 5: Language pages ──────────────────────────────────────────────
    { url: '/gujarati-biodata-format',       p: 0.88, cf: 'monthly' },
    { url: '/marathi-biodata-format',        p: 0.88, cf: 'monthly' },
    { url: '/hindi-biodata-format',          p: 0.88, cf: 'monthly' },
    { url: '/punjabi-biodata-format',        p: 0.85, cf: 'monthly' },
    { url: '/tamil-biodata-format',          p: 0.85, cf: 'monthly' },
    { url: '/telugu-biodata-format',         p: 0.83, cf: 'monthly' },
    { url: '/bengali-biodata-format',        p: 0.83, cf: 'monthly' },
    { url: '/kannada-biodata-format',        p: 0.82, cf: 'monthly' },
    { url: '/rajasthani-biodata-format',     p: 0.80, cf: 'monthly' },

    // ── Tier 6: Blog index ──────────────────────────────────────────────────
    { url: '/blog',                          p: 0.85, cf: 'weekly'  },

    // ── Tier 7: Blog articles ───────────────────────────────────────────────
    { url: '/blog/how-to-write-biodata-for-marriage',        p: 0.88, cf: 'monthly' },
    { url: '/blog/marriage-biodata-format-india',            p: 0.86, cf: 'monthly' },
    { url: '/blog/what-to-write-in-partner-expectations',   p: 0.84, cf: 'monthly' },
    { url: '/blog/biodata-mistakes-to-avoid',               p: 0.83, cf: 'monthly' },
    { url: '/blog/free-biodata-maker-vs-word-template',     p: 0.80, cf: 'monthly' },
    { url: '/blog/nri-marriage-biodata-guide',              p: 0.79, cf: 'monthly' },
    { url: '/blog/intercaste-marriage-biodata',             p: 0.78, cf: 'monthly' },
    { url: '/blog/second-marriage-biodata-guide',           p: 0.76, cf: 'monthly' },

    // ── Tier 8: Content pages ───────────────────────────────────────────────
    { url: '/faq',                           p: 0.80, cf: 'monthly' },
    { url: '/about',                         p: 0.70, cf: 'yearly'  },
    { url: '/contact',                       p: 0.68, cf: 'yearly'  },

    // ── Tier 9: Legal (low priority) ───────────────────────────────────────
    { url: '/privacy-policy',               p: 0.40, cf: 'yearly'  },
    { url: '/disclaimer',                   p: 0.40, cf: 'yearly'  },
    { url: '/terms-of-service',             p: 0.40, cf: 'yearly'  },
  ];

  return pages.map(({ url, p, cf }) => ({
    url: `${base}${url}`,
    lastModified: now,
    changeFrequency: cf as MetadataRoute.Sitemap[0]['changeFrequency'],
    priority: p,
  }));
}
