
import React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const ResultsHeader = () => {
  return (
    <div className="text-center mb-16 max-w-3xl mx-auto">
      <div className="inline-block px-4 py-1.5 bg-zinc-900/80 dark:bg-zinc-900/80 light:bg-white/80 backdrop-blur-sm rounded-full border border-zinc-800 dark:border-zinc-800 light:border-gray-300 mb-6">
        <span className="text-sm text-[#D4AF37] uppercase font-medium tracking-wider">Results</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in text-white dark:text-white light:text-gray-900">
        Real results from <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">real customers</span>
      </h2>
      <p className="text-lg text-gray-400 dark:text-gray-400 light:text-gray-600 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        See how businesses like yours are using Tracker to streamline their workflows and increase productivity.
      </p>
    </div>
  );
};

export default ResultsHeader;
