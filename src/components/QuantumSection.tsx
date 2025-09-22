'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import {
  Atom,
  Cpu,
  Zap,
  ArrowRight,
  Sparkles,
  Infinity as InfinityIcon,
  Layers,
  Target
} from 'lucide-react';

export default function QuantumSection() {
  const { t } = useLanguage();

  const quantumFeatures = [
    {
      icon: Atom,
      title: t.quantum.features[0].title,
      description: t.quantum.features[0].description,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/10',
    },
    {
      icon: InfinityIcon,
      title: t.quantum.features[1].title,
      description: t.quantum.features[1].description,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/10',
    },
    {
      icon: Cpu,
      title: t.quantum.features[2].title,
      description: t.quantum.features[2].description,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/10',
    },
  ];

  const applications = [
    {
      icon: Target,
      title: 'Optimization Problems',
      description: 'Portfolio optimization, supply chain management, and resource allocation',
    },
    {
      icon: Layers,
      title: 'Machine Learning',
      description: 'Quantum neural networks and enhanced pattern recognition',
    },
    {
      icon: Sparkles,
      title: 'Cryptography',
      description: 'Quantum-safe encryption and secure communication protocols',
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="quantum" className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-pink-300 dark:bg-pink-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-sm font-medium mb-6">
            <Atom className="w-4 h-4 mr-2" />
            Quantum Computing Research
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {t.quantum.title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            {t.quantum.subtitle}
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t.quantum.description}
          </p>
        </motion.div>

        {/* Main Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {quantumFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`relative ${feature.bgColor} rounded-2xl p-8 h-full transition-all duration-500 hover:shadow-2xl hover:scale-105`}>
                {/* Icon */}
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Glow effect */}
                  <div className={`absolute -inset-2 bg-gradient-to-r ${feature.color} rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur`}></div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Animated particles */}
                <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-60 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                </div>
                <div className="absolute bottom-4 left-4 opacity-30 group-hover:opacity-60 transition-opacity duration-300 animation-delay-1000">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Applications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Real-World Applications
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Discover how quantum computing is revolutionizing various industries and solving previously impossible problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mb-4">
                  <app.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {app.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {app.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quantum Advantage Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                The Quantum Advantage
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
                While classical computers process information in binary bits (0 or 1), quantum computers use quantum bits (qubits) that can exist in multiple states simultaneously through superposition.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Exponential scaling:</strong> n qubits can represent 2^n states
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Parallel processing:</strong> Quantum algorithms explore multiple solutions simultaneously
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Quantum entanglement:</strong> Enables unprecedented computational coordination
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Quantum visualization */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                    2^300
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    States with 300 qubits
                  </p>
                  <div className="text-xs text-gray-500 dark:text-gray-500">
                    More than atoms in the observable universe
                  </div>
                </div>

                {/* Animated circles representing qubits */}
                <div className="flex justify-center space-x-2 mt-6">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.2,
                        repeat: Infinity,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12"
        >
          <Zap className="w-16 h-16 text-white mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Explore Quantum Possibilities?
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join us in pioneering the quantum revolution. Let's discuss how quantum computing can transform your most complex challenges into breakthrough solutions.
          </p>

          <button
            onClick={scrollToContact}
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <span>{t.quantum.cta}</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}