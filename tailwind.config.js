/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Primary: ["Raleway", "sans-serif"],
        Secondary: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
