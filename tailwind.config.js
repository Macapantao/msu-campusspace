module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: '#800000',  // Maroon color
        gold: '#FFD700',    // Gold color
      },
      typography: {
        DEFAULT: {
          css: {
            textAlign: 'justify',
          },
        },
      },
    },
  },
  plugins: [],
}
