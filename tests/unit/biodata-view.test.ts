import { describe, expect, it } from 'vitest';
import { defaultBiodata } from '@/lib/biodata-schema';
import { useBiodataView } from '@/lib/useBiodataView';

describe('biodata view model', () => {
  it('localizes section titles and labels', () => {
    const view = useBiodataView({ ...defaultBiodata, fullName: 'Aarav Shah', fatherName: 'Rajesh Shah' }, 'gu', ['basics', 'family'], {}, true);
    expect(view.sections[0].title).toBe('વ્યક્તિગત માહિતી');
    expect(view.sections[0].rows.some((row) => row.label === 'પૂરું નામ')).toBe(true);
  });

  it('honours optional fields and hidden contact details', () => {
    const view = useBiodataView({ ...defaultBiodata, fullName: 'Aarav Shah', hobbies: 'Reading', phone: '9876543210' }, 'en', ['basics', 'about', 'contact'], { hobbies: false }, false);
    const text = view.sections.flatMap((section) => section.rows).map((row) => row.value);
    expect(text).toContain('Aarav Shah');
    expect(text).not.toContain('Reading');
    expect(text).not.toContain('9876543210');
  });

  it('preserves custom fields and photos', () => {
    const view = useBiodataView(defaultBiodata, 'en', ['additional', 'photos'], {}, true, [{ id: '1', name: 'profile.jpg', dataUrl: 'data:image/jpeg;base64,x' }], [{ id: 'c1', label: 'Kuldevta', value: 'Shree Krishna' }]);
    expect(view.customFields[0].label).toBe('Kuldevta');
    expect(view.photos).toHaveLength(1);
    expect(view.sections.map((section) => section.key)).toEqual(['additional', 'photos']);
  });
});
