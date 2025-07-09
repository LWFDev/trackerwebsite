import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Package, Shirt, Coffee, ShoppingBag, Award, Briefcase, Factory, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface WorkflowItem {
  id: string;
  type: 'apparel' | 'drinkware' | 'promotional' | 'awards' | 'corporate' | 'packaging';
  status: 'design' | 'production' | 'quality' | 'fulfillment' | 'shipped';
  priority: 'standard' | 'rush' | 'priority';
  batchId?: string;
}

interface ProductionStage {
  name: string;
  icon: React.ReactNode;
  color: string;
  position: number;
}

interface AnimatedBoxesDividerProps {
  className?: string;
  isPaused?: boolean;
  speed?: 'slow' | 'normal' | 'fast';
}

const AnimatedBoxesDivider = ({ 
  className = "",
  isPaused = false,
  speed = 'normal'
}: AnimatedBoxesDividerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const timeoutRefs = useRef<NodeJS.Timeout[]>([]);
  const itemsRef = useRef<Map<string, HTMLElement>>(new Map());
  const [activeItems, setActiveItems] = useState(0);
  const [throughputRate, setThroughputRate] = useState(0);
  const isMobile = useIsMobile();

  const productionStages: ProductionStage[] = [
    { name: 'Design', icon: <Package className="w-4 h-4" />, color: 'hsl(var(--chart-1))', position: 15 },
    { name: 'Production', icon: <Factory className="w-4 h-4" />, color: 'hsl(var(--chart-2))', position: 35 },
    { name: 'Quality', icon: <CheckCircle className="w-4 h-4" />, color: 'hsl(var(--chart-3))', position: 60 },
    { name: 'Fulfillment', icon: <ArrowRight className="w-4 h-4" />, color: 'hsl(var(--primary))', position: 85 },
  ];

  const productTypes = [
    { 
      type: 'apparel' as const, 
      icon: 'Shirt', 
      color: 'hsl(var(--chart-1))', 
      name: 'Custom Apparel',
      baseSpeed: 1,
      priority: ['standard', 'rush', 'priority'] as const
    },
    { 
      type: 'drinkware' as const, 
      icon: 'Coffee', 
      color: 'hsl(var(--chart-2))', 
      name: 'Drinkware',
      baseSpeed: 1.2,
      priority: ['standard', 'rush'] as const
    },
    { 
      type: 'promotional' as const, 
      icon: 'ShoppingBag', 
      color: 'hsl(var(--chart-3))', 
      name: 'Promotional',
      baseSpeed: 0.8,
      priority: ['standard', 'priority'] as const
    },
    { 
      type: 'awards' as const, 
      icon: 'Award', 
      color: 'hsl(var(--chart-4))', 
      name: 'Awards & Trophies',
      baseSpeed: 0.6,
      priority: ['standard', 'rush', 'priority'] as const
    },
    { 
      type: 'corporate' as const, 
      icon: 'Briefcase', 
      color: 'hsl(var(--chart-5))', 
      name: 'Corporate Gifts',
      baseSpeed: 1.1,
      priority: ['standard', 'priority'] as const
    },
    { 
      type: 'packaging' as const, 
      icon: 'Package', 
      color: 'hsl(var(--primary))', 
      name: 'Custom Packaging',
      baseSpeed: 1.3,
      priority: ['standard', 'rush'] as const
    }
  ];

  const speedMultipliers = {
    slow: 0.5,
    normal: 1,
    fast: 2
  };

  const createWorkflowItem = useCallback(() => {
    if (!containerRef.current || isPaused) return;

    const product = productTypes[Math.floor(Math.random() * productTypes.length)];
    const priority = product.priority[Math.floor(Math.random() * product.priority.length)];
    const batchId = Math.random() < 0.3 ? `BATCH-${Math.random().toString(36).substr(2, 6)}` : undefined;
    
    const workflowItem: WorkflowItem = {
      id: `item-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      type: product.type,
      status: 'design',
      priority,
      batchId
    };

    const itemElement = document.createElement('div');
    itemElement.className = 'absolute workflow-item transition-all duration-300 will-change-transform';
    itemElement.style.zIndex = priority === 'rush' ? '10' : priority === 'priority' ? '8' : '5';
    
    const priorityColors = {
      standard: 'hsl(var(--muted-foreground))',
      rush: 'hsl(var(--destructive))',
      priority: 'hsl(var(--warning))'
    };

    const statusIcons = {
      design: '<svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
      production: '<svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>',
      quality: '<svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>',
      fulfillment: '<svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/></svg>',
      shipped: '<svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>'
    };

    itemElement.innerHTML = `
      <div class="relative group cursor-pointer">
        <!-- Glassmorphic container with 3D depth -->
        <div class="relative flex items-center justify-center transform-gpu transition-all duration-500 hover:scale-110">
          <!-- Priority indicator ring -->
          <div class="absolute -inset-1 rounded-xl opacity-75 blur-sm" style="background: linear-gradient(135deg, ${priorityColors[priority]}40, ${priorityColors[priority]}20);"></div>
          
          <!-- Main product container with glassmorphism -->
          <div class="relative w-14 h-14 rounded-xl backdrop-blur-md border shadow-xl transition-all duration-300 hover:shadow-2xl" 
               style="background: linear-gradient(135deg, ${product.color}15, ${product.color}08, transparent); border-color: ${product.color}30; box-shadow: 0 8px 32px ${product.color}20;">
            
            <!-- 3D lighting effect -->
            <div class="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
            
            <!-- Product icon -->
            <div class="absolute inset-0 flex items-center justify-center">
              ${getIconSVG(product.icon, isMobile ? 18 : 22, product.color)}
            </div>
            
            <!-- Status indicator with micro-animation -->
            <div class="absolute -top-1 -right-1 w-5 h-5 rounded-full border-2 border-background flex items-center justify-center text-white text-xs transition-all duration-300" 
                 style="background: ${priorityColors[priority]};">
              ${statusIcons[workflowItem.status]}
            </div>
            
            <!-- Batch indicator -->
            ${batchId ? `
              <div class="absolute -bottom-1 -left-1 px-1 py-0.5 rounded text-xs font-mono text-white backdrop-blur-sm" 
                   style="background: ${product.color}80; font-size: 8px;">
                ${batchId.split('-')[1]}
              </div>
            ` : ''}
          </div>
          
          <!-- Progress trail effect -->
          <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
               style="background: radial-gradient(circle at center, ${product.color}20, transparent 70%);"></div>
        </div>
        
        <!-- Tooltip information -->
        <div class="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20">
          <div class="bg-background/95 backdrop-blur-md border rounded-lg px-3 py-2 shadow-xl min-w-max">
            <div class="text-xs font-semibold text-foreground">${product.name}</div>
            <div class="text-xs text-muted-foreground capitalize">${priority} Priority</div>
            ${batchId ? `<div class="text-xs text-muted-foreground font-mono">${batchId}</div>` : ''}
          </div>
        </div>
      </div>
    `;
    
    containerRef.current.appendChild(itemElement);
    itemsRef.current.set(workflowItem.id, itemElement);
    setActiveItems(prev => prev + 1);

    // Calculate dynamic positioning and timing
    const baseSpeed = product.baseSpeed * speedMultipliers[speed];
    const priorityMultiplier = priority === 'rush' ? 1.5 : priority === 'priority' ? 1.2 : 1;
    const finalSpeed = baseSpeed * priorityMultiplier;
    
    const startX = isMobile ? -100 : -120;
    const endX = isMobile ? window.innerWidth + 100 : window.innerWidth + 120;
    const duration = (12000 / finalSpeed);
    
    const yOffset = priority === 'rush' ? -8 : priority === 'priority' ? -4 : 0;
    const centerY = isMobile ? 48 : 64;

    // Set initial position
    itemElement.style.left = `${startX}px`;
    itemElement.style.top = `${centerY + yOffset}px`;
    itemElement.style.transform = 'translate(-50%, -50%)';

    // Create physics-based animation with multiple stages
    const stagePositions = productionStages.map(stage => 
      startX + ((endX - startX) * stage.position / 100)
    );

    const keyframes = [
      { left: `${startX}px`, opacity: '0', transform: 'translate(-50%, -50%) scale(0.8) rotateY(-15deg)' },
      { left: `${startX + 80}px`, opacity: '1', transform: 'translate(-50%, -50%) scale(1) rotateY(0deg)' },
      ...stagePositions.map((pos, i) => ({
        left: `${pos}px`,
        opacity: '1',
        transform: `translate(-50%, -50%) scale(${1 + (i * 0.02)}) rotateY(${i * 2}deg)`
      })),
      { left: `${endX - 80}px`, opacity: '1', transform: 'translate(-50%, -50%) scale(1.05) rotateY(5deg)' },
      { left: `${endX}px`, opacity: '0', transform: 'translate(-50%, -50%) scale(0.9) rotateY(15deg)' }
    ];

    const animation = itemElement.animate(keyframes, {
      duration,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      fill: 'forwards'
    });

    // Update status at production stages
    const stageTimeouts = productionStages.map((stage, index) => {
      const delay = (duration * stage.position / 100);
      return setTimeout(() => {
        const statusElement = itemElement.querySelector('.absolute.-top-1.-right-1');
        if (statusElement && index < 3) {
          const newStatus = ['design', 'production', 'quality', 'fulfillment'][index + 1] as WorkflowItem['status'];
          workflowItem.status = newStatus;
          statusElement.innerHTML = statusIcons[newStatus];
        }
      }, delay);
    });

    timeoutRefs.current.push(...stageTimeouts);

    animation.onfinish = () => {
      itemElement.remove();
      itemsRef.current.delete(workflowItem.id);
      setActiveItems(prev => prev - 1);
      setThroughputRate(prev => prev + 1);
    };

    return workflowItem;
  }, [isMobile, isPaused, speed]);

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
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="transition-all duration-300">
        ${iconPaths[iconName as keyof typeof iconPaths] || iconPaths.Package}
      </svg>
    `;
  };

  const spawnWorkflowItems = useCallback(() => {
    if (isPaused) return;

    createWorkflowItem();
    
    // Intelligent spawning based on current load
    const baseInterval = 3000;
    const loadFactor = Math.max(0.5, 1 - (activeItems / 8));
    const speedFactor = speedMultipliers[speed];
    const nextDelay = (baseInterval * loadFactor) / speedFactor + (Math.random() * 2000);
    
    const timeout = setTimeout(spawnWorkflowItems, nextDelay);
    timeoutRefs.current.push(timeout);
  }, [createWorkflowItem, isPaused, activeItems, speed]);

  useEffect(() => {
    if (!isPaused) {
      const initialTimeout = setTimeout(spawnWorkflowItems, 1000);
      timeoutRefs.current.push(initialTimeout);
    }

    return () => {
      timeoutRefs.current.forEach(timeout => clearTimeout(timeout));
      timeoutRefs.current = [];
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [spawnWorkflowItems, isPaused]);

  // Reset throughput counter periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setThroughputRate(0);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative w-full h-32 sm:h-40 my-12 sm:my-16 overflow-hidden ${className}`}>
      {/* Advanced conveyor system with 3D perspective */}
      <div className="absolute inset-0">
        {/* Main production line */}
        <div className="relative w-full h-full flex items-center">
          {/* Conveyor belt with realistic depth */}
          <div className="relative w-full h-6 mx-6" style={{ transform: 'perspective(1000px) rotateX(5deg)' }}>
            {/* Belt track with metallic finish */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-muted/80 via-muted-foreground/30 to-muted/80 shadow-2xl">
              {/* Inner belt surface */}
              <div className="absolute inset-1 rounded-full bg-gradient-to-r from-muted-foreground/20 via-muted-foreground/10 to-muted-foreground/20">
                {/* Moving belt texture */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="h-full w-[200%] bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-pulse" 
                       style={{ 
                         animation: isPaused ? 'none' : 'slideInfinite 4s linear infinite',
                         backgroundSize: '50% 100%'
                       }}></div>
                </div>
                
                {/* Belt segments with realistic spacing */}
                <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
                  {Array.from({ length: isMobile ? 8 : 16 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60 shadow-inner"
                      style={{ 
                        animationDelay: `${i * 0.1}s`,
                        animation: isPaused ? 'none' : 'pulse 2s ease-in-out infinite'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Conveyor support structure */}
            <div className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-muted-foreground/40 rounded-full shadow-lg"></div>
          </div>
        </div>

        {/* Production stages with enterprise styling */}
        <div className="absolute inset-0 flex items-center justify-between px-8">
          {productionStages.map((stage, index) => (
            <div 
              key={stage.name}
              className="flex flex-col items-center"
              style={{ left: `${stage.position}%` }}
            >
              {/* Stage indicator with glassmorphism */}
              <div className="relative group">
                <div className="absolute -inset-2 rounded-xl bg-gradient-to-r opacity-30 blur-sm transition-all duration-300 group-hover:opacity-50"
                     style={{ background: `linear-gradient(135deg, ${stage.color}40, ${stage.color}20)` }}></div>
                <div className="relative flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl backdrop-blur-md border transition-all duration-300 hover:scale-105"
                     style={{ 
                       background: `linear-gradient(135deg, ${stage.color}15, ${stage.color}08, transparent)`,
                       borderColor: `${stage.color}30`,
                       boxShadow: `0 8px 32px ${stage.color}20`
                     }}>
                  {/* Stage icon */}
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center mb-1 sm:mb-2 transition-all duration-300"
                       style={{ backgroundColor: `${stage.color}20` }}>
                    <div style={{ color: stage.color }}>
                      {stage.icon}
                    </div>
                  </div>
                  
                  {/* Stage label */}
                  <span className="text-xs sm:text-sm font-semibold whitespace-nowrap" 
                        style={{ color: stage.color }}>
                    {stage.name}
                  </span>
                  
                  {/* Progress indicator */}
                  <div className="w-full h-1 bg-muted rounded-full mt-1 overflow-hidden">
                    <div className="h-full rounded-full transition-all duration-1000"
                         style={{ 
                           width: `${20 + (index * 20)}%`,
                           backgroundColor: stage.color,
                           animation: isPaused ? 'none' : 'pulse 2s ease-in-out infinite'
                         }}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Analytics overlay */}
        <div className="absolute top-4 right-4 flex gap-4">
          {/* Active items counter */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg backdrop-blur-md bg-background/60 border border-border/50 shadow-lg">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">
              Active: <span className="font-bold text-primary">{activeItems}</span>
            </span>
          </div>
          
          {/* Throughput rate */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg backdrop-blur-md bg-background/60 border border-border/50 shadow-lg">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium">
              Rate: <span className="font-bold text-green-500">{throughputRate}/min</span>
            </span>
          </div>
        </div>
      </div>

      {/* Workflow items container */}
      <div ref={containerRef} className="absolute inset-0 pointer-events-none">
        {/* Dynamic items are created here */}
      </div>

      {/* Advanced ambient effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Depth lighting */}
        <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-primary/5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-24 h-24 rounded-full bg-chart-2/5 blur-2xl animate-pulse" 
             style={{ animationDelay: '2s' }}></div>
        
        {/* Particle effects */}
        {!isPaused && Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30 animate-ping"
            style={{
              left: `${20 + (i * 12)}%`,
              top: `${40 + (i % 2) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>

      {/* Pause overlay */}
      {isPaused && (
        <div className="absolute inset-0 bg-background/50 backdrop-blur-sm flex items-center justify-center">
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background border shadow-lg">
            <div className="w-2 h-2 bg-warning rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-muted-foreground">Production Paused</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimatedBoxesDivider;