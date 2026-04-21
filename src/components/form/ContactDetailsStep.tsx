'use client';

import { useFormContext } from 'react-hook-form';
import { FormField, Input, Select, Textarea } from '@/components/ui/FormField';
import { INDIAN_STATES, type BiodataFormData } from '@/types/biodata';
import { useLang } from '@/lib/LangContext';

export default function ContactDetailsStep() {
  const { register, formState: { errors } } = useFormContext<BiodataFormData>();
  const { t } = useLang();

  return (
    <div className="space-y-5">
      <div className="bg-amber-50/60 rounded-xl p-4 space-y-4 border border-amber-100">
        <h3 className="text-sm font-bold text-maroon-700 uppercase tracking-wide">{t.address}</h3>
        <FormField label={t.address} required error={errors.address?.message}>
          <Textarea {...register('address')} rows={3} placeholder={t.phAddress} error={!!errors.address} />
        </FormField>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <FormField label={t.city} required error={errors.city?.message}>
            <Input {...register('city')} placeholder={t.phCity} error={!!errors.city} />
          </FormField>
          <FormField label={t.state} required error={errors.state?.message}>
            <Select {...register('state')} placeholder="Select State" error={!!errors.state}>
              {INDIAN_STATES.map(s => <option key={s} value={s}>{s}</option>)}
            </Select>
          </FormField>
          <FormField label={t.pinCode}>
            <Input {...register('pinCode')} placeholder="380001" maxLength={6} />
          </FormField>
        </div>
      </div>

      <div className="bg-amber-50/60 rounded-xl p-4 space-y-4 border border-amber-100">
        <h3 className="text-sm font-bold text-maroon-700 uppercase tracking-wide">Contact</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField label={t.phone} required error={errors.phone?.message}>
            <Input {...register('phone')} type="tel" placeholder={t.phPhone} error={!!errors.phone} />
          </FormField>
          <FormField label={t.alternatePhone}>
            <Input {...register('alternatePhone')} type="tel" placeholder={t.phPhone} />
          </FormField>
        </div>
        <FormField label={t.email} error={errors.email?.message}>
          <Input {...register('email')} type="email" placeholder={t.phEmail} error={!!errors.email} />
        </FormField>
      </div>

      <div className="bg-amber-50/60 rounded-xl p-4 border border-amber-100">
        <FormField label={t.partnerExpectations} error={errors.expectations?.message}>
          <Textarea {...register('expectations')} rows={4} placeholder={t.phExpectations} />
        </FormField>
      </div>

      <div className="flex items-start gap-3 bg-saffron-50 border border-saffron-200 rounded-xl p-4">
        <div className="w-5 h-5 rounded-full bg-saffron-500 flex items-center justify-center flex-shrink-0 mt-0.5">
          <span className="text-white text-xs font-bold">!</span>
        </div>
        <p className="text-sm text-saffron-800">
          <strong>Privacy:</strong> Your data is stored only in your browser and never sent to any server.
        </p>
      </div>
    </div>
  );
}
