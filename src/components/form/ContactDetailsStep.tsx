'use client';

import { useFormContext } from 'react-hook-form';
import { FormField, Input, Select, Textarea } from '@/components/ui/FormField';
import { INDIAN_STATES, type BiodataFormData } from '@/types/biodata';

export default function ContactDetailsStep() {
  const {
    register,
    formState: { errors },
  } = useFormContext<BiodataFormData>();

  return (
    <div className="space-y-5">
      <div className="mb-6">
        <h2 className="text-xl font-display font-bold text-maroon-800">Contact & Expectations</h2>
        <p className="text-sm text-gray-500 mt-1">How families can reach you</p>
      </div>

      {/* Address */}
      <div className="bg-amber-50/60 rounded-xl p-4 space-y-4 border border-amber-100">
        <h3 className="text-sm font-bold text-maroon-700 uppercase tracking-wide">Address</h3>

        <FormField label="Full Address" required error={errors.address?.message}>
          <Textarea
            {...register('address')}
            rows={3}
            placeholder="House No., Street, Locality..."
            error={!!errors.address}
          />
        </FormField>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <FormField label="City" required error={errors.city?.message}>
            <Input
              {...register('city')}
              placeholder="e.g., Ahmedabad"
              error={!!errors.city}
            />
          </FormField>

          <FormField label="State" required error={errors.state?.message}>
            <Select
              {...register('state')}
              placeholder="Select State"
              error={!!errors.state}
            >
              {INDIAN_STATES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </Select>
          </FormField>

          <FormField label="PIN Code" error={errors.pinCode?.message}>
            <Input
              {...register('pinCode')}
              placeholder="e.g., 380001"
              maxLength={6}
              error={!!errors.pinCode}
            />
          </FormField>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-amber-50/60 rounded-xl p-4 space-y-4 border border-amber-100">
        <h3 className="text-sm font-bold text-maroon-700 uppercase tracking-wide">
          Contact Information
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField label="Mobile Number" required error={errors.phone?.message}>
            <Input
              {...register('phone')}
              type="tel"
              placeholder="+91 98765 43210"
              error={!!errors.phone}
            />
          </FormField>

          <FormField label="Alternate Number" error={errors.alternatePhone?.message}>
            <Input
              {...register('alternatePhone')}
              type="tel"
              placeholder="+91 98765 43210"
              error={!!errors.alternatePhone}
            />
          </FormField>
        </div>

        <FormField
          label="Email Address"
          error={errors.email?.message}
          hint="Optional – leave blank if you prefer not to share"
        >
          <Input
            {...register('email')}
            type="email"
            placeholder="example@gmail.com"
            error={!!errors.email}
          />
        </FormField>
      </div>

      {/* Expectations */}
      <div className="bg-amber-50/60 rounded-xl p-4 space-y-4 border border-amber-100">
        <h3 className="text-sm font-bold text-maroon-700 uppercase tracking-wide">
          Partner Expectations
        </h3>

        <FormField
          label="Expected Partner Qualities"
          error={errors.expectations?.message}
          hint="Describe your ideal partner's nature, qualities, and preferences"
        >
          <Textarea
            {...register('expectations')}
            rows={4}
            placeholder="e.g., Looking for a well-educated, family-oriented partner who is understanding and caring..."
            error={!!errors.expectations}
          />
        </FormField>
      </div>

      {/* Privacy note */}
      <div className="flex items-start gap-3 bg-saffron-50 border border-saffron-200 rounded-xl p-4">
        <div className="w-5 h-5 rounded-full bg-saffron-500 flex items-center justify-center flex-shrink-0 mt-0.5">
          <span className="text-white text-xs font-bold">!</span>
        </div>
        <p className="text-sm text-saffron-800">
          <strong>Privacy Notice:</strong> Your data is stored only in your browser session and
          never sent to any server. EasyBiodataMaker.com does not collect or store your personal
          information.
        </p>
      </div>
    </div>
  );
}
