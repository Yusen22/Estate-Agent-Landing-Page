/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,css,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
    'sans': ['Niramit', 'sans-serif'] 
    },
    extend: {
      fontFamily: {
        'urbanist': ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

