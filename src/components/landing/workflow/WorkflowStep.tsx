
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
        <div className={`absolute inset-0 bg-gradient-to-r from-gold-opacity-30 to-gold-light-opacity-40 rounded-2xl blur-xl transition-all duration-500 scale-150 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>
        <div className={`absolute inset-0 bg-gradient-to-br from-gold-opacity-20 to-gold-light-opacity-30 rounded-xl blur-md transition-all duration-300 animate-pulse ${isActive ? 'opacity-100' : 'opacity-50'}`}></div>
        
        {/* Main number circle with enhanced styling */}
        <div className={`w-20 h-20 rounded-2xl bg-gold-gradient relative z-10 flex items-center justify-center text-gold-foreground font-bold text-2xl shadow-2xl shadow-gold transform transition-all duration-500 border-2 border-gold-light-opacity-50 ${isActive ? 'scale-125 rotate-3 shadow-gold-glow' : 'scale-100 rotate-0'}`}>
          {/* Animated shine effect */}
          <div className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent rounded-2xl transition-opacity duration-300 animate-pulse ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>
          {/* Rotating border */}
          <div className={`absolute -inset-1 bg-gold-gradient rounded-2xl animate-spin-slow transition-opacity duration-500 blur-sm ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>
          <span className="relative z-10">{number}</span>
        </div>
        
        {/* Floating particles */}
        <div className={`absolute -top-2 -right-2 w-3 h-3 bg-gold rounded-full animate-bounce transition-all duration-300 delay-100 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>
        <div className={`absolute -bottom-2 -left-2 w-2 h-2 bg-gold-light rounded-full animate-float transition-all duration-300 delay-200 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>
      </div>
      
      <h3 className={`text-xl font-bold mb-4 transition-all duration-300 transform ${isActive ? 'text-gold scale-105' : 'text-white scale-100'}`}>{title}</h3>
      <p className={`text-sm transition-colors duration-300 max-w-[280px] mx-auto leading-relaxed ${isActive ? 'text-gray-200' : 'text-gray-400'}`}>{description}</p>
      
      {/* Bottom accent line */}
      <div className={`h-1 bg-gold-gradient mt-4 transition-all duration-500 rounded-full ${isActive ? 'w-20' : 'w-0'}`}></div>
    </ScrollReveal>
  );
};

export default WorkflowStep;
