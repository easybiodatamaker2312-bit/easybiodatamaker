'use client';

import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import {
  personalDetailsSchema,
  familyDetailsSchema,
  educationCareerSchema,
  contactDetailsSchema,
  type BiodataFormData,
  type FormStep,
} from '@/types/biodata';
import { saveBiodata } from '@/lib/utils';
import StepProgress from '@/components/ui/StepProgress';
import PersonalDetailsStep from './PersonalDetailsStep';
import FamilyDetailsStep from './FamilyDetailsStep';
import EducationCareerStep from './EducationCareerStep';
import ContactDetailsStep from './ContactDetailsStep';
import { ChevronRight, ChevronLeft, Eye } from 'lucide-react';

const stepSchemas: Record<FormStep, typeof personalDetailsSchema> = {
  1: personalDetailsSchema,
  2: familyDetailsSchema as typeof personalDetailsSchema,
  3: educationCareerSchema as typeof personalDetailsSchema,
  4: contactDetailsSchema as typeof personalDetailsSchema,
};

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState<FormStep>(1);
  const router = useRouter();

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
    saveBiodata(data as Record<string, unknown>);

    if (currentStep < 4) {
      setCurrentStep((s) => (s + 1) as FormStep);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/preview');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((s) => (s - 1) as FormStep);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="card p-6 sm:p-8">
        <StepProgress currentStep={currentStep} />

        <div className="min-h-[400px]">
          {currentStep === 1 && <PersonalDetailsStep />}
          {currentStep === 2 && <FamilyDetailsStep />}
          {currentStep === 3 && <EducationCareerStep />}
          {currentStep === 4 && <ContactDetailsStep />}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-amber-100">
          <button
            type="button"
            onClick={handleBack}
            disabled={currentStep === 1}
            className="btn-secondary disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={18} /> Back
          </button>

          <span className="text-xs text-gray-400 hidden sm:block">
            Step {currentStep} of 4 · All data stays in your browser
          </span>

          <button type="button" onClick={handleNext} className="btn-primary">
            {currentStep === 4 ? (
              <><Eye size={18} /> Preview Biodata</>
            ) : (
              <>Next <ChevronRight size={18} /></>
            )}
          </button>
        </div>
      </div>
    </FormProvider>
  );
}
