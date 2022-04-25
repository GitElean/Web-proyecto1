module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      colors: {
        brown: {
          50: '#ad853e'
        }
      }
    }
  },
  variants: {},
  plugins: []
}
