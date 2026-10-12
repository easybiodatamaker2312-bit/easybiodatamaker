import { TEMPLATE_PREVIEWS } from '@/lib/seo/templatePreviews';

const BASE_URL = 'https://easybiodatamaker.com';

function escapeXml(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

export function GET() {
  const imageEntries = Object.entries(TEMPLATE_PREVIEWS).map(([id, template]) =>
    `<url><loc>${BASE_URL}/templates</loc><image:image><image:loc>${BASE_URL}/templates/${id}.webp</image:loc><image:title>${escapeXml(`${template.name} marriage biodata template`)}</image:title><image:caption>${escapeXml(template.description)}</image:caption></image:image></url>`,
  ).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${imageEntries}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
