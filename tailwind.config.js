/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "neutral-100": "hsl(0, 0%, 100%)",
      "neutral-200": "hsl(224, 23%, 94%)",
      "neutral-300": "hsl(225, 17%, 82%)",
      "neutral-400": "hsl(223, 7%, 53%)",
      "neutral-500": "hsl(226, 6%, 40%)",
      "neutral-600": "hsl(225, 13%, 12%)",
      error: "hsl(0, 68%, 61%)",
    },
    fontFamily: {
      primary: ["League Spartan", "sans-serif"],
    },
    fontWeight: {
      bold: 700,
      medium: 500,
    },
    screens: {
      tablet: "40rem",
      desktop: "60rem",
    },
    extend: {},
  },
  plugins: [],
};
