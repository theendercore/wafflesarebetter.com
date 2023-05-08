import "@/styles/global.css";

export const metadata = {
  title: "WafflesSMP",
  description: "WafflesSMP Home Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
