'use client';

import { useState, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { saveBiodata } from '@/lib/utils';
import { useLang } from '@/lib/LangContext';
import { useCustomFields } from '@/hooks/useCustomFields';
import LanguageSelector from '@/components/ui/LanguageSelector';
import {
  RELIGIONS, BLOOD_GROUPS, COMPLEXIONS, HEIGHTS, INDIAN_STATES,
} from '@/types/biodata';
import {
  Plus, Trash2, GripVertical, ChevronDown, ChevronUp,
  Globe, Eye, ChevronLeft, ChevronRight, Info, Check,
} from 'lucide-react';

// ─── Field Definitions ────────────────────────────────────────────────────────

export type FieldType = 'text' | 'date' | 'time' | 'tel' | 'email' | 'select' | 'textarea' | 'number';

export interface FieldDef {
  id: string;
  key: string;           // unique key for value storage
  label: string;         // display label (language-aware)
  type: FieldType;
  placeholder?: string;
  options?: string[];    // for select
  required?: boolean;
  value: string;
  visible: boolean;      // user can hide/show
  system?: boolean;      // if true, label can't be edited (but can still be deleted)
}

// ─── Default step fields ──────────────────────────────────────────────────────

function makePersonalFields(t: Record<string, string>): FieldDef[] {
  return [
    { id: 'fullName', key: 'fullName', label: t.fullName || 'Full Name', type: 'text', placeholder: 'e.g., Priya Sharma', required: true, value: '', visible: true, system: true },
    { id: 'dateOfBirth', key: 'dateOfBirth', label: t.dateOfBirth || 'Date of Birth', type: 'date', required: true, value: '', visible: true, system: true },
    { id: 'timeOfBirth', key: 'timeOfBirth', label: t.timeOfBirth || 'Time of Birth', type: 'time', placeholder: 'For kundali matching', value: '', visible: true },
    { id: 'placeOfBirth', key: 'placeOfBirth', label: t.placeOfBirth || 'Place of Birth', type: 'text', placeholder: 'e.g., Ahmedabad, Gujarat', required: true, value: '', visible: true, system: true },
    { id: 'height', key: 'height', label: t.height || 'Height', type: 'select', options: HEIGHTS, required: true, value: '', visible: true, system: true },
    { id: 'weight', key: 'weight', label: t.weight || 'Weight', type: 'text', placeholder: '60 kg', value: '', visible: true },
    { id: 'complexion', key: 'complexion', label: t.complexion || 'Complexion', type: 'select', options: COMPLEXIONS, value: '', visible: true },
    { id: 'bloodGroup', key: 'bloodGroup', label: t.bloodGroup || 'Blood Group', type: 'select', options: BLOOD_GROUPS, value: '', visible: true },
    { id: 'religion', key: 'religion', label: t.religion || 'Religion', type: 'select', options: RELIGIONS, required: true, value: '', visible: true, system: true },
    { id: 'caste', key: 'caste', label: t.caste || 'Caste', type: 'text', placeholder: 'e.g., Patel, Brahmin', required: true, value: '', visible: true, system: true },
    { id: 'subCaste', key: 'subCaste', label: t.subCaste || 'Sub-Caste', type: 'text', placeholder: 'e.g., Leva Patel, Konkanastha', value: '', visible: true },
    { id: 'gotra', key: 'gotra', label: t.gotra || 'Gotra', type: 'text', placeholder: 'e.g., Kashyap', value: '', visible: true },
    { id: 'manglik', key: 'manglik', label: t.manglik || 'Manglik', type: 'select', options: ['No', 'Yes', 'Partial / Anshik', 'Not Known'], value: 'No', visible: true },
    { id: 'hobbies', key: 'hobbies', label: t.hobbies || 'Hobbies & Interests', type: 'text', placeholder: 'e.g., Reading, Cooking, Travel', value: '', visible: true },
    { id: 'languages', key: 'languages', label: t.languages || 'Languages Known', type: 'text', placeholder: 'e.g., Gujarati, Hindi, English', value: '', visible: true },
  ];
}

function makeFamilyFields(t: Record<string, string>): FieldDef[] {
  return [
    { id: 'fatherName', key: 'fatherName', label: t.fatherName || "Father's Name", type: 'text', placeholder: 'e.g., Ramesh Kumar Sharma', required: true, value: '', visible: true, system: true },
    { id: 'fatherOccupation', key: 'fatherOccupation', label: t.fatherOccupation || "Father's Occupation", type: 'text', placeholder: 'e.g., Retired IAS Officer', value: '', visible: true },
    { id: 'motherName', key: 'motherName', label: t.motherName || "Mother's Name", type: 'text', placeholder: 'e.g., Sunita Sharma', required: true, value: '', visible: true, system: true },
    { id: 'motherOccupation', key: 'motherOccupation', label: t.motherOccupation || "Mother's Occupation", type: 'text', placeholder: 'e.g., Homemaker', value: '', visible: true },
    { id: 'brothers', key: 'brothers', label: t.brothers || 'Brothers', type: 'select', options: ['', '0', '1', '2', '3', '4+'], value: '', visible: true },
    { id: 'marriedBrothers', key: 'marriedBrothers', label: t.marriedBrothers || 'Married Brothers', type: 'select', options: ['', '0', '1', '2', '3', '4+'], value: '', visible: true },
    { id: 'sisters', key: 'sisters', label: t.sisters || 'Sisters', type: 'select', options: ['', '0', '1', '2', '3', '4+'], value: '', visible: true },
    { id: 'marriedSisters', key: 'marriedSisters', label: t.marriedSisters || 'Married Sisters', type: 'select', options: ['', '0', '1', '2', '3', '4+'], value: '', visible: true },
    { id: 'familyType', key: 'familyType', label: t.familyType || 'Family Type', type: 'select', options: ['', 'Nuclear', 'Joint', 'Extended'], value: 'Nuclear', visible: true },
    { id: 'familyStatus', key: 'familyStatus', label: t.familyStatus || 'Family Status', type: 'select', options: ['', 'Middle Class', 'Upper Middle Class', 'Rich', 'Affluent'], value: 'Middle Class', visible: true },
    { id: 'nativePlace', key: 'nativePlace', label: t.nativePlace || 'Native Place / Gam', type: 'text', placeholder: 'e.g., Rajkot, Gujarat', value: '', visible: true },
    { id: 'maternalGotra', key: 'maternalGotra', label: t.maternalGotra || 'Maternal Gotra', type: 'text', placeholder: 'e.g., Bharadwaj', value: '', visible: true },
  ];
}

function makeEducationFields(t: Record<string, string>): FieldDef[] {
  return [
    { id: 'highestQualification', key: 'highestQualification', label: t.highestQualification || 'Highest Qualification', type: 'text', placeholder: 'e.g., B.Tech. (CS), IIT Bombay', required: true, value: '', visible: true, system: true },
    { id: 'fieldOfStudy', key: 'fieldOfStudy', label: t.fieldOfStudy || 'Field of Study', type: 'text', placeholder: 'e.g., Computer Science', value: '', visible: true },
    { id: 'college', key: 'college', label: t.college || 'College / University', type: 'text', placeholder: 'e.g., IIT Bombay', value: '', visible: true },
    { id: 'additionalQualification', key: 'additionalQualification', label: t.additionalQualification || 'Additional Qualification', type: 'text', placeholder: 'e.g., CA, MBA, UPSC', value: '', visible: true },
    { id: 'occupation', key: 'occupation', label: t.occupation || 'Occupation', type: 'text', placeholder: 'e.g., Senior Software Engineer', required: true, value: '', visible: true, system: true },
    { id: 'employedIn', key: 'employedIn', label: t.employedIn || 'Employed In', type: 'select', options: ['', 'Government', 'Private', 'Business', 'Self-Employed', 'Not Working'], value: 'Private', visible: true },
    { id: 'organization', key: 'organization', label: t.organization || 'Organization / Company', type: 'text', placeholder: 'e.g., Infosys, Tata Group', value: '', visible: true },
    { id: 'designation', key: 'designation', label: t.designation || 'Designation', type: 'text', placeholder: 'e.g., Deputy Manager', value: '', visible: true },
    { id: 'annualIncome', key: 'annualIncome', label: t.annualIncome || 'Annual Income', type: 'text', placeholder: 'e.g., 12–18 LPA', value: '', visible: true },
    { id: 'workLocation', key: 'workLocation', label: t.workLocation || 'Work Location', type: 'text', placeholder: 'e.g., Bangalore', value: '', visible: true },
  ];
}

function makeContactFields(t: Record<string, string>): FieldDef[] {
  return [
    { id: 'address', key: 'address', label: t.address || 'Full Address', type: 'textarea', placeholder: 'House No., Street, Locality...', required: true, value: '', visible: true, system: true },
    { id: 'city', key: 'city', label: t.city || 'City', type: 'text', placeholder: 'e.g., Ahmedabad', required: true, value: '', visible: true, system: true },
    { id: 'state', key: 'state', label: t.state || 'State', type: 'select', options: ['', ...INDIAN_STATES], required: true, value: '', visible: true, system: true },
    { id: 'pinCode', key: 'pinCode', label: t.pinCode || 'PIN Code', type: 'text', placeholder: '380001', value: '', visible: true },
    { id: 'phone', key: 'phone', label: t.phone || 'Mobile Number', type: 'tel', placeholder: '+91 98765 43210', required: true, value: '', visible: true, system: true },
    { id: 'alternatePhone', key: 'alternatePhone', label: t.alternatePhone || 'Alternate Number', type: 'tel', placeholder: '+91 98765 43210', value: '', visible: true },
    { id: 'email', key: 'email', label: t.email || 'Email Address', type: 'email', placeholder: 'example@gmail.com', value: '', visible: true },
    { id: 'expectations', key: 'expectations', label: t.partnerExpectations || 'Partner Expectations', type: 'textarea', placeholder: 'Describe your ideal partner...', value: '', visible: true },
  ];
}

// ─── Step config ──────────────────────────────────────────────────────────────
type StepKey = 'personal' | 'family' | 'education' | 'contact';

// ─── Single dynamic field row ─────────────────────────────────────────────────
function FieldRow({
  field, onUpdate, onDelete, onToggleVisible, showDragHandle,
}: {
  field: FieldDef;
  onUpdate: (id: string, changes: Partial<FieldDef>) => void;
  onDelete: (id: string) => void;
  onToggleVisible: (id: string) => void;
  showDragHandle?: boolean;
}) {
  const [editingLabel, setEditingLabel] = useState(false);

  const inputClass = `w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent ${!field.visible ? 'opacity-40' : ''}`;

  return (
    <div className={`group relative flex gap-2 items-start p-3 rounded-xl border transition-all ${field.visible ? 'bg-white border-amber-100 hover:border-amber-300' : 'bg-gray-50 border-gray-100'}`}>

      {/* Drag handle (visual only) */}
      {showDragHandle && (
        <div className="flex-shrink-0 mt-2 cursor-grab text-gray-300 hover:text-gray-400">
          <GripVertical size={16} />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 min-w-0">
        {/* Label row */}
        <div className="flex items-center gap-1.5 mb-1.5">
          {editingLabel ? (
            <input
              autoFocus
              className="text-xs font-semibold text-maroon-800 bg-amber-50 border border-saffron-300 rounded px-2 py-0.5 w-full"
              value={field.label}
              onChange={e => onUpdate(field.id, { label: e.target.value })}
              onBlur={() => setEditingLabel(false)}
              onKeyDown={e => e.key === 'Enter' && setEditingLabel(false)}
            />
          ) : (
            <button
              onClick={() => setEditingLabel(true)}
              className="text-xs font-semibold text-maroon-700 hover:text-saffron-600 transition-colors text-left leading-none"
            >
              {field.label}
              {field.required && <span className="text-red-400 ml-0.5">*</span>}
            </button>
          )}
          <span className="text-[9px] text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">(click to rename)</span>
        </div>

        {/* Input */}
        {field.type === 'select' ? (
          <select
            value={field.value}
            onChange={e => onUpdate(field.id, { value: e.target.value })}
            disabled={!field.visible}
            className={inputClass + ' bg-white'}
          >
            {!field.options?.[0] && <option value="">— Select —</option>}
            {field.options?.map(o => <option key={o} value={o}>{o || '— Select —'}</option>)}
          </select>
        ) : field.type === 'textarea' ? (
          <textarea
            rows={2}
            value={field.value}
            onChange={e => onUpdate(field.id, { value: e.target.value })}
            placeholder={field.placeholder}
            disabled={!field.visible}
            className={inputClass + ' resize-none'}
          />
        ) : (
          <input
            type={field.type}
            value={field.value}
            onChange={e => onUpdate(field.id, { value: e.target.value })}
            placeholder={field.placeholder}
            disabled={!field.visible}
            max={field.type === 'date' ? new Date().toISOString().split('T')[0] : undefined}
            className={inputClass}
          />
        )}
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-1 flex-shrink-0 pt-6">
        <button
          onClick={() => onToggleVisible(field.id)}
          title={field.visible ? 'Hide this field' : 'Show this field'}
          className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs transition-all ${field.visible ? 'bg-green-50 text-green-500 hover:bg-green-100' : 'bg-gray-100 text-gray-300 hover:bg-gray-200'}`}
        >
          {field.visible ? <Check size={13} /> : <span className="text-[10px]">–</span>}
        </button>
        <button
          onClick={() => onDelete(field.id)}
          title="Delete field"
          className="w-7 h-7 rounded-lg bg-red-50 text-red-400 hover:bg-red-100 hover:text-red-600 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
        >
          <Trash2 size={12} />
        </button>
      </div>
    </div>
  );
}

// ─── Add Field Button ─────────────────────────────────────────────────────────
function AddFieldButton({ onAdd }: { onAdd: (type: FieldType, label: string) => void }) {
  const [open, setOpen] = useState(false);
  const [label, setLabel] = useState('');
  const [type, setType] = useState<FieldType>('text');

  const handleAdd = () => {
    if (!label.trim()) return;
    onAdd(type, label.trim());
    setLabel('');
    setType('text');
    setOpen(false);
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="w-full mt-2 border-2 border-dashed border-saffron-300 rounded-xl py-2.5 text-sm text-saffron-600 hover:bg-saffron-50 hover:border-saffron-400 transition-all flex items-center justify-center gap-2 font-medium"
      >
        <Plus size={16} /> Add Custom Field
      </button>
    );
  }

  return (
    <div className="mt-2 border-2 border-saffron-300 bg-saffron-50/50 rounded-xl p-3 space-y-2">
      <div className="flex gap-2">
        <input
          autoFocus
          type="text"
          value={label}
          onChange={e => setLabel(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleAdd()}
          placeholder="Field name (e.g., Nakshatra)"
          className="flex-1 px-3 py-2 text-sm border border-saffron-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 bg-white"
        />
        <select
          value={type}
          onChange={e => setType(e.target.value as FieldType)}
          className="px-2 py-2 text-xs border border-saffron-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-saffron-400"
        >
          <option value="text">Text</option>
          <option value="textarea">Long Text</option>
          <option value="select">Dropdown</option>
          <option value="number">Number</option>
          <option value="date">Date</option>
        </select>
      </div>
      <div className="flex gap-2">
        <button onClick={handleAdd} className="flex-1 btn-primary text-xs py-1.5">
          <Plus size={13} /> Add Field
        </button>
        <button onClick={() => setOpen(false)} className="flex-1 btn-secondary text-xs py-1.5">
          Cancel
        </button>
      </div>
    </div>
  );
}

// ─── Step Panel ───────────────────────────────────────────────────────────────
function StepPanel({
  title, emoji, fields, onUpdate, onDelete, onAdd, onToggleVisible,
}: {
  title: string; emoji: string; fields: FieldDef[];
  onUpdate: (id: string, changes: Partial<FieldDef>) => void;
  onDelete: (id: string) => void;
  onAdd: (type: FieldType, label: string) => void;
  onToggleVisible: (id: string) => void;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const visible = fields.filter(f => f.visible).length;

  return (
    <div className="card overflow-hidden">
      <button
        onClick={() => setCollapsed(v => !v)}
        className="w-full flex items-center justify-between p-4 hover:bg-amber-50/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-xl">{emoji}</span>
          <div className="text-left">
            <div className="font-bold text-maroon-800 text-sm">{title}</div>
            <div className="text-xs text-gray-400">{visible}/{fields.length} fields visible</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs bg-saffron-100 text-saffron-700 px-2 py-0.5 rounded-full">{fields.length} fields</span>
          {collapsed ? <ChevronDown size={16} className="text-gray-400" /> : <ChevronUp size={16} className="text-gray-400" />}
        </div>
      </button>

      {!collapsed && (
        <div className="px-4 pb-4 space-y-2 border-t border-amber-50">
          <div className="pt-3 space-y-2">
            {fields.map(field => (
              <FieldRow
                key={field.id}
                field={field}
                onUpdate={onUpdate}
                onDelete={onDelete}
                onToggleVisible={onToggleVisible}
                showDragHandle
              />
            ))}
          </div>
          <AddFieldButton onAdd={onAdd} />
        </div>
      )}
    </div>
  );
}

// ─── Main Dynamic Form ────────────────────────────────────────────────────────
export default function DynamicForm() {
  const router = useRouter();
  const { t, lang, setLang } = useLang();
  const [showLang, setShowLang] = useState(false);
  const [step, setStep] = useState<StepKey>('personal');
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Each step has its own field list
  const [personalFields, setPersonalFields] = useState<FieldDef[]>(() => makePersonalFields(t as unknown as Record<string, string>));
  const [familyFields, setFamilyFields] = useState<FieldDef[]>(() => makeFamilyFields(t as unknown as Record<string, string>));
  const [educationFields, setEducationFields] = useState<FieldDef[]>(() => makeEducationFields(t as unknown as Record<string, string>));
  const [contactFields, setContactFields] = useState<FieldDef[]>(() => makeContactFields(t as unknown as Record<string, string>));
  const { fields: customFields, addField: addCustom, updateField: updateCustom, deleteField: deleteCustom } = useCustomFields();

  // Generic field updaters
  const makeUpdater = (setter: React.Dispatch<React.SetStateAction<FieldDef[]>>) =>
    (id: string, changes: Partial<FieldDef>) =>
      setter(prev => prev.map(f => f.id === id ? { ...f, ...changes } : f));

  const makeDeleter = (setter: React.Dispatch<React.SetStateAction<FieldDef[]>>) =>
    (id: string) => setter(prev => prev.filter(f => f.id !== id));

  const makeToggle = (setter: React.Dispatch<React.SetStateAction<FieldDef[]>>) =>
    (id: string) => setter(prev => prev.map(f => f.id === id ? { ...f, visible: !f.visible } : f));

  const makeAdder = (setter: React.Dispatch<React.SetStateAction<FieldDef[]>>) =>
    (type: FieldType, label: string) => {
      const id = `custom_${Date.now()}`;
      setter(prev => [...prev, {
        id, key: id, label, type,
        placeholder: `Enter ${label.toLowerCase()}`,
        value: '', visible: true,
      }]);
    };

  // Validation
  function validate(fields: FieldDef[]): boolean {
    const newErrors: Record<string, string> = {};
    fields.forEach(f => {
      if (f.required && f.visible && !f.value.trim()) {
        newErrors[f.id] = `${f.label} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  // Steps config
  const STEPS: { key: StepKey; title: string; emoji: string; fields: FieldDef[]; setter: React.Dispatch<React.SetStateAction<FieldDef[]>> }[] = [
    { key: 'personal', title: 'Personal Details', emoji: '👤', fields: personalFields, setter: setPersonalFields },
    { key: 'family', title: 'Family Details', emoji: '👨‍👩‍👧', fields: familyFields, setter: setFamilyFields },
    { key: 'education', title: 'Education & Career', emoji: '🎓', fields: educationFields, setter: setEducationFields },
    { key: 'contact', title: 'Contact Details', emoji: '📞', fields: contactFields, setter: setContactFields },
  ];

  const stepIdx = STEPS.findIndex(s => s.key === step);
  const currentStep = STEPS[stepIdx];
  const isFirst = stepIdx === 0;
  const isLast = stepIdx === STEPS.length - 1;

  function handleNext() {
    if (!validate(currentStep.fields)) return;
    if (!isLast) {
      setStep(STEPS[stepIdx + 1].key);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      handlePreview();
    }
  }

  function handleBack() {
    if (!isFirst) {
      setStep(STEPS[stepIdx - 1].key);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function handlePreview() {
    setSaving(true);

    // Build flat data object from all fields
    const allFields = [...personalFields, ...familyFields, ...educationFields, ...contactFields];
    const data: Record<string, string> = {};
    allFields.forEach(f => { data[f.key] = f.value; });

    // Include field metadata so preview can reconstruct labels
    const fieldMeta = {
      personal: personalFields.map(f => ({ id: f.id, key: f.key, label: f.label, type: f.type, visible: f.visible, options: f.options })),
      family: familyFields.map(f => ({ id: f.id, key: f.key, label: f.label, type: f.type, visible: f.visible, options: f.options })),
      education: educationFields.map(f => ({ id: f.id, key: f.key, label: f.label, type: f.type, visible: f.visible, options: f.options })),
      contact: contactFields.map(f => ({ id: f.id, key: f.key, label: f.label, type: f.type, visible: f.visible, options: f.options })),
    };

    saveBiodata({ ...data, customFields, lang, _fieldMeta: fieldMeta });
    router.push('/preview');
  }

  const stepTabs: { key: StepKey; label: string; emoji: string }[] = [
    { key: 'personal', label: 'Personal', emoji: '👤' },
    { key: 'family', label: 'Family', emoji: '👨‍👩‍👧' },
    { key: 'education', label: 'Education', emoji: '🎓' },
    { key: 'contact', label: 'Contact', emoji: '📞' },
  ];

  return (
    <div className="max-w-3xl mx-auto">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-2xl font-bold text-maroon-900">Create Your Biodata</h1>
          <p className="text-xs text-gray-400 mt-1">Add, remove, rename any field · All fields dynamic</p>
        </div>
        <button
          onClick={() => setShowLang(v => !v)}
          className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg border transition-all ${showLang ? 'bg-saffron-500 text-white border-saffron-500' : 'bg-white text-gray-600 border-amber-200 hover:border-saffron-300'}`}
        >
          <Globe size={14} /> Language
        </button>
      </div>

      {showLang && <div className="mb-4"><LanguageSelector /></div>}

      {/* Info banner */}
      <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-xl p-3 mb-5 text-xs text-amber-800">
        <Info size={14} className="flex-shrink-0 mt-0.5 text-amber-500" />
        <span><strong>Every field is editable.</strong> Click a field label to rename it. Use the ✓ button to show/hide. Use 🗑 to delete. Add new fields with the &ldquo;+ Add Custom Field&rdquo; button at the bottom of each section.</span>
      </div>

      {/* Step tabs */}
      <div className="grid grid-cols-4 gap-1.5 mb-6">
        {stepTabs.map(({ key, label, emoji }, i) => {
          const active = step === key;
          const done = STEPS.findIndex(s => s.key === step) > i;
          return (
            <button
              key={key}
              onClick={() => setStep(key)}
              className={`flex flex-col items-center gap-1 py-2.5 rounded-xl text-xs font-semibold transition-all border ${
                active
                  ? 'bg-saffron-500 text-white border-saffron-500 shadow-md'
                  : done
                  ? 'bg-green-50 text-green-700 border-green-200'
                  : 'bg-white text-gray-500 border-amber-100 hover:border-saffron-300 hover:text-saffron-600'
              }`}
            >
              <span className="text-base">{done && !active ? '✅' : emoji}</span>
              <span className="hidden sm:block">{label}</span>
              <span className="sm:hidden">{i + 1}</span>
            </button>
          );
        })}
      </div>

      {/* Current step fields */}
      <div className="space-y-3">
        {currentStep.fields.map(field => {
          const err = errors[field.id];
          return (
            <div key={field.id} className={err ? 'ring-2 ring-red-300 rounded-xl' : ''}>
              <FieldRow
                field={field}
                onUpdate={makeUpdater(currentStep.setter)}
                onDelete={makeDeleter(currentStep.setter)}
                onToggleVisible={makeToggle(currentStep.setter)}
                showDragHandle
              />
              {err && <p className="text-xs text-red-500 pl-3 mt-0.5">{err}</p>}
            </div>
          );
        })}

        <AddFieldButton onAdd={makeAdder(currentStep.setter)} />
      </div>

      {/* Custom fields section on last step */}
      {isLast && (
        <div className="mt-6 pt-6 border-t border-amber-100">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="font-bold text-maroon-800 text-sm">Extra Fields (Any Step)</h3>
              <p className="text-xs text-gray-400">These appear at the end of your biodata</p>
            </div>
          </div>
          {customFields.length === 0 ? (
            <button
              onClick={addCustom}
              className="w-full border-2 border-dashed border-amber-200 rounded-xl py-4 text-sm text-gray-400 hover:border-saffron-300 hover:text-saffron-600 transition-all flex flex-col items-center gap-1"
            >
              <Plus size={18} />
              <span>Add Extra Field</span>
              <span className="text-xs text-gray-300">e.g., Nakshatra, Kula Deivam, Kundali ID, Property</span>
            </button>
          ) : (
            <div className="space-y-2">
              {customFields.map((cf, i) => (
                <div key={cf.id} className="flex gap-2 items-start bg-amber-50/60 border border-amber-100 rounded-xl p-3">
                  <div className="w-5 h-5 rounded-full bg-saffron-100 text-saffron-700 text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-2">{i + 1}</div>
                  <div className="flex-1 grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={cf.label}
                      onChange={e => updateCustom(cf.id, 'label', e.target.value)}
                      placeholder="Field name"
                      className="px-3 py-2 text-xs border border-amber-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-saffron-400 bg-white"
                    />
                    <input
                      type="text"
                      value={cf.value}
                      onChange={e => updateCustom(cf.id, 'value', e.target.value)}
                      placeholder="Value"
                      className="px-3 py-2 text-xs border border-amber-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-saffron-400 bg-white"
                    />
                  </div>
                  <button
                    onClick={() => deleteCustom(cf.id)}
                    className="mt-2 w-7 h-7 bg-red-50 text-red-400 hover:bg-red-100 hover:text-red-600 rounded-lg flex items-center justify-center transition-all"
                  >
                    <Trash2 size={12} />
                  </button>
                </div>
              ))}
              <button
                onClick={addCustom}
                className="w-full border border-dashed border-saffron-300 rounded-xl py-2 text-xs text-saffron-600 hover:bg-saffron-50 transition-all flex items-center justify-center gap-1 font-medium"
              >
                <Plus size={13} /> Add Another Extra Field
              </button>
            </div>
          )}
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between items-center mt-8 pt-5 border-t border-amber-100">
        <button
          onClick={handleBack}
          disabled={isFirst}
          className="btn-secondary disabled:opacity-40 disabled:cursor-not-allowed text-sm"
        >
          <ChevronLeft size={16} /> Back
        </button>
        <span className="text-xs text-gray-400 hidden sm:block">
          Step {stepIdx + 1} of 4 · {saving ? 'Saving...' : 'Data stays in browser'}
        </span>
        <button onClick={handleNext} className="btn-primary text-sm">
          {isLast ? <><Eye size={16} /> Preview Biodata</> : <>Next <ChevronRight size={16} /></>}
        </button>
      </div>
    </div>
  );
}
