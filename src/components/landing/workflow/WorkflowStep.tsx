
import React from "react";
import ScrollReveal from "@/components/ui/scroll-reveal";

interface WorkflowStepProps {
  number: string;
  title: string;
  description: string;
  delay?: number;
  isActive?: boolean;
}

const WorkflowStep = ({ 
  number, 
  title, 
  description,
  delay = 0,
  isActive = false
}: WorkflowStepProps) => {
  return (
    <ScrollReveal 
      delay={delay * 200} 
      className="flex flex-col items-center text-center group"
      duration={800}
      direction="up"
      distance="30px"
    >
      <div className="relative mb-6">
        {/* Enhanced glow effect - triggered by dot position */}
        <div className={`absolute inset-0 bg-gradient-to-r from-[#D4AF37]/30 to-[#F2D675]/40 rounded-2xl blur-xl transition-all duration-500 scale-150 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>
        <div className={`absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-[#F2D675]/30 rounded-xl blur-md transition-all duration-300 animate-pulse ${isActive ? 'opacity-100' : 'opacity-50'}`}></div>
        
        {/* Main number circle with enhanced styling */}
        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br relative z-10 from-[#D4AF37] via-[#F2D675] to-[#D4AF37] flex items-center justify-center text-black font-bold text-2xl shadow-2xl shadow-[#D4AF37]/40 transform transition-all duration-500 border-2 border-[#F2D675]/50 ${isActive ? 'scale-125 rotate-3 shadow-[#D4AF37]/60' : 'scale-100 rotate-0'}`}>
          {/* Animated shine effect */}
          <div className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent rounded-2xl transition-opacity duration-300 animate-pulse ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>
          {/* Rotating border */}
          <div className={`absolute -inset-1 bg-gradient-to-r from-[#D4AF37] via-[#F2D675] to-[#D4AF37] rounded-2xl animate-spin-slow transition-opacity duration-500 blur-sm ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>
          <span className="relative z-10">{number}</span>
        </div>
        
        {/* Floating particles */}
        <div className={`absolute -top-2 -right-2 w-3 h-3 bg-[#D4AF37] rounded-full animate-bounce transition-all duration-300 delay-100 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>
        <div className={`absolute -bottom-2 -left-2 w-2 h-2 bg-[#F2D675] rounded-full animate-float transition-all duration-300 delay-200 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>
      </div>
      
      <h3 className={`text-xl font-bold mb-4 transition-all duration-300 transform ${isActive ? 'text-[#D4AF37] scale-105' : 'text-white scale-100'}`}>{title}</h3>
      <p className={`text-sm transition-colors duration-300 max-w-[280px] mx-auto leading-relaxed ${isActive ? 'text-gray-200' : 'text-gray-400'}`}>{description}</p>
      
      {/* Bottom accent line */}
      <div className={`h-1 bg-gradient-to-r from-[#D4AF37] to-[#F2D675] mt-4 transition-all duration-500 rounded-full ${isActive ? 'w-20' : 'w-0'}`}></div>
    </ScrollReveal>
  );
};

export default WorkflowStep;
