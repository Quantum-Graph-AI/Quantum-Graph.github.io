'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import {
  Linkedin,
  Github,
  Twitter,
  Award,
  BookOpen,
  Users,
  Code,
  Brain,
  Zap
} from 'lucide-react';

export default function FounderSection() {
  const { t } = useLanguage();

  const achievements = [
    {
      icon: Award,
      title: 'AI Innovation Leader',
      description: 'Recognized expert in quantum computing and AI integration',
    },
    {
      icon: BookOpen,
      title: 'Published Researcher',
      description: 'Multiple publications in leading AI and quantum computing journals',
    },
    {
      icon: Users,
      title: 'Team Builder',
      description: 'Led diverse teams of engineers and researchers across multiple projects',
    },
  ];

  const expertise = [
    {
      icon: Brain,
      skill: 'Artificial Intelligence',
      level: 95,
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Code,
      skill: 'Software Architecture',
      level: 90,
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Zap,
      skill: 'Quantum Computing',
      level: 85,
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section id="founder" className="py-24 bg-gray-50 dark:bg-gray-900">
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
              {t.founder.title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t.founder.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            {/* Profile Image */}
            <div className="relative inline-block mb-8">
              <div className="w-64 h-64 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-1">
                <div className="w-full h-full rounded-2xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                  {/* Placeholder for profile photo */}
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">
                      {t.founder.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-pulse animation-delay-2000"></div>
            </div>

            {/* Name and Role */}
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {t.founder.name}
            </h3>
            <p className="text-xl text-blue-600 dark:text-blue-400 mb-4">
              {t.founder.role}
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              {t.founder.experience}
            </p>

            {/* Bio */}
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
              {t.founder.bio}
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 justify-center lg:justify-start">
              <a
                href="https://linkedin.com/in/davi-castro-samora"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/davi-castro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-800 text-white rounded-xl hover:bg-gray-900 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/davi_castro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-blue-400 text-white rounded-xl hover:bg-blue-500 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Right Column - Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Expertise */}
            <div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Core Expertise
              </h4>
              <div className="space-y-6">
                {expertise.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center mb-2">
                      <item.icon className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                      <span className="font-medium text-gray-900 dark:text-white">
                        {item.skill}
                      </span>
                      <span className="ml-auto text-sm text-gray-600 dark:text-gray-400">
                        {item.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full bg-gradient-to-r ${item.color}`}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Technical Skills
              </h4>
              <div className="flex flex-wrap gap-3">
                {t.founder.skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Key Achievements
              </h4>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <achievement.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {achievement.title}
                      </h5>
                      <p className="text-gray-600 dark:text-gray-400">
                        {achievement.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg">
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-white italic mb-6">
              "The future belongs to those who understand both the power of artificial intelligence and the quantum realm that underpins reality itself."
            </blockquote>
            <cite className="text-blue-600 dark:text-blue-400 font-semibold">
              — {t.founder.name}
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
}