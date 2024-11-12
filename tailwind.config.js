/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-yellow': '#E0FF4F',
        'theme-orange': '#AC3931',
        'theme-ash': '#537D8D'
      }
    },
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif']
    }
  },
  plugins: [],
}