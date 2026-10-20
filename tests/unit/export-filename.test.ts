import { describe, expect, it } from 'vitest';
import { safeFilename } from '@/lib/pdf';

describe('safeFilename', () => {
  it('strips extensions and unsafe characters', () => { expect(safeFilename('Karan Shah.pdf')).toBe('Karan-Shah'); expect(safeFilename('a/b\\c:d*e?.png')).toBe('a-b-c-d-e'); });
  it('keeps Indic names instead of collapsing them to a generic name', () => { expect(safeFilename('કરણ શાહ')).toContain('કરણ'); });
  it('keeps combining vowel signs in Indic names (not just base letters)', () => { expect(safeFilename('શાહ કરણ')).toBe('શાહ-કરણ'); expect(safeFilename('कृष्ण शर्मा')).toBe('कृष्ण-शर्मा'); });
  it('falls back to biodata for empty input', () => { expect(safeFilename('   ')).toBe('biodata'); expect(safeFilename('***')).toBe('biodata'); });
});
