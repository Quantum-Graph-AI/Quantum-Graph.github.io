'use client';

import React from 'react';
import { ChevronUp, ChevronDown, Circle } from 'lucide-react';

export interface ScrollProgressIndicatorProps {
  sections: Array<{ id: string; name: string }>;
  currentSection: string;
  progress: number;
  onSectionClick: (sectionId: string) => void;
  onScrollUp: () => void;
  onScrollDown: () => void;
  className?: string;
}

export const ScrollProgressIndicator: React.FC<ScrollProgressIndicatorProps> = ({
  sections,
  currentSection,
  progress,
  onSectionClick,
  onScrollUp,
  onScrollDown,
  className = '',
}) => {
  const currentIndex = sections.findIndex(section => section.id === currentSection);
  const canScrollUp = currentIndex > 0;
  const canScrollDown = currentIndex < sections.length - 1;

  return (
    <div className={`fixed right-6 top-1/2 transform -translate-y-1/2 z-50 ${className}`}>
      <div className="glass rounded-full p-4 shadow-lg">
        {/* Scroll Up Button */}
        <button
          onClick={onScrollUp}
          disabled={!canScrollUp}
          className={`
            mb-4 p-2 rounded-full transition-all duration-300
            ${canScrollUp
              ? 'text-quantum-cyan hover:text-quantum-cyan/80 hover:bg-quantum-cyan/10 cursor-pointer'
              : 'text-muted-foreground/40 cursor-not-allowed'
            }
          `}
          aria-label="Scroll to previous section"
        >
          <ChevronUp size={20} />
        </button>

        {/* Section Dots */}
        <div className="space-y-3">
          {sections.map((section, index) => {
            const isActive = section.id === currentSection;
            const isPassed = index < currentIndex;

            return (
              <div key={section.id} className="relative flex items-center">
                <button
                  onClick={() => onSectionClick(section.id)}
                  className={`
                    relative w-3 h-3 rounded-full transition-all duration-300 cursor-pointer
                    ${isActive
                      ? 'bg-quantum-cyan scale-125'
                      : isPassed
                        ? 'bg-muted-foreground'
                        : 'bg-muted-foreground/40 hover:bg-muted-foreground/60'
                    }
                  `}
                  aria-label={`Go to ${section.name}`}
                >
                  {/* Progress indicator for active section */}
                  {isActive && (
                    <div
                      className="absolute inset-0 rounded-full border-2 border-quantum-cyan/60"
                      style={{
                        background: `conic-gradient(from 0deg, transparent ${(1 - progress) * 360}deg, hsl(var(--quantum-cyan) / 0.3) ${(1 - progress) * 360}deg)`,
                      }}
                    />
                  )}
                </button>

                {/* Section name tooltip */}
                <div
                  className={`
                    absolute right-8 px-3 py-1 glass-strong text-sm rounded-md
                    whitespace-nowrap opacity-0 pointer-events-none transition-all duration-300
                    transform translate-x-2
                    hover:opacity-100 hover:pointer-events-auto hover:translate-x-0
                    ${isActive ? 'text-quantum-cyan' : 'text-foreground'}
                  `}
                >
                  {section.name}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-surface-elevated" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Scroll Down Button */}
        <button
          onClick={onScrollDown}
          disabled={!canScrollDown}
          className={`
            mt-4 p-2 rounded-full transition-all duration-300
            ${canScrollDown
              ? 'text-quantum-cyan hover:text-quantum-cyan/80 hover:bg-quantum-cyan/10 cursor-pointer'
              : 'text-muted-foreground/40 cursor-not-allowed'
            }
          `}
          aria-label="Scroll to next section"
        >
          <ChevronDown size={20} />
        </button>
      </div>
    </div>
  );
};

export default ScrollProgressIndicator;