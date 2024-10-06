/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        "4xl": "44px",
        "5xl": "48px",
        // Add a new border radius option
      },
    },
  },
  plugins: [],
};
