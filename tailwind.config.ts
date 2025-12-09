import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/lib/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom dark professional palette with warm earth tones
        'bg-dark': '#0D0D0D',
        'bg-dark-elevated': '#1A1A1A',
        'surface': '#252525',
        'surface-elevated': '#2D2D2D',
        'text-primary': '#F5F2ED',
        'text-secondary': '#C4B5A0',
        'text-muted': '#8B8478',
        'amber': {
          DEFAULT: '#D4A574',
          dark: '#B8906A',
          light: '#E5C09B',
        },
        'terracotta': {
          DEFAULT: '#C4725E',
          dark: '#A85F4D',
          light: '#D89180',
        },
        'sage': {
          DEFAULT: '#7A8B7A',
          dark: '#657566',
          light: '#95A795',
        },
      },
      fontFamily: {
        'serif': ['var(--font-playfair)', 'Georgia', 'serif'],
        'sans': ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        'mono': ['var(--font-jetbrains)', 'Consolas', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient-xy 15s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gradient-xy': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        dark: {
          "primary": "#D4A574",
          "secondary": "#C4725E",
          "accent": "#7A8B7A",
          "neutral": "#252525",
          "base-100": "#0D0D0D",
          "base-200": "#1A1A1A",
          "base-300": "#252525",
          "info": "#7A8B7A",
          "success": "#7A8B7A",
          "warning": "#D4A574",
          "error": "#C4725E",
        },
      },
    ],
  },
};

export default config;

