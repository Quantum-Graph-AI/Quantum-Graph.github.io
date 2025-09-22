'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'services', href: '#services' },
    { key: 'team', href: '#team' },
    { key: 'contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/company/107882242/',
      label: 'LinkedIn Empresa',
      color: 'hover:text-blue-600'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/samoradc/',
      label: 'LinkedIn Fundador',
      color: 'hover:text-blue-600'
    },
    {
      icon: Github,
      href: 'https://github.com/Quantum-Graph-AI',
      label: 'GitHub',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: Mail,
      href: 'mailto:contato@quantumgraph.ai',
      label: 'Email',
      color: 'hover:text-purple-600'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="col-span-1 md:col-span-2"
            >
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  QuantumGraph
                </h3>
                <p className="text-blue-300 text-lg font-medium mt-2">
                  Next-Generation Artificial Intelligence
                </p>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Transformamos dados em insights poderosos através de tecnologias quânticas avançadas e inteligência artificial de última geração.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 bg-gray-800 rounded-xl ${social.color} transition-all duration-300 hover:shadow-lg`}
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">Links Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.key}>
                    <button
                      onClick={() => {
                        const element = document.querySelector(link.href);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-left"
                    >
                      {t.nav[link.key as keyof typeof t.nav]}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">Contato</h4>
              <div className="space-y-3 text-gray-300">
                <p>
                  <span className="font-medium">Email:</span><br />
                  contato@quantumgraph.ai
                </p>
                <p>
                  <span className="font-medium">Localização:</span><br />
                  Brasil
                </p>
                <p>
                  <span className="font-medium">Disponibilidade:</span><br />
                  24/7 Online
                </p>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-gray-400 text-center md:text-left">
                <p>
                  {t.footer.copyright} {t.footer.rights}
                </p>
              </div>

              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <ArrowUp className="w-4 h-4" />
                <span>Voltar ao Topo</span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
      </div>
    </footer>
  );
}
