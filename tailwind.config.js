module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'theme': '#3B81F7',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
