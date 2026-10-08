import Link from 'next/link';

export function EditorialByline({ lastUpdated }: { lastUpdated?: string }) {
  return (
    <aside className="my-8 rounded-2xl border border-stone-200 bg-white p-5 text-sm text-stone-600" aria-label="Editorial information">
      <p><strong className="text-stone-900">Written and reviewed by Karan Shah</strong> — product and content reviewer for EasyBiodataMaker.</p>
      {lastUpdated ? <p className="mt-1">Last updated: {lastUpdated}</p> : null}
      <p className="mt-2"><Link href="/about#editorial-policy" className="font-semibold text-stone-900 underline underline-offset-2">Read our editorial policy</Link></p>
    </aside>
  );
}
