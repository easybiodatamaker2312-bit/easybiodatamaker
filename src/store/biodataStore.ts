'use client';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { defaultBiodata, type BiodataData } from '@/lib/biodata-schema';
import type { SupportedLanguage } from '@/lib/translations';
import type { TemplateId } from '@/components/biodata/TemplateRegistry';
import type { ReligiousSymbol } from '@/lib/religion-presets';

export type CustomFieldSection = 'basics' | 'family' | 'education' | 'about' | 'contact' | 'additional';
export interface CustomBiodataField { id: string; label: string; value: string; section?: CustomFieldSection; }
export interface PhotoItem { id: string; dataUrl: string; name: string; }
export type PhotoPageMode = 'single-per-page' | 'all-on-one-page';
export interface BiodataStore {
  data: BiodataData;
  language: SupportedLanguage;
  templateId: TemplateId;
  colorwayId: string;
  step: number;
  photos: PhotoItem[];
  photoPageMode: PhotoPageMode;
  optionalFields: Record<string, boolean>;
  customFields: CustomBiodataField[];
  sectionOrder: string[];
  fieldOrder: Record<string, string[]>;
  contactVisible: boolean;
  auspiciousSymbol: ReligiousSymbol;
  updatedAt: number | null;
  hydrated: boolean;
  setHydrated: (v: boolean) => void;
  updateData: (patch: Partial<BiodataData>) => void;
  setLanguage: (language: SupportedLanguage) => void;
  setTemplate: (templateId: TemplateId) => void;
  setColorway: (colorwayId: string) => void;
  setStep: (step: number) => void;
  setOptional: (key: string, value: boolean) => void;
  addCustomField: (field: CustomBiodataField) => void;
  removeCustomField: (id: string) => void;
  updateCustomField: (id: string, patch: Partial<CustomBiodataField>) => void;
  setSectionOrder: (order: string[]) => void;
  setFieldOrder: (section: string, order: string[]) => void;
  moveField: (section: string, fieldId: string, direction: 'up' | 'down') => void;
  setContactVisible: (visible: boolean) => void;
  setAuspiciousSymbol: (symbol: BiodataStore['auspiciousSymbol']) => void;
  setPhotos: (photos: PhotoItem[]) => void;
  setPhotoPageMode: (mode: PhotoPageMode) => void;
  addPhoto: (photo: PhotoItem) => void;
  removePhoto: (id: string) => void;
  reset: () => void;
}

export const useBiodataStore = create<BiodataStore>()(persist((set) => ({
  data: defaultBiodata,
  language: 'en',
  templateId: 'midnight-gold',
  colorwayId: 'gold',
  step: 1,
  photos: [],
  photoPageMode: 'single-per-page',
  optionalFields: {},
  customFields: [],
  sectionOrder: ['basics', 'family', 'education', 'about', 'contact', 'photos'],
  fieldOrder: {},
  contactVisible: true,
  auspiciousSymbol: 'none',
  updatedAt: null,
  hydrated: false,
  setHydrated: (v) => set({ hydrated: v }),
  updateData: (patch) => set((s) => ({ data: { ...s.data, ...patch }, updatedAt: Date.now() })),
  setLanguage: (language) => set({ language, updatedAt: Date.now() }),
  setTemplate: (templateId) => set({ templateId, updatedAt: Date.now() }),
  setColorway: (colorwayId) => set({ colorwayId, updatedAt: Date.now() }),
  setStep: (step) => set({ step }),
  setOptional: (key, value) => set((s) => ({ optionalFields: { ...s.optionalFields, [key]: value }, updatedAt: Date.now() })),
  addCustomField: (field) => set((s) => { const section = field.section ?? 'additional'; const custom = { ...field, section }; const current = s.fieldOrder[section] ?? []; return { customFields: [...s.customFields, custom], fieldOrder: { ...s.fieldOrder, [section]: [...current, custom.id] }, updatedAt: Date.now() }; }),
  removeCustomField: (id) => set((s) => ({ customFields: s.customFields.filter((f) => f.id !== id), fieldOrder: Object.fromEntries(Object.entries(s.fieldOrder).map(([section, ids]) => [section, ids.filter((item) => item !== id)])), updatedAt: Date.now() })),
  updateCustomField: (id, patch) => set((s) => { const current = s.customFields.find((f) => f.id === id); if (!current) return s; const next = { ...current, ...patch }; let fieldOrder = s.fieldOrder; if (patch.section && patch.section !== current.section) { const from = current.section ?? 'additional'; const to = patch.section; fieldOrder = { ...s.fieldOrder, [from]: (s.fieldOrder[from] ?? []).filter((item) => item !== id), [to]: [...(s.fieldOrder[to] ?? []), id] }; } return { customFields: s.customFields.map((f) => f.id === id ? next : f), fieldOrder, updatedAt: Date.now() }; }),
  setSectionOrder: (sectionOrder) => set({ sectionOrder, updatedAt: Date.now() }),
  setFieldOrder: (section, order) => set((s) => ({ fieldOrder: { ...s.fieldOrder, [section]: order }, updatedAt: Date.now() })),
  moveField: (section, fieldId, direction) => set((s) => { const order = [...(s.fieldOrder[section] ?? [])]; const index = order.indexOf(fieldId); if (index < 0) return s; const next = direction === 'up' ? index - 1 : index + 1; if (next < 0 || next >= order.length) return s; [order[index], order[next]] = [order[next], order[index]]; return { fieldOrder: { ...s.fieldOrder, [section]: order }, updatedAt: Date.now() }; }),
  setContactVisible: (contactVisible) => set({ contactVisible, updatedAt: Date.now() }),
  setAuspiciousSymbol: (auspiciousSymbol) => set({ auspiciousSymbol, updatedAt: Date.now() }),
  setPhotos: (photos) => set({ photos, updatedAt: Date.now() }),
  setPhotoPageMode: (photoPageMode) => set({ photoPageMode, updatedAt: Date.now() }),
  addPhoto: (photo) => set((s) => ({ photos: [...s.photos, photo].slice(0, 5), updatedAt: Date.now() })),
  removePhoto: (id) => set((s) => ({ photos: s.photos.filter((p) => p.id !== id), updatedAt: Date.now() })),
  reset: () => set({ data: defaultBiodata, language: 'en', templateId: 'midnight-gold', colorwayId: 'gold', step: 1, photos: [], photoPageMode: 'single-per-page', optionalFields: {}, customFields: [], sectionOrder: ['basics', 'family', 'education', 'about', 'contact', 'photos'], fieldOrder: {}, contactVisible: true, auspiciousSymbol: 'none', updatedAt: null }),
}), {
  name: 'easy-biodata-v3',
  storage: createJSONStorage(() => localStorage),
  partialize: (s) => ({ data: s.data, language: s.language, templateId: s.templateId, colorwayId: s.colorwayId, step: s.step, photos: s.photos, photoPageMode: s.photoPageMode, optionalFields: s.optionalFields, customFields: s.customFields, sectionOrder: s.sectionOrder, fieldOrder: s.fieldOrder, contactVisible: s.contactVisible, auspiciousSymbol: s.auspiciousSymbol, updatedAt: s.updatedAt }),
  onRehydrateStorage: () => (state) => { state?.setHydrated(true); },
}));
