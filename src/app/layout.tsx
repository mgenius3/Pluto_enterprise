import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway_init = Raleway({
  subsets: ['latin'],
  weight: ['100', '300', '700'],
  variable: '--font-raleway'
})


export const metadata: Metadata = {
  title: "Pluto Enterprise, LLC",
  description: "Logistiscs with Pluto Enterprise, LLC",
  icons: {
    icon: "/logo.svg", // Adjust the path if necessary
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway_init.variable}>
        {children}
      </body>
    </html>
  );
}
