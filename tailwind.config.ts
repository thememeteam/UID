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
        primary: 'rgb(var(--text-primary) / <alpha-value>)',
        secondary: 'rgb(var(--text-secondary) / <alpha-value>)',
        background: 'rgb(var(--background-fill) / <alpha-value>)',
        card: {
          DEFAULT: 'rgb(var(--card-fill) / <alpha-value>)',
          stroke: 'rgb(var(--card-stroke) / <alpha-value>)'
        },
        element: {
          DEFAULT: 'rgb(var(--element-fill) / <alpha-value>)',
          stroke: 'rgb(var(--element-stroke) / <alpha-value>)'
        },
        accent: {
          DEFAULT: 'rgb(var(--accent-fill) / <alpha-value>)',
          light: 'rgb(var(--accent-light-fill) / <alpha-value>)'
        },
        divider: {
          stroke: 'rgb(var(--divider-stroke) / <alpha-value>)'
        }
      },
      fontSize: {
				caption: ['0.8rem', '1rem'],
				body: ['1rem', '1.62rem'],
				h3: ['1.15rem', { lineHeight: '1', fontWeight: 600 }],
				h2: ['1.42rem', { lineHeight: '1', fontWeight: 600 }],
				h1: ['2.28rem', { lineHeight: '1', fontWeight: 600 }],
			}
    },
  },
  plugins: [],
};
export default config;
