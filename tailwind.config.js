/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./login.html"],
  theme: {
    extend: {
      container: {
        padding: "0.6rem",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      lineHeight: {
        extra: "4.5rem",
      },
      colors: {
        bluer: "rgba(68, 195, 235, 0.8)",
        pinker: "rgba(17, 17, 17, 0.2)        ",
      },
    },
  },
  plugins: [],
}
