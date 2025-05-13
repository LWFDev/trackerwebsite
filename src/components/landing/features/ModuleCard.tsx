
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

type ModuleCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay?: number;
};

const ModuleCard = ({ icon, title, description, link, delay = 0 }: ModuleCardProps) => {
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
          className="relative h-full transform-gpu transition-all duration-500"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Hover glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D4AF37]/0 to-[#D4AF37]/0 rounded-xl opacity-0 blur group-hover:opacity-100 group-hover:from-[#D4AF37]/20 group-hover:to-[#F2D675]/20 transition-all duration-300"></div>
          
          <div className="relative h-full bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-lg p-6 transition-all duration-500 group-hover:border-[#D4AF37]/30 group-hover:shadow-lg group-hover:-translate-y-1 flex flex-col">
            {/* Animated decorative corner accent */}
            <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden opacity-30 group-hover:opacity-60 transition-opacity duration-300">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#D4AF37]/30 to-transparent transform rotate-45 translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-all duration-500"></div>
            </div>
            
            <div className="mb-4 p-3 bg-black/30 backdrop-blur-sm rounded-lg w-fit border border-zinc-800 group-hover:border-[#D4AF37]/30 transition-all duration-300 relative overflow-hidden">
              {/* Animated gradient underline */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#D4AF37]/70 to-[#F2D675]/70 group-hover:w-full transition-all duration-700 ease-in-out"></div>
              {icon}
            </div>
            
            <h3 className="text-lg font-semibold mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">{title}</h3>
            <p className="text-gray-400 text-sm mb-4 flex-grow group-hover:text-gray-300 transition-colors duration-300">{description}</p>
            
            <div className="flex items-center text-[#D4AF37] text-sm font-medium mt-auto overflow-hidden">
              <span>Learn more</span>
              <ArrowRight 
                className={`ml-1 w-4 h-4 transition-transform duration-500 ease-out ${isHovered ? 'translate-x-1' : ''}`}
              />
            </div>
            
            {/* Particle effect on hover (small dots) */}
            {isHovered && (
              <>
                <div className="absolute right-6 bottom-10 w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40 animate-ping" style={{ animationDuration: '1.5s' }}></div>
                <div className="absolute right-12 bottom-16 w-1 h-1 rounded-full bg-[#D4AF37]/30 animate-ping" style={{ animationDuration: '2.1s' }}></div>
                <div className="absolute right-9 bottom-20 w-1 h-1 rounded-full bg-[#D4AF37]/20 animate-ping" style={{ animationDuration: '1.8s' }}></div>
              </>
            )}
          </div>
        </div>
      </Link>
    </ScrollReveal>
  );
};

export default ModuleCard;
