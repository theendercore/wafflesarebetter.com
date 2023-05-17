import "@/styles/global.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { alata, inter } from "@/styles/fonts";

export const metadata = {
  title: "WafflesAreBetter",
  description: "Home Page of the WafflesAreBetter Corp© website.",
  openGraph: {
    title: "WafflesAreBetter",
    description: "Home Page of the WafflesAreBetter Corp© website.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${alata.variable}`}>
      {/* <ClerkProvider> */}
      <body className="layout min-h-screen">
        <Header className="h-max font-alata" />
        <main className="text-white">
          {children}
        </main>
        <Footer className="h-max font-alata" />
      </body>
      {/* </ClerkProvider> */}
    </html>
  );
}
