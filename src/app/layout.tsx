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
  title: "QuantumGraph - Universo de Soluções em IA",
  description: "Navegue pelo universo interativo de grafos 3D da QuantumGraph. Especialistas em Inteligência Artificial, Machine Learning, Sistemas Agênticos e Computação Quântica.",
  keywords: "inteligência artificial, machine learning, sistemas agênticos, computação quântica, ciência de dados, LangGraph, RAG, chatbots, automação",
  authors: [{ name: "Davi Castro Samora" }],
  creator: "QuantumGraph",
  publisher: "QuantumGraph",
  openGraph: {
    title: "QuantumGraph - Universo de Soluções em IA",
    description: "Explore o universo interativo de grafos 3D da QuantumGraph. Sistemas agênticos, Machine Learning e soluções avançadas em IA.",
    type: "website",
    locale: "pt_BR",
    siteName: "QuantumGraph",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuantumGraph - Universo de Soluções em IA",
    description: "Explore o universo interativo de grafos 3D da QuantumGraph. Sistemas agênticos, Machine Learning e soluções avançadas em IA.",
    creator: "@quantumgraph",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head></head>
      <body suppressHydrationWarning className="antialiased bg-black overflow-hidden">
        {children}
      </body>
    </html>
  );
}
