/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rajdhani: ["Rajdhani", "serif"],
      },
      boxShadow: {
        Card: "0 0 30px rgba(255, 255, 255, 0.2)",
      },
    },
  },
  plugins: [require("daisyui")],
};
