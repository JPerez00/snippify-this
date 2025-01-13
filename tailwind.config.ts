import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'text-slide-4': 'text-slide-4 10s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      },
      keyframes: {
        'text-slide-4': {
          '0%, 20%': {
              transform: 'translateY(0%)',
          },
          '25%, 45%': {
              transform: 'translateY(-20%)',
          },
          '50%, 70%': {
              transform: 'translateY(-40%)',
          },
          '75%, 95%': {
              transform: 'translateY(-60%)',
          },                            
          '100%': {
              transform: 'translateY(-80%)',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
