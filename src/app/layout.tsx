import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-barlow-condensed",
});

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
      <body className={`${inter.className} ${barlowCondensed.variable} font-sans antialiased bg-vantara-bg text-vantara-text overflow-x-hidden`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
