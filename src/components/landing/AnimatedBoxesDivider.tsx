import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Shirt, Crown, Package, CircleDot, TrendingUp, Settings, Clock, CheckCircle, Zap } from 'lucide-react';
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
    { name: 'Design', icon: Settings, color: 'hsl(var(--primary))', gradient: 'from-primary/20 to-primary/30', x: '15%' },
    { name: 'Production', icon: Zap, color: 'hsl(var(--accent))', gradient: 'from-accent/20 to-accent/30', x: '38%' },
    { name: 'Quality', icon: CheckCircle, color: 'hsl(var(--gold))', gradient: 'from-gold/20 to-gold/30', x: '62%' },
    { name: 'Fulfillment', icon: Package, color: 'hsl(var(--emerald))', gradient: 'from-emerald/20 to-emerald/30', x: '85%' }
  ], []);

  // Clothing items for animation
  const clothingItems = useMemo(() => [
    { icon: Shirt, color: 'hsl(var(--primary))' },     // Shirt
    { icon: Crown, color: 'hsl(var(--accent))' },      // Hat
    { icon: Package, color: 'hsl(var(--gold))' },      // Sweater/package
    { icon: CircleDot, color: 'hsl(var(--emerald))' }  // Jersey/circle
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

    lastTimeRef.current = currentTime;

    setItems(prevItems => {
      let updatedItems = [...prevItems];

      // Add new items regularly
      if (Math.random() < 0.015 && updatedItems.length < 6) {
        updatedItems.push(createWorkflowItem());
      }

      // Update item positions with good speed
      updatedItems = updatedItems.map(item => {
        const speed = 0.5; // Much faster, natural speed
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

    // Update metrics occasionally
    if (Math.random() < 0.01) {
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
      className="relative w-full h-64 bg-gradient-to-br from-white to-slate-50 overflow-hidden border-y border-slate-200/50"
      role="img"
      aria-label="Manufacturing workflow visualization"
    >
      {/* Clean Belt/Conveyor */}
      <div className="absolute inset-0 flex items-center">
        <div 
          className="w-full h-2 bg-gradient-to-r from-slate-200/60 via-slate-300/80 to-slate-200/60 relative overflow-hidden rounded-full"
          style={{
            animation: reducedMotion ? 'none' : 'slideInfinite 6s linear infinite'
          }}
        >
          {/* Subtle moving pattern */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-400/10 to-transparent"
            style={{
              backgroundImage: 'repeating-linear-gradient(90deg, transparent 0px, rgb(148 163 184 / 0.08) 8px, transparent 16px)',
              animation: reducedMotion ? 'none' : 'slideInfinite 3s linear infinite'
            }}
          />
        </div>
      </div>

      {/* Subtle Connection Lines */}
      <div className="absolute inset-0 flex items-center px-8">
        {stages.slice(0, -1).map((stage, index) => (
          <div
            key={`line-${index}`}
            className="absolute h-px bg-gradient-to-r from-slate-300/50 to-transparent opacity-40"
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
          const stageColors = [
            { bg: 'from-blue-50 to-blue-100', icon: 'text-blue-600' },
            { bg: 'from-emerald-50 to-emerald-100', icon: 'text-emerald-600' },
            { bg: 'from-amber-50 to-amber-100', icon: 'text-amber-600' },
            { bg: 'from-purple-50 to-purple-100', icon: 'text-purple-600' }
          ];
          
          return (
            <div
              key={stage.name}
              className="flex flex-col items-center space-y-3 z-20 group"
              style={{ position: 'absolute', left: stage.x, transform: 'translateX(-50%)' }}
            >
              {/* Stage Icon Container */}
              <div className="relative">
                <div 
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm border border-white/80 transition-all duration-300 group-hover:scale-105 bg-gradient-to-br ${stageColors[index].bg} relative overflow-hidden`}
                >
                  <StageIcon 
                    size={20} 
                    className={`relative z-10 ${stageColors[index].icon}`}
                  />
                </div>
                
                {/* Stage indicator dot */}
                <div 
                  className={`absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full ${stageColors[index].icon.replace('text-', 'bg-')}`}
                />
              </div>
              
              {/* Stage Label */}
              <div className="text-center">
                <span className="text-xs font-medium text-slate-600 bg-white/90 px-2 py-1 rounded-md shadow-sm border border-slate-200/50">
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
          const itemColors = [
            'text-blue-600',
            'text-emerald-600', 
            'text-amber-600',
            'text-purple-600'
          ];
          
          return (
            <div
              key={item.id}
              className="absolute w-8 h-8 flex items-center justify-center rounded-lg shadow-sm transition-all duration-300 will-change-transform bg-white border border-slate-200/50"
              style={{
                left: `${item.x}%`,
                top: '50%',
                transform: 'translateY(-50%)'
              }}
            >
              <ClothingIcon 
                size={16} 
                className={itemColors[item.clothingIndex]}
              />
            </div>
          );
        })}
      </div>

      {/* Clean Production Metrics */}
      <div className="absolute top-4 right-4 flex space-x-2 z-30">
        <div className="bg-white/95 border border-slate-200/50 rounded-lg px-3 py-2 shadow-sm">
          <div className="flex items-center space-x-2">
            <div className="p-1 bg-blue-50 rounded">
              <TrendingUp size={12} className="text-blue-600" />
            </div>
            <div className="text-xs">
              <div className="font-semibold text-slate-700">{metrics.throughput.toLocaleString()}</div>
              <div className="text-slate-500">Units/Day</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white/95 border border-slate-200/50 rounded-lg px-3 py-2 shadow-sm">
          <div className="flex items-center space-x-2">
            <div className="p-1 bg-amber-50 rounded">
              <Clock size={12} className="text-amber-600" />
            </div>
            <div className="text-xs">
              <div className="font-semibold text-slate-700">{metrics.efficiency}%</div>
              <div className="text-slate-500">Efficiency</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBoxesDivider;