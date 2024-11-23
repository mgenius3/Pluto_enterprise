import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";


const geistSans = localFont({
  src: "../fonts/Raleway-Italic-VariableFont_wght.ttf",
  variable: "--font-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/Raleway-VariableFont_wght.ttf",
  variable: "--font-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Login - Pluto Enterprise",
  description: "Login - Logistiscs with pluto enterprise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body> 
    </html>
  );
}