
import React from "react";
import { Link, useNavigate } from "react-router-dom";

interface ModuleItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  learnMoreLink: string;
}

const ModuleItem = ({ title, description, icon, learnMoreLink }: ModuleItemProps) => {
  const navigate = useNavigate();
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Use setTimeout to allow the scroll to start before navigation
    setTimeout(() => {
      navigate(learnMoreLink);
    }, 100);
  };
  
  return (
    <Link 
      to={learnMoreLink} 
      onClick={handleClick}
      className="block bg-zinc-900 rounded-lg border border-zinc-800 p-5 transition-all duration-300 hover:shadow-lg hover:border-gold hover:-translate-y-1 group"
    >
      <div className="flex">
        <div className="flex-shrink-0 mr-4 bg-zinc-800 p-3 rounded-lg h-fit border border-zinc-700 group-hover:border-gold transition-all">
          {icon}
        </div>
        <div>
          <h3 className="font-medium text-white mb-1 group-hover:text-gold transition-colors duration-300">{title}</h3>
          <p className="text-zinc-400 text-sm mb-2 group-hover:text-zinc-300 transition-colors duration-300">{description}</p>
          <div className="text-gold text-sm inline-flex items-center">
            Learn more
            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ModuleItem;
