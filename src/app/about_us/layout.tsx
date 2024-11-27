import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";
import "../globals.css";
import Footer from "../components/footer";
import Header from "../components/header";

const raleway_init = Raleway({
  subsets: ['latin'],
  weight: ['100', '300', '700'],
  variable: '--font-raleway'
})

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