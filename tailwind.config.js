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
        slate: {
          50: '#fafafa',
          100: '#eaeaea',
          200: '#999',
          300: '#888',
          400: '#666',
          500: '#444',
          600: '#333',
          700: '#111'
        }
      }
    }
  },
  variants: {},
  plugins: []
}
