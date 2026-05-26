/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdfaf5',
          100: '#faf3e8',
          200: '#f5e6d0',
        },
        warm: {
          50: '#fff8f3',
          100: '#ffece0',
          200: '#ffd4b8',
          300: '#ffb380',
          400: '#ff8c4d',
          500: '#f06820',
          600: '#d44e0a',
          700: '#b03d00',
          800: '#8a2f00',
          900: '#6b2400',
        },
        terracotta: {
          50: '#fdf5f2',
          100: '#fae8e0',
          200: '#f3cab8',
          300: '#e9a385',
          400: '#dc7a55',
          500: '#c95a33',
          600: '#b04525',
          700: '#8c3520',
          800: '#6f2c1e',
          900: '#5a261c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}