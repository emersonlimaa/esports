/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage:{
        galaxyBackground: "url(./public/background.png)",
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 31.08%, #43E7AD 80.94%, #E1D55D 40.57%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.88%)'
      },
    },
  },
  plugins: [],
}
