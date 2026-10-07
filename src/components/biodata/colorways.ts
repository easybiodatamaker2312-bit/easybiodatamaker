import type { Colorway } from './template-contract';

export const COLORWAY = {
  midnightGold: [
    { id: 'gold', name: 'Gold', swatch: '#E7C873', variables: { paper: '#0E0B14', ink: '#F8F0DD', accent: '#E7C873', muted: '#B9A989', display: 'Cinzel, serif', body: 'Cormorant Garamond, serif' } },
    { id: 'rose-gold', name: 'Rose Gold', swatch: '#C98F87', variables: { paper: '#120D13', ink: '#F8E8E5', accent: '#C98F87', muted: '#C6A9A5', display: 'Cinzel, serif', body: 'Cormorant Garamond, serif' } },
    { id: 'silver', name: 'Silver', swatch: '#C8CCD2', variables: { paper: '#0E1015', ink: '#F0F2F5', accent: '#C8CCD2', muted: '#A6ACB5', display: 'Cinzel, serif', body: 'Cormorant Garamond, serif' } },
  ],
} satisfies Record<string, [Colorway, Colorway, Colorway]>;
