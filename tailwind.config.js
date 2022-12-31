/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: "'Oswald', sans-serif",
        source: "'Source Sans Pro', sans-serif",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
