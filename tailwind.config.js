/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'card': '0 0 4px 0 rgba(0,0,0,0.25)',
        'cardhover' : '0 0 8px 0 rgba(0,0,0,0.25)',
      },
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

