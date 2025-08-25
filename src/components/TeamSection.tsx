'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';

export default function TeamSection() {
  const { t } = useLanguage();

  return (
    <section id="team" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.team.title}
          </h2>
          <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
            {t.team.subtitle}
          </p>
        </motion.div>

        {/* Founder Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-blue-900 rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-gray-700 shadow-xl">
            {/* Profile Image Placeholder */}
            <div className="text-center mb-8">
              <div className="relative inline-block">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-4xl font-bold text-white">DC</span>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full blur opacity-20"></div>
              </div>
            </div>

            {/* Info */}
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {t.team.founder.name}
              </h3>
              <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-6">
                {t.team.founder.role}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                {t.team.founder.bio}
              </p>

              {/* Social Links */}
              <div className="flex justify-center space-x-6">
                <a
                  href="https://www.linkedin.com/in/samoradc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
                </a>
                <a
                  href="https://github.com/Quantum-Graph-AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white" />
                </a>
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group p-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <Mail className="w-6 h-6 text-purple-600 group-hover:text-purple-700" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills & Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Áreas de Especialização
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Inteligência Artificial',
              'Computação Quântica',
              'Machine Learning',
              'Deep Learning',
              'Algoritmos Quânticos',
              'Otimização',
              'Análise de Dados',
              'Desenvolvimento Full-Stack'
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Junte-se à Nossa Missão
            </h3>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Estamos sempre em busca de talentos excepcionais para fazer parte da revolução da IA quântica.
            </p>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Entre em Contato
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
