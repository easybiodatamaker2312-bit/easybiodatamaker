'use client';

import { STEP_LABELS, type FormStep } from '@/types/biodata';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StepProgressProps {
  currentStep: FormStep;
}

export default function StepProgress({ currentStep }: StepProgressProps) {
  const steps = [1, 2, 3, 4] as FormStep[];

  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between relative">
        {/* Connecting line */}
        <div className="absolute left-0 right-0 top-5 h-0.5 bg-amber-100 -z-0" />
        <div
          className="absolute left-0 top-5 h-0.5 bg-gradient-to-r from-saffron-500 to-saffron-400 transition-all duration-500 -z-0"
          style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
        />

        {steps.map((step) => {
          const isCompleted = step < currentStep;
          const isCurrent = step === currentStep;

          return (
            <div key={step} className="flex flex-col items-center gap-2 z-10">
              {/* Circle */}
              <div
                className={cn(
                  'w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 border-2',
                  isCompleted &&
                    'bg-saffron-500 border-saffron-500 text-white shadow-md shadow-saffron-300',
                  isCurrent &&
                    'bg-white border-saffron-500 text-saffron-600 shadow-lg shadow-saffron-200 scale-110',
                  !isCompleted && !isCurrent && 'bg-white border-amber-200 text-gray-400'
                )}
              >
                {isCompleted ? <Check size={18} strokeWidth={2.5} /> : step}
              </div>

              {/* Label */}
              <span
                className={cn(
                  'text-xs font-medium text-center max-w-[70px] leading-tight hidden sm:block',
                  isCurrent ? 'text-saffron-700 font-semibold' : 'text-gray-400'
                )}
              >
                {STEP_LABELS[step]}
              </span>
            </div>
          );
        })}
      </div>

      {/* Mobile label */}
      <div className="sm:hidden text-center mt-3">
        <span className="text-sm font-semibold text-saffron-700">
          Step {currentStep}: {STEP_LABELS[currentStep]}
        </span>
        <span className="text-xs text-gray-400 ml-2">(of 4)</span>
      </div>
    </div>
  );
}
