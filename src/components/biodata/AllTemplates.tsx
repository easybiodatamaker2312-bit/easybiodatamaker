'use client';

import React from 'react';
import { formatDate, calculateAge } from '@/lib/utils';
import type { BiodataFormData } from '@/types/biodata';

// ─── Shared types ─────────────────────────────────────────────────────────────
interface TemplateProps {
  data: BiodataFormData;
  photos?: string[]; // base64 photo strings
}

function DataRow({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div style={{ display: 'flex', gap: '8px', padding: '5px 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
      <span style={{ color: '#6b7280', fontSize: '12px', minWidth: '150px', fontWeight: 500 }}>{label}</span>
      <span style={{ color: '#1f2937', fontSize: '12px', fontWeight: 600, flex: 1 }}>{value}</span>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// TEMPLATE 1 – Classic Indian (Saffron & Maroon, ornate borders)
// ═══════════════════════════════════════════════════════════════════════════════
export function ClassicIndianTemplate({ data, photos }: TemplateProps) {
  const age = calculateAge(data.dateOfBirth);
  return (
    <div id="biodata-preview" style={{ width: '794px', minHeight: '1123px', background: '#fff', padding: '36px 48px', fontFamily: 'Georgia, serif', color: '#1a1a1a', position: 'relative', boxSizing: 'border-box' }}>
      {/* Corner ornaments */}
      {['top:0;left:0', 'top:0;right:0;transform:scaleX(-1)', 'bottom:0;left:0;transform:scaleY(-1)', 'bottom:0;right:0;transform:scale(-1)'].map((s, i) => (
        <div key={i} style={{ position: 'absolute', width: '60px', height: '60px', ...Object.fromEntries(s.split(';').map(p => { const [k,v]=p.split(':'); return [k,v]; })) }}>
          <svg viewBox="0 0 60 60" style={{ width: '100%' }}>
            <path d="M0,0 L40,0 L40,4 L4,4 L4,40 L0,40 Z" fill="#8b1a1a" opacity="0.6"/>
            <circle cx="8" cy="8" r="3" fill="#f38e13"/>
          </svg>
        </div>
      ))}

      {/* Top border strip */}
      <div style={{ height: '5px', background: 'linear-gradient(90deg,#8b1a1a,#f38e13,#e9b824,#f38e13,#8b1a1a)', borderRadius: '3px', marginBottom: '20px' }} />

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div style={{ fontSize: '11px', letterSpacing: '5px', color: '#8b1a1a', textTransform: 'uppercase', marginBottom: '6px', fontFamily: 'serif' }}>॥ श्री गणेशाय नमः ॥</div>
        <h1 style={{ fontSize: '28px', color: '#5a0d0d', fontWeight: 'bold', margin: '0 0 4px 0', letterSpacing: '2px' }}>Biodata for Marriage</h1>
        <div style={{ height: '1px', background: 'linear-gradient(90deg,transparent,#e9b824,transparent)', margin: '10px auto', width: '60%' }} />
        <div style={{ fontSize: '20px', color: '#8b1a1a', fontWeight: 'bold', letterSpacing: '1px' }}>{data.fullName}</div>
      </div>

      {/* Photo + Personal side by side */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '18px' }}>
        {photos?.[0] && (
          <div style={{ flexShrink: 0 }}>
            <div style={{ width: '110px', height: '130px', border: '3px solid #8b1a1a', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(139,26,26,0.2)' }}>
              <img src={photos[0]} alt="Candidate" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        )}
        <div style={{ flex: 1 }}>
          <SectionHeader title="Personal Details" color="#8b1a1a" bg="#fff8f0" />
          <DataRow label="Full Name" value={data.fullName} />
          <DataRow label="Date of Birth" value={`${formatDate(data.dateOfBirth)} (${age})`} />
          <DataRow label="Height / Weight" value={[data.height, data.weight].filter(Boolean).join(' / ')} />
          <DataRow label="Complexion" value={data.complexion} />
          <DataRow label="Blood Group" value={data.bloodGroup} />
          <DataRow label="Religion / Caste" value={[data.religion, data.caste, data.subCaste].filter(Boolean).join(' / ')} />
          <DataRow label="Gotra" value={data.gotra} />
          <DataRow label="Manglik" value={data.manglik} />
        </div>
      </div>

      <SectionContent title="Family Details" color="#8b1a1a" bg="#fff8f0">
        <DataRow label="Father's Name" value={data.fatherName} />
        <DataRow label="Father's Occupation" value={data.fatherOccupation} />
        <DataRow label="Mother's Name" value={data.motherName} />
        <DataRow label="Mother's Occupation" value={data.motherOccupation} />
        <DataRow label="Siblings" value={formatSiblings(data)} />
        <DataRow label="Family Type" value={[data.familyType, data.familyStatus].filter(Boolean).join(' · ')} />
        <DataRow label="Native Place" value={data.nativePlace} />
      </SectionContent>

      <SectionContent title="Education & Career" color="#8b1a1a" bg="#fff8f0">
        <DataRow label="Qualification" value={[data.highestQualification, data.fieldOfStudy].filter(Boolean).join(', ')} />
        <DataRow label="College" value={data.college} />
        <DataRow label="Occupation" value={data.occupation} />
        <DataRow label="Organization" value={[data.organization, data.designation].filter(Boolean).join(' – ')} />
        <DataRow label="Annual Income" value={data.annualIncome} />
        <DataRow label="Work Location" value={data.workLocation} />
      </SectionContent>

      <SectionContent title="Contact Details" color="#8b1a1a" bg="#fff8f0">
        <DataRow label="Address" value={`${data.address}, ${data.city}, ${data.state}`} />
        <DataRow label="Mobile" value={[data.phone, data.alternatePhone].filter(Boolean).join(' / ')} />
        <DataRow label="Email" value={data.email} />
      </SectionContent>

      {data.expectations && (
        <SectionContent title="Partner Expectations" color="#8b1a1a" bg="#fff8f0">
          <p style={{ fontSize: '12px', color: '#374151', lineHeight: '1.7', padding: '4px 0' }}>{data.expectations}</p>
        </SectionContent>
      )}

      <div style={{ height: '5px', background: 'linear-gradient(90deg,#8b1a1a,#f38e13,#e9b824,#f38e13,#8b1a1a)', borderRadius: '3px', marginTop: '20px' }} />
      <div style={{ textAlign: 'center', marginTop: '8px', fontSize: '9px', color: '#d1d5db' }}>Created with EasyBiodataMaker.com · Free Marriage Biodata Maker</div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// TEMPLATE 2 – Royal Gold (Deep navy, gold, regal)
// ═══════════════════════════════════════════════════════════════════════════════
export function RoyalGoldTemplate({ data, photos }: TemplateProps) {
  const age = calculateAge(data.dateOfBirth);
  return (
    <div id="biodata-preview" style={{ width: '794px', minHeight: '1123px', background: 'linear-gradient(160deg, #0f172a 0%, #1e293b 100%)', padding: '0', fontFamily: 'Georgia, serif', color: '#f8fafc', boxSizing: 'border-box' }}>
      {/* Gold header band */}
      <div style={{ background: 'linear-gradient(90deg,#78350f,#d97706,#f59e0b,#d97706,#78350f)', padding: '3px 0' }} />

      <div style={{ padding: '36px 48px' }}>
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '24px', borderBottom: '1px solid rgba(245,158,11,0.3)', paddingBottom: '20px' }}>
          <div style={{ fontSize: '10px', letterSpacing: '6px', color: '#f59e0b', textTransform: 'uppercase', marginBottom: '8px' }}>✦ Marriage Profile ✦</div>
          <h1 style={{ fontSize: '30px', color: '#fde68a', fontWeight: 'bold', margin: '0 0 6px 0', letterSpacing: '3px' }}>{data.fullName}</h1>
          <div style={{ fontSize: '11px', color: '#94a3b8', letterSpacing: '3px', textTransform: 'uppercase' }}>Biodata for Marriage · {data.religion}</div>
        </div>

        <div style={{ display: 'flex', gap: '24px', marginBottom: '20px' }}>
          {photos?.[0] && (
            <div style={{ flexShrink: 0 }}>
              <div style={{ width: '120px', height: '145px', border: '2px solid #f59e0b', borderRadius: '2px', overflow: 'hidden', boxShadow: '0 0 20px rgba(245,158,11,0.3)' }}>
                <img src={photos[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          )}
          <div style={{ flex: 1 }}>
            <RoyalSection title="Personal Details">
              <DataRowDark label="Date of Birth" value={`${formatDate(data.dateOfBirth)} (${age})`} />
              <DataRowDark label="Height" value={data.height} />
              <DataRowDark label="Complexion" value={data.complexion} />
              <DataRowDark label="Religion / Caste" value={[data.religion, data.caste].filter(Boolean).join(' · ')} />
              <DataRowDark label="Gotra / Manglik" value={[data.gotra, data.manglik].filter(Boolean).join(' · ')} />
              <DataRowDark label="Languages" value={data.languages} />
            </RoyalSection>
          </div>
        </div>

        <RoyalSection title="Family Background">
          <DataRowDark label="Father" value={[data.fatherName, data.fatherOccupation].filter(Boolean).join(' – ')} />
          <DataRowDark label="Mother" value={[data.motherName, data.motherOccupation].filter(Boolean).join(' – ')} />
          <DataRowDark label="Siblings" value={formatSiblings(data)} />
          <DataRowDark label="Family" value={[data.familyType, data.familyStatus, data.nativePlace].filter(Boolean).join(' · ')} />
        </RoyalSection>

        <RoyalSection title="Education & Career">
          <DataRowDark label="Qualification" value={[data.highestQualification, data.fieldOfStudy].filter(Boolean).join(', ')} />
          <DataRowDark label="Occupation" value={data.occupation} />
          <DataRowDark label="Company" value={[data.organization, data.designation].filter(Boolean).join(' · ')} />
          <DataRowDark label="Income" value={data.annualIncome} />
        </RoyalSection>

        <RoyalSection title="Contact">
          <DataRowDark label="Location" value={`${data.city}, ${data.state}`} />
          <DataRowDark label="Mobile" value={data.phone} />
          <DataRowDark label="Email" value={data.email} />
        </RoyalSection>

        {data.expectations && <RoyalSection title="Partner Expectations"><p style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: '1.7' }}>{data.expectations}</p></RoyalSection>}
      </div>

      <div style={{ background: 'linear-gradient(90deg,#78350f,#d97706,#f59e0b,#d97706,#78350f)', padding: '3px 0' }} />
      <div style={{ textAlign: 'center', padding: '8px', fontSize: '9px', color: '#475569' }}>EasyBiodataMaker.com</div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// TEMPLATE 3 – Rose Garden (Soft pink floral, feminine, elegant)
// ═══════════════════════════════════════════════════════════════════════════════
export function RoseGardenTemplate({ data, photos }: TemplateProps) {
  const age = calculateAge(data.dateOfBirth);
  return (
    <div id="biodata-preview" style={{ width: '794px', minHeight: '1123px', background: '#fdf2f4', padding: '40px 50px', fontFamily: '"Times New Roman", serif', boxSizing: 'border-box' }}>
      {/* Decorative top */}
      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <div style={{ fontSize: '18px', color: '#be185d', letterSpacing: '8px' }}>❀ ❀ ❀</div>
      </div>
      <div style={{ height: '3px', background: 'linear-gradient(90deg,transparent,#ec4899,#be185d,#ec4899,transparent)', marginBottom: '20px' }} />

      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <div style={{ fontSize: '10px', letterSpacing: '4px', color: '#9d174d', textTransform: 'uppercase', marginBottom: '8px' }}>Marriage Biodata</div>
        <h1 style={{ fontSize: '32px', color: '#831843', fontWeight: 'bold', margin: '0 0 4px 0', fontStyle: 'italic' }}>{data.fullName}</h1>
        <div style={{ fontSize: '11px', color: '#be185d', letterSpacing: '2px' }}>{data.religion} · {data.caste}</div>
      </div>

      <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', marginBottom: '20px' }}>
        {photos?.[0] && (
          <div style={{ flexShrink: 0, textAlign: 'center' }}>
            <div style={{ width: '115px', height: '140px', border: '3px solid #ec4899', borderRadius: '60px 60px 8px 8px', overflow: 'hidden', boxShadow: '0 4px 16px rgba(236,72,153,0.2)' }}>
              <img src={photos[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        )}
        <div style={{ flex: 1 }}>
          <RoseSection title="Personal Details">
            <DataRow label="Date of Birth" value={`${formatDate(data.dateOfBirth)} (${age})`} />
            <DataRow label="Place of Birth" value={data.placeOfBirth} />
            <DataRow label="Height / Weight" value={[data.height, data.weight].filter(Boolean).join(' / ')} />
            <DataRow label="Complexion" value={data.complexion} />
            <DataRow label="Blood Group" value={data.bloodGroup} />
            <DataRow label="Gotra / Manglik" value={[data.gotra, data.manglik].filter(Boolean).join(' · ')} />
            <DataRow label="Hobbies" value={data.hobbies} />
          </RoseSection>
        </div>
      </div>

      <RoseSection title="Family Background">
        <DataRow label="Father's Name" value={[data.fatherName, data.fatherOccupation].filter(Boolean).join(' – ')} />
        <DataRow label="Mother's Name" value={[data.motherName, data.motherOccupation].filter(Boolean).join(' – ')} />
        <DataRow label="Siblings" value={formatSiblings(data)} />
        <DataRow label="Family Type" value={[data.familyType, data.familyStatus].filter(Boolean).join(' · ')} />
        <DataRow label="Native Place" value={data.nativePlace} />
      </RoseSection>

      <RoseSection title="Education & Career">
        <DataRow label="Qualification" value={[data.highestQualification, data.college].filter(Boolean).join(', ')} />
        <DataRow label="Occupation" value={data.occupation} />
        <DataRow label="Organization" value={[data.organization, data.designation].filter(Boolean).join(' · ')} />
        <DataRow label="Annual Income" value={data.annualIncome} />
      </RoseSection>

      <RoseSection title="Contact">
        <DataRow label="Address" value={`${data.city}, ${data.state}`} />
        <DataRow label="Mobile" value={data.phone} />
        <DataRow label="Email" value={data.email} />
      </RoseSection>

      {data.expectations && <RoseSection title="Expectations"><p style={{ fontSize: '12px', color: '#374151', lineHeight: '1.7' }}>{data.expectations}</p></RoseSection>}

      <div style={{ height: '3px', background: 'linear-gradient(90deg,transparent,#ec4899,#be185d,#ec4899,transparent)', marginTop: '20px' }} />
      <div style={{ textAlign: 'center', marginTop: '8px', fontSize: '14px', color: '#fbcfe8' }}>❀ ❀ ❀</div>
      <div style={{ textAlign: 'center', fontSize: '9px', color: '#d1d5db', marginTop: '4px' }}>EasyBiodataMaker.com</div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// TEMPLATE 4 – Modern Minimal (Clean white, slate, contemporary)
// ═══════════════════════════════════════════════════════════════════════════════
export function ModernMinimalTemplate({ data, photos }: TemplateProps) {
  const age = calculateAge(data.dateOfBirth);
  return (
    <div id="biodata-preview" style={{ width: '794px', minHeight: '1123px', background: '#fff', fontFamily: 'Helvetica, Arial, sans-serif', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
      {/* Left sidebar */}
      <div style={{ display: 'flex', minHeight: '1123px' }}>
        <div style={{ width: '220px', background: '#1e293b', padding: '40px 24px', color: '#f8fafc', flexShrink: 0 }}>
          {photos?.[0] && (
            <div style={{ width: '140px', height: '140px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 20px', border: '3px solid #64748b' }}>
              <img src={photos[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          )}
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#f1f5f9', lineHeight: '1.3' }}>{data.fullName}</div>
            <div style={{ fontSize: '10px', color: '#64748b', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '2px' }}>{data.occupation}</div>
          </div>
          <div style={{ borderTop: '1px solid #334155', paddingTop: '20px' }}>
            {[
              { label: 'Age', value: age },
              { label: 'Height', value: data.height },
              { label: 'Religion', value: data.religion },
              { label: 'Caste', value: data.caste },
              { label: 'Manglik', value: data.manglik },
              { label: 'City', value: data.city },
              { label: 'Mobile', value: data.phone },
            ].map(({ label, value }) => value ? (
              <div key={label} style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '9px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '2px' }}>{label}</div>
                <div style={{ fontSize: '12px', color: '#e2e8f0' }}>{value}</div>
              </div>
            ) : null)}
          </div>
        </div>

        {/* Main content */}
        <div style={{ flex: 1, padding: '40px 36px' }}>
          <div style={{ borderLeft: '4px solid #1e293b', paddingLeft: '16px', marginBottom: '28px' }}>
            <div style={{ fontSize: '10px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '3px' }}>Marriage Biodata</div>
            <div style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', letterSpacing: '1px' }}>{data.fullName}</div>
          </div>

          <MinimalSection title="Personal">
            <MinDataRow label="Date of Birth" value={`${formatDate(data.dateOfBirth)} (${age})`} />
            <MinDataRow label="Place of Birth" value={data.placeOfBirth} />
            <MinDataRow label="Blood Group" value={data.bloodGroup} />
            <MinDataRow label="Gotra" value={data.gotra} />
            <MinDataRow label="Hobbies" value={data.hobbies} />
            <MinDataRow label="Languages" value={data.languages} />
          </MinimalSection>

          <MinimalSection title="Family">
            <MinDataRow label="Father" value={[data.fatherName, data.fatherOccupation].filter(Boolean).join(' · ')} />
            <MinDataRow label="Mother" value={[data.motherName, data.motherOccupation].filter(Boolean).join(' · ')} />
            <MinDataRow label="Siblings" value={formatSiblings(data)} />
            <MinDataRow label="Family Type" value={[data.familyType, data.nativePlace].filter(Boolean).join(' · ')} />
          </MinimalSection>

          <MinimalSection title="Education">
            <MinDataRow label="Degree" value={[data.highestQualification, data.fieldOfStudy].filter(Boolean).join(' in ')} />
            <MinDataRow label="College" value={data.college} />
            <MinDataRow label="Extra" value={data.additionalQualification} />
          </MinimalSection>

          <MinimalSection title="Career">
            <MinDataRow label="Occupation" value={data.occupation} />
            <MinDataRow label="Sector" value={data.employedIn} />
            <MinDataRow label="Company" value={data.organization} />
            <MinDataRow label="Designation" value={data.designation} />
            <MinDataRow label="Income" value={data.annualIncome} />
          </MinimalSection>

          {data.expectations && <MinimalSection title="Expectations"><p style={{ fontSize: '11px', color: '#475569', lineHeight: '1.7' }}>{data.expectations}</p></MinimalSection>}

          <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid #e2e8f0', fontSize: '9px', color: '#cbd5e1', textAlign: 'right' }}>EasyBiodataMaker.com</div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// TEMPLATE 5 – Gujarati Festive (Navratri colors: green, red, gold)
// ═══════════════════════════════════════════════════════════════════════════════
export function GujaratiTemplate({ data, photos }: TemplateProps) {
  const age = calculateAge(data.dateOfBirth);
  return (
    <div id="biodata-preview" style={{ width: '794px', minHeight: '1123px', background: '#fffbeb', padding: '36px 48px', fontFamily: 'Georgia, serif', boxSizing: 'border-box' }}>
      {/* Navratri top pattern */}
      <div style={{ height: '8px', background: 'repeating-linear-gradient(90deg, #dc2626 0px, #dc2626 20px, #16a34a 20px, #16a34a 40px, #ca8a04 40px, #ca8a04 60px)', marginBottom: '16px', borderRadius: '4px' }} />

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div style={{ fontSize: '16px', color: '#dc2626', marginBottom: '4px' }}>🪔 ॐ ✦ ॐ 🪔</div>
        <div style={{ fontSize: '12px', letterSpacing: '3px', color: '#ca8a04', textTransform: 'uppercase', fontStyle: 'italic' }}>લગ્ન માટે બાયોડેટા | Lagna Biodata</div>
        <h1 style={{ fontSize: '28px', color: '#dc2626', fontWeight: 'bold', margin: '8px 0 4px 0' }}>{data.fullName}</h1>
        <div style={{ fontSize: '12px', color: '#16a34a' }}>{data.caste} · {data.city}, {data.state}</div>
      </div>

      <div style={{ display: 'flex', gap: '20px', marginBottom: '16px' }}>
        {photos?.[0] && (
          <div style={{ flexShrink: 0 }}>
            <div style={{ width: '110px', height: '135px', border: '3px solid #dc2626', borderRadius: '4px', overflow: 'hidden' }}>
              <img src={photos[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        )}
        <div style={{ flex: 1 }}>
          <GujaSection title="🌸 વ્યક્તિગત માહિતી (Personal Details)">
            <DataRow label="જન્મ તારીખ / DOB" value={`${formatDate(data.dateOfBirth)} (${age})`} />
            <DataRow label="ઊંચાઈ / Height" value={data.height} />
            <DataRow label="ગોત્ર / Gotra" value={data.gotra} />
            <DataRow label="મંગળીક / Manglik" value={data.manglik} />
            <DataRow label="ધર્મ / Religion" value={data.religion} />
          </GujaSection>
        </div>
      </div>

      <GujaSection title="👨‍👩‍👧 કૌટુંબિક વિગત (Family Details)">
        <DataRow label="પિતાનું નામ / Father" value={[data.fatherName, data.fatherOccupation].filter(Boolean).join(' – ')} />
        <DataRow label="માતાનું નામ / Mother" value={[data.motherName, data.motherOccupation].filter(Boolean).join(' – ')} />
        <DataRow label="ભાઈ-બહેન / Siblings" value={formatSiblings(data)} />
        <DataRow label="કુટુંબ / Family" value={[data.familyType, data.nativePlace].filter(Boolean).join(' – ')} />
      </GujaSection>

      <GujaSection title="🎓 શિક્ષણ અને વ્યવસાય (Education & Career)">
        <DataRow label="અભ્યાસ / Education" value={[data.highestQualification, data.college].filter(Boolean).join(', ')} />
        <DataRow label="નોકરી / Occupation" value={data.occupation} />
        <DataRow label="કંપની / Company" value={[data.organization, data.designation].filter(Boolean).join(' – ')} />
        <DataRow label="આવક / Income" value={data.annualIncome} />
      </GujaSection>

      <GujaSection title="📞 સંપર્ક (Contact)">
        <DataRow label="સરનામું / Address" value={`${data.city}, ${data.state}`} />
        <DataRow label="ફોન / Mobile" value={data.phone} />
        <DataRow label="ઇ-મેઇલ / Email" value={data.email} />
      </GujaSection>

      {data.expectations && <GujaSection title="💝 અપેક્ષા (Expectations)"><p style={{ fontSize: '12px', color: '#374151', lineHeight: '1.7' }}>{data.expectations}</p></GujaSection>}

      <div style={{ height: '8px', background: 'repeating-linear-gradient(90deg, #dc2626 0px, #dc2626 20px, #16a34a 20px, #16a34a 40px, #ca8a04 40px, #ca8a04 60px)', marginTop: '20px', borderRadius: '4px' }} />
      <div style={{ textAlign: 'center', fontSize: '9px', color: '#d1d5db', marginTop: '6px' }}>EasyBiodataMaker.com</div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// TEMPLATE 6 – Marathi Tradition (Wari-inspired, saffron & green)
// ═══════════════════════════════════════════════════════════════════════════════
export function MarathiTemplate({ data, photos }: TemplateProps) {
  const age = calculateAge(data.dateOfBirth);
  return (
    <div id="biodata-preview" style={{ width: '794px', minHeight: '1123px', background: '#fff', padding: '36px 48px', fontFamily: 'Georgia, serif', boxSizing: 'border-box', border: '2px solid #ea580c' }}>
      <div style={{ height: '6px', background: 'linear-gradient(90deg,#ea580c,#f97316,#fbbf24,#f97316,#ea580c)', borderRadius: '3px', marginBottom: '18px' }} />

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div style={{ fontSize: '13px', color: '#ea580c', marginBottom: '4px' }}>🌼 गणपती बाप्पा मोरया 🌼</div>
        <div style={{ fontSize: '11px', letterSpacing: '3px', color: '#166534', textTransform: 'uppercase' }}>विवाहासाठी बायोडेटा | Vivahachi Biodata</div>
        <h1 style={{ fontSize: '26px', color: '#7c2d12', fontWeight: 'bold', margin: '8px 0 4px 0' }}>{data.fullName}</h1>
        <div style={{ fontSize: '12px', color: '#ea580c' }}>{data.caste} · {data.city}, {data.state}</div>
      </div>

      <div style={{ display: 'flex', gap: '20px', marginBottom: '16px' }}>
        {photos?.[0] && (
          <div style={{ flexShrink: 0 }}>
            <div style={{ width: '110px', height: '135px', border: '3px solid #ea580c', borderRadius: '4px', overflow: 'hidden' }}>
              <img src={photos[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        )}
        <div style={{ flex: 1 }}>
          <MarSection title="🕉 वैयक्तिक माहिती (Personal Details)">
            <DataRow label="जन्मतारीख / DOB" value={`${formatDate(data.dateOfBirth)} (${age})`} />
            <DataRow label="जन्मस्थळ / Birth Place" value={data.placeOfBirth} />
            <DataRow label="उंची / Height" value={data.height} />
            <DataRow label="गोत्र / Gotra" value={data.gotra} />
            <DataRow label="मंगळ / Manglik" value={data.manglik} />
          </MarSection>
        </div>
      </div>

      <MarSection title="👪 कौटुंबिक माहिती (Family Details)">
        <DataRow label="वडिलांचे नाव / Father" value={[data.fatherName, data.fatherOccupation].filter(Boolean).join(' – ')} />
        <DataRow label="आईचे नाव / Mother" value={[data.motherName, data.motherOccupation].filter(Boolean).join(' – ')} />
        <DataRow label="भाऊ-बहीण / Siblings" value={formatSiblings(data)} />
        <DataRow label="कुटुंब / Family" value={[data.familyType, data.nativePlace].filter(Boolean).join(' · ')} />
      </MarSection>

      <MarSection title="🎓 शिक्षण व व्यवसाय (Education & Career)">
        <DataRow label="शिक्षण / Education" value={[data.highestQualification, data.college].filter(Boolean).join(', ')} />
        <DataRow label="व्यवसाय / Occupation" value={data.occupation} />
        <DataRow label="कंपनी / Company" value={[data.organization, data.designation].filter(Boolean).join(' – ')} />
        <DataRow label="उत्पन्न / Income" value={data.annualIncome} />
      </MarSection>

      <MarSection title="📞 संपर्क (Contact)">
        <DataRow label="पत्ता / Address" value={`${data.city}, ${data.state}`} />
        <DataRow label="दूरभाष / Mobile" value={data.phone} />
        <DataRow label="ईमेल / Email" value={data.email} />
      </MarSection>

      {data.expectations && <MarSection title="💑 अपेक्षा (Expectations)"><p style={{ fontSize: '12px', color: '#374151', lineHeight: '1.7' }}>{data.expectations}</p></MarSection>}

      <div style={{ height: '6px', background: 'linear-gradient(90deg,#ea580c,#f97316,#fbbf24,#f97316,#ea580c)', borderRadius: '3px', marginTop: '20px' }} />
      <div style={{ textAlign: 'center', fontSize: '9px', color: '#d1d5db', marginTop: '6px' }}>EasyBiodataMaker.com</div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// TEMPLATE 7 – Hindi (Devanagari-accented, royal deep red)
// ═══════════════════════════════════════════════════════════════════════════════
export function HindiTemplate({ data, photos }: TemplateProps) {
  const age = calculateAge(data.dateOfBirth);
  return (
    <div id="biodata-preview" style={{ width: '794px', minHeight: '1123px', background: '#fdf6e3', padding: '36px 48px', fontFamily: 'Georgia, serif', boxSizing: 'border-box' }}>
      <div style={{ border: '2px solid #7c1d2e', padding: '6px', marginBottom: '0' }}>
        <div style={{ border: '1px solid #c9a227', padding: '28px' }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <div style={{ fontSize: '16px', color: '#7c1d2e', marginBottom: '6px' }}>ॐ श्री गणेशाय नमः</div>
            <div style={{ height: '2px', background: 'linear-gradient(90deg,transparent,#c9a227,transparent)', marginBottom: '10px' }} />
            <div style={{ fontSize: '13px', letterSpacing: '3px', color: '#7c1d2e', textTransform: 'uppercase' }}>विवाह हेतु जीवन परिचय</div>
            <h1 style={{ fontSize: '26px', color: '#4a0011', fontWeight: 'bold', margin: '8px 0' }}>{data.fullName}</h1>
            <div style={{ fontSize: '12px', color: '#7c1d2e' }}>{data.religion} · {data.caste} · {data.city}</div>
          </div>

          <div style={{ display: 'flex', gap: '20px', marginBottom: '16px' }}>
            {photos?.[0] && (
              <div style={{ flexShrink: 0 }}>
                <div style={{ width: '110px', height: '135px', border: '2px solid #c9a227', overflow: 'hidden' }}>
                  <img src={photos[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            )}
            <div style={{ flex: 1 }}>
              <HindiSecHead title="● व्यक्तिगत विवरण (Personal Details)" />
              <DataRow label="जन्म तिथि / DOB" value={`${formatDate(data.dateOfBirth)} (${age})`} />
              <DataRow label="जन्म स्थान" value={data.placeOfBirth} />
              <DataRow label="ऊंचाई / Height" value={data.height} />
              <DataRow label="गोत्र / Gotra" value={data.gotra} />
              <DataRow label="मांगलिक" value={data.manglik} />
            </div>
          </div>

          <HindiSecHead title="● पारिवारिक विवरण (Family Details)" />
          <DataRow label="पिता का नाम" value={[data.fatherName, data.fatherOccupation].filter(Boolean).join(' – ')} />
          <DataRow label="माता का नाम" value={[data.motherName, data.motherOccupation].filter(Boolean).join(' – ')} />
          <DataRow label="भाई-बहन" value={formatSiblings(data)} />
          <DataRow label="पारिवारिक स्थिति" value={[data.familyType, data.nativePlace].filter(Boolean).join(' · ')} />

          <HindiSecHead title="● शिक्षा एवं व्यवसाय (Education & Career)" />
          <DataRow label="शिक्षा / Education" value={[data.highestQualification, data.college].filter(Boolean).join(', ')} />
          <DataRow label="व्यवसाय" value={data.occupation} />
          <DataRow label="संस्था / Company" value={[data.organization, data.designation].filter(Boolean).join(' – ')} />
          <DataRow label="वार्षिक आय" value={data.annualIncome} />

          <HindiSecHead title="● संपर्क सूत्र (Contact)" />
          <DataRow label="पता / Address" value={`${data.city}, ${data.state}`} />
          <DataRow label="मोबाइल" value={data.phone} />
          <DataRow label="ईमेल" value={data.email} />

          {data.expectations && <>
            <HindiSecHead title="● जीवनसाथी से अपेक्षा (Expectations)" />
            <p style={{ fontSize: '12px', color: '#374151', lineHeight: '1.7', padding: '4px 0' }}>{data.expectations}</p>
          </>}
        </div>
      </div>
      <div style={{ textAlign: 'center', fontSize: '9px', color: '#d1d5db', marginTop: '8px' }}>EasyBiodataMaker.com</div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// TEMPLATE 8 – South Indian / Tamil (Temple architecture inspired)
// ═══════════════════════════════════════════════════════════════════════════════
export function SouthIndianTemplate({ data, photos }: TemplateProps) {
  const age = calculateAge(data.dateOfBirth);
  return (
    <div id="biodata-preview" style={{ width: '794px', minHeight: '1123px', background: '#fff', padding: '0', fontFamily: 'Georgia, serif', boxSizing: 'border-box' }}>
      {/* Gopuram-inspired header */}
      <div style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9, #4c1d95)', padding: '32px 48px 20px', textAlign: 'center' }}>
        <div style={{ fontSize: '12px', color: '#ddd6fe', letterSpacing: '4px', marginBottom: '6px' }}>🙏 OM NAMAH SHIVAYA 🙏</div>
        <h1 style={{ fontSize: '26px', color: '#fff', fontWeight: 'bold', margin: '0 0 4px 0', letterSpacing: '2px' }}>{data.fullName}</h1>
        <div style={{ fontSize: '11px', color: '#c4b5fd', letterSpacing: '2px' }}>Marriage Biodata · {data.religion} · {data.caste}</div>
        <div style={{ height: '2px', background: 'linear-gradient(90deg,transparent,#fbbf24,transparent)', marginTop: '16px' }} />
      </div>

      <div style={{ padding: '32px 48px' }}>
        <div style={{ display: 'flex', gap: '24px', marginBottom: '20px' }}>
          {photos?.[0] && (
            <div style={{ flexShrink: 0 }}>
              <div style={{ width: '115px', height: '140px', border: '3px solid #7c3aed', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(124,58,237,0.2)' }}>
                <img src={photos[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          )}
          <div style={{ flex: 1 }}>
            <SouthSection title="Personal Details">
              <DataRow label="Date of Birth" value={`${formatDate(data.dateOfBirth)} (${age})`} />
              <DataRow label="Star / Nakshatra" value={data.timeOfBirth ? `Birth Time: ${data.timeOfBirth}` : undefined} />
              <DataRow label="Height / Weight" value={[data.height, data.weight].filter(Boolean).join(' / ')} />
              <DataRow label="Complexion" value={data.complexion} />
              <DataRow label="Caste / Sub-Caste" value={[data.caste, data.subCaste].filter(Boolean).join(' / ')} />
            </SouthSection>
          </div>
        </div>

        <SouthSection title="Family Details">
          <DataRow label="Father's Name" value={[data.fatherName, data.fatherOccupation].filter(Boolean).join(' – ')} />
          <DataRow label="Mother's Name" value={[data.motherName, data.motherOccupation].filter(Boolean).join(' – ')} />
          <DataRow label="Siblings" value={formatSiblings(data)} />
          <DataRow label="Native Place" value={data.nativePlace} />
        </SouthSection>

        <SouthSection title="Education & Career">
          <DataRow label="Qualification" value={[data.highestQualification, data.fieldOfStudy].filter(Boolean).join(' – ')} />
          <DataRow label="College" value={data.college} />
          <DataRow label="Occupation" value={data.occupation} />
          <DataRow label="Organization" value={[data.organization, data.designation].filter(Boolean).join(' – ')} />
          <DataRow label="Annual Income" value={data.annualIncome} />
        </SouthSection>

        <SouthSection title="Contact">
          <DataRow label="Address" value={`${data.city}, ${data.state}`} />
          <DataRow label="Mobile" value={data.phone} />
          <DataRow label="Email" value={data.email} />
        </SouthSection>

        {data.expectations && <SouthSection title="Expectations"><p style={{ fontSize: '12px', color: '#374151', lineHeight: '1.7' }}>{data.expectations}</p></SouthSection>}
      </div>

      <div style={{ background: 'linear-gradient(135deg, #7c3aed, #4c1d95)', padding: '8px', textAlign: 'center', fontSize: '9px', color: '#c4b5fd' }}>EasyBiodataMaker.com</div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// TEMPLATE 9 – Islamic Nikah (Green & gold, Bismillah)
// ═══════════════════════════════════════════════════════════════════════════════
export function IslamicTemplate({ data, photos }: TemplateProps) {
  const age = calculateAge(data.dateOfBirth);
  return (
    <div id="biodata-preview" style={{ width: '794px', minHeight: '1123px', background: '#f0fdf4', padding: '36px 48px', fontFamily: 'Georgia, serif', boxSizing: 'border-box' }}>
      <div style={{ height: '5px', background: 'linear-gradient(90deg,#14532d,#16a34a,#22c55e,#16a34a,#14532d)', borderRadius: '3px', marginBottom: '20px' }} />

      <div style={{ textAlign: 'center', marginBottom: '22px' }}>
        <div style={{ fontSize: '20px', color: '#14532d', marginBottom: '6px', fontFamily: 'serif' }}>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
        <div style={{ fontSize: '10px', letterSpacing: '3px', color: '#16a34a', textTransform: 'uppercase', marginBottom: '6px' }}>Nikah Biodata · Marriage Profile</div>
        <h1 style={{ fontSize: '26px', color: '#14532d', fontWeight: 'bold', margin: '0 0 4px 0' }}>{data.fullName}</h1>
        <div style={{ fontSize: '12px', color: '#16a34a' }}>{data.religion} · {data.caste} · {data.city}</div>
      </div>

      <div style={{ display: 'flex', gap: '20px', marginBottom: '16px' }}>
        {photos?.[0] && (
          <div style={{ flexShrink: 0 }}>
            <div style={{ width: '110px', height: '135px', border: '3px solid #16a34a', borderRadius: '4px', overflow: 'hidden' }}>
              <img src={photos[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        )}
        <div style={{ flex: 1 }}>
          <IslamSection title="Personal Details">
            <DataRow label="Date of Birth" value={`${formatDate(data.dateOfBirth)} (${age})`} />
            <DataRow label="Height / Complexion" value={[data.height, data.complexion].filter(Boolean).join(' / ')} />
            <DataRow label="Blood Group" value={data.bloodGroup} />
            <DataRow label="Biradari / Sect" value={[data.caste, data.subCaste].filter(Boolean).join(' / ')} />
            <DataRow label="Languages" value={data.languages} />
          </IslamSection>
        </div>
      </div>

      <IslamSection title="Family Details">
        <DataRow label="Father's Name" value={[data.fatherName, data.fatherOccupation].filter(Boolean).join(' – ')} />
        <DataRow label="Mother's Name" value={[data.motherName, data.motherOccupation].filter(Boolean).join(' – ')} />
        <DataRow label="Siblings" value={formatSiblings(data)} />
        <DataRow label="Family Type" value={[data.familyType, data.nativePlace].filter(Boolean).join(' · ')} />
      </IslamSection>

      <IslamSection title="Education & Career">
        <DataRow label="Qualification" value={[data.highestQualification, data.college].filter(Boolean).join(', ')} />
        <DataRow label="Occupation" value={data.occupation} />
        <DataRow label="Organization" value={[data.organization, data.designation].filter(Boolean).join(' – ')} />
        <DataRow label="Annual Income" value={data.annualIncome} />
      </IslamSection>

      <IslamSection title="Contact">
        <DataRow label="Address" value={`${data.city}, ${data.state}`} />
        <DataRow label="Mobile" value={data.phone} />
        <DataRow label="Email" value={data.email} />
      </IslamSection>

      {data.expectations && <IslamSection title="Expectations (Rishta)"><p style={{ fontSize: '12px', color: '#374151', lineHeight: '1.7' }}>{data.expectations}</p></IslamSection>}

      <div style={{ height: '5px', background: 'linear-gradient(90deg,#14532d,#16a34a,#22c55e,#16a34a,#14532d)', borderRadius: '3px', marginTop: '20px' }} />
      <div style={{ textAlign: 'center', fontSize: '9px', color: '#d1d5db', marginTop: '6px' }}>EasyBiodataMaker.com</div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// TEMPLATE 10 – Punjab Da Vibe (Bright blue, Bhangra energy)
// ═══════════════════════════════════════════════════════════════════════════════
export function PunjabiTemplate({ data, photos }: TemplateProps) {
  const age = calculateAge(data.dateOfBirth);
  return (
    <div id="biodata-preview" style={{ width: '794px', minHeight: '1123px', background: '#fff', padding: '0', fontFamily: 'Georgia, serif', boxSizing: 'border-box' }}>
      {/* Top band */}
      <div style={{ background: 'linear-gradient(135deg,#1d4ed8,#1e40af)', padding: '28px 48px 20px', color: '#fff', textAlign: 'center' }}>
        <div style={{ fontSize: '14px', color: '#bfdbfe', marginBottom: '6px' }}>ੴ ਵਾਹਿਗੁਰੂ ਜੀ ਕਾ ਖਾਲਸਾ ✦</div>
        <h1 style={{ fontSize: '26px', fontWeight: 'bold', margin: '0 0 4px 0', letterSpacing: '2px' }}>{data.fullName}</h1>
        <div style={{ fontSize: '11px', color: '#bfdbfe', letterSpacing: '2px' }}>Vivah Biodata · {data.religion} · {data.caste}</div>
      </div>

      <div style={{ padding: '30px 48px' }}>
        <div style={{ display: 'flex', gap: '22px', marginBottom: '20px' }}>
          {photos?.[0] && (
            <div style={{ flexShrink: 0 }}>
              <div style={{ width: '115px', height: '140px', border: '3px solid #1d4ed8', borderRadius: '4px', overflow: 'hidden' }}>
                <img src={photos[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          )}
          <div style={{ flex: 1 }}>
            <PunjSection title="ਨਿੱਜੀ ਜਾਣਕਾਰੀ / Personal Details">
              <DataRow label="ਜਨਮ ਤਾਰੀਖ / DOB" value={`${formatDate(data.dateOfBirth)} (${age})`} />
              <DataRow label="ਕੱਦ / Height" value={data.height} />
              <DataRow label="ਗੋਤ / Gotra" value={data.gotra} />
              <DataRow label="ਮੰਗਲਿਕ / Manglik" value={data.manglik} />
              <DataRow label="ਭਾਸ਼ਾ / Languages" value={data.languages} />
            </PunjSection>
          </div>
        </div>

        <PunjSection title="ਪਰਿਵਾਰਕ ਜਾਣਕਾਰੀ / Family Details">
          <DataRow label="ਪਿਤਾ / Father" value={[data.fatherName, data.fatherOccupation].filter(Boolean).join(' – ')} />
          <DataRow label="ਮਾਤਾ / Mother" value={[data.motherName, data.motherOccupation].filter(Boolean).join(' – ')} />
          <DataRow label="ਭੈਣ-ਭਰਾ / Siblings" value={formatSiblings(data)} />
          <DataRow label="ਪਰਿਵਾਰ / Family" value={[data.familyType, data.nativePlace].filter(Boolean).join(' · ')} />
        </PunjSection>

        <PunjSection title="ਸਿੱਖਿਆ ਅਤੇ ਕੈਰੀਅਰ / Education & Career">
          <DataRow label="ਪੜ੍ਹਾਈ / Education" value={[data.highestQualification, data.college].filter(Boolean).join(', ')} />
          <DataRow label="ਕਿੱਤਾ / Occupation" value={data.occupation} />
          <DataRow label="ਕੰਪਨੀ / Company" value={[data.organization, data.designation].filter(Boolean).join(' – ')} />
          <DataRow label="ਆਮਦਨ / Income" value={data.annualIncome} />
        </PunjSection>

        <PunjSection title="ਸੰਪਰਕ / Contact">
          <DataRow label="ਪਤਾ / Address" value={`${data.city}, ${data.state}`} />
          <DataRow label="ਫ਼ੋਨ / Mobile" value={data.phone} />
          <DataRow label="ਈਮੇਲ / Email" value={data.email} />
        </PunjSection>

        {data.expectations && <PunjSection title="ਉਮੀਦਾਂ / Expectations"><p style={{ fontSize: '12px', color: '#374151', lineHeight: '1.7' }}>{data.expectations}</p></PunjSection>}
      </div>

      <div style={{ background: 'linear-gradient(135deg,#1d4ed8,#1e40af)', padding: '8px', textAlign: 'center', fontSize: '9px', color: '#93c5fd' }}>EasyBiodataMaker.com</div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// Helper section components
// ═══════════════════════════════════════════════════════════════════════════════
function SectionHeader({ title, color, bg }: { title: string; color: string; bg: string }) {
  return (
    <div style={{ background: bg, borderLeft: `3px solid ${color}`, padding: '4px 10px', marginBottom: '8px' }}>
      <div style={{ fontSize: '11px', fontWeight: 700, color, textTransform: 'uppercase', letterSpacing: '1px' }}>{title}</div>
    </div>
  );
}

function SectionContent({ title, color, bg, children }: { title: string; color: string; bg: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <SectionHeader title={title} color={color} bg={bg} />
      <div style={{ padding: '0 6px' }}>{children}</div>
    </div>
  );
}

function RoyalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '18px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
        <div style={{ height: '1px', flex: 1, background: 'rgba(245,158,11,0.3)' }} />
        <span style={{ fontSize: '10px', color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '3px', whiteSpace: 'nowrap' }}>{title}</span>
        <div style={{ height: '1px', flex: 1, background: 'rgba(245,158,11,0.3)' }} />
      </div>
      {children}
    </div>
  );
}

function DataRowDark({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div style={{ display: 'flex', gap: '8px', padding: '4px 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
      <span style={{ color: '#94a3b8', fontSize: '11px', minWidth: '140px', fontWeight: 500 }}>{label}</span>
      <span style={{ color: '#e2e8f0', fontSize: '11px', fontWeight: 600, flex: 1 }}>{value}</span>
    </div>
  );
}

function RoseSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <div style={{ borderBottom: '2px solid #ec4899', paddingBottom: '3px', marginBottom: '8px' }}>
        <span style={{ fontSize: '11px', fontWeight: 700, color: '#9d174d', textTransform: 'uppercase', letterSpacing: '2px' }}>✿ {title}</span>
      </div>
      {children}
    </div>
  );
}

function MinimalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '18px' }}>
      <div style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '8px', borderBottom: '1px solid #f1f5f9', paddingBottom: '4px' }}>{title}</div>
      {children}
    </div>
  );
}

function MinDataRow({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div style={{ display: 'flex', gap: '8px', padding: '4px 0' }}>
      <span style={{ color: '#94a3b8', fontSize: '11px', minWidth: '120px' }}>{label}</span>
      <span style={{ color: '#0f172a', fontSize: '11px', fontWeight: 600, flex: 1 }}>{value}</span>
    </div>
  );
}

function GujaSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '14px' }}>
      <div style={{ background: 'linear-gradient(90deg,#dc2626,#ea580c)', padding: '4px 12px', marginBottom: '8px', borderRadius: '2px' }}>
        <span style={{ fontSize: '11px', fontWeight: 700, color: '#fff', letterSpacing: '0.5px' }}>{title}</span>
      </div>
      <div style={{ padding: '0 4px' }}>{children}</div>
    </div>
  );
}

function MarSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '14px' }}>
      <div style={{ background: '#ea580c', padding: '4px 12px', marginBottom: '8px' }}>
        <span style={{ fontSize: '11px', fontWeight: 700, color: '#fff' }}>{title}</span>
      </div>
      <div style={{ padding: '0 4px' }}>{children}</div>
    </div>
  );
}

function HindiSecHead({ title }: { title: string }) {
  return <div style={{ fontSize: '11px', fontWeight: 700, color: '#7c1d2e', margin: '14px 0 6px 0', borderBottom: '1px solid #c9a227', paddingBottom: '3px' }}>{title}</div>;
}

function SouthSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
        <div style={{ width: '8px', height: '8px', background: '#7c3aed', borderRadius: '50%', flexShrink: 0 }} />
        <span style={{ fontSize: '11px', fontWeight: 700, color: '#4c1d95', textTransform: 'uppercase', letterSpacing: '1px' }}>{title}</span>
        <div style={{ flex: 1, height: '1px', background: '#ede9fe' }} />
      </div>
      {children}
    </div>
  );
}

function IslamSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '14px' }}>
      <div style={{ background: '#14532d', padding: '4px 12px', marginBottom: '8px', borderRadius: '2px' }}>
        <span style={{ fontSize: '11px', fontWeight: 700, color: '#fff' }}>☽ {title}</span>
      </div>
      <div style={{ padding: '0 4px' }}>{children}</div>
    </div>
  );
}

function PunjSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '14px' }}>
      <div style={{ background: '#1d4ed8', padding: '4px 12px', marginBottom: '8px' }}>
        <span style={{ fontSize: '11px', fontWeight: 700, color: '#fff' }}>{title}</span>
      </div>
      <div style={{ padding: '0 4px' }}>{children}</div>
    </div>
  );
}

// Utility
function formatSiblings(data: BiodataFormData): string | undefined {
  const parts = [];
  if (data.brothers && data.brothers !== '') parts.push(`${data.brothers} Brother${data.brothers !== '1' ? 's' : ''}${data.marriedBrothers ? ` (${data.marriedBrothers} Married)` : ''}`);
  if (data.sisters && data.sisters !== '') parts.push(`${data.sisters} Sister${data.sisters !== '1' ? 's' : ''}${data.marriedSisters ? ` (${data.marriedSisters} Married)` : ''}`);
  return parts.length ? parts.join(', ') : undefined;
}

// Template registry
export const TEMPLATES = {
  classic: { id: 'classic', name: 'Classic Indian', emoji: '🕉️', component: ClassicIndianTemplate, lang: 'English', colors: 'Saffron & Maroon', community: 'All' },
  royal: { id: 'royal', name: 'Royal Gold', emoji: '👑', component: RoyalGoldTemplate, lang: 'English', colors: 'Navy & Gold', community: 'All' },
  rose: { id: 'rose', name: 'Rose Garden', emoji: '🌸', component: RoseGardenTemplate, lang: 'English', colors: 'Pink & Rose', community: 'All (Girls)' },
  modern: { id: 'modern', name: 'Modern Minimal', emoji: '✦', component: ModernMinimalTemplate, lang: 'English', colors: 'Slate & White', community: 'Urban/NRI' },
  gujarati: { id: 'gujarati', name: 'Gujarati Festive', emoji: '🪔', component: GujaratiTemplate, lang: 'Gujarati + English', colors: 'Red, Green & Gold', community: 'Gujarati' },
  marathi: { id: 'marathi', name: 'Marathi Tradition', emoji: '🌼', component: MarathiTemplate, lang: 'Marathi + English', colors: 'Orange & Green', community: 'Marathi' },
  hindi: { id: 'hindi', name: 'Hindi / Devanagari', emoji: '📜', component: HindiTemplate, lang: 'Hindi + English', colors: 'Deep Red & Gold', community: 'Hindi Speaking' },
  south: { id: 'south', name: 'South Indian', emoji: '🌺', component: SouthIndianTemplate, lang: 'English', colors: 'Purple & Gold', community: 'South India' },
  islamic: { id: 'islamic', name: 'Islamic Nikah', emoji: '☪️', component: IslamicTemplate, lang: 'Arabic Header + English', colors: 'Green & Gold', community: 'Muslim' },
  punjabi: { id: 'punjabi', name: 'Punjabi / Sikh', emoji: '🌾', component: PunjabiTemplate, lang: 'Punjabi + English', colors: 'Royal Blue', community: 'Punjabi/Sikh' },
} as const;

export type TemplateId = keyof typeof TEMPLATES;
