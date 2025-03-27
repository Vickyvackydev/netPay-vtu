import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        default: "#FEA912",
        customGray: "#7D7D7D",
        defaultBlack: "#4B5563",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        custom: " 0px 0px 0px 4px #E1E1FEB2",
        blur: " 0px 20px 27px 0px #0000000D",
        box: "0px 1px 2px 0px #1018280A",
        moderate: "0px 1px 2px 0px #1018280A",
      },
    },
  },
  plugins: [],
} satisfies Config;
