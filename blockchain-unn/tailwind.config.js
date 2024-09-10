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
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'scroll-right': 'scroll 20s linear infinite',
      },
      screens: {
        'sm-420': '420px',
      },
      backgroundImage: {
        'dark-mode': 'linear-gradient(to bottom, #000000, #0E0E0E)',
      },
      colors: {
        'blockchain-green': '#02641C',
        'blockchain-white': '#CBD7CE',
      },
      borderImage: {
        'custom-gradient': 'linear-gradient(180deg, #898B8A 0%, #6FAE80 33.75%, #61F889 66.3%, #AFC8B5 100%)',
      }
    },
  },
  plugins: [],
}
