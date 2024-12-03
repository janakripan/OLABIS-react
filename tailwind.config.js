/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        olabis:["Arima", "system-ui"],
      },
      flexGrow: {
        2: '2'
      },
     
    },
  },
  plugins: [],
}

