/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'base': '1.125rem', // 18px
        'lg': '1.25rem',   // 20px
        'xl': '1.5rem',    // 24px
        '2xl': '1.875rem', // 30px
        '3xl': '2.25rem',  // 36px
        '4xl': '2.5rem',   // 40px
        '5xl': '3rem',     // 48px
        '6xl': '3.75rem',  // 60px
        '7xl': '4.5rem',   // 72px
      },
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
