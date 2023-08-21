/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
      screens: {
        widescreen: { raw: "(min-aspect-ratio: 3/2)" },
        tallscreen: { raw: "(max-aspect-ratio: 13/20)" },
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "70%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
        "close-menu": {
          "0%": { transform: "scaleY(1)" },
          "30%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(0)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.75s ease-in-out forwards",
        "close-menu": "close-menu 0.75s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
