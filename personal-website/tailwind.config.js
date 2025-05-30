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
            poppins: ['Poppins', 'sans-serif'], // Add Poppins
          },
          colors: {
            "asparagus": "#7BAE5F",
            "snow": "#FBF5F3",
            "erie-black": "#1A1A1A",
            "racing-green": "#064523",
          },
        animation: {
          fade: 'fadeIn .6s ease-out forwards', 
          wiggle: 'wiggle 1s ease-in-out infinite',},
          keyframes: {
            fadeIn: {
              from: { opacity: 0, transform: 'translateY(20px)' },
              to: { opacity: 1, transform: 'translateY(0)' },
            },
            wiggle: {
              '0%, 100%': { transform: 'rotate(-1deg)' },
              '50%': { transform: 'rotate(1deg)' },
            },
        },
          
      },
    },
    plugins: [],
  }