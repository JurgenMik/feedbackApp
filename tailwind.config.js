const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans' : ['Jost', ...defaultTheme.fontFamily.sans],
      }
    },
    backgroundImage: {
      'background': "url('../public/assets/background-header.png')",
    },
  },
  plugins: [],
}