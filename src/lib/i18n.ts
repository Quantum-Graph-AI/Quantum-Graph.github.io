export type Language = 'pt' | 'en';

export interface Translations {
  // Navigation
  nav: {
    home: string;
    about: string;
    services: string;
    projects: string;
    consulting: string;
    founder: string;
    blog: string;
    quantum: string;
    team: string;
    contact: string;
  };
  
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
    learnMore: string;
  };
  
  // About Section
  about: {
    title: string;
    subtitle: string;
    description: string;
    mission: string;
    vision: string;
    values: string;
  };
  
  // Services Section
  services: {
    title: string;
    subtitle: string;
    service1: {
      title: string;
      description: string;
    };
    service2: {
      title: string;
      description: string;
    };
    service3: {
      title: string;
      description: string;
    };
  };
  
  // Team Section
  team: {
    title: string;
    subtitle: string;
    founder: {
      name: string;
      role: string;
      bio: string;
    };
  };
  
  // Projects Section
  projects: {
    title: string;
    subtitle: string;
    viewGitHub: string;
    liveDDemo: string;
    technologies: string;
  };

  // Consulting Section
  consulting: {
    title: string;
    subtitle: string;
    service1: {
      title: string;
      description: string;
      features: string[];
    };
    service2: {
      title: string;
      description: string;
      features: string[];
    };
    service3: {
      title: string;
      description: string;
      features: string[];
    };
    cta: string;
  };

  // Founder Section
  founder: {
    title: string;
    subtitle: string;
    name: string;
    role: string;
    bio: string;
    experience: string;
    skills: string[];
    social: {
      linkedin: string;
      github: string;
      twitter: string;
    };
  };

  // Blog Section
  blog: {
    title: string;
    subtitle: string;
    readMore: string;
    publishedOn: string;
    viewAllArticles: string;
  };

  // Quantum Section
  quantum: {
    title: string;
    subtitle: string;
    description: string;
    features: {
      title: string;
      description: string;
    }[];
    cta: string;
  };

  // Contact Section
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      company: string;
      subject: string;
      message: string;
      send: string;
      success: string;
      error: string;
      required: string;
    };
    info: {
      email: string;
      linkedin: string;
      github: string;
      location: string;
    };
  };
  
  // Footer
  footer: {
    copyright: string;
    rights: string;
  };
}

export const translations: Record<Language, Translations> = {
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      services: 'Serviços',
      projects: 'Projetos',
      consulting: 'Consultoria',
      founder: 'Fundador',
      blog: 'Blog',
      quantum: 'Quantum',
      team: 'Equipe',
      contact: 'Contato',
    },
    hero: {
      title: 'QuantumGraph',
      subtitle: 'Inteligência Artificial de Nova Geração',
      description: 'Transformamos dados em insights poderosos através de tecnologias quânticas avançadas e inteligência artificial de última geração.',
      cta: 'Comece Agora',
      learnMore: 'Saiba Mais',
    },
    about: {
      title: 'Sobre a QuantumGraph',
      subtitle: 'Pioneiros em IA Quântica',
      description: 'A QuantumGraph está na vanguarda da revolução da inteligência artificial, combinando computação quântica com algoritmos de machine learning avançados para resolver os problemas mais complexos do mundo.',
      mission: 'Acelerar a descoberta científica e inovação através de IA quântica.',
      vision: 'Um futuro onde a computação quântica democratiza o acesso a insights poderosos.',
      values: 'Inovação, Precisão, Colaboração e Impacto Social.',
    },
    services: {
      title: 'Nossos Serviços',
      subtitle: 'Soluções Quânticas para Desafios Complexos',
      service1: {
        title: 'Algoritmos Quânticos',
        description: 'Desenvolvimento de algoritmos quânticos personalizados para otimização, simulação e análise de dados complexos.',
      },
      service2: {
        title: 'Machine Learning Quântico',
        description: 'Implementação de modelos de ML que aproveitam o poder da computação quântica para acelerar o processamento.',
      },
      service3: {
        title: 'Consultoria em IA',
        description: 'Consultoria estratégica para integração de tecnologias de IA quântica em processos empresariais.',
      },
    },
    team: {
      title: 'Nossa Equipe',
      subtitle: 'Líderes em Inovação Quântica',
      founder: {
        name: 'Davi Castro Samora',
        role: 'Fundador & CEO',
        bio: 'Especialista em inteligência artificial e computação quântica, com paixão por transformar ideias inovadoras em soluções práticas.',
      },
    },
    projects: {
      title: 'Nossos Projetos',
      subtitle: 'Inovações em IA e Computação Quântica',
      viewGitHub: 'Ver no GitHub',
      liveDDemo: 'Demo ao Vivo',
      technologies: 'Tecnologias',
    },
    consulting: {
      title: 'Serviços de Consultoria',
      subtitle: 'Soluções Personalizadas em IA',
      service1: {
        title: 'Estratégia em IA',
        description: 'Desenvolvemos estratégias abrangentes para implementação de IA em sua organização.',
        features: ['Análise de viabilidade', 'Roadmap de implementação', 'ROI e métricas', 'Treinamento de equipes'],
      },
      service2: {
        title: 'Desenvolvimento Custom',
        description: 'Criamos soluções de IA personalizadas para seus desafios específicos.',
        features: ['Machine Learning', 'Deep Learning', 'NLP e Visão Computacional', 'Integração de APIs'],
      },
      service3: {
        title: 'Otimização e Escalabilidade',
        description: 'Otimizamos sistemas existentes e preparamos para crescimento.',
        features: ['Performance Tuning', 'Arquitetura Cloud', 'MLOps e DevOps', 'Monitoramento contínuo'],
      },
      cta: 'Agendar Consulta',
    },
    founder: {
      title: 'Fundador',
      subtitle: 'Liderança em Inovação',
      name: 'Davi Castro Samora',
      role: 'Fundador & CEO',
      bio: 'Especialista em inteligência artificial e computação quântica, com mais de 10 anos de experiência em desenvolvimento de soluções inovadoras.',
      experience: '10+ anos em IA e Tecnologia',
      skills: ['Inteligência Artificial', 'Machine Learning', 'Computação Quântica', 'Arquitetura de Software', 'Liderança Técnica'],
      social: {
        linkedin: 'LinkedIn',
        github: 'GitHub',
        twitter: 'Twitter',
      },
    },
    blog: {
      title: 'Blog & Insights',
      subtitle: 'Pensamentos sobre IA e Futuro',
      readMore: 'Ler Mais',
      publishedOn: 'Publicado em',
      viewAllArticles: 'Ver Todos os Artigos',
    },
    quantum: {
      title: 'Futuro Quântico',
      subtitle: 'A Próxima Revolução Tecnológica',
      description: 'Exploramos as fronteiras da computação quântica e seu potencial para transformar a inteligência artificial.',
      features: [
        {
          title: 'Algoritmos Quânticos',
          description: 'Desenvolvimento de algoritmos que aproveitam os princípios da mecânica quântica.',
        },
        {
          title: 'Supremacia Quântica',
          description: 'Pesquisa em problemas que computadores clássicos não conseguem resolver eficientemente.',
        },
        {
          title: 'IA Quântica',
          description: 'Integração de machine learning com processamento quântico para acelerar descobertas.',
        },
      ],
      cta: 'Explorar Tecnologias',
    },
    contact: {
      title: 'Entre em Contato',
      subtitle: 'Vamos Conversar Sobre Seu Projeto',
      form: {
        name: 'Nome',
        email: 'E-mail',
        company: 'Empresa',
        subject: 'Assunto',
        message: 'Mensagem',
        send: 'Enviar Mensagem',
        success: 'Mensagem enviada com sucesso!',
        error: 'Erro ao enviar mensagem. Tente novamente.',
        required: 'Campo obrigatório',
      },
      info: {
        email: 'contato@quantumgraph.ai',
        linkedin: 'LinkedIn',
        github: 'GitHub',
        location: 'São Paulo, Brasil',
      },
    },
    footer: {
      copyright: '© 2025 QuantumGraph.',
      rights: 'Todos os direitos reservados.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      consulting: 'Consulting',
      founder: 'Founder',
      blog: 'Blog',
      quantum: 'Quantum',
      team: 'Team',
      contact: 'Contact',
    },
    hero: {
      title: 'QuantumGraph',
      subtitle: 'Next-Generation Artificial Intelligence',
      description: 'We transform data into powerful insights through advanced quantum technologies and cutting-edge artificial intelligence.',
      cta: 'Get Started',
      learnMore: 'Learn More',
    },
    about: {
      title: 'About QuantumGraph',
      subtitle: 'Pioneers in Quantum AI',
      description: 'QuantumGraph is at the forefront of the artificial intelligence revolution, combining quantum computing with advanced machine learning algorithms to solve the world\'s most complex problems.',
      mission: 'Accelerate scientific discovery and innovation through quantum AI.',
      vision: 'A future where quantum computing democratizes access to powerful insights.',
      values: 'Innovation, Precision, Collaboration, and Social Impact.',
    },
    services: {
      title: 'Our Services',
      subtitle: 'Quantum Solutions for Complex Challenges',
      service1: {
        title: 'Quantum Algorithms',
        description: 'Development of custom quantum algorithms for optimization, simulation, and complex data analysis.',
      },
      service2: {
        title: 'Quantum Machine Learning',
        description: 'Implementation of ML models that harness the power of quantum computing to accelerate processing.',
      },
      service3: {
        title: 'AI Consulting',
        description: 'Strategic consulting for integrating quantum AI technologies into business processes.',
      },
    },
    team: {
      title: 'Our Team',
      subtitle: 'Leaders in Quantum Innovation',
      founder: {
        name: 'Davi Castro Samora',
        role: 'Founder & CEO',
        bio: 'Expert in artificial intelligence and quantum computing, with a passion for transforming innovative ideas into practical solutions.',
      },
    },
    projects: {
      title: 'Our Projects',
      subtitle: 'Innovations in AI and Quantum Computing',
      viewGitHub: 'View on GitHub',
      liveDDemo: 'Live Demo',
      technologies: 'Technologies',
    },
    consulting: {
      title: 'Consulting Services',
      subtitle: 'Custom AI Solutions',
      service1: {
        title: 'AI Strategy',
        description: 'We develop comprehensive strategies for AI implementation in your organization.',
        features: ['Feasibility Analysis', 'Implementation Roadmap', 'ROI and Metrics', 'Team Training'],
      },
      service2: {
        title: 'Custom Development',
        description: 'We create personalized AI solutions for your specific challenges.',
        features: ['Machine Learning', 'Deep Learning', 'NLP and Computer Vision', 'API Integration'],
      },
      service3: {
        title: 'Optimization & Scalability',
        description: 'We optimize existing systems and prepare them for growth.',
        features: ['Performance Tuning', 'Cloud Architecture', 'MLOps and DevOps', 'Continuous Monitoring'],
      },
      cta: 'Schedule Consultation',
    },
    founder: {
      title: 'Founder',
      subtitle: 'Leadership in Innovation',
      name: 'Davi Castro Samora',
      role: 'Founder & CEO',
      bio: 'Expert in artificial intelligence and quantum computing, with over 10 years of experience developing innovative solutions.',
      experience: '10+ years in AI and Technology',
      skills: ['Artificial Intelligence', 'Machine Learning', 'Quantum Computing', 'Software Architecture', 'Technical Leadership'],
      social: {
        linkedin: 'LinkedIn',
        github: 'GitHub',
        twitter: 'Twitter',
      },
    },
    blog: {
      title: 'Blog & Insights',
      subtitle: 'Thoughts on AI and the Future',
      readMore: 'Read More',
      publishedOn: 'Published on',
      viewAllArticles: 'View All Articles',
    },
    quantum: {
      title: 'Quantum Future',
      subtitle: 'The Next Technological Revolution',
      description: 'We explore the frontiers of quantum computing and its potential to transform artificial intelligence.',
      features: [
        {
          title: 'Quantum Algorithms',
          description: 'Development of algorithms that harness the principles of quantum mechanics.',
        },
        {
          title: 'Quantum Supremacy',
          description: 'Research on problems that classical computers cannot solve efficiently.',
        },
        {
          title: 'Quantum AI',
          description: 'Integration of machine learning with quantum processing to accelerate discoveries.',
        },
      ],
      cta: 'Explore Technologies',
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Let\'s Talk About Your Project',
      form: {
        name: 'Name',
        email: 'Email',
        company: 'Company',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message',
        success: 'Message sent successfully!',
        error: 'Error sending message. Please try again.',
        required: 'Required field',
      },
      info: {
        email: 'contact@quantumgraph.ai',
        linkedin: 'LinkedIn',
        github: 'GitHub',
        location: 'São Paulo, Brazil',
      },
    },
    footer: {
      copyright: '© 2025 QuantumGraph.',
      rights: 'All rights reserved.',
    },
  },
};

export const getTranslation = (language: Language): Translations => {
  return translations[language];
};
