
import React, { useEffect, useRef, useState } from 'react';
import { Truck } from 'lucide-react';

interface AnimatedTruckDividerProps {
  className?: string;
}

const AnimatedTruckDivider = ({ className = "" }: AnimatedTruckDividerProps) => {
  const [trucks, setTrucks] = useState<number[]>([0]);
  const truckContainerRef = useRef<HTMLDivElement>(null);
  const animationRefs = useRef<Animation[]>([]);

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
        const startPosition = -50 - (Math.random() * 100);
        const duration = 7000 + (Math.random() * 2000); // Between 7-9 seconds
        
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
                if (prevTrucks.length >= 10) return prevTrucks;
                return [...prevTrucks, prevTrucks.length];
              });
              
              // Restart animation
              animateTrucks();
            };
          } else {
            // For other trucks, just restart their own animation
            animation.onfinish = () => {
              // Just restart this specific truck's animation with new random values
              const newStartPosition = -50 - (Math.random() * 100);
              const newDuration = 7000 + (Math.random() * 2000);
              
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
  }, [trucks.length]);

  return (
    <div className={`relative w-full h-16 my-8 ${className}`}>
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
              size={36} 
              className="text-gold-light" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedTruckDivider;
