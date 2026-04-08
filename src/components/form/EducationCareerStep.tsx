'use client';

import { useFormContext } from 'react-hook-form';
import { FormField, Input, Select } from '@/components/ui/FormField';
import type { BiodataFormData } from '@/types/biodata';

export default function EducationCareerStep() {
  const {
    register,
    formState: { errors },
  } = useFormContext<BiodataFormData>();

  return (
    <div className="space-y-5">
      <div className="mb-6">
        <h2 className="text-xl font-display font-bold text-maroon-800">Education & Career</h2>
        <p className="text-sm text-gray-500 mt-1">Your academic and professional details</p>
      </div>

      {/* Education */}
      <div className="bg-amber-50/60 rounded-xl p-4 space-y-4 border border-amber-100">
        <h3 className="text-sm font-bold text-maroon-700 uppercase tracking-wide">Education</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            label="Highest Qualification"
            required
            error={errors.highestQualification?.message}
          >
            <Select
              {...register('highestQualification')}
              placeholder="Select Qualification"
              error={!!errors.highestQualification}
            >
              <option value="10th / SSC">10th / SSC</option>
              <option value="12th / HSC">12th / HSC</option>
              <option value="Diploma">Diploma</option>
              <option value="B.A.">B.A.</option>
              <option value="B.Com.">B.Com.</option>
              <option value="B.Sc.">B.Sc.</option>
              <option value="B.Tech. / B.E.">B.Tech. / B.E.</option>
              <option value="B.B.A.">B.B.A.</option>
              <option value="B.C.A.">B.C.A.</option>
              <option value="M.A.">M.A.</option>
              <option value="M.Com.">M.Com.</option>
              <option value="M.Sc.">M.Sc.</option>
              <option value="M.Tech. / M.E.">M.Tech. / M.E.</option>
              <option value="M.B.A.">M.B.A.</option>
              <option value="M.C.A.">M.C.A.</option>
              <option value="MBBS">MBBS</option>
              <option value="MD / MS">MD / MS</option>
              <option value="LLB">LLB</option>
              <option value="CA / CMA / CS">CA / CMA / CS</option>
              <option value="Ph.D.">Ph.D.</option>
              <option value="Other">Other</option>
            </Select>
          </FormField>

          <FormField label="Field of Study" error={errors.fieldOfStudy?.message}>
            <Input
              {...register('fieldOfStudy')}
              placeholder="e.g., Computer Science, Commerce"
              error={!!errors.fieldOfStudy}
            />
          </FormField>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField label="College / University" error={errors.college?.message}>
            <Input
              {...register('college')}
              placeholder="e.g., IIT Bombay, Gujarat University"
              error={!!errors.college}
            />
          </FormField>

          <FormField
            label="Additional Qualification"
            error={errors.additionalQualification?.message}
            hint="Certifications, courses, etc."
          >
            <Input
              {...register('additionalQualification')}
              placeholder="e.g., AWS Certified, CPA"
              error={!!errors.additionalQualification}
            />
          </FormField>
        </div>
      </div>

      {/* Career */}
      <div className="bg-amber-50/60 rounded-xl p-4 space-y-4 border border-amber-100">
        <h3 className="text-sm font-bold text-maroon-700 uppercase tracking-wide">Career</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField label="Occupation" required error={errors.occupation?.message}>
            <Input
              {...register('occupation')}
              placeholder="e.g., Software Engineer, Doctor"
              error={!!errors.occupation}
            />
          </FormField>

          <FormField label="Employed In" error={errors.employedIn?.message}>
            <Select
              {...register('employedIn')}
              placeholder="Select"
              error={!!errors.employedIn}
            >
              <option value="Government">Government</option>
              <option value="Private">Private Sector</option>
              <option value="Business">Business / Own Business</option>
              <option value="Self-Employed">Self-Employed / Freelance</option>
              <option value="Not Working">Not Working Currently</option>
            </Select>
          </FormField>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField label="Organization / Company" error={errors.organization?.message}>
            <Input
              {...register('organization')}
              placeholder="e.g., Infosys, Tata Group"
              error={!!errors.organization}
            />
          </FormField>

          <FormField label="Designation" error={errors.designation?.message}>
            <Input
              {...register('designation')}
              placeholder="e.g., Senior Manager, Team Lead"
              error={!!errors.designation}
            />
          </FormField>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField label="Annual Income" error={errors.annualIncome?.message}>
            <Select
              {...register('annualIncome')}
              placeholder="Select Range"
              error={!!errors.annualIncome}
            >
              <option value="Up to ₹2 LPA">Up to ₹2 LPA</option>
              <option value="₹2-5 LPA">₹2–5 LPA</option>
              <option value="₹5-10 LPA">₹5–10 LPA</option>
              <option value="₹10-15 LPA">₹10–15 LPA</option>
              <option value="₹15-25 LPA">₹15–25 LPA</option>
              <option value="₹25-50 LPA">₹25–50 LPA</option>
              <option value="₹50 LPA+">₹50 LPA+</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </Select>
          </FormField>

          <FormField label="Work Location" error={errors.workLocation?.message}>
            <Input
              {...register('workLocation')}
              placeholder="e.g., Bangalore, Work from Home"
              error={!!errors.workLocation}
            />
          </FormField>
        </div>
      </div>
    </div>
  );
}
