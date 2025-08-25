'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

import LoadingScreen from '@/components/Graph3D/LoadingScreen';
import { useState, useEffect } from 'react';

// Importação dinâmica para evitar problemas de SSR com Three.js
const GraphUniverse = dynamic(() => import('@/components/Graph3D/GraphUniverse'), {
  ssr: false,
});

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

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

  return (
    <main className="min-h-screen overflow-hidden">
      {loading && <LoadingScreen progress={progress} />}
      <GraphUniverse />
    </main>
  );
}
  