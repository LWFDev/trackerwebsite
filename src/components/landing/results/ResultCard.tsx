
import React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface ResultCardProps {
  company: string;
  quote: string;
  person: string;
  role: string;
  delay?: number;
}

const ResultCard = ({ company, quote, person, role, delay = 0 }: ResultCardProps) => {
  return (
    <ScrollReveal delay={delay} direction="up" duration={800} className="h-full">
      <div className="bg-zinc-900/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-zinc-800 h-full transform transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/40 hover:shadow-xl">
        <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">{company}</h3>
        <p className="text-gray-400 mb-6">
          "{quote}"
        </p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-zinc-800 rounded-full mr-3 border-2 border-[#D4AF37]/30 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-900"></div>
          </div>
          <div>
            <div className="font-medium">{person}</div>
            <div className="text-sm text-[#D4AF37]">{role}</div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default ResultCard;
