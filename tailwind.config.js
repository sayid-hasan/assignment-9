/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserate: '"Montserrat", sans-serif',
        bitter: '"Bitter", serif',
      },
    },
  },
  plugins: [require("daisyui")],
};
