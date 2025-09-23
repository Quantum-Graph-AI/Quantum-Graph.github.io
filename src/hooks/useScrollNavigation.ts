import { useCallback, useEffect, useRef, useState } from 'react';

export interface IntersectionEntry {
  id: string;
  isIntersecting: boolean;
  intersectionRatio: number;
  element: HTMLElement;
}

export interface ScrollSection {
  id: string;
  element: HTMLElement;
  offsetTop: number;
  height: number;
}

export interface ScrollNavigationOptions {
  sections: string[];
  offset?: number;
  threshold?: number;
  scrollSpeed?: number;
  enableKeyboardNavigation?: boolean;
  enableWheelNavigation?: boolean;
  wheelThrottleMs?: number;
}

export interface ScrollNavigationState {
  currentSection: string;
  isScrolling: boolean;
  direction: 'up' | 'down' | null;
  progress: number;
}

const DEFAULT_OPTIONS: Required<ScrollNavigationOptions> = {
  sections: [],
  offset: 80,
  threshold: 0.5,
  scrollSpeed: 800,
  enableKeyboardNavigation: true,
  enableWheelNavigation: true,
  wheelThrottleMs: 1000,
};

export const useScrollNavigation = (options: ScrollNavigationOptions) => {
  const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
  const {
    sections,
    offset,
    threshold,
    scrollSpeed,
    enableKeyboardNavigation,
    enableWheelNavigation,
    wheelThrottleMs,
  } = mergedOptions;

  const [state, setState] = useState<ScrollNavigationState>({
    currentSection: sections[0] || '',
    isScrolling: false,
    direction: null,
    progress: 0,
  });

  const sectionsRef = useRef<ScrollSection[]>([]);
  const isScrollingRef = useRef(false);
  const lastScrollTimeRef = useRef(0);
  const lastScrollYRef = useRef(0);
  const wheelTimeoutRef = useRef<NodeJS.Timeout>();
  const observerRef = useRef<IntersectionObserver | null>(null);
  const intersectingRef = useRef<Map<string, IntersectionEntry>>(new Map());

  // Throttle function for performance optimization
  const throttle = useCallback((func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout | null = null;
    let lastExecTime = 0;

    return (...args: any[]) => {
      const currentTime = Date.now();

      if (currentTime - lastExecTime > delay) {
        func(...args);
        lastExecTime = currentTime;
      } else {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func(...args);
          lastExecTime = Date.now();
        }, delay - (currentTime - lastExecTime));
      }
    };
  }, []);

  // Initialize Intersection Observer for better performance
  const initializeIntersectionObserver = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: `-${offset}px 0px -${Math.round((1 - threshold) * 100)}% 0px`,
      threshold: [0, 0.25, 0.5, 0.75, 1.0],
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        intersectingRef.current.set(id, {
          id,
          isIntersecting: entry.isIntersecting,
          intersectionRatio: entry.intersectionRatio,
          element: entry.target as HTMLElement,
        });
      });

      // Update current section based on intersection data
      if (!isScrollingRef.current) {
        updateCurrentSectionFromIntersection();
      }
    }, observerOptions);

    // Observe all sections
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });
  }, [sections, offset, threshold]);

  // Initialize sections with their DOM elements and positions
  const initializeSections = useCallback(() => {
    const sectionElements: ScrollSection[] = [];

    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        sectionElements.push({
          id: sectionId,
          element,
          offsetTop: rect.top + window.pageYOffset,
          height: rect.height,
        });
      }
    });

    // Sort sections by their position on the page
    sectionElements.sort((a, b) => a.offsetTop - b.offsetTop);
    sectionsRef.current = sectionElements;

    // Initialize intersection observer after sections are ready
    initializeIntersectionObserver();
  }, [sections, initializeIntersectionObserver]);

  // Calculate scroll progress for the current section
  const calculateProgress = useCallback((currentSection: string) => {
    const section = sectionsRef.current.find(s => s.id === currentSection);
    if (!section) return 0;

    const scrollY = window.pageYOffset;
    const sectionTop = section.offsetTop - offset;
    const sectionHeight = section.height;
    const progress = Math.max(0, Math.min(1, (scrollY - sectionTop) / sectionHeight));

    return progress;
  }, [offset]);

  // Update current section based on intersection observer data
  const updateCurrentSectionFromIntersection = useCallback(() => {
    const intersectingSections = Array.from(intersectingRef.current.values())
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => {
        // Sort by intersection ratio descending, then by document order
        if (b.intersectionRatio !== a.intersectionRatio) {
          return b.intersectionRatio - a.intersectionRatio;
        }
        const aIndex = sections.indexOf(a.id);
        const bIndex = sections.indexOf(b.id);
        return aIndex - bIndex;
      });

    if (intersectingSections.length > 0) {
      const newSection = intersectingSections[0].id;
      const newProgress = calculateProgress(newSection);

      setState(prev => ({
        ...prev,
        currentSection: newSection,
        progress: newProgress,
      }));
    }
  }, [sections, calculateProgress]);

  // Get current visible section based on scroll position (fallback method)
  const getCurrentSection = useCallback(() => {
    const scrollY = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Handle edge case: at the very bottom of the page
    if (scrollY + windowHeight >= documentHeight - 10) {
      return sectionsRef.current[sectionsRef.current.length - 1]?.id || '';
    }

    for (let i = 0; i < sectionsRef.current.length; i++) {
      const section = sectionsRef.current[i];
      const sectionTop = section.offsetTop - offset;
      const sectionBottom = sectionTop + section.height;
      const sectionCenter = sectionTop + (section.height * threshold);

      if (scrollY + windowHeight * threshold >= sectionCenter && scrollY < sectionBottom) {
        return section.id;
      }
    }

    return sectionsRef.current[0]?.id || '';
  }, [offset, threshold]);

  // Smooth scroll to a specific section
  const scrollToSection = useCallback((sectionId: string) => {
    const section = sectionsRef.current.find(s => s.id === sectionId);
    if (!section || isScrollingRef.current) return;

    isScrollingRef.current = true;
    setState(prev => ({ ...prev, isScrolling: true }));

    const targetPosition = section.offsetTop - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    const animateScroll = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / scrollSpeed, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * ease);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        isScrollingRef.current = false;
        setState(prev => ({ ...prev, isScrolling: false }));
      }
    };

    requestAnimationFrame(animateScroll);
  }, [offset, scrollSpeed]);

  // Navigate to next section
  const scrollToNext = useCallback(() => {
    const currentIndex = sectionsRef.current.findIndex(s => s.id === state.currentSection);
    const nextIndex = Math.min(currentIndex + 1, sectionsRef.current.length - 1);
    const nextSection = sectionsRef.current[nextIndex];

    if (nextSection && nextIndex > currentIndex) {
      scrollToSection(nextSection.id);
    }
  }, [state.currentSection, scrollToSection]);

  // Navigate to previous section
  const scrollToPrevious = useCallback(() => {
    const currentIndex = sectionsRef.current.findIndex(s => s.id === state.currentSection);
    const prevIndex = Math.max(currentIndex - 1, 0);
    const prevSection = sectionsRef.current[prevIndex];

    if (prevSection && prevIndex < currentIndex) {
      scrollToSection(prevSection.id);
    }
  }, [state.currentSection, scrollToSection]);

  // Handle scroll events
  const handleScroll = useCallback(
    throttle(() => {
      if (isScrollingRef.current) return;

      const currentScrollY = window.pageYOffset;
      const direction = currentScrollY > lastScrollYRef.current ? 'down' : 'up';
      lastScrollYRef.current = currentScrollY;

      const currentSection = getCurrentSection();
      const progress = calculateProgress(currentSection);

      setState(prev => ({
        ...prev,
        currentSection,
        direction,
        progress,
      }));
    }, 16), // ~60fps
    [getCurrentSection, calculateProgress]
  );

  // Handle wheel events for section-based navigation
  const handleWheel = useCallback((e: WheelEvent) => {
    if (!enableWheelNavigation || isScrollingRef.current) return;

    const now = Date.now();
    if (now - lastScrollTimeRef.current < wheelThrottleMs) return;

    e.preventDefault();
    lastScrollTimeRef.current = now;

    if (e.deltaY > 0) {
      scrollToNext();
    } else if (e.deltaY < 0) {
      scrollToPrevious();
    }

    // Clear any existing timeout and set a new one
    if (wheelTimeoutRef.current) {
      clearTimeout(wheelTimeoutRef.current);
    }
    wheelTimeoutRef.current = setTimeout(() => {
      lastScrollTimeRef.current = 0;
    }, wheelThrottleMs);
  }, [enableWheelNavigation, wheelThrottleMs, scrollToNext, scrollToPrevious]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!enableKeyboardNavigation || isScrollingRef.current) return;

    switch (e.key) {
      case 'ArrowDown':
      case 'PageDown':
      case ' ': // Space bar
        e.preventDefault();
        scrollToNext();
        break;
      case 'ArrowUp':
      case 'PageUp':
        e.preventDefault();
        scrollToPrevious();
        break;
      case 'Home':
        e.preventDefault();
        scrollToSection(sectionsRef.current[0]?.id || '');
        break;
      case 'End':
        e.preventDefault();
        scrollToSection(sectionsRef.current[sectionsRef.current.length - 1]?.id || '');
        break;
    }
  }, [enableKeyboardNavigation, scrollToNext, scrollToPrevious, scrollToSection]);

  // Setup event listeners and initialize sections
  useEffect(() => {
    initializeSections();

    // Set initial section
    const initialSection = getCurrentSection();
    setState(prev => ({
      ...prev,
      currentSection: initialSection,
      progress: calculateProgress(initialSection),
    }));

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', initializeSections);

    if (enableWheelNavigation) {
      window.addEventListener('wheel', handleWheel, { passive: false });
    }

    if (enableKeyboardNavigation) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', initializeSections);

      if (enableWheelNavigation) {
        window.removeEventListener('wheel', handleWheel);
      }

      if (enableKeyboardNavigation) {
        window.removeEventListener('keydown', handleKeyDown);
      }

      if (wheelTimeoutRef.current) {
        clearTimeout(wheelTimeoutRef.current);
      }

      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      intersectingRef.current.clear();
    };
  }, [
    initializeSections,
    getCurrentSection,
    calculateProgress,
    handleScroll,
    handleWheel,
    handleKeyDown,
    enableWheelNavigation,
    enableKeyboardNavigation,
  ]);

  return {
    ...state,
    sections: sectionsRef.current,
    scrollToSection,
    scrollToNext,
    scrollToPrevious,
  };
};