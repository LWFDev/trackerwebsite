
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { scrollToTop } from "@/utils/navigation";
import { OptimizedImage } from "@/hooks/useImageOptimization";

import { Module } from "@/types/modules";

interface ModuleCardProps {
  module: Module;
  prefersReducedMotion?: boolean;
}

const ModuleCard = ({ module, prefersReducedMotion = false }: ModuleCardProps) => {
  // Function to handle smooth scrolling and navigation
  const handleModuleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    scrollToTop();
  };

  return (
    <Link 
      to={module.link} 
      onClick={handleModuleClick}
      className={cn(
        "group block h-full rounded-lg overflow-hidden shadow-lg border border-zinc-800 hover:border-gold flex flex-col relative",
        prefersReducedMotion 
          ? "transition-colors duration-300" 
          : "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        module.color || "bg-zinc-900"
      )}
    >
      {/* Top-right hover icon */}
      <div className={cn(
        "absolute top-4 right-4 w-6 h-6 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center opacity-0 group-hover:opacity-100 z-10",
        prefersReducedMotion 
          ? "transition-opacity duration-300" 
          : "transition-all duration-300 transform group-hover:translate-x-0 translate-x-4"
      )}>
        <ArrowUpRight className="w-3 h-3 text-gold" />
      </div>

      <div className="bg-zinc-900 p-4 flex items-center space-x-4">
        <div className="bg-zinc-800 p-3 rounded-lg border border-zinc-700 group-hover:border-gold">
          <OptimizedImage 
            src={module.icon.src} 
            alt={module.icon.alt} 
            className="h-8 w-8"
          />
        </div>
        <h3 className="text-xl font-semibold text-white">{module.title}</h3>
      </div>
      
      <div className="p-6 bg-black/40 backdrop-blur-sm flex-1 flex flex-col">
        <p className="text-gray-300 mb-6 flex-1">{module.description}</p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-zinc-400 text-sm">{module.category}</span>
        </div>
      </div>
    </Link>
  );
};

export default ModuleCard;
