/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-blue": "#151b3f",
        "white-coffee": "#d0a181",
      },
    },
  },
  daisyui: {
    themes: [
      "light",
    ],
  },
  plugins: [
    require('daisyui')
  ],
  
};
