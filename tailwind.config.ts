import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ccr: {
          primary: "#fff9f2", // Warm pastel base
          secondary: "#fef08a", // Joyful yellow
          accent: "#ef4444", // Vibrant red
          foreground: "#1f2937", // text-gray-800 for better contrast on light
          pastel: {
            mint: "#d1fae5", // emerald-100
            peach: "#ffedd5", // orange-100
            lavender: "#e0e7ff", // indigo-100
            rose: "#ffe4e6", // rose-100
            blue: "#dbeafe", // blue-100
          }
        }
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'sans-serif'],
        display: ['var(--font-outfit)', 'sans-serif'],
        serif: ['var(--font-outfit)', 'serif'], // Fallback for components using font-serif
      },
      animation: {
        'gradient': 'gradient 4s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
