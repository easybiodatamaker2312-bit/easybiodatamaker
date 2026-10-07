import type { BiodataData } from '@/lib/biodata-schema';
import { TRANSLATIONS, type SupportedLanguage } from '@/lib/translations';
import type { CustomBiodataField, PhotoItem } from '@/store/biodataStore';

export type BiodataSectionKey = 'basics' | 'family' | 'education' | 'about' | 'additional' | 'contact' | 'photos';

export interface BiodataViewRow {
  key: string;
  label: string;
  value: string;
}

export interface BiodataViewSection {
  key: BiodataSectionKey;
  title: string;
  rows: BiodataViewRow[];
}

export interface BiodataViewModel {
  sections: BiodataViewSection[];
  photos: string[];
  customFields: CustomBiodataField[];
  headerCaption: string;
  fullName: string;
  language: SupportedLanguage;
}

const SECTION_KEYS: BiodataSectionKey[] = ['basics', 'family', 'education', 'about', 'additional', 'contact', 'photos'];

const FIELD_GROUPS: Record<Exclude<BiodataSectionKey, 'additional' | 'photos'>, Array<keyof BiodataData & string>> = {
  basics: ['fullName', 'dateOfBirth', 'timeOfBirth', 'placeOfBirth', 'height', 'religion', 'caste', 'subCaste', 'gotra', 'manglik', 'bloodGroup', 'complexion'],
  family: ['fatherName', 'fatherOccupation', 'motherName', 'motherOccupation', 'brothers', 'marriedBrothers', 'sisters', 'marriedSisters', 'familyType', 'familyStatus', 'nativePlace', 'maternalGotra'],
  education: ['highestQualification', 'fieldOfStudy', 'college', 'additionalQualification', 'occupation', 'employedIn', 'organization', 'designation', 'annualIncome', 'workLocation'],
  about: ['aboutMe', 'hobbies', 'languages', 'expectations'],
  contact: ['phone', 'alternatePhone', 'email', 'address', 'city', 'state', 'pinCode'],
};

const SECTION_TITLES: Record<Exclude<BiodataSectionKey, 'additional' | 'photos'>, keyof typeof TRANSLATIONS.en> = {
  basics: 'personalDetails',
  family: 'familyDetails',
  education: 'educationCareer',
  about: 'aboutMe',
  contact: 'contactDetails',
};

function formatDate(value: string, language: SupportedLanguage): string {
  if (!value) return '';
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  const locales: Record<SupportedLanguage, string> = {
    en: 'en-IN', hi: 'hi-IN', gu: 'gu-IN', mr: 'mr-IN', ta: 'ta-IN', bn: 'bn-IN', pa: 'pa-IN', te: 'te-IN', kn: 'kn-IN',
  };
  return new Intl.DateTimeFormat(locales[language], { day: '2-digit', month: 'short', year: 'numeric' }).format(date);
}

function normalizeValue(key: keyof BiodataData, value: string, language: SupportedLanguage): string {
  if (key === 'dateOfBirth') return formatDate(value, language);
  return value.trim();
}

function titleForSection(key: BiodataSectionKey, language: SupportedLanguage): string {
  const t = TRANSLATIONS[language];
  if (key === 'additional') return t.additionalInformation;
  if (key === 'photos') return t.photos;
  return t[SECTION_TITLES[key]];
}

function orderedKeys(sectionOrder: string[]): BiodataSectionKey[] {
  const requested = sectionOrder.filter((key): key is BiodataSectionKey => SECTION_KEYS.includes(key as BiodataSectionKey));
  return [...requested, ...SECTION_KEYS.filter((key) => !requested.includes(key))];
}

export function useBiodataView(
  data: BiodataData,
  lang: SupportedLanguage,
  sectionOrder: string[] = ['basics', 'family', 'education', 'about', 'contact', 'photos'],
  optionalFields: Record<string, boolean> = {},
  contactVisible = true,
  photos: PhotoItem[] = [],
  customFields: CustomBiodataField[] = [],
  fieldOrder: Record<string, string[]> = {},
): BiodataViewModel {
  const safeLanguage = lang in TRANSLATIONS ? lang : 'en';
  const translation = TRANSLATIONS[safeLanguage];
  const visible = (key: string) => optionalFields[key] !== false;

  const sections: Record<BiodataSectionKey, BiodataViewSection> = {
    basics: { key: 'basics', title: titleForSection('basics', safeLanguage), rows: [] },
    family: { key: 'family', title: titleForSection('family', safeLanguage), rows: [] },
    education: { key: 'education', title: titleForSection('education', safeLanguage), rows: [] },
    about: { key: 'about', title: titleForSection('about', safeLanguage), rows: [] },
    additional: { key: 'additional', title: titleForSection('additional', safeLanguage), rows: [] },
    contact: { key: 'contact', title: titleForSection('contact', safeLanguage), rows: [] },
    photos: { key: 'photos', title: titleForSection('photos', safeLanguage), rows: [] },
  };

  (Object.keys(FIELD_GROUPS) as Array<Exclude<BiodataSectionKey, 'additional' | 'photos'>>).forEach((sectionKey) => {
    if (sectionKey === 'contact' && !contactVisible) return;
    const standard = FIELD_GROUPS[sectionKey];
    const customInSection = customFields.filter((field) => (field.section ?? 'additional') === sectionKey);
    const fallback = [...standard.map(String), ...customInSection.map((field) => `custom-${field.id}`)];
    const requested = fieldOrder[sectionKey] ?? [];
    const ordered = [...requested.filter((key) => fallback.includes(key)), ...fallback.filter((key) => !requested.includes(key))];
    ordered.forEach((rowKey) => {
      if (rowKey.startsWith('custom-')) {
        const field = customInSection.find((item) => `custom-${item.id}` === rowKey);
        if (field?.value.trim()) sections[sectionKey].rows.push({ key: rowKey, label: field.label, value: field.value.trim() });
        return;
      }
      const fieldKey = rowKey as keyof BiodataData & string;
      if (!visible(fieldKey)) return;
      const raw = String(data[fieldKey] ?? '');
      const value = normalizeValue(fieldKey, raw, safeLanguage);
      if (!value) return;
      const label = translation[fieldKey as keyof typeof translation] ?? String(fieldKey);
      sections[sectionKey].rows.push({ key: String(fieldKey), label, value });
    });
  });

  customFields.filter((field) => (field.section ?? 'additional') === 'additional' && field.value.trim()).forEach((field) => {
    sections.additional.rows.push({ key: `custom-${field.id}`, label: field.label, value: field.value.trim() });
  });

  const photoUrls = photos.map((photo) => photo.dataUrl).filter(Boolean);
  if (photoUrls.length) {
    sections.photos.rows.push({ key: 'photo-count', label: translation.photos, value: String(photoUrls.length) });
  }

  const orderedSections = orderedKeys(sectionOrder)
    .map((key) => sections[key])
    .filter((section) => section.key === 'photos' || section.rows.length > 0);

  return {
    sections: orderedSections,
    photos: photoUrls,
    customFields: customFields.filter((field) => field.value.trim()),
    headerCaption: translation.marriageBiodata,
    fullName: String(data.fullName ?? '').trim(),
    language: safeLanguage,
  };
}
