/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        whitesmoke: "#f5f7fa",
        black: "#131313",
        gray: "#212121",
        darkblue: "#13319a",
        cream: "#fff7e9",
        pink: "#e50b71",
        lightblue: "#4c91f7",
      },
      fontFamily: {
        inter: "Inter",
        poppins: "Poppins",
        "lexend-deca": "'Lexend Deca'",
      },
      borderRadius: {
        "171xl": "190px",
        "481xl": "500px",
      },
    },
    fontSize: {
      xs: "12px",
      lg: "18px",
      "29xl": "48px",
      base: "16px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
