module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "app-white": "#FFFFFF",
        "app-black": "#0b0d17",
        "app-black-tr": "rgba(0,0,0,0.8)",
        "app-violet": "#D0D6F9",
      },
      fontSize: {
        "app-h1": "150px",
        "app-h2": "100px",
        "app-h3": "56px",
        "app-h4": "32px",
        "app-h5": "28px",
        "app-sub-h1": "28px",
        "app-sub-h2": "14px",
        "app-small": "18px",
      },
      backgroundImage: {
        "home-pattern-desktop":
          "url('../../public/assets/home/background-home-desktop.jpg')",
        "home-pattern-tablet":
          "url('../../public/assets/home/background-home-tablet.jpg')",
        "home-pattern-phone":
          "url('../../public/assets/home/background-home-mobile.jpg')",
        "destination-pattern-desktop":
          "url('../../public/assets/destination/background-destination-desktop.jpg')",
        "destination-pattern-tablet":
          "url('../../public/assets/destination/background-destination-tablet.jpg')",
        "destination-pattern-phone":
          "url('../../public/assets/destination/background-destination-mobile.jpg')",
        "crew-pattern-desktop":
          "url('../../public/assets/crew/background-crew-desktop.jpg')",
        "crew-pattern-tablet":
          "url('../../public/assets/crew/background-crew-tablet.jpg')",
        "crew-pattern-phone":
          "url('../../public/assets/crew/background-crew-mobile.jpg')",
        "technology-pattern-desktop":
          "url('../../public/assets/technology/background-technology-desktop.jpg')",
        "technology-pattern-tablet":
          "url('../../public/assets/technology/background-technology-tablet.jpg')",
        "technology-pattern-phone":
          "url('../../public/assets/technology/background-technology-mobile.jpg')",
      },
      fontFamily: {
        "sans-serif": ["Barlow Condensed"],
        serif: ["Bellefair"],
      },
      width: {
        500: "500px",
        300: "300px",
      },
      maxWidth: {
        container: "1280px",
      },
      screens: {
        "phone-small": "280px",
        phone: "500px",
        tablet: "960px",
        desktop: "1280px",
        "desktop-large": "1920px",
      },
      letterSpacing: {
        "2/5": "2.5px",
        "4/5": "4.5px",
      },
      animation: {
        "move-top": "move-top 0.2s forwards",
        "move-bottom": "move-bottom 0.2s forwards",
        "move-left": "move-left 0.2s forwards",
        "move-right": "move-right 0.2s forwards",
        "move-rotate-opp": "move-rotate-opp 1s forwards",
        "move-rotate-90": "move-rotate-90 0.2s forwrads",
        "rotate-360": "rotate-360 1s infinite",
      },
      keyframes: {
        "move-top": {
          "0%": { transform: "translateY(3rem)", opacity: "0" },
          "100%": { transform: "translateY(0rem)", opacity: "1" },
        },
        "move-bottom": {
          "0%": { transform: "translateY(-3rem)", opacity: "0" },
          "100%": { transform: "translateY(0rem)", opacity: "1" },
        },
        "move-left": {
          "0%": { transform: "translateX(3rem)", opacity: "0" },
          "100%": { transform: "translateX(0rem)", opacity: "1" },
        },
        "move-right": {
          "0%": { transform: "translateX(-3rem)", opacity: "0" },
          "100%": { transform: "translateX(0rem)", opacity: "1" },
        },
        "move-rotate-opp": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        "move-rotate-90": {
          "0%": { transform: "rotate(-90deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        "rotate-360": {
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
