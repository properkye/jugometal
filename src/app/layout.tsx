import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Jugometal Svilajnac",
//   description: "Jugometal traktori i poljoprivredne mašine",
// };

export const metadata: Metadata = {
  title: {
    default: "Jugometal – Traktori i Poljoprivredne Mašine",
    template: "%s - Jugometal Svilajnac",
  },
  description:
    "Jugometal Svilajnac – prodaja traktora, poljoprivrednih mašina, rezervnih delova i opreme za poljoprivredu širom Srbije. Pouzdan partner za savremenu mehanizaciju.",
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  openGraph: {
    type: "website",
    locale: "sr-RS",
    url: process.env.NEXT_PUBLIC_BASE_URL!,
    title: "Jugometal – Traktori i Poljoprivredne Mašine",
    description:
      "Jugometal Svilajnac – prodaja traktora, poljoprivrednih mašina, rezervnih delova i opreme za poljoprivredu širom Srbije. Pouzdan partner za savremenu mehanizaciju.",
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
      "Jugometal Svilajnac – prodaja traktora, poljoprivrednih mašina, rezervnih delova i opreme za poljoprivredu širom Srbije. Pouzdan partner za savremenu mehanizaciju.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
