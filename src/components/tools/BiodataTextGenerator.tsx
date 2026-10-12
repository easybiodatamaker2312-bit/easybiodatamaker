"use client";
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
type GeneratorKind = 'about' | 'expectations';
export function BiodataTextGenerator({ kind }: { kind: GeneratorKind }) {
  const [name, setName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [interests, setInterests] = useState('');
  const [values, setValues] = useState('kindness, mutual respect and open communication');
  const [location, setLocation] = useState('');
  const generated = useMemo(() => {
    const person = name.trim();
    const job = occupation.trim() || 'my work and personal growth';
    const hobbies = interests.trim() || 'reading, learning and spending time with family';
    const place = location.trim();
    if (kind === 'about') return `${person ? `${person} is` : 'I am'} a thoughtful person who values ${values.trim() || 'kindness and respect'}. ${person ? 'They work in' : 'I work in'} ${job} and enjoy ${hobbies}.${place ? ` ${person ? 'They are' : 'I am'} currently based in ${place}.` : ''} ${person ? 'They try' : 'I try'} to balance professional goals with meaningful relationships and time with family.`;
    return `I hope to meet a partner who values ${values.trim() || 'kindness and respect'}. I appreciate honest communication, consideration for both families and support for each person's goals. ${occupation.trim() ? `My current work is ${occupation.trim()}, and I value a partner who respects professional commitments.` : ''}${place ? ` I am currently based in ${place}; future location can be discussed together.` : ''} I would prefer to build a relationship through thoughtful conversations, shared decisions and mutual understanding.`;
  }, [name, occupation, interests, values, location, kind]);
  const [draft, setDraft] = useState(generated);
  useEffect(() => setDraft(generated), [generated]);
  return <div className="mt-8 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
    <div className="grid gap-4 sm:grid-cols-2">
      <label className="text-sm font-medium text-stone-700">Name or opening (optional)<input value={name} onChange={e=>setName(e.target.value)} placeholder="e.g. I am..." className="mt-2 w-full rounded-xl border border-stone-300 px-3 py-3" /></label>
      <label className="text-sm font-medium text-stone-700">Occupation or field<input value={occupation} onChange={e=>setOccupation(e.target.value)} placeholder="e.g. software engineer" className="mt-2 w-full rounded-xl border border-stone-300 px-3 py-3" /></label>
      <label className="text-sm font-medium text-stone-700">Interests and hobbies<input value={interests} onChange={e=>setInterests(e.target.value)} placeholder="e.g. music, travel, cooking" className="mt-2 w-full rounded-xl border border-stone-300 px-3 py-3" /></label>
      <label className="text-sm font-medium text-stone-700">Current city (optional)<input value={location} onChange={e=>setLocation(e.target.value)} placeholder="e.g. Pune" className="mt-2 w-full rounded-xl border border-stone-300 px-3 py-3" /></label>
      <label className="text-sm font-medium text-stone-700 sm:col-span-2">Values to mention<input value={values} onChange={e=>setValues(e.target.value)} placeholder="kindness, respect, shared goals" className="mt-2 w-full rounded-xl border border-stone-300 px-3 py-3" /></label>
    </div>
    <label className="mt-6 block text-sm font-semibold text-stone-800">Editable generated text<textarea value={draft} onChange={e=>setDraft(e.target.value)} className="mt-2 min-h-44 w-full rounded-2xl border border-stone-300 bg-[#FFFCF7] p-4 text-sm leading-7" /></label>
    <p className="mt-3 text-xs leading-6 text-stone-500">This is a starting draft, not a factual check. Edit the text and remove any statement that does not accurately describe you. No account is required.</p>
    <div className="mt-5 flex flex-wrap gap-3"><button type="button" onClick={()=>navigator.clipboard?.writeText(draft)} className="btn-secondary">Copy text</button><Link href="/create" className="btn-primary">Continue in biodata maker</Link></div>
  </div>;
}
