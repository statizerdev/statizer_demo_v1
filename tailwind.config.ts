import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
    "./pages/**/*.{ts,tsx,js,jsx,mdx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-animate"), // 🔥 Ezt add hozzá
  ],
}

export default config
