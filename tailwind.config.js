module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'theme': '#3280F6',
        'bgGrey': '#F4F5F5',
        'subNavGrey': '#909090',
        'navGrey': '#72777B',
        'followGreen': '#6cbd45'
      },
      maxWidth: {
        '28': '7rem',
        '32': '8rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
