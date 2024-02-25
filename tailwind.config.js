/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"]
      },
      colors: {
        primary_softblue: "hsl(215, 51%, 70%)",
        cyan: "hsl(178, 100%, 50%)",
        darkblue_main: "hsl(217, 54%, 11%)",
        darkblue_card: "hsl(216, 50%, 16%)",
        darkblue_line: "hsl(215, 32%, 27%)",
        default_white: "hsl(0, 0%, 100%)"
      }
    },
  },
  plugins: [],
}

