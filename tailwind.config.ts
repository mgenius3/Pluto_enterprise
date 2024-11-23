import type { Config } from "tailwindcss";

export default {
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
        primary: "#F5BD20",
        secondary: "#22153B",
        // accent: "#e3342f",
      },
    },
  },
  compilerOptions: {
    "typeRoots": ["node_modules/@types", "src/types"]
  },
  plugins: [],
} satisfies Config;
