module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "header-img": "url('./AxeHausHome2.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
