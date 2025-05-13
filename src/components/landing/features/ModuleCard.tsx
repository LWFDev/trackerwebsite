
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ArrowRight, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

type ModuleCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay?: number;
  featured?: boolean;
};

const ModuleCard = ({ icon, title, description, link, delay = 0, featured = false }: ModuleCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ScrollReveal 
      delay={delay * 100} 
      className="group" 
      distance="30px" 
      direction="up" 
      duration={800}
    >
      <Link to={link}>
        <div 
          className="relative h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Simplified hover effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D4AF37]/0 to-[#D4AF37]/0 rounded-xl opacity-0 group-hover:opacity-100 group-hover:from-[#D4AF37]/20 group-hover:to-[#F2D675]/20 transition-all duration-300"></div>
          
          {/* Featured badge */}
          {featured && (
            <div className="absolute -top-3 -right-2 z-10">
              <div className="bg-[#D4AF37] text-black text-xs font-bold px-3 py-1 rounded-full flex items-center">
                <Award size={12} className="mr-1" /> POPULAR
              </div>
            </div>
          )}
          
          <div className="relative h-full bg-zinc-900/80 border border-zinc-800 rounded-lg p-6 transition-all duration-300 group-hover:border-[#D4AF37]/30 group-hover:shadow-md flex flex-col">
            {/* Simplified decorative corner accent */}
            <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden opacity-30 group-hover:opacity-60 transition-opacity duration-300">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#D4AF37]/30 to-transparent transform rotate-45 translate-x-8 -translate-y-8"></div>
            </div>
            
            <div className="mb-4 p-3 bg-black/30 rounded-lg w-fit border border-zinc-800 group-hover:border-[#D4AF37]/30 transition-all duration-300 relative overflow-hidden">
              {/* Simplified gradient underline */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#D4AF37]/70 to-[#F2D675]/70 group-hover:w-full transition-all duration-500 ease-in-out"></div>
              {icon}
            </div>
            
            <h3 className="text-lg font-semibold mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">{title}</h3>
            <p className="text-gray-400 text-sm mb-4 flex-grow group-hover:text-gray-300 transition-colors duration-300">{description}</p>
            
            <div className="flex items-center text-[#D4AF37] text-sm font-medium mt-auto">
              <span>Learn more</span>
              <ArrowRight 
                className={`ml-1 w-4 h-4 transition-transform duration-300 ease-out ${isHovered ? 'translate-x-1' : ''}`}
              />
            </div>
            
            {/* "New" indicator for selected items */}
            {title.includes("Designer") || title.includes("Logos") ? (
              <div className="absolute top-5 right-5 bg-zinc-800 text-xs font-bold px-2 py-0.5 rounded text-[#D4AF37] border border-[#D4AF37]/30">
                NEW
              </div>
            ) : null}
            
            {/* "Patent pending" for specific modules */}
            {title.includes("Warehouse") || title.includes("Production") ? (
              <div className="absolute bottom-4 right-4 text-xs text-gray-500">
                Patent Pending
              </div>
            ) : null}
            
            {/* Removed particle effect on hover (small dots) for better performance */}
          </div>
        </div>
      </Link>
    </ScrollReveal>
  );
};

export default ModuleCard;
