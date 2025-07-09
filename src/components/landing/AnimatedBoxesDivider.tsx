import React, { useEffect, useRef } from 'react';
import { Package, Shirt, Coffee, ShoppingBag, Award, Briefcase } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface AnimatedBoxesDividerProps {
  className?: string;
}

const AnimatedBoxesDivider = ({ className = "" }: AnimatedBoxesDividerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRefs = useRef<NodeJS.Timeout[]>([]);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!containerRef.current) return;

    const createWorkflowItem = () => {
      const itemElement = document.createElement('div');
      itemElement.className = 'absolute workflow-item';
      
      const products = [
        { icon: 'Package', color: 'hsl(var(--primary))', name: 'Product' },
        { icon: 'Shirt', color: 'hsl(var(--chart-1))', name: 'Apparel' },
        { icon: 'Coffee', color: 'hsl(var(--chart-2))', name: 'Drinkware' },
        { icon: 'ShoppingBag', color: 'hsl(var(--chart-3))', name: 'Bags' },
        { icon: 'Award', color: 'hsl(var(--chart-4))', name: 'Awards' },
        { icon: 'Briefcase', color: 'hsl(var(--chart-5))', name: 'Corporate' }
      ];
      
      const product = products[Math.floor(Math.random() * products.length)];
      const size = isMobile ? 16 : 20;
      
      itemElement.innerHTML = `
        <div class="relative flex items-center justify-center">
          <!-- Status indicator -->
          <div class="absolute -top-1 -right-1 w-3 h-3 rounded-full animate-pulse" style="background: hsl(var(--success))"></div>
          
          <!-- Product container -->
          <div class="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg border transition-all duration-300 hover:scale-105" 
               style="background: linear-gradient(135deg, ${product.color}15, ${product.color}08); border-color: ${product.color}30;">
            ${getIconSVG(product.icon, size, product.color)}
          </div>
          
          <!-- Product label -->
          <div class="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-muted-foreground whitespace-nowrap">
            ${product.name}
          </div>
        </div>
      `;
      
      containerRef.current?.appendChild(itemElement);

      // Enhanced animation with easing
      const startX = isMobile ? -80 : -100;
      const endX = isMobile ? window.innerWidth - 100 : window.innerWidth - 140;
      const duration = isMobile ? 8000 : 12000;
      
      // Set initial position
      itemElement.style.left = `${startX}px`;
      itemElement.style.top = '50%';
      itemElement.style.transform = 'translateY(-50%)';
      
      // Create smooth animation
      const animation = itemElement.animate([
        { 
          left: `${startX}px`,
          opacity: '0',
          transform: 'translateY(-50%) scale(0.8)'
        },
        { 
          left: `${startX + 60}px`,
          opacity: '1',
          transform: 'translateY(-50%) scale(1)'
        },
        { 
          left: `${endX - 80}px`,
          opacity: '1',
          transform: 'translateY(-50%) scale(1)'
        },
        { 
          left: `${endX}px`,
          opacity: '0',
          transform: 'translateY(-50%) scale(0.8)'
        }
      ], {
        duration,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        fill: 'forwards'
      });
      
      animation.onfinish = () => {
        itemElement.remove();
      };
    };

    const getIconSVG = (iconName: string, size: number, color: string) => {
      const iconPaths = {
        Package: '<path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
        Shirt: '<path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23Z"/>',
        Coffee: '<path d="M10 2v2a2 2 0 1 0 4 0V2a2 2 0 1 0-4 0Z"/><path d="M10 4h4"/><path d="M8 8v9a4 4 0 0 0 8 0V8a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2Z"/><path d="M16 8h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2"/>',
        ShoppingBag: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
        Award: '<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/>',
        Briefcase: '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>'
      };
      
      return `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          ${iconPaths[iconName as keyof typeof iconPaths] || iconPaths.Package}
        </svg>
      `;
    };

    const spawnItem = () => {
      createWorkflowItem();
      const nextDelay = 2000 + (Math.random() * 3000); // 2-5 seconds
      const timeout = setTimeout(spawnItem, nextDelay);
      timeoutRefs.current.push(timeout);
    };

    // Start the workflow
    const initialTimeout = setTimeout(() => {
      createWorkflowItem();
      spawnItem();
    }, 1000);
    
    timeoutRefs.current.push(initialTimeout);

    return () => {
      timeoutRefs.current.forEach(timeout => clearTimeout(timeout));
      timeoutRefs.current = [];
    };
  }, [isMobile]);

  return (
    <div className={`relative w-full h-24 sm:h-32 my-8 sm:my-12 overflow-hidden ${className}`}>
      {/* Professional conveyor belt system */}
      <div className="absolute inset-0 flex items-center">
        {/* Main conveyor belt */}
        <div className="relative w-full h-4 mx-4">
          {/* Belt track */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-muted via-muted-foreground/20 to-muted shadow-inner">
            {/* Moving belt effect */}
            <div className="absolute inset-0 rounded-full opacity-30">
              <div className="h-full w-full rounded-full bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse"></div>
            </div>
            {/* Belt segments */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <div 
                  key={i} 
                  className="w-1 h-1 rounded-full bg-muted-foreground/40"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Production endpoint */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
          <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 shadow-lg">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center mb-2">
              <div className="w-4 h-4 rounded bg-primary animate-pulse"></div>
            </div>
            <span className="text-xs font-semibold text-primary">Production</span>
          </div>
        </div>
      </div>

      {/* Workflow items container */}
      <div ref={containerRef} className="absolute inset-0 pointer-events-none">
        {/* Items are dynamically created here */}
      </div>

      {/* Ambient effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle glow effects */}
        <div className="absolute top-1/2 left-8 transform -translate-y-1/2 w-24 h-24 rounded-full bg-primary/5 blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 right-20 transform -translate-y-1/2 w-16 h-16 rounded-full bg-chart-1/5 blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
};

export default AnimatedBoxesDivider;