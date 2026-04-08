'use client';

import { useFormContext } from 'react-hook-form';
import { FormField, Input, Select } from '@/components/ui/FormField';
import type { BiodataFormData } from '@/types/biodata';

export default function FamilyDetailsStep() {
  const {
    register,
    formState: { errors },
  } = useFormContext<BiodataFormData>();

  return (
    <div className="space-y-5">
      <div className="mb-6">
        <h2 className="text-xl font-display font-bold text-maroon-800">Family Information</h2>
        <p className="text-sm text-gray-500 mt-1">Details about your family background</p>
      </div>

      {/* Parents */}
      <div className="bg-amber-50/60 rounded-xl p-4 space-y-4 border border-amber-100">
        <h3 className="text-sm font-bold text-maroon-700 uppercase tracking-wide">Parents</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField label="Father's Name" required error={errors.fatherName?.message}>
            <Input
              {...register('fatherName')}
              placeholder="e.g., Ramesh Kumar Sharma"
              error={!!errors.fatherName}
            />
          </FormField>

          <FormField label="Father's Occupation" error={errors.fatherOccupation?.message}>
            <Input
              {...register('fatherOccupation')}
              placeholder="e.g., Retired Government Officer"
              error={!!errors.fatherOccupation}
            />
          </FormField>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField label="Mother's Name" required error={errors.motherName?.message}>
            <Input
              {...register('motherName')}
              placeholder="e.g., Sunita Sharma"
              error={!!errors.motherName}
            />
          </FormField>

          <FormField label="Mother's Occupation" error={errors.motherOccupation?.message}>
            <Input
              {...register('motherOccupation')}
              placeholder="e.g., Homemaker"
              error={!!errors.motherOccupation}
            />
          </FormField>
        </div>
      </div>

      {/* Siblings */}
      <div className="bg-amber-50/60 rounded-xl p-4 space-y-4 border border-amber-100">
        <h3 className="text-sm font-bold text-maroon-700 uppercase tracking-wide">Siblings</h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <FormField label="Brothers" error={errors.brothers?.message}>
            <Select {...register('brothers')} error={!!errors.brothers}>
              <option value="">None</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4+">4+</option>
            </Select>
          </FormField>

          <FormField label="Married Brothers" error={errors.marriedBrothers?.message}>
            <Select {...register('marriedBrothers')} error={!!errors.marriedBrothers}>
              <option value="">None</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4+">4+</option>
            </Select>
          </FormField>

          <FormField label="Sisters" error={errors.sisters?.message}>
            <Select {...register('sisters')} error={!!errors.sisters}>
              <option value="">None</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4+">4+</option>
            </Select>
          </FormField>

          <FormField label="Married Sisters" error={errors.marriedSisters?.message}>
            <Select {...register('marriedSisters')} error={!!errors.marriedSisters}>
              <option value="">None</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4+">4+</option>
            </Select>
          </FormField>
        </div>
      </div>

      {/* Family Background */}
      <div className="bg-amber-50/60 rounded-xl p-4 space-y-4 border border-amber-100">
        <h3 className="text-sm font-bold text-maroon-700 uppercase tracking-wide">
          Family Background
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField label="Family Type" error={errors.familyType?.message}>
            <Select {...register('familyType')} placeholder="Select" error={!!errors.familyType}>
              <option value="Nuclear">Nuclear Family</option>
              <option value="Joint">Joint Family</option>
              <option value="Extended">Extended Family</option>
            </Select>
          </FormField>

          <FormField label="Family Status" error={errors.familyStatus?.message}>
            <Select
              {...register('familyStatus')}
              placeholder="Select"
              error={!!errors.familyStatus}
            >
              <option value="Middle Class">Middle Class</option>
              <option value="Upper Middle Class">Upper Middle Class</option>
              <option value="Rich">Rich</option>
              <option value="Affluent">Affluent</option>
            </Select>
          </FormField>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField label="Native Place / Village" error={errors.nativePlace?.message}>
            <Input
              {...register('nativePlace')}
              placeholder="e.g., Rajkot, Gujarat"
              error={!!errors.nativePlace}
            />
          </FormField>

          <FormField label="Maternal Gotra" error={errors.maternalGotra?.message}>
            <Input
              {...register('maternalGotra')}
              placeholder="e.g., Bharadwaj"
              error={!!errors.maternalGotra}
            />
          </FormField>
        </div>
      </div>
    </div>
  );
}
