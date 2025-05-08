/** @type {import('tailwindcss').Config} */
// tailwind.config.js
const rtl= require("tailwindcss-rtl")
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tajawal: ['Tajawal', 'sans-serif'],
      },
      colors: {
        'teal-custom': {
          DarkCayan: '#448e90',
          Poppy: '#d74a4d',
          orange: '#ee7830',
          green : '#8baf41',
          bordergradient : 'linear-gradient(to right, #448e90, #8baf41) 1',
        },
    },
  },
  plugins: [],
}}

