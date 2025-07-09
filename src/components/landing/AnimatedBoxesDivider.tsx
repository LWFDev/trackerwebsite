import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Shirt, Crown, Package, TrendingUp, Settings, Clock, CheckCircle, Zap } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface WorkflowItem {
  id: string;
  type: 'design' | 'production' | 'quality' | 'fulfillment';
  status: 'processing' | 'completed' | 'queued';
  progress: number;
  x: number;
  stage: number;
  clothingIndex: number;
}

interface ProductionMetrics {
  throughput: number;
  efficiency: number;
  queueLength: number;
}

const AnimatedBoxesDivider: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);
  const isVisibleRef = useRef<boolean>(true);
  const reducedMotion = useReducedMotion();

  const [items, setItems] = useState<WorkflowItem[]>([]);
  const [metrics, setMetrics] = useState<ProductionMetrics>({
    throughput: 1247,
    efficiency: 94,
    queueLength: 23
  });

  const stages = useMemo(() => [
    { name: 'Design', icon: Settings, color: '#3B82F6', gradient: 'from-blue-500 to-blue-600', x: '15%' },
    { name: 'Production', icon: Zap, color: '#8B5CF6', gradient: 'from-purple-500 to-purple-600', x: '38%' },
    { name: 'Quality', icon: CheckCircle, color: '#10B981', gradient: 'from-emerald-500 to-emerald-600', x: '62%' },
    { name: 'Fulfillment', icon: Package, color: '#F59E0B', gradient: 'from-amber-500 to-amber-600', x: '85%' }
  ], []);

  // Clothing items for animation
  const clothingItems = useMemo(() => [
    { icon: Shirt, color: '#3B82F6' },
    { icon: Crown, color: '#8B5CF6' }, // Hat representation
    { icon: Shirt, color: '#10B981' }, // Sweater (using Shirt with different color)
    { icon: Shirt, color: '#F59E0B' }  // Jersey (using Shirt with different color)
  ], []);

  const createWorkflowItem = useCallback((): WorkflowItem => {
    const clothingIndex = Math.floor(Math.random() * clothingItems.length);
    return {
      id: `item-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      type: ['design', 'production', 'quality', 'fulfillment'][Math.floor(Math.random() * 4)] as WorkflowItem['type'],
      status: 'processing',
      progress: 0,
      x: -50,
      stage: 0,
      clothingIndex // Add clothing index to track which clothing item to show
    };
  }, [clothingItems]);

  const animate = useCallback((currentTime: number) => {
    if (!isVisibleRef.current || reducedMotion) return;

    const deltaTime = currentTime - lastTimeRef.current;
    
    // Only update every 50ms to reduce lag (20fps instead of 60fps)
    if (deltaTime < 50) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }
    
    lastTimeRef.current = currentTime;

    setItems(prevItems => {
      let updatedItems = [...prevItems];

      // Add new items much less frequently
      if (Math.random() < 0.003 && updatedItems.length < 4) {
        updatedItems.push(createWorkflowItem());
      }

      // Update item positions with slower speed
      updatedItems = updatedItems.map(item => {
        const speed = 0.08; // Even slower speed
        const newX = item.x + speed;
        
        // Determine current stage based on position
        let newStage = 0;
        if (newX > 15) newStage = 1;
        if (newX > 38) newStage = 2;
        if (newX > 62) newStage = 3;
        if (newX > 85) newStage = 4;

        return {
          ...item,
          x: newX,
          stage: newStage,
          progress: Math.min(100, (newX + 50) / 1.35)
        };
      }).filter(item => item.x < 120);

      return updatedItems;
    });

    // Update metrics less frequently to reduce lag
    if (Math.random() < 0.005) {
      setMetrics(prev => ({
        throughput: Math.max(1200, prev.throughput + (Math.random() - 0.5) * 10),
        efficiency: Math.max(85, Math.min(98, prev.efficiency + (Math.random() - 0.5) * 2)),
        queueLength: Math.max(15, Math.min(35, prev.queueLength + Math.floor((Math.random() - 0.5) * 4)))
      }));
    }

    // Continue animation
    animationRef.current = requestAnimationFrame(animate);
  }, [createWorkflowItem, reducedMotion]);

  useEffect(() => {
    // Set up intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        isVisibleRef.current = entries[0].isIntersecting;
        if (isVisibleRef.current && !animationRef.current) {
          lastTimeRef.current = performance.now();
          animationRef.current = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Start animation
    lastTimeRef.current = performance.now();
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      observer.disconnect();
    };
  }, [animate]);

  const getStageIcon = useCallback((stageIndex: number) => {
    return stages[stageIndex]?.icon || Package;
  }, [stages]);

  const getStageColor = useCallback((stageIndex: number) => {
    return stages[stageIndex]?.color || 'hsl(var(--muted-foreground))';
  }, [stages]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-64 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 overflow-hidden border-y border-border/50"
      role="img"
      aria-label="Manufacturing workflow visualization"
    >
      {/* Elegant Belt/Conveyor */}
      <div className="absolute inset-0 flex items-center">
        <div 
          className="w-full h-3 bg-gradient-to-r from-slate-200/50 via-slate-300/50 to-slate-200/50 dark:from-slate-700/50 dark:via-slate-600/50 dark:to-slate-700/50 relative overflow-hidden rounded-full shadow-inner"
          style={{
            animation: reducedMotion ? 'none' : 'slideInfinite 8s linear infinite'
          }}
        >
          {/* Moving belt pattern */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-white/10"
            style={{
              backgroundImage: 'repeating-linear-gradient(90deg, transparent 0px, rgba(255,255,255,0.1) 10px, transparent 20px)',
              animation: reducedMotion ? 'none' : 'slideInfinite 4s linear infinite'
            }}
          />
        </div>
      </div>

      {/* Connection Lines */}
      <div className="absolute inset-0 flex items-center px-8">
        {stages.slice(0, -1).map((stage, index) => (
          <div
            key={`line-${index}`}
            className="absolute h-px bg-gradient-to-r from-slate-300 to-transparent dark:from-slate-600 opacity-40"
            style={{
              left: stage.x,
              width: `calc(${stages[index + 1].x} - ${stage.x})`,
              transform: 'translateX(2rem)'
            }}
          />
        ))}
      </div>

      {/* Enhanced Production Stages */}
      <div className="absolute inset-0 flex items-center px-8">
        {stages.map((stage, index) => {
          const StageIcon = stage.icon;
          return (
            <div
              key={stage.name}
              className="flex flex-col items-center space-y-3 z-20 group"
              style={{ position: 'absolute', left: stage.x, transform: 'translateX(-50%)' }}
            >
              {/* Stage Icon Container */}
              <div className="relative">
                <div 
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-md border border-white/30 dark:border-white/10 transition-all duration-500 group-hover:scale-110 group-hover:shadow-3xl bg-gradient-to-br ${stage.gradient} relative overflow-hidden`}
                >
                  {/* Glow effect */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br opacity-20 rounded-2xl"
                    style={{ background: `linear-gradient(135deg, ${stage.color}40, transparent)` }}
                  />
                  
                  <StageIcon 
                    size={28} 
                    className="text-white drop-shadow-lg relative z-10"
                  />
                  
                  {/* Animated border */}
                  <div 
                    className="absolute inset-0 rounded-2xl border-2 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ borderColor: stage.color }}
                  />
                </div>
                
                {/* Stage indicator dot */}
                <div 
                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full"
                  style={{ backgroundColor: stage.color }}
                />
              </div>
              
              {/* Stage Label */}
              <div className="text-center">
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 bg-white/80 dark:bg-slate-800/80 px-3 py-1.5 rounded-full shadow-sm backdrop-blur-sm border border-white/50 dark:border-slate-700/50">
                  {stage.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Enhanced Workflow Items - CLOTHING ITEMS */}
      <div className="absolute inset-0 flex items-center">
        {items.map((item) => {
          const clothingItem = clothingItems[item.clothingIndex];
          const ClothingIcon = clothingItem.icon;
          
          return (
            <div
              key={item.id}
              className="absolute w-12 h-12 flex items-center justify-center rounded-xl shadow-xl transition-all duration-300 will-change-transform"
              style={{
                left: `${item.x}%`,
                top: '50%',
                transform: 'translateY(-50%)',
                background: `linear-gradient(135deg, ${clothingItem.color}90, ${clothingItem.color}70)`,
                border: `2px solid ${clothingItem.color}`,
                boxShadow: `0 8px 25px -5px ${clothingItem.color}40`
              }}
            >
              <ClothingIcon 
                size={20} 
                className="text-white drop-shadow-md"
              />
            </div>
          );
        })}
      </div>

      {/* Enhanced Production Metrics */}
      <div className="absolute top-6 right-6 flex space-x-3 z-30">
        <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-white/50 dark:border-slate-700/50 rounded-2xl px-4 py-3 shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
              <TrendingUp size={16} className="text-white" />
            </div>
            <div className="text-sm">
              <div className="font-bold text-slate-800 dark:text-slate-200">{metrics.throughput.toLocaleString()}</div>
              <div className="text-slate-500 dark:text-slate-400 text-xs">Units/Day</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-white/50 dark:border-slate-700/50 rounded-2xl px-4 py-3 shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl">
              <Clock size={16} className="text-white" />
            </div>
            <div className="text-sm">
              <div className="font-bold text-slate-800 dark:text-slate-200">{metrics.efficiency}%</div>
              <div className="text-slate-500 dark:text-slate-400 text-xs">Efficiency</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBoxesDivider;