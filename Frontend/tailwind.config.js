/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Inter', 'sans-serif'],
      }
    },
    keyframes: {
      "infinite-scroll":{
        "0%": { transform: "translateX(0)"},
        "100%": {transform: "translateX(calc(-50% - 20px))"},
      },
    },

    animation:{
      "infinite-scroll": "infinite-scroll 5s linear infinite",
    },
  },
  plugins: [],
}

