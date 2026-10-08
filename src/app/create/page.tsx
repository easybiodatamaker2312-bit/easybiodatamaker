import { buildMetadata } from '@/lib/seo';
import dynamic from 'next/dynamic';

export const metadata = buildMetadata({ title: 'Create Your Marriage Biodata | EasyBiodataMaker', description: 'Create your marriage biodata in the browser with guided fields, photos and live preview. No account is required to start editing.', path: '/create', noIndex: true });

const BiodataBuilder = dynamic(() => import('@/components/builder/BiodataBuilder'), {
  ssr: false,
  loading: () => (
    <main className="min-h-[720px] bg-[#FBF7F0] px-4 py-8 sm:px-6 lg:px-8" aria-busy="true">
      <div className="mx-auto max-w-7xl">
        <div className="h-8 w-64 animate-pulse rounded-lg bg-stone-200" />
        <div className="mt-6 grid min-h-[620px] gap-6 lg:grid-cols-[minmax(280px,360px)_1fr]">
          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <div className="h-6 w-40 animate-pulse rounded bg-stone-200" />
            <div className="mt-5 space-y-3">
              <div className="h-12 rounded-xl bg-stone-100" />
              <div className="h-12 rounded-xl bg-stone-100" />
              <div className="h-12 rounded-xl bg-stone-100" />
            </div>
          </div>
          <div className="builder-preview-shell min-h-[620px]">
            <div className="mx-auto aspect-[210/297] w-full max-w-[794px] rounded-xl bg-white shadow-sm" />
          </div>
        </div>
      </div>
    </main>
  ),
});

export default function CreatePage() {
  return <BiodataBuilder />;
}
