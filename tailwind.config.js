const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],

	theme: {
		extend: {
			colors: {
				'main-bg': '#1d1d1d',
			},
			fontFamily: {
				montserrat: ['var(--font-montserrat)', ...fontFamily.serif],
			},
		},
	},
	plugins: [],
}
