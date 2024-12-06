/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./src/components/Header.js",
      "./index.html"
    ],
    theme: {
      extend: {
        fontFamily:{
            roboto: ['Roboto Condensed', 'sans-serif'], // Add Roboto Condensed
          }
      },
    },
    plugins: [],
  }