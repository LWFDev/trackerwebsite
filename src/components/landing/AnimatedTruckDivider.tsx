
import React from 'react';
import { Truck } from 'lucide-react';

interface AnimatedTruckDividerProps {
  className?: string;
}

const AnimatedTruckDivider = ({ className = "" }: AnimatedTruckDividerProps) => {
  return (
    <div className={`relative w-full h-16 my-8 ${className}`}>
      {/* Dotted line */}
      <div className="absolute top-1/2 left-0 w-full h-1 border-t-4 border-dotted border-zinc-700 transform -translate-y-1/2"></div>
      
      {/* Single truck with simple animation */}
      <div className="relative w-full h-full overflow-hidden">
        <div 
          className="absolute top-1/2 transform -translate-y-1/2 truck"
          style={{
            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
            animation: 'truckMove 10s linear infinite'
          }}
        >
          <Truck 
            size={36} 
            className="text-gold-light" 
          />
        </div>
        
        {/* Additional trucks with different speeds for variety */}
        <div 
          className="absolute top-1/2 transform -translate-y-1/2 truck-delayed"
          style={{
            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
            animation: 'truckMove 12s linear 2s infinite'
          }}
        >
          <Truck 
            size={36} 
            className="text-gold-light" 
          />
        </div>
        
        <div 
          className="absolute top-1/2 transform -translate-y-1/2 truck-delayed-more"
          style={{
            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
            animation: 'truckMove 11s linear 5s infinite'
          }}
        >
          <Truck 
            size={36} 
            className="text-gold-light" 
          />
        </div>
        
        {/* Add style with keyframes animation */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes truckMove {
              0% {
                transform: translateX(-50px) translateY(-50%);
              }
              100% {
                transform: translateX(calc(100vw + 50px)) translateY(-50%);
              }
            }
          `
        }} />
      </div>
    </div>
  );
};

export default AnimatedTruckDivider;
