/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teak: {
          DEFAULT: '#3B2415',
          light: '#4A2E1C',
        },
        espresso: '#1A1A1A',
        brass: {
          DEFAULT: '#B8862B',
          light: '#D4AF37',
        },
        ivory: '#F5EDE0',
        cream: '#FDF8F3',
        maroon: '#6E1F1F',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}