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
        background: "var(--background)",
        foreground: "var(--foreground)",
        mablefont: "var(--mablefont)",

      },
      fontFamily: {
        sacramento: ['var(--font-sacramento)'],
      },
      maxHeight: {
        pictureFrame: "41rem"
      },
      inset: {
        pictureFrame: "8.33333%"
      }
    },
  },
  plugins: [],
};
export default config;
