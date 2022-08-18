module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "582px",
        "2xs": "376px",
      },
      colors: {
        "theme-blue": "#002A64",
        "theme-sub-white": "#B3BFC8",
        "theme-sub-blue": "#003675",
        "translucent-orange": "rgba(251, 149, 4, 0.8)",
        "theme-orange": "#fb9528",
        "theme-gray": "#626262",
        "translucent-black": "rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
