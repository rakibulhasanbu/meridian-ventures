/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgGray: "#F1F5F9",
        dark: "#10161B",
        bgDarkGrey: "#1B252D",
        border: "#D8DBE0",
        purple: "#924FF8",
        red: "#DB352F",
        blue: "#475BF1",
        textGrey: "#667687",
        textDarkGrey: "#7A8B99",
        sky: "#3AD7DC",
      },
      backgroundImage: {
        "bannerBg": "url('/assets/banner.png')",
        "btnBg": "url('/assets/bg-btn.png')",
        "serviceBg": "url('/assets/our services.png')",
        "teamBg": "url('/assets/DREAM Team.png')",
      },
      container: {
        center: true
      }
    },
  },
  plugins: [],
}