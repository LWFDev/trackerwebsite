
import React, { useEffect, useRef, useState } from 'react';
import { Truck } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface AnimatedTruckDividerProps {
  className?: string;
}

const AnimatedTruckDivider = ({ className = "" }: AnimatedTruckDividerProps) => {
  const [trucks, setTrucks] = useState<number[]>([0]);
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
      
      // Create animations for all trucks
      const truckElements = truckContainerRef.current.querySelectorAll('.truck-element');
      
      truckElements.forEach((element, index) => {
        // Ensure a minimum delay of 0.4 seconds between trucks
        const minDelay = 400; // 0.4 seconds in milliseconds
        const randomAdditionalDelay = Math.random() * 600; // Random additional delay up to 0.6 seconds
        const startDelay = index * minDelay + randomAdditionalDelay;
        
        // Vary the starting positions and timing for a more natural look
        // Use smaller values for mobile to fit smaller screens
        const startPosition = isMobile ? -30 - (Math.random() * 50) : -50 - (Math.random() * 100);
        const duration = isMobile ? 5000 + (Math.random() * 1500) : 7000 + (Math.random() * 2000); // Faster on mobile
        
        // Use setTimeout to stagger the start of animations
        setTimeout(() => {
          const animation = (element as HTMLElement).animate(
            [
              { transform: `translateX(${startPosition}px) translateY(-50%)` },
              { transform: `translateX(calc(100vw + 50px)) translateY(-50%)` }
            ],
            {
              duration,
              iterations: 1,
              easing: 'linear',
              fill: 'forwards'
            }
          );
          
          animationRefs.current.push(animation);
          
          // Only the first truck adds a new truck when it finishes
          if (index === 0) {
            animation.onfinish = () => {
              setTrucks(prevTrucks => {
                // Limit trucks to fewer on mobile
                const maxTrucks = isMobile ? 6 : 10;
                if (prevTrucks.length >= maxTrucks) return prevTrucks;
                return [...prevTrucks, prevTrucks.length];
              });
              
              // Restart animation
              animateTrucks();
            };
          } else {
            // For other trucks, just restart their own animation
            animation.onfinish = () => {
              // Just restart this specific truck's animation with new random values
              const newStartPosition = isMobile ? -30 - (Math.random() * 50) : -50 - (Math.random() * 100);
              const newDuration = isMobile ? 5000 + (Math.random() * 1500) : 7000 + (Math.random() * 2000);
              
              const newAnimation = (element as HTMLElement).animate(
                [
                  { transform: `translateX(${newStartPosition}px) translateY(-50%)` },
                  { transform: `translateX(calc(100vw + 50px)) translateY(-50%)` }
                ],
                {
                  duration: newDuration,
                  iterations: 1,
                  easing: 'linear',
                  fill: 'forwards'
                }
              );
              
              // Update the reference
              const indexToReplace = animationRefs.current.indexOf(animation);
              if (indexToReplace !== -1) {
                animationRefs.current[indexToReplace] = newAnimation;
              }
              
              // Set the same onfinish handler
              newAnimation.onfinish = animation.onfinish;
            };
          }
        }, startDelay);
      });
    };

    animateTrucks();
    
    return () => {
      // Cleanup animations
      animationRefs.current.forEach(animation => {
        if (animation) animation.cancel();
      });
    };
  }, [trucks.length, isMobile]);

  // Adjust truck size for mobile
  const truckSize = isMobile ? 24 : 36;
  const height = isMobile ? 'h-12' : 'h-16';

  return (
    <div className={`relative w-full ${height} my-4 sm:my-8 ${className}`}>
      {/* Dotted line */}
      <div className="absolute top-1/2 left-0 w-full h-1 border-t-4 border-dotted border-zinc-700 transform -translate-y-1/2"></div>
      
      {/* Container for animated trucks */}
      <div ref={truckContainerRef} className="relative w-full h-full">
        {/* Render all trucks */}
        {trucks.map((id) => (
          <div 
            key={id}
            className="absolute top-1/2 transform -translate-y-1/2 truck-element"
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
