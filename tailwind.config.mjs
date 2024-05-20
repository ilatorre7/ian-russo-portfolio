/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'main': '#2b92c3',
				'text': '#212121',
				'background': '#f7f1f1',
			}
		},
	},
	plugins: [],
}
