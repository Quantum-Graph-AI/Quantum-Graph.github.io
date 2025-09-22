'use client';

import { useEffect, useState } from 'react';
import { Code, Brain, Zap, Github, Linkedin, Mail, ExternalLink, ArrowRight, CheckCircle, Users, Lightbulb, Target, Star, MessageSquare, Calendar, Tag } from 'lucide-react';

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="h-screen w-full bg-gradient-to-br from-gray-900 via-black to-blue-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">
            QuantumGraph AI
          </h1>
          <p className="text-gray-400">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50 border-b border-gray-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <img src="/Quantum-Graph.github.io/logo.png" alt="QuantumGraph AI" className="w-8 h-8 rounded-lg" />
              <span className="text-xl font-bold">QuantumGraph AI</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-cyan-400 transition-colors">Início</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">Projetos</a>
              <a href="#services" className="hover:text-cyan-400 transition-colors">Consultoria</a>
              <a href="#about" className="hover:text-cyan-400 transition-colors">Fundador</a>
              <a href="#blog" className="hover:text-cyan-400 transition-colors">Blog</a>
              <a href="#quantum" className="hover:text-cyan-400 transition-colors">Quântica</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contato</a>
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com/SamoraDC" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/samoradc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400">
                QuantumGraph AI
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Acelerando o Futuro da Inteligência Artificial com Código Aberto
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Somos uma empresa dedicada a impulsionar projetos Open-Source em Engenharia de IA e Engenharia Agêntica, construindo as bases para a próxima geração de tecnologia.
            </p>

            {/* Three Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-16">
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center">
                  <Code size={32} className="text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Inovação Open-Source</h3>
                <p className="text-gray-400">Contribuímos e criamos ferramentas de IA de ponta para a comunidade</p>
              </div>

              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                  <Brain size={32} className="text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Consultoria Especializada</h3>
                <p className="text-gray-400">Soluções de IA sob medida com a expertise do nosso fundador, Davi Samora</p>
              </div>

              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
                  <Zap size={32} className="text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Visão Quântica</h3>
                <p className="text-gray-400">Explorando a fronteira da computação para criar a plataforma de ensino do amanhã</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                Explore Nossos Projetos
              </a>
              <a href="#contact" className="px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-full hover:bg-gray-800/50 transition-all duration-300">
                Entre em Contato
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Projetos Open-Source
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Nossa vitrine principal. É aqui que provamos nossa capacidade técnica através de projetos inovadores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Agentic Business Law Researcher",
                description: "Sistema agêntico para pesquisa jurídica empresarial automatizada com IA",
                technologies: ["LangChain", "LangGraph", "Python", "RAG"],
                stars: "15",
                link: "https://github.com/SamoraDC/AgenticBusinessLawResearcher"
              },
              {
                title: "Agentic Real Estate System",
                description: "Plataforma inteligente para análise e gestão do mercado imobiliário",
                technologies: ["Pydantic", "AI Agents", "Data Science", "Python"],
                stars: "12",
                link: "https://github.com/SamoraDC/AgenticRealEstateSystem"
              },
              {
                title: "Financial Audit Agentic System",
                description: "Sistema de auditoria financeira automatizada com agentes de IA",
                technologies: ["PydanticAI", "Agno", "Financial Analysis", "ML"],
                stars: "8",
                link: "https://github.com/SamoraDC/FinancialAuditAgenticSystem"
              }
            ].map((project, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <div className="flex items-center space-x-1 text-yellow-400">
                    <Star size={16} />
                    <span className="text-sm">{project.stars}</span>
                  </div>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                    <Github size={16} />
                    <span>Ver no GitHub</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Consultoria em Engenharia de IA
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transformamos conhecimento em negócio. Soluções profissionais e diretas com Davi Samora.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Brain,
                title: "Desenvolvimento de Agentes de IA",
                description: "Sistemas agênticos com LangChain e LangGraph para automação inteligente",
                features: ["Multi-Agent Systems", "Workflow Orchestration", "Decision Making"]
              },
              {
                icon: Target,
                title: "Sistemas de RAG",
                description: "Retrieval-Augmented Generation para consulta inteligente de documentos",
                features: ["Document Intelligence", "Vector Databases", "Semantic Search"]
              },
              {
                icon: Lightbulb,
                title: "Modelagem com LLMs",
                description: "Large Language Models customizados para casos de uso específicos",
                features: ["Fine-tuning", "Prompt Engineering", "Model Optimization"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">{service.title}</h3>
                <p className="text-gray-400 mb-6 text-center">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                      <CheckCircle size={16} className="text-green-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-center mb-8">Como Funciona</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                <h4 className="font-semibold mb-2">Solicitação</h4>
                <p className="text-gray-400">Preencha o formulário com os detalhes do seu desafio</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                <h4 className="font-semibold mb-2">Análise</h4>
                <p className="text-gray-400">Analisaremos a viabilidade e disponibilidade</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                <h4 className="font-semibold mb-2">Contato</h4>
                <p className="text-gray-400">Entraremos em contato para agendar uma conversa inicial</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-sm text-gray-400 mb-4">Serviço mediante disponibilidade</p>
              <a href="#contact" className="inline-flex items-center space-x-2 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
                <span>Solicitar Consultoria</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                O Fundador
              </span>
            </h2>
            <p className="text-xl text-gray-400">O rosto por trás da inovação</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-64 h-64 mx-auto mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full p-1">
                <img src="/Quantum-Graph.github.io/foto_perfil.jpg" alt="Davi Castro Samora" className="w-full h-full rounded-full object-cover" />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">Davi Castro Samora</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Davi Samora é um Cientista de Dados e Engenheiro de IA especialista em LLMs, RAGs e Agentes de IA.
                Com paixão por código aberto e orquestração de agentes com LangChain e LangGraph, ele fundou a
                QuantumGraph AI para acelerar o futuro da inteligência artificial através de soluções inovadoras
                e colaboração comunitária.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">10+</div>
                  <div className="text-gray-400">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">50+</div>
                  <div className="text-gray-400">Projetos Concluídos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">15+</div>
                  <div className="text-gray-400">Artigos Publicados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">5+</div>
                  <div className="text-gray-400">Open-Source</div>
                </div>
              </div>

              <div className="flex space-x-4">
                <a href="https://linkedin.com/in/samoradc" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/SamoraDC" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
                <a href="https://medium.com/@samora.davi" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  <ExternalLink size={20} />
                  <span>Medium</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                Blog & Insights
              </span>
            </h2>
            <p className="text-xl text-gray-400">Compartilhando conhecimento e construindo autoridade</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Introdução aos Sistemas Agênticos",
                excerpt: "Explorando os fundamentos dos sistemas multi-agentes e suas aplicações práticas...",
                category: "Engenharia Agêntica",
                readTime: "8 min",
                date: "15 Mar 2024"
              },
              {
                title: "RAG: Revolucionando Consultas de Documentos",
                excerpt: "Como o Retrieval-Augmented Generation está transformando a forma como interagimos com dados...",
                category: "Inferência Causal",
                readTime: "12 min",
                date: "22 Fev 2024"
              },
              {
                title: "LangGraph: Orquestrando Agentes de IA",
                excerpt: "Tutorial completo sobre como usar LangGraph para criar workflows inteligentes...",
                category: "Tutoriais",
                readTime: "15 min",
                date: "8 Fev 2024"
              }
            ].map((article, index) => (
              <div key={index} className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-green-400/20 to-blue-400/20"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">{article.category}</span>
                    <div className="flex items-center space-x-4 text-gray-400 text-sm">
                      <span className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{article.date}</span>
                      </span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{article.title}</h3>
                  <p className="text-gray-400 mb-4">{article.excerpt}</p>
                  <a href="https://medium.com/@samora.davi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors">
                    <span>Ler Artigo Completo</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="https://medium.com/@samora.davi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
              <span>Ver Todos os Artigos</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Quantum Section */}
      <section id="quantum" className="py-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                O Futuro: Computação Quântica
              </span>
            </h2>
            <p className="text-xl text-gray-400">Preparando o Terreno para a Revolução Quântica</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">Nossa Visão</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                A Computação Quântica representa o futuro da resolução de problemas complexos em IA, finanças,
                criptografia e otimização. Na QuantumGraph AI, estamos preparando o terreno para nos tornarmos
                uma plataforma de ensino líder nesta revolução tecnológica.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Nosso objetivo é democratizar o acesso ao conhecimento quântico, criando cursos, workshops e
                ferramentas que permitam a próxima geração de desenvolvedores dominar esta tecnologia transformadora.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-900/50 rounded-xl p-6 border border-blue-500/30">
                <h4 className="text-xl font-bold mb-3 text-blue-400">Algoritmos Quânticos</h4>
                <p className="text-gray-400">Pesquisa e desenvolvimento de algoritmos para otimização e machine learning quântico</p>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-6 border border-purple-500/30">
                <h4 className="text-xl font-bold mb-3 text-purple-400">Simulação Quântica</h4>
                <p className="text-gray-400">Ferramentas de simulação para teste e validação de circuitos quânticos</p>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-6 border border-cyan-500/30">
                <h4 className="text-xl font-bold mb-3 text-cyan-400">Educação Quântica</h4>
                <p className="text-gray-400">Plataforma completa de ensino desde conceitos básicos até implementações avançadas</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-center mb-8">Roadmap Quântico</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">2024</span>
                </div>
                <h4 className="font-bold mb-2">Hoje: Foco em IA Open-Source</h4>
                <p className="text-gray-400">Consolidando expertise em sistemas agênticos e LLMs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2025</span>
                </div>
                <h4 className="font-bold mb-2">Amanhã: Cursos Introdutórios de QC</h4>
                <p className="text-gray-400">Primeiros cursos e workshops sobre computação quântica</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2026+</span>
                </div>
                <h4 className="font-bold mb-2">Futuro: Plataforma Completa de Ensino</h4>
                <p className="text-gray-400">Ecossistema completo para educação em computação quântica</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <h4 className="text-lg font-semibold mb-4">Quer ser o primeiro a saber sobre nossa jornada na Computação Quântica?</h4>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input type="email" placeholder="Seu e-mail" className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400" />
                <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity">
                  Inscrever
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Entre em Contato
              </span>
            </h2>
            <p className="text-xl text-gray-400">Vamos transformar suas ideias em soluções inteligentes</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
                    <Mail size={24} className="text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold">E-mail</h4>
                    <a href="mailto:samora.davi@hotmail.com" className="text-cyan-400 hover:text-cyan-300">samora.davi@hotmail.com</a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
                    <Linkedin size={24} className="text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold">LinkedIn</h4>
                    <a href="https://linkedin.com/in/samoradc" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">linkedin.com/in/samoradc</a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg flex items-center justify-center">
                    <Github size={24} className="text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold">GitHub</h4>
                    <a href="https://github.com/SamoraDC" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">github.com/SamoraDC</a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Envie uma Mensagem</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none" placeholder="Seu nome completo" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">E-mail</label>
                  <input type="email" className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none" placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Assunto</label>
                  <select className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none">
                    <option>Consultoria em IA</option>
                    <option>Projeto Open-Source</option>
                    <option>Parceria</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Mensagem</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none" placeholder="Conte-nos sobre seu projeto ou necessidade..."></textarea>
                </div>
                <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/Quantum-Graph.github.io/logo.png" alt="QuantumGraph AI" className="w-8 h-8 rounded-lg" />
                <span className="text-xl font-bold">QuantumGraph AI</span>
              </div>
              <p className="text-gray-400">Acelerando o futuro da IA com código aberto e inovação quântica.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Consultoria IA</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Projetos Open-Source</a></li>
                <li><a href="#quantum" className="hover:text-white transition-colors">Computação Quântica</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="https://medium.com/@samora.davi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Medium</a></li>
                <li><a href="https://github.com/SamoraDC" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="mailto:samora.davi@hotmail.com" className="hover:text-white transition-colors">samora.davi@hotmail.com</a></li>
                <li><a href="https://linkedin.com/in/samoradc" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2025 QuantumGraph AI. Todos os direitos reservados.</p>
            <p className="mt-2">Navegando pelo futuro da inteligência artificial</p>
          </div>
        </div>
      </footer>
    </div>
  );
}