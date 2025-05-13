
import React, { useEffect, useRef, useState } from 'react';
import { Truck } from 'lucide-react';

interface AnimatedTruckDividerProps {
  className?: string;
}

const AnimatedTruckDivider = ({ className = "" }: AnimatedTruckDividerProps) => {
  const [trucks, setTrucks] = useState<number[]>([0]);
  const truckContainerRef = useRef<HTMLDivElement>(null);
  const animationRefs = useRef<Animation[]>([]);
  const timerRefs = useRef<NodeJS.Timeout[]>([]);
  
  // Use to track the first truck's animation state
  const isFirstCycleRef = useRef<boolean>(true);

  useEffect(() => {
    const animateTrucks = () => {
      if (!truckContainerRef.current) return;
      
      // Clear previous animations and timers
      animationRefs.current.forEach(animation => {
        if (animation) animation.cancel();
      });
      
      timerRefs.current.forEach(timer => {
        clearTimeout(timer);
      });
      
      animationRefs.current = [];
      timerRefs.current = [];
      
      // Create animations for all trucks
      const truckElements = truckContainerRef.current.querySelectorAll('.truck-element');
      
      truckElements.forEach((element, index) => {
        // Configure animation parameters
        const minDelay = 400; // 0.4 seconds in milliseconds
        const randomAdditionalDelay = Math.random() * 600; // Random additional delay up to 0.6 seconds
        const startDelay = index * minDelay + randomAdditionalDelay;
        
        // Vary the starting positions and timing for a more natural look
        const startPosition = -50 - (Math.random() * 100);
        const duration = 7000 + (Math.random() * 2000); // Between 7-9 seconds

        // Create animation cycle
        const createContinuousAnimation = (element: HTMLElement, isInitial = false) => {
          const startPos = isInitial ? startPosition : -50 - (Math.random() * 100);
          const animDuration = isInitial ? duration : 7000 + (Math.random() * 2000);
          
          // Create a new animation
          const animation = element.animate(
            [
              { transform: `translateX(${startPos}px) translateY(-50%)` },
              { transform: `translateX(calc(100vw + 50px)) translateY(-50%)` }
            ],
            {
              duration: animDuration,
              iterations: 1,
              easing: 'linear',
              fill: 'forwards'
            }
          );
          
          // Special handling for first truck
          if (index === 0) {
            // Schedule spawning of new truck based on animation duration
            const newTruckTimer = setTimeout(() => {
              setTrucks(prevTrucks => {
                if (prevTrucks.length >= 10) return prevTrucks;
                return [...prevTrucks, prevTrucks.length];
              });
            }, animDuration);
            
            timerRefs.current.push(newTruckTimer);
            
            // Pre-schedule the next animation to start exactly when this one finishes
            // This is the key to preventing the pause
            const nextAnimationTimer = setTimeout(() => {
              // Schedule the next animation to start exactly when current one completes
              createContinuousAnimation(element);
            }, animDuration - 20); // Start slightly before current animation ends to ensure no gap
            
            timerRefs.current.push(nextAnimationTimer);
          } else {
            // For other trucks, use the onfinish to start the next cycle
            animation.onfinish = () => {
              createContinuousAnimation(element);
            };
          }
          
          return animation;
        };
        
        // Use setTimeout to stagger the start of initial animations
        const timer = setTimeout(() => {
          const animation = createContinuousAnimation(element as HTMLElement, true);
          animationRefs.current.push(animation);
        }, startDelay);
        
        timerRefs.current.push(timer);
      });
    };

    animateTrucks();
    
    return () => {
      // Cleanup animations and timers
      animationRefs.current.forEach(animation => {
        if (animation) animation.cancel();
      });
      
      timerRefs.current.forEach(timer => {
        clearTimeout(timer);
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
