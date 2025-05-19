// tailwind.config.cjs o tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'background': 'hsl(0, 0%, 100%)', // blanco para modo claro
        'foreground': 'hsl(222.2, 84%, 4.9%)', // casi negro para modo claro

        'dark-background': 'hsl(222.2, 84%, 4.9%)', // casi negro para modo oscuro
        'dark-foreground': 'hsl(0, 0%, 100%)', // blanco para modo oscuro

        'accent-green': {
          DEFAULT: 'darkgreen',
          light: 'aquamarine',
        },

        'accent-purple': {
           DEFAULT: 'rebeccapurple',
           light: 'plum',
        },
      },
    },
  },
  plugins: [],
};