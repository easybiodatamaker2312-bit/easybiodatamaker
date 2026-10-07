import type { ComponentType, ReactNode, CSSProperties } from 'react';
import type { BiodataViewModel } from '@/lib/useBiodataView';
import type { SupportedLanguage } from '@/lib/translations';
import type { ReligiousSymbol } from '@/lib/religion-presets';

export type TemplateCategory = 'Traditional' | 'Modern' | 'Minimal' | 'Regional';
export type Colorway = { id: string; name: string; swatch: string; variables: Record<string, string> };

export interface TemplateRenderProps {
  view: BiodataViewModel;
  auspiciousSymbol: ReligiousSymbol;
  colorway: Colorway;
}

export interface TemplateDefinition {
  id: string;
  name: string;
  category: TemplateCategory;
  mood: string;
  languages: SupportedLanguage[];
  colorways: [Colorway, Colorway, Colorway];
  Layout: ComponentType<TemplateRenderProps>;
  Thumbnail: ComponentType<TemplateRenderProps>;
}

export interface TemplatePrimitiveProps {
  children?: ReactNode;
  className?: string;
}

export const TEMPLATE_ROOT_STYLE = {
  width: '210mm',
  minHeight: '297mm',
  background: 'var(--template-paper)',
  color: 'var(--template-ink)',
  WebkitPrintColorAdjust: 'exact',
  printColorAdjust: 'exact',
} as const;

function hexToRgb(value: string): [number, number, number] | null {
  const hex = value.trim();
  const match = /^#([0-9a-f]{6})$/i.exec(hex);
  if (!match) return null;
  return [parseInt(match[1].slice(0, 2), 16), parseInt(match[1].slice(2, 4), 16), parseInt(match[1].slice(4, 6), 16)];
}

function rgba(value: string, alpha: number): string {
  const rgb = hexToRgb(value);
  return rgb ? `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})` : value;
}

function blendWithWhite(value: string, amount: number): string {
  const rgb = hexToRgb(value);
  if (!rgb) return value;
  return `rgb(${rgb.map((channel) => Math.round(channel + (255 - channel) * amount)).join(', ')})`;
}

export function colorwayVariables(colorway: Colorway): CSSProperties {
  const variables: Record<string, string> = Object.fromEntries(
    Object.entries(colorway.variables).map(([key, value]) => [`--template-${key}`, value]),
  );
  const accent = colorway.variables.accent;
  const accent2 = colorway.variables.accent2;
  const paper = colorway.variables.paper;
  variables['--template-accent-8'] = rgba(accent, 0.08);
  variables['--template-accent-18'] = rgba(accent, 0.18);
  variables['--template-accent-28'] = rgba(accent, 0.28);
  variables['--template-accent-30'] = rgba(accent, 0.30);
  variables['--template-accent-45'] = rgba(accent, 0.45);
  variables['--template-accent-50'] = rgba(accent, 0.50);
  variables['--template-accent-55'] = rgba(accent, 0.55);
  variables['--template-accent-soft'] = blendWithWhite(accent, 0.92);
  variables['--template-accent2-18'] = rgba(accent2, 0.18);
  variables['--template-accent2-32'] = rgba(accent2, 0.32);
  variables['--template-paper-soft'] = blendWithWhite(paper, 0.26);
  return variables as CSSProperties;
}
