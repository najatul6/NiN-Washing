/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['<Your Google Font>', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'deep-blue': '#151b3f',
        'white-coffee': '#d0a181',
      },
    },
    
  },
  plugins: [],
}

