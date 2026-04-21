'use client';

import { useFormContext } from 'react-hook-form';
import { FormField, Input, Select } from '@/components/ui/FormField';
import { RELIGIONS, BLOOD_GROUPS, COMPLEXIONS, HEIGHTS, type BiodataFormData } from '@/types/biodata';
import { useLang } from '@/lib/LangContext';

export default function PersonalDetailsStep() {
  const { register, formState: { errors } } = useFormContext<BiodataFormData>();
  const { t } = useLang();

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField label={t.fullName} required error={errors.fullName?.message}>
          <Input {...register('fullName')} placeholder={t.phFullName} error={!!errors.fullName} />
        </FormField>
        <FormField label={t.dateOfBirth} required error={errors.dateOfBirth?.message}>
          <Input {...register('dateOfBirth')} type="date" max={new Date().toISOString().split('T')[0]} error={!!errors.dateOfBirth} />
        </FormField>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField label={t.timeOfBirth} error={errors.timeOfBirth?.message} hint="For kundali matching">
          <Input {...register('timeOfBirth')} type="time" error={!!errors.timeOfBirth} />
        </FormField>
        <FormField label={t.placeOfBirth} required error={errors.placeOfBirth?.message}>
          <Input {...register('placeOfBirth')} placeholder={t.phPlaceOfBirth} error={!!errors.placeOfBirth} />
        </FormField>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <FormField label={t.height} required error={errors.height?.message}>
          <Select {...register('height')} placeholder="Select" error={!!errors.height}>
            {HEIGHTS.map(h => <option key={h} value={h}>{h}</option>)}
          </Select>
        </FormField>
        <FormField label={t.weight} error={errors.weight?.message}>
          <Input {...register('weight')} placeholder="60 kg" error={!!errors.weight} />
        </FormField>
        <FormField label={t.complexion} error={errors.complexion?.message}>
          <Select {...register('complexion')} placeholder="Select" error={!!errors.complexion}>
            {COMPLEXIONS.map(c => <option key={c} value={c}>{c}</option>)}
          </Select>
        </FormField>
        <FormField label={t.bloodGroup} error={errors.bloodGroup?.message}>
          <Select {...register('bloodGroup')} placeholder="Select" error={!!errors.bloodGroup}>
            {BLOOD_GROUPS.map(bg => <option key={bg} value={bg}>{bg}</option>)}
          </Select>
        </FormField>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <FormField label={t.religion} required error={errors.religion?.message}>
          <Select {...register('religion')} placeholder="Select" error={!!errors.religion}>
            {RELIGIONS.map(r => <option key={r} value={r}>{r}</option>)}
          </Select>
        </FormField>
        <FormField label={t.caste} required error={errors.caste?.message}>
          <Input {...register('caste')} placeholder={t.phCaste} error={!!errors.caste} />
        </FormField>
        <FormField label={t.subCaste} error={errors.subCaste?.message}>
          <Input {...register('subCaste')} placeholder="Optional" error={!!errors.subCaste} />
        </FormField>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField label={t.gotra} error={errors.gotra?.message}>
          <Input {...register('gotra')} placeholder={t.phGotra} error={!!errors.gotra} />
        </FormField>
        <FormField label={t.manglik} error={errors.manglik?.message}>
          <Select {...register('manglik')} error={!!errors.manglik}>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
            <option value="Partial">Partial / Anshik</option>
            <option value="Not Known">Not Known</option>
          </Select>
        </FormField>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField label={t.hobbies} error={errors.hobbies?.message}>
          <Input {...register('hobbies')} placeholder={t.phHobbies} error={!!errors.hobbies} />
        </FormField>
        <FormField label={t.languages} error={errors.languages?.message}>
          <Input {...register('languages')} placeholder={t.phLanguages} error={!!errors.languages} />
        </FormField>
      </div>
    </div>
  );
}
