import projectColors from "./lib/config/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  // content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["RaleWayBold"],
        nunito: ["NunitoSnas"],
      },
      colors: {
        primary: projectColors.primary,
        secondary: projectColors.secondary,
        primaryLight: projectColors.primaryLight,
      },
    },
  },
  plugins: [],
};
