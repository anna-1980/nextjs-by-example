/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["var(--font-orbitron)", "sans-serif"],
        sans: ["var(--font-exo2)", "sans-serif"], // redifine sans font family of Tailwind to use exo2 as first choice
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
