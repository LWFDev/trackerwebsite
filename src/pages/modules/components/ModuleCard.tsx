
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ModuleCardProps {
  module: {
    title: string;
    description: string;
    icon: React.ReactNode;
    link: string;
    color?: string;
    category: string;
  };
}

const ModuleCard = ({ module }: ModuleCardProps) => {
  // Function to handle smooth scrolling and navigation
  const handleModuleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Navigate after scroll starts
    setTimeout(() => {
      window.location.href = module.link;
    }, 100);
  };

  return (
    <Link 
      to={module.link} 
      onClick={handleModuleClick}
      className={cn(
        "group block h-full rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-zinc-800 hover:border-[#D4AF37] flex flex-col relative",
        module.color || "bg-zinc-900"
      )}
    >
      {/* Top-right hover icon */}
      <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-4 z-10">
        <ArrowUpRight className="w-3 h-3 text-[#D4AF37]" />
      </div>

      <div className="bg-zinc-900 p-4 flex items-center space-x-4">
        <div className="bg-zinc-800 p-3 rounded-lg border border-zinc-700 group-hover:border-[#D4AF37]">
          {module.icon}
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
