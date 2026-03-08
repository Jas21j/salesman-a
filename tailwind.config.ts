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
        navy: {
          DEFAULT: "#1f2a44",
          light: "#2a3a5c",
          deep: "#141d30",
          900: "#0d1321",
        },
        sand: {
          DEFAULT: "#d6b48c",
          light: "#e8d4b8",
          dark: "#b8956a",
          50: "#faf6f0",
        },
        offwhite: "#F7F4EF",
        slate: {
          DEFAULT: "#64748b",
          light: "#E5E7EB",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["Satoshi", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 6vw, 5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 4vw, 3.75rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.15" }],
        "display-sm": ["clamp(1.25rem, 2vw, 1.75rem)", { lineHeight: "1.2" }],
        eyebrow: ["0.75rem", { lineHeight: "1", letterSpacing: "0.15em", fontWeight: "500" }],
      },
      spacing: {
        section: "clamp(4rem, 10vw, 8rem)",
      },
      backdropBlur: {
        nav: "20px",
      },
      boxShadow: {
        glass: "0 4px 30px rgba(0, 0, 0, 0.06)",
        "glass-hover": "0 12px 40px rgba(0, 0, 0, 0.08)",
        card: "0 1px 3px rgba(31, 42, 68, 0.04)",
        "card-hover": "0 12px 40px rgba(31, 42, 68, 0.08), 0 0 0 1px rgba(31, 42, 68, 0.03)",
        "card-elevated": "0 4px 24px rgba(31, 42, 68, 0.06), 0 0 0 1px rgba(31, 42, 68, 0.04)",
        premium: "0 25px 50px -12px rgba(31, 42, 68, 0.08)",
        "premium-lg": "0 32px 64px -12px rgba(31, 42, 68, 0.12)",
        nav: "0 4px 30px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.02)",
      },
      borderRadius: {
        "card": "1rem",
        "card-lg": "1.25rem",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "count-up": "countUp 2s ease-out forwards",
        "slide-in-left": "slideInLeft 0.4s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        countUp: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
