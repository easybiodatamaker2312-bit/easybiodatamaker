import type { TemplateDefinition } from './template-contract';
import { MidnightGoldLayout, MidnightGoldThumbnail, MIDNIGHT_GOLD_COLORWAYS } from './templates/phaseB/MidnightGold';
import { BlushRoseFloralLayout, BlushRoseFloralThumbnail, BLUSH_ROSE_COLORWAYS } from './templates/phaseB/BlushRoseFloral';
import { EditorialMonoLayout, EditorialMonoThumbnail, EDITORIAL_MONO_COLORWAYS } from './templates/phaseB/EditorialMono';
import { EmeraldPalaceLayout, EmeraldPalaceThumbnail, EMERALD_PALACE_COLORWAYS, RajwadaCrimsonLayout, RajwadaCrimsonThumbnail, RAJWADA_CRIMSON_COLORWAYS, RoyalPeacockLayout, RoyalPeacockThumbnail, ROYAL_PEACOCK_COLORWAYS } from './templates/phaseC';
import { HaldiMarigoldLayout, HaldiMarigoldThumbnail, HALDI_MARIGOLD_COLORWAYS, PearlLavenderLayout, PearlLavenderThumbnail, PEARL_LAVENDER_COLORWAYS, SandstoneRajasthanLayout, SandstoneRajasthanThumbnail, SANDSTONE_RAJASTHAN_COLORWAYS } from './templates/phaseC2';
import { KanjivaramTempleLayout, KanjivaramTempleThumbnail, KANJIVARAM_COLORWAYS, NoorNavyLayout, NoorNavyThumbnail, NOOR_NAVY_COLORWAYS, SapphireSilverLayout, SapphireSilverThumbnail, SAPPHIRE_SILVER_COLORWAYS } from './templates/phaseC3';

export type TemplateId = 'midnight-gold' | 'blush-rose-floral' | 'editorial-mono' | 'rajwada-crimson' | 'emerald-palace' | 'royal-peacock' | 'haldi-marigold' | 'pearl-lavender' | 'sandstone-rajasthan' | 'kanjivaram-temple' | 'noor-navy' | 'sapphire-silver';

export const TEMPLATES: Record<TemplateId, TemplateDefinition> = {
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
