/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bodyDesktop: "url('/home/background-home-desktop.jpg')",
        bodyMobile: "url('/home/background-home-mobile.jpg')",
        bodyDesktopDestination:
          "url('/destination/background-destination-desktop.jpg')",
        bodyMobileDestination:
          "url('/destination/background-destination-mobile.jpg')",
      },
        textUnderlineOffset: {
        3: "100px",
      },
    },
  },
  plugins: [],
};
