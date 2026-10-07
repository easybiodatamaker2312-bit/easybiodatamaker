'use client';
import type { BiodataData } from '@/lib/biodata-schema';
import { TRANSLATIONS, type SupportedLanguage } from '@/lib/translations';
import { HEIGHTS, RELIGIONS, BLOOD_GROUPS, COMPLEXIONS, INDIAN_STATES } from '@/types/biodata';

const options: Record<string, string[]> = {
  religion: RELIGIONS,
  height: HEIGHTS,
  bloodGroup: BLOOD_GROUPS,
  complexion: COMPLEXIONS,
  state: ['', ...INDIAN_STATES],
  manglik: ['No', 'Yes', 'Partial / Anshik', 'Not Known'],
  familyType: ['Nuclear', 'Joint', 'Extended'],
  familyStatus: ['Middle Class', 'Upper Middle Class', 'Rich', 'Affluent'],
  employedIn: ['Government', 'Private', 'Business', 'Self-Employed', 'Not Working'],
  brothers: ['', '0', '1', '2', '3', '4+'], marriedBrothers: ['', '0', '1', '2', '3', '4+'],
  sisters: ['', '0', '1', '2', '3', '4+'], marriedSisters: ['', '0', '1', '2', '3', '4+'],
};

const multiline = new Set(['aboutMe', 'expectations', 'address', 'hobbies', 'languages']);

export function Field({ name, value, error, onChange, language }: { name: keyof BiodataData; value: string; error?: string; onChange: (value: string) => void; language: SupportedLanguage }) {
  const translation = TRANSLATIONS[language];
  const label = translation[name];
  const placeholder = name === 'fullName' ? translation.phFullName : name === 'phone' ? translation.phPhone : name === 'email' ? translation.phEmail : name === 'address' ? translation.phAddress : name === 'city' ? translation.phCity : name === 'hobbies' ? translation.phHobbies : name === 'languages' ? translation.phLanguages : name === 'expectations' ? translation.phExpectations : '';
  const common = { value: value || '', onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => onChange(event.target.value), className: `form-input ${error ? 'border-red-500' : ''}` };
  return <div className="space-y-1.5">
    <label className="form-label" htmlFor={String(name)}>{label}</label>
    {multiline.has(String(name)) ? <textarea id={String(name)} {...common} rows={name === 'address' ? 3 : 4} placeholder={placeholder} /> : options[String(name)] ? <select id={String(name)} {...common}>{options[String(name)].map((option) => <option key={option} value={option}>{option || label}</option>)}</select> : <input id={String(name)} type={name === 'dateOfBirth' ? 'date' : name === 'timeOfBirth' ? 'time' : name === 'phone' || name === 'alternatePhone' ? 'tel' : name === 'email' ? 'email' : 'text'} {...common} placeholder={placeholder} />}
    {error && <p className="form-error">{error}</p>}
  </div>;
}
