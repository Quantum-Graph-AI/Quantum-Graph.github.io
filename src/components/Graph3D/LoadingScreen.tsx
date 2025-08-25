'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  progress: number;
}

export default function LoadingScreen({ progress }: LoadingScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-blue-900 flex items-center justify-center z-50"
    >
      <div className="text-center max-w-md">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative mx-auto w-24 h-24 mb-6">
            {/* Central Node */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1] 
              }}
              transition={{ 
                rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full shadow-2xl"
            />
            
            {/* Orbiting Nodes */}
            {[0, 1, 2, 3, 4].map((index) => (
              <motion.div
                key={index}
                animate={{ 
                  rotate: 360,
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{ 
                  rotate: { 
                    duration: 3 + index * 0.5, 
                    repeat: Infinity, 
                    ease: "linear",
                    delay: index * 0.2
                  },
                  scale: { 
                    duration: 1.5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.3
                  }
                }}
                className="absolute w-3 h-3 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full shadow-lg"
                style={{
                  top: '50%',
                  left: '50%',
                  marginTop: '-6px',
                  marginLeft: '-6px',
                  transformOrigin: `${15 + index * 8}px 0px`,
                }}
              />
            ))}
          </div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2"
          >
            QuantumGraph
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-gray-400 text-lg"
          >
            Universo de Soluções em IA
          </motion.p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '100%', opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="w-full max-w-xs mx-auto mb-4"
        >
          <div className="bg-gray-800 rounded-full h-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-lg"
            />
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="space-y-2"
        >
          <p className="text-gray-300 text-sm">
            {progress < 20 && "Inicializando universo quântico..."}
            {progress >= 20 && progress < 40 && "Gerando grafos 3D..."}
            {progress >= 40 && progress < 60 && "Configurando nós interativos..."}
            {progress >= 60 && progress < 80 && "Carregando sistemas agênticos..."}
            {progress >= 80 && progress < 95 && "Finalizando experiência..."}
            {progress >= 95 && "Pronto para exploração!"}
          </p>
          
          <div className="flex justify-center space-x-1">
            {[0, 1, 2].map((dot) => (
              <motion.div
                key={dot}
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: dot * 0.2,
                  ease: "easeInOut"
                }}
                className="w-2 h-2 bg-cyan-400 rounded-full"
              />
            ))}
          </div>
        </motion.div>

        {/* Tips */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-8 p-4 bg-black/30 rounded-lg border border-cyan-500/20 backdrop-blur-sm"
        >
          <h3 className="text-cyan-400 font-semibold mb-2 text-sm">Dica de Navegação:</h3>
          <p className="text-gray-400 text-xs leading-relaxed">
            Use o mouse para rotacionar o universo de grafos. Clique nos nós para explorar serviços e informações da QuantumGraph.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
