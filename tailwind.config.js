const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        grey: colors.amber,
        red: colors.rose
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}