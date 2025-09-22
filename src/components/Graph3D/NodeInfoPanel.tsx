'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Linkedin, Github, BookOpen } from 'lucide-react';

interface NodeInfo {
  id: string;
  title: string;
  description: string;
  details: string[];
  technologies?: string[];
  links?: { label: string; url: string; icon?: React.ReactNode }[];
}

interface NodeInfoPanelProps {
  nodeId: string | null;
  onClose: () => void;
}

const nodeInfoData: Record<string, NodeInfo> = {
  'company': {
    id: 'company',
    title: 'QuantumGraph',
    description: 'Empresa especializada em Inteligência Artificial e Sistemas Agênticos de última geração.',
    details: [
      'Fundada por Davi Castro Samora, Senior AI Engineer e Data Scientist',
      'Especialização em GenAI, Machine Learning e sistemas agênticos',
      'Cliente principal: Globo (via SysManager)',
      'Foco em dados de publicidade e segmentação de clientes',
      'Desenvolvimento de soluções RAG e bancos de dados vetoriais'
    ],
    technologies: ['Python', 'LangGraph', 'LangChain', 'AWS', 'Neo4j', 'Vector DBs'],
    links: [
      { label: 'LinkedIn Empresa', url: 'https://www.linkedin.com/company/107882242/', icon: <Linkedin className="w-4 h-4" /> },
      { label: 'GitHub', url: 'https://github.com/Quantum-Graph-AI', icon: <Github className="w-4 h-4" /> }
    ]
  },
  'services': {
    id: 'services',
    title: 'Serviços Especializados',
    description: 'Consultoria e desenvolvimento de soluções avançadas em IA e Ciência de Dados.',
    details: [
      'Consultoria de Ciência de Dados Sênior',
      'Desenvolvimento de modelos de Machine Learning',
      'Criação de sistemas agênticos e chatbots',
      'Implementação de RAG (Retrieval-Augmented Generation)',
      'Automação de processos de negócio',
      'Segmentação e recomendação de clientes'
    ],
    technologies: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'MLOps']
  },
  'ml': {
    id: 'ml',
    title: 'Machine Learning',
    description: 'Desenvolvimento de modelos preditivos e algoritmos de aprendizado de máquina.',
    details: [
      'Modelos de Regressão para previsão de valores contínuos',
      'Algoritmos de Classificação para categorização',
      'Técnicas de Clusterização para segmentação',
      'Sistemas de Predição para forecast de negócios',
      'Experimentação A/B e testes estatísticos',
      'Otimização de campanhas publicitárias'
    ],
    technologies: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'XGBoost', 'Pandas', 'NumPy']
  },
  'ai-engineering': {
    id: 'ai-engineering',
    title: 'Engenharia de IA',
    description: 'Arquiteturas avançadas de IA com foco em sistemas agênticos e automação.',
    details: [
      'Sistemas Agênticos multi-modais usando LangGraph',
      'Chatbots inteligentes com context awareness',
      'RAG Systems para recuperação de informações',
      'Bancos de Dados em Grafo (Neo4j) para relacionamentos complexos',
      'Bancos Vetoriais para busca semântica',
      'Integração com modelos LLM (GPT, Claude, Llama)'
    ],
    technologies: ['LangGraph', 'LangChain', 'PydanticAI', 'CrewAI', 'Neo4j', 'Pinecone', 'Chroma']
  },
  'quantum': {
    id: 'quantum',
    title: 'Computação Quântica',
    description: 'Exploração futura de tecnologias quânticas para processamento de baixa latência.',
    details: [
      'Estudo e desenvolvimento em computação quântica',
      'Integração futura com cloud quantum computing',
      'Algoritmos quânticos para otimização',
      'Pesquisa em quantum machine learning',
      'Preparação para a era pós-clássica da computação'
    ],
    technologies: ['Qiskit', 'Cirq', 'Quantum Computing', 'Linear Algebra', 'Complex Systems']
  },
  'about': {
    id: 'about',
    title: 'Sobre Davi Castro Samora',
    description: 'Senior AI Engineer e Data Scientist especializado em soluções empresariais.',
    details: [
      'Full Stack Senior AI Engineer com expertise em GenAI',
      'Especialista em Machine Learning e sistemas agênticos',
      'Experiência em arquiteturas AWS e cloud computing',
      'Desenvolvedor de soluções RAG e automação',
      'Consultor sênior para grandes empresas',
      'Pesquisador em computação quântica e teoria dos grafos'
    ],
    technologies: ['Python', 'AWS', 'Docker', 'Kubernetes', 'FastAPI', 'Streamlit'],
    links: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/samoradc/', icon: <Linkedin className="w-4 h-4" /> },
      { label: 'GitHub', url: 'https://github.com/SamoraDC', icon: <Github className="w-4 h-4" /> },
      { label: 'Medium', url: 'https://medium.com/@samora.davi', icon: <BookOpen className="w-4 h-4" /> }
    ]
  },
  'data-science': {
    id: 'data-science',
    title: 'Ciência de Dados',
    description: 'Análise avançada de dados e desenvolvimento de insights acionáveis.',
    details: [
      'Análise exploratória de dados complexos',
      'Desenvolvimento de dashboards e visualizações',
      'Modelagem estatística e econométrica',
      'Feature engineering e seleção de variáveis',
      'Validação e otimização de modelos',
      'Interpretabilidade e explicabilidade de IA'
    ],
    technologies: ['Python', 'R', 'SQL', 'Tableau', 'Power BI', 'Apache Spark']
  },
  'consulting': {
    id: 'consulting',
    title: 'Consultoria Estratégica',
    description: 'Consultoria especializada em transformação digital e IA empresarial.',
    details: [
      'Estratégia de implementação de IA',
      'Avaliação de maturidade em dados',
      'Roadmap de transformação digital',
      'Treinamento de equipes técnicas',
      'Governança de dados e MLOps',
      'ROI e métricas de sucesso em IA'
    ],
    technologies: ['Strategic Planning', 'Change Management', 'MLOps', 'Data Governance']
  },
  'regression': {
    id: 'regression',
    title: 'Modelos de Regressão',
    description: 'Predição de valores contínuos para otimização de negócios.',
    details: [
      'Regressão Linear e Polinomial',
      'Random Forest e Gradient Boosting',
      'Redes Neurais para regressão',
      'Regularização (Ridge, Lasso, Elastic Net)',
      'Validação cruzada e métricas de performance',
      'Aplicações em previsão de receita e demanda'
    ],
    technologies: ['Scikit-learn', 'XGBoost', 'LightGBM', 'TensorFlow', 'Statsmodels']
  },
  'classification': {
    id: 'classification',
    title: 'Algoritmos de Classificação',
    description: 'Categorização inteligente para tomada de decisões automatizadas.',
    details: [
      'Support Vector Machines (SVM)',
      'Random Forest e Decision Trees',
      'Redes Neurais para classificação',
      'Naive Bayes e Logistic Regression',
      'Ensemble methods e stacking',
      'Classificação de clientes e segmentos'
    ],
    technologies: ['Scikit-learn', 'PyTorch', 'Keras', 'CatBoost', 'Hyperopt']
  },
  'agentic-systems': {
    id: 'agentic-systems',
    title: 'Sistemas Agênticos',
    description: 'Agentes autônomos inteligentes para automação complexa.',
    details: [
      'Multi-agent systems com LangGraph',
      'Agentes especializados em tarefas específicas',
      'Coordenação e comunicação entre agentes',
      'Tomada de decisão autônoma',
      'Integração com APIs e serviços externos',
      'Monitoramento e logging de ações'
    ],
    technologies: ['LangGraph', 'CrewAI', 'AutoGen', 'PydanticAI', 'OpenAI', 'Anthropic']
  },
  'rag': {
    id: 'rag',
    title: 'RAG Systems',
    description: 'Sistemas de recuperação e geração aumentada para conhecimento contextual.',
    details: [
      'Chunking inteligente de documentos',
      'Embeddings e busca vetorial',
      'Prompt engineering avançado',
      'Context window optimization',
      'Multi-modal RAG (texto, imagem, áudio)',
      'Avaliação de qualidade de respostas'
    ],
    technologies: ['LangChain', 'ChromaDB', 'Pinecone', 'FAISS', 'Ollama', 'Hugging Face']
  }
};

export default function NodeInfoPanel({ nodeId, onClose }: NodeInfoPanelProps) {
  const nodeInfo = nodeId ? nodeInfoData[nodeId] : null;

  return (
    <AnimatePresence>
      {nodeInfo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-gray-900/95 backdrop-blur-md rounded-2xl border border-cyan-500/30 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-gray-900/95 backdrop-blur-md p-6 border-b border-cyan-500/20">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
                    {nodeInfo.title}
                  </h2>
                  <p className="text-gray-300">
                    {nodeInfo.description}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Details */}
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Detalhes</h3>
                <ul className="space-y-2">
                  {nodeInfo.details.map((detail, index) => (
                    <li key={index} className="flex items-start space-x-2 text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              {nodeInfo.technologies && (
                <div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-3">Tecnologias</h3>
                  <div className="flex flex-wrap gap-2">
                    {nodeInfo.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-full text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Links */}
              {nodeInfo.links && (
                <div>
                  <h3 className="text-lg font-semibold text-pink-400 mb-3">Links</h3>
                  <div className="space-y-2">
                    {nodeInfo.links.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors group"
                      >
                        {link.icon}
                        <span>{link.label}</span>
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
