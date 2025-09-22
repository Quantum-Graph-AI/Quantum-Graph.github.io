'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Home() {
  const [error, setError] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Check for WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setError('WebGL não suportado neste navegador');
      }
    } catch (e) {
      setError('Erro ao verificar WebGL: ' + (e as Error).message);
    }
  }, []);

  if (!isClient) {
    return (
      <div className="h-screen w-full bg-gradient-to-br from-gray-900 via-black to-blue-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">
            QuantumGraph
          </h1>
          <p className="text-gray-400">Carregando...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen w-full bg-gradient-to-br from-gray-900 via-black to-blue-900 flex items-center justify-center">
        <div className="text-center max-w-2xl px-4">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">
            QuantumGraph
          </h1>
          <p className="text-red-400 mb-4">Erro: {error}</p>
          <p className="text-gray-400">Por favor, tente recarregar a página ou usar um navegador moderno.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-full bg-gradient-to-br from-gray-900 via-black to-blue-900">
      <div className="container mx-auto px-4 py-16 h-full flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
            QuantumGraph
          </h1>
          <p className="text-2xl text-gray-300 mb-8">
            Universo de Soluções em Inteligência Artificial
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-400/20"
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-3">IA Avançada</h3>
              <p className="text-gray-400">Soluções de ponta em machine learning e redes neurais</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-400/20"
            >
              <h3 className="text-xl font-bold text-purple-400 mb-3">Análise de Dados</h3>
              <p className="text-gray-400">Transforme dados em insights acionáveis</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-400/20"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-3">Automação</h3>
              <p className="text-gray-400">Otimize processos com automação inteligente</p>
            </motion.div>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-full shadow-lg hover:shadow-cyan-500/25 transition-shadow"
          >
            Explorar Soluções
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}