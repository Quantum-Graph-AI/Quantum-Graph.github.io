'use client';

import { motion } from 'framer-motion';
import { Atom, Zap, Lock, TrendingUp, Globe, Cpu } from 'lucide-react';

const QuantumSection = () => {
  const quantumApplications = [
    {
      icon: Lock,
      title: 'Criptografia Quântica',
      description: 'Segurança de dados ultra-avançada usando princípios quânticos para proteção inviolável.',
      timeline: '2025-2027',
      status: 'Em Desenvolvimento'
    },
    {
      icon: TrendingUp,
      title: 'Otimização de Portfólios',
      description: 'Algoritmos quânticos para otimização financeira e análise de risco em tempo real.',
      timeline: '2026-2028',
      status: 'Pesquisa'
    },
    {
      icon: Cpu,
      title: 'Machine Learning Quântico',
      description: 'Aceleração exponencial de algoritmos de ML usando computação quântica.',
      timeline: '2027-2030',
      status: 'Conceitual'
    },
    {
      icon: Globe,
      title: 'Simulação Molecular',
      description: 'Modelagem precisa de sistemas moleculares para descoberta de medicamentos.',
      timeline: '2028-2032',
      status: 'Pesquisa'
    }
  ];

  const researchAreas = [
    'Algoritmos Quânticos Variacionais (VQA)',
    'Quantum Approximate Optimization Algorithm (QAOA)',
    'Quantum Machine Learning',
    'Quantum Error Correction',
    'Hybrid Classical-Quantum Systems',
    'Quantum Network Protocols'
  ];

  const partnerships = [
    { name: 'IBM Quantum Network', logo: '🔬' },
    { name: 'Google Quantum AI', logo: '🧠' },
    { name: 'Microsoft Azure Quantum', logo: '☁️' },
    { name: 'Academia Brasileira de Ciências', logo: '🎓' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <motion.div
              className="w-20 h-20 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Atom size={40} className="text-black" />
            </motion.div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Visão <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Quântica</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            Explorando as fronteiras da computação quântica para resolver problemas
            complexos que são intratáveis para computadores clássicos.
          </p>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl p-8 border border-purple-400/20 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Nossa Visão Quântica</h3>
            <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
              "Acreditamos que a computação quântica representará a próxima revolução tecnológica,
              capaz de resolver problemas em otimização, criptografia, simulação molecular e
              inteligência artificial que são impossíveis para computadores tradicionais.
              Nosso objetivo é estar na vanguarda desta transformação, desenvolvendo soluções
              práticas que aproveitem o poder dos qubits para criar valor real."
            </p>
          </div>
        </motion.div>

        {/* Quantum Applications */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Aplicações <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Quânticas</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quantumApplications.map((app, index) => (
              <motion.div
                key={app.title}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 hover:border-purple-400/30 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(128,0,255,0.1)'
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <app.icon size={24} className="text-black" />
                  </div>
                  <div className="text-right">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-medium rounded-full">
                      {app.status}
                    </span>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {app.title}
                </h4>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {app.description}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Timeline: {app.timeline}</span>
                  <Zap size={16} className="text-purple-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Research Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-8 border border-gray-800/50"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-xl font-bold text-white mb-6">Áreas de Pesquisa</h4>
            <div className="space-y-3">
              {researchAreas.map((area, index) => (
                <motion.div
                  key={area}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mr-4"></div>
                  <span className="text-gray-300">{area}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-8 border border-gray-800/50"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-xl font-bold text-white mb-6">Parcerias Estratégicas</h4>
            <div className="space-y-4">
              {partnerships.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  className="flex items-center p-4 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-2xl mr-4">{partner.logo}</span>
                  <span className="text-gray-300">{partner.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Atom className="mr-3" size={20} />
            Explorar Colaborações Quânticas
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default QuantumSection;