
import React from "react";
import ScrollReveal from "@/components/ui/scroll-reveal";

const WorkflowHeader = () => {
  return (
    <ScrollReveal direction="down">
      <div className="text-center mb-20 max-w-4xl mx-auto">
        {/* Enhanced badge */}
        <div className="inline-block px-6 py-2 bg-gradient-to-r from-zinc-800/90 to-zinc-700/80 dark:from-zinc-800/90 dark:to-zinc-700/80 light:from-gray-100/90 light:to-gray-200/80 backdrop-blur-md rounded-full border border-[#D4AF37]/30 mb-8 shadow-2xl shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/40 transition-all duration-300 group cursor-pointer">
          <span className="text-sm text-[#D4AF37] uppercase font-semibold tracking-wider flex items-center">
            <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F2D675] mr-3 animate-pulse shadow-lg shadow-[#D4AF37]/50"></span>
            Streamlined Workflow
            <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">✨</span>
          </span>
        </div>
        
        {/* Enhanced title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in text-gray-900 dark:text-white transition-colors duration-300">
          Transform your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F2D675] to-[#D4AF37] relative bg-[length:200%_100%] animate-shimmer">
            entire workflow
            {/* Enhanced underline */}
            <svg className="absolute -bottom-3 left-0 w-full h-3 text-[#D4AF37]/40" viewBox="0 0 400 12" preserveAspectRatio="none">
              <path d="M0,6 Q100,0 200,6 T400,6" stroke="url(#gradient)" strokeWidth="3" fill="none" />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#F2D675" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 animate-fade-in leading-relaxed transition-colors duration-300" style={{ animationDelay: '0.2s' }}>
          From initial designs to final delivery, Tracker helps you manage every step of your production process with <span className="text-[#D4AF37] font-semibold">unprecedented efficiency</span>.
        </p>
      </div>
    </ScrollReveal>
  );
};

export default WorkflowHeader;
