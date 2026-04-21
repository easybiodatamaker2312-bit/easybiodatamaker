'use client';

import React from 'react';
import { formatDate, calculateAge, loadBiodata } from '@/lib/utils';
import type { BiodataFormData } from '@/types/biodata';
import type { CustomField } from '@/hooks/useCustomFields';
import { TRANSLATIONS, type SupportedLanguage } from '@/lib/translations';
import { DynamicSection, DynamicCustomFields, type FieldMeta, type FieldMetaMap } from './DynamicRenderer';

export interface TemplateProps {
  data: BiodataFormData;
  photos?: string[];
  customFields?: CustomField[];
  lang?: SupportedLanguage;
}

// Load field metadata from session if available
function useFieldMeta(): FieldMetaMap {
  if (typeof window === 'undefined') return {};
  try {
    const saved = sessionStorage.getItem('biodataFormData');
    if (!saved) return {};
    const parsed = JSON.parse(saved);
    return (parsed._fieldMeta as FieldMetaMap) || {};
  } catch {
    return {};
  }
}

// Fallback sections when no _fieldMeta available (backwards-compat)
function fallbackPersonal(t: Record<string, string>): FieldMeta[] {
  return [
    { id: 'dob', key: 'dateOfBirth', label: t.dateOfBirth || 'Date of Birth', type: 'date', visible: true },
    { id: 'pob', key: 'placeOfBirth', label: t.placeOfBirth || 'Place of Birth', type: 'text', visible: true },
    { id: 'hw', key: 'height', label: `${t.height || 'Height'} / ${t.weight || 'Weight'}`, type: 'text', visible: true },
    { id: 'cmplx', key: 'complexion', label: t.complexion || 'Complexion', type: 'text', visible: true },
    { id: 'bg', key: 'bloodGroup', label: t.bloodGroup || 'Blood Group', type: 'text', visible: true },
    { id: 'gotra', key: 'gotra', label: t.gotra || 'Gotra', type: 'text', visible: true },
    { id: 'mang', key: 'manglik', label: t.manglik || 'Manglik', type: 'text', visible: true },
    { id: 'hob', key: 'hobbies', label: t.hobbies || 'Hobbies', type: 'text', visible: true },
    { id: 'lang', key: 'languages', label: t.languages || 'Languages', type: 'text', visible: true },
  ];
}

function fallbackFamily(t: Record<string, string>): FieldMeta[] {
  return [
    { id: 'fn', key: 'fatherName', label: t.fatherName || "Father's Name", type: 'text', visible: true },
    { id: 'fo', key: 'fatherOccupation', label: t.fatherOccupation || "Father's Occupation", type: 'text', visible: true },
    { id: 'mn', key: 'motherName', label: t.motherName || "Mother's Name", type: 'text', visible: true },
    { id: 'mo', key: 'motherOccupation', label: t.motherOccupation || "Mother's Occupation", type: 'text', visible: true },
    { id: 'bro', key: 'brothers', label: 'Brothers', type: 'text', visible: true },
    { id: 'sis', key: 'sisters', label: 'Sisters', type: 'text', visible: true },
    { id: 'ft', key: 'familyType', label: t.familyType || 'Family Type', type: 'text', visible: true },
    { id: 'np', key: 'nativePlace', label: t.nativePlace || 'Native Place', type: 'text', visible: true },
  ];
}

function fallbackEducation(t: Record<string, string>): FieldMeta[] {
  return [
    { id: 'hq', key: 'highestQualification', label: t.highestQualification || 'Qualification', type: 'text', visible: true },
    { id: 'clg', key: 'college', label: t.college || 'College', type: 'text', visible: true },
    { id: 'occ', key: 'occupation', label: t.occupation || 'Occupation', type: 'text', visible: true },
    { id: 'org', key: 'organization', label: t.organization || 'Organization', type: 'text', visible: true },
    { id: 'des', key: 'designation', label: t.designation || 'Designation', type: 'text', visible: true },
    { id: 'inc', key: 'annualIncome', label: t.annualIncome || 'Annual Income', type: 'text', visible: true },
    { id: 'wloc', key: 'workLocation', label: t.workLocation || 'Work Location', type: 'text', visible: true },
  ];
}

function fallbackContact(t: Record<string, string>): FieldMeta[] {
  return [
    { id: 'addr', key: 'address', label: t.address || 'Address', type: 'text', visible: true },
    { id: 'ph', key: 'phone', label: t.phone || 'Phone', type: 'text', visible: true },
    { id: 'em', key: 'email', label: t.email || 'Email', type: 'text', visible: true },
  ];
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function flatData(data: BiodataFormData): Record<string, string> {
  const d = data as unknown as Record<string, string>;
  // Merge height + weight as one value for display (if separate)
  if (d.height && d.weight) d['height'] = `${d.height} / ${d.weight}`;
  return d;
}

// ═══════════════════════════════════════════════════════════════════════════════
// TEMPLATE 1 — CLASSIC SAFFRON
// ═══════════════════════════════════════════════════════════════════════════════
export function ClassicSaffronTemplate({ data, photos, customFields, lang = 'en' }: TemplateProps) {
  const t = TRANSLATIONS[lang] as unknown as Record<string, string>;
  const meta = useFieldMeta();
  const fd = flatData(data);

  const styles = {
    labelColor: '#78350f', valueColor: '#1c1917', borderColor: '#fde68a',
    headerColor: '#92400e', headerStyle: 'gradient' as const,
  };

  const personalFields = meta.personal || fallbackPersonal(t);
  const familyFields = meta.family || fallbackFamily(t);
  const educationFields = meta.education || fallbackEducation(t);
  const contactFields = meta.contact || fallbackContact(t);

  return (
    <div id="biodata-preview" style={{ width: 794, minHeight: 1123, background: '#fffbf0', padding: '36px 50px', fontFamily: 'Georgia,serif', boxSizing: 'border-box' }}>
      <div style={{ height: 6, background: 'linear-gradient(90deg,#7c2d12,#f59e0b,#fbbf24,#f59e0b,#7c2d12)', borderRadius: 4, marginBottom: 20 }} />
      <div style={{ textAlign: 'center', marginBottom: 20 }}>
        <div style={{ fontSize: 14, color: '#7c2d12', letterSpacing: 6, marginBottom: 6 }}>॥ श्री गणेशाय नमः ॥</div>
        <div style={{ fontSize: 11, color: '#92400e', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 6, fontFamily: 'Helvetica,sans-serif' }}>Biodata for Marriage</div>
        <div style={{ fontSize: 24, color: '#431407', fontWeight: 'bold', letterSpacing: 2 }}>{data.fullName}</div>
        <div style={{ height: 2, background: 'linear-gradient(90deg,transparent,#f59e0b,transparent)', margin: '10px auto', width: '50%' }} />
        <div style={{ fontSize: 12, color: '#78350f' }}>{data.religion} · {data.caste}{data.subCaste ? ` · ${data.subCaste}` : ''}</div>
      </div>
      <div style={{ display: 'flex', gap: 20, marginBottom: 14 }}>
        {photos?.[0] && <div style={{ flexShrink: 0 }}><div style={{ width: 110, height: 135, border: '3px solid #f59e0b', borderRadius: 4, overflow: 'hidden' }}><img src={photos[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div></div>}
        <div style={{ flex: 1 }}>
          <DynamicSection title={t.personalDetails || 'Personal Details'} fields={personalFields} data={fd} styles={styles} />
        </div>
      </div>
      <DynamicSection title={t.familyDetails || 'Family Details'} fields={familyFields} data={fd} styles={styles} />
      <DynamicSection title={t.educationCareer || 'Education & Career'} fields={educationFields} data={fd} styles={styles} />
      <DynamicSection title={t.contactDetails || 'Contact Details'} fields={contactFields} data={fd} styles={styles} />
      {data.expectations && (
        <div style={{ marginBottom: 14 }}>
          <DynamicSection title={t.partnerExpectations || 'Partner Expectations'}
            fields={[{ id: 'exp', key: 'expectations', label: t.partnerExpectations || 'Partner Expectations', type: 'textarea', visible: true }]}
            data={fd} styles={styles} />
        </div>
      )}
      {customFields && <DynamicCustomFields fields={customFields} styles={styles} sectionTitle={t.customSection || 'Additional Information'} />}
      <div style={{ height: 6, background: 'linear-gradient(90deg,#7c2d12,#f59e0b,#fbbf24,#f59e0b,#7c2d12)', borderRadius: 4, marginTop: 20 }} />
      <div style={{ textAlign: 'center', fontSize: 9, color: '#d1d5db', marginTop: 6, fontFamily: 'Helvetica,sans-serif' }}>EasyBiodataMaker.com</div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// TEMPLATE 2 — ROYAL NAVY GOLD
// ═══════════════════════════════════════════════════════════════════════════════
export function RoyalNavyGoldTemplate({ data, photos, customFields, lang = 'en' }: TemplateProps) {
  const t = TRANSLATIONS[lang] as unknown as Record<string, string>;
  const meta = useFieldMeta();
  const fd = flatData(data);

  const styles = { labelColor: '#d97706', valueColor: '#1e293b', borderColor: 'rgba(245,158,11,0.15)', headerColor: '#b45309', headerStyle: 'underline' as const };
  const sidebarStyles = { labelColor: '#94a3b8', valueColor: '#f1f5f9', borderColor: 'rgba(148,163,184,0.2)', headerColor: '#64748b', headerStyle: 'dot' as const };

  const personalFields = meta.personal || fallbackPersonal(t);
  const familyFields = meta.family || fallbackFamily(t);
  const educationFields = meta.education || fallbackEducation(t);
  const contactFields = meta.contact || fallbackContact(t);

  // Sidebar shows first 6 personal fields
  const sidebarFields = personalFields.slice(0, 6);
  const mainPersonalFields = personalFields.slice(6);

  return (
    <div id="biodata-preview" style={{ width: 794, minHeight: 1123, display: 'flex', fontFamily: 'Georgia,serif', boxSizing: 'border-box' }}>
      <div style={{ width: 210, background: 'linear-gradient(160deg,#0f172a,#1e3a5f)', padding: '32px 20px', color: '#f8fafc', flexShrink: 0 }}>
        {photos?.[0] && <div style={{ width: 160, height: 160, borderRadius: '50%', overflow: 'hidden', margin: '0 auto 18px', border: '3px solid #f59e0b' }}><img src={photos[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>}
        <div style={{ textAlign: 'center', marginBottom: 24, borderBottom: '1px solid rgba(245,158,11,0.3)', paddingBottom: 16 }}>
          <div style={{ fontSize: 16, fontWeight: 'bold', color: '#fde68a', lineHeight: 1.3 }}>{data.fullName}</div>
          <div style={{ fontSize: 10, color: '#94a3b8', marginTop: 4, fontFamily: 'Helvetica,sans-serif' }}>{data.occupation || 'Biodata'}</div>
        </div>
        <DynamicSection title="" fields={sidebarFields} data={fd} styles={sidebarStyles} />
        {photos?.[1] && <div style={{ width: '100%', height: 100, borderRadius: 8, overflow: 'hidden', marginTop: 16, border: '2px solid rgba(245,158,11,0.4)' }}><img src={photos[1]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>}
      </div>
      <div style={{ flex: 1, padding: '32px 36px', background: '#fff' }}>
        <div style={{ borderLeft: '4px solid #f59e0b', paddingLeft: 14, marginBottom: 24 }}>
          <div style={{ fontSize: 10, color: '#94a3b8', letterSpacing: 4, textTransform: 'uppercase', fontFamily: 'Helvetica,sans-serif' }}>Marriage Biodata</div>
          <div style={{ fontSize: 22, fontWeight: 'bold', color: '#0f172a', letterSpacing: 1 }}>{data.fullName}</div>
        </div>
        {mainPersonalFields.length > 0 && <DynamicSection title={t.personalDetails || 'Personal Details'} fields={mainPersonalFields} data={fd} styles={styles} />}
        <DynamicSection title={t.familyDetails || 'Family Details'} fields={familyFields} data={fd} styles={styles} />
        <DynamicSection title={t.educationCareer || 'Education & Career'} fields={educationFields} data={fd} styles={styles} />
        <DynamicSection title={t.contactDetails || 'Contact Details'} fields={contactFields} data={fd} styles={styles} />
        {data.expectations && <DynamicSection title={t.partnerExpectations || 'Partner Expectations'} fields={[{ id: 'exp', key: 'expectations', label: '', type: 'textarea', visible: true }]} data={fd} styles={styles} />}
        {customFields && <DynamicCustomFields fields={customFields} styles={styles} />}
        <div style={{ textAlign: 'right', fontSize: 9, color: '#cbd5e1', marginTop: 16, fontFamily: 'Helvetica,sans-serif' }}>EasyBiodataMaker.com</div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// TEMPLATE 3 — ROSE BLOOM
// ═══════════════════════════════════════════════════════════════════════════════
export function RoseBloomTemplate({ data, photos, customFields, lang = 'en' }: TemplateProps) {
  const t = TRANSLATIONS[lang] as unknown as Record<string, string>;
  const meta = useFieldMeta();
  const fd = flatData(data);

  const styles = { labelColor: '#9d174d', valueColor: '#1f2937', borderColor: '#fce7f3', headerColor: '#831843', headerBg: 'linear-gradient(90deg,#fce7f3,transparent)', headerStyle: 'solid' as const, headerTextColor: '#831843' };

  return (
    <div id="biodata-preview" style={{ width: 794, minHeight: 1123, background: 'linear-gradient(135deg,#fff0f6,#fdf2f8,#fff)', padding: '36px 50px', fontFamily: '"Times New Roman",serif', boxSizing: 'border-box' }}>
      <div style={{ textAlign: 'center', marginBottom: 6 }}><span style={{ fontSize: 20, color: '#ec4899', letterSpacing: 8 }}>❀ ❀ ❀</span></div>
      <div style={{ height: 3, background: 'linear-gradient(90deg,transparent,#ec4899,#be185d,#ec4899,transparent)', marginBottom: 20 }} />
      <div style={{ textAlign: 'center', marginBottom: 22 }}>
        <div style={{ fontSize: 11, color: '#be185d', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 6, fontFamily: 'Helvetica,sans-serif' }}>Marriage Biodata</div>
        <div style={{ fontSize: 26, color: '#831843', fontWeight: 'bold', fontStyle: 'italic' }}>{data.fullName}</div>
        <div style={{ fontSize: 12, color: '#be185d', marginTop: 4 }}>{data.religion} · {data.caste}</div>
      </div>
      <div style={{ display: 'flex', gap: 24, marginBottom: 16 }}>
        {photos?.[0] && <div style={{ flexShrink: 0 }}><div style={{ width: 120, height: 145, borderRadius: '60px 60px 8px 8px', overflow: 'hidden', border: '3px solid #ec4899' }}><img src={photos[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div></div>}
        <div style={{ flex: 1 }}>
          <DynamicSection title={t.personalDetails || 'Personal Details'} fields={meta.personal || fallbackPersonal(t)} data={fd} styles={styles} />
        </div>
      </div>
      <DynamicSection title={t.familyDetails || 'Family Details'} fields={meta.family || fallbackFamily(t)} data={fd} styles={styles} />
      <DynamicSection title={t.educationCareer || 'Education & Career'} fields={meta.education || fallbackEducation(t)} data={fd} styles={styles} />
      <DynamicSection title={t.contactDetails || 'Contact Details'} fields={meta.contact || fallbackContact(t)} data={fd} styles={styles} />
      {data.expectations && <DynamicSection title={t.partnerExpectations || 'Partner Expectations'} fields={[{ id: 'exp', key: 'expectations', label: '', type: 'textarea', visible: true }]} data={fd} styles={styles} />}
      {customFields && <DynamicCustomFields fields={customFields} styles={styles} />}
      <div style={{ height: 3, background: 'linear-gradient(90deg,transparent,#ec4899,#be185d,#ec4899,transparent)', marginTop: 20 }} />
      <div style={{ textAlign: 'center', marginTop: 8, fontSize: 14, color: '#fbcfe8' }}>❀ ❀ ❀</div>
      <div style={{ textAlign: 'center', fontSize: 9, color: '#d1d5db', marginTop: 4, fontFamily: 'Helvetica,sans-serif' }}>EasyBiodataMaker.com</div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// TEMPLATE 4 — EMERALD MODERN
// ═══════════════════════════════════════════════════════════════════════════════
export function EmeraldModernTemplate({ data, photos, customFields, lang = 'en' }: TemplateProps) {
  const t = TRANSLATIONS[lang] as unknown as Record<string, string>;
  const meta = useFieldMeta();
  const fd = flatData(data);

  const styles = { labelColor: '#166534', valueColor: '#1f2937', borderColor: '#f0fdf4', headerColor: '#15803d', headerStyle: 'dot' as const };

  return (
    <div id="biodata-preview" style={{ width: 794, minHeight: 1123, background: '#fff', fontFamily: 'Helvetica,sans-serif', boxSizing: 'border-box' }}>
      <div style={{ background: 'linear-gradient(135deg,#14532d,#166534,#15803d)', padding: '28px 48px 20px', color: '#fff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          {photos?.[0] && <div style={{ width: 90, height: 90, borderRadius: '50%', overflow: 'hidden', border: '3px solid rgba(255,255,255,0.4)', flexShrink: 0 }}><img src={photos[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>}
          <div>
            <div style={{ fontSize: 10, color: '#86efac', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 4 }}>Marriage Biodata</div>
            <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: 1 }}>{data.fullName}</div>
            <div style={{ fontSize: 12, color: '#bbf7d0', marginTop: 4 }}>{data.occupation} · {data.city}, {data.state}</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 14 }}>
          {[data.religion, data.caste].filter(Boolean).map(v => (
            <span key={v} style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 20, fontSize: 10, padding: '2px 10px', color: '#f0fdf4' }}>{v}</span>
          ))}
        </div>
      </div>
      <div style={{ padding: '28px 48px' }}>
        <div style={{ display: 'flex', gap: 20, marginBottom: 16 }}>
          <div style={{ flex: 1 }}>
            <DynamicSection title={t.personalDetails || 'Personal Details'} fields={(meta.personal || fallbackPersonal(t)).slice(0, 7)} data={fd} styles={styles} />
          </div>
          <div style={{ flex: 1 }}>
            <DynamicSection title={t.educationCareer || 'Education & Career'} fields={meta.education || fallbackEducation(t)} data={fd} styles={styles} />
          </div>
        </div>
        <DynamicSection title={t.familyDetails || 'Family Details'} fields={meta.family || fallbackFamily(t)} data={fd} styles={styles} />
        <DynamicSection title={t.contactDetails || 'Contact Details'} fields={meta.contact || fallbackContact(t)} data={fd} styles={styles} />
        {data.expectations && <DynamicSection title={t.partnerExpectations || 'Partner Expectations'} fields={[{ id: 'exp', key: 'expectations', label: '', type: 'textarea', visible: true }]} data={fd} styles={styles} />}
        {customFields && <DynamicCustomFields fields={customFields} styles={styles} />}
      </div>
      <div style={{ background: '#f0fdf4', padding: '6px 48px', textAlign: 'right', fontSize: 9, color: '#6b7280' }}>EasyBiodataMaker.com</div>
    </div>
  );
}

export { RoyalNavyGoldTemplate as RoyalGoldTemplate };
