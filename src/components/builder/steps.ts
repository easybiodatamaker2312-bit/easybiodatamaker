export const steps = [
  { id: 1, key: 'basics', title: 'Basics', hint: 'The essentials' },
  { id: 2, key: 'family', title: 'Family', hint: 'Family background' },
  { id: 3, key: 'education', title: 'Education & Career', hint: 'Study and work' },
  { id: 4, key: 'about', title: 'About & Expectations', hint: 'Personality and preferences' },
  { id: 5, key: 'photos', title: 'Photos & Contact', hint: 'Finish your biodata' },
] as const;

export const stepFields = {
  1: ['fullName','dateOfBirth','timeOfBirth','placeOfBirth','height','religion','caste','subCaste','gotra','manglik','bloodGroup','complexion'],
  2: ['fatherName','fatherOccupation','motherName','motherOccupation','brothers','marriedBrothers','sisters','marriedSisters','familyType','familyStatus','nativePlace','maternalGotra'],
  3: ['highestQualification','fieldOfStudy','college','additionalQualification','occupation','employedIn','organization','designation','annualIncome','workLocation'],
  4: ['aboutMe','hobbies','languages','expectations'],
  5: ['phone','alternatePhone','email','address','city','state','pinCode'],
} as const;
