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
          neon: {
            fg: '#5EF6FF',
            bg: '#F75049',
          },
        },
      },
    },
  },
  plugins: [],
}
