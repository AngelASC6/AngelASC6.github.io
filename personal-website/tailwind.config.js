/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/Header.js",
    "./index.html",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "#1A1A1A",
            maxWidth: "100%",
            h1: {
              color: "#064523", 
              fontWeight: "600",
              fontFamily: "Poppins",
              marginBottom: "1.5rem",
              marginTop: "2.5rem",
            },
            h2: {
              color: "#064523",
              fontWeight: "500",
              fontFamily: "Poppins",
              marginBottom: "1.25rem",
              marginTop: "2rem",
            },
            h3: {
              color: "#064523", 
              fontFamily: "Poppins",
              marginBottom: "1rem",
              marginTop: "1.75rem",
            },
            a: {
              color: "#064523", 
              "&:hover": {
                color: "#7BAE5F",
              },
            },
            strong: {
              color: "#064523",
            },
            p: {
              marginTop: "1rem",
              marginBottom: "1rem",
            },
          },
        },
        lg: {
          css: {
            h1: { color: "#1e40af" }, // darker blue for large prose
          },
        },
      },
      fontFamily: {
        roboto: ["Roboto Condensed", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        asparagus: "#7BAE5F",
        snow: "#FBF5F3",
        "erie-black": "#1A1A1A",
        "racing-green": "#064523",
      },
      animation: {
        fade: "fadeIn .6s ease-out forwards",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
