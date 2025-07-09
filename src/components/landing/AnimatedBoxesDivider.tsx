import React, { useEffect, useRef } from 'react';
import { Box, Factory } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface AnimatedBoxesDividerProps {
  className?: string;
}

const AnimatedBoxesDivider = ({ className = "" }: AnimatedBoxesDividerProps) => {
  const boxContainerRef = useRef<HTMLDivElement>(null);
  const timeoutRefs = useRef<NodeJS.Timeout[]>([]);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!boxContainerRef.current) return;

    const createBox = () => {
      const boxElement = document.createElement('div');
      boxElement.className = 'absolute top-1/2 transform -translate-y-1/2 box-production';
      boxElement.style.filter = 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))';
      
      const boxIcon = document.createElement('div');
      const boxSize = isMobile ? 20 : 32;
      const boxTypes = ['small', 'medium', 'large'];
      const boxType = boxTypes[Math.floor(Math.random() * boxTypes.length)];
      const gradientId = `box-gradient-${boxType}-${Date.now()}-${Math.random()}`;
      
      // Different colors for different box types
      const getBoxColor = (type: string) => {
        switch(type) {
          case 'small': return { start: '#6b7280', end: '#4b5563' }; // Gray boxes
          case 'medium': return { start: '#f59e0b', end: '#d97706' }; // Amber boxes
          case 'large': return { start: '#3b82f6', end: '#2563eb' }; // Blue boxes
          default: return { start: '#6b7280', end: '#4b5563' };
        }
      };
      
      const colors = getBoxColor(boxType);
      
      boxIcon.innerHTML = `
        <svg width="${boxSize}" height="${boxSize}" viewBox="0 0 24 24" fill="none" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <defs>
            <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:${colors.start};stop-opacity:1" />
              <stop offset="100%" style="stop-color:${colors.end};stop-opacity:1" />
            </linearGradient>
          </defs>
          <path fill="url(#${gradientId})" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline fill="none" stroke="#ffffff" stroke-width="1.5" points="3.29 7 12 12 20.71 7"/>
          <line fill="none" stroke="#ffffff" stroke-width="1.5" x1="12" y1="22" x2="12" y2="12"/>
        </svg>
      `;
      
      boxElement.appendChild(boxIcon);
      boxContainerRef.current?.appendChild(boxElement);

      // Boxes move from left to production (right side)
      const startPosition = isMobile ? -60 - (Math.random() * 40) : -80 - (Math.random() * 60);
      const endPosition = isMobile ? window.innerWidth - 40 : window.innerWidth - 60;
      
      const duration = isMobile ? 5000 + (Math.random() * 2000) : 7000 + (Math.random() * 3000);
      
      boxElement.style.transform = `translateX(${startPosition}px) translateY(-50%)`;
      
      const animation = boxElement.animate(
        [
          { transform: `translateX(${startPosition}px) translateY(-50%)` },
          { transform: `translateX(${endPosition}px) translateY(-50%)` }
        ],
        {
          duration,
          iterations: 1,
          easing: 'linear',
          fill: 'forwards'
        }
      );
      
      animation.onfinish = () => {
        boxElement.remove();
      };
    };

    const spawnBox = (baseDelay: number, variance: number) => {
      const delay = baseDelay + (Math.random() * variance);
      const timeout = setTimeout(() => {
        createBox();
        spawnBox(baseDelay, variance);
      }, delay);
      
      timeoutRefs.current.push(timeout);
    };

    // Start spawning boxes heading to production
    spawnBox(1800, 1200);  // Boxes every 1.8-3 seconds
    
    // Spawn initial box with slight delay
    const initialTimeout = setTimeout(() => createBox(), 400);
    timeoutRefs.current.push(initialTimeout);
    
    return () => {
      timeoutRefs.current.forEach(timeout => clearTimeout(timeout));
      timeoutRefs.current = [];
    };
  }, [isMobile]);

  const height = isMobile ? 'h-12' : 'h-16';

  return (
    <div className={`relative w-full ${height} my-4 sm:my-8 overflow-hidden ${className}`}>
      {/* Conveyor belt line */}
      <div className="absolute top-1/2 left-0 w-full h-2 bg-gradient-to-r from-zinc-400 via-zinc-500 to-zinc-400 dark:from-zinc-600 dark:via-zinc-700 dark:to-zinc-600 transform -translate-y-1/2 rounded-full shadow-inner">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full animate-shimmer"></div>
      </div>
      
      {/* Production destination */}
      <div className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 px-3 py-1 rounded-lg border border-orange-200 dark:border-orange-800">
        <Factory className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 dark:text-orange-400" />
        <span className="text-xs sm:text-sm font-medium text-orange-700 dark:text-orange-300">PRODUCTION</span>
      </div>
      
      {/* Container for animated boxes */}
      <div ref={boxContainerRef} className="relative w-full h-full overflow-hidden">
        {/* Boxes are dynamically created and managed via JavaScript */}
      </div>
    </div>
  );
};

export default AnimatedBoxesDivider;