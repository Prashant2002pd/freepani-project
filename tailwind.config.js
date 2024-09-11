/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          black: "#000000",
          green: "#1dba1c",
          white: "#ffffff",
          darkblue: "#0A0F22",
          lightblue: "#49c5b6",
          grey: "#BAC7CC",
        },
        secondary: {
          darkblue: "#1d2233",
          grey: "#f0f4f8",
        },
      },
      backgroundColor: {
        primary: {
          black: "#000000",
          green: "#1dba1c",
          white: "#ffffff",
          darkblue: "#0A0F22",
          lightblue: "#49c5b6",
          grey: "#BAC7CC",
        },
        secondary: {
          darkblue: "#1d2233",
          grey: "#f0f4f8",
        },
      },
    },
  },
  plugins: [],
});
