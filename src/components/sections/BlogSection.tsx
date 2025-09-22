'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ExternalLink, ArrowRight } from 'lucide-react';

const BlogSection = () => {
  // Sample blog posts - in production, these would come from Medium API or CMS
  const blogPosts = [
    {
      id: 1,
      title: 'O Futuro da Inteligência Artificial: Tendências para 2024',
      excerpt: 'Explorando as principais tendências em IA que moldarão o futuro dos negócios e da tecnologia.',
      category: 'Inteligência Artificial',
      readTime: '8 min',
      publishedAt: '15 Mar 2024',
      image: '/api/placeholder/400/250',
      link: 'https://medium.com/@davicastrosamora/futuro-ia-2024'
    },
    {
      id: 2,
      title: 'Sistemas Agênticos: A Nova Fronteira da Automação',
      excerpt: 'Como os sistemas multi-agentes estão revolucionando a forma como automatizamos processos complexos.',
      category: 'Sistemas Agênticos',
      readTime: '12 min',
      publishedAt: '08 Mar 2024',
      image: '/api/placeholder/400/250',
      link: 'https://medium.com/@davicastrosamora/sistemas-agenticos'
    },
    {
      id: 3,
      title: 'Computação Quântica: Mito ou Realidade?',
      excerpt: 'Desmistificando a computação quântica e suas aplicações práticas no mundo real.',
      category: 'Computação Quântica',
      readTime: '15 min',
      publishedAt: '01 Mar 2024',
      image: '/api/placeholder/400/250',
      link: 'https://medium.com/@davicastrosamora/computacao-quantica'
    }
  ];

  const categories = [
    'Inteligência Artificial',
    'Sistemas Agênticos',
    'Computação Quântica',
    'Machine Learning',
    'Data Science',
    'Open Source'
  ];

  return (
    <section id="blog" className="py-20 bg-black">
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
            Blog & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Insights</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Compartilhando conhecimento sobre IA, tecnologia e inovação.
            Insights práticos para profissionais e entusiastas da tecnologia.
          </p>
        </motion.div>

        {/* Featured Posts Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
              }}
            >
              {/* Post Image */}
              <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/80 to-purple-500/80 text-white text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <Calendar size={14} className="mr-2" />
                  <span className="mr-4">{post.publishedAt}</span>
                  <Clock size={14} className="mr-2" />
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <motion.a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <span className="font-medium">Ler mais</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Categories */}
        <motion.div
          className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Categorias de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Conteúdo</span>
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.span
                key={category}
                className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-full border border-gray-700/50 hover:border-gray-600/50 hover:bg-gray-700/50 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                {category}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-400/20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Fique por Dentro das Novidades
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Receba insights exclusivos sobre IA, artigos em primeira mão e atualizações
            sobre os últimos desenvolvimentos em tecnologia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 transition-colors"
            />
            <motion.button
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Inscrever-se
            </motion.button>
          </div>
        </motion.div>

        {/* Medium CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.a
            href="https://medium.com/@davicastrosamora"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gray-800 text-white font-semibold rounded-full border border-gray-600 hover:border-gray-500 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="mr-3" size={20} />
            Ver Todos os Artigos no Medium
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;