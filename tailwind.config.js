/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        screens: {
          xs: "540px",
          sm: "720px",
          md: "960px",
          lg: "1140px",
          xl: "1320px", // 1536px
        },
      },
    },
  },
  plugins: [],
};
