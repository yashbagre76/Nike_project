/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins "', "sans-serif"],
        robotoMono: ['"Roboto Mono"', "monospace "],
        color: {
          red: "#d01c28",
          gray: "#2e2e2e",
        },
      },
    },
  },
  plugins: [],
};
