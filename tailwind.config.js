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
        ivory: '#FBF7F0',
        ink: '#1C1917',
        gold: '#B8893B',
        oxblood: '#6B1E2E',
        emerald: '#0F3D3A',
        stone: {
          50: '#FAFAF9', 100: '#F5F5F4', 200: '#E7E5E4', 300: '#D6D3D1',
          400: '#A8A29E', 500: '#78716C', 600: '#57534E', 700: '#44403C',
          800: '#292524', 900: '#1C1917',
        },
      },
      boxShadow: {
        soft: '0 12px 35px rgba(28,25,23,.055)',
        luxe: '0 20px 60px rgba(28,25,23,.10)',
      },
      borderRadius: { '4xl': '2rem' },
      transitionDuration: { 250: '250ms', 300: '300ms' },
    },
  },
  plugins: [],
};
