import theme from "tailwindcss/defaultTheme";

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          light: "hsl(var(--primary-light))",
          dark: "hsl(var(--primary-dark))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          light: "hsl(var(--secondary-light))",
          dark: "hsl(var(--secondary-dark))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          light: "hsl(var(--accent-light))",
          dark: "hsl(var(--accent-dark))",
          contrast: "hsl(var(--accent-contrast))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          light: "hsl(var(--muted-light))",
          dark: "hsl(var(--muted-dark))",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...theme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

export default config;
