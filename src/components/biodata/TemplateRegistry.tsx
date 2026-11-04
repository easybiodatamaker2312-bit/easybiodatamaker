import type { TemplateDefinition } from './template-contract';
import { PortraitClassicLayout, PortraitClassicThumbnail, PORTRAIT_CLASSIC_COLORWAYS } from './templates/phaseE/PortraitClassic';
import { BlushRoseFloralLayout, BlushRoseFloralThumbnail, BLUSH_ROSE_COLORWAYS } from './templates/phaseB/BlushRoseFloral';
import { EditorialMonoLayout, EditorialMonoThumbnail, EDITORIAL_MONO_COLORWAYS } from './templates/phaseB/EditorialMono';
import { EmeraldPalaceLayout, EmeraldPalaceThumbnail, EMERALD_PALACE_COLORWAYS, RajwadaCrimsonLayout, RajwadaCrimsonThumbnail, RAJWADA_CRIMSON_COLORWAYS, RoyalPeacockLayout, RoyalPeacockThumbnail, ROYAL_PEACOCK_COLORWAYS } from './templates/phaseC';
import { HaldiMarigoldLayout, HaldiMarigoldThumbnail, HALDI_MARIGOLD_COLORWAYS, PearlLavenderLayout, PearlLavenderThumbnail, PEARL_LAVENDER_COLORWAYS, SandstoneRajasthanLayout, SandstoneRajasthanThumbnail, SANDSTONE_RAJASTHAN_COLORWAYS } from './templates/phaseC2';
import { KanjivaramTempleLayout, KanjivaramTempleThumbnail, KANJIVARAM_COLORWAYS, NoorNavyLayout, NoorNavyThumbnail, NOOR_NAVY_COLORWAYS, SapphireSilverLayout, SapphireSilverThumbnail, SAPPHIRE_SILVER_COLORWAYS } from './templates/phaseC3';
import './templates/phaseD/inspired.css';
import { RoseArchLayout, RoseArchThumbnail, ROSE_ARCH_COLORWAYS, BlueLedgerLayout, BlueLedgerThumbnail, BLUE_LEDGER_COLORWAYS, ModernSplitLayout, ModernSplitThumbnail, MODERN_SPLIT_COLORWAYS, GoldFrameLayout, GoldFrameThumbnail, GOLD_FRAME_COLORWAYS, MinimalGridLayout, MinimalGridThumbnail, MINIMAL_GRID_COLORWAYS, RoyalMaroonLayout, RoyalMaroonThumbnail, ROYAL_MAROON_COLORWAYS, ContemporaryCardLayout, ContemporaryCardThumbnail, CONTEMPORARY_CARD_COLORWAYS } from './templates/phaseD/InspiredCollection';

const EXTRA_COLOR_THEMES = [
  { id: 'ocean-blue', name: 'Ocean Blue', swatch: '#2878B8', paper: '#F5FAFF', ink: '#20364B', accent: '#2878B8', accent2: '#D5A64B', muted: '#64788A' },
  { id: 'lavender-mist', name: 'Lavender Mist', swatch: '#8975B5', paper: '#FBF8FF', ink: '#382F4B', accent: '#8975B5', accent2: '#C9A6C8', muted: '#796F89' },
  { id: 'mint-sage', name: 'Mint Sage', swatch: '#4D907D', paper: '#F5FBF8', ink: '#263D36', accent: '#4D907D', accent2: '#D1B06A', muted: '#6C827A' },
  { id: 'sunset-peach', name: 'Sunset Peach', swatch: '#D9785C', paper: '#FFF8F4', ink: '#49312B', accent: '#D9785C', accent2: '#E4B66F', muted: '#887168' },
  { id: 'berry-plum', name: 'Berry Plum', swatch: '#8B4B70', paper: '#FFF8FC', ink: '#432B3A', accent: '#8B4B70', accent2: '#D3A1B6', muted: '#826D7B' },
  { id: 'teal-champagne', name: 'Teal Champagne', swatch: '#277F80', paper: '#F5FBFA', ink: '#233D3D', accent: '#277F80', accent2: '#D6B56E', muted: '#6B8180' },
] as const;

function withExtraColorThemes(base: [import('./template-contract').Colorway, import('./template-contract').Colorway, import('./template-contract').Colorway]) {
  const baseVariables = base[0].variables;
  const extras = EXTRA_COLOR_THEMES.map((theme) => ({
    id: theme.id,
    name: theme.name,
    swatch: theme.swatch,
    variables: {
      ...baseVariables,
      paper: theme.paper,
      ink: theme.ink,
      accent: theme.accent,
      accent2: theme.accent2,
      muted: theme.muted,
    },
  }));
  return [...base, ...extras];
}

export type TemplateId = 'rose-arch' | 'blue-ledger' | 'modern-split' | 'gold-frame' | 'minimal-grid' | 'royal-maroon' | 'contemporary-card' | 'blush-rose-floral' | 'editorial-mono' | 'rajwada-crimson' | 'emerald-palace' | 'royal-peacock' | 'haldi-marigold' | 'pearl-lavender' | 'sandstone-rajasthan' | 'kanjivaram-temple' | 'noor-navy' | 'sapphire-silver' | 'portrait-classic';

export const TEMPLATES: Record<TemplateId, TemplateDefinition> = {
  'portrait-classic': { id:'portrait-classic', name:'Portrait Classic', category:'Modern', mood:'A refined ivory portrait layout with a large profile photo, delicate gold frame, elegant personal details and beautifully grouped family information.', languages:['en','hi','gu','mr','ta','bn','pa','te','kn'], colorways: withExtraColorThemes(PORTRAIT_CLASSIC_COLORWAYS), Layout:PortraitClassicLayout, Thumbnail:PortraitClassicThumbnail },
  'rose-arch': { id:'rose-arch', name:'Rose Arch', category:'Modern', mood:'Soft rose stationery with a graceful portrait arch and quiet romantic detailing.', languages:['en','hi','gu','mr','ta','bn','pa','te','kn'], colorways: withExtraColorThemes(ROSE_ARCH_COLORWAYS), Layout:RoseArchLayout, Thumbnail:RoseArchThumbnail },
  'blue-ledger': { id:'blue-ledger', name:'Blue Ledger', category:'Minimal', mood:'A crisp blue-and-ivory profile with structured rows and a practical two-column layout.', languages:['en','hi','gu','mr','ta','bn','pa','te','kn'], colorways: withExtraColorThemes(BLUE_LEDGER_COLORWAYS), Layout:BlueLedgerLayout, Thumbnail:BlueLedgerThumbnail },
  'modern-split': { id:'modern-split', name:'Modern Split', category:'Modern', mood:'A contemporary split portrait and content layout with confident editorial spacing.', languages:['en','hi','gu','mr','ta','bn','pa','te','kn'], colorways: withExtraColorThemes(MODERN_SPLIT_COLORWAYS), Layout:ModernSplitLayout, Thumbnail:ModernSplitThumbnail },
  'gold-frame': { id:'gold-frame', name:'Gold Frame', category:'Traditional', mood:'An ornate double-line gold frame with ceremonial details and a keepsake portrait.', languages:['en','hi','gu','mr','ta','bn','pa','te','kn'], colorways: withExtraColorThemes(GOLD_FRAME_COLORWAYS), Layout:GoldFrameLayout, Thumbnail:GoldFrameThumbnail },
  'minimal-grid': { id:'minimal-grid', name:'Minimal Grid', category:'Minimal', mood:'A typography-led grid with quiet rules, precise alignment and minimal ornament.', languages:['en','hi','gu','mr','ta','bn','pa','te','kn'], colorways: withExtraColorThemes(MINIMAL_GRID_COLORWAYS), Layout:MinimalGridLayout, Thumbnail:MinimalGridThumbnail },
  'royal-maroon': { id:'royal-maroon', name:'Royal Maroon', category:'Traditional', mood:'Deep maroon and antique gold details on warm paper for a rich premium presentation.', languages:['en','hi','gu','mr','ta','bn','pa','te','kn'], colorways: withExtraColorThemes(ROYAL_MAROON_COLORWAYS), Layout:RoyalMaroonLayout, Thumbnail:RoyalMaroonThumbnail },
  'contemporary-card': { id:'contemporary-card', name:'Contemporary Card', category:'Modern', mood:'Modern bordered information cards, balanced whitespace and a clean photo-led header.', languages:['en','hi','gu','mr','ta','bn','pa','te','kn'], colorways: withExtraColorThemes(CONTEMPORARY_CARD_COLORWAYS), Layout:ContemporaryCardLayout, Thumbnail:ContemporaryCardThumbnail },
  'blush-rose-floral': {
    id: 'blush-rose-floral', name: 'Blush Rose Floral', category: 'Modern',
    mood: 'Soft floral romance with airy cards and a graceful portrait treatment.',
    languages: ['en', 'hi', 'gu', 'mr', 'ta', 'bn', 'pa', 'te', 'kn'],
    colorways: withExtraColorThemes(BLUSH_ROSE_COLORWAYS), Layout: BlushRoseFloralLayout, Thumbnail: BlushRoseFloralThumbnail,
  },
  'editorial-mono': {
    id: 'editorial-mono', name: 'Editorial Mono', category: 'Minimal',
    mood: 'Magazine-like black-and-white structure with one precise accent color.',
    languages: ['en', 'hi', 'gu', 'mr', 'ta', 'bn', 'pa', 'te', 'kn'],
    colorways: withExtraColorThemes(EDITORIAL_MONO_COLORWAYS), Layout: EditorialMonoLayout, Thumbnail: EditorialMonoThumbnail,
  },
  'rajwada-crimson': {
    id: 'rajwada-crimson', name: 'Rajwada Crimson', category: 'Traditional',
    mood: 'Ivory court stationery framed in deep crimson with a ceremonial jharokha portrait.',
    languages: ['en', 'hi', 'gu', 'mr', 'ta', 'bn', 'pa', 'te', 'kn'],
    colorways: withExtraColorThemes(RAJWADA_CRIMSON_COLORWAYS), Layout: RajwadaCrimsonLayout, Thumbnail: RajwadaCrimsonThumbnail,
  },
  'emerald-palace': {
    id: 'emerald-palace', name: 'Emerald Palace', category: 'Traditional',
    mood: 'Mughal-inspired emerald stationery with jaali geometry and a diamond portrait.',
    languages: ['en', 'hi', 'gu', 'mr', 'ta', 'bn', 'pa', 'te', 'kn'],
    colorways: withExtraColorThemes(EMERALD_PALACE_COLORWAYS), Layout: EmeraldPalaceLayout, Thumbnail: EmeraldPalaceThumbnail,
  },
  'royal-peacock': {
    id: 'royal-peacock', name: 'Royal Peacock', category: 'Modern',
    mood: 'Peacock-teal editorial composition with a strong vertical sidebar and portrait hero.',
    languages: ['en', 'hi', 'gu', 'mr', 'ta', 'bn', 'pa', 'te', 'kn'],
    colorways: withExtraColorThemes(ROYAL_PEACOCK_COLORWAYS), Layout: RoyalPeacockLayout, Thumbnail: RoyalPeacockThumbnail,
  },
  'haldi-marigold': {
    id: 'haldi-marigold', name: 'Haldi Marigold', category: 'Traditional',
    mood: 'Joyful turmeric stationery with rangoli geometry and a keepsake polaroid portrait.',
    languages: ['en', 'hi', 'gu', 'mr', 'ta', 'bn', 'pa', 'te', 'kn'],
    colorways: withExtraColorThemes(HALDI_MARIGOLD_COLORWAYS), Layout: HaldiMarigoldLayout, Thumbnail: HaldiMarigoldThumbnail,
  },
  'pearl-lavender': {
    id: 'pearl-lavender', name: 'Pearl Lavender', category: 'Modern',
    mood: 'Soft pearl-lavender glass stationery with a calm editorial sidebar and cameo portrait.',
    languages: ['en', 'hi', 'gu', 'mr', 'ta', 'bn', 'pa', 'te', 'kn'],
    colorways: withExtraColorThemes(PEARL_LAVENDER_COLORWAYS), Layout: PearlLavenderLayout, Thumbnail: PearlLavenderThumbnail,
  },
  'sandstone-rajasthan': {
    id: 'sandstone-rajasthan', name: 'Sandstone Rajasthan', category: 'Regional',
    mood: 'Rajasthani sandstone paper, block-print geometry and indigo-led table typography.',
    languages: ['en', 'hi', 'gu', 'mr', 'ta', 'bn', 'pa', 'te', 'kn'],
    colorways: withExtraColorThemes(SANDSTONE_RAJASTHAN_COLORWAYS), Layout: SandstoneRajasthanLayout, Thumbnail: SandstoneRajasthanThumbnail,
  },
  'kanjivaram-temple': {
    id: 'kanjivaram-temple', name: 'Kanjivaram Temple', category: 'Regional',
    mood: 'Deep plum temple stationery with zari geometry and boxed ceremonial tabs.',
    languages: ['en', 'hi', 'gu', 'mr', 'ta', 'bn', 'pa', 'te', 'kn'],
    colorways: withExtraColorThemes(KANJIVARAM_COLORWAYS), Layout: KanjivaramTempleLayout, Thumbnail: KanjivaramTempleThumbnail,
  },
  'noor-navy': {
    id: 'noor-navy', name: 'Noor Navy', category: 'Modern',
    mood: 'Quiet navy stationery with silver geometry and a split editorial hero.',
    languages: ['en', 'hi', 'gu', 'mr', 'ta', 'bn', 'pa', 'te', 'kn'],
    colorways: withExtraColorThemes(NOOR_NAVY_COLORWAYS), Layout: NoorNavyLayout, Thumbnail: NoorNavyThumbnail,
  },
  'sapphire-silver': {
    id: 'sapphire-silver', name: 'Sapphire Silver', category: 'Minimal',
    mood: 'Certificate-inspired sapphire stationery with double borders and a career timeline.',
    languages: ['en', 'hi', 'gu', 'mr', 'ta', 'bn', 'pa', 'te', 'kn'],
    colorways: withExtraColorThemes(SAPPHIRE_SILVER_COLORWAYS), Layout: SapphireSilverLayout, Thumbnail: SapphireSilverThumbnail,
  },
};

export const DEFAULT_TEMPLATE_ID: TemplateId = 'gold-frame';
