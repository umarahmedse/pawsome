module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  plugins: [require("daisyui")],
  theme: {
    fontFamily: {
      vans: ["Vina Sans", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      rubik: ["Rubik Bubbles", "sans-serif"],
    },
    backgroundImage: {
      "hero-left": "url('../src/assets/img/hero-left-bg.png')",
    },
    extend: {
      screens: {
        "1100px": "1100px",
        "1200px": "1200px",
        "1300px": "1300px",
        "1500px": "1500px",
        "800px": "800px",
        "400px": "400px",
      },
    },
  },
  daisyui: {
    themes: false,
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
};
