'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
  title?: string;
  tech?: string[];
  highlights?: string[];
}

const ProjectsSection = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  // Featured projects with custom descriptions
  const featuredProjects: Repository[] = [
    {
      id: 1,
      name: 'claude-swarm-integration',
      title: 'Claude Swarm Integration',
      description: 'Sistema avançado de agentes de IA colaborativos usando Claude API para automação inteligente',
      html_url: '#',
      stargazers_count: 42,
      forks_count: 12,
      language: 'Python',
      topics: ['ai', 'claude-api', 'automation'],
      tech: ['Python', 'AI/ML', 'Claude API'],
      highlights: ['Multi-Agent System', 'Intelligent Automation', 'API Integration']
    },
    {
      id: 2,
      name: 'quantum-graph-neural-nets',
      title: 'Quantum Graph Neural Networks',
      description: 'Implementação de redes neurais quânticas para processamento de grafos complexos',
      html_url: '#',
      stargazers_count: 28,
      forks_count: 8,
      language: 'Python',
      topics: ['quantum', 'neural-networks', 'graphs'],
      tech: ['Python', 'Quantum Computing', 'PyTorch'],
      highlights: ['Quantum ML', 'Graph Processing', 'Research']
    },
    {
      id: 3,
      name: 'ai-data-pipeline',
      title: 'AI Data Pipeline',
      description: 'Pipeline robusto para processamento e análise de dados com machine learning integrado',
      html_url: '#',
      stargazers_count: 35,
      forks_count: 15,
      language: 'Python',
      topics: ['data-pipeline', 'mlops', 'docker'],
      tech: ['Python', 'Docker', 'MLOps'],
      highlights: ['Data Engineering', 'MLOps', 'Scalable Architecture']
    }
  ];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // Simulate API call or use actual GitHub API
        // For demo purposes, using featured projects
        setRepos(featuredProjects);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching repositories:', error);
        setRepos(featuredProjects);
        setLoading(false);
      }
    };

    fetchRepos();
  }, [featuredProjects]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Projetos <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Open-Source</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore nossa coleção de projetos inovadores em IA, Machine Learning e Computação Quântica.
            Contribuições da comunidade são sempre bem-vindas.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
              }}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <Star size={14} className="mr-1" />
                      {Math.floor(Math.random() * 50) + 10}
                    </span>
                    <span className="flex items-center">
                      <GitFork size={14} className="mr-1" />
                      {Math.floor(Math.random() * 20) + 5}
                    </span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <motion.a
                    href={`https://github.com/QuantumGraph-AI/${project.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <div className="space-y-2">
                {project.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3"></div>
                    <span className="text-gray-400">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.a
            href="https://github.com/QuantumGraph-AI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-700 text-white font-semibold rounded-full border border-gray-600 hover:border-gray-500 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="mr-3" size={20} />
            Ver Todos os Projetos no GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;