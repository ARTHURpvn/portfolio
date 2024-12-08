import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { LangProvider } from "./context/LangContext";
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
  title: "Arthur PVN - Desenvolvedor Front-End | Portfólio Profissional",
  description:
    "Portfólio de Arthur PVN, desenvolvedor front-end especializado em criar experiências digitais modernas e intuitivas. Descubra meus projetos e habilidades técnicas.",
  keywords: [
    "portfólio desenvolvedor",
    "front-end",
    "react developer",
    "desenvolvedor web",
    "UI/UX design",
    "JavaScript",
    "arthurpvn",
    "TypeScript",
  ],
  verification: {
    google: "K8C9CMr7n5ryw_QC9VUWoy-FWkEv03uCm8r4FOrUnlA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LangProvider>
      <html lang="pt-br">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
          <Analytics />
        </body>
      </html>
    </LangProvider>
  );
}
