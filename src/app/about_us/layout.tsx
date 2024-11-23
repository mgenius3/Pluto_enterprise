import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Footer from "../components/footer";
import Header from "../components/header";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "About Pluto Enterprise",
  description: "Logistiscs with pluto enterprise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header active_no={1} />
        {children}
        <Footer />
      </body>
    </html>
  );
}