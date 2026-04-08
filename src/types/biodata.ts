import { z } from 'zod';

// ── Step schemas ──────────────────────────────────────────────────────────────

export const personalDetailsSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  timeOfBirth: z.string().optional(),
  placeOfBirth: z.string().min(1, 'Place of birth is required'),
  height: z.string().min(1, 'Height is required'),
  weight: z.string().optional(),
  complexion: z.string().optional(),
  bloodGroup: z.string().optional(),
  religion: z.string().min(1, 'Religion is required'),
  caste: z.string().min(1, 'Caste is required'),
  subCaste: z.string().optional(),
  gotra: z.string().optional(),
  manglik: z.enum(['Yes', 'No', 'Partial', 'Not Known']).optional(),
  hobbies: z.string().optional(),
  languages: z.string().optional(),
});

export const familyDetailsSchema = z.object({
  fatherName: z.string().min(1, "Father's name is required"),
  fatherOccupation: z.string().optional(),
  motherName: z.string().min(1, "Mother's name is required"),
  motherOccupation: z.string().optional(),
  brothers: z.string().optional(),
  marriedBrothers: z.string().optional(),
  sisters: z.string().optional(),
  marriedSisters: z.string().optional(),
  familyType: z.enum(['Nuclear', 'Joint', 'Extended']).optional(),
  familyStatus: z.enum(['Middle Class', 'Upper Middle Class', 'Rich', 'Affluent']).optional(),
  nativePlace: z.string().optional(),
  maternalGotra: z.string().optional(),
});

export const educationCareerSchema = z.object({
  highestQualification: z.string().min(1, 'Highest qualification is required'),
  fieldOfStudy: z.string().optional(),
  college: z.string().optional(),
  additionalQualification: z.string().optional(),
  occupation: z.string().min(1, 'Occupation is required'),
  employedIn: z.enum(['Government', 'Private', 'Business', 'Self-Employed', 'Not Working']).optional(),
  organization: z.string().optional(),
  designation: z.string().optional(),
  annualIncome: z.string().optional(),
  workLocation: z.string().optional(),
});

export const contactDetailsSchema = z.object({
  address: z.string().min(5, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  pinCode: z.string().optional(),
  phone: z.string().min(10, 'Valid phone number required').max(13),
  alternatePhone: z.string().optional(),
  email: z.string().email('Valid email required').optional().or(z.literal('')),
  expectations: z.string().optional(),
});

// ── Full biodata schema ───────────────────────────────────────────────────────

export const biodataSchema = personalDetailsSchema
  .merge(familyDetailsSchema)
  .merge(educationCareerSchema)
  .merge(contactDetailsSchema);

// ── TypeScript types ──────────────────────────────────────────────────────────

export type PersonalDetails = z.infer<typeof personalDetailsSchema>;
export type FamilyDetails = z.infer<typeof familyDetailsSchema>;
export type EducationCareer = z.infer<typeof educationCareerSchema>;
export type ContactDetails = z.infer<typeof contactDetailsSchema>;
export type BiodataFormData = z.infer<typeof biodataSchema>;

export type FormStep = 1 | 2 | 3 | 4;

export const STEP_LABELS: Record<FormStep, string> = {
  1: 'Personal Details',
  2: 'Family Details',
  3: 'Education & Career',
  4: 'Contact Details',
};

// ── Constants ─────────────────────────────────────────────────────────────────

export const RELIGIONS = [
  'Hindu', 'Muslim', 'Christian', 'Sikh', 'Jain', 'Buddhist', 'Other',
];

export const BLOOD_GROUPS = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

export const COMPLEXIONS = ['Very Fair', 'Fair', 'Wheatish', 'Wheatish Brown', 'Dark'];

export const HEIGHTS = [
  "4'6\"", "4'7\"", "4'8\"", "4'9\"", "4'10\"", "4'11\"",
  "5'0\"", "5'1\"", "5'2\"", "5'3\"", "5'4\"", "5'5\"",
  "5'6\"", "5'7\"", "5'8\"", "5'9\"", "5'10\"", "5'11\"",
  "6'0\"", "6'1\"", "6'2\"", "6'3\"",
];

export const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Delhi', 'Jammu & Kashmir', 'Ladakh', 'Puducherry',
];
