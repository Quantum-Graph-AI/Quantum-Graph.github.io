'use client';

import { motion } from 'framer-motion';
import {
  Brain,
  Code,
  Database,
  Bot,
  TrendingUp,
  Zap,
  Users,
  Settings,
  Target
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: 'Consultoria em IA',
      description: 'Estratégias personalizadas para implementar inteligência artificial em sua empresa',
      features: [
        'Análise de viabilidade de projetos de IA',
        'Roadmap de implementação',
        'Treinamento de equipes',
        'Otimização de processos'
      ],
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Bot,
      title: 'Sistemas Agênticos',
      description: 'Desenvolvimento de agentes inteligentes para automação complexa',
      features: [
        'Multi-agent systems',
        'LangGraph e LangChain',
        'RAG (Retrieval-Augmented Generation)',
        'Chatbots inteligentes'
      ],
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Database,
      title: 'Ciência de Dados',
      description: 'Transforme seus dados em insights valiosos e decisões estratégicas',
      features: [
        'Análise exploratória de dados',
        'Modelagem preditiva',
        'Dashboards interativos',
        'Data pipelines robustos'
      ],
      color: 'from-green-400 to-teal-500'
    },
    {
      icon: Code,
      title: 'Desenvolvimento de Software',
      description: 'Soluções personalizadas com as melhores práticas de desenvolvimento',
      features: [
        'Arquitetura escalável',
        'APIs RESTful e GraphQL',
        'Microserviços',
        'DevOps e CI/CD'
      ],
      color: 'from-orange-400 to-red-500'
    },
    {
      icon: TrendingUp,
      title: 'Machine Learning',
      description: 'Modelos de ML personalizados para problemas específicos do seu negócio',
      features: [
        'Modelos de classificação e regressão',
        'Processamento de linguagem natural',
        'Computer vision',
        'MLOps e deployment'
      ],
      color: 'from-indigo-400 to-purple-500'
    },
    {
      icon: Zap,
      title: 'Automação Inteligente',
      description: 'Otimize processos com automação baseada em IA',
      features: [
        'RPA (Robotic Process Automation)',
        'Workflows inteligentes',
        'Integração de sistemas',
        'Monitoramento e alertas'
      ],
      color: 'from-yellow-400 to-orange-500'
    }
  ];

  const processSteps = [
    {
      icon: Users,
      title: 'Consulta Inicial',
      description: 'Entendemos seus desafios e objetivos'
    },
    {
      icon: Target,
      title: 'Estratégia',
      description: 'Desenvolvemos um plano personalizado'
    },
    {
      icon: Settings,
      title: 'Implementação',
      description: 'Executamos com excelência e transparência'
    },
    {
      icon: TrendingUp,
      title: 'Otimização',
      description: 'Monitoramos e melhoramos continuamente'
    }
  ];

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
    <section id="services" className="py-20 bg-black">
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
            Serviços de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Consultoria em IA</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Oferecemos soluções completas em inteligência artificial, desde consultoria estratégica
            até implementação de sistemas complexos.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
              }}
            >
              {/* Service Icon */}
              <div className={`w-12 h-12 mb-6 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <service.icon size={24} className="text-white" />
              </div>

              {/* Service Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div
          className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Nosso <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Processo</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <step.icon size={28} className="text-black" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>

                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-cyan-400/30 to-purple-400/30 transform translate-x-4"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar Consulta Gratuita
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;