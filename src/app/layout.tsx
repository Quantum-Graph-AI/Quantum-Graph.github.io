import type { Metadata } from "next";
import "./globals.css";
import "../styles/scroll-navigation.css";

export const metadata: Metadata = {
  title: "QuantumGraph AI - Consultoria e Desenvolvimento em Inteligência Artificial",
  description: "QuantumGraph AI oferece consultoria especializada em IA, desenvolvimento de sistemas agênticos e soluções em computação quântica. Fundada por Davi Castro Samora, especialista com 10+ anos de experiência.",
  keywords: "consultoria inteligência artificial, sistemas agênticos, machine learning, computação quântica, ciência de dados, LangGraph, RAG, chatbots, automação, Davi Castro Samora",
  authors: [{ name: "Davi Castro Samora" }],
  creator: "QuantumGraph AI",
  publisher: "QuantumGraph AI",
  openGraph: {
    title: "QuantumGraph AI - Consultoria e Desenvolvimento em Inteligência Artificial",
    description: "Consultoria especializada em IA, sistemas agênticos e computação quântica. Transformando ideias em soluções inteligentes.",
    type: "website",
    locale: "pt_BR",
    siteName: "QuantumGraph AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuantumGraph AI - Consultoria em Inteligência Artificial",
    description: "Consultoria especializada em IA, sistemas agênticos e computação quântica.",
    creator: "@quantumgraph",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head></head>
      <body suppressHydrationWarning className="antialiased bg-black">
        {children}
      </body>
    </html>
  );
}
