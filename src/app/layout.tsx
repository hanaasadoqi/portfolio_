import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hanaa Sadoqi's Portfolio",
  description: "Full-stack Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`relative ${inter.className}`}>{children}</body>
    </html>
  );
}
