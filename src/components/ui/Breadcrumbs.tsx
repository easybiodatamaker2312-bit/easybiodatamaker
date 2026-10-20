import Link from 'next/link';

const SITE_URL = 'https://easybiodatamaker.com';

/**
 * Visible breadcrumb trail. When `schemaPath` (the canonical path of the current page) is
 * passed, a BreadcrumbList is emitted from the SAME items that are rendered, so the
 * structured data can never drift from what visitors see. Pages that already ship their
 * own BreadcrumbList simply omit the prop.
 */
export function Breadcrumbs({ items, schemaPath }: { items: Array<{ label: string; href?: string }>; schemaPath?: string }) {
  const schema = schemaPath ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${SITE_URL}${item.href ?? schemaPath}`,
    })),
  } : null;
  return <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 py-3 text-sm text-stone-500">
    {schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />}
    <ol className="flex flex-wrap gap-2">{items.map((item, i) => <li key={`${item.label}-${i}`} className="flex gap-2">{item.href ? <Link href={item.href} className="hover:text-stone-900">{item.label}</Link> : <span aria-current="page">{item.label}</span>}{i < items.length - 1 && <span aria-hidden="true">/</span>}</li>)}</ol>
  </nav>;
}
