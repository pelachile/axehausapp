const colors = require("material-ui-colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "header-img": "url('./AxeHausHome2.jpg')",
      },
      colors: { ...colors },
      fontFamily: {
        heading: ["Fredericka\\ The\\ Great", "serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
