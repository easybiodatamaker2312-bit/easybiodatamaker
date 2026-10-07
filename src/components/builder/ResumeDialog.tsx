'use client';
import { Save, X } from 'lucide-react';
import { useBiodataStore } from '@/store/biodataStore';
import { defaultBiodata } from '@/lib/biodata-schema';

export function ResumeDialog({ open, onClose, resetForm }: { open: boolean; onClose: () => void; resetForm: () => void }) {
  if (!open) return null;
  return <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4">
    <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
      <div className="mb-2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#FBF7F0] text-[var(--antique-gold)]"><Save size={20} /></div>
      <h2 className="font-display text-2xl">Resume your biodata</h2>
      <p className="mt-2 text-sm leading-6 text-stone-500">Your previous draft is saved privately on this device. Continue where you left off or start fresh.</p>
      <div className="mt-5 flex gap-2"><button type="button" className="btn-secondary flex-1" onClick={() => { useBiodataStore.getState().reset(); resetForm(); onClose(); }}>Start fresh</button><button type="button" className="btn-primary flex-1" onClick={onClose}>Resume</button></div>
      <button type="button" className="icon-button absolute" aria-label="Close" onClick={onClose}><X size={16} /></button>
    </div>
  </div>;
}

export { defaultBiodata };
