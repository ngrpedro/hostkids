/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        black: " 0px 4px",
        black2px: " 2px 2px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
