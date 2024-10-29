/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rajdhani: ["Rajdhani", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
