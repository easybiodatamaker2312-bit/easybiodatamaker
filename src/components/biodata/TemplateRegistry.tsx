'use client';

import React from 'react';
import { formatDate, calculateAge } from '@/lib/utils';
import type { BiodataFormData } from '@/types/biodata';
import type { CustomField } from '@/hooks/useCustomFields';
import { TRANSLATIONS, type SupportedLanguage } from '@/lib/translations';
import { DynamicSection, DynamicCustomFields, type FieldMeta } from './DynamicRenderer';
import {
  ClassicSaffronTemplate,
  RoyalNavyGoldTemplate,
  RoseBloomTemplate,
  EmeraldModernTemplate,
} from './AllTemplates';

export type { TemplateProps } from './AllTemplates';
export { ClassicSaffronTemplate, RoyalNavyGoldTemplate, RoseBloomTemplate, EmeraldModernTemplate };

interface TP {
  data: BiodataFormData;
  photos?: string[];
  customFields?: CustomField[];
  lang?: SupportedLanguage;
}

function useFieldMeta() {
  if (typeof window === 'undefined') return {};
  try {
    const saved = sessionStorage.getItem('biodataFormData');
    if (!saved) return {};
    const parsed = JSON.parse(saved);
    return (parsed._fieldMeta as Record<string, FieldMeta[]>) || {};
  } catch { return {}; }
}

function flatData(data: Record<string, string>): Record<string, string> {
  const d = { ...data };
  if (d.height && d.weight) d['height'] = `${d.height} / ${d.weight}`;
  return d;
}

function fallbackPersonal(): FieldMeta[] {
  return [
    { id: 'dob', key: 'dateOfBirth', label: 'Date of Birth', type: 'date', visible: true },
    { id: 'pob', key: 'placeOfBirth', label: 'Place of Birth', type: 'text', visible: true },
    { id: 'h', key: 'height', label: 'Height', type: 'text', visible: true },
    { id: 'bg', key: 'bloodGroup', label: 'Blood Group', type: 'text', visible: true },
    { id: 'g', key: 'gotra', label: 'Gotra', type: 'text', visible: true },
    { id: 'm', key: 'manglik', label: 'Manglik', type: 'text', visible: true },
  ];
}
function fallbackFamily(): FieldMeta[] {
  return [
    { id: 'fn', key: 'fatherName', label: "Father's Name", type: 'text', visible: true },
    { id: 'fo', key: 'fatherOccupation', label: "Father's Occupation", type: 'text', visible: true },
    { id: 'mn', key: 'motherName', label: "Mother's Name", type: 'text', visible: true },
    { id: 'mo', key: 'motherOccupation', label: "Mother's Occupation", type: 'text', visible: true },
    { id: 'np', key: 'nativePlace', label: 'Native Place', type: 'text', visible: true },
  ];
}
function fallbackEducation(): FieldMeta[] {
  return [
    { id: 'hq', key: 'highestQualification', label: 'Qualification', type: 'text', visible: true },
    { id: 'clg', key: 'college', label: 'College', type: 'text', visible: true },
    { id: 'occ', key: 'occupation', label: 'Occupation', type: 'text', visible: true },
    { id: 'org', key: 'organization', label: 'Organization', type: 'text', visible: true },
    { id: 'inc', key: 'annualIncome', label: 'Annual Income', type: 'text', visible: true },
  ];
}
function fallbackContact(): FieldMeta[] {
  return [
    { id: 'addr', key: 'address', label: 'Location', type: 'text', visible: true },
    { id: 'ph', key: 'phone', label: 'Phone', type: 'text', visible: true },
    { id: 'em', key: 'email', label: 'Email', type: 'text', visible: true },
  ];
}

function sib(d: BiodataFormData) {
  const p: string[] = [];
  if (d.brothers && d.brothers !== '') p.push(`${d.brothers} Bro${d.marriedBrothers ? ` (${d.marriedBrothers}M)` : ''}`);
  if (d.sisters && d.sisters !== '') p.push(`${d.sisters} Sis${d.marriedSisters ? ` (${d.marriedSisters}M)` : ''}`);
  return p.join(', ') || undefined;
}

// ═══════════════════════════════════════════════════════════════════════════════
// TEMPLATE 5 — GUJARATI NAVRATRI
// Red-green-gold striped | Gujarati script headers | Festive
// ═══════════════════════════════════════════════════════════════════════════════
export function GujaratiNavratriTemplate({ data, photos, customFields, lang = 'gu' }: TP) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS['gu'];
  const age = calculateAge(data.dateOfBirth);
  const meta = useFieldMeta();
  const fd = flatData(data as unknown as Record<string, string>);
  const dynStyles = { labelColor: '#9a3412', valueColor: '#1c1917', borderColor: '#fed7aa', headerColor: '#dc2626', headerBg: 'linear-gradient(90deg,#dc2626,#ea580c)', headerStyle: 'solid' as const, headerTextColor: '#fff' };
  const R = ({ label, value }: { label: string; value?: string }) => !value ? null : (
    <div style={{ display: 'flex', gap: 8, padding: '3px 0', borderBottom: '1px solid #fed7aa' }}>
      <span style={{ color: '#9a3412', fontSize: 11, minWidth: 150, fontWeight: 600 }}>{label}</span>
      <span style={{ color: '#1c1917', fontSize: 11, flex: 1 }}>{value}</span>
    </div>
  );
  const S = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div style={{ marginBottom: 14 }}>
      <div style={{ background: 'linear-gradient(90deg,#dc2626,#ea580c)', padding: '3px 12px', marginBottom: 7, borderRadius: 2 }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: '#fff', fontFamily: 'Helvetica,sans-serif' }}>{title}</span>
      </div>
      <div style={{ padding: '0 4px' }}>{children}</div>
    </div>
  );
  return (
    <div id="biodata-preview" style={{ width: 794, minHeight: 1123, background: '#fffbeb', padding: '32px 46px', fontFamily: 'Georgia,serif', boxSizing: 'border-box' }}>
      <div style={{ height: 8, background: 'repeating-linear-gradient(90deg,#dc2626 0,#dc2626 20px,#16a34a 20px,#16a34a 40px,#ca8a04 40px,#ca8a04 60px)', marginBottom: 16, borderRadius: 4 }} />
      <div style={{ textAlign: 'center', marginBottom: 20 }}>
        <div style={{ fontSize: 18, color: '#dc2626', marginBottom: 4 }}>🪔 ॐ ✦ ॐ 🪔</div>
        <div style={{ fontSize: 11, color: '#ca8a04', letterSpacing: 3, fontFamily: 'Helvetica,sans-serif' }}>લગ્ન માટે બાયોડેટા</div>
        <div style={{ fontSize: 24, color: '#dc2626', fontWeight: 'bold', margin: '6px 0' }}>{data.fullName}</div>
        <div style={{ fontSize: 11, color: '#16a34a' }}>{data.caste} · {data.city}, {data.state}</div>
      </div>
      <div style={{ display: 'flex', gap: 18, marginBottom: 14 }}>
        {photos?.[0] && <div style={{ flexShrink: 0 }}><div style={{ width: 110, height: 135, border: '3px solid #dc2626', overflow: 'hidden', borderRadius: 4 }}><img src={photos[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div></div>}
        <div style={{ flex: 1 }}>
          <S title={`🌸 ${t.personalDetails}`}>
            <R label={`${t.dateOfBirth}`} value={`${formatDate(data.dateOfBirth)} (${age})`} />
            <R label={t.height} value={data.height} />
            <R label={t.gotra} value={data.gotra} />
            <R label={t.manglik} value={data.manglik} />
            <R label={t.bloodGroup} value={data.bloodGroup} />
          </S>
        </div>
      </div>
      <DynamicSection title={`👨‍👩‍👧 ${t.familyDetails || 'Family Details'}`} fields={meta.family || fallbackFamily()} data={fd} styles={dynStyles} />
      <DynamicSection title={`🎓 ${t.educationCareer || 'Education & Career'}`} fields={meta.education || fallbackEducation()} data={fd} styles={dynStyles} />
      <S title={`📞 ${t.contactDetails}`}>
        <R label={t.address} value={`${data.city}, ${data.state}`} />
        <R label={t.phone} value={data.phone} />
        <R label={t.email} value={data.email} />
      </S>
      {data.expectations && <DynamicSection title={`💝 ${t.partnerExpectations || 'Expectations'}`} fields={[{ id: 'exp', key: 'expectations', label: '', type: 'textarea', visible: true }]} data={fd} styles={dynStyles} />}
      {customFields && customFields.filter(f => f.label && f.value).length > 0 && <S title={`➕ ${t.customSection}`}>{customFields.filter(f => f.label && f.value).map(f => <R key={f.id} label={f.label} value={f.value} />)}</S>}
      <div style={{ height: 8, background: 'repeating-linear-gradient(90deg,#dc2626 0,#dc2626 20px,#16a34a 20px,#16a34a 40px,#ca8a04 40px,#ca8a04 60px)', marginTop: 18, borderRadius: 4 }} />
      <div style={{ textAlign: 'center', fontSize: 9, color: '#d1d5db', marginTop: 6, fontFamily: 'Helvetica,sans-serif' }}>EasyBiodataMaker.com</div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// TEMPLATE 6 — MARATHI WARI
// Orange Ganpati | Devanagari headers | Traditional Maharashtra
// ═══════════════════════════════════════════════════════════════════════════════
export function MarathiWariTemplate({ data, photos, customFields, lang = 'mr' }: TP) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS['mr'];
  const age = calculateAge(data.dateOfBirth);
  const meta = useFieldMeta();
  const fd = flatData(data as unknown as Record<string, string>);
  const dynStyles = { labelColor: '#9a3412', valueColor: '#1c1917', borderColor: '#fed7aa', headerColor: '#ea580c', headerBg: '#ea580c', headerStyle: 'solid' as const, headerTextColor: '#fff' };
  const R = ({ label, value }: { label: string; value?: string }) => !value ? null : (
    <div style={{ display: 'flex', gap: 8, padding: '3.5px 0', borderBottom: '1px solid #fed7aa' }}>
      <span style={{ color: '#9a3412', fontSize: 11, minWidth: 155, fontWeight: 600 }}>{label}</span>
      <span style={{ color: '#1c1917', fontSize: 11, flex: 1 }}>{value}</span>
    </div>
  );
  const S = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div style={{ marginBottom: 14 }}>
      <div style={{ background: '#ea580c', padding: '3px 12px', marginBottom: 7 }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: '#fff', fontFamily: 'Helvetica,sans-serif' }}>{title}</span>
      </div>
      <div style={{ padding: '0 4px' }}>{children}</div>
    </div>
  );
  return (
    <div id="biodata-preview" style={{ width: 794, minHeight: 1123, background: '#fff', padding: '36px 46px', fontFamily: 'Georgia,serif', boxSizing: 'border-box', border: '2px solid #ea580c' }}>
      <div style={{ height: 6, background: 'linear-gradient(90deg,#ea580c,#f97316,#fbbf24,#f97316,#ea580c)', borderRadius: 3, marginBottom: 18 }} />
      <div style={{ textAlign: 'center', marginBottom: 20 }}>
        <div style={{ fontSize: 15, color: '#ea580c', marginBottom: 4 }}>🌼 गणपती बाप्पा मोरया 🌼</div>
        <div style={{ fontSize: 11, color: '#166534', letterSpacing: 3, textTransform: 'uppercase', fontFamily: 'Helvetica,sans-serif' }}>विवाहासाठी बायोडेटा</div>
        <div style={{ fontSize: 24, color: '#7c2d12', fontWeight: 'bold', margin: '6px 0' }}>{data.fullName}</div>
        <div style={{ fontSize: 11, color: '#ea580c' }}>{data.caste} · {data.city}, {data.state}</div>
      </div>
      <div style={{ display: 'flex', gap: 18, marginBottom: 14 }}>
        {photos?.[0] && <div style={{ flexShrink: 0 }}><div style={{ width: 110, height: 135, border: '3px solid #ea580c', overflow: 'hidden', borderRadius: 4 }}><img src={photos[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div></div>}
        <div style={{ flex: 1 }}>
          <S title={`🕉 ${t.personalDetails}`}>
            <R label={t.dateOfBirth} value={`${formatDate(data.dateOfBirth)} (${age})`} />
            <R label={t.placeOfBirth} value={data.placeOfBirth} />
            <R label={t.height} value={data.height} />
            <R label={t.gotra} value={data.gotra} />
            <R label={t.manglik} value={data.manglik} />
          </S>
        </div>
      </div>
      <DynamicSection title={`👨‍👩‍👧 ${t.familyDetails || 'Family Details'}`} fields={meta.family || fallbackFamily()} data={fd} styles={dynStyles} />
      <DynamicSection title={`🎓 ${t.educationCareer || 'Education & Career'}`} fields={meta.education || fallbackEducation()} data={fd} styles={dynStyles} />
      <S title={`📞 ${t.contactDetails}`}>
        <R label={t.address} value={`${data.city}, ${data.state}`} />
        <R label={t.phone} value={data.phone} />
        <R label={t.email} value={data.email} />
      </S>
      {data.expectations && <DynamicSection title={`💝 ${t.partnerExpectations || 'Expectations'}`} fields={[{ id: 'exp', key: 'expectations', label: '', type: 'textarea', visible: true }]} data={fd} styles={dynStyles} />}
      {customFields && customFields.filter(f => f.label && f.value).length > 0 && <S title={`➕ ${t.customSection}`}>{customFields.filter(f => f.label && f.value).map(f => <R key={f.id} label={f.label} value={f.value} />)}</S>}
      <div style={{ height: 6, background: 'linear-gradient(90deg,#ea580c,#f97316,#fbbf24,#f97316,#ea580c)', borderRadius: 3, marginTop: 18 }} />
      <div style={{ textAlign: 'center', fontSize: 9, color: '#d1d5db', marginTop: 6, fontFamily: 'Helvetica,sans-serif' }}>EasyBiodataMaker.com</div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// TEMPLATE 7 — HINDI SHAADI
// Deep red double-border | Devanagari | UP/Bihar traditional
// ═══════════════════════════════════════════════════════════════════════════════
export function HindiShaadiTemplate({ data, photos, customFields, lang = 'hi' }: TP) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS['hi'];
  const age = calculateAge(data.dateOfBirth);
  const meta = useFieldMeta();
  const fd = flatData(data as unknown as Record<string, string>);
  const dynStyles = { labelColor: '#7c1d2e', valueColor: '#1c1917', borderColor: '#fde68a', headerColor: '#7c1d2e', headerStyle: 'underline' as const };
  const R = ({ label, value }: { label: string; value?: string }) => !value ? null : (
    <div style={{ display: 'flex', gap: 8, padding: '3.5px 0', borderBottom: '1px solid #fde68a' }}>
      <span style={{ color: '#7c1d2e', fontSize: 11, minWidth: 155, fontWeight: 600 }}>{label}</span>
      <span style={{ color: '#1c1917', fontSize: 11, flex: 1 }}>{value}</span>
    </div>
  );
  const SH = ({ title }: { title: string }) => (
    <div style={{ fontSize: 11, fontWeight: 700, color: '#7c1d2e', margin: '12px 0 5px', borderBottom: '1px solid #c9a227', paddingBottom: 3, fontFamily: 'Helvetica,sans-serif' }}>● {title}</div>
  );
  return (
    <div id="biodata-preview" style={{ width: 794, minHeight: 1123, background: '#fdf6e3', padding: '36px 46px', fontFamily: 'Georgia,serif', boxSizing: 'border-box' }}>
      <div style={{ border: '2px solid #7c1d2e', padding: 6 }}>
        <div style={{ border: '1px solid #c9a227', padding: '28px 32px' }}>
          <div style={{ textAlign: 'center', marginBottom: 20 }}>
            <div style={{ fontSize: 16, color: '#7c1d2e', marginBottom: 6 }}>ॐ श्री गणेशाय नमः</div>
            <div style={{ height: 2, background: 'linear-gradient(90deg,transparent,#c9a227,transparent)', marginBottom: 10 }} />
            <div style={{ fontSize: 11, letterSpacing: 3, color: '#7c1d2e', textTransform: 'uppercase', fontFamily: 'Helvetica,sans-serif' }}>विवाह हेतु जीवन परिचय</div>
            <div style={{ fontSize: 24, color: '#4a0011', fontWeight: 'bold', margin: '6px 0' }}>{data.fullName}</div>
            <div style={{ fontSize: 11, color: '#7c1d2e' }}>{data.religion} · {data.caste} · {data.city}</div>
          </div>
          <div style={{ display: 'flex', gap: 18, marginBottom: 10 }}>
            {photos?.[0] && <div style={{ flexShrink: 0 }}><div style={{ width: 110, height: 135, border: '2px solid #c9a227', overflow: 'hidden' }}><img src={photos[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div></div>}
            <div style={{ flex: 1 }}>
              <SH title={t.personalDetails} />
              <R label={t.dateOfBirth} value={`${formatDate(data.dateOfBirth)} (${age})`} />
              <R label={t.placeOfBirth} value={data.placeOfBirth} />
              <R label={t.height} value={data.height} />
              <R label={t.gotra} value={data.gotra} />
              <R label={t.manglik} value={data.manglik} />
            </div>
          </div>
          <SH title={t.familyDetails} />
          <R label={t.fatherName} value={[data.fatherName, data.fatherOccupation].filter(Boolean).join(' – ')} />
          <R label={t.motherName} value={[data.motherName, data.motherOccupation].filter(Boolean).join(' – ')} />
          <R label="Siblings" value={sib(data)} />
          <R label={t.nativePlace} value={[data.familyType, data.nativePlace].filter(Boolean).join(' · ')} />
          <SH title={t.educationCareer} />
          <R label={t.highestQualification} value={[data.highestQualification, data.college].filter(Boolean).join(', ')} />
          <R label={t.occupation} value={data.occupation} />
          <R label={t.organization} value={[data.organization, data.designation].filter(Boolean).join(' – ')} />
          <R label={t.annualIncome} value={data.annualIncome} />
          <SH title={t.contactDetails} />
          <R label={t.address} value={`${data.city}, ${data.state}`} />
          <R label={t.phone} value={data.phone} />
          <R label={t.email} value={data.email} />
          {data.expectations && <><SH title={t.partnerExpectations} /><p style={{ fontSize: 11, color: '#374151', lineHeight: 1.7, padding: '4px 0' }}>{data.expectations}</p></>}
          {customFields && customFields.filter(f => f.label && f.value).length > 0 && <><SH title={t.customSection} />{customFields.filter(f => f.label && f.value).map(f => <R key={f.id} label={f.label} value={f.value} />)}</>}
        </div>
      </div>
      <div style={{ textAlign: 'center', fontSize: 9, color: '#d1d5db', marginTop: 8, fontFamily: 'Helvetica,sans-serif' }}>EasyBiodataMaker.com</div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// TEMPLATE 8 — PURPLE TEMPLE (South Indian)
// Royal purple gradient header | Tamil/Telugu style
// ═══════════════════════════════════════════════════════════════════════════════
export function PurpleTempleTemplate({ data, photos, customFields, lang = 'ta' }: TP) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS['ta'];
  const age = calculateAge(data.dateOfBirth);
  const meta = useFieldMeta();
  const fd = flatData(data as unknown as Record<string, string>);
  const dynStyles = { labelColor: '#5b21b6', valueColor: '#1f2937', borderColor: '#ede9fe', headerColor: '#7c3aed', headerStyle: 'dot' as const };
  const R = ({ label, value }: { label: string; value?: string }) => !value ? null : (
    <div style={{ display: 'flex', gap: 8, padding: '4px 0', borderBottom: '1px solid #ede9fe' }}>
      <span style={{ color: '#5b21b6', fontSize: 11, minWidth: 155, fontWeight: 600 }}>{label}</span>
      <span style={{ color: '#1f2937', fontSize: 11, flex: 1 }}>{value}</span>
    </div>
  );
  const S = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 7 }}>
        <div style={{ width: 8, height: 8, background: '#7c3aed', borderRadius: '50%', flexShrink: 0 }} />
        <span style={{ fontSize: 11, fontWeight: 700, color: '#4c1d95', textTransform: 'uppercase', letterSpacing: 1, fontFamily: 'Helvetica,sans-serif' }}>{title}</span>
        <div style={{ flex: 1, height: 1, background: '#ede9fe' }} />
      </div>
      {children}
    </div>
  );
  return (
    <div id="biodata-preview" style={{ width: 794, minHeight: 1123, background: '#fff', fontFamily: 'Georgia,serif', boxSizing: 'border-box' }}>
      <div style={{ background: 'linear-gradient(135deg,#4c1d95,#6d28d9,#7c3aed)', padding: '28px 48px 20px', color: '#fff' }}>
        <div style={{ fontSize: 11, color: '#ddd6fe', letterSpacing: 4, marginBottom: 8, fontFamily: 'Helvetica,sans-serif' }}>🙏 OM NAMAH SHIVAYA 🙏</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          {photos?.[0] && <div style={{ width: 90, height: 110, border: '3px solid #f59e0b', borderRadius: 4, overflow: 'hidden', flexShrink: 0 }}><img src={photos[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>}
          <div>
            <div style={{ fontSize: 24, fontWeight: 'bold', letterSpacing: 1 }}>{data.fullName}</div>
            <div style={{ fontSize: 11, color: '#c4b5fd', marginTop: 4 }}>{data.religion} · {data.caste}</div>
            <div style={{ display: 'flex', gap: 8, marginTop: 8, flexWrap: 'wrap' }}>
              {[age, data.height, data.occupation].filter(Boolean).map(v => (
                <span key={v} style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 20, fontSize: 10, padding: '2px 10px', color: '#ede9fe', fontFamily: 'Helvetica,sans-serif' }}>{v}</span>
              ))}
            </div>
          </div>
        </div>
        <div style={{ height: 2, background: 'linear-gradient(90deg,transparent,#fbbf24,transparent)', marginTop: 16 }} />
      </div>
      <div style={{ padding: '28px 48px' }}>
        <S title={t.personalDetails}>
          <R label={t.dateOfBirth} value={`${formatDate(data.dateOfBirth)} (${age})`} />
          <R label={t.placeOfBirth} value={data.placeOfBirth} />
          <R label={t.bloodGroup} value={data.bloodGroup} />
          <R label={t.caste} value={[data.caste, data.subCaste].filter(Boolean).join(' / ')} />
          <R label={t.gotra} value={data.gotra} />
          <R label={t.languages} value={data.languages} />
        </S>
        <S title={t.familyDetails}>
          <R label={t.fatherName} value={[data.fatherName, data.fatherOccupation].filter(Boolean).join(' – ')} />
          <R label={t.motherName} value={[data.motherName, data.motherOccupation].filter(Boolean).join(' – ')} />
          <R label="Siblings" value={sib(data)} />
          <R label={t.nativePlace} value={data.nativePlace} />
        </S>
        <S title={t.educationCareer}>
          <R label={t.highestQualification} value={[data.highestQualification, data.fieldOfStudy].filter(Boolean).join(' – ')} />
          <R label={t.college} value={data.college} />
          <R label={t.occupation} value={data.occupation} />
          <R label={t.organization} value={[data.organization, data.designation].filter(Boolean).join(' · ')} />
          <R label={t.annualIncome} value={data.annualIncome} />
        </S>
        <S title={t.contactDetails}>
          <R label={t.address} value={`${data.city}, ${data.state}`} />
          <R label={t.phone} value={data.phone} />
          <R label={t.email} value={data.email} />
        </S>
        {data.expectations && <S title={t.partnerExpectations}><p style={{ fontSize: 12, color: '#374151', lineHeight: 1.7 }}>{data.expectations}</p></S>}
        {customFields && customFields.filter(f => f.label && f.value).length > 0 && <S title={t.customSection}>{customFields.filter(f => f.label && f.value).map(f => <R key={f.id} label={f.label} value={f.value} />)}</S>}
      </div>
      <div style={{ background: 'linear-gradient(135deg,#4c1d95,#7c3aed)', padding: '6px 48px', textAlign: 'right', fontSize: 9, color: '#c4b5fd', fontFamily: 'Helvetica,sans-serif' }}>EasyBiodataMaker.com</div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// TEMPLATE 9 — ISLAMIC GREEN
// Deep forest green | Bismillah Arabic | Mosque arch motif
// ═══════════════════════════════════════════════════════════════════════════════
export function IslamicGreenTemplate({ data, photos, customFields, lang = 'en' }: TP) {
  const t = TRANSLATIONS[lang];
  const age = calculateAge(data.dateOfBirth);
  const meta = useFieldMeta();
  const fd = flatData(data as unknown as Record<string, string>);
  const dynStyles = { labelColor: '#14532d', valueColor: '#1c1917', borderColor: '#bbf7d0', headerColor: '#14532d', headerBg: '#14532d', headerStyle: 'solid' as const, headerTextColor: '#fff' };
  const R = ({ label, value }: { label: string; value?: string }) => !value ? null : (
    <div style={{ display: 'flex', gap: 8, padding: '3.5px 0', borderBottom: '1px solid #bbf7d0' }}>
      <span style={{ color: '#14532d', fontSize: 11, minWidth: 155, fontWeight: 600 }}>{label}</span>
      <span style={{ color: '#1c1917', fontSize: 11, flex: 1 }}>{value}</span>
    </div>
  );
  const S = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div style={{ marginBottom: 14 }}>
      <div style={{ background: '#14532d', padding: '3px 12px', marginBottom: 7, borderRadius: 2 }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: '#fff', fontFamily: 'Helvetica,sans-serif' }}>☽ {title}</span>
      </div>
      <div style={{ padding: '0 4px' }}>{children}</div>
    </div>
  );
  return (
    <div id="biodata-preview" style={{ width: 794, minHeight: 1123, background: '#f0fdf4', padding: '36px 46px', fontFamily: 'Georgia,serif', boxSizing: 'border-box' }}>
      <div style={{ height: 5, background: 'linear-gradient(90deg,#14532d,#16a34a,#22c55e,#16a34a,#14532d)', borderRadius: 3, marginBottom: 20 }} />
      <div style={{ textAlign: 'center', marginBottom: 22 }}>
        <div style={{ fontSize: 22, color: '#14532d', marginBottom: 6 }}>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
        <div style={{ fontSize: 11, color: '#16a34a', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 6, fontFamily: 'Helvetica,sans-serif' }}>Nikah Biodata · Marriage Profile</div>
        <div style={{ fontSize: 24, color: '#14532d', fontWeight: 'bold' }}>{data.fullName}</div>
        <div style={{ fontSize: 11, color: '#16a34a', marginTop: 4 }}>{data.religion} · {data.caste} · {data.city}</div>
      </div>
      <div style={{ display: 'flex', gap: 18, marginBottom: 14 }}>
        {photos?.[0] && <div style={{ flexShrink: 0 }}><div style={{ width: 110, height: 135, border: '3px solid #16a34a', borderRadius: 4, overflow: 'hidden' }}><img src={photos[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div></div>}
        <div style={{ flex: 1 }}>
          <S title={t.personalDetails}>
            <R label={t.dateOfBirth} value={`${formatDate(data.dateOfBirth)} (${age})`} />
            <R label={t.height} value={data.height} />
            <R label={t.bloodGroup} value={data.bloodGroup} />
            <R label="Biradari / Sect" value={[data.caste, data.subCaste].filter(Boolean).join(' / ')} />
            <R label={t.languages} value={data.languages} />
          </S>
        </div>
      </div>
      <S title={t.familyDetails}>
        <R label={t.fatherName} value={[data.fatherName, data.fatherOccupation].filter(Boolean).join(' – ')} />
        <R label={t.motherName} value={[data.motherName, data.motherOccupation].filter(Boolean).join(' – ')} />
        <R label="Siblings" value={sib(data)} />
        <R label={t.familyType} value={[data.familyType, data.nativePlace].filter(Boolean).join(' · ')} />
      </S>
      <S title={t.educationCareer}>
        <R label={t.highestQualification} value={[data.highestQualification, data.college].filter(Boolean).join(', ')} />
        <R label={t.occupation} value={data.occupation} />
        <R label={t.organization} value={[data.organization, data.designation].filter(Boolean).join(' – ')} />
        <R label={t.annualIncome} value={data.annualIncome} />
      </S>
      <S title={t.contactDetails}>
        <R label={t.address} value={`${data.city}, ${data.state}`} />
        <R label={t.phone} value={data.phone} />
        <R label={t.email} value={data.email} />
      </S>
      {data.expectations && <S title="Expectations (Rishta)"><p style={{ fontSize: 11, color: '#374151', lineHeight: 1.7 }}>{data.expectations}</p></S>}
      {customFields && customFields.filter(f => f.label && f.value).length > 0 && <S title={t.customSection}>{customFields.filter(f => f.label && f.value).map(f => <R key={f.id} label={f.label} value={f.value} />)}</S>}
      <div style={{ height: 5, background: 'linear-gradient(90deg,#14532d,#16a34a,#22c55e,#16a34a,#14532d)', borderRadius: 3, marginTop: 18 }} />
      <div style={{ textAlign: 'center', fontSize: 9, color: '#d1d5db', marginTop: 6, fontFamily: 'Helvetica,sans-serif' }}>EasyBiodataMaker.com</div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// TEMPLATE 10 — PUNJABI ROYAL BLUE
// Bold royal blue | Gurmukhi headers | Sikh Anand Karaj style
// ═══════════════════════════════════════════════════════════════════════════════
export function PunjabiRoyalTemplate({ data, photos, customFields, lang = 'pa' }: TP) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS['pa'];
  const age = calculateAge(data.dateOfBirth);
  const meta = useFieldMeta();
  const fd = flatData(data as unknown as Record<string, string>);
  const dynStyles = { labelColor: '#1e40af', valueColor: '#1c1917', borderColor: '#dbeafe', headerColor: '#1d4ed8', headerBg: '#1d4ed8', headerStyle: 'solid' as const, headerTextColor: '#fff' };
  const R = ({ label, value }: { label: string; value?: string }) => !value ? null : (
    <div style={{ display: 'flex', gap: 8, padding: '3.5px 0', borderBottom: '1px solid #dbeafe' }}>
      <span style={{ color: '#1e40af', fontSize: 11, minWidth: 155, fontWeight: 600 }}>{label}</span>
      <span style={{ color: '#1c1917', fontSize: 11, flex: 1 }}>{value}</span>
    </div>
  );
  const S = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div style={{ marginBottom: 14 }}>
      <div style={{ background: '#1d4ed8', padding: '3px 12px', marginBottom: 7 }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: '#fff', fontFamily: 'Helvetica,sans-serif' }}>{title}</span>
      </div>
      <div style={{ padding: '0 4px' }}>{children}</div>
    </div>
  );
  return (
    <div id="biodata-preview" style={{ width: 794, minHeight: 1123, background: '#fff', fontFamily: 'Georgia,serif', boxSizing: 'border-box' }}>
      <div style={{ background: 'linear-gradient(135deg,#1e3a8a,#1d4ed8)', padding: '28px 48px 20px', color: '#fff', textAlign: 'center' }}>
        <div style={{ fontSize: 14, color: '#bfdbfe', marginBottom: 6 }}>ੴ ਵਾਹਿਗੁਰੂ ਜੀ ਕਾ ਖਾਲਸਾ ✦ ਵਾਹਿਗੁਰੂ ਜੀ ਕੀ ਫ਼ਤਿਹ</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
          {photos?.[0] && <div style={{ width: 85, height: 100, border: '3px solid rgba(255,255,255,0.4)', borderRadius: 4, overflow: 'hidden', flexShrink: 0 }}><img src={photos[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>}
          <div>
            <div style={{ fontSize: 24, fontWeight: 'bold', letterSpacing: 2 }}>{data.fullName}</div>
            <div style={{ fontSize: 11, color: '#bfdbfe', marginTop: 4 }}>Vivah Biodata · {data.religion} · {data.caste}</div>
          </div>
        </div>
      </div>
      <div style={{ padding: '28px 46px' }}>
        <S title={`ਨਿੱਜੀ ਜਾਣਕਾਰੀ / ${t.personalDetails}`}>
          <R label={t.dateOfBirth} value={`${formatDate(data.dateOfBirth)} (${age})`} />
          <R label={t.height} value={data.height} />
          <R label={t.gotra} value={data.gotra} />
          <R label={t.manglik} value={data.manglik} />
          <R label={t.bloodGroup} value={data.bloodGroup} />
          <R label={t.languages} value={data.languages} />
        </S>
        <DynamicSection title={`👨‍👩‍👧 ${t.familyDetails || 'Family Details'}`} fields={meta.family || fallbackFamily()} data={fd} styles={dynStyles} />
        <DynamicSection title={`🎓 ${t.educationCareer || 'Education & Career'}`} fields={meta.education || fallbackEducation()} data={fd} styles={dynStyles} />
        <S title={`ਸੰਪਰਕ / ${t.contactDetails}`}>
          <R label={t.address} value={`${data.city}, ${data.state}`} />
          <R label={t.phone} value={data.phone} />
          <R label={t.email} value={data.email} />
        </S>
        {data.expectations && <DynamicSection title={`💝 ${t.partnerExpectations || 'Expectations'}`} fields={[{ id: 'exp', key: 'expectations', label: '', type: 'textarea', visible: true }]} data={fd} styles={dynStyles} />}
        {customFields && customFields.filter(f => f.label && f.value).length > 0 && <S title={t.customSection}>{customFields.filter(f => f.label && f.value).map(f => <R key={f.id} label={f.label} value={f.value} />)}</S>}
      </div>
      <div style={{ background: 'linear-gradient(135deg,#1e3a8a,#1d4ed8)', padding: '6px 48px', textAlign: 'center', fontSize: 9, color: '#93c5fd', fontFamily: 'Helvetica,sans-serif' }}>EasyBiodataMaker.com</div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// TEMPLATE REGISTRY
// ═══════════════════════════════════════════════════════════════════════════════
export const TEMPLATES = {
  classic:   { id: 'classic',   name: 'Classic Saffron',  emoji: '🕉️',  component: ClassicSaffronTemplate,   lang: 'en', community: 'All Hindu',      colors: 'Saffron & Maroon',   defaultLang: 'en' as SupportedLanguage },
  royal:     { id: 'royal',     name: 'Royal Navy Gold',   emoji: '👑',  component: RoyalNavyGoldTemplate,    lang: 'en', community: 'All (Premium)',   colors: 'Navy & Gold',        defaultLang: 'en' as SupportedLanguage },
  rose:      { id: 'rose',      name: 'Rose Bloom',        emoji: '🌸',  component: RoseBloomTemplate,        lang: 'en', community: 'All / Girls',     colors: 'Pink & Rose',        defaultLang: 'en' as SupportedLanguage },
  emerald:   { id: 'emerald',   name: 'Emerald Modern',    emoji: '✦',   component: EmeraldModernTemplate,    lang: 'en', community: 'Urban / NRI',     colors: 'Emerald & White',    defaultLang: 'en' as SupportedLanguage },
  gujarati:  { id: 'gujarati',  name: 'Gujarati Navratri', emoji: '🪔',  component: GujaratiNavratriTemplate, lang: 'gu', community: 'Gujarati',        colors: 'Red, Green & Gold',  defaultLang: 'gu' as SupportedLanguage },
  marathi:   { id: 'marathi',   name: 'Marathi Wari',      emoji: '🌼',  component: MarathiWariTemplate,      lang: 'mr', community: 'Marathi',         colors: 'Orange & Green',     defaultLang: 'mr' as SupportedLanguage },
  hindi:     { id: 'hindi',     name: 'Hindi Shaadi',      emoji: '📜',  component: HindiShaadiTemplate,      lang: 'hi', community: 'Hindi Speaking',  colors: 'Deep Red & Gold',    defaultLang: 'hi' as SupportedLanguage },
  south:     { id: 'south',     name: 'Purple Temple',     emoji: '🌺',  component: PurpleTempleTemplate,     lang: 'ta', community: 'South Indian',    colors: 'Purple & Gold',      defaultLang: 'ta' as SupportedLanguage },
  islamic:   { id: 'islamic',   name: 'Islamic Green',     emoji: '☪️',  component: IslamicGreenTemplate,     lang: 'en', community: 'Muslim',          colors: 'Forest Green & Gold',defaultLang: 'en' as SupportedLanguage },
  punjabi:   { id: 'punjabi',   name: 'Punjabi Royal',     emoji: '🌾',  component: PunjabiRoyalTemplate,     lang: 'pa', community: 'Punjabi / Sikh',  colors: 'Royal Blue & White', defaultLang: 'pa' as SupportedLanguage },
} as const;

export type TemplateId = keyof typeof TEMPLATES;
