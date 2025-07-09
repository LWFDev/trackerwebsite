import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Package, Zap, CheckCircle, TrendingUp, Settings, Clock } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface WorkflowItem {
  id: string;
  type: 'design' | 'production' | 'quality' | 'fulfillment';
  status: 'processing' | 'completed' | 'queued';
  progress: number;
  x: number;
  stage: number;
}

interface ProductionMetrics {
  throughput: number;
  efficiency: number;
  queueLength: number;
}

const AnimatedBoxesDivider: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const itemsRef = useRef<WorkflowItem[]>([]);
  const lastTimeRef = useRef<number>(0);
  const isVisibleRef = useRef<boolean>(true);
  const reducedMotion = useReducedMotion();

  const [metrics, setMetrics] = useState<ProductionMetrics>({
    throughput: 1247,
    efficiency: 94,
    queueLength: 23
  });

  const stages = useMemo(() => [
    { name: 'Design', icon: Settings, color: 'hsl(var(--primary))', x: '15%' },
    { name: 'Production', icon: Zap, color: 'hsl(var(--secondary))', x: '40%' },
    { name: 'Quality', icon: CheckCircle, color: 'hsl(var(--accent))', x: '65%' },
    { name: 'Fulfillment', icon: Package, color: 'hsl(var(--gold))', x: '85%' }
  ], []);

  const createWorkflowItem = useCallback((): WorkflowItem => ({
    id: `item-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    type: ['design', 'production', 'quality', 'fulfillment'][Math.floor(Math.random() * 4)] as WorkflowItem['type'],
    status: 'processing',
    progress: 0,
    x: -50,
    stage: 0
  }), []);

  const animate = useCallback((currentTime: number) => {
    if (!isVisibleRef.current || reducedMotion) return;

    const deltaTime = currentTime - lastTimeRef.current;
    lastTimeRef.current = currentTime;

    // Add new items periodically
    if (Math.random() < 0.02 && itemsRef.current.length < 8) {
      itemsRef.current.push(createWorkflowItem());
    }

    // Update item positions
    itemsRef.current = itemsRef.current.map(item => {
      const speed = 0.8;
      const newX = item.x + speed;
      
      // Determine current stage based on position
      let newStage = 0;
      if (newX > 15) newStage = 1;
      if (newX > 40) newStage = 2;
      if (newX > 65) newStage = 3;
      if (newX > 85) newStage = 4;

      return {
        ...item,
        x: newX,
        stage: newStage,
        progress: Math.min(100, (newX + 50) / 1.35)
      };
    }).filter(item => item.x < 120); // Remove items that have moved off screen

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
      className="relative w-full h-48 bg-gradient-to-r from-background via-muted/10 to-background overflow-hidden"
      role="img"
      aria-label="Manufacturing workflow visualization"
    >
      {/* Belt Background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="h-12 bg-gradient-to-r from-muted/30 via-muted/50 to-muted/30 top-1/2 transform -translate-y-1/2 relative"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, transparent 0px, hsl(var(--muted-foreground) / 0.1) 20px, transparent 40px)',
            animation: reducedMotion ? 'none' : 'slideInfinite 3s linear infinite'
          }}
        />
      </div>

      {/* Production Stages */}
      <div className="absolute inset-0 flex items-center justify-between px-8">
        {stages.map((stage, index) => {
          const StageIcon = stage.icon;
          return (
            <div
              key={stage.name}
              className="flex flex-col items-center space-y-2 z-10"
              style={{ position: 'absolute', left: stage.x, transform: 'translateX(-50%)' }}
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm border border-white/20 transition-transform duration-300 hover:scale-110"
                style={{ 
                  backgroundColor: `${stage.color}15`,
                  borderColor: `${stage.color}30`
                }}
              >
                <StageIcon 
                  size={24} 
                  style={{ color: stage.color }}
                  className="drop-shadow-sm"
                />
              </div>
              <span className="text-xs font-medium text-muted-foreground bg-background/80 px-2 py-1 rounded-md">
                {stage.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Workflow Items */}
      <div className="absolute inset-0 flex items-center">
        {itemsRef.current.map((item) => {
          const IconComponent = getStageIcon(item.stage);
          const iconColor = getStageColor(item.stage);
          
          return (
            <div
              key={item.id}
              className="absolute w-8 h-8 flex items-center justify-center rounded-lg shadow-md transition-all duration-300 will-change-transform"
              style={{
                left: `${item.x}%`,
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: `${iconColor}20`,
                border: `1px solid ${iconColor}40`
              }}
            >
              <IconComponent 
                size={16} 
                style={{ color: iconColor }}
                className="drop-shadow-sm"
              />
            </div>
          );
        })}
      </div>

      {/* Production Metrics */}
      <div className="absolute top-4 right-4 flex space-x-4 z-20">
        <div className="bg-background/90 backdrop-blur-sm border border-border/50 rounded-lg px-3 py-2 shadow-sm">
          <div className="flex items-center space-x-2">
            <TrendingUp size={14} className="text-primary" />
            <div className="text-xs">
              <div className="font-medium text-foreground">{metrics.throughput}</div>
              <div className="text-muted-foreground">Units/Day</div>
            </div>
          </div>
        </div>
        
        <div className="bg-background/90 backdrop-blur-sm border border-border/50 rounded-lg px-3 py-2 shadow-sm">
          <div className="flex items-center space-x-2">
            <Clock size={14} className="text-secondary" />
            <div className="text-xs">
              <div className="font-medium text-foreground">{metrics.efficiency}%</div>
              <div className="text-muted-foreground">Efficiency</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBoxesDivider;