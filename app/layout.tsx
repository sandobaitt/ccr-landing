import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BrandLoader } from "@/components/BrandLoader";
import { ScheduleTicker } from "@/components/ScheduleTicker";
import Image from "next/image";

import { Analytics } from "@vercel/analytics/react";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crecer con Cristo Redentor | Parroquia Asunción",
  description: "Movimiento juvenil católico de la Parroquia Nuestra Señora de la Asunción, Resistencia, Chaco. Sumate a vivir la fe, hacer amigos y ayudar a los demás.",
  openGraph: {
    title: "Crecer con Cristo Redentor",
    description: "Movimiento juvenil de la Parroquia Asunción. ¡Sumate a vivir la fe, hacer amigos y ayudar a los demás!",
    siteName: "Crecer con Cristo Redentor",
    images: [
      {
        url: "/Gemini_Generated_Image_fyu530fyu530fyu5.png", // Fallback to logo for now
        width: 800,
        height: 800,
        alt: "Logo Crecer con Cristo Redentor",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
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
            <div className="relative w-[300vw] max-w-none h-[300vw] sm:h-[1200px] md:h-[1200px] opacity-15 mix-blend-multiply">
              <Image
                src="/Gemini_Generated_Image_fyu530fyu530fyu5.png"
                alt="Fondo fijo"
                fill
                sizes="100vw"
                className="object-contain object-center"
              />
            </div>
          </div>
          <ScheduleTicker />
          <Navbar />
          <main className="flex-1 flex flex-col overflow-x-hidden">{children}</main>
          <Footer />
        </BrandLoader>
        <Analytics />
      </body>
    </html>
  );
}
