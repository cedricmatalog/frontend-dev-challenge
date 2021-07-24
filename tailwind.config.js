module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        BLACK: '#1C1D1F',
        GRAY: '#3F414B',
        LIGHT_BLACK: '#2D2F36',
        YELLOW: '#F2C94C',
        PASSWORD: '#8B8B8B',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
