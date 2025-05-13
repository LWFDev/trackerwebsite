
import React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface SectionTitleProps {
  label: string;
  title: React.ReactNode;
  description: string;
  descriptionDelay?: number;
}

const SectionTitle = ({ 
  label, 
  title, 
  description, 
  descriptionDelay = 0.2 
}: SectionTitleProps) => {
  return (
    <div className="text-center mb-16 max-w-3xl mx-auto">
      <ScrollReveal>
        <div className="inline-block px-4 py-1.5 bg-zinc-900/80 backdrop-blur-sm rounded-full border border-zinc-800 mb-6">
          <span className="text-sm text-[#D4AF37] uppercase font-medium tracking-wider">{label}</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          {title}
        </h2>
      </ScrollReveal>
      
      <ScrollReveal delay={descriptionDelay}>
        <p className="text-lg text-gray-400">
          {description}
        </p>
      </ScrollReveal>
    </div>
  );
};

export default SectionTitle;
