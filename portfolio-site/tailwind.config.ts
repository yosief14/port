import * as tailwindcssAnimate from 'tailwindcss-animate'
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%,': { transform: 'translateY(0)', },
          '50%': { transform: 'translateY(-20px)', },
          '100%': { transform: 'translateY(0)', },
        },
        scroll: {
          '0%': { transform: 'translateY(0)' },
          '75%': { opacity: '1', },
          '100%': { transform: 'translateY(-200%)', opacity: '0', },

        },

      },
      animation: {
        float: 'float 2s ease-in-out infinite',
        scroll: 'scroll 2s linear infinite',
      },
      fontFamily: {
        pixel: ['var(--font-pixel)']
      }
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus', 'group-hover'],
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;
