/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: {
        xs: '420px',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'system-ui', 'sans-serif'],
      },
      colors: {
        bison: {
          bg: '#838484',
          fg: '#d1d2d4',
          theme: {
            fg: '#F0FFD4',
            bg: '#102E12',
          },
        },
      },
    },
  },
  plugins: [],
}
