import type { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';

export const metadata: Metadata = {
  title: 'QuantumGraph - Inteligência Artificial Quântica',
  description: 'Transformamos dados em insights poderosos através de tecnologias quânticas avançadas e inteligência artificial de última geração.',
  keywords: 'IA, Inteligência Artificial, Machine Learning, Quantum Computing, Consultoria IA, Desenvolvimento AI',
  authors: [{ name: 'Davi Castro Samora', url: 'https://linkedin.com/in/samoradc' }],
  creator: 'QuantumGraph',
  publisher: 'QuantumGraph',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://quantumgraph.ai',
    title: 'QuantumGraph - Inteligência Artificial Quântica',
    description: 'Transformamos dados em insights poderosos através de tecnologias quânticas avançadas e inteligência artificial de última geração.',
    siteName: 'QuantumGraph',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'QuantumGraph - AI e Quantum Computing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QuantumGraph - Inteligência Artificial Quântica',
    description: 'Transformamos dados em insights poderosos através de tecnologias quânticas avançadas e inteligência artificial de última geração.',
    creator: '@quantumgraph',
    images: ['/og-image.jpg'],
  },
};

export default function CorporateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}