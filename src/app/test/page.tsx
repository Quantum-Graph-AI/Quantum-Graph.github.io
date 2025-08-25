'use client';

import { motion } from 'framer-motion';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white flex items-center justify-center">
      <div className="text-center max-w-2xl px-6">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6"
        >
          QuantumGraph
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-300 mb-8"
        >
          🚀 Site funcionando! Versão 3D carregando...
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="space-y-4"
        >
          <p className="text-lg text-cyan-400">✅ Next.js funcionando</p>
          <p className="text-lg text-purple-400">✅ Tailwind CSS funcionando</p>
          <p className="text-lg text-pink-400">✅ Framer Motion funcionando</p>
          <p className="text-lg text-yellow-400">⏳ Three.js 3D em desenvolvimento</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-8 p-6 bg-gray-800/50 rounded-2xl border border-cyan-500/30"
        >
          <h3 className="text-xl font-bold text-cyan-400 mb-4">Diagnóstico do Site</h3>
          <div className="text-left space-y-2 text-sm">
            <p>🔍 Se você está vendo esta página, o deploy básico funcionou!</p>
            <p>🎯 O problema anterior era com as dependências Three.js</p>
            <p>⚙️ Implementando fallback para garantir funcionamento</p>
            <p>🌟 Versão 3D será ativada após testes</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
