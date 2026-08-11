import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "@/app/globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BrandLoader } from "@/components/BrandLoader";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ScheduleTicker } from "@/components/ScheduleTicker";
import Image from "next/image";
import Script from "next/script";

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
  metadataBase: new URL("https://ccr-landing.vercel.app"),
  title: {
    default: "Crecer con Cristo Redentor | Comunidad Juvenil",
    template: "%s | CCR",
  },
  description: "Comunidad juvenil católica de la Parroquia Nuestra Señora de la Asunción en Resistencia, Chaco. Sumate a vivir la fe, hacer amigos y ayudar a los demás a través del retiro Crecer, comunidades de perseverancia y Acción Social.",
  keywords: ["CCR", "Crecer con Cristo Redentor", "Juventud Católica", "Resistencia Chaco", "Retiro espiritual", "Comunidad juvenil", "Acción Social"],
  authors: [{ name: "Comunidad CCR" }],
  creator: "Comunidad CCR",
  publisher: "Comunidad CCR",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "CCR",
  },
  icons: {
    icon: [
      { url: '/favicon-light.png', media: '(prefers-color-scheme: light)' },
      { url: '/favicon-dark.png', media: '(prefers-color-scheme: dark)' },
    ],
    apple: '/og-small.png',
  },
  openGraph: {
    title: "Crecer con Cristo Redentor",
    description: "Movimiento juvenil. ¡Sumate a vivir en comunidad!",
    url: "https://ccr-landing.vercel.app",
    siteName: "Crecer con Cristo Redentor",
    images: [
      {
        url: "/og-small.png",
        width: 800,
        height: 800,
        alt: "Logo Crecer con Cristo Redentor",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crecer con Cristo Redentor",
    description: "Movimiento juvenil en Resistencia. ¡Sumate a vivir en comunidad!",
    images: ["/og-small.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { RoamingChrist } from "@/components/RoamingChrist";
import { client } from '@/sanity/lib/client';
import { socialLinksQuery, scheduleQuery } from '@/sanity/lib/queries';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sanitySocialLinks = await client.fetch(socialLinksQuery);
  const sanitySchedule = await client.fetch(scheduleQuery);

  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Previene que Samsung Internet y otros navegadores fuercen su propio modo oscuro */}
        <meta name="color-scheme" content="light dark" />
        <meta name="supported-color-schemes" content="light dark" />
        {/* Forzar scroll al inicio en cada carga/recarga */}
        <Script id="scroll-restoration" strategy="beforeInteractive">
          {`if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; }
          window.scrollTo(0, 0);`}
        </Script>
      </head>
      <body className={`${dmSans.variable} ${outfit.variable} antialiased min-h-screen bg-ccr-primary text-ccr-foreground flex flex-col font-sans transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <BrandLoader>
          {/* Fondo Fijo Global - Tipo Marca de Agua Centrada (Modo Claro) */}
          <div className="fixed inset-0 z-[-1] w-full h-[100dvh] pointer-events-none flex items-center justify-center dark:opacity-0 transition-opacity duration-500">
            <div className="relative w-[300vw] max-w-none h-[300vw] sm:h-[1200px] md:h-[1200px] opacity-15">
              <Image
                src="/Gemini_Generated_Image_fyu530fyu530fyu5.png"
                alt="Fondo fijo claro"
                fill
                sizes="100vw"
                priority
                className="object-contain object-center"
              />
            </div>
          </div>

          {/* Fondo Fijo Global - Tipo Marca de Agua Centrada (Modo Oscuro) */}
          <div className="fixed inset-0 z-[-1] w-full h-[100dvh] pointer-events-none flex items-center justify-center opacity-0 dark:opacity-100 transition-opacity duration-500">
            <div className="relative w-[300vw] max-w-none h-[300vw] sm:h-[1200px] md:h-[1200px] opacity-10">
              <Image
                src="/bg-dark.jpg"
                alt="Fondo fijo oscuro"
                fill
                sizes="100vw"
                priority
                className="object-contain object-center mix-blend-screen"
              />
            </div>
          </div>
          <ScheduleTicker scheduleItems={sanitySchedule} />
          <Navbar />
          <main className="flex-1 flex flex-col overflow-x-hidden">{children}</main>
          <Footer settings={{ socialLinks: sanitySocialLinks }} />
          <RoamingChrist />
        </BrandLoader>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
