import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1a1a1a",
        muted: "#2a2a2a",
        accent: "#c6b08e",
        "accent-light": "#d6c4a4",
        "accent-dark": "#927f60",
        sun: "#e0a84f",
        "sun-light": "#eabc6d",
        foreground: "#e8e0d8",
        light: "#ffffff",
        "light-muted": "#f5f2ee",
        ink: "#1f1d1a",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-cinzel)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
