import type { Metadata } from "next";
import { inter, pixelify } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yosief Gebremedhin",
  description: "An advocate of ai tooling and a full stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${pixelify.variable}`}>
      <body >{children}</body>
    </html>
  );
}
