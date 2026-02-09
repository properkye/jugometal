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
    default: "Jugometal – Traktori i Poljoprivredne Mašine",
    template: "%s - Jugometal Svilajnac",
  },
  description:
    "Jugometal Svilajnac – prodaja traktora, poljoprivrednih mašina, rezervnih delova i opreme za poljoprivredu širom Srbije. Pouzdan partner za savremenu mehanizaciju. Prodajemo Solis traktore i IMT traktore. Takodje saradjujemo i sa YTO traktorima.",
  keywords: [
    "Traktori",
    "Poljoprivredne Mašine",
    "Rezervni Delovi Za Traktore",
    "Poljoprivredna Oprema",
    "Traktori Srbija",
    "IMT Traktori",
    "YTO Traktori",
    "Belarus Traktori",
    "Solis Traktori",
    "John Deere Srbija",
  ],
  metadataBase: new URL('https://jugometal.co.rs/'),
  openGraph: {
    type: "website",
    locale: "sr-RS",
    url: 'https://jugometal.co.rs/',
    title: "Jugometal – Traktori i Poljoprivredne Mašine",
    description:
      "Jugometal Svilajnac – prodaja traktora, poljoprivrednih mašina, rezervnih delova i opreme za poljoprivredu širom Srbije. Pouzdan partner za savremenu mehanizaciju. Prodajemo Solis traktore i IMT traktore. Takodje saradjujemo i sa YTO traktorima.",
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
    title: "Jugometal – Traktori i Poljoprivredne Mašine",
    description:
      "Jugometal Svilajnac – prodaja traktora, poljoprivrednih mašina, rezervnih delova i opreme za poljoprivredu širom Srbije. Pouzdan partner za savremenu mehanizaciju. Prodajemo Solis traktore i IMT traktore. Takodje saradjujemo i sa YTO traktorima.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  // other:{
  //   'google-site-verification':'xPtQ_7mfT8JYWtTlWS2fPFndqexNXJf9QXBqfGgtknI'
  // }
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
