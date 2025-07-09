
import React, { useEffect, useRef, useState } from 'react';
import { Truck } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface AnimatedTruckDividerProps {
  className?: string;
}

const AnimatedTruckDivider = ({ className = "" }: AnimatedTruckDividerProps) => {
  const [trucksLeft, setTrucksLeft] = useState<number[]>([0]);
  const [trucksRight, setTrucksRight] = useState<number[]>([0]);
  const truckContainerRef = useRef<HTMLDivElement>(null);
  const animationRefs = useRef<Animation[]>([]);
  const isMobile = useIsMobile();

  useEffect(() => {
    const animateTrucks = () => {
      if (!truckContainerRef.current) return;
      
      // Clear previous animations
      animationRefs.current.forEach(animation => {
        if (animation) animation.cancel();
      });
      
      animationRefs.current = [];
      
      // Get all truck elements
      const leftTruckElements = truckContainerRef.current.querySelectorAll('.truck-left');
      const rightTruckElements = truckContainerRef.current.querySelectorAll('.truck-right');
      
      // Animate left-to-right trucks
      leftTruckElements.forEach((element, index) => {
        const minDelay = 400;
        const randomAdditionalDelay = Math.random() * 600;
        const startDelay = index * minDelay + randomAdditionalDelay;
        
        const startPosition = isMobile ? -40 - (Math.random() * 60) : -60 - (Math.random() * 120);
        const endPosition = isMobile ? window.innerWidth + 40 : window.innerWidth + 60;
        const duration = isMobile ? 6000 + (Math.random() * 2000) : 8000 + (Math.random() * 3000);
        
        setTimeout(() => {
          const animation = (element as HTMLElement).animate(
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
          
          animationRefs.current.push(animation);
          
          if (index === 0) {
            animation.onfinish = () => {
              setTrucksLeft(prevTrucks => {
                const maxTrucks = isMobile ? 4 : 6;
                if (prevTrucks.length >= maxTrucks) return prevTrucks;
                return [...prevTrucks, prevTrucks.length];
              });
              animateTrucks();
            };
          }
        }, startDelay);
      });

      // Animate right-to-left trucks
      rightTruckElements.forEach((element, index) => {
        const minDelay = 600; // Offset from left trucks
        const randomAdditionalDelay = Math.random() * 800;
        const startDelay = index * minDelay + randomAdditionalDelay;
        
        const startPosition = isMobile ? window.innerWidth + 40 + (Math.random() * 60) : window.innerWidth + 60 + (Math.random() * 120);
        const endPosition = isMobile ? -40 : -60;
        const duration = isMobile ? 6000 + (Math.random() * 2000) : 8000 + (Math.random() * 3000);
        
        setTimeout(() => {
          const animation = (element as HTMLElement).animate(
            [
              { transform: `translateX(${startPosition}px) translateY(-50%) scaleX(-1)` },
              { transform: `translateX(${endPosition}px) translateY(-50%) scaleX(-1)` }
            ],
            {
              duration,
              iterations: 1,
              easing: 'linear',
              fill: 'forwards'
            }
          );
          
          animationRefs.current.push(animation);
          
          if (index === 0) {
            animation.onfinish = () => {
              setTrucksRight(prevTrucks => {
                const maxTrucks = isMobile ? 3 : 5;
                if (prevTrucks.length >= maxTrucks) return prevTrucks;
                return [...prevTrucks, prevTrucks.length];
              });
              animateTrucks();
            };
          }
        }, startDelay);
      });
    };

    animateTrucks();
    
    return () => {
      animationRefs.current.forEach(animation => {
        if (animation) animation.cancel();
      });
    };
  }, [trucksLeft.length, trucksRight.length, isMobile]);

  // Adjust truck size for mobile
  const truckSize = isMobile ? 24 : 36;
  const height = isMobile ? 'h-12' : 'h-16';

  return (
    <div className={`relative w-full ${height} my-4 sm:my-8 overflow-hidden ${className}`}>
      {/* Dotted line */}
      <div className="absolute top-1/2 left-0 w-full h-1 border-t-4 border-dotted border-zinc-700 transform -translate-y-1/2"></div>
      
      {/* Container for animated trucks */}
      <div ref={truckContainerRef} className="relative w-full h-full overflow-hidden">
        {/* Left-to-right trucks */}
        {trucksLeft.map((id) => (
          <div 
            key={`left-${id}`}
            className="absolute top-1/2 transform -translate-y-1/2 truck-left"
            style={{
              filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))'
            }}
          >
            <Truck 
              size={truckSize} 
              className="text-gold-light" 
            />
          </div>
        ))}
        
        {/* Right-to-left trucks */}
        {trucksRight.map((id) => (
          <div 
            key={`right-${id}`}
            className="absolute top-1/2 transform -translate-y-1/2 truck-right"
            style={{
              filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))'
            }}
          >
            <Truck 
              size={truckSize} 
              className="text-gold-light" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedTruckDivider;
