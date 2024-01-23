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
      colors:{
        "primaryColor": "#7B68EE",
        "secondaryColor": "#FCA311",
        "tertiaryColor": "#68c4f6",
        "primaryLight": "#D8BFFF",
        "secondaryLight": "#FFD699",
        "tertiaryLight": "#EFF5FD", 
      },
      screens:{
        "xs": "320px",
        "sm": "375px",
        "sml": "500px",
        "md": "667px",
        "mdl": "768px",
        "lg": "960px",
        "lgl": "1024px",
        "xl": "1280px",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
export default config;
