/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      spacing: {
        'explanation': '100px'
      }
    },
  },
  safelist: [
    'min-h-explanation'
  ],
  plugins: [],
}

