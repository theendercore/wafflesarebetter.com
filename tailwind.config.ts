import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        alata: [`var(--font-alata)`, ...fontFamily.sans],
        inter: [`var(--font-inter)`, ...fontFamily.mono],
      },
      colors: {
        header: "#8B623D",
        background: "#33260A",
        accent: "#DF7C2A",
        waffle: "#D0972B",
        footer: "#302E2B",
      },
      backgroundImage: {
        hero: "url('/bg-main.png')",
      },
    },
    
  },
  plugins: [],
} satisfies Config;
