import { describe, expect, it } from 'vitest';
import { RELIGION_PRESETS, createReligionPresetFields } from '@/lib/religion-presets';

describe('religion presets', () => {
  it('maps the requested religious symbols', () => {
    expect(RELIGION_PRESETS.Hindu.symbol).toBe('ganesh');
    expect(RELIGION_PRESETS.Jain.symbol).toBe('swastik');
    expect(RELIGION_PRESETS.Muslim.symbol).toBe('bismillah');
    expect(RELIGION_PRESETS.Sikh.symbol).toBe('khanda');
    expect(RELIGION_PRESETS.Christian.symbol).toBe('cross');
  });

  it('provides Hindu lineage fields as optional custom fields', () => {
    const ids = createReligionPresetFields('Hindu', 'en').map((field) => field.id);
    expect(ids).toEqual(expect.arrayContaining([
      'religion-hindu-kuldevi',
      'religion-hindu-devak',
      'religion-hindu-mosal',
      'religion-hindu-gotra',
    ]));
  });
});
