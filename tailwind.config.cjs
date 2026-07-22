module.exports = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F4C5C',
        gold: '#D4AF37',
        lightgray: '#F8F9FA',
        white: '#FFFFFF'
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        sans: ['Poppins', 'sans-serif']
      },
      boxShadow: {
        'lux': '0 10px 30px rgba(15,76,92,0.08)'
      }
    },
  },
  plugins: [],
}
