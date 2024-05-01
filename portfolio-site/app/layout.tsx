import type { Metadata } from "next";
import { inter, pixelify } from "./fonts";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

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
      <body >{children}

        <Toaster></Toaster>
      </body>
    </html>
  );
}
