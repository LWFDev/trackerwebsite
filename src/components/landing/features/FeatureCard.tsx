
import React from "react";
import { LucideIcon } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <ScrollReveal delay={delay} direction="up" className="group">
      <div className="h-full p-6 bg-zinc-900/80 backdrop-blur-sm rounded-xl border border-zinc-800 transition-all duration-300 hover:border-[#D4AF37]/40 hover:shadow-lg hover:shadow-[#D4AF37]/5 flex flex-col">
        <div className="mb-5 p-3 bg-zinc-800 w-12 h-12 rounded-lg border border-zinc-700 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/30 transition-all duration-300">
          <Icon className="w-5 h-5" />
        </div>
        
        <h3 className="text-xl font-semibold mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">{title}</h3>
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{description}</p>
      </div>
    </ScrollReveal>
  );
};

export default FeatureCard;
