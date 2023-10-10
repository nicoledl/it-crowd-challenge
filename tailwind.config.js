/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mustard: "#ffc83f",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        montserrat: ["var(--font-montserrat)"],
      },
      dropShadow: {
        "3xl": "0 8px 5px rgba(0, 0, 0, 0.15)",
        "4xl": "0 8px 8px rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
  darkMode: "class",
};
