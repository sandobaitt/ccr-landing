import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BrandLoader } from "@/components/BrandLoader";
import Image from "next/image";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
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
      <body className={`${dmSans.variable} ${outfit.variable} antialiased min-h-screen bg-ccr-primary text-ccr-foreground flex flex-col font-sans`}>
        <BrandLoader>
          {/* Fondo Fijo Global - Tipo Marca de Agua Centrada */}
          <div className="fixed inset-0 z-[-1] w-full h-full pointer-events-none flex items-center justify-center">
            <div className="relative w-[100vw] max-w-6xl h-[100vw] sm:h-[800px] md:h-[1000px] opacity-15 mix-blend-multiply">
              <Image
                src="/Gemini_Generated_Image_fyu530fyu530fyu5.png"
                alt="Fondo fijo"
                fill
                sizes="100vw"
                className="object-contain object-center"
              />
            </div>
          </div>
          <Navbar />
          <main className="flex-1 flex flex-col overflow-x-hidden">{children}</main>
          <Footer />
        </BrandLoader>
      </body>
    </html>
  );
}
