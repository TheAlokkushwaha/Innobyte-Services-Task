/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html,mdx}",
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      md: { max: "1050px" },
      sm: { max: "550px" }
    },
    extend: {
      colors: {
        black: {
          "900_0a": "var(--black_900_0a)"
        },
        blue: {
          50: "var(--blue_50)",
          a200: "var(--blue_a200)",
          a700: "var(--blue_a700)"
        },
        blue_gray: {
          100: "var(--blue_gray_100)",
          500: "var(--blue_gray_500)",
          900: "var(--blue_gray_900)",
          "500_19": "var(--blue_gray_500_19)",
          "500_4c": "var(--blue_gray_500_4c)",
          "900_4c": "var(--blue_gray_900_4c)"
        },
        cyan: {
          a400: "var(--cyan_a400)"
        },
        deep_orange: {
          200: "var(--deep_orange_200)",
          600: "var(--deep_orange_600)"
        },
        gray: {
          50: "var(--gray_50)",
          500: "var(--gray_500)",
          900: "var(--gray_900)",
          "50_01": "var(--gray_50_01)",
          "50_02": "var(--gray_50_02)"
        },
        orange: {
          a200: "var(--orange_a200)",
          a700: "var(--orange_a700)"
        },
        teal: {
          "900_11": "var(--teal_900_11)",
          a700: "var(--teal_a700)"
        },
        white: {
          a700: "var(--white_a700)",
          a700_00: "var(--white_a700_00)"
        },
        yellow: {
          700: "var(--yellow_700)"
        }
      },
      boxShadow: {
        xs: "0 40px 170px 0 #00224811",
        sm: "8px 20px 39px 10px #0000000a"
      },
      fontFamily: {
        airbnbcerealapp: "Airbnb Cereal App",
        ekselldisplay2: "Eksell Display",
        roboto: "Roboto"
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
};