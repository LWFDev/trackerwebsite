
import React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLocalization } from "@/contexts/LocalizationContext";

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

interface FloatingStatProps {
  number: string;
  label: string;
  className?: string;
}

const FloatingStat = ({ number, label, className = "" }: FloatingStatProps) => {
  return (
    <div className={`text-white/70 text-center ${className}`}>
      <div className="text-lg md:text-xl font-semibold">{number}</div>
      <div className="text-xs opacity-70">{label}</div>
    </div>
  );
};

const StatsGrid = () => {
  const { t } = useLocalization();
  
  return (
    <ScrollReveal className="mb-12">
      <h3 className="text-xl md:text-2xl text-center mb-6 text-gray-700 dark:text-gray-300">
        <span className="font-bold">2025</span> Year In Review
      </h3>
      
      <div className="relative py-8">
        {/* Floating cloud stats - scattered on left */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8 items-start pl-8">
          <FloatingStat number="4 sec" label="Peak Order Rate" className="animate-fade-in -translate-x-2" />
        </div>
        
        {/* Floating cloud stats - scattered on right */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8 items-end pr-8">
          <FloatingStat number="5" label="Currencies Supported" className="animate-fade-in translate-x-2" />
          <FloatingStat number="30,476" label="Black Friday Orders" className="animate-fade-in translate-x-2 mt-4" />
        </div>
        
        {/* Main stats - 4 column grid */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 px-4">
          <FeaturedStat number="1.39M" label={t("Orders Processed")} bgColor="bg-gradient-to-r from-gold/75 to-gold-light/75 dark:from-gold-dark/75 dark:to-gold/75" />
          <FeaturedStat number="39.4M" label={t("Units Through Production")} bgColor="bg-gradient-to-r from-gold-light/75 to-amber-500/75 dark:from-gold/75 dark:to-amber-600/75" />
          <FeaturedStat number="$150M+" label={t("Tracked Order Value")} bgColor="bg-gradient-to-r from-amber-500/75 to-emerald-500/75 dark:from-amber-600/75 dark:to-emerald-600/75" />
          <FeaturedStat number="22,190" label={t("Biggest Dispatch · Dec 16")} bgColor="bg-gradient-to-r from-emerald-500/75 to-emerald-600/75 dark:from-emerald-600/75 dark:to-emerald-700/75" />
        </div>
        
        {/* Mobile cloud stats - below main grid */}
        <div className="flex xl:hidden justify-center gap-8 mt-6 px-4">
          <FloatingStat number="4 sec" label="Peak Order Rate" />
          <FloatingStat number="5" label="Currencies" />
          <FloatingStat number="30,476" label="Black Friday Orders" />
        </div>
      </div>
    </ScrollReveal>
  );
};

export default StatsGrid;
