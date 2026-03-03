import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F19",
        electric: "#2563eb",
        gold: "#d4af37"
      }
    }
  },
  plugins: []
};

export default config;
