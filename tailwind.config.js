/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        kindo: {
          navy: {
            50: "#f4f6f9",
            100: "#e5eaf2",
            200: "#ccd6e4",
            300: "#a9bad2",
            400: "#7b96bc",
            500: "#4f72a3",
            600: "#2a436a",
            DEFAULT: "#1e3252", // Calmer, sophisticated deep slate navy
            700: "#1e3252",
            800: "#15243c",
            900: "#0c1728",
          },
          green: {
            50: "#f3f8f5",
            100: "#e3f0e9",
            200: "#c7e0d3",
            300: "#9ec7b3",
            400: "#6aa58a",
            DEFAULT: "#387f5d", // Calmer botanical sage/forest
            500: "#387f5d",
            600: "#2b674b",
            700: "#22513c",
            800: "#1b3f2f",
          },
          coral: {
            50: "#fdf7f4",
            100: "#faede6",
            200: "#f4d9cc",
            300: "#ecbda8",
            400: "#df9779",
            DEFAULT: "#cb5f38", // Calmer warm terracotta/coral (refined, not neon)
            500: "#cb5f38",
            600: "#b14c28",
            700: "#8e3b1e",
            800: "#713019",
          },
          yellow: {
            50: "#fdfaf3",
            100: "#faf2e3",
            200: "#f4e3c2",
            300: "#eccf99",
            400: "#deb368",
            DEFAULT: "#c6923b", // Calmer warm ochre/honey
            500: "#c6923b",
            600: "#a6752a",
            700: "#835920",
          },
          sky: {
            50: "#f3f7fa",
            100: "#e4edf4",
            200: "#c9dbe7",
            300: "#9fc0d4",
            400: "#6a9ebd",
            DEFAULT: "#4a7f9e", // Calmer muted slate sky
            500: "#4a7f9e",
            600: "#386580",
          },
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
