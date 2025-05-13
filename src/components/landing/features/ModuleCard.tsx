
import React, { useRef, useState } from "react";
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
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Handle 3D effect on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate rotation based on mouse position
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 5; // Max 5 degrees
    const rotateX = ((centerY - y) / centerY) * 5; // Max 5 degrees

    // Apply transform
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  // Reset transform on mouse leave
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    setIsHovered(false);
  };

  return (
    <ScrollReveal delay={delay} direction="up" className="group">
      <Link to={link} className="block h-full">
        <div 
          ref={cardRef}
          className="h-full p-6 bg-zinc-900/80 backdrop-blur-sm rounded-xl border border-zinc-800 transition-all duration-300 hover:border-[#D4AF37]/40 hover:shadow-lg hover:shadow-[#D4AF37]/5 relative overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          style={{ transition: 'all 0.2s ease-out' }}
        >
          {/* Enhanced gradient overlay that appears on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover:from-[#D4AF37]/5 group-hover:to-[#D4AF37]/15 transition-all duration-500"></div>
          
          {/* Content */}
          <div className="relative z-10">
            <div className="mb-5 w-10 h-10 flex items-center justify-center text-[#D4AF37] transition-transform duration-300 group-hover:scale-110">
              {icon}
            </div>
            
            <h3 className="font-playfair text-lg font-semibold mb-2 text-white group-hover:text-[#D4AF37] transition-colors duration-300">{title}</h3>
            <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-8">{description}</p>
            
            <div className={`absolute bottom-6 right-6 w-6 h-6 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center transition-all duration-300 transform ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
              <ArrowUpRight className="w-3 h-3 text-[#D4AF37]" />
            </div>
          </div>
        </div>
      </Link>
    </ScrollReveal>
  );
};

export default ModuleCard;
