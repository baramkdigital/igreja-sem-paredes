import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#601b1a", // Bordô
          foreground: "#f8f8f8", // Branco
        },
        secondary: {
          DEFAULT: "#d4a017", // Mostarda
          foreground: "#3a3a3a", // Cinza
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#3a3a3a", // Cinza
          foreground: "#f8f8f8", // Branco
        },
        accent: {
          DEFAULT: "#d4a017", // Mostarda
          foreground: "#3a3a3a", // Cinza
        },
        popover: {
          DEFAULT: "#f8f8f8", // Branco
          foreground: "#3a3a3a", // Cinza
        },
        card: {
          DEFAULT: "#f8f8f8", // Branco
          foreground: "#3a3a3a", // Cinza
        },
        // Cores personalizadas
        bordo: "#601b1a",
        mostarda: "#d4a017",
        cinza: "#3a3a3a",
        branco: "#f8f8f8",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
