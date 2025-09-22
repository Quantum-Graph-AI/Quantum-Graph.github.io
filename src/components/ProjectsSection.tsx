'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, GitBranch } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  description: string;
  full_name: string;
  html_url: string;
  homepage?: string;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

export default function ProjectsSection() {
  const { t } = useLanguage();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // For static export, we'll use mock data or pre-fetched data
        // In production, you would fetch from GitHub API
        const mockProjects: Project[] = [
          {
            id: 1,
            name: 'QuantumML',
            description: 'Advanced quantum machine learning framework for complex problem solving',
            full_name: 'quantumgraph/quantumml',
            html_url: 'https://github.com/quantumgraph/quantumml',
            homepage: 'https://quantumml.quantumgraph.ai',
            topics: ['quantum-computing', 'machine-learning', 'python', 'ai'],
            stargazers_count: 234,
            forks_count: 45,
            language: 'Python',
            updated_at: '2025-01-15T10:30:00Z',
          },
          {
            id: 2,
            name: 'Neural-Quantum-Bridge',
            description: 'Bridge between classical neural networks and quantum algorithms',
            full_name: 'quantumgraph/neural-quantum-bridge',
            html_url: 'https://github.com/quantumgraph/neural-quantum-bridge',
            topics: ['neural-networks', 'quantum', 'tensorflow', 'research'],
            stargazers_count: 156,
            forks_count: 32,
            language: 'TypeScript',
            updated_at: '2025-01-10T14:20:00Z',
          },
          {
            id: 3,
            name: 'Quantum-Optimizer',
            description: 'High-performance quantum optimization algorithms for business applications',
            full_name: 'quantumgraph/quantum-optimizer',
            html_url: 'https://github.com/quantumgraph/quantum-optimizer',
            homepage: 'https://optimizer.quantumgraph.ai',
            topics: ['optimization', 'quantum', 'algorithms', 'cpp'],
            stargazers_count: 89,
            forks_count: 18,
            language: 'C++',
            updated_at: '2025-01-08T09:15:00Z',
          },
        ];

        setProjects(mockProjects);
        setLoading(false);
      } catch (err) {
        setError('Failed to load projects');
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      'Python': '#3776ab',
      'TypeScript': '#3178c6',
      'JavaScript': '#f7df1e',
      'C++': '#00599c',
      'Java': '#ed8b00',
      'Go': '#00add8',
    };
    return colors[language] || '#8b949e';
  };

  if (loading) {
    return (
      <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-600 dark:text-red-400">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {t.projects.title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t.projects.subtitle}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 h-full flex flex-col">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Star className="w-4 h-4 mr-1" />
                      {project.stargazers_count}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <GitBranch className="w-4 h-4 mr-1" />
                      {project.forks_count}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t.projects.technologies}:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Language and Date */}
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <div
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: getLanguageColor(project.language) }}
                    ></div>
                    {project.language}
                  </div>
                  <span>Updated {formatDate(project.updated_at)}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    {t.projects.viewGitHub}
                  </a>
                  {project.homepage && (
                    <a
                      href={project.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/quantumgraph"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}