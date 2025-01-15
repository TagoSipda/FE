/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#9DBDFF",
        grey: "#F8F8F8",
        desc: "#767676",
        disabled: "#DBDBDB",
        placeholder: "#B9AEAE",
        divider: "#F2EFEF",
      },
      boxShadow: {
        header: "0px 1px 12px rgba(150,175, 225, 0.14)",
        "drop-container": "0px 0px 7px 0px rgba(0,0, 0, 0.2)",
        "slight-drop-container": "0px 3px 10px 1px rgba(0,0, 0, 0.1)",
      },
      fontSize: {
        title: "22px",
        h2: "18px",
        desc: "12px",
      },
      borderRadius: {
        medium: "14px",
        "2.5xl": "20px",
      },
      spacing: {
        1.75: "7px",
        2.25: "9px",
        3.25: "13px",
        3.75: "15px",
        4.25: "17px",
        4.5: "18px",
        "main-list": "calc(100% - 152px)",
      },
      keyframes: {
        expandWidth: {
          "0%": { width: "83%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        expandWidth: "expandWidth 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};
