import { type Config } from "tailwindcss";
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        alata: ["var(--alata-font)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
