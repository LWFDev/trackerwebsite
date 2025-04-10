
import React from "react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ 
  icon: Icon,
  title, 
  description,
  delay = 0
}: FeatureCardProps) => {
  return (
    <div 
      className="bg-zinc-900/80 backdrop-blur-sm p-8 rounded-xl border border-zinc-800 shadow-lg hover:shadow-[#D4AF37]/20 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/30 group animate-fade-in"
      style={{ 
        animationDelay: `${delay}s`,
      }}
    >
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-black to-zinc-900 flex items-center justify-center mb-6 group-hover:shadow-inner shadow-lg transition-all duration-300">
        <Icon className="w-7 h-7 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" />
      </div>
      <h3 className="text-xl font-semibold mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">{title}</h3>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{description}</p>
    </div>
  );
};

export default FeatureCard;
