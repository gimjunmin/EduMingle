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
				navSelectColor: "#364247", // navbar 호버링 색
				sub1: "#33568E",
				sub2: "#F9733A",
				sub3: "#34515B",
				point1: "#62D1C3", // 아이콘 색
				point2: "#01A490",
				gray1: "#F4F6F7",
				gray2: "#DEE3E6",
				gary3: "#BDC6CA",
				gray4: "#65767D",
				gray5: "#364247",
				gray6: "#242C2F",
			},
			fontFamily: {
				pretendard: ["Pretendard", "sans-serif"],
			},
		},
	},
	plugins: [],
};
export default config;
