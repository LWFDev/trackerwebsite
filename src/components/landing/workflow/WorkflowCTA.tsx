
import React from "react";

const WorkflowCTA = () => {
  return (
    <div className="hidden md:flex justify-center mt-16">
      <div className="relative group cursor-pointer">
        <div className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-zinc-800/50 to-zinc-700/30 rounded-full border border-[#D4AF37]/20 backdrop-blur-sm hover:border-[#D4AF37]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/20">
          <span className="text-[#D4AF37] text-sm font-medium">Complete Workflow</span>
          <div className="relative">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#D4AF37] group-hover:translate-x-1 transition-transform duration-300">
              <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
        {/* Flowing underline */}
        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#F2D675] group-hover:w-full transition-all duration-500"></div>
      </div>
    </div>
  );
};

export default WorkflowCTA;
