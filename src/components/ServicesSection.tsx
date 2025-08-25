'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Cpu, Brain, Users } from 'lucide-react';

export default function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Cpu,
      title: t.services.service1.title,
      description: t.services.service1.description,
      color: 'from-blue-500 to-blue-600',
      features: ['Otimização Quântica', 'Simulação Molecular', 'Criptografia Quântica', 'Análise de Big Data']
    },
    {
      icon: Brain,
      title: t.services.service2.title,
      description: t.services.service2.description,
      color: 'from-purple-500 to-purple-600',
      features: ['Redes Neurais Quânticas', 'Processamento Acelerado', 'Modelos Híbridos', 'Análise Preditiva']
    },
    {
      icon: Users,
      title: t.services.service3.title,
      description: t.services.service3.description,
      color: 'from-pink-500 to-pink-600',
      features: ['Estratégia de IA', 'Implementação', 'Treinamento', 'Suporte Contínuo']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
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
            {t.services.title}
          </h2>
          <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 h-full border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 group-hover:scale-105 overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`relative inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (index * 0.2) + (featureIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="flex items-center text-sm text-gray-500 dark:text-gray-400"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3 flex-shrink-0`}></div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Learn More Button */}
                <div className="relative z-10 mt-8">
                  <button className={`w-full py-3 px-6 rounded-xl bg-gradient-to-r ${service.color} text-white font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300`}>
                    Saiba Mais
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Pronto para Transformar seu Negócio?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como nossas soluções de IA quântica podem revolucionar seus processos.
            </p>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Entre em Contato
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
