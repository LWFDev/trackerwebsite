
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type ModuleCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay?: number;
};

const ModuleCard = ({ icon, title, description, link, delay = 0 }: ModuleCardProps) => {
  return (
    <ScrollReveal delay={delay * 100} className="group">
      <Link to={link}>
        <div className="relative h-full">
          {/* Hover glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D4AF37]/0 to-[#D4AF37]/0 rounded-xl opacity-0 blur group-hover:opacity-100 group-hover:from-[#D4AF37]/20 group-hover:to-[#F2D675]/20 transition-all duration-300"></div>
          
          <div className="relative h-full bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-lg p-6 transition-all duration-300 group-hover:border-[#D4AF37]/30 group-hover:shadow-lg group-hover:-translate-y-1 flex flex-col">
            <div className="mb-4 p-3 bg-black/30 backdrop-blur-sm rounded-lg w-fit border border-zinc-800">
              {icon}
            </div>
            
            <h3 className="text-lg font-semibold mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">{title}</h3>
            <p className="text-gray-400 text-sm mb-4 flex-grow">{description}</p>
            
            <div className="flex items-center text-[#D4AF37] text-sm font-medium mt-auto">
              <span>Learn more</span>
              <ArrowRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </Link>
    </ScrollReveal>
  );
};

export default ModuleCard;
