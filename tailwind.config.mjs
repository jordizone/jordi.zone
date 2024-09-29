import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["InterVariable"], ...defaultTheme.fontFamily.sans,
				handwriting: ["Shantell Sans"],
			},
			colors: {
				gray: colors.stone,
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
