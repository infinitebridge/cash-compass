const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const colors = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ['class', 'no-darkMode'],
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
      // 'node_modules/react-tailwindcss-datepicker/dist/index.esm.js'
    ),
    'node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
    ...createGlobPatternsForDependencies(__dirname),
  ],
  presets: [require('./../tailwind.config')],
  theme: {
    extend: {
      colors: {
        primary: colors.amber,
        secondary: colors.violet,
        background_gray: '#f9fafb',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
};
