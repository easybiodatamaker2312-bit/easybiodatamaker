import type { TemplateDefinition } from './template-contract';
import { MidnightGoldLayout, MidnightGoldThumbnail, MIDNIGHT_GOLD_COLORWAYS } from './templates/phaseB/MidnightGold';
import { BlushRoseFloralLayout, BlushRoseFloralThumbnail, BLUSH_ROSE_COLORWAYS } from './templates/phaseB/BlushRoseFloral';
import { EditorialMonoLayout, EditorialMonoThumbnail, EDITORIAL_MONO_COLORWAYS } from './templates/phaseB/EditorialMono';
import { EmeraldPalaceLayout, EmeraldPalaceThumbnail, EMERALD_PALACE_COLORWAYS, RajwadaCrimsonLayout, RajwadaCrimsonThumbnail, RAJWADA_CRIMSON_COLORWAYS, RoyalPeacockLayout, RoyalPeacockThumbnail, ROYAL_PEACOCK_COLORWAYS } from './templates/phaseC';
import { HaldiMarigoldLayout, HaldiMarigoldThumbnail, HALDI_MARIGOLD_COLORWAYS, PearlLavenderLayout, PearlLavenderThumbnail, PEARL_LAVENDER_COLORWAYS, SandstoneRajasthanLayout, SandstoneRajasthanThumbnail, SANDSTONE_RAJASTHAN_COLORWAYS } from './templates/phaseC2';
import { KanjivaramTempleLayout, KanjivaramTempleThumbnail, KANJIVARAM_COLORWAYS, NoorNavyLayout, NoorNavyThumbnail, NOOR_NAVY_COLORWAYS, SapphireSilverLayout, SapphireSilverThumbnail, SAPPHIRE_SILVER_COLORWAYS } from './templates/phaseC3';
import './templates/phaseD/inspired.css';
import { ClassicIvoryLayout, ClassicIvoryThumbnail, CLASSIC_IVORY_COLORWAYS, RoseArchLayout, RoseArchThumbnail, ROSE_ARCH_COLORWAYS, BlueLedgerLayout, BlueLedgerThumbnail, BLUE_LEDGER_COLORWAYS, GardenGreenLayout, GardenGreenThumbnail, GARDEN_GREEN_COLORWAYS, ModernSplitLayout, ModernSplitThumbnail, MODERN_SPLIT_COLORWAYS, GoldFrameLayout, GoldFrameThumbnail, GOLD_FRAME_COLORWAYS, MinimalGridLayout, MinimalGridThumbnail, MINIMAL_GRID_COLORWAYS, FloralBorderLayout, FloralBorderThumbnail, FLORAL_BORDER_COLORWAYS, RoyalMaroonLayout, RoyalMaroonThumbnail, ROYAL_MAROON_COLORWAYS, ContemporaryCardLayout, ContemporaryCardThumbnail, CONTEMPORARY_CARD_COLORWAYS } from './templates/phaseD/InspiredCollection';

export type TemplateId = 'classic-ivory' | 'rose-arch' | 'blue-ledger' | 'garden-green' | 'modern-split' | 'gold-frame' | 'minimal-grid' | 'floral-border' | 'royal-maroon' | 'contemporary-card' | 'midnight-gold' | 'blush-rose-floral' | 'editorial-mono' | 'rajwada-crimson' | 'emerald-palace' | 'royal-peacock' | 'haldi-marigold' | 'pearl-lavender' | 'sandstone-rajasthan' | 'kanjivaram-temple' | 'noor-navy' | 'sapphire-silver';

export const TEMPLATES: Record<TemplateId, TemplateDefinition> = {
  'classic-ivory': { id:'classic-ivory', name:'Classic Ivory', category:'Traditional', mood:'Warm ivory paper, a double gold frame and a centered portrait for a timeless family introduction.', languages:['en','hi','gu','mr','ta','bn','pa','te','kn'], colorways:CLASSIC_IVORY_COLORWAYS, Layout:ClassicIvoryLayout, Thumbnail:ClassicIvoryThumbnail },
  'rose-arch': { id:'rose-arch', name:'Rose Arch', category:'Modern', mood:'Soft rose stationery with a graceful portrait arch and quiet romantic detailing.', languages:['en','hi','gu','mr','ta','bn','pa','te','kn'], colorways:ROSE_ARCH_COLORWAYS, Layout:RoseArchLayout, Thumbnail:RoseArchThumbnail },
  'blue-ledger': { id:'blue-ledger', name:'Blue Ledger', category:'Minimal', mood:'A crisp blue-and-ivory profile with structured rows and a practical two-column layout.', languages:['en','hi','gu','mr','ta','bn','pa','te','kn'], colorways:BLUE_LEDGER_COLORWAYS, Layout:BlueLedgerLayout, Thumbnail:BlueLedgerThumbnail },
  'garden-green': { id:'garden-green', name:'Garden Green', category:'Regional', mood:'Botanical green accents and a calm centered composition inspired by natural stationery.', languages:['en','hi','gu','mr','ta','bn','pa','te','kn'], colorways:GARDEN_GREEN_COLORWAYS, Layout:GardenGreenLayout, Thumbnail:GardenGreenThumbnail },
  'modern-split': { id:'modern-split', name:'Modern Split', category:'Modern', mood:'A contemporary split portrait and content layout with confident editorial spacing.', languages:['en','hi','gu','mr','ta','bn','pa','te','kn'], colorways:MODERN_SPLIT_COLORWAYS, Layout:ModernSplitLayout, Thumbnail:ModernSplitThumbnail },
  'gold-frame': { id:'gold-frame', name:'Gold Frame', category:'Traditional', mood:'An ornate double-line gold frame with ceremonial details and a keepsake portrait.', languages:['en','hi','gu','mr','ta','bn','pa','te','kn'], colorways:GOLD_FRAME_COLORWAYS, Layout:GoldFrameLayout, Thumbnail:GoldFrameThumbnail },
  'minimal-grid': { id:'minimal-grid', name:'Minimal Grid', category:'Minimal', mood:'A typography-led grid with quiet rules, precise alignment and minimal ornament.', languages:['en','hi','gu','mr','ta','bn','pa','te','kn'], colorways:MINIMAL_GRID_COLORWAYS, Layout:MinimalGridLayout, Thumbnail:MinimalGridThumbnail },
  'floral-border': { id:'floral-border', name:'Floral Border', category:'Modern', mood:'Airy floral flourishes, gentle colors and a refined portrait treatment.', languages:['en','hi','gu','mr','ta','bn','pa','te','kn'], colorways:FLORAL_BORDER_COLORWAYS, Layout:FloralBorderLayout, Thumbnail:FloralBorderThumbnail },
  'royal-maroon': { id:'royal-maroon', name:'Royal Maroon', category:'Traditional', mood:'Deep maroon and antique gold details on warm paper for a rich premium presentation.', languages:['en','hi','gu','mr','ta','bn','pa','te','kn'], colorways:ROYAL_MAROON_COLORWAYS, Layout:RoyalMaroonLayout, Thumbnail:RoyalMaroonThumbnail },
  'contemporary-card': { id:'contemporary-card', name:'Contemporary Card', category:'Modern', mood:'Modern bordered information cards, balanced whitespace and a clean photo-led header.', languages:['en','hi','gu','mr','ta','bn','pa','te','kn'], colorways:CONTEMPORARY_CARD_COLORWAYS, Layout:ContemporaryCardLayout, Thumbnail:ContemporaryCardThumbnail },
  'midnight-gold': {
    id: 'midnight-gold', name: 'Midnight Gold', category: 'Traditional',
    mood: 'Aubergine-black wedding stationery with a gilded, ceremonial center.',
    languages: ['en', 'hi', 'gu', 'mr', 'ta', 'bn', 'pa', 'te', 'kn'],
    colorways: MIDNIGHT_GOLD_COLORWAYS, Layout: MidnightGoldLayout, Thumbnail: MidnightGoldThumbnail,
  },
  'blush-rose-floral': {
    id: 'blush-rose-floral', name: 'Blush Rose Floral', category: 'Modern',
    mood: 'Soft floral romance with airy cards and a graceful portrait treatment.',
    languages: ['en', 'hi', 'gu', 'mr', 'ta', 'bn', 'pa', 'te', 'kn'],
    colorways: BLUSH_ROSE_COLORWAYS, Layout: BlushRoseFloralLayout, Thumbnail: BlushRoseFloralThumbnail,
  },
  'editorial-mono': {
    id: 'editorial-mono', name: 'Editorial Mono', category: 'Minimal',
    mood: 'Magazine-like black-and-white structure with one precise accent color.',
    languages: ['en', 'hi', 'gu', 'mr', 'ta', 'bn', 'pa', 'te', 'kn'],
    colorways: EDITORIAL_MONO_COLORWAYS, Layout: EditorialMonoLayout, Thumbnail: EditorialMonoThumbnail,
  },
  'rajwada-crimson': {
    id: 'rajwada-crimson', name: 'Rajwada Crimson', category: 'Traditional',
    mood: 'Ivory court stationery framed in deep crimson with a ceremonial jharokha portrait.',
    languages: ['en', 'hi', 'gu', 'mr', 'ta', 'bn', 'pa', 'te', 'kn'],
    colorways: RAJWADA_CRIMSON_COLORWAYS, Layout: RajwadaCrimsonLayout, Thumbnail: RajwadaCrimsonThumbnail,
  },
  'emerald-palace': {
    id: 'emerald-palace', name: 'Emerald Palace', category: 'Traditional',
    mood: 'Mughal-inspired emerald stationery with jaali geometry and a diamond portrait.',
    languages: ['en', 'hi', 'gu', 'mr', 'ta', 'bn', 'pa', 'te', 'kn'],
    colorways: EMERALD_PALACE_COLORWAYS, Layout: EmeraldPalaceLayout, Thumbnail: EmeraldPalaceThumbnail,
  },
  'royal-peacock': {
    id: 'royal-peacock', name: 'Royal Peacock', category: 'Modern',
    mood: 'Peacock-teal editorial composition with a strong vertical sidebar and portrait hero.',
    languages: ['en', 'hi', 'gu', 'mr', 'ta', 'bn', 'pa', 'te', 'kn'],
    colorways: ROYAL_PEACOCK_COLORWAYS, Layout: RoyalPeacockLayout, Thumbnail: RoyalPeacockThumbnail,
  },
  'haldi-marigold': {
    id: 'haldi-marigold', name: 'Haldi Marigold', category: 'Traditional',
    mood: 'Joyful turmeric stationery with rangoli geometry and a keepsake polaroid portrait.',
    languages: ['en', 'hi', 'gu', 'mr', 'ta', 'bn', 'pa', 'te', 'kn'],
    colorways: HALDI_MARIGOLD_COLORWAYS, Layout: HaldiMarigoldLayout, Thumbnail: HaldiMarigoldThumbnail,
  },
  'pearl-lavender': {
    id: 'pearl-lavender', name: 'Pearl Lavender', category: 'Modern',
    mood: 'Soft pearl-lavender glass stationery with a calm editorial sidebar and cameo portrait.',
    languages: ['en', 'hi', 'gu', 'mr', 'ta', 'bn', 'pa', 'te', 'kn'],
    colorways: PEARL_LAVENDER_COLORWAYS, Layout: PearlLavenderLayout, Thumbnail: PearlLavenderThumbnail,
  },
  'sandstone-rajasthan': {
    id: 'sandstone-rajasthan', name: 'Sandstone Rajasthan', category: 'Regional',
    mood: 'Rajasthani sandstone paper, block-print geometry and indigo-led table typography.',
    languages: ['en', 'hi', 'gu', 'mr', 'ta', 'bn', 'pa', 'te', 'kn'],
    colorways: SANDSTONE_RAJASTHAN_COLORWAYS, Layout: SandstoneRajasthanLayout, Thumbnail: SandstoneRajasthanThumbnail,
  },  'kanjivaram-temple': {
    id: 'kanjivaram-temple', name: 'Kanjivaram Temple', category: 'Regional',
    mood: 'Deep plum temple stationery with zari geometry and boxed ceremonial tabs.',
    languages: ['en', 'hi', 'gu', 'mr', 'ta', 'bn', 'pa', 'te', 'kn'],
    colorways: KANJIVARAM_COLORWAYS, Layout: KanjivaramTempleLayout, Thumbnail: KanjivaramTempleThumbnail,
  },
  'noor-navy': {
    id: 'noor-navy', name: 'Noor Navy', category: 'Modern',
    mood: 'Quiet navy stationery with silver geometry and a split editorial hero.',
    languages: ['en', 'hi', 'gu', 'mr', 'ta', 'bn', 'pa', 'te', 'kn'],
    colorways: NOOR_NAVY_COLORWAYS, Layout: NoorNavyLayout, Thumbnail: NoorNavyThumbnail,
  },
  'sapphire-silver': {
    id: 'sapphire-silver', name: 'Sapphire Silver', category: 'Minimal',
    mood: 'Certificate-inspired sapphire stationery with double borders and a career timeline.',
    languages: ['en', 'hi', 'gu', 'mr', 'ta', 'bn', 'pa', 'te', 'kn'],
    colorways: SAPPHIRE_SILVER_COLORWAYS, Layout: SapphireSilverLayout, Thumbnail: SapphireSilverThumbnail,
  },
};

export const DEFAULT_TEMPLATE_ID: TemplateId = 'midnight-gold';
