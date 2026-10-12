import Link from 'next/link';

type AuthorBoxProps = {
  reviewedOn: string;
  credentials?: string;
  photoUrl?: string;
};

// TODO(owner): Add only verified professional credentials and an approved author photo URL.
export function AuthorBox({ reviewedOn, credentials, photoUrl }: AuthorBoxProps) {
  return (
    <aside className="mx-auto my-8 max-w-3xl rounded-2xl border border-stone-200 bg-white p-5 shadow-sm" aria-label="Author and review information">
      <div className="flex items-start gap-4">
        {photoUrl ? (
          // Owner-provided photo is optional; no stock or invented author portrait is used.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={photoUrl} alt="Karan Shah" width={64} height={64} loading="lazy" className="h-16 w-16 rounded-full object-cover" />
        ) : null}
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[.14em] text-amber-700">Written and reviewed by</p>
          <h2 className="mt-1 font-semibold text-stone-900">Karan Shah</h2>
          <p className="mt-1 text-sm leading-6 text-stone-600">Karan works on EasyBiodataMaker and prepares practical guidance about creating, organizing and sharing marriage biodatas. The focus is on clear examples, respectful wording, and helping readers decide which personal details they are comfortable sharing.</p>
          {credentials ? <p className="mt-2 text-sm text-stone-600">{credentials}</p> : null}
          <p className="mt-2 text-sm text-stone-600">Reviewed on <time dateTime={reviewedOn}>{reviewedOn}</time></p>
          <Link href="/about" className="mt-2 inline-block text-sm font-semibold text-maroon-800 underline underline-offset-2">About the author and our review process</Link>
        </div>
      </div>
    </aside>
  );
}
