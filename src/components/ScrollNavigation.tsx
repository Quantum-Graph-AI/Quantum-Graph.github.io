'use client';

import React, { useEffect, useState } from 'react';
import { useScrollNavigation } from '@/hooks/useScrollNavigation';
import ScrollProgressIndicator from './ScrollProgressIndicator';

export interface ScrollNavigationProps {
  className?: string;
  showProgressIndicator?: boolean;
  enableKeyboard?: boolean;
  enableWheel?: boolean;
  wheelThrottleMs?: number;
}

export const ScrollNavigation: React.FC<ScrollNavigationProps> = ({
  className = '',
  showProgressIndicator = true,
  enableKeyboard = true,
  enableWheel = false, // Disabled by default to not interfere with normal scrolling
  wheelThrottleMs = 1000,
}) => {
  const [mounted, setMounted] = useState(false);

  // Define sections with their display names
  const sectionData = [
    { id: 'home', name: 'Início' },
    { id: 'projects', name: 'Projetos' },
    { id: 'services', name: 'Consultoria' },
    { id: 'about', name: 'Fundador' },
    { id: 'blog', name: 'Blog' },
    { id: 'quantum', name: 'Quântica' },
    { id: 'contact', name: 'Contato' },
  ];

  const {
    currentSection,
    progress,
    isScrolling,
    direction,
    scrollToSection,
    scrollToNext,
    scrollToPrevious,
  } = useScrollNavigation({
    sections: sectionData.map(s => s.id),
    offset: 100, // Account for fixed header
    threshold: 0.3, // Section becomes active when 30% visible
    scrollSpeed: 800,
    enableKeyboardNavigation: enableKeyboard,
    enableWheelNavigation: enableWheel,
    wheelThrottleMs,
  });

  // Handle responsive behavior
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Don't render until mounted to avoid hydration issues
  if (!mounted) {
    return null;
  }

  // Hide on mobile to prevent UI clutter
  if (isMobile || !showProgressIndicator) {
    return null;
  }

  return (
    <div className={className}>
      <ScrollProgressIndicator
        sections={sectionData}
        currentSection={currentSection}
        progress={progress}
        onSectionClick={scrollToSection}
        onScrollUp={scrollToPrevious}
        onScrollDown={scrollToNext}
        className={isScrolling ? 'opacity-50' : 'opacity-100'}
      />

      {/* Optional: Show current section indicator */}
      <div className="fixed bottom-6 right-6 z-40">
        <div className="glass px-4 py-2 rounded-full border border-border">
          <div className="flex items-center space-x-2">
            <div
              className="w-2 h-2 rounded-full bg-quantum-cyan"
              style={{
                opacity: isScrolling ? 0.5 : 1,
              }}
            />
            <span className="text-sm text-foreground">
              {sectionData.find(s => s.id === currentSection)?.name || 'Navegando...'}
            </span>
            {direction && (
              <span className="text-xs text-muted-foreground">
                {direction === 'up' ? '↑' : '↓'}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Keyboard shortcuts help (only visible on focus or hover) */}
      <div className="fixed bottom-20 right-6 z-30 opacity-0 hover:opacity-100 focus-within:opacity-100 transition-opacity duration-300">
        <div className="glass-strong p-3 rounded-lg text-xs text-muted-foreground">
          <div className="font-semibold mb-2 text-foreground">Atalhos do Teclado:</div>
          <div className="space-y-1">
            <div>↑/↓ - Navegar seções</div>
            <div>PgUp/PgDn - Página anterior/próxima</div>
            <div>Home/End - Primeira/Última seção</div>
            <div>Espaço - Próxima seção</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollNavigation;