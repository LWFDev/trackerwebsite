
import React, { useEffect, useRef } from 'react';
import { Truck } from 'lucide-react';

interface AnimatedTruckDividerProps {
  className?: string;
}

const AnimatedTruckDivider = ({ className = "" }: AnimatedTruckDividerProps) => {
  const truckRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateTruck = () => {
      if (!truckRef.current) return;
      
      // Create the animation for the truck moving from left to right
      const animation = truckRef.current.animate(
        [
          { left: '-50px', transform: 'translateY(-50%)' },
          { left: 'calc(100% + 50px)', transform: 'translateY(-50%)' }
        ],
        {
          duration: 8000,
          iterations: Infinity,
          easing: 'linear'
        }
      );
    };

    animateTruck();
  }, []);

  return (
    <div className={`relative w-full h-16 my-8 ${className}`}>
      {/* Dotted line */}
      <div className="absolute top-1/2 left-0 w-full h-1 border-t-4 border-dotted border-zinc-700 transform -translate-y-1/2"></div>
      
      {/* Animated truck */}
      <div 
        ref={truckRef} 
        className="absolute top-1/2 left-0 z-10"
        style={{
          filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))'
        }}
      >
        <Truck 
          size={36} 
          className="text-gold-light" 
        />
      </div>
    </div>
  );
};

export default AnimatedTruckDivider;
