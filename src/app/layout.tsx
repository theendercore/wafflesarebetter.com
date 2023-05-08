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
    <html lang="en">
      <ClerkProvider>
        <body className="flex min-h-screen flex-col">
          <Header />
          <div className="min-h-[84vh] flex-grow  bg-gray-200">
            <main className="container m-auto min-h-[84vh]">{children}</main>
          </div>
          <Footer className="flex-end" />
        </body>
      </ClerkProvider>
    </html>
  );
}
