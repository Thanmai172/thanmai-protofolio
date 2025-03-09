/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          background: "#0a192f", // Deep navy background
          primary: "#64ffda", // Green accent
          secondary: "#8892b0", // Soft grayish-blue
          highlight: "#ccd6f6", // Lighter text
          dark: "#020c1b", // Darkest background
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"], // Modern font
          mono: ["Fira Code", "monospace"], // For code & special text
        },
        spacing: {
          128: "32rem", // Extra large spacing
          144: "36rem",
        },
        borderRadius: {
          xl: "12px",
        },
        screens: {
          xs: "480px", // Extra small devices
        },
        animation: {
          fadeIn: "fadeIn 1s ease-in-out",
          slideUp: "slideUp 0.6s ease-in-out",
        },
        keyframes: {
          fadeIn: {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 },
          },
          slideUp: {
            "0%": { opacity: 0, transform: "translateY(10px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
        },
      },
    },
    plugins: [],
  };
  