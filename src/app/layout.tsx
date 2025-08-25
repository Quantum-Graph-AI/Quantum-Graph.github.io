import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QuantumGraph - Next-Generation Artificial Intelligence",
  description: "Transformamos dados em insights poderosos através de tecnologias quânticas avançadas e inteligência artificial de última geração.",
  keywords: "inteligência artificial, computação quântica, machine learning, IA, quantum computing, algoritmos quânticos",
  authors: [{ name: "Davi Castro Samora" }],
  creator: "QuantumGraph",
  publisher: "QuantumGraph",
  openGraph: {
    title: "QuantumGraph - Next-Generation Artificial Intelligence",
    description: "Transformamos dados em insights poderosos através de tecnologias quânticas avançadas e inteligência artificial de última geração.",
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
    siteName: "QuantumGraph",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuantumGraph - Next-Generation Artificial Intelligence",
    description: "Transformamos dados em insights poderosos através de tecnologias quânticas avançadas e inteligência artificial de última geração.",
    creator: "@quantumgraph",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head></head>
      <body suppressHydrationWarning className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
