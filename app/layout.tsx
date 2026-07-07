import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BrandLoader } from "@/components/BrandLoader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
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
      <body className={`${inter.variable} ${playfair.variable} antialiased min-h-screen bg-zinc-950 text-zinc-50 flex flex-col font-sans`}>
        <BrandLoader>
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </BrandLoader>
      </body>
    </html>
  );
}
