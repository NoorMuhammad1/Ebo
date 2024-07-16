/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#333333",
        bright: "#49b970",
        "bright-dark": "#37b05d",
      },
      backgroundImage: {
        about: "url('./assets/bg-1.jpg')",
      },
    },
  },
  plugins: [],
};
