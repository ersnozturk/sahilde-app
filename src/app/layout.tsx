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

export const metadata: Metadata = {
  title: "Sahile.in - Sahil Deneyimini Mükemmelleştir",
  description: "Sahile inerken aktivitene özel lezzetli paketlerle sahil keyfi doruğa çıkar! Spor, sohbet, çalışma için özel beslenme çözümleri.",
  keywords: "sahil, deniz, atıştırmalık, spor, beslenme, teslimat, sahile.in",
  authors: [{ name: "Sahile.in Ekibi" }],
  openGraph: {
    title: "Sahile.in - Sahil Deneyimini Mükemmelleştir",
    description: "Sahile inerken aktivitene özel lezzetli paketlerle sahil keyfi doruğa çıkar!",
    url: "https://sahile.in",
    siteName: "Sahile.in",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahile.in - Sahil Deneyimini Mükemmelleştir",
    description: "Sahile inerken aktivitene özel lezzetli paketlerle sahil keyfi doruğa çıkar!",
  },
  themeColor: "#FD8B51",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" style={{ colorScheme: 'light' }}>
      <head>
        <meta name="color-scheme" content="light" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="supported-color-schemes" content="light" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ colorScheme: 'light' }}
      >
        {children}
      </body>
    </html>
  );
}
