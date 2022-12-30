/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,jsx}",
    "./index.html"
  ],
  theme: {
    fontFamily: {
      'inter': ['Inter']
    },
    extend: {
      colors: {
        'background-black': '#1A1B21',
        'role-green': '#F3BF99',
        'linkedin': '#5093E2',
      }
    },
  },
  plugins: [],
}
