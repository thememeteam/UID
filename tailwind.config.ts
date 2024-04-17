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
        'primary': 'var(--text-primary)',
        'secondary': 'var(--text-secondary)',
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
      },
      fontSize: {
				caption: ['0.8rem', '1rem'],
				body: ['1rem', '1.62rem'],
				h3: ['1.15rem', { lineHeight: '1.75rem', fontWeight: 600 }],
				h2: ['1.42rem', { lineHeight: '2rem', fontWeight: 600 }],
				h1: ['2.28rem', { lineHeight: '3.2rem', fontWeight: 600 }],
			}
    },
  },
  plugins: [],
};
export default config;
