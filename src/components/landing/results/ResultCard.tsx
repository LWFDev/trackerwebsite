
import React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface ResultCardProps {
  company: string;
  quote: string;
  person: string;
  role: string;
  delay?: number;
}

const ResultCard = ({
  company,
  quote,
  person,
  role,
  delay = 0
}: ResultCardProps) => {
  return (
    <ScrollReveal delay={delay} direction="up" duration={800} className="h-full">
      <div className="bg-gray-800/90 dark:bg-zinc-900/90 light:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-700 dark:border-zinc-800 light:border-gray-700 h-full transform transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/40 hover:shadow-xl">
        
        {/* Vimeo video */}
        <div className="mb-4 rounded-lg overflow-hidden">
          <iframe 
            title="vimeo-player" 
            src="https://player.vimeo.com/video/1030900669?h=fd3735c8a0" 
            width="100%" 
            height="200" 
            frameBorder="0" 
            allowFullScreen
            className="w-full rounded-lg"
          />
        </div>
        
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gray-700 dark:bg-zinc-800 light:bg-gray-700 rounded-full mr-3 border-2 border-[#D4AF37]/30 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 dark:from-zinc-700 dark:to-zinc-900 light:from-gray-600 light:to-gray-800"></div>
          </div>
          <div>
            <div className="font-medium text-white">{person}</div>
            <div className="text-sm text-[#D4AF37]">{role}</div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default ResultCard;
