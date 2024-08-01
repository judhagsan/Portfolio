/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".word-spacing-custom": {
          wordSpacing: "-0.5vw",
        },
        ".word-spacing-custom2": {
          wordSpacing: "-0.3vw",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
