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
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      colors: {
        saffron: {
          50:  '#fff8ed',
          100: '#fef0d5',
          200: '#fcdfa9',
          300: '#f9c872',
          400: '#f6a93a',
          500: '#f38e13',
          600: '#e47209',
          700: '#bd560a',
          800: '#964410',
          900: '#793910',
        },
        maroon: {
          50:  '#fdf2f4',
          100: '#fbe8eb',
          200: '#f8d4da',
          300: '#f2b3bd',
          400: '#e8849a',
          500: '#d95877',
          600: '#c43860',
          700: '#a52a4e',
          800: '#8b2545',
          900: '#761f3d',
          950: '#7c1932',
        },
        gold: {
          400: '#f5c842',
          500: '#e9b824',
          600: '#c99a0e',
        },
      },
      animation: {
        'fade-up':  'fadeUp 0.6s ease forwards',
        'fade-in':  'fadeIn 0.5s ease forwards',
        'slide-in': 'slideIn 0.4s ease forwards',
        shimmer:    'shimmer 2s infinite',
      },
      keyframes: {
        fadeUp:  { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:  { from: { opacity: '0' }, to: { opacity: '1' } },
        slideIn: { from: { opacity: '0', transform: 'translateX(-16px)' }, to: { opacity: '1', transform: 'translateX(0)' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
      },
    },
  },
  plugins: [],
};
