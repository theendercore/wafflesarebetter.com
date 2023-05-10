import { ClerkProvider } from "@clerk/nextjs";
import "@/styles/global.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { alata, inter } from "@/styles/fonts";

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
    <html lang="en" className={`${inter.variable} ${alata.variable}`}>
      <ClerkProvider>
        <body className="flex min-h-screen flex-col">
          <Header className="flex-none font-alata" />
          <main className="flex-1 bg-hero bg-cover text-white">{children}</main>
          <Footer className="flex-none font-alata" />
        </body>
      </ClerkProvider>
    </html>
  );
}
