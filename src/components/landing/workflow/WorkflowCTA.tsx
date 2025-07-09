
import React from "react";
const WorkflowCTA = () => {
  return <div className="hidden md:flex justify-center mt-16">
      <div className="relative group cursor-pointer">
        <div className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-zinc-800/50 to-zinc-700/30 border border-gold-opacity-20 backdrop-blur-sm hover:border-gold-opacity-40 transition-all duration-300 hover:shadow-lg hover:shadow-gold rounded">
          <span className="text-gold text-sm font-medium">Get Started</span>
          <div className="relative">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gold group-hover:translate-x-1 transition-transform duration-300">
              <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="absolute inset-0 bg-gold-opacity-20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </div>;
};
export default WorkflowCTA;
