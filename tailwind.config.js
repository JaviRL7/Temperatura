/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'red-pastel': '#FFCCCC',
        'orange-pastel': '#FFDDAA',
        'green-pastel': '#CCFFCC',
        'blue-pastel-light': '#CCE0FF',
        'blue-pastel-dark': '#AACCFF',
      },
    },
  },
  plugins: [],
}
