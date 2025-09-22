'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ConsultingSection from '@/components/ConsultingSection';
import FounderSection from '@/components/FounderSection';
import BlogSection from '@/components/BlogSection';
import QuantumSection from '@/components/QuantumSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function CorporatePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ConsultingSection />
        <FounderSection />
        <BlogSection />
        <QuantumSection />
        <TeamSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}