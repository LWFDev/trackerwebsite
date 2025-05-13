
import React, { useEffect, useRef, useState } from 'react';
import { Truck } from 'lucide-react';

interface AnimatedTruckDividerProps {
  className?: string;
}

const AnimatedTruckDivider = ({ className = "" }: AnimatedTruckDividerProps) => {
  const [trucks, setTrucks] = useState<number[]>([0]);
  const truckContainerRef = useRef<HTMLDivElement>(null);
  const animationsRunningRef = useRef<boolean>(false);
  const animationRefs = useRef<(Animation | null)[]>([]);
  
  // Cleanup function to cancel all animations
  const cleanupAnimations = () => {
    if (animationRefs.current) {
      animationRefs.current.forEach(animation => {
        if (animation) animation.cancel();
      });
      animationRefs.current = [];
    }
  };

  useEffect(() => {
    if (!truckContainerRef.current || animationsRunningRef.current) return;
    
    // Start animations only once
    animationsRunningRef.current = true;
    
    // Add more trucks gradually
    const maxTrucks = 6;
    let currentTrucks = 1;
    
    const addTruckInterval = setInterval(() => {
      if (currentTrucks < maxTrucks) {
        setTrucks(prev => [...prev, prev.length]);
        currentTrucks++;
      } else {
        clearInterval(addTruckInterval);
      }
    }, 2000);
    
    // Setup continuous animations for all trucks
    const setupAnimations = () => {
      if (!truckContainerRef.current) return;
      
      const truckElements = truckContainerRef.current.querySelectorAll('.truck-element');
      if (!truckElements.length) return;
      
      // Cancel previous animations
      cleanupAnimations();
      
      truckElements.forEach((truckElement, index) => {
        const truck = truckElement as HTMLElement;
        
        // Calculate random speeds and starting positions
        const speed = 12 + Math.random() * 6; // seconds to cross screen
        const delay = index * 0.8 + Math.random() * 1.5; // staggered starts
        
        // Set initial position
        truck.style.transform = 'translateX(-50px) translateY(-50%)';
        
        // Create infinite CSS animation with keyframes
        truck.style.animation = `truckMove ${speed}s linear ${delay}s infinite`;
      });
    };
    
    // Add a keyframe rule for truck animation to ensure smooth, infinite movement
    const addKeyframeRule = () => {
      const styleSheet = document.createElement('style');
      styleSheet.id = 'truck-animation-style';
      styleSheet.textContent = `
        @keyframes truckMove {
          0% {
            transform: translateX(-50px) translateY(-50%);
          }
          100% {
            transform: translateX(calc(100vw + 50px)) translateY(-50%);
          }
        }
      `;
      document.head.appendChild(styleSheet);
    };
    
    // Add the keyframe rule only if it doesn't exist already
    if (!document.getElementById('truck-animation-style')) {
      addKeyframeRule();
    }
    
    // Start the animations
    setupAnimations();
    
    // Update animations when trucks are added
    const updateAnimationObserver = new MutationObserver(() => {
      setupAnimations();
    });
    
    if (truckContainerRef.current) {
      updateAnimationObserver.observe(truckContainerRef.current, { 
        childList: true 
      });
    }
    
    return () => {
      clearInterval(addTruckInterval);
      updateAnimationObserver.disconnect();
      cleanupAnimations();
      
      // Remove the style element when component unmounts
      const styleElement = document.getElementById('truck-animation-style');
      if (styleElement) {
        document.head.removeChild(styleElement);
      }
    };
  }, []);

  return (
    <div className={`relative w-full h-16 my-8 ${className}`}>
      {/* Dotted line */}
      <div className="absolute top-1/2 left-0 w-full h-1 border-t-4 border-dotted border-zinc-700 transform -translate-y-1/2"></div>
      
      {/* Container for animated trucks */}
      <div ref={truckContainerRef} className="relative w-full h-full overflow-hidden">
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
