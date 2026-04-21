'use client';

import { useFormContext } from 'react-hook-form';
import { FormField, Input, Select } from '@/components/ui/FormField';
import type { BiodataFormData } from '@/types/biodata';
import { useLang } from '@/lib/LangContext';

export default function FamilyDetailsStep() {
  const { register, formState: { errors } } = useFormContext<BiodataFormData>();
  const { t } = useLang();

  return (
    <div className="space-y-5">
      <div className="bg-amber-50/60 rounded-xl p-4 space-y-4 border border-amber-100">
        <h3 className="text-sm font-bold text-maroon-700 uppercase tracking-wide">Parents</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField label={t.fatherName} required error={errors.fatherName?.message}>
            <Input {...register('fatherName')} placeholder={t.phFatherName} error={!!errors.fatherName} />
          </FormField>
          <FormField label={t.fatherOccupation} error={errors.fatherOccupation?.message}>
            <Input {...register('fatherOccupation')} placeholder="e.g., Retired Govt. Officer" error={!!errors.fatherOccupation} />
          </FormField>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField label={t.motherName} required error={errors.motherName?.message}>
            <Input {...register('motherName')} placeholder={t.phMotherName} error={!!errors.motherName} />
          </FormField>
          <FormField label={t.motherOccupation} error={errors.motherOccupation?.message}>
            <Input {...register('motherOccupation')} placeholder="e.g., Homemaker" error={!!errors.motherOccupation} />
          </FormField>
        </div>
      </div>

      <div className="bg-amber-50/60 rounded-xl p-4 space-y-4 border border-amber-100">
        <h3 className="text-sm font-bold text-maroon-700 uppercase tracking-wide">Siblings</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: t.brothers, name: 'brothers' as const },
            { label: t.marriedBrothers, name: 'marriedBrothers' as const },
            { label: t.sisters, name: 'sisters' as const },
            { label: t.marriedSisters, name: 'marriedSisters' as const },
          ].map(({ label, name }) => (
            <FormField key={name} label={label}>
              <Select {...register(name)}>
                <option value="">None</option>
                {['1','2','3','4+'].map(v => <option key={v} value={v}>{v}</option>)}
              </Select>
            </FormField>
          ))}
        </div>
      </div>

      <div className="bg-amber-50/60 rounded-xl p-4 space-y-4 border border-amber-100">
        <h3 className="text-sm font-bold text-maroon-700 uppercase tracking-wide">Background</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField label={t.familyType}>
            <Select {...register('familyType')}>
              <option value="Nuclear">Nuclear Family</option>
              <option value="Joint">Joint Family</option>
              <option value="Extended">Extended Family</option>
            </Select>
          </FormField>
          <FormField label={t.familyStatus}>
            <Select {...register('familyStatus')}>
              <option value="Middle Class">Middle Class</option>
              <option value="Upper Middle Class">Upper Middle Class</option>
              <option value="Rich">Rich</option>
              <option value="Affluent">Affluent</option>
            </Select>
          </FormField>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField label={t.nativePlace}>
            <Input {...register('nativePlace')} placeholder="e.g., Rajkot, Gujarat" />
          </FormField>
          <FormField label={t.maternalGotra}>
            <Input {...register('maternalGotra')} placeholder="e.g., Bharadwaj" />
          </FormField>
        </div>
      </div>
    </div>
  );
}
