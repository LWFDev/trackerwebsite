
import React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface FeaturedStatProps {
  number: string;
  label: string;
  bgColor: string;
}

const FeaturedStat = ({ number, label, bgColor }: FeaturedStatProps) => {
  return (
    <div className={`${bgColor} rounded-lg p-6 flex flex-col items-center justify-center h-full text-center transition-colors duration-300`}>
      <div className="text-4xl font-bold mb-2 text-white">{number}</div>
      <div className="text-sm opacity-80 text-white">{label}</div>
    </div>
  );
};

const StatsGrid = () => {
  return (
    <ScrollReveal className="mb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <FeaturedStat number="10,000+" label="Orders Processed" bgColor="bg-gradient-to-br from-emerald-600 to-emerald-700 dark:from-emerald-700 dark:to-emerald-800 light:from-emerald-600 light:to-emerald-700" />
        <FeaturedStat number="500+" label="Garments Designed" bgColor="bg-gradient-to-br from-green-500 to-emerald-600 dark:from-green-600 dark:to-emerald-700 light:from-green-500 light:to-emerald-600" />
        <FeaturedStat number="32%" label="Average time saved" bgColor="bg-gradient-to-br from-emerald-600 to-emerald-700 dark:from-emerald-700 dark:to-emerald-800 light:from-emerald-600 light:to-emerald-700" />
        <FeaturedStat number="24/7" label="Customer support" bgColor="bg-gradient-to-br from-green-500 to-emerald-600 dark:from-green-600 dark:to-emerald-700 light:from-green-500 light:to-emerald-600" />
      </div>
    </ScrollReveal>
  );
};

export default StatsGrid;
