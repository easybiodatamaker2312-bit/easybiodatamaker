/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-ui)', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['var(--font-display)', 'Noto Serif Display', 'Georgia', 'serif'],
        display: ['var(--font-display)', 'Noto Serif Display', 'Georgia', 'serif'],
      },
      colors: {
        ivory: '#F5F7FF',
        ink: '#172554',
        gold: '#6257E8',
        oxblood: '#5145CD',
        emerald: '#0F9F91',
        stone: {
          50: '#F8FAFF', 100: '#EEF2FF', 200: '#E0E7F5', 300: '#C8D2E5',
          400: '#91A0BC', 500: '#64748B', 600: '#52627D', 700: '#394966',
          800: '#263653', 900: '#172554',
        },
      },
      boxShadow: {
        soft: '0 12px 35px rgba(36,54,99,.07)',
        luxe: '0 20px 60px rgba(36,54,99,.13)',
      },
      borderRadius: { '4xl': '2rem' },
      transitionDuration: { 250: '250ms', 300: '300ms' },
    },
  },
  plugins: [],
};
