'use client';

import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import {
  personalDetailsSchema,
  familyDetailsSchema,
  educationCareerSchema,
  contactDetailsSchema,
  type BiodataFormData,
  type FormStep,
  STEP_LABELS,
} from '@/types/biodata';
import { saveBiodata } from '@/lib/utils';
import { useLang } from '@/lib/LangContext';
import { useCustomFields } from '@/hooks/useCustomFields';
import StepProgress from '@/components/ui/StepProgress';
import LanguageSelector from '@/components/ui/LanguageSelector';
import CustomFieldsPanel from '@/components/ui/CustomFieldsPanel';
import PersonalDetailsStep from './PersonalDetailsStep';
import FamilyDetailsStep from './FamilyDetailsStep';
import EducationCareerStep from './EducationCareerStep';
import ContactDetailsStep from './ContactDetailsStep';
import { ChevronRight, ChevronLeft, Eye, Globe } from 'lucide-react';

type AnyZodSchema = z.ZodSchema<unknown>;

const stepSchemas: Record<FormStep, AnyZodSchema> = {
  1: personalDetailsSchema,
  2: familyDetailsSchema,
  3: educationCareerSchema,
  4: contactDetailsSchema,
};

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState<FormStep>(1);
  const [showLangPicker, setShowLangPicker] = useState(false);
  const router = useRouter();
  const { t, lang } = useLang();
  const { fields: customFields, addField, updateField, deleteField } = useCustomFields();

  const methods = useForm<BiodataFormData>({
    resolver: zodResolver(stepSchemas[currentStep]),
    mode: 'onChange',
    defaultValues: {
      manglik: 'No',
      familyType: 'Nuclear',
      familyStatus: 'Middle Class',
      employedIn: 'Private',
    },
  });

  const handleNext = async () => {
    const valid = await methods.trigger();
    if (!valid) return;
    const data = methods.getValues();
    saveBiodata({ ...data as Record<string, unknown>, customFields, lang });
    if (currentStep < 4) {
      setCurrentStep(s => (s + 1) as FormStep);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/preview');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(s => (s - 1) as FormStep);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="card p-6 sm:p-8">
        {/* Header row */}
        <div className="flex items-center justify-between mb-5 pb-4 border-b border-amber-100">
          <div>
            <h2 className="font-display text-lg font-bold text-maroon-800">
              {STEP_LABELS[currentStep]}
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">Step {currentStep} of 4</p>
          </div>
          <button
            type="button"
            onClick={() => setShowLangPicker(v => !v)}
            className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg border transition-all ${
              showLangPicker
                ? 'bg-saffron-500 text-white border-saffron-500'
                : 'bg-white text-gray-600 border-amber-200 hover:border-saffron-300'
            }`}
          >
            <Globe size={14} />
            {lang !== 'en' ? lang.toUpperCase() : 'Language'}
          </button>
        </div>

        {showLangPicker && (
          <div className="mb-5">
            <LanguageSelector />
          </div>
        )}

        <StepProgress currentStep={currentStep} />

        <div className="min-h-[400px]">
          {currentStep === 1 && <PersonalDetailsStep />}
          {currentStep === 2 && <FamilyDetailsStep />}
          {currentStep === 3 && <EducationCareerStep />}
          {currentStep === 4 && (
            <>
              <ContactDetailsStep />
              <div className="mt-6 border-t border-amber-100 pt-6">
                <CustomFieldsPanel
                  fields={customFields}
                  onAdd={addField}
                  onUpdate={updateField}
                  onDelete={deleteField}
                />
              </div>
            </>
          )}
        </div>

        <div className="flex justify-between items-center mt-8 pt-6 border-t border-amber-100">
          <button
            type="button"
            onClick={handleBack}
            disabled={currentStep === 1}
            className="btn-secondary disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={18} /> {t.back}
          </button>
          <span className="text-xs text-gray-400 hidden sm:block">
            {currentStep} / 4 &middot; Data stays in your browser
          </span>
          <button type="button" onClick={handleNext} className="btn-primary">
            {currentStep === 4
              ? <><Eye size={18} /> {t.preview}</>
              : <>{t.next} <ChevronRight size={18} /></>
            }
          </button>
        </div>
      </div>
    </FormProvider>
  );
}
