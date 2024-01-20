import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          buttonBackground: "#fff",
          buttonTextColor: "#1155b1",
        },
        secondary:{

        },
      },
    },
  },
  plugins: [],
});

export default config;
