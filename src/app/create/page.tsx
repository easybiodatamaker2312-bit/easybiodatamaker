import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import MultiStepForm from '@/components/form/MultiStepForm';

export const metadata: Metadata = {
  title: 'Create Marriage Biodata – Free 4-Step Form | EasyBiodataMaker',
  description: 'Create your marriage biodata in 4 simple steps. Personal details, family background, education, and contact. Free PDF download. All 10 templates.',
  alternates: { canonical: 'https://easybiodatamaker.com/create' },
};

export default function CreatePage() {
  return (
    <div className="min-h-screen flex flex-col bg-amber-50/40">
      <Navbar />
      <main className="flex-1 py-10 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="font-display text-3xl font-bold text-maroon-900">Create Your Biodata</h1>
            <p className="text-gray-500 mt-2 text-sm">
              Fill 4 steps · Upload photo · Choose from 10 templates · Download free PDF
            </p>
          </div>
          <MultiStepForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
