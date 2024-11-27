import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Login - Pluto Enterprise, LLC",
  description: "Login - Logistiscs with Pluto Enterprise, LLC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
