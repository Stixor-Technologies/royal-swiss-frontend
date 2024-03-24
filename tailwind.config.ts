import type { Config } from "tailwindcss";

const config: Config = {
  corePlugins: {
    container: false,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "dark-grain-pattern":
          "linear-gradient(to bottom,#1C306B, #1C306B), url('/images/blend-image.png')",
      },

      fontFamily: {
        righteous: ["var(--font-righteous)"],
      },

      colors: {
        "indigo-blue": "#1C306B",
        "dark-blue": "#0E0446",
        "milk-white": "#F5F5F5",
        yellow: "#EADDA8",
        "yellow-dark": "#EFCF5A",
        "rich-black": "#070C29",
        gray: "#444444",
        "light-gray": "#E2E2E2",
      },
    },
  },
  plugins: [
    // @ts-ignore
    function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "100%",
          // paddingLeft: "1rem",
          // paddingRight: "1rem",
          marginLeft: "auto",
          marginRight: "auto",
          "@screen sm": {
            maxWidth: "100%",
            paddingLeft: "2rem",
            paddingRight: "2rem",
          },
          "@screen md": {
            maxWidth: "100%",
          },
          "@screen lg": {
            maxWidth: "100%",
            paddingLeft: "2.625rem",
            paddingRight: "2.625rem",
          },
          "@screen xl": {
            // maxWidth: "1280px",
            // maxWidth: "1440px",
            maxWidth: "100%",
          },
          "@screen 2xl": {
            maxWidth: "1536px",
          },
        },
      });
    },
  ],
};
export default config;
