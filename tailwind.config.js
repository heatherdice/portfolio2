/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,html,css}"],
  theme: {
    extend: {
      fontFamily: {
        "katibeh": ['Katibeh', 'cursive'],
        "karla": ['Karla', 'sans-serif']
      },
      colors: {
        "oxford-blue": '#030627',
        "royal-blue": '#0C2565',
        "french-gray": '#BDBDD2',
        "yale-blue": '#023571',
        "lavender": '#E3E4F1'
      }
    },
  },
  plugins: [],
}

