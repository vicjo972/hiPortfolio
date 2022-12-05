
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        portfolioWhite: {
          50: '#D9D9D9',
        },
        portfolioBlue: {
          50: '#0E0E17',
        }
      },
      backgroundImage: {
        'texture': "url('/img/texture.svg')",
        'charlie-brown': "url('/img/charlie-brown.svg')",
      }
    },
  },
  plugins: [],
}
