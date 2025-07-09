
import React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const ResultsHeader = () => {
  return (
    <div className="text-center mb-16 max-w-3xl mx-auto">
      <div className="inline-block px-4 py-1.5 bg-gray-800/80 dark:bg-zinc-900/80 light:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-700 dark:border-zinc-800 light:border-gray-700 mb-6">
        <span className="text-sm text-gold-DEFAULT uppercase font-medium tracking-wider">Results</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in text-white">
        Real results from <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-DEFAULT to-gold-light">real customers</span>
      </h2>
      <p className="text-lg text-gray-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        See how businesses like yours are using Tracker to streamline their workflows and increase productivity.
      </p>
    </div>
  );
};

export default ResultsHeader;
