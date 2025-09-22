'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Code, Brain, Zap } from 'lucide-react';

const HeroSection = () => {
  const pillars = [
    {
      icon: Code,
      title: 'Desenvolvimento Open-Source',
      description: 'Construindo o futuro com código aberto e colaboração'
    },
    {
      icon: Brain,
      title: 'Consultoria em IA',
      description: 'Estratégias personalizadas para transformação digital'
    },
    {
      icon: Zap,
      title: 'Computação Quântica',
      description: 'Explorando fronteiras da computação do futuro'
    }
  ];

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400">
                QuantumGraph AI
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transformando ideias em soluções inteligentes através de
              <span className="text-cyan-400"> Inteligência Artificial</span>,
              <span className="text-purple-400"> Código Aberto</span> e
              <span className="text-blue-400"> Inovação Quântica</span>
            </p>
          </motion.div>

          {/* Three Pillars */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
                  <pillar.icon size={32} className="text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{pillar.title}</h3>
                <p className="text-gray-400 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explorar Projetos
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-full hover:bg-gray-800/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Entre em Contato
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-400 cursor-pointer"
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <ArrowDown size={24} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;