'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  firstPublishedAt: string;
  readingTime: number;
  virtuals: {
    previewImage: {
      imageId: string;
    };
  };
  uniqueSlug: string;
  tags: Array<{
    name: string;
    slug: string;
  }>;
}

export default function BlogSection() {
  const { t } = useLanguage();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // For static export, we'll use mock data
        // In production, you would fetch from Medium API or RSS feed
        const mockPosts: BlogPost[] = [
          {
            id: '1',
            title: 'The Future of Quantum Machine Learning',
            subtitle: 'Exploring the intersection of quantum computing and artificial intelligence',
            firstPublishedAt: '2025-01-15T10:00:00Z',
            readingTime: 8,
            virtuals: {
              previewImage: {
                imageId: 'quantum-ml-preview',
              },
            },
            uniqueSlug: 'quantum-machine-learning-future',
            tags: [
              { name: 'Quantum Computing', slug: 'quantum-computing' },
              { name: 'Machine Learning', slug: 'machine-learning' },
              { name: 'AI', slug: 'artificial-intelligence' },
            ],
          },
          {
            id: '2',
            title: 'Building Scalable AI Systems with Quantum Advantages',
            subtitle: 'How quantum algorithms can revolutionize traditional machine learning workflows',
            firstPublishedAt: '2025-01-10T14:30:00Z',
            readingTime: 12,
            virtuals: {
              previewImage: {
                imageId: 'scalable-ai-preview',
              },
            },
            uniqueSlug: 'scalable-ai-quantum-advantages',
            tags: [
              { name: 'Architecture', slug: 'architecture' },
              { name: 'Scalability', slug: 'scalability' },
              { name: 'Quantum', slug: 'quantum' },
            ],
          },
          {
            id: '3',
            title: 'The Quantum Computing Revolution in Business',
            subtitle: 'Real-world applications and opportunities for enterprises',
            firstPublishedAt: '2025-01-05T09:15:00Z',
            readingTime: 6,
            virtuals: {
              previewImage: {
                imageId: 'quantum-business-preview',
              },
            },
            uniqueSlug: 'quantum-computing-business-revolution',
            tags: [
              { name: 'Business', slug: 'business' },
              { name: 'Enterprise', slug: 'enterprise' },
              { name: 'Innovation', slug: 'innovation' },
            ],
          },
        ];

        setPosts(mockPosts);
        setLoading(false);
      } catch (err) {
        setError('Failed to load blog posts');
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getPreviewImage = (imageId: string) => {
    // Placeholder gradient images for blog posts
    const gradients = [
      'from-blue-500 to-purple-600',
      'from-green-500 to-blue-600',
      'from-purple-500 to-pink-600',
    ];
    return gradients[Math.abs(imageId.length) % gradients.length];
  };

  if (loading) {
    return (
      <section id="blog" className="py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Loading blog posts...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="blog" className="py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-600 dark:text-red-400">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-24 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {t.blog.title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t.blog.subtitle}
          </p>
        </motion.div>

        {/* Featured Post */}
        {posts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className={`h-64 lg:h-full bg-gradient-to-br ${getPreviewImage(posts[0].virtuals.previewImage.imageId)} flex items-center justify-center`}>
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">Featured Article</h3>
                    <p className="text-lg opacity-90">Latest Insights</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{t.blog.publishedOn} {formatDate(posts[0].firstPublishedAt)}</span>
                    <Clock className="w-4 h-4 ml-6 mr-2" />
                    <span>{posts[0].readingTime} min read</span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {posts[0].title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
                    {posts[0].subtitle}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {posts[0].tags.map((tag) => (
                      <span
                        key={tag.slug}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`https://medium.com/@quantumgraph/${posts[0].uniqueSlug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    {t.blog.readMore}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Posts Grid */}
        {posts.length > 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {posts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className={`h-48 bg-gradient-to-br ${getPreviewImage(post.virtuals.previewImage.imageId)} flex items-center justify-center`}>
                    <div className="text-white text-center">
                      <h4 className="text-lg font-semibold">Blog Post</h4>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{formatDate(post.firstPublishedAt)}</span>
                      <Clock className="w-4 h-4 ml-4 mr-2" />
                      <span>{post.readingTime} min</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                      {post.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag.slug}
                          className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>

                    <a
                      href={`https://medium.com/@quantumgraph/${post.uniqueSlug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors mt-auto"
                    >
                      {t.blog.readMore}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://medium.com/@quantumgraph"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <span>{t.blog.viewAllArticles}</span>
            <ExternalLink className="w-5 h-5 ml-2" />
          </a>
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Stay Updated with Latest Insights
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get notified when we publish new articles about AI, quantum computing, and the future of technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}