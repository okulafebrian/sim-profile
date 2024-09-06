/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Gabarito"', ...defaultTheme.fontFamily.sans]
    },
    extend: {}
  },
  plugins: [require("tailwindcss-primeui")]
}
