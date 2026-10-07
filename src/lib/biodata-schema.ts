import { z } from 'zod';

const indianPhone = z.string().trim().refine((v) => { const normalized = v.replace(/[\s-]/g, ''); return /^(?:\+91|91)?[6-9]\d{9}$/.test(normalized); }, 'Enter a valid Indian mobile number');
const dob = z.string().refine((v) => {
  if (!v) return false;
  const d = new Date(v + 'T00:00:00');
  const now = new Date();
  const min = new Date(now.getFullYear() - 100, now.getMonth(), now.getDate());
  const max = new Date(now.getFullYear() - 18, now.getMonth(), now.getDate());
  return !Number.isNaN(d.getTime()) && d >= min && d <= max;
}, 'Enter a valid date of birth (18–100 years)');
const height = z.string().refine((v) => /^\d['’]\d{1,2}"$/.test(v), 'Choose a valid height');

export const basicsSchema = z.object({
  fullName: z.string().trim().min(2, 'Enter the full name'),
  dateOfBirth: dob,
  timeOfBirth: z.string().optional(),
  placeOfBirth: z.string().trim().min(2, 'Enter the place of birth'),
  height,
  religion: z.string().min(1, 'Select a religion'),
  caste: z.string().trim().min(1, 'Enter the caste'),
  subCaste: z.string().optional(),
  gotra: z.string().optional(),
  manglik: z.string().optional(),
  bloodGroup: z.string().optional(),
  complexion: z.string().optional(),
});

export const familySchema = z.object({
  fatherName: z.string().trim().min(1, "Enter father's name"),
  fatherOccupation: z.string().optional(),
  motherName: z.string().trim().min(1, "Enter mother's name"),
  motherOccupation: z.string().optional(),
  brothers: z.string().optional(),
  marriedBrothers: z.string().optional(),
  sisters: z.string().optional(),
  marriedSisters: z.string().optional(),
  familyType: z.string().optional(),
  familyStatus: z.string().optional(),
  nativePlace: z.string().optional(),
  maternalGotra: z.string().optional(),
});

export const educationCareerSchema = z.object({
  highestQualification: z.string().trim().min(1, 'Enter the highest qualification'),
  fieldOfStudy: z.string().optional(),
  college: z.string().optional(),
  additionalQualification: z.string().optional(),
  occupation: z.string().trim().min(1, 'Enter the occupation'),
  employedIn: z.string().optional(),
  organization: z.string().optional(),
  designation: z.string().optional(),
  annualIncome: z.string().optional(),
  workLocation: z.string().optional(),
});

export const aboutSchema = z.object({
  aboutMe: z.string().max(1200, 'Keep this under 1200 characters').optional(),
  hobbies: z.string().optional(),
  languages: z.string().optional(),
  expectations: z.string().max(1200, 'Keep this under 1200 characters').optional(),
});

export const contactSchema = z.object({
  phone: indianPhone,
  alternatePhone: indianPhone.optional().or(z.literal('')),
  email: z.string().email('Enter a valid email').optional().or(z.literal('')),
  address: z.string().trim().min(5, 'Enter the address'),
  city: z.string().trim().min(1, 'Enter the city'),
  state: z.string().trim().min(1, 'Select the state'),
  pinCode: z.string().regex(/^\d{6}$/, 'Enter a valid 6-digit PIN').optional().or(z.literal('')),
});

export const biodataSchema = basicsSchema.merge(familySchema).merge(educationCareerSchema).merge(aboutSchema).merge(contactSchema);
export type BiodataData = z.infer<typeof biodataSchema>;
export type StepKey = 'basics' | 'family' | 'education' | 'about' | 'photos';

export const defaultBiodata: BiodataData = {
  fullName: '', dateOfBirth: '', timeOfBirth: '', placeOfBirth: '', height: '', religion: '', caste: '', subCaste: '', gotra: '', manglik: 'No', bloodGroup: '', complexion: '',
  fatherName: '', fatherOccupation: '', motherName: '', motherOccupation: '', brothers: '', marriedBrothers: '', sisters: '', marriedSisters: '', familyType: 'Nuclear', familyStatus: 'Middle Class', nativePlace: '', maternalGotra: '',
  highestQualification: '', fieldOfStudy: '', college: '', additionalQualification: '', occupation: '', employedIn: 'Private', organization: '', designation: '', annualIncome: '', workLocation: '',
  aboutMe: '', hobbies: '', languages: '', expectations: '', phone: '', alternatePhone: '', email: '', address: '', city: '', state: '', pinCode: '',
};

export function ageFromDob(value: string): number | null {
  if (!value) return null;
  const d = new Date(value + 'T00:00:00');
  if (Number.isNaN(d.getTime())) return null;
  const now = new Date();
  let age = now.getFullYear() - d.getFullYear();
  const m = now.getMonth() - d.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < d.getDate())) age--;
  return age >= 0 && age <= 120 ? age : null;
}
