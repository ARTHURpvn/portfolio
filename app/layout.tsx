import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ARTHURpvn | Inicio",
  description: "Portfolio de um desenvolvedor front-end apaixonado por tecnologia.",
  keywords: ['portfolio', 'front-end', 'arthurpvn', 'typescript', 'react', 'nextjs'],
  verification: {
    google: "K8C9CMr7n5ryw_QC9VUWoy-FWkEv03uCm8r4FOrUnlA"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
