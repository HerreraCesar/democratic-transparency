import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter Variable", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        custom: {
          red: "#e84d5b",
          blue: "#76a6f5",
          "light-blue": "#76a0e3",
          green: "#9fc9a8",
          white: "#f0f0f0",
          grey: "#3b3b3b",
          black: "#1a1a1a",
        },
      },
    },
  },
  plugins: [],
};
