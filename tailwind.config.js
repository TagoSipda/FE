/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#9DBDFF",
      },
      boxShadow: {
        header: "0px 1px 12px rgba(150,175, 225, 0.14)",
      },
    },
  },
  plugins: [],
};
