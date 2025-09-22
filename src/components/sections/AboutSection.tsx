'use client';

import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Lightbulb } from 'lucide-react';
import Image from 'next/image';

const AboutSection = () => {
  const achievements = [
    {
      icon: Award,
      title: '10+ Anos',
      subtitle: 'Experiência em IA'
    },
    {
      icon: Users,
      title: '50+ Projetos',
      subtitle: 'Entregues com Sucesso'
    },
    {
      icon: BookOpen,
      title: 'PhD em Progresso',
      subtitle: 'Computação Quântica'
    },
    {
      icon: Lightbulb,
      title: '15+ Publicações',
      subtitle: 'Artigos Científicos'
    }
  ];

  const expertise = [
    'Inteligência Artificial e Machine Learning',
    'Sistemas Agênticos e Multi-Agent Systems',
    'Computação Quântica e Algoritmos Quânticos',
    'Processamento de Linguagem Natural',
    'Computer Vision e Deep Learning',
    'Data Science e Analytics',
    'DevOps e MLOps',
    'Arquitetura de Software'
  ];

  return (
    <section id="about" className="py-20 bg-gray-900/50">
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
            Sobre o <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Fundador</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Conheça a mente por trás da QuantumGraph AI e sua jornada na fronteira da tecnologia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image and Info */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative inline-block mb-8">
              <motion.div
                className="w-64 h-64 mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-gradient-to-r from-cyan-400/20 to-purple-400/20 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Placeholder for professional photo */}
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-4xl font-bold text-gray-400">
                  DS
                </div>
                {/* When you have the actual photo, replace with:
                <Image
                  src="/assets/foto_perfil.jpg"
                  alt="Davi Castro Samora"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                /> */}
              </motion.div>

              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60"></div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Davi Castro Samora
            </h3>
            <p className="text-lg text-cyan-400 mb-6">
              Fundador & CEO da QuantumGraph AI
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              Especialista em Inteligência Artificial com mais de uma década de experiência
              em desenvolvimento de soluções inovadoras. Atualmente cursando PhD em Computação
              Quântica, combinando conhecimento acadêmico de ponta com experiência prática
              em projetos empresariais de grande escala.
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4">
              <motion.a
                href="https://www.linkedin.com/in/davi-castro-samora/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                LinkedIn
              </motion.a>
              <motion.a
                href="https://medium.com/@davicastrosamora"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-800 text-white rounded-lg border border-gray-600 hover:bg-gray-700 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Medium
              </motion.a>
            </div>
          </motion.div>

          {/* Achievements and Expertise */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
                    <achievement.icon size={24} className="text-black" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1">{achievement.title}</h4>
                  <p className="text-gray-400 text-sm">{achievement.subtitle}</p>
                </motion.div>
              ))}
            </div>

            {/* Expertise */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h4 className="text-xl font-bold text-white mb-6">Áreas de Especialização</h4>
              <div className="grid grid-cols-1 gap-3">
                {expertise.map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-4"></div>
                    <span className="text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-6 border border-cyan-400/20">
              <h4 className="text-xl font-bold text-white mb-4">Missão</h4>
              <p className="text-gray-300 leading-relaxed">
                "Democratizar o acesso à inteligência artificial e computação quântica,
                criando soluções que transformem negócios e impactem positivamente a sociedade.
                Acredito que a combinação de código aberto, conhecimento científico e inovação
                prática pode resolver os maiores desafios da humanidade."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;