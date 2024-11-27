import type { Metadata } from "next";
import "../globals.css";
import Footer from "../components/footer";
import Header from "../components/header";


export const metadata: Metadata = {
  title: "About Pluto Enterprise, LLC",
  description: "Logistiscs with Pluto Enterprise, LLC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
        <Header active_no={1} />
        {children}
        <Footer />
        </>
    
  );
}