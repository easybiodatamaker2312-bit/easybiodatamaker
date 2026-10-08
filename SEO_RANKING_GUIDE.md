# EasyBiodataMaker.com — SEO Operations Guide

This guide describes the SEO setup that is actually implemented in the project. It intentionally avoids ranking guarantees, artificial authority signals, keyword stuffing, and tactics that could create low-value or manipulative pages.

## 1. Search Console setup

After deployment:

1. Add `https://easybiodatamaker.com` as a Google Search Console property.
2. Set the production environment variable `NEXT_PUBLIC_GSC_TOKEN` to the real Google verification token.
3. Deploy and confirm the verification meta tag is present in the document head.
4. Submit `https://easybiodatamaker.com/sitemap.xml`.
5. Inspect important URLs in Search Console and request indexing when appropriate.
6. Use the Performance report to identify queries, pages, impressions and CTR that deserve editorial improvement.

Do not paste a placeholder or invented verification token into source control.

## 2. Bing and other webmaster tools

If the owner chooses to use Bing Webmaster Tools or another search engine's webmaster console, verify the real property using that provider's current instructions and submit the production sitemap where supported.

## 3. Analytics

Analytics is an optional product decision and is not required for this SEO architecture. Do not add a paid analytics service or server-side tracking without an explicit product decision and privacy review.

## 4. URL and content architecture

The site uses one primary search intent per indexable landing page. Closely overlapping pages were consolidated rather than creating near-duplicate keyword variants.

Examples of the current canonical targets include:

- `/marriage-biodata-format` — broad marriage biodata format intent
- `/marriage-biodata-format-word` — Word/export intent
- `/marriage-biodata-format-pdf` — PDF intent
- `/marriage-biodata-maker-online` — online maker intent
- `/simple-marriage-biodata-format` — simple/minimal format intent
- `/modern-marriage-biodata-format` — modern design intent
- `/marriage-biodata-formats-by-community` — community hub
- `/marriage-biodata-guides` — guide hub

Redirected legacy intent URLs should not be added back as competing indexable pages.

## 5. Content quality rules

Every public SEO page should answer a real user question or help a visitor complete a real task.

Use:

- clear, specific page titles and descriptions
- useful examples and explanations
- accurate product capabilities
- relevant internal links
- visible update dates where editorial content has been maintained
- descriptive image alt text
- community terminology that is respectful and context-aware
- original writing rather than competitor rewrites

Avoid:

- repeating exact-match keywords unnaturally
- generating many pages that differ only by a place, community or keyword name
- fake reviews, ratings, user counts or popularity claims
- unsupported product claims
- pages created only to capture search traffic without additional user value
- hidden text or keyword lists

## 6. Existing keyword architecture

The machine-readable keyword map is `src/lib/seo/keywordMap.ts` and the human-readable explanation is `SEO_KEYWORD_MAP.md`.

Keywords are mapped to the page that best satisfies their intent. A keyword may therefore point to an existing canonical page after consolidation rather than having a dedicated URL.

Do not add a new landing page merely because another spelling or synonym appears in keyword research. First determine whether the existing page already satisfies that intent.

## 7. Internal linking

Use contextual internal links between genuinely related resources:

- format guides → relevant maker/template pages
- community guides → the community hub and relevant templates
- writing guides → the maker and related writing resources
- Word/PDF guides → the corresponding export page
- mobile/WhatsApp guides → the mobile or sharing workflow
- blog articles → relevant guides and tools

Links should help the reader continue the task, not form a large artificial keyword network.

## 8. Legitimate authority and link acquisition

External links should be earned through useful resources and genuine relationships. Appropriate tactics include:

1. Create genuinely useful guides that wedding, matrimonial or community publishers may reference.
2. Submit the site to legitimate, relevant business or software directories when the listing is truthful and useful.
3. Answer relevant community questions where the answer itself is useful; only reference EasyBiodataMaker when it genuinely helps.
4. Build partnerships with wedding planners, matrimonial consultants, community organizations or publishers when there is a real relationship.
5. Publish practical tutorials or demonstrations that can naturally earn references and shares.
6. Correctly attribute and link to the site when partners choose to mention the tool.

Do not buy spammy backlinks, create networks of low-quality sites, mass-post promotional answers, or use automated comments for links.

## 9. Images

Template previews should have meaningful alternative text, explicit dimensions and lazy loading where they are not above the fold. Keep image files appropriately compressed and include important image URLs in the image sitemap when applicable.

## 10. Structured data

Structured data must describe content that is actually present on the page. The project deliberately avoids aggregate ratings, review counts and rating values because no real review dataset has been supplied.

SoftwareApplication structured data is scoped to the homepage, templates and relevant maker landing pages. BreadcrumbList is used for inner pages where appropriate. Blog Article schema uses real publication/modification dates and the named editorial author where that information is available.

Structured data does not guarantee enhanced search results or higher rankings.

## 11. Draft content

Draft articles are kept outside the public route tree until they are reviewed and approved. A draft should only become an indexable page after its content, metadata, links, author information and publication date have been verified.

Current draft topics include Hindi/Hinglish biodata education, photo guidance, girl/boy samples and a Mumbai-focused draft. These are drafts, not ranking promises or published URLs.

## 12. Ongoing Search Console workflow

Use Search Console data to improve existing pages based on real evidence:

- High impressions + low CTR → review title/description and search intent.
- Queries close to the page's intended topic → improve the relevant section if useful to readers.
- Pages with poor engagement or little useful differentiation → consolidate or improve them rather than producing more variants.
- Newly published pages → verify indexing and canonical selection.

There is no guaranteed ranking timeline. Search visibility can change as Google crawls, indexes and evaluates pages and as competitors publish or improve their own content.

## 13. Deployment checklist

Before deployment:

- [ ] Set the real `NEXT_PUBLIC_GSC_TOKEN` if Search Console verification is desired.
- [ ] Confirm production canonical URLs use HTTPS and the correct domain.
- [ ] Confirm `/create` remains crawlable but `noindex`.
- [ ] Confirm `/api/` remains disallowed by robots.
- [ ] Submit the sitemap in Search Console after deployment.
- [ ] Inspect the homepage, core format page, community page and maker page.
- [ ] Check that redirects resolve to the intended canonical pages.
- [ ] Review newly published editorial content before indexing.

## 14. What this guide does not promise

This project does not promise first-page rankings, a specific position, indexing within a specific number of days, traffic numbers, or a particular number of ranking keywords. SEO work improves the site's technical accessibility, relevance and usefulness; search engines make the final ranking decisions.
