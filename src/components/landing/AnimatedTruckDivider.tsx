
import React, { useEffect, useRef } from 'react';
import { Truck } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface AnimatedTruckDividerProps {
  className?: string;
}

const AnimatedTruckDivider = ({ className = "" }: AnimatedTruckDividerProps) => {
  const truckContainerRef = useRef<HTMLDivElement>(null);
  const timeoutRefs = useRef<NodeJS.Timeout[]>([]);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!truckContainerRef.current) return;

    const createTruck = (direction: 'left' | 'right') => {
      const truckElement = document.createElement('div');
      truckElement.className = `absolute top-1/2 transform -translate-y-1/2 truck-${direction}`;
      truckElement.style.filter = 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))';
      
      const truckIcon = document.createElement('div');
      const truckSize = isMobile ? 24 : 36;
      const colorClass = direction === 'left' ? 'text-gold-light' : 'text-emerald-400';
      truckIcon.innerHTML = `<svg width="${truckSize}" height="${truckSize}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${colorClass}"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>`;
      
      truckElement.appendChild(truckIcon);
      truckContainerRef.current?.appendChild(truckElement);

      const startPosition = direction === 'left' 
        ? (isMobile ? -60 - (Math.random() * 40) : -80 - (Math.random() * 60))
        : (isMobile ? window.innerWidth + 60 + (Math.random() * 40) : window.innerWidth + 80 + (Math.random() * 60));
      
      const endPosition = direction === 'left'
        ? (isMobile ? window.innerWidth + 60 : window.innerWidth + 80)
        : (isMobile ? -60 : -80);
      
      const duration = isMobile ? 6000 + (Math.random() * 3000) : 8000 + (Math.random() * 4000);
      
      const scaleX = direction === 'right' ? ' scaleX(-1)' : '';
      
      truckElement.style.transform = `translateX(${startPosition}px) translateY(-50%)${scaleX}`;
      
      const animation = truckElement.animate(
        [
          { transform: `translateX(${startPosition}px) translateY(-50%)${scaleX}` },
          { transform: `translateX(${endPosition}px) translateY(-50%)${scaleX}` }
        ],
        {
          duration,
          iterations: 1,
          easing: 'linear',
          fill: 'forwards'
        }
      );
      
      animation.onfinish = () => {
        truckElement.remove();
      };
    };

    const spawnTruck = (direction: 'left' | 'right', baseDelay: number, variance: number) => {
      const delay = baseDelay + (Math.random() * variance);
      const timeout = setTimeout(() => {
        createTruck(direction);
        spawnTruck(direction, baseDelay, variance);
      }, delay);
      
      timeoutRefs.current.push(timeout);
    };

    // Start spawning trucks with different intervals
    spawnTruck('left', 2000, 1500);  // Left-to-right trucks every 2-3.5 seconds
    spawnTruck('right', 2500, 1800); // Right-to-left trucks every 2.5-4.3 seconds
    
    // Spawn initial trucks with slight delay
    const initialTimeout1 = setTimeout(() => createTruck('left'), 500);
    const initialTimeout2 = setTimeout(() => createTruck('right'), 1200);
    timeoutRefs.current.push(initialTimeout1, initialTimeout2);
    
    return () => {
      timeoutRefs.current.forEach(timeout => clearTimeout(timeout));
      timeoutRefs.current = [];
    };
  }, [isMobile]);

  // Adjust truck size for mobile
  const truckSize = isMobile ? 24 : 36;
  const height = isMobile ? 'h-12' : 'h-16';

  return (
    <div className={`relative w-full ${height} my-4 sm:my-8 overflow-hidden ${className}`}>
      {/* Dotted line */}
      <div className="absolute top-1/2 left-0 w-full h-1 border-t-4 border-dotted border-zinc-700 transform -translate-y-1/2"></div>
      
      {/* Container for animated trucks */}
      <div ref={truckContainerRef} className="relative w-full h-full overflow-hidden">
        {/* Trucks are dynamically created and managed via JavaScript */}
      </div>
    </div>
  );
};

export default AnimatedTruckDivider;
