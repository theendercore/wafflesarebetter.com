import { Alata, Inter } from "next/font/google";

// define your variable fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const alata = Alata({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alata",
});

export { inter, alata };
