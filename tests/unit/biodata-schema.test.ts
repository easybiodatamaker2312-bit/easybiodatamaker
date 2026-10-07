import { describe, expect, it, vi } from 'vitest';
import { ageFromDob, basicsSchema, contactSchema } from '@/lib/biodata-schema';

describe('biodata calculations and validation', () => {
  it('calculates age correctly before the birthday', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-10-06T12:00:00'));
    expect(ageFromDob('2000-10-07')).toBe(25);
    expect(ageFromDob('2000-10-06')).toBe(26);
    vi.useRealTimers();
  });

  it('rejects an underage applicant', () => {
    expect(() => basicsSchema.parse({
      fullName: 'Aarav Shah', dateOfBirth: '2010-10-06', placeOfBirth: 'Ahmedabad',
      height: `5'8"`, religion: 'Hindu', caste: 'Patel',
    })).toThrow();
  });

  it('accepts a valid Indian mobile number and rejects invalid numbers', () => {
    expect(contactSchema.shape.phone.parse('9876543210')).toBe('9876543210');
    expect(() => contactSchema.shape.phone.parse('1234567890')).toThrow();
  });

  it('validates height format', () => {
    expect(basicsSchema.shape.height.parse(`5'10"`)).toBe(`5'10"`);
    expect(() => basicsSchema.shape.height.parse('180cm')).toThrow();
  });
});
