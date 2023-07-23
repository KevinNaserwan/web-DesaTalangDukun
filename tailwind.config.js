/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-footer': 'linear-gradient(0deg, #0E75BF 0%, rgba(60, 140, 197, 0.77) 22.71%, rgba(100, 159, 202, 0.58) 42.50%, rgba(139, 179, 207, 0.38) 61.77%, rgba(170, 194, 211, 0.23) 76.87%, rgba(217, 217, 217, 0.00) 100%)'
      },
      colors: {
        'main-color': '#0E75BF',
        'second-color': '#EA8F3C',
        'third-color': '#F1F1F1',
        'abu-abu': '#D9D9D9'
      }
    },
  },
  plugins: [],
}
