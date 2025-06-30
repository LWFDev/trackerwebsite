
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
      <div className="bg-zinc-900/90 dark:bg-zinc-900/90 light:bg-white backdrop-blur-sm rounded-xl shadow-lg p-6 border border-zinc-800 dark:border-zinc-800 light:border-gray-200 h-full transform transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/40 hover:shadow-xl">
        <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 dark:from-white dark:to-gray-400 light:from-gray-900 light:to-gray-600">{company}</h3>
        <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 mb-6">
          "{quote}"
        </p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-zinc-800 dark:bg-zinc-800 light:bg-gray-100 rounded-full mr-3 border-2 border-[#D4AF37]/30 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-900 dark:from-zinc-700 dark:to-zinc-900 light:from-gray-200 light:to-gray-300"></div>
          </div>
          <div>
            <div className="font-medium text-white dark:text-white light:text-gray-900">{person}</div>
            <div className="text-sm text-[#D4AF37]">{role}</div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default ResultCard;
