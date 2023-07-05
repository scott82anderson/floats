/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    colors: {
      white: "#fff",
      whitesmoke: "#f5f7fa",
      lightgray: "#d9d9d9",
      black: "#131313",
      gray: "#212121",
      darkblue: "#13319a",
      green: "#02BC7D",
      cream: "#fff7e9",
      pink: "#e50b71",
      lightblue: "#4c91f7",
    },
    fontFamily: {
      inter: "Inter",
      poppins: "Poppins",
      "lexend-deca": "'Lexend Deca'",
      sans: "Poppins",
    },
    extend: {
      fontSize: {
        xs: "12px",
        lg: "18px",
        "20xl": "34px",
        "24xl": "40px",
        "29xl": "48px",
        base: "16px",
      },
      borderRadius: {
        "171xl": "190px",
        "481xl": "500px",
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1280px",
          },
          "@screen xl": {
            maxWidth: "1440px",
          },
        },
      });
    },
  ],
};
