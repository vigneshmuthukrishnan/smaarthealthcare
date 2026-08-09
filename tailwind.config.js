/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        clinic: {
          navy: '#102A43',
          teal: '#0E8F87',
          mint: '#D9F4EF',
          coral: '#E36B57',
          amber: '#F2B84B',
          ink: '#263238',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 50px rgba(16, 42, 67, 0.12)',
      },
    },
  },
  plugins: [],
};
