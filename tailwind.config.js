/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#64ffda", // Green accent like Brittany Chiang's
          background: "#0a192f", // Dark background
        },
      },
    },
    plugins: [],
  };
  