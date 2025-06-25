
import React, { useEffect, useRef } from "react";

interface WorkflowLineProps {
  onStepChange: (step: number) => void;
}

const WorkflowLine = ({ onStepChange }: WorkflowLineProps) => {
  const lineRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateDot = () => {
      if (!dotRef.current || !lineRef.current) return;

      const animation = dotRef.current.animate(
        [
          { 
            left: '0%', 
            transform: 'translateY(-50%) scale(1)', 
            filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.8))' 
          },
          { 
            left: '25%', 
            transform: 'translateY(-50%) scale(1.2)', 
            filter: 'drop-shadow(0 0 12px rgba(212, 175, 55, 0.9))' 
          },
          { 
            left: '50%', 
            transform: 'translateY(-50%) scale(1)', 
            filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.8))' 
          },
          { 
            left: '75%', 
            transform: 'translateY(-50%) scale(1.2)', 
            filter: 'drop-shadow(0 0 12px rgba(212, 175, 55, 0.9))' 
          },
          { 
            left: '100%', 
            transform: 'translateY(-50%) scale(1)', 
            filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.8))' 
          }
        ],
        {
          duration: 5000,
          iterations: Infinity,
          easing: 'ease-in-out'
        }
      );

      // Track animation progress and activate steps
      const startTime = Date.now();
      const updateActiveStep = () => {
        const elapsed = (Date.now() - startTime) % 5000;
        const progress = elapsed / 5000;
        
        let currentStep = 0;
        if (progress >= 0.2 && progress < 0.4) currentStep = 1;
        else if (progress >= 0.4 && progress < 0.6) currentStep = 2;
        else if (progress >= 0.6 && progress < 0.8) currentStep = 3;
        else if (progress >= 0.8) currentStep = 4;
        
        onStepChange(currentStep);
        requestAnimationFrame(updateActiveStep);
      };
      
      updateActiveStep();
    };

    animateDot();
  }, [onStepChange]);

  return (
    <div ref={lineRef} className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent rounded-full shadow-lg shadow-[#D4AF37]/30">
      {/* Main moving dot with enhanced effects */}
      <div 
        ref={dotRef} 
        className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F2D675] shadow-xl"
        style={{
          left: '0%',
          filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.8))'
        }}
      >
        {/* Pulsing ring around dot */}
        <div className="absolute inset-0 rounded-full bg-[#D4AF37]/30 animate-ping"></div>
      </div>
        
      {/* Enhanced pulse dots with staggered animation */}
      <div className="absolute top-1/2 -translate-y-1/2 left-[25%] w-3 h-3 rounded-full bg-gradient-to-r from-[#D4AF37]/60 to-[#F2D675]/60 animate-pulse shadow-md"></div>
      <div className="absolute top-1/2 -translate-y-1/2 left-[50%] w-3 h-3 rounded-full bg-gradient-to-r from-[#D4AF37]/60 to-[#F2D675]/60 animate-pulse shadow-md" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-1/2 -translate-y-1/2 left-[75%] w-3 h-3 rounded-full bg-gradient-to-r from-[#D4AF37]/60 to-[#F2D675]/60 animate-pulse shadow-md" style={{ animationDelay: '1s' }}></div>
      
      {/* Flowing energy effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent rounded-full animate-pulse"></div>
    </div>
  );
};

export default WorkflowLine;
