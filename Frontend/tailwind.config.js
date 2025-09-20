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
        "0%": { transform: "translateX(100%)"},
        "100%": {transform: "translateX(calc(-100%))"},
      },
    },

    animation:{
      "infinite-scroll": "infinite-scroll 30s linear infinite",
    },
  },
  plugins: [],
}

