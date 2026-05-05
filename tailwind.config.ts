import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        bg: {
          DEFAULT: "#0a0a0f",
          secondary: "#10101a",
          tertiary: "#16162a",
        },
        accent: {
          DEFAULT: "#6ee7f7",
          muted: "#3cc7dc",
          dim: "#1a3a40",
        },
        gold: {
          DEFAULT: "#f0c060",
          muted: "#c09040",
        },
        surface: "#1c1c2e",
        border: "#2a2a3e",
        text: {
          primary: "#e8e8f0",
          secondary: "#9090b0",
          muted: "#5a5a78",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.8s ease forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "scan-line": "scanLine 8s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(110,231,247,0.15)" },
          "50%": { boxShadow: "0 0 40px rgba(110,231,247,0.35)" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(110,231,247,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(110,231,247,0.04) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(110,231,247,0.15), transparent)",
        "card-glow":
          "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(110,231,247,0.08), transparent)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
    },
  },
  plugins: [],
};

export default config;
