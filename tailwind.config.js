/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "hue-green": "rgb(36, 243, 147)",
        "light-mode-body": "#ECECF3",
        "dark-mode-body": "rgb(31,41,55)",
        "first-color": "#6464CB",
        "Soft-blue": "hsl(215, 51%, 70%)",
        cyan: "hsl(178, 100%, 50%)",
        "Very-dark-blue": "hsl(217, 54%, 11%)",
        "Very-dark-blue-card-BG": "hsl(216, 50%, 16%)",
        "Very-dark-blue-line": "hsl(215, 32%, 27%)",
        golden: "hsl(41, 100%, 76%)",
        "golden-faded": "hsl(41, 100%, 50%)",
        "neon-green": "hsl(150, 100%, 66%)",
        calculator: "#3a4764",
      },
      animation: {
        "spin-second": "spin 60s linear infinite",
        "spin-minute": "spin 3600s linear infinite",
        "spin-hour": "spin 43200s linear infinite",
        "UR-flashing": "UR-flash 1.8s linear 0.5s infinite alternate",
        "SR-flashing": "SR-flash 1.8s linear 0.5s infinite alternate",
      },
      boxShadow: {
        card: "0 11px 7px 11px #00000007;",
        dice: "0px 10px 70px 4px rgb(37,99,233)",
      },
      keyframes: {
        "UR-flash": {
          "0%": {
            "box-shadow": "0 0 10px 10px #a86cc0c5",
          },
          "50%": {
            "box-shadow": "0 0 10px 10px #f6716c",
          },
          "100%": {
            "box-shadow": "0 0 10px 10px #2d4ba7",
          },
        },
        "SR-flash": {
          "0%, 100%": {
            "box-shadow": "0 0 10px 10px hsl(41, 100%, 66%)",
          },
          "50%": {
            "box-shadow": "0 0 10px 10px hsl(41, 100%, 80%)",
          },
        },
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        app: "240px auto auto 240px",
        appcard: "repeat(auto-fill, minmax(280px, 1fr))",
        passcard: "repeat(auto-fill, minmax(300px, 3fr))",
      },
      gridTemplateRows: {
        // Simple 16 column grid
        app: "repeat(4, 25%)",
      },
      height: {
        home: "calc(90% - 2.5rem)",
      },
    },
  },
  plugins: [
    /* eslint-disable global-require */
    require("daisyui"),
  ],
};
