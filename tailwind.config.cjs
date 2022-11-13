/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      bellefair: ["bellefair", "serif"],
      barlow: ["barlow", "sans-serif"],
      barlowCondensed: ["'barlow condensed'", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
