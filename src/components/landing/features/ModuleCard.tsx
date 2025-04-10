
import React from "react";
import { Link, useNavigate } from "react-router-dom";

interface ModuleCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay?: number;
}

const ModuleCard = ({
  icon,
  title,
  description,
  link,
  delay = 0
}: ModuleCardProps) => {
  const navigate = useNavigate();
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    setTimeout(() => {
      navigate(link);
    }, 100);
  };
  
  return (
    <div 
      className="bg-zinc-900/80 backdrop-blur-sm p-6 rounded-xl border border-zinc-800 shadow-md hover:shadow-[#D4AF37]/20 hover:border-[#D4AF37]/30 transition-all duration-300 hover:-translate-y-1 group animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">{title}</h3>
      <p className="text-gray-400 text-sm mb-3 group-hover:text-gray-300 transition-colors duration-300">{description}</p>
      <Link 
        to={link} 
        onClick={handleClick}
        className="text-[#D4AF37] text-sm font-medium hover:underline inline-flex items-center"
      >
        Learn more 
        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
};

export default ModuleCard;
