'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Linkedin, Github, BookOpen, Target, Eye, Heart, Cpu, Brain, Users } from 'lucide-react';

// Simulação de um universo de grafos 2D interativo (funciona em GitHub Pages)
function GraphUniverseCSS() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [currentLevel, setCurrentLevel] = useState('main');
  const [selectedInfo, setSelectedInfo] = useState<string | null>(null);

  const nodes = {
    main: [
      { id: 'company', x: 50, y: 20, label: 'QuantumGraph', color: 'cyan', size: 'large' },
      { id: 'services', x: 20, y: 50, label: 'Serviços', color: 'purple', size: 'medium' },
      { id: 'ml', x: 80, y: 50, label: 'Machine Learning', color: 'green', size: 'medium' },
      { id: 'ai', x: 50, y: 80, label: 'Engenharia de IA', color: 'yellow', size: 'medium' },
      { id: 'about', x: 15, y: 15, label: 'Sobre', color: 'pink', size: 'small' },
      { id: 'quantum', x: 85, y: 15, label: 'Computação Quântica', color: 'orange', size: 'small' },
    ],
    services: [
      { id: 'back', x: 10, y: 10, label: '← Voltar', color: 'gray', size: 'small' },
      { id: 'data-science', x: 30, y: 40, label: 'Ciência de Dados', color: 'cyan', size: 'medium' },
      { id: 'consulting', x: 70, y: 40, label: 'Consultoria', color: 'purple', size: 'medium' },
      { id: 'automation', x: 50, y: 70, label: 'Automação', color: 'green', size: 'medium' },
    ],
    ml: [
      { id: 'back', x: 10, y: 10, label: '← Voltar', color: 'gray', size: 'small' },
      { id: 'regression', x: 25, y: 35, label: 'Regressão', color: 'green', size: 'medium' },
      { id: 'classification', x: 75, y: 35, label: 'Classificação', color: 'cyan', size: 'medium' },
      { id: 'clustering', x: 50, y: 65, label: 'Clusterização', color: 'purple', size: 'medium' },
    ],
    ai: [
      { id: 'back', x: 10, y: 10, label: '← Voltar', color: 'gray', size: 'small' },
      { id: 'agentic', x: 30, y: 40, label: 'Sistemas Agênticos', color: 'yellow', size: 'medium' },
      { id: 'rag', x: 70, y: 40, label: 'RAG Systems', color: 'purple', size: 'medium' },
      { id: 'chatbots', x: 50, y: 70, label: 'Chatbots', color: 'green', size: 'medium' },
    ]
  };

  const nodeInfo: Record<string, { title: string; description: string; details: string[] }> = {
    company: {
      title: 'QuantumGraph',
      description: 'Empresa especializada em IA e Sistemas Agênticos avançados.',
      details: [
        'Fundada por Davi Castro Samora',
        'Senior AI Engineer e Data Scientist',
        'Cliente principal: Globo (via SysManager)',
        'Especialização em dados de publicidade',
        'Sistemas agênticos com LangGraph'
      ]
    },
    about: {
      title: 'Davi Castro Samora',
      description: 'Fundador & CEO da QuantumGraph',
      details: [
        'Senior AI Engineer especializado em GenAI',
        'Expert em Machine Learning e sistemas agênticos',
        'Desenvolvedor de soluções RAG e automação',
        'LinkedIn: linkedin.com/in/samoradc',
        'GitHub: github.com/SamoraDC'
      ]
    },
    'data-science': {
      title: 'Ciência de Dados',
      description: 'Consultoria sênior em análise de dados e modelagem.',
      details: [
        'Modelos de Machine Learning',
        'Segmentação de clientes',
        'Análise preditiva',
        'Otimização de campanhas',
        'Dashboards e visualizações'
      ]
    },
    agentic: {
      title: 'Sistemas Agênticos',
      description: 'Agentes autônomos inteligentes com LangGraph.',
      details: [
        'Multi-agent systems',
        'LangGraph workflows',
        'Automação inteligente',
        'Coordenação entre agentes',
        'Integração com APIs'
      ]
    }
  };

  const handleNodeClick = (nodeId: string) => {
    if (nodeId === 'back') {
      setCurrentLevel('main');
      setActiveNode(null);
      return;
    }

    if (['services', 'ml', 'ai'].includes(nodeId)) {
      setCurrentLevel(nodeId);
      setActiveNode(null);
    } else {
      setSelectedInfo(nodeId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0.5, 1, 0.5],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-20 p-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4"
          >
            QuantumGraph
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Universo de Soluções em IA
          </motion.p>
        </div>
      </header>

      {/* Graph Universe */}
      <div className="relative z-10 h-96 max-w-6xl mx-auto">
        <div className="relative w-full h-full">
          {nodes[currentLevel as keyof typeof nodes].map((node, index) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 group`}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              onClick={() => handleNodeClick(node.id)}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
            >
              {/* Node */}
              <div
                className={`
                  relative rounded-full border-2 flex items-center justify-center text-white font-bold
                  transition-all duration-300 group-hover:scale-110
                  ${node.size === 'large' ? 'w-24 h-24 text-lg' : 
                    node.size === 'medium' ? 'w-16 h-16 text-sm' : 'w-12 h-12 text-xs'}
                  ${node.color === 'cyan' ? 'bg-cyan-500/20 border-cyan-400' :
                    node.color === 'purple' ? 'bg-purple-500/20 border-purple-400' :
                    node.color === 'green' ? 'bg-green-500/20 border-green-400' :
                    node.color === 'yellow' ? 'bg-yellow-500/20 border-yellow-400' :
                    node.color === 'pink' ? 'bg-pink-500/20 border-pink-400' :
                    node.color === 'orange' ? 'bg-orange-500/20 border-orange-400' :
                    'bg-gray-500/20 border-gray-400'}
                  ${activeNode === node.id ? 'shadow-lg shadow-current' : ''}
                `}
              >
                {node.id === 'company' && <Sparkles className="w-8 h-8" />}
                {node.id === 'services' && <Users className="w-6 h-6" />}
                {['ml', 'regression', 'classification', 'clustering'].includes(node.id) && <Brain className="w-6 h-6" />}
                {['ai', 'agentic', 'rag', 'chatbots'].includes(node.id) && <Cpu className="w-6 h-6" />}
                {!['company', 'services', 'ml', 'ai', 'agentic', 'rag', 'chatbots', 'regression', 'classification', 'clustering'].includes(node.id) && (
                  <div className="w-3 h-3 rounded-full bg-current" />
                )}
              </div>

              {/* Label */}
              <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-center">
                <div className="bg-black/70 px-2 py-1 rounded text-xs whitespace-nowrap">
                  {node.label}
                </div>
              </div>

              {/* Glow effect */}
              {activeNode === node.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1.5 }}
                  className={`absolute inset-0 rounded-full border opacity-30 ${
                    node.color === 'cyan' ? 'border-cyan-400' :
                    node.color === 'purple' ? 'border-purple-400' :
                    node.color === 'green' ? 'border-green-400' :
                    node.color === 'yellow' ? 'border-yellow-400' :
                    node.color === 'pink' ? 'border-pink-400' :
                    node.color === 'orange' ? 'border-orange-400' :
                    'border-gray-400'
                  }`}
                />
              )}
            </motion.div>
          ))}

          {/* Connections */}
          {nodes[currentLevel as keyof typeof nodes].length > 1 && (
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {nodes[currentLevel as keyof typeof nodes].slice(1).map((node, index) => {
                const centerNode = nodes[currentLevel as keyof typeof nodes][0];
                if (node.id === 'back') return null;
                return (
                  <motion.line
                    key={`connection-${index}`}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    x1={`${centerNode.x}%`}
                    y1={`${centerNode.y}%`}
                    x2={`${node.x}%`}
                    y2={`${node.y}%`}
                    stroke="url(#gradient)"
                    strokeWidth="2"
                  />
                );
              })}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00ffff" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
                </linearGradient>
              </defs>
            </svg>
          )}
        </div>
      </div>

      {/* Current level indicator */}
      <div className="relative z-20 text-center mb-8">
        <div className="inline-block bg-black/50 px-4 py-2 rounded-lg border border-cyan-500/30">
          <span className="text-cyan-400 font-semibold">
            Nível atual: {currentLevel === 'main' ? 'Principal' : 
                        currentLevel === 'services' ? 'Serviços' :
                        currentLevel === 'ml' ? 'Machine Learning' :
                        currentLevel === 'ai' ? 'Engenharia de IA' : currentLevel}
          </span>
        </div>
      </div>

      {/* Instructions */}
      <div className="relative z-20 text-center">
        <p className="text-gray-400 mb-4">
          Clique nos nós para explorar o universo QuantumGraph
        </p>
        <div className="flex justify-center space-x-4 text-sm">
          <span className="text-cyan-400">🔵 Nós principais</span>
          <span className="text-purple-400">🟣 Serviços</span>
          <span className="text-green-400">🟢 Tecnologias</span>
        </div>
      </div>

      {/* Info Modal */}
      {selectedInfo && nodeInfo[selectedInfo] && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedInfo(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-900 rounded-2xl border border-cyan-500/30 max-w-md w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-3">
              {nodeInfo[selectedInfo].title}
            </h3>
            <p className="text-gray-300 mb-4">
              {nodeInfo[selectedInfo].description}
            </p>
            <ul className="space-y-2 mb-6">
              {nodeInfo[selectedInfo].details.map((detail, index) => (
                <li key={index} className="flex items-start space-x-2 text-sm text-gray-400">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setSelectedInfo(null)}
              className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-2 rounded-lg hover:shadow-lg transition-all"
            >
              Fechar
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Footer Links */}
      <footer className="relative z-20 text-center mt-12 pb-8">
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/samoradc/"
            target="_blank"
            className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/SamoraDC"
            target="_blank"
            className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://medium.com/@samora.davi"
            target="_blank"
            className="flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors"
          >
            <BookOpen className="w-5 h-5" />
            <span>Medium</span>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default function Home() {
  // Usar versão CSS que funciona GARANTIDAMENTE no GitHub Pages
  return <GraphUniverseCSS />;
}
  