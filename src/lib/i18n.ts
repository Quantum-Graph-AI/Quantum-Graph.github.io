export type Language = 'pt' | 'en';

export interface Translations {
  // Navigation
  nav: {
    home: string;
    about: string;
    services: string;
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
  
  // Contact Section
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
      success: string;
      error: string;
    };
    info: {
      email: string;
      linkedin: string;
      github: string;
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
    contact: {
      title: 'Entre em Contato',
      subtitle: 'Vamos Conversar Sobre Seu Projeto',
      form: {
        name: 'Nome',
        email: 'E-mail',
        message: 'Mensagem',
        send: 'Enviar Mensagem',
        success: 'Mensagem enviada com sucesso!',
        error: 'Erro ao enviar mensagem. Tente novamente.',
      },
      info: {
        email: 'contato@quantumgraph.ai',
        linkedin: 'LinkedIn',
        github: 'GitHub',
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
    contact: {
      title: 'Get in Touch',
      subtitle: 'Let\'s Talk About Your Project',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message',
        success: 'Message sent successfully!',
        error: 'Error sending message. Please try again.',
      },
      info: {
        email: 'contact@quantumgraph.ai',
        linkedin: 'LinkedIn',
        github: 'GitHub',
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
