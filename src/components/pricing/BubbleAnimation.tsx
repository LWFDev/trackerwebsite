
import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Droplet, Circle, Hexagon, Star } from "lucide-react";

// Optimization: Pre-define shapes to avoid re-renders
const shapes = [
  { Component: Droplet, rotation: 180 },
  { Component: Circle, rotation: 0 },
  { Component: Star, rotation: 0 },
  { Component: Hexagon, rotation: 0 }
];

// Generate positions efficiently
const generatePositions = (count: number, minDistance: number = 100) => {
  const positions: { x: number; y: number; shape: number; size: number; delay: number }[] = [];
  
  for (let i = 0; i < count; i++) {
    const shape = Math.floor(Math.random() * shapes.length);
    positions.push({
      x: Math.random() * 100, // percentage
      y: Math.random() * 100, // percentage
      shape,
      size: 8 + Math.random() * 20, // vary sizes
      delay: i * 0.3 + Math.random() * 2 // staggered delays
    });
  }
  
  return positions;
};

interface BubbleAnimationProps {
  count?: number;
  area?: "top" | "bottom" | "full";
  opacity?: number;
}

const BubbleAnimation: React.FC<BubbleAnimationProps> = ({
  count = 15,
  area = "full",
  opacity = 0.15
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  
  // Memoize positions to avoid recalculations
  const bubblePositions = React.useMemo(() => generatePositions(count), [count]);
  
  useEffect(() => {
    controls.start("visible");
    
    // Clean up animations when component unmounts
    return () => {
      controls.stop();
    };
  }, [controls]);

  // Determine vertical position based on area prop
  const getVerticalPos = () => {
    switch (area) {
      case "top": return "top-0 h-1/2";
      case "bottom": return "bottom-0 h-1/2";
      default: return "inset-0 h-full";
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`absolute w-full overflow-hidden pointer-events-none ${getVerticalPos()}`}
      aria-hidden="true"
    >
      {bubblePositions.map((pos, index) => {
        const { Component, rotation } = shapes[pos.shape];
        
        return (
          <motion.div
            key={`bubble-${index}`}
            className="absolute"
            style={{ 
              left: `${pos.x}%`, 
              top: `${pos.y}%`,
              willChange: 'transform, opacity',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, opacity, opacity/2],
              scale: [0, 1, 0.8],
              y: [0, -30, -60],
              transition: { 
                duration: 7 + Math.random() * 5,
                repeat: Infinity,
                repeatType: "loop",
                delay: pos.delay,
                ease: "easeInOut",
              }
            }}
          >
            <Component
              size={pos.size}
              className="text-gold"
              style={{ transform: `rotate(${rotation}deg)` }}
              strokeWidth={1.5}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default BubbleAnimation;
