import colors, { black, orange } from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				sans: ["InterVariable"],
				...defaultTheme.fontFamily.sans,
				handwriting: ["Shantell Sans"],
			},
			colors: {
				gray: colors.stone,
				brand: {
					orange: "#EC4F27",
					white: "#DCDDD2",
					black: "#21201D"
				},
			},
			backgroundImage: {
				"grainy-noise":
					"url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20600%20600%22%3E%3Cfilter%20id%3D%22a%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%22.65%22%20numOctaves%3D%223%22%20stitchTiles%3D%22stitch%22/%3E%3C/filter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23a)%22/%3E%3C/svg%3E')",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
