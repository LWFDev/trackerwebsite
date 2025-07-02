
import React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface ResultMetricProps {
  icon: React.ReactNode;
  percentage: string;
  text: string;
  delay?: number;
}

const ResultMetric = ({ icon, percentage, text, delay = 0 }: ResultMetricProps) => {
  return (
    <ScrollReveal delay={delay} direction="up" distance="20px" duration={800} className="mb-8">
      <div className="flex items-start">
        <div className="mr-4 p-3 bg-gray-700/80 dark:bg-zinc-800/80 light:bg-gray-700/80 rounded-lg border border-gray-600 dark:border-zinc-700 light:border-gray-600 text-[#D4AF37]">
          {icon}
        </div>
        <div>
          <div className="mb-1 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">{percentage}</div>
          <div className="text-gray-300">{text}</div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default ResultMetric;
