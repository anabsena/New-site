import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import TopBanner from "@/components/top-banner";
import Navbar from "@/components/nav-bar";

export const metadata: Metadata = {
  title: "Hello",
  description: "Hello site",
};
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sans", 
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={poppins.variable}>
    <body>
      <header>
        <TopBanner />
        <Navbar />
      </header>
      <main>{children}</main>
    </body>
  </html>
  );
}
