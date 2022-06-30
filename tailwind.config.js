/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#F3F4F8",
          100: "#EBF5FF",
          200: "#F5F7FD",
          300: "#ECEFF5",
          700: "#1E79D6",
          900: "#00469F",
        },
        gray: {
          50: "#F8F8FA",
          300: "#B0B2B9",
          600: "#ACAEB6",
          700: "#5D6373",
          800: "#393E50",
        },
      },
      screens: {
        "3xl": "1760px",
      },
      dropShadow: {
        "3xl": "0 10px 10px rgba(22, 108, 200, 0.2)",
      },
    },
    screens: {
      xxxs: "320px",
      xxs: "360px",
      xs: "475px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
