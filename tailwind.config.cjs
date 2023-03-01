/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bellefair: ["Bellefair", 'serif'],
        barlow: ["Barlow Condensed", 'sans-serif']
      },
      backgroundImage: {
        'bg-home-desktop': "url('/home/background-home-desktop.jpg')",
        'bg-home-tablet': "url('/assets/home/background-home-tablet.jpg')",
        'bg-home-mobile': "url('/assets/home/background-home-mobile.jpg')"
      }
    },
  },
  plugins: [],
}
