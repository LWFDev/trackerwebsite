
import React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface FeaturedStatProps {
  number: string;
  label: string;
  bgColor: string;
}

const FeaturedStat = ({ number, label, bgColor }: FeaturedStatProps) => {
  return (
    <div className={`${bgColor} rounded-lg p-6 flex flex-col items-center justify-center h-full text-center`}>
      <div className="text-4xl font-bold mb-2">{number}</div>
      <div className="text-sm opacity-80">{label}</div>
    </div>
  );
};

const StatsGrid = () => {
  return (
    <ScrollReveal className="mb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-white">
        <FeaturedStat number="10,000+" label="Orders processed monthly" bgColor="bg-gradient-to-br from-zinc-800 to-zinc-900" />
        <FeaturedStat number="500+" label="Active businesses" bgColor="bg-gradient-to-br from-[#D4AF37]/20 to-zinc-900" />
        <FeaturedStat number="32%" label="Average time saved" bgColor="bg-gradient-to-br from-zinc-800 to-zinc-900" />
        <FeaturedStat number="24/7" label="Customer support" bgColor="bg-gradient-to-br from-[#D4AF37]/20 to-zinc-900" />
      </div>
    </ScrollReveal>
  );
};

export default StatsGrid;
