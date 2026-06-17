import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

// Since they use Typekit, we'll emulate the aesthetic with Inter or similar for now,
// or we can just load the typekit link in the layout.
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vantara Creamery - Real Milk. Real Stories.",
  description: "We make ice cream the way it used to be made.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/scu2jqh.css" />
      </head>
      <body className={`${inter.className} font-sans antialiased bg-vantara-bg text-vantara-text overflow-x-hidden`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
