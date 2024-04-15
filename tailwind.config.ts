import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'body': ['Inter', 'sans-serif'],
      'display': ['GROZEN MEDICAL DEMO', 'sans-serif']
    },
    extend: {
      colors: {
        'primary': 'var(--text-primary)',
        'background': 'var(--background-fill)',
        'card': {
          DEFAULT: 'var(--card-fill)',
          'stroke': 'var(--card-stroke)'
        },
        'element': {
          DEFAULT: 'var(--element-fill)',
          'stroke': 'var(--element-stroke)'
        },
        'accent': 'var(--accent-fill)',
        'divider': {
          'stroke': 'var(--divider-stroke)'
        }
      }
    },
  },
  plugins: [],
};
export default config;
