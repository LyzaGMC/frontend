/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#5C6773",
        color2: "#B8C1CB",
        color3: "#F8BC00",
        color4: "#FFE924",
        color5: "#FFFFFF",
        color6: "#262A45",
        color7: "#00B8C4",
        color8: "#6EBF48",
        color9: "#FA5450",
        color10: "#0BA2AC",
        color11: "#D8DFE7",
      },
      backgroundImage: {
        "gradient-to-b": "linear-gradient(to bottom, #F8BC00, #FFE924)", // custom gradient
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"], // 'roboto' is the key you'll use in the class
      },
      gridTemplateColumns: {
        1: "repeat(1, minmax(0, 1fr))",
        2: "repeat(2, minmax(0, 1fr))",
        3: "repeat(3, minmax(0, 1fr))",
        4: "repeat(4, minmax(0, 1fr))",
        5: "repeat(5, minmax(0, 1fr))",
        6: "repeat(6, minmax(0, 1fr))",
        7: "repeat(7, minmax(0, 1fr))",
      },
    },
  },
};
