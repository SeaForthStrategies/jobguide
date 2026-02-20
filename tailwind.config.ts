import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        body: ["var(--font-body)", "sans-serif"],
      },
      colors: {
        bg: "#0a0a0f",
        surface: "#13131c",
        surface2: "#1c1c2a",
        border: "#2a2a3d",
        accent: "#e8ff4a",
        accent2: "#ff6b6b",
        accent3: "#4af7d4",
        muted: "#6b6b8a",
      },
      animation: {
        "pulse-dot": "pulse-dot 2s ease infinite",
        "fade-up": "fade-up 0.3s ease",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.8)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
