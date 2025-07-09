
import React from "react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ArrowUpRight } from "lucide-react";
import { scrollToTop } from "@/utils/navigation";

interface ModuleCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay?: number;
}

const ModuleCard = ({ icon, title, description, link, delay = 0 }: ModuleCardProps) => {
  return (
    <ScrollReveal delay={delay} direction="up" className="group">
      <Link to={link} onClick={scrollToTop} className="block h-full">
        <div className="h-full p-6 bg-gray-50 dark:bg-zinc-900/80 light:bg-white backdrop-blur-sm rounded-xl border border-gray-200 dark:border-zinc-800 light:border-gray-200 transition-all duration-300 hover:border-gold-opacity-40 hover:shadow-lg hover:shadow-gold-opacity-5 relative overflow-hidden">
          {/* Subtle gradient overlay that appears on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-gold-opacity-0 to-gold-opacity-0 group-hover:from-gold-opacity-0 group-hover:to-gold-opacity-10 transition-all duration-500"></div>
          
          {/* Content */}
          <div className="relative z-10">
            <div className="mb-5 w-10 h-10 flex items-center justify-center text-gold transition-transform duration-300 group-hover:scale-110">
              {icon}
            </div>
            
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white light:text-gray-900 group-hover:text-gold transition-colors duration-300">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 light:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-300 light:group-hover:text-gray-500 transition-colors duration-300 mb-8">{description}</p>
            
            <div className="absolute top-6 right-6 w-6 h-6 rounded-full bg-gray-200 dark:bg-zinc-800 light:bg-gray-200 border border-gray-300 dark:border-zinc-700 light:border-gray-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-4">
              <ArrowUpRight className="w-3 h-3 text-gold" />
            </div>
          </div>
        </div>
      </Link>
    </ScrollReveal>
  );
};

export default ModuleCard;
