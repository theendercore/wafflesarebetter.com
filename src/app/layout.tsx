import { ClerkProvider } from "@clerk/nextjs";
import { Alata } from "next/font/google";
import "@/styles/global.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const alata = Alata({
  weight: "400",
  subsets: ["latin"],
  variable: "--alata-font",
});

export const metadata = {
  title: "WafflesAreBetter",
  description: "Home Page of the WafflesAreBetter Corp© website.",
  openGraph: {
    title: "WafflesAreBetter",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-slate-500">
      <ClerkProvider>
        <body className="flex min-h-screen flex-col">
          <Header className="font-alata" />
          <main className="container m-auto min-h-[82vh] flex-grow text-slate-300">
            {children}
          </main>
          <Footer className="flex-end" />
        </body>
      </ClerkProvider>
    </html>
  );
}
