import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#090D16",
        "background-subtle": "#0F1624",
        foreground: "#F8FAFC",
        dark: {
          950: "#060910",
          900: "#090D16",
          850: "#0D1320",
          800: "#131B2E",
          700: "#1E293B",
          600: "#334155",
        },
        brand: {
          DEFAULT: "#00F59B",
          hover: "#00DC8A",
          dark: "#059669",
          deep: "#064E3B",
          glow: "rgba(0, 245, 155, 0.2)",
        },
        star: "#F59E0B",
        border: "#1E293B",
      },
      fontFamily: {
        sans: [
          "'Plus Jakarta Sans'",
          "var(--font-plus-jakarta)",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
      },
      boxShadow: {
        glow: "0 0 35px -5px rgba(0, 245, 155, 0.25)",
        "glow-sm": "0 0 20px -3px rgba(0, 245, 155, 0.2)",
        "glow-amber": "0 0 30px -5px rgba(245, 158, 11, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
