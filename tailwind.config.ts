import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "base-github-button":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.00) 100%), #375DFB",
        "optimism-github-button":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.00) 100%), #DF1C41",
        "mode-github-button":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.00) 100%), #CDFF00",
        "scroll-github-button":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.00) 100%), #FFEDD8",
      },
      colors: {
        primary: {
          50: "#0A0D14",
          100: "#505050",
          150: "#F6F8FA",
          200: "#525866",
          250: "#E2E4E9",
          300: "#101828",
          350: "#475467",
          400: "#0052FF",
          450: "#FF1636",
          500: "#CDFF00",
          550: "#FFEDD8",
          600: "#6E330C",
          650: "#EBF1FF",
          700: "#162664",
          750: "#253EA7",
          800: "#710E21",
          850: "#242D01",
          900: "#281D11",
        },
        grey: {
          50: "#717184",
        },
      },
      boxShadow: {
        "landing-nav":
          "0px 20px 25px -5px rgba(0, 0, 0, 0.10), 0px 8px 10px -6px rgba(0, 0, 0, 0.10)",
        "nav-select-shadow": "0px 1px 2px 0px rgba(228, 229, 231, 0.24)",
        "wallet-icon-shadow":
          "0px -8px 16px 0px rgba(197, 199, 201, 0.48) inset",
        "base-github-button":
          "0px 1px 2px 0px rgba(37, 62, 167, 0.48), 0px 0px 0px 1px #375DFB",
        "optimism-github-button":
          "0px 1px 2px 0px rgba(175, 29, 29, 0.48), 0px 0px 0px 1px #E93535",
        "mode-github-button":
          "0px 1px 2px 0px rgba(36, 45, 1, 0.48), 0px 0px 0px 1px #CDFF00",
        "scroll-github-button":
          "0px 1px 2px 0px rgba(228, 195, 160, 0.48), 0px 0px 0px 1px #FFEEDA",
      },
    },
  },
  plugins: [],
};
export default config;
