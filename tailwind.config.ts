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
        background: "#FFFFFF",
        "background-subtle": "#F8FAFC",
        foreground: "#090D16",
        brand: {
          DEFAULT: "#059669",
          hover: "#047857",
          light: "#ECFDF5",
          dark: "#064E3B",
          accent: "#00E599",
        },
        star: "#F59E0B",
        border: "#E2E8F0",
        surface: {
          DEFAULT: "#FFFFFF",
          dark: "#090D16",
          card: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(5, 150, 105, 0.25)",
        "glow-lg": "0 0 40px -10px rgba(0, 229, 153, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
