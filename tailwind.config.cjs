const menus = require('./src/routes/menus/menus.json')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: {
        xs: '420px',
      },
      fontFamily: menus.fontFamily,
      colors: menus.colors,
    },
  },
  plugins: [],
}
