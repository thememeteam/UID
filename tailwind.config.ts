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
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        background: 'var(--background-fill)',
        card: {
          DEFAULT: 'var(--card-fill)',
          stroke: 'var(--card-stroke)'
        },
        element: {
          DEFAULT: 'var(--element-fill)',
          stroke: 'var(--element-stroke)'
        },
        accent: {
          DEFAULT: 'var(--accent-fill)',
          light: 'var(--accent-light-fill)'
        },
        divider: {
          stroke: 'var(--divider-stroke)'
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
