'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowLeft, ArrowRight, Check, ChevronDown, ChevronUp, Eye, GripVertical, Plus, PlusCircle, Save, Settings2, Sparkles, Tag, X } from 'lucide-react';
import Link from 'next/link';
import { useBiodataStore } from '@/store/biodataStore';
import { aboutSchema, basicsSchema, contactSchema, defaultBiodata, educationCareerSchema, familySchema, type BiodataData } from '@/lib/biodata-schema';
import { useBiodataView } from '@/lib/useBiodataView';
import { TRANSLATIONS, type SupportedLanguage } from '@/lib/translations';
import { TEMPLATES, type TemplateId } from '@/components/biodata/TemplateRegistry';
import PhotoUploader from '@/components/photos/PhotoUploader';
import { useLang } from '@/lib/LangContext';
import { Field } from '@/components/builder/Field';
import { PreviewPane } from '@/components/builder/PreviewPane';
import { ResumeDialog } from '@/components/builder/ResumeDialog';
import { steps, stepFields } from '@/components/builder/steps';
import { createPackFields, getFieldPack, localizedPackDescription, localizedPackName, packFieldIds, type FieldPackId } from '@/lib/field-packs';
import { createReligionPresetFields, getReligionPreset, RELIGION_PRESETS } from '@/lib/religion-presets';

const schemas = { 1: basicsSchema, 2: familySchema, 3: educationCareerSchema, 4: aboutSchema, 5: contactSchema } as const;

export default function BiodataBuilder() {
  const store = useBiodataStore();
  const { data, updateData, step, setStep, language, setLanguage, templateId, setTemplate, colorwayId, setColorway, photos, addPhoto, removePhoto, setPhotos, photoPageMode, setPhotoPageMode, customFields, addCustomField, removeCustomField, updateCustomField, optionalFields, setOptional, contactVisible, setContactVisible, sectionOrder, setSectionOrder, fieldOrder, setFieldOrder, moveField, hydrated, auspiciousSymbol, setAuspiciousSymbol } = store;
  const { setLang } = useLang();
  const [mobileTab, setMobileTab] = useState<'form' | 'preview'>('form');
  const [templateSheetOpen, setTemplateSheetOpen] = useState(false);
  const [showCustom, setShowCustom] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [newLabel, setNewLabel] = useState('');
  const [newValue, setNewValue] = useState('');
  const [activePack, setActivePack] = useState<FieldPackId | null>(null);
  const resumeChecked = useRef(false);
  const lastReligion = useRef<string>('');
  const form = useForm<BiodataData>({ defaultValues: data, mode: 'onBlur' });
  form.watch();
  const safeLanguage = language in TRANSLATIONS ? language : 'en';
  const thumbnailData = data.fullName ? data : { ...defaultBiodata, fullName: 'Aarav Mehta', dateOfBirth: '1997-08-14', placeOfBirth: 'Ahmedabad', height: '5\'10\"', religion: 'Hindu', caste: 'Vaishnav', fatherName: 'Rajesh Mehta', motherName: 'Nisha Mehta', highestQualification: 'B.Tech, Computer Science', occupation: 'Product Engineer', organization: 'Technology Company', city: 'Ahmedabad', state: 'Gujarat', phone: '+91 98765 43210' };
  const thumbnailView = useBiodataView(thumbnailData, safeLanguage, sectionOrder, optionalFields, contactVisible, photos, customFields, fieldOrder);
  const activeTemplate = TEMPLATES[(templateId in TEMPLATES ? templateId : 'midnight-gold') as TemplateId];

  useEffect(() => { if (hydrated) form.reset(data); }, [hydrated, data, form]);
  useEffect(() => { setLang(safeLanguage); }, [safeLanguage, setLang]);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requested = params.get('template') as TemplateId | null;
    if (requested && requested in TEMPLATES) { setTemplate(requested); setColorway(TEMPLATES[requested].colorways[0].id); }
    const requestedPack = getFieldPack(params.get('community')) ?? (params.get('nri') === '1' ? 'nri' : null);
    if (!requestedPack) return;
    setActivePack(requestedPack);
    const ids = new Set(customFields.map((field) => field.id));
    const missing = createPackFields(requestedPack, safeLanguage).filter((field) => !ids.has(field.id));
    if (missing.length) missing.forEach((field) => addCustomField({ ...field, section: 'about' }));
    window.history.replaceState({}, '', `${window.location.pathname}?${(() => { const next = new URLSearchParams(); next.set(requestedPack === 'nri' ? 'nri' : 'community', requestedPack === 'nri' ? '1' : requestedPack); return next.toString(); })()}`);
  // The CTA intentionally pre-enables the selected pack; a plain /create remains off by default.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrated]);
  useEffect(() => {
    if (!hydrated || !data.religion || data.religion === lastReligion.current) return;
    lastReligion.current = data.religion;
    const preset = getReligionPreset(data.religion);
    if (!preset) return;
    setAuspiciousSymbol(RELIGION_PRESETS[preset].symbol);
    const existing = new Set(customFields.map((field) => field.id));
    createReligionPresetFields(preset, safeLanguage).filter((field) => !existing.has(field.id)).forEach(addCustomField);
  }, [hydrated, data.religion, safeLanguage, customFields, addCustomField, setAuspiciousSymbol]);
  const completion = useMemo(() => { const all = Object.keys(defaultBiodata) as (keyof BiodataData)[]; const visible = all.filter((key) => optionalFields[key] !== false); if (!visible.length) return 0; return Math.round(visible.filter((key) => String(data[key] || '').trim()).length / visible.length * 100); }, [data, optionalFields]);
  useEffect(() => { if (hydrated && !resumeChecked.current) { resumeChecked.current = true; if (store.updatedAt && completion > 0) setResumeOpen(true); } }, [hydrated, completion, store.updatedAt]);

  const validateStep = async () => {
    if (step === 5 && !contactVisible) { updateData(form.getValues()); return true; }
    const currentStep = step as 1 | 2 | 3 | 4 | 5;
    const result = schemas[currentStep].safeParse(form.getValues());
    stepFields[currentStep].forEach((field) => form.clearErrors(field));
    if (!result.success) {
      const activeIssues = result.error.issues.filter((issue) => {
        const field = issue.path[0];
        return typeof field === 'string' && optionalFields[field] !== false && stepFields[currentStep].includes(field as never);
      });
      activeIssues.forEach((issue) => { const field = issue.path[0]; if (typeof field === 'string') form.setError(field as keyof BiodataData, { type: 'validate', message: issue.message }); });
      return activeIssues.length === 0;
    }
    updateData(form.getValues());
    return true;
  };

  const next = async () => { if (step < 5 && await validateStep()) { setStep(step + 1); setMobileTab('form'); window.scrollTo({ top: 0, behavior: 'smooth' }); } };
  const back = () => { if (step > 1) { setStep(step - 1); setMobileTab('form'); } else window.location.href = '/'; };
  const setProfile = (id: string) => { const index = photos.findIndex((photo) => photo.id === id); if (index > 0) setPhotos([photos[index], ...photos.filter((photo) => photo.id !== id)]); };
  const currentCustomSection = step === 5 ? 'contact' : (steps[step - 1]?.key === 'photos' ? 'additional' : steps[step - 1]?.key ?? 'additional');
  const sectionStandardFields = (stepFields[Number(step) as keyof typeof stepFields] ?? []) as readonly string[];
  const currentCustomFields = customFields.filter((field) => (field.section ?? 'additional') === currentCustomSection);
  const currentItemIds = [...sectionStandardFields, ...currentCustomFields.map((field) => `custom-${field.id}`)];
  const orderedCurrentItems = [...(fieldOrder[currentCustomSection] ?? []), ...currentItemIds.filter((id) => !(fieldOrder[currentCustomSection] ?? []).includes(id))].filter((id, index, all) => currentItemIds.includes(id) && all.indexOf(id) === index);
  const submitCustom = () => { if (!newLabel.trim()) return; addCustomField({ id: crypto.randomUUID(), label: newLabel.trim(), value: newValue.trim(), section: currentCustomSection as any }); setNewLabel(''); setNewValue(''); setShowCustom(false); };
  const moveCurrentField = (id: string, direction: 'up' | 'down') => { if (!(fieldOrder[currentCustomSection]?.length)) setFieldOrder(currentCustomSection, orderedCurrentItems); moveField(currentCustomSection, id, direction); };
  const moveSection = (index: number) => { if (index === sectionOrder.length - 1) return; const order = [...sectionOrder]; [order[index], order[index + 1]] = [order[index + 1], order[index]]; setSectionOrder(order); };
  const currentStepFields = (stepFields[step as keyof typeof stepFields] ?? []) as readonly string[];
  const hiddenStepFields = currentStepFields.filter((name) => optionalFields[name] === false);
  const currentReligionPreset = getReligionPreset(data.religion);
  const religionPresetFields = currentReligionPreset ? createReligionPresetFields(currentReligionPreset, safeLanguage) : [];

  if (!hydrated) return <div className="min-h-screen grid place-items-center bg-[#FBF7F0] text-sm text-stone-500">Preparing your private workspace…</div>;
  const translation = TRANSLATIONS[safeLanguage];
  return <div className="min-h-screen bg-[#FBF7F0] text-[var(--ink)] pb-20 md:pb-0">
    <header className="sticky top-0 z-30 border-b border-stone-200/80 bg-[#FBF7F0]/95 backdrop-blur no-print"><div className="mx-auto flex max-w-[1500px] items-center justify-between gap-3 px-4 py-3 sm:px-6"><div className="flex min-w-0 items-center gap-3"><Link href="/" className="icon-button" aria-label="Back to home"><ArrowLeft size={18} /></Link><div><p className="font-display text-lg font-semibold">Create your biodata</p><p className="hidden text-xs text-stone-500 sm:block">Private · autosaved on this device</p></div></div><div className="flex items-center gap-2"><select value={safeLanguage} onChange={(event) => setLanguage(event.target.value as SupportedLanguage)} className="form-select !min-h-10 !w-auto !py-2 text-xs"><option value="en">English</option><option value="hi">हिन्दी</option><option value="gu">ગુજરાતી</option><option value="mr">मराठी</option><option value="ta">தமிழ்</option><option value="bn">বাংলা</option><option value="pa">ਪੰਜਾਬੀ</option><option value="te">తెలుగు</option><option value="kn">ಕನ್ನಡ</option></select><span className="hidden items-center gap-1 rounded-full bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-800 sm:flex"><Save size={13} /> Saved</span></div></div></header>
    <div className="mx-auto max-w-[1500px] px-3 py-4 sm:px-6 sm:py-6">
      <div className="mb-4 flex items-center justify-between"><div><p className="eyebrow">Step {step} of 5</p><h1 className="mt-1 font-display text-2xl font-semibold sm:text-3xl">{step === 1 ? translation.personalDetails : step === 2 ? translation.familyDetails : step === 3 ? translation.educationCareer : step === 4 ? translation.aboutMe : translation.contactDetails}</h1><p className="mt-1 text-sm text-stone-500">{steps[step - 1].hint}</p></div><div className="text-right"><p className="text-xs font-semibold text-stone-500">{completion}% complete</p><div className="mt-2 h-1.5 w-28 overflow-hidden rounded-full bg-stone-200"><div className="h-full rounded-full bg-[var(--antique-gold)]" style={{ width: `${Math.max(completion, step / 5 * 100)}%` }} /></div></div></div>
      <div className="mb-5 hidden md:block"><div className="grid grid-cols-5 gap-2">{steps.map((item) => <button key={item.id} type="button" onClick={async () => { if (item.id < step || await validateStep()) setStep(item.id); }} className={`stepper-item ${step === item.id ? 'stepper-item-active' : ''}`}><span className="stepper-dot">{step > item.id ? <Check size={14} /> : item.id}</span><span><strong>{item.title}</strong><small>{item.hint}</small></span></button>)}</div></div>
      <div className="mb-4 flex rounded-xl border border-stone-200 bg-white p-1 md:hidden"><button type="button" onClick={() => setMobileTab('form')} className={`flex-1 rounded-lg py-2.5 text-sm font-semibold ${mobileTab === 'form' ? 'bg-[var(--ink)] text-white' : 'text-stone-500'}`}>Form</button><button type="button" onClick={() => setMobileTab('preview')} className={`flex-1 rounded-lg py-2.5 text-sm font-semibold ${mobileTab === 'preview' ? 'bg-[var(--ink)] text-white' : 'text-stone-500'}`}><Eye size={15} className="mr-1 inline" /> Preview</button></div>
      <div className="grid items-start gap-5 lg:grid-cols-[minmax(420px,520px)_minmax(0,1fr)]">
        <section className={mobileTab === 'preview' ? 'hidden md:block' : ''}><div className="card p-4 sm:p-6"><form onSubmit={(event) => event.preventDefault()} className="space-y-5"><div className="rounded-xl bg-[#FBF7F0] px-4 py-3 text-xs leading-5 text-stone-600">Required fields are checked as you move forward. Optional details can be hidden later.</div>{orderedCurrentItems.map((itemId, itemIndex) => {
            const isCustom = itemId.startsWith('custom-');
            if (isCustom) {
              const field = currentCustomFields.find((item) => `custom-${item.id}` === itemId);
              if (!field) return null;
              return <div key={itemId} className="relative rounded-xl border border-dashed border-[var(--antique-gold)]/50 bg-[#fffaf2]/60 p-3">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-[var(--antique-gold)]"><Tag size={12}/> Custom field</span>
                  <div className="flex items-center gap-1">
                    <button type="button" disabled={itemIndex === 0} onClick={() => moveCurrentField(itemId, 'up')} className="icon-button !h-8 !w-8 disabled:opacity-30" aria-label="Move custom field up"><ChevronUp size={14}/></button>
                    <button type="button" disabled={itemIndex === orderedCurrentItems.length - 1} onClick={() => moveCurrentField(itemId, 'down')} className="icon-button !h-8 !w-8 disabled:opacity-30" aria-label="Move custom field down"><ChevronDown size={14}/></button>
                    <button type="button" onClick={() => removeCustomField(field.id)} className="icon-button !h-8 !w-8 hover:border-red-200 hover:text-red-600" aria-label="Remove custom field"><X size={14}/></button>
                  </div>
                </div>
                <div className="grid gap-2 sm:grid-cols-[minmax(150px,.8fr)_minmax(0,1.4fr)]">
                  <input aria-label="Custom field label" className="form-input" value={field.label} onChange={(event) => updateCustomField(field.id, { label: event.target.value })} placeholder="Field name"/>
                  <textarea aria-label="Custom field value" className="form-textarea" value={field.value} onChange={(event) => updateCustomField(field.id, { value: event.target.value })} placeholder="Enter your value" rows={2}/>
                </div>
              </div>;
            }
            const name = itemId as keyof BiodataData;
            if (optionalFields[name] === false) return null;
            return <div key={itemId} className="relative rounded-xl">
              <Field name={name} language={safeLanguage} value={String(form.getValues(name) || '')} error={form.formState.errors[name]?.message} onChange={(value) => { form.setValue(name, value, { shouldDirty: true, shouldValidate: false }); updateData({ [name]: value }); }} />
              <div className="absolute right-0 top-0 flex items-center gap-1">
                <button type="button" disabled={itemIndex === 0} onClick={() => moveCurrentField(itemId, 'up')} className="icon-button !h-8 !w-8 disabled:opacity-30" aria-label={`Move ${translation[name as keyof typeof translation] ?? name} up`}><ChevronUp size={13}/></button>
                <button type="button" disabled={itemIndex === orderedCurrentItems.length - 1} onClick={() => moveCurrentField(itemId, 'down')} className="icon-button !h-8 !w-8 disabled:opacity-30" aria-label={`Move ${translation[name as keyof typeof translation] ?? name} down`}><ChevronDown size={13}/></button>
                <button type="button" onClick={() => { setOptional(String(name), false); form.clearErrors(name); }} className="inline-flex min-h-8 items-center gap-1 rounded-lg border border-stone-200 bg-white px-2 text-[11px] font-semibold text-stone-500 hover:border-red-200 hover:text-red-600" aria-label={`Remove ${translation[name as keyof typeof translation] ?? name}`}><X size={13} /> Remove</button>
              </div>
            </div>;
          })}
          <button type="button" onClick={() => setShowCustom(true)} className="group flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-stone-300 bg-white px-4 py-3 text-sm font-semibold text-stone-600 transition hover:border-[var(--antique-gold)] hover:bg-[#fffaf2] hover:text-stone-900" aria-label="Add a custom field to this category"><PlusCircle size={18} className="text-[var(--antique-gold)] transition group-hover:scale-105"/><span>Add custom field</span><span className="text-xs font-normal text-stone-400">to {steps[step - 1]?.title ?? 'this section'}</span></button>
          {hiddenStepFields.length > 0 && <div className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-4"><div className="flex items-center justify-between gap-3"><div><p className="text-sm font-semibold">Add fields back</p><p className="text-xs text-stone-500">Every standard field can be removed or restored.</p></div><Plus size={16} className="text-[var(--antique-gold)]" /></div><div className="mt-3 flex flex-wrap gap-2">{hiddenStepFields.map((name) => <button key={name} type="button" onClick={() => setOptional(name, true)} className="inline-flex min-h-9 items-center gap-1.5 rounded-lg border border-stone-200 bg-white px-3 text-xs font-semibold text-stone-700"><Plus size={13} />{translation[name as keyof typeof translation] ?? name}</button>)}</div></div>}
          {step === 1 && currentReligionPreset && <div className="rounded-2xl border border-[var(--antique-gold)]/40 bg-[#fffaf2] p-4"><div className="flex items-start justify-between gap-3"><div><p className="text-sm font-semibold">Religion-specific details</p><p className="mt-1 text-xs leading-5 text-stone-500">Based on {data.religion}. These fields are optional and can be removed at any time.</p></div><Sparkles size={18} className="shrink-0 text-[var(--antique-gold)]" /></div><div className="mt-3 flex flex-wrap gap-2">{religionPresetFields.map((field) => { const active = customFields.some((item) => item.id === field.id); return <button key={field.id} type="button" onClick={() => active ? removeCustomField(field.id) : addCustomField({ ...field, section: 'basics' })} className={`inline-flex min-h-9 items-center gap-1.5 rounded-lg border px-3 text-xs font-semibold ${active ? 'border-[var(--antique-gold)] bg-white text-stone-800' : 'border-stone-200 bg-white text-stone-500'}`}><span>{active ? '✓' : '+'}</span>{field.label}</button>; })}</div><p className="mt-3 text-[11px] leading-5 text-stone-500">Suggested symbol: {RELIGION_PRESETS[currentReligionPreset].symbol}. You can change it later.</p></div>}
          {step === 4 && <div className="rounded-2xl border border-[var(--antique-gold)]/40 bg-[#fffaf2] p-4">
            <div className="flex items-start justify-between gap-3"><div><p className="text-sm font-semibold">Community & NRI field packs</p><p className="mt-1 text-xs leading-5 text-stone-500">Optional, private fields. They are off on a normal builder; community links can pre-enable the matching pack.</p></div><Sparkles size={18} className="shrink-0 text-[var(--antique-gold)]" /></div>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {(['gujarati','marathi','hindi','punjabi','tamil','telugu','bengali','kannada','rajasthani','jain','muslim','sikh','christian','nri'] as FieldPackId[]).map((id) => { const enabled = activePack === id || packFieldIds(id).some((fieldId) => customFields.some((field) => field.id === fieldId)); return <label key={id} className="flex min-h-11 cursor-pointer items-center justify-between rounded-xl border border-stone-200 bg-white px-3 text-sm"><span><strong className="block text-xs">{localizedPackName(id, safeLanguage)}</strong><span className="text-[10px] text-stone-500">{id === 'nri' ? 'Country, residency, relocation, years abroad, height' : 'Optional community context'}</span></span><input type="checkbox" checked={enabled} onChange={(event) => { if (event.target.checked) { setActivePack(id); createPackFields(id, safeLanguage).filter((field) => !customFields.some((existing) => existing.id === field.id)).forEach((field) => addCustomField({ ...field, section: 'about' })); } else { packFieldIds(id).forEach(removeCustomField); if (activePack === id) setActivePack(null); } }} className="h-4 w-4 accent-[var(--antique-gold)]" /></label>; })}
            </div>
            {activePack && <p className="mt-3 text-xs leading-5 text-stone-600">{localizedPackDescription(activePack, safeLanguage)}</p>}
          </div>}
          {step === 4 && <div className="rounded-2xl border border-stone-200 p-4"><div className="flex items-center justify-between"><div><p className="text-sm font-semibold">Optional sections</p><p className="text-xs text-stone-500">Keep only what feels right for your family.</p></div><Settings2 size={18} className="text-[var(--antique-gold)]" /></div><div className="mt-4 grid gap-2">{['aboutMe', 'hobbies', 'languages', 'expectations'].map((key) => <label key={key} className="flex min-h-11 items-center justify-between rounded-xl border border-stone-200 px-3 text-sm"><span>{translation[key as keyof typeof translation]}</span><input type="checkbox" checked={optionalFields[key] !== false} onChange={(event) => setOptional(key, event.target.checked)} className="h-4 w-4 accent-[var(--antique-gold)]" /></label>)}</div></div>}
          {step === 5 && <><PhotoUploader photos={photos} onAdd={addPhoto} onRemove={removePhoto} onSetProfile={setProfile} photoPageMode={photoPageMode} onPhotoPageModeChange={setPhotoPageMode} /><div className="rounded-2xl border border-stone-200 p-4"><label className="flex min-h-11 items-center justify-between text-sm"><span><strong>Show contact details</strong><span className="ml-2 text-xs text-stone-500">Hide phone, email and address from the final biodata.</span></span><input type="checkbox" checked={contactVisible} onChange={(event) => setContactVisible(event.target.checked)} className="h-5 w-5 accent-[var(--antique-gold)]" /></label></div><div className="rounded-2xl border border-stone-200 p-4"><div className="flex items-center justify-between gap-3"><div><p className="text-sm font-semibold">Spiritual header symbol</p><p className="text-xs text-stone-500">Religion selection suggests a symbol automatically. You remain in control.</p></div><select value={auspiciousSymbol} onChange={(event) => setAuspiciousSymbol(event.target.value as typeof auspiciousSymbol)} className="form-select !w-auto !min-h-10 !py-2 text-xs"><option value="none">None</option><option value="ganesh">Ganeshji</option><option value="radha-krishna">Radha Krishna</option><option value="om">Om</option><option value="swastik">Swastik</option><option value="bismillah">Bismillah</option><option value="crescent-star">Crescent & Star</option><option value="khanda">Khanda</option><option value="ik-onkar">Ik Onkar</option><option value="cross">Cross</option></select></div></div></>}
          <div className="flex flex-col gap-3 border-t border-stone-200 pt-5 sm:flex-row sm:justify-between"><button type="button" onClick={back} className="btn-secondary order-2 sm:order-1"><ArrowLeft size={16} /> Back</button>{step < 5 ? <button type="button" onClick={next} className="btn-primary order-1 sm:order-2">Continue <ArrowRight size={16} /></button> : <button type="button" onClick={() => setMobileTab('preview')} className="btn-primary order-1 sm:order-2 md:hidden"><Eye size={16} /> See my biodata</button>}</div>
        </form></div></section>
        <aside className={mobileTab === 'form' ? 'hidden md:block' : ''}>
          <div className="mb-3 rounded-2xl border border-stone-200 bg-white p-3 no-print">
            <div className="flex items-center justify-between gap-3">
              <div><p className="eyebrow">Template</p><p className="text-xs text-stone-500">Choose a layout, then tune its colorway.</p></div>
              <span className="text-xs font-semibold text-stone-700">{activeTemplate.name}</span>
            </div>
            <button type="button" className="mt-3 flex min-h-11 w-full items-center justify-between rounded-xl border border-stone-200 bg-stone-50 px-3 text-sm font-semibold md:hidden" onClick={() => setTemplateSheetOpen(true)}>
              <span>Choose template</span><span className="text-xs text-stone-500">{activeTemplate.name}</span>
            </button>
            <div className="mt-3 hidden gap-2 overflow-x-auto pb-1 md:flex">
              {(Object.keys(TEMPLATES) as TemplateId[]).map((id) => { const item = TEMPLATES[id]; const active = id === templateId; return <button key={id} type="button" onClick={() => { setTemplate(id); setColorway(item.colorways[0].id); }} className={`group shrink-0 overflow-hidden rounded-xl border p-1 text-left ${active ? 'border-[var(--ink)] ring-2 ring-[var(--ink)]/10' : 'border-stone-200'}`} aria-label={`Use ${item.name}`}><div className="h-16 w-12 overflow-hidden rounded-lg bg-stone-100"><div className="origin-top-left scale-[.06]"><item.Thumbnail view={thumbnailView} auspiciousSymbol={auspiciousSymbol} colorway={item.colorways[0]} /></div></div><span className="mt-1 block w-20 truncate text-[10px] font-semibold text-stone-700">{item.name}</span></button>; })}
            </div>
            <div className="mt-2 flex items-center gap-2">{activeTemplate.colorways.map((cw) => <button key={cw.id} type="button" onClick={() => setColorway(cw.id)} className={`h-6 w-6 rounded-full border-2 ${colorwayId === cw.id ? 'border-[var(--ink)] ring-2 ring-stone-200' : 'border-white shadow-sm'}`} style={{ background: cw.swatch }} aria-label={cw.name} title={cw.name} />)}</div>
          </div>
          {templateSheetOpen && <div className="fixed inset-0 z-50 md:hidden"><button type="button" aria-label="Close template picker" className="absolute inset-0 bg-black/40" onClick={() => setTemplateSheetOpen(false)} /><div className="absolute inset-x-0 bottom-0 rounded-t-[28px] bg-white p-5 shadow-2xl"><div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-stone-200" /><div className="flex items-center justify-between"><h2 className="font-display text-2xl">Choose a template</h2><button type="button" className="icon-button" onClick={() => setTemplateSheetOpen(false)} aria-label="Close">×</button></div><div className="mt-4 grid grid-cols-3 gap-3">{(Object.keys(TEMPLATES) as TemplateId[]).map((id) => { const item = TEMPLATES[id]; const active = id === templateId; return <button key={id} type="button" onClick={() => { setTemplate(id); setColorway(item.colorways[0].id); setTemplateSheetOpen(false); }} className={`rounded-2xl border p-2 text-left ${active ? 'border-[var(--ink)] ring-2 ring-[var(--ink)]/10' : 'border-stone-200'}`}><div className="h-32 overflow-hidden rounded-xl bg-stone-100"><div className="origin-top-left scale-[.12]"><item.Thumbnail view={thumbnailView} auspiciousSymbol={auspiciousSymbol} colorway={item.colorways[0]} /></div></div><span className="mt-2 block text-xs font-semibold">{item.name}</span></button>; })}</div></div></div>}
<PreviewPane /><div className="mt-3 hidden rounded-2xl border border-stone-200 bg-white p-3 md:block"><div className="flex items-center gap-2 text-xs text-stone-500"><Sparkles size={14} className="text-[var(--antique-gold)]" /> Your data remains editable at every step.</div></div></aside>
      </div>
      <div className="mt-6 card p-4 no-print"><div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-sm font-semibold">Section order</p><p className="text-xs text-stone-500">Reorder sections without editing system fields.</p></div><div className="flex flex-wrap gap-2">{sectionOrder.map((sectionKey, index) => <button key={sectionKey} type="button" onClick={() => moveSection(index)} className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-stone-200 bg-white px-3 text-xs font-semibold text-stone-700"><GripVertical size={13} />{steps.find((item) => item.key === sectionKey)?.title ?? sectionKey}{index < sectionOrder.length - 1 && <span className="text-stone-400">↓</span>}</button>)}</div></div></div>
    </div>
    <ResumeDialog open={resumeOpen} onClose={() => setResumeOpen(false)} resetForm={() => form.reset(defaultBiodata)} />
    {showCustom && <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4"><div className="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl"><div className="flex items-center justify-between"><div><h2 className="font-display text-2xl">Add a custom field</h2><p className="mt-1 text-xs text-stone-500">It will be added to {steps[step - 1]?.title ?? 'this section'}.</p></div><button className="icon-button" aria-label="Close" onClick={() => setShowCustom(false)}><X size={18} /></button></div><div className="mt-5 space-y-4"><div><label className="form-label">Label</label><input autoFocus className="form-input" value={newLabel} onChange={(event) => setNewLabel(event.target.value)} placeholder="e.g. Family tradition" /></div><div><label className="form-label">Value</label><textarea className="form-textarea" value={newValue} onChange={(event) => setNewValue(event.target.value)} placeholder="Enter the detail" /></div><button type="button" className="btn-primary w-full" onClick={submitCustom}>Add detail</button></div></div></div>}
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-stone-200 bg-white/95 p-2 backdrop-blur md:hidden no-print"><div className="mx-auto flex max-w-lg gap-2"><button type="button" onClick={back} className="btn-secondary flex-1"><ArrowLeft size={15} /> Back</button>{step < 5 ? <button type="button" onClick={next} className="btn-primary flex-1">Next <ArrowRight size={15} /></button> : <button type="button" onClick={() => setMobileTab('preview')} className="btn-primary flex-1"><Eye size={15} /> Preview</button>}</div></div>
  </div>;
}
