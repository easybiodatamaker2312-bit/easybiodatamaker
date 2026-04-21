'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { loadBiodata } from '@/lib/utils';
import { downloadBiodataAsPDF } from '@/lib/pdf';
import type { BiodataFormData } from '@/types/biodata';
import { TEMPLATES, type TemplateId } from './TemplateRegistry';
import type { CustomField } from '@/hooks/useCustomFields';
import type { SupportedLanguage } from '@/lib/translations';
import { useLang } from '@/lib/LangContext';
import { Download, Edit, Loader2, Upload, X, Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const ACCENT: Record<TemplateId, string> = {
  classic: '#f59e0b', royal: '#d97706', rose: '#ec4899', emerald: '#16a34a',
  gujarati: '#dc2626', marathi: '#ea580c', hindi: '#7c1d2e',
  south: '#7c3aed', islamic: '#14532d', punjabi: '#1d4ed8',
};

export default function PreviewClient() {
  const [data, setData] = useState<BiodataFormData | null>(null);
  const [tplId, setTplId] = useState<TemplateId>('classic');
  const [photos, setPhotos] = useState<string[]>([]);
  const [customFields, setCustomFields] = useState<CustomField[]>([]);
  const [formLang, setFormLang] = useState<SupportedLanguage>('en');
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState('');
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { setLang } = useLang();

  useEffect(() => {
    const saved = loadBiodata();
    if (!saved) { router.push('/create'); return; }
    const { customFields: cf, lang: l, _fieldMeta, ...rest } = saved as Record<string, unknown>;
    setData(rest as BiodataFormData);
    if (Array.isArray(cf)) setCustomFields(cf as CustomField[]);
    if (l) setFormLang(l as SupportedLanguage);
  }, [router]);

  useEffect(() => {
    const dl = TEMPLATES[tplId].defaultLang;
    setFormLang(dl);
    setLang(dl);
  }, [tplId, setLang]);

  const addPhotos = (e: React.ChangeEvent<HTMLInputElement>) => {
    Array.from(e.target.files || []).slice(0, 3 - photos.length).forEach(file => {
      const r = new FileReader();
      r.onload = ev => setPhotos(p => [...p, ev.target?.result as string].slice(0, 3));
      r.readAsDataURL(file);
    });
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    setDownloadError('');
    try {
      const name = data?.fullName?.replace(/\s+/g, '-').toLowerCase() || 'biodata';
      await downloadBiodataAsPDF('biodata-preview', `${name}-${tplId}-biodata.pdf`);
    } catch { setDownloadError('PDF generation failed. Please try again.'); }
    finally { setIsDownloading(false); }
  };

  const ids = Object.keys(TEMPLATES) as TemplateId[];
  const idx = ids.indexOf(tplId);

  if (!data) return (
    <div className="flex items-center justify-center min-h-64">
      <Loader2 className="animate-spin text-saffron-500" size={32} />
    </div>
  );

  const tpl = TEMPLATES[tplId];
  const TemplateComponent = tpl.component;
  const accent = ACCENT[tplId];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 no-print">
        <div>
          <h1 className="font-display text-2xl font-bold text-gray-800">Preview &amp; Download</h1>
          <p className="text-gray-500 text-sm">Pick template · Upload photos · Download PDF</p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <Link href="/create" className="btn-secondary text-sm py-2 px-4"><Edit size={16} /> Edit Fields</Link>
          <button onClick={handleDownload} disabled={isDownloading} className="btn-primary text-sm py-2 px-5 disabled:opacity-70">
            {isDownloading ? <><Loader2 size={16} className="animate-spin" /> Generating…</> : <><Download size={16} /> Download PDF</>}
          </button>
        </div>
      </div>

      {downloadError && <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-3 mb-4 text-sm">{downloadError}</div>}

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-72 flex-shrink-0 space-y-4 no-print">
          {/* Photos */}
          <div className="card p-4">
            <h3 className="font-bold text-maroon-800 text-sm mb-3 flex items-center gap-2">
              <ImageIcon size={15} className="text-saffron-500" /> Photos (max 3)
            </h3>
            {photos.length > 0 && (
              <div className="flex gap-2 mb-3 flex-wrap">
                {photos.map((photo, i) => (
                  <div key={i} className="relative group">
                    <img src={photo} alt="" className="w-16 h-20 object-cover rounded-lg border-2 border-saffron-200" />
                    <button onClick={() => setPhotos(p => p.filter((_, j) => j !== i))}
                      className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <X size={10} />
                    </button>
                  </div>
                ))}
              </div>
            )}
            <input ref={fileInputRef} type="file" accept="image/*" multiple onChange={addPhotos} className="hidden" />
            {photos.length < 3 && (
              <button onClick={() => fileInputRef.current?.click()}
                className="w-full border-2 border-dashed border-amber-300 rounded-xl py-3 text-sm text-saffron-600 hover:bg-saffron-50 hover:border-saffron-400 transition-all flex items-center justify-center gap-2">
                <Upload size={16} /> {photos.length > 0 ? 'Add More' : 'Upload Photo'}
              </button>
            )}
          </div>

          {/* Template picker */}
          <div className="card p-4">
            <h3 className="font-bold text-maroon-800 text-sm mb-3">Choose Template</h3>
            <div className="flex items-center justify-between mb-3 rounded-xl p-3"
              style={{ background: `${accent}12`, border: `1px solid ${accent}35` }}>
              <button onClick={() => setTplId(ids[(idx - 1 + ids.length) % ids.length])}
                className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                <ChevronLeft size={16} className="text-gray-500" />
              </button>
              <div className="text-center">
                <div className="text-2xl">{tpl.emoji}</div>
                <div className="text-xs font-bold text-gray-800 mt-0.5">{tpl.name}</div>
                <div className="text-[10px] text-gray-400">{tpl.colors}</div>
              </div>
              <button onClick={() => setTplId(ids[(idx + 1) % ids.length])}
                className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                <ChevronRight size={16} className="text-gray-500" />
              </button>
            </div>
            <div className="grid grid-cols-5 gap-1.5 mb-3">
              {ids.map(id => {
                const t2 = TEMPLATES[id]; const ac = ACCENT[id]; const active = tplId === id;
                return (
                  <button key={id} onClick={() => setTplId(id)} title={t2.name}
                    className="aspect-square rounded-lg text-lg flex items-center justify-center transition-all"
                    style={{ border: `2px solid ${active ? ac : '#f3f4f6'}`, background: active ? `${ac}18` : '#fff', transform: active ? 'scale(1.12)' : 'scale(1)' }}>
                    {t2.emoji}
                  </button>
                );
              })}
            </div>
            <div className="space-y-0.5 max-h-56 overflow-y-auto">
              {ids.map(id => {
                const t2 = TEMPLATES[id]; const ac = ACCENT[id]; const active = tplId === id;
                return (
                  <button key={id} onClick={() => setTplId(id)}
                    className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-left text-xs"
                    style={{ background: active ? `${ac}12` : 'transparent', border: `1px solid ${active ? ac + '35' : 'transparent'}` }}>
                    <span className="text-base leading-none">{t2.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-800 truncate">{t2.name}</div>
                      <div className="text-gray-400 truncate text-[10px]">{t2.community}</div>
                    </div>
                    {active && <span style={{ color: ac }}>✓</span>}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="overflow-x-auto rounded-xl shadow-2xl">
            <TemplateComponent data={data} photos={photos} customFields={customFields} lang={formLang} />
          </div>
          <p className="text-center text-xs text-gray-400 mt-3 no-print">
            All 10 templates free · A4 PDF · EasyBiodataMaker.com
          </p>
        </div>
      </div>
    </div>
  );
}
