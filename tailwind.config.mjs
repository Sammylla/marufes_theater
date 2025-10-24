import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"fot-tsukuardgothic-std"', ...defaultTheme.fontFamily.sans],
				futura: ['"futura-100"', 'sans-serif'],
				'futura-book': ['"futura-100-book"', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
