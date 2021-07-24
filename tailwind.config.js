module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        '1C1D1F': '#1C1D1F',
        '2D2F36': '#2D2F36',
        '3F414B': '#3F414B',
        'E5E5E5': '#E5E5E5',
        'F2C94C': '#F2C94C',
        '8B8B8B': '#8B8B8B',
        '3B3E46': '#3B3E46',
        '1F1F1F': '#1F1F1F',
        '484D57': '#484D57',
        'EDEDED': '#EDEDED',
   
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
