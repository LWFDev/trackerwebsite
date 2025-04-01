
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

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
  const handleModuleClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Navigate after scroll starts
    setTimeout(() => {
      window.location.href = link;
    }, 100);
  };

  return (
    <div 
      className={cn(
        "rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-zinc-800 hover:border-[#D4AF37]",
        module.color || "bg-zinc-900"
      )}
    >
      <div className="bg-zinc-900 p-4 flex items-center space-x-4">
        <div className="bg-zinc-800 p-3 rounded-lg border border-zinc-700 group-hover:border-[#D4AF37]">
          {module.icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{module.title}</h3>
      </div>
      
      <div className="p-6 bg-black/40 backdrop-blur-sm">
        <p className="text-gray-300 mb-6">{module.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-zinc-400 text-sm">{module.category}</span>
          <Link 
            to={module.link} 
            onClick={(e) => handleModuleClick(e, module.link)}
            className="inline-flex items-center text-gold-DEFAULT hover:text-gold-light"
          >
            Explore 
            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;
