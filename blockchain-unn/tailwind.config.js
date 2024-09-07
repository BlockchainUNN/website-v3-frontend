/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        wallpoet: ['Wallpoet', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      screens: {
        'sm-420': '420px',
      },
      backgroundImage: {
        'dark-mode': 'linear-gradient(to bottom, #000000, #0E0E0E)',
      },
    },
  },
  plugins: [],
}
