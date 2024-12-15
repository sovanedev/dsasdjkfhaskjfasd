import { nextui } from "@nextui-org/react";

export default {
  content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      fontFamily: {
        display: 'Open Sans, ui-serif',
      }
    },
    fontFamily: {
      sans: ['Comfortaa', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
