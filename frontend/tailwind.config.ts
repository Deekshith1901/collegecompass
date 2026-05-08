import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#FAF9F6", // Primary: Soft Beige
          100: "#F4EEE2", // Soft Beige
          200: "#F5BB5B", // Accent: Warm Mango
          300: "#F38C38", // Accent: Sunny Yellow
          500: "#2C5C64", // Secondary: Vibrant Teal
          600: "#1F4F59", // Deeper Vibrant Teal
          700: "#173E46"  // Supporting Teal Shade
        }
      }
    }
  },
  plugins: []
};

export default config;
