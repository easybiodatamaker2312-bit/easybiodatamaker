import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { AEOBlock } from '@/components/ui/AEOBlock';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Christian Marriage Biodata Free – Catholic Protestant CSI CNI | EasyBiodataMaker',
  description: 'Create a Christian marriage biodata online free. Catholic, Protestant, CSI (South India), CNI (North India), Pentecostal, Mar Thoma communities. Denomination and church details included.',
  keywords: ['christian marriage biodata india','catholic biodata format','protestant biodata','csi biodata format','cni biodata north india','mar thoma biodata','pentecostal biodata','kerala christian biodata','goa catholic biodata','christian biodata pdf free india'],
  alternates: { canonical: 'https://easybiodatamaker.com/christian-marriage-biodata' },
  openGraph: { title: 'Christian Marriage Biodata Free – All Denominations India', description: 'Free Christian marriage biodata. Catholic, CSI, CNI, Mar Thoma, Pentecostal. Denomination and church fields included.', url: 'https://easybiodatamaker.com/christian-marriage-biodata' },
};

const aeoFaqs = [
  { question: 'What fields should a Christian marriage biodata in India include?', answer: "A Christian biodata opens with 'By the Grace of God' or a Bible verse. Key fields specific to Christian families: denomination (Catholic, CSI, CNI, Mar Thoma, Pentecostal, Baptist, etc.), church name and location, baptism status, whether the family has any formal church membership or roles, and for Catholic families — whether they are comfortable with a church wedding (as opposed to civil). Gotra and manglik are not relevant and should be left blank or removed." },
  { question: 'Does denomination matter in Indian Christian matrimony?', answer: "Yes, significantly. Catholic families generally prefer Catholic matches — the church wedding requirement and the liturgical tradition are important. CSI (Church of South India) families in Tamil Nadu and Andhra may be open to other Protestant traditions. Mar Thoma and Syrian Christian (Jacobite, Orthodox) families from Kerala have a very distinct and close-knit matrimonial network. Pentecostal families often prefer matches from the same denomination or at minimum a charismatic Christian tradition. If you are open to inter-denomination, say so in partner expectations." },
  { question: 'Kerala Syrian Christian biodata mein kya specifically add karein?', answer: "Kerala Syrian Christian families (Jacobite, Orthodox, Mar Thoma, CSI, Catholic) have one of the most community-specific matrimonial cultures in India. Key additions: the parish church name and location (families often know each other through churches), whether the family is from Central Travancore (which carries a particular status in this community), and for older families — the ancestral home or tharavad. The community is relatively small and family connections matter enormously." },
  { question: 'What opening should a Christian biodata use instead of Om or Bismillah?', answer: "'By the Grace of God' is the most common opening for Indian Christian biodatas. Catholic families sometimes use 'Ad Majorem Dei Gloriam' (AMDG) or begin with a Marian invocation. Some families use a favourite Bible verse. The Classic Saffron template on EasyBiodataMaker lets you customize the opening line." },
  { question: 'Can I use EasyBiodataMaker for a Goa Catholic or Anglo-Indian biodata?', answer: "Yes. Use Classic Saffron or Emerald Modern template. In the custom fields, add: denomination (Roman Catholic), parish church, and any other relevant community details. For Anglo-Indian families, Emerald Modern (clean, professional design) tends to work better than traditional Indian-style templates." },
];

const aeoSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: aeoFaqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) };

export default function ChristianBiodataPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoSchema) }} />
      <main className="flex-1">
        <section className="py-14 px-4 border-b bg-gradient-to-br from-blue-50 to-sky-50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl mb-3">✝️</div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-maroon-900 mb-4 leading-tight">
              Christian Marriage Biodata
              <span className="block text-xl mt-2 text-blue-700 font-normal">Catholic · CSI · CNI · Mar Thoma · Pentecostal · Free</span>
            </h1>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Indian Christian matrimony is far more denomination-specific than people realise. A Kerala Syrian Christian biodata and a Goa Catholic biodata are quite different in what they need to include. Create yours in 5 minutes, free.
            </p>
            <Link href="/create" className="btn-primary text-lg px-8 py-4">✝️ Create Christian Biodata — Free</Link>
            <p className="text-sm text-gray-400 mt-3">Add denomination and church details in custom fields</p>
          </div>
        </section>

        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto space-y-7 text-gray-700 text-sm leading-loose">
            <h2 className="font-display text-2xl font-bold text-maroon-900">Denomination Matters More Than People Expect</h2>
            <p>Indian Christians have a remarkable diversity of denominations — and matrimonially, they do not all mix freely. <strong>Catholic families</strong> generally prefer Catholic matches because of the church wedding requirement. <strong>Kerala Syrian Christians</strong> (Jacobite, Orthodox, Mar Thoma) have a tight matrimonial network where church and family connections overlap. <strong>CSI and CNI families</strong> are somewhat more open to inter-Protestant matches. <strong>Pentecostal families</strong> often prefer charismatic Christian partners specifically.</p>
            <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-xl p-5">
              <h3 className="font-bold text-maroon-900 mb-2">Kerala Christian Biodata — What to Add</h3>
              <p>Kerala Syrian Christian families know each other through parish networks. Add: the specific church (e.g., Jacobite Syrian Church, Malankara Orthodox, Mar Thoma Church), the parish name and location, and if relevant — ancestral home or tharavad name. For Catholic Keralites: the Latin or Syro-Malabar rite matters for some families.</p>
            </div>
            <h2 className="font-display text-2xl font-bold text-maroon-900">What to Skip in a Christian Biodata</h2>
            <p>Leave gotra, manglik, and kul devata fields blank or remove them entirely — they are not relevant for Christian families. The auspicious heading changes from ॐ to &ldquo;By the Grace of God&rdquo; or a Bible verse of your choice. You can type this in the biodata heading area.</p>
            <div className="flex flex-wrap gap-2">
              {['Roman Catholic','CSI (Church of South India)','CNI (Church of North India)','Mar Thoma Church','Jacobite Syrian','Malankara Orthodox','Pentecostal','Baptist','Methodist','Anglican','Seventh Day Adventist','Goa Catholic','Anglo-Indian'].map(c => (
                <span key={c} className="bg-blue-50 border border-blue-200 text-blue-800 text-xs px-3 py-1.5 rounded-full font-medium">{c}</span>
              ))}
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
              <Link href="/create" className="btn-primary text-sm">✝️ Create Christian Biodata — Free</Link>
            </div>
          </div>
        </section>

        <AEOBlock faqs={aeoFaqs} title="Christian Biodata — Questions Indian Families Ask" ctaHref="/create" ctaText="Create Christian Biodata Free" />
      </main>
      <Footer />
    </div>
  );
}
