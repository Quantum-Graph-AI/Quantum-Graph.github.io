'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/Graph3D/LoadingScreen';

// Importação dinâmica para evitar problemas de SSR com Three.js
const GraphUniverse = dynamic(() => import('@/components/Graph3D/GraphUniverse'), {
  ssr: false,
  loading: () => (
    <div className="h-screen w-full bg-gradient-to-br from-gray-900 via-black to-blue-900 flex items-center justify-center">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
          QuantumGraph
        </h2>
        <p className="text-gray-400">Inicializando universo 3D...</p>
      </div>
    </div>
  )
});

// Fallback component se Three.js falhar
function FallbackPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      {/* Header */}
      <header className="relative z-10 p-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4"
          >
            QuantumGraph
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Inteligência Artificial & Sistemas Agênticos
          </motion.p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sobre */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Sobre a QuantumGraph</h3>
            <p className="text-gray-300 leading-relaxed">
              Empresa especializada em IA e Sistemas Agênticos. Desenvolvemos soluções avançadas em Machine Learning, 
              automação e análise de dados para grandes empresas.
            </p>
          </motion.div>

          {/* Serviços */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30"
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Serviços</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Ciência de Dados Sênior</li>
              <li>• Sistemas Agênticos (LangGraph)</li>
              <li>• Machine Learning & IA</li>
              <li>• RAG Systems</li>
              <li>• Consultoria em IA</li>
            </ul>
          </motion.div>

          {/* Contato */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/30"
          >
            <h3 className="text-2xl font-bold text-pink-400 mb-4">Contato</h3>
            <div className="space-y-3">
              <a 
                href="https://www.linkedin.com/in/samoradc/" 
                target="_blank"
                className="block text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                LinkedIn: Davi Castro Samora
              </a>
              <a 
                href="https://github.com/SamoraDC" 
                target="_blank"
                className="block text-purple-400 hover:text-purple-300 transition-colors"
              >
                GitHub: SamoraDC
              </a>
              <a 
                href="https://medium.com/@samora.davi" 
                target="_blank"
                className="block text-pink-400 hover:text-pink-300 transition-colors"
              >
                Medium: samora.davi
              </a>
            </div>
          </motion.div>
        </div>

        {/* Note about 3D version */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400">
            💡 Versão 3D interativa disponível para navegadores compatíveis
          </p>
        </motion.div>
      </main>
    </div>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showFallback, setShowFallback] = useState(true); // Iniciar com fallback por enquanto

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          setTimeout(() => setLoading(false), 500);
          clearInterval(timer);
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // Por enquanto, sempre mostrar fallback até 3D estar estável
  if (showFallback || true) {
    return <FallbackPage />;
  }

  return (
    <main className="min-h-screen overflow-hidden">
      {loading && <LoadingScreen progress={progress} />}
      <GraphUniverse />
    </main>
  );
}
  