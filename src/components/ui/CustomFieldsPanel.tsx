'use client';

import { Plus, Trash2 } from 'lucide-react';
import type { CustomField } from '@/hooks/useCustomFields';
import { useLang } from '@/lib/LangContext';

interface CustomFieldsPanelProps {
  fields: CustomField[];
  onAdd: () => void;
  onUpdate: (id: string, key: 'label' | 'value', val: string) => void;
  onDelete: (id: string) => void;
}

export default function CustomFieldsPanel({
  fields,
  onAdd,
  onUpdate,
  onDelete,
}: CustomFieldsPanelProps) {
  const { t } = useLang();

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-bold text-maroon-800 text-base">{t.customSection}</h3>
          <p className="text-xs text-gray-400 mt-0.5">Add any extra fields like Horoscope ID, Property, etc.</p>
        </div>
        <button
          type="button"
          onClick={onAdd}
          className="flex items-center gap-1.5 bg-saffron-500 hover:bg-saffron-600 text-white text-xs font-bold px-3 py-2 rounded-lg transition-all shadow-sm hover:shadow-md"
        >
          <Plus size={14} /> {t.addField}
        </button>
      </div>

      {fields.length === 0 ? (
        <button
          type="button"
          onClick={onAdd}
          className="w-full border-2 border-dashed border-amber-300 rounded-xl py-5 text-sm text-saffron-600 hover:bg-saffron-50 hover:border-saffron-400 transition-all flex flex-col items-center gap-1.5"
        >
          <Plus size={20} className="text-saffron-400" />
          <span className="font-semibold">{t.addField}</span>
          <span className="text-xs text-gray-400">Click to add custom fields (e.g., Kundali ID, Vehicle, Property)</span>
        </button>
      ) : (
        <div className="space-y-3">
          {fields.map((field, idx) => (
            <div
              key={field.id}
              className="flex gap-2 items-start bg-amber-50/60 border border-amber-100 rounded-xl p-3 group"
            >
              <div className="w-6 h-6 rounded-full bg-saffron-100 text-saffron-600 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-2">
                {idx + 1}
              </div>
              <div className="flex-1 grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wide mb-1 block">
                    {t.fieldName}
                  </label>
                  <input
                    type="text"
                    value={field.label}
                    onChange={e => onUpdate(field.id, 'label', e.target.value)}
                    placeholder="e.g., Kundali ID"
                    className="form-input text-sm py-2"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wide mb-1 block">
                    {t.fieldValue}
                  </label>
                  <input
                    type="text"
                    value={field.value}
                    onChange={e => onUpdate(field.id, 'value', e.target.value)}
                    placeholder="Enter value"
                    className="form-input text-sm py-2"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={() => onDelete(field.id)}
                className="mt-6 w-8 h-8 rounded-lg bg-red-50 text-red-400 hover:bg-red-100 hover:text-red-600 flex items-center justify-center flex-shrink-0 transition-all opacity-0 group-hover:opacity-100"
                title={t.deleteField}
              >
                <Trash2 size={14} />
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={onAdd}
            className="w-full border border-dashed border-saffron-300 rounded-xl py-2.5 text-sm text-saffron-600 hover:bg-saffron-50 transition-all flex items-center justify-center gap-1.5 font-medium"
          >
            <Plus size={15} /> Add Another Field
          </button>
        </div>
      )}
    </div>
  );
}
