'use client';

import React from 'react';
import { formatDate, calculateAge } from '@/lib/utils';

// Field metadata shape (mirrors DynamicForm's FieldDef, but minimal)
export interface FieldMeta {
  id: string;
  key: string;
  label: string;
  type: string;
  visible: boolean;
}

export interface FieldMetaMap {
  personal?: FieldMeta[];
  family?: FieldMeta[];
  education?: FieldMeta[];
  contact?: FieldMeta[];
}

export interface CustomFieldData {
  id: string;
  label: string;
  value: string;
}

// Render a section of fields dynamically based on metadata + values
export function DynamicSection({
  title,
  fields,
  data,
  styles,
}: {
  title: string;
  fields: FieldMeta[];
  data: Record<string, string>;
  styles: {
    sectionBg?: string;
    labelColor: string;
    valueColor: string;
    borderColor: string;
    headerColor: string;
    headerBg?: string;
    headerTextColor?: string;
    headerStyle?: 'solid' | 'gradient' | 'underline' | 'dot';
  };
}) {
  const visibleFields = fields.filter(f => f.visible);
  const pairs = visibleFields.map(f => ({ label: f.label, value: data[f.key] || '' })).filter(p => p.value);

  if (pairs.length === 0) return null;

  // Section header
  const Header = () => {
    if (styles.headerStyle === 'solid') {
      return (
        <div style={{ background: styles.headerBg || styles.headerColor, padding: '3px 12px', marginBottom: 7, borderRadius: 2 }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: styles.headerTextColor || '#fff', fontFamily: 'Helvetica,sans-serif' }}>{title}</span>
        </div>
      );
    }
    if (styles.headerStyle === 'underline') {
      return (
        <div style={{ fontSize: 11, fontWeight: 700, color: styles.headerColor, margin: '12px 0 5px', borderBottom: `1px solid ${styles.borderColor}`, paddingBottom: 3, fontFamily: 'Helvetica,sans-serif' }}>
          ● {title}
        </div>
      );
    }
    if (styles.headerStyle === 'dot') {
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 7 }}>
          <div style={{ width: 8, height: 8, background: styles.headerColor, borderRadius: '50%', flexShrink: 0 }} />
          <span style={{ fontSize: 11, fontWeight: 700, color: styles.headerColor, textTransform: 'uppercase', letterSpacing: 1, fontFamily: 'Helvetica,sans-serif' }}>{title}</span>
          <div style={{ flex: 1, height: 1, background: styles.borderColor }} />
        </div>
      );
    }
    // Default: gradient divider
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '12px 0 6px' }}>
        <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg,${styles.headerColor},transparent)` }} />
        <span style={{ color: styles.headerColor, fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, whiteSpace: 'nowrap', fontFamily: 'Helvetica,sans-serif' }}>{title}</span>
        <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg,transparent,${styles.headerColor})` }} />
      </div>
    );
  };

  return (
    <div style={{ marginBottom: 14, background: styles.sectionBg }}>
      <Header />
      {pairs.map(({ label, value }) => {
        // Special formatting for date fields
        let displayValue = value;
        if (label.toLowerCase().includes('birth') && label.toLowerCase().includes('date') && value.includes('-')) {
          displayValue = `${formatDate(value)} (${calculateAge(value)})`;
        }

        return (
          <div key={label} style={{ display: 'flex', gap: 8, padding: '3.5px 0', borderBottom: `1px solid ${styles.borderColor}` }}>
            <span style={{ color: styles.labelColor, fontSize: 11, minWidth: 155, fontWeight: 600, fontFamily: 'Helvetica,sans-serif' }}>{label}</span>
            <span style={{ color: styles.valueColor, fontSize: 11, flex: 1, lineHeight: 1.5 }}>{displayValue}</span>
          </div>
        );
      })}
    </div>
  );
}

// Render custom fields at the bottom of any template
export function DynamicCustomFields({
  fields,
  styles,
  sectionTitle = 'Additional Information',
}: {
  fields: CustomFieldData[];
  styles: {
    labelColor: string;
    valueColor: string;
    borderColor: string;
    headerColor: string;
    headerStyle?: 'solid' | 'gradient' | 'underline' | 'dot';
    headerBg?: string;
    headerTextColor?: string;
  };
  sectionTitle?: string;
}) {
  const visible = fields.filter(f => f.label && f.value);
  if (!visible.length) return null;

  return (
    <DynamicSection
      title={sectionTitle}
      fields={visible.map(f => ({ id: f.id, key: f.id, label: f.label, type: 'text', visible: true }))}
      data={Object.fromEntries(visible.map(f => [f.id, f.value]))}
      styles={styles}
    />
  );
}
