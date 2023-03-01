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
        'bg-home-desktop': "url('../Public/home/background-home-desktop.jpg')",
        'bg-home-tablet': "url('../Public/home/background-home-tablet.jpg')",
        'bg-home-mobile': "url('../Public/home/background-home-mobile.jpg')",
        'bg-destination-desktop': "url('../Public/destination/background-destination-desktop.jpg')",
        'bg-destination-tablet': "url('../Public/destination/background-destination-tablet.jpg')",
        'bg-destination-mobile': "url('../Public/destination/background-destination-mobile.jpg')",
        'bg-technology-desktop': "url('../Public/technology/background-technology-desktop.jpg')",
        'bg-crew-desktop': "url('../Public/crew/background-crew-desktop.jpg')",
      }
    },
  },
  plugins: [],
}
