'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';




// IMPLEMENTAÇÃO DIRETA DO UNIVERSO 3D NA PÁGINA PRINCIPAL
// Conforme documentação GitHub Pages - usar componente React Three Fiber

// Lazy load do componente 3D para evitar problemas de SSR
const GraphUniverse = dynamic(() => import('../components/Graph3D/GraphUniverse'), {
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

export default function Home() {
  return (
    <div className="h-screen w-full overflow-hidden">
      <GraphUniverse />
    </div>
  );
}
  