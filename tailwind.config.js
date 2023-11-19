/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
        transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
      primary: '#5E91FF',
      secondary: '#3162FF',
      accent: '#8EB2FF'
    }
  },
  plugins: [],
}

