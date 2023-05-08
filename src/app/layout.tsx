import { ClerkProvider } from "@clerk/nextjs";
import "@/styles/global.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

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
          <Header />
          <main className="min-h-[82vh]flex-grow container m-auto">
            {children}
          </main>
          <Footer className="flex-end" />
        </body>
      </ClerkProvider>
    </html>
  );
}
