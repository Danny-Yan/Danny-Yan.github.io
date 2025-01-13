/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'selector',
  theme: {
    fontFamily: {
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss-3d'),
  ],
}

