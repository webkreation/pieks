module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ["Dosis", "sans-serif"],
      sans: ["Dosis", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
