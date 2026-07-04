import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BrandLoader } from "@/components/BrandLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CCR Landing - Parroquia Asunción",
  description: "Movimiento Crecer con Cristo Redentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white text-black flex flex-col`}>
        <BrandLoader>
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </BrandLoader>
      </body>
    </html>
  );
}
