import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#E53935",       // Logo red
          dark: "#1F2937",      // Text
          light: "#F9FAFB",     // Page background
          border: "#E5E7EB",    // Soft borders
        },
      },
    },
  },
  plugins: [],
};

export default config;
