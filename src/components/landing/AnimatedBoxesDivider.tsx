import React, { useEffect, useRef } from 'react';
import { Shirt, GraduationCap, Notebook, Coffee, ShoppingBag, Pen } from 'lucide-react';
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

    const createProductIcon = () => {
      const productElement = document.createElement('div');
      productElement.className = 'absolute top-1/2 transform -translate-y-1/2 product-production flex flex-col items-center';
      productElement.style.filter = 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))';
      
      const iconSize = isMobile ? 24 : 32;
      const productTypes = [
        { name: 'shirt', icon: 'Shirt', color: '#3b82f6' },
        { name: 'hat', icon: 'GraduationCap', color: '#f59e0b' },
        { name: 'notebook', icon: 'Notebook', color: '#8b5cf6' },
        { name: 'mug', icon: 'Coffee', color: '#ef4444' },
        { name: 'bag', icon: 'ShoppingBag', color: '#10b981' },
        { name: 'pen', icon: 'Pen', color: '#6366f1' }
      ];
      
      const product = productTypes[Math.floor(Math.random() * productTypes.length)];
      
      // Create pulsing green dot
      const pulsingDot = document.createElement('div');
      pulsingDot.className = 'w-2 h-2 bg-green-500 rounded-full mb-1';
      pulsingDot.style.animation = 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite';
      
      // Create product icon
      const productIcon = document.createElement('div');
      productIcon.innerHTML = `
        <svg width="${iconSize}" height="${iconSize}" viewBox="0 0 24 24" fill="none" stroke="${product.color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          ${getIconPath(product.icon)}
        </svg>
      `;
      
      productElement.appendChild(pulsingDot);
      productElement.appendChild(productIcon);
      boxContainerRef.current?.appendChild(productElement);

      // Products move from left to embroidery machine (right side)
      const startPosition = isMobile ? -60 - (Math.random() * 40) : -80 - (Math.random() * 60);
      const endPosition = isMobile ? window.innerWidth - 40 : window.innerWidth - 60;
      
      const duration = isMobile ? 5000 + (Math.random() * 2000) : 7000 + (Math.random() * 3000);
      
      productElement.style.transform = `translateX(${startPosition}px) translateY(-50%)`;
      
      const animation = productElement.animate(
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
        productElement.remove();
      };
    };

    // Helper function to get SVG paths for different icons
    const getIconPath = (iconName: string) => {
      switch(iconName) {
        case 'Shirt':
          return '<path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23Z"/>';
        case 'GraduationCap':
          return '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>';
        case 'Notebook':
          return '<path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M16 2v20"/>';
        case 'Coffee':
          return '<path d="M10 2v2a2 2 0 1 0 4 0V2a2 2 0 1 0-4 0Z"/><path d="M10 4h4"/><path d="M8 8v9a4 4 0 0 0 8 0V8a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2Z"/><path d="M16 8h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2"/>';
        case 'ShoppingBag':
          return '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>';
        case 'Pen':
          return '<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>';
        default:
          return '<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>';
      }
    };

    const spawnProduct = (baseDelay: number, variance: number) => {
      const delay = baseDelay + (Math.random() * variance);
      const timeout = setTimeout(() => {
        createProductIcon();
        spawnProduct(baseDelay, variance);
      }, delay);
      
      timeoutRefs.current.push(timeout);
    };

    // Start spawning promotional products heading to embroidery machine
    spawnProduct(1800, 1200);  // Products every 1.8-3 seconds
    
    // Spawn initial product with slight delay
    const initialTimeout = setTimeout(() => createProductIcon(), 400);
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
      
      {/* Embroidery machine destination */}
      <div className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-lg border border-blue-200 dark:border-blue-800">
        <img 
          src="/lovable-uploads/fc470382-aa94-4a9f-ad0f-fb5c9919f63d.png" 
          alt="Embroidery Machine" 
          className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
        />
      </div>
      
      {/* Container for animated promotional products */}
      <div ref={boxContainerRef} className="relative w-full h-full overflow-hidden">
        {/* Promotional product icons are dynamically created and managed via JavaScript */}
      </div>
    </div>
  );
};

export default AnimatedBoxesDivider;