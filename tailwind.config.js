/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary":"#1E1E1E",
        "fall-primary" :"#FFEAC5",
        "fall-secondary" :"#FFDBB5",
        "fall-third" :"#6C4E31",
        "fall-fourth":"#603F26"
      }
    },
  },
  plugins: [],
}