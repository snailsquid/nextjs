module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-blue": "#003153",
        "translucent-orange": "rgba(251, 149, 4, 0.8)",
        "theme-orange": "#fb9528",
        'translucent-black': 'rgba(0, 0, 0, 0.5)'
      },
    },
  },
  plugins: [],
};
