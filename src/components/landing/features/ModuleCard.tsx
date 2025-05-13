
import React from "react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ArrowUpRight } from "lucide-react";

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
      <Link to={link} className="block h-full">
        <div className="h-full p-6 bg-zinc-900/80 backdrop-blur-sm rounded-xl border border-zinc-800 transition-all duration-300 hover:border-[#D4AF37]/40 hover:shadow-lg hover:shadow-[#D4AF37]/5 relative overflow-hidden">
          {/* Subtle gradient overlay that appears on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover:from-[#D4AF37]/2 group-hover:to-[#D4AF37]/10 transition-all duration-500"></div>
          
          {/* Content */}
          <div className="relative z-10">
            <div className="mb-5 w-10 h-10 flex items-center justify-center text-[#D4AF37] transition-transform duration-300 group-hover:scale-110">
              {icon}
            </div>
            
            <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-[#D4AF37] transition-colors duration-300">{title}</h3>
            <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-8">{description}</p>
            
            <div className="absolute bottom-6 right-6 w-6 h-6 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-4">
              <ArrowUpRight className="w-3 h-3 text-[#D4AF37]" />
            </div>
          </div>
        </div>
      </Link>
    </ScrollReveal>
  );
};

export default ModuleCard;
