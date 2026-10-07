import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { createHash } from 'node:crypto';
import { TEMPLATES, type TemplateId } from '@/components/biodata/TemplateRegistry';
import { defaultBiodata } from '@/lib/biodata-schema';
import { useBiodataView } from '@/lib/useBiodataView';

const ids = Object.keys(TEMPLATES) as TemplateId[];
const photos = [
  { id: 'profile', name: 'profile.jpg', dataUrl: 'data:image/jpeg;base64,PROFILE' },
  { id: 'one', name: 'family.jpg', dataUrl: 'data:image/jpeg;base64,FAMILY' },
  { id: 'two', name: 'portrait.jpg', dataUrl: 'data:image/jpeg;base64,PORTRAIT' },
];

function completeData() {
  const data = { ...defaultBiodata };
  (Object.keys(data) as Array<keyof typeof data>).forEach((key) => { data[key] = `${String(key)} sample` as never; });
  data.dateOfBirth = '1996-08-14';
  return data;
}

function renderTemplate(id: TemplateId) {
  const view = useBiodataView(completeData(), 'en', ['basics','family','education','about','additional','contact','photos'], {}, true, photos, [{ id:'custom-1', label:'Kuldevta', value:'Shree Krishna' }]);
  const definition = TEMPLATES[id];
  return renderToStaticMarkup(<definition.Layout view={view} auspiciousSymbol="none" colorway={definition.colorways[0]} />);
}

function structuralHash(html: string) {
  const structural = html
    .replace(/<svg[\s\S]*?<\/svg>/gi, '')
    .replace(/style="[^"]*"/gi, '')
    .replace(/class="[^"]*"/gi, '')
    .replace(/data-[\w-]+="[^"]*"/gi, '')
    .replace(/aria-[\w-]+="[^"]*"/gi, '')
    .replace(/alt="[^"]*"/gi, '')
    .replace(/>[^<]+</g, '><')
    .replace(/\s+/g, ' ')
    .trim();
  return createHash('sha256').update(structural).digest('hex');
}

describe('template system', () => {
  it('contains exactly twelve registered templates', () => {
    expect(ids).toHaveLength(12);
  });

  it('templates are structurally different', () => {
    const hashes = ids.map((id) => structuralHash(renderTemplate(id)));
    expect(new Set(hashes).size).toBe(hashes.length);
  });

  it('renders every non-empty biodata value in every template', () => {
    const view = useBiodataView(completeData(), 'en', ['basics','family','education','about','additional','contact','photos'], {}, true, photos, [{ id:'custom-1', label:'Kuldevta', value:'Shree Krishna' }]);
    const expected = view.sections.flatMap((section) => section.rows.map((row) => row.value)).filter(Boolean);
    for (const id of ids) {
      const html = renderTemplate(id);
      for (const value of expected) expect(html).toContain(value);
      expect(html).toContain('Kuldevta');
      expect(html).toContain('Shree Krishna');
      expect(html).toContain('PROFILE');
      expect(html).toContain('FAMILY');
      expect(html).toContain('PORTRAIT');
    }
  });

  it('keeps localized section and field text out of template hard-coding', () => {
    const view = useBiodataView({ ...completeData(), fullName: 'Aarav Shah' }, 'gu', ['basics','family','education','about','contact','photos'], {}, true, photos, []);
    const definition = TEMPLATES['kanjivaram-temple'];
    const html = renderToStaticMarkup(<definition.Layout view={view} auspiciousSymbol="none" colorway={definition.colorways[0]} />);
    expect(html).toContain('વ્યક્તિગત માહિતી');
    expect(html).toContain('પૂરું નામ');
    expect(html).not.toContain('Personal Details');
  });
});

it('assigns a distinct primary display font to every template', () => {
  const primaryFonts = ids.map((id) => TEMPLATES[id].colorways[0].variables.display.split(',')[0].trim());
  expect(new Set(primaryFonts).size).toBe(primaryFonts.length);
});

it('gives every template three switchable colorways', () => {
  for (const id of ids) {
    expect(TEMPLATES[id].colorways).toHaveLength(3);
    expect(new Set(TEMPLATES[id].colorways.map((colorway) => colorway.id)).size).toBe(3);
  }
});
