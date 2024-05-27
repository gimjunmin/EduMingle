import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				navBgColor: "#242C2F", // navbar 배경색
				navSelectColor: "#364247", // navbar 호버링 색
				iconColor: "#62D1C3", // 아이콘 색
			},
			fontFamily: {
				pretendard: ["Pretendard", "sans-serif"],
			},
		},
	},
	plugins: [],
};
export default config;
