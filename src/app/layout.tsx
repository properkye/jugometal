import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/cartContext";
import { AuthProvider } from "@/context/authContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "Jugometal – IMT, Solis, John Deere, YTO, Mahindra Traktori i Rezervni Delovi",
    template: "%s - Jugometal Svilajnac",
  },
  description:
    "Jugometal Svilajnac – prodaja traktora (IMT, Solis, John Deere, YTO, Mahindra, Carraro, Belarus), rezervnih delova za traktore, poljoprivrednih mašina i opreme širom Srbije. Rezervni delovi za traktor uvek dostupni. Pouzdan partner za savremenu mehanizaciju.",
  keywords: [
    "Jugometal",
    "IMT",
    "Solis",
    "John Deere",
    "YTO",
    "Mahindra",
    "Carraro",
    "Belarus",
    "Rezervni delovi za traktor",
    "IMT Traktori",
    "Solis Traktori",
    "John Deere Srbija",
    "YTO Traktori",
    "Mahindra Traktori",
    "Carraro Traktori",
    "Belarus Traktori",
    "Traktori Srbija",
    "Poljoprivredne Mašine",
    "Rezervni Delovi Za Traktore",
    "Traktorski Delovi",
    "Poljoprivredna Oprema",
    "Jugometal Svilajnac",
  ],
  metadataBase: new URL('https://jugometal.co.rs/'),
  alternates: {
    canonical: 'https://jugometal.co.rs/'
  },
  openGraph: {
    type: "website",
    locale: "sr-RS",
    url: 'https://jugometal.co.rs/',
    title: "Jugometal – IMT, Solis, John Deere, YTO, Mahindra Traktori i Rezervni Delovi",
    description:
      "Jugometal Svilajnac – prodaja traktora (IMT, Solis, John Deere, YTO, Mahindra, Carraro, Belarus), rezervnih delova za traktore, poljoprivrednih mašina i opreme širom Srbije. Rezervni delovi za traktor uvek dostupni.",
    siteName: "Jugometal – Traktori i Poljoprivredne Mašine",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Jugometal – Traktori i Poljoprivredne Mašine",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jugometal – IMT, Solis, John Deere, YTO, Mahindra Traktori i Rezervni Delovi",
    description:
      "Jugometal Svilajnac – prodaja traktora (IMT, Solis, John Deere, YTO, Mahindra, Carraro, Belarus), rezervnih delova za traktore, poljoprivrednih mašina i opreme širom Srbije. Rezervni delovi za traktor uvek dostupni.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  // verification: {
  //   google: 'google-code-here', // Samo ako koristiš HTML tag metod
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <CartProvider>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            {children}
          </body>
        </CartProvider>
      </AuthProvider>
    </html>
  );
}
