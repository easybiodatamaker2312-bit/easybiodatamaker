'use client';

import { useFormContext } from 'react-hook-form';
import { FormField, Input, Select } from '@/components/ui/FormField';
import { RELIGIONS, BLOOD_GROUPS, COMPLEXIONS, HEIGHTS, type BiodataFormData } from '@/types/biodata';

export default function PersonalDetailsStep() {
  const {
    register,
    formState: { errors },
  } = useFormContext<BiodataFormData>();

  return (
    <div className="space-y-5">
      <div className="mb-6">
        <h2 className="text-xl font-display font-bold text-maroon-800">Personal Information</h2>
        <p className="text-sm text-gray-500 mt-1">Basic details about you</p>
      </div>

      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField label="Full Name" required error={errors.fullName?.message}>
          <Input
            {...register('fullName')}
            placeholder="e.g., Priya Sharma"
            error={!!errors.fullName}
          />
        </FormField>

        <FormField label="Date of Birth" required error={errors.dateOfBirth?.message}>
          <Input
            {...register('dateOfBirth')}
            type="date"
            max={new Date().toISOString().split('T')[0]}
            error={!!errors.dateOfBirth}
          />
        </FormField>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField label="Time of Birth" error={errors.timeOfBirth?.message}
          hint="Used for kundali matching">
          <Input
            {...register('timeOfBirth')}
            type="time"
            error={!!errors.timeOfBirth}
          />
        </FormField>

        <FormField label="Place of Birth" required error={errors.placeOfBirth?.message}>
          <Input
            {...register('placeOfBirth')}
            placeholder="e.g., Ahmedabad, Gujarat"
            error={!!errors.placeOfBirth}
          />
        </FormField>
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <FormField label="Height" required error={errors.height?.message} className="col-span-1">
          <Select {...register('height')} placeholder="Select" error={!!errors.height}>
            {HEIGHTS.map((h) => (
              <option key={h} value={h}>{h}</option>
            ))}
          </Select>
        </FormField>

        <FormField label="Weight" error={errors.weight?.message} className="col-span-1">
          <Input
            {...register('weight')}
            placeholder="e.g., 60 kg"
            error={!!errors.weight}
          />
        </FormField>

        <FormField label="Complexion" error={errors.complexion?.message} className="col-span-1">
          <Select {...register('complexion')} placeholder="Select" error={!!errors.complexion}>
            {COMPLEXIONS.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </Select>
        </FormField>

        <FormField label="Blood Group" error={errors.bloodGroup?.message} className="col-span-1">
          <Select {...register('bloodGroup')} placeholder="Select" error={!!errors.bloodGroup}>
            {BLOOD_GROUPS.map((bg) => (
              <option key={bg} value={bg}>{bg}</option>
            ))}
          </Select>
        </FormField>
      </div>

      {/* Row 4 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <FormField label="Religion" required error={errors.religion?.message}>
          <Select {...register('religion')} placeholder="Select Religion" error={!!errors.religion}>
            {RELIGIONS.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </Select>
        </FormField>

        <FormField label="Caste" required error={errors.caste?.message}>
          <Input
            {...register('caste')}
            placeholder="e.g., Patel, Brahmin"
            error={!!errors.caste}
          />
        </FormField>

        <FormField label="Sub-Caste" error={errors.subCaste?.message}>
          <Input
            {...register('subCaste')}
            placeholder="Optional"
            error={!!errors.subCaste}
          />
        </FormField>
      </div>

      {/* Row 5 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField label="Gotra" error={errors.gotra?.message} hint="For kundali matching">
          <Input
            {...register('gotra')}
            placeholder="e.g., Kashyap"
            error={!!errors.gotra}
          />
        </FormField>

        <FormField label="Manglik" error={errors.manglik?.message}>
          <Select {...register('manglik')} placeholder="Select" error={!!errors.manglik}>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
            <option value="Partial">Partial / Anshik</option>
            <option value="Not Known">Not Known</option>
          </Select>
        </FormField>
      </div>

      {/* Row 6 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField label="Hobbies & Interests" error={errors.hobbies?.message}>
          <Input
            {...register('hobbies')}
            placeholder="e.g., Reading, Cooking, Travel"
            error={!!errors.hobbies}
          />
        </FormField>

        <FormField label="Languages Known" error={errors.languages?.message}>
          <Input
            {...register('languages')}
            placeholder="e.g., Hindi, Gujarati, English"
            error={!!errors.languages}
          />
        </FormField>
      </div>
    </div>
  );
}
