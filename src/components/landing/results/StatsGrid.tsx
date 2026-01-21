
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
        {/* Floating stats - left side */}
        <div className="absolute left-0 top-0 hidden lg:flex flex-col gap-6 items-start pl-4">
          <FloatingStat number="39.4M" label="Units Produced" className="animate-fade-in" />
          <FloatingStat number="4 sec" label="Peak Order Rate" className="animate-fade-in [animation-delay:100ms]" />
        </div>
        
        {/* Floating stats - right side */}
        <div className="absolute right-0 top-0 hidden lg:flex flex-col gap-6 items-end pr-4">
          <FloatingStat number="5" label="Currencies" className="animate-fade-in [animation-delay:200ms]" />
          <FloatingStat number="30,476" label="Black Friday Orders" className="animate-fade-in [animation-delay:300ms]" />
        </div>
        
        {/* Main stats - 2 column center */}
        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 px-4">
          <FeaturedStat number="1.39M" label={t("Orders Processed")} bgColor="bg-gradient-to-r from-gold/75 to-amber-500/75 dark:from-gold-dark/75 dark:to-amber-600/75" />
          <FeaturedStat number="$150M+" label={t("Tracked Order Value")} bgColor="bg-gradient-to-r from-amber-500/75 to-emerald-500/75 dark:from-amber-600/75 dark:to-emerald-600/75" />
        </div>
        
        {/* Mobile floating stats - below main grid */}
        <div className="flex lg:hidden justify-around mt-6 px-4">
          <FloatingStat number="39.4M" label="Units Produced" />
          <FloatingStat number="5" label="Currencies" />
          <FloatingStat number="30,476" label="Black Friday" />
        </div>
      </div>
    </ScrollReveal>
  );
};

export default StatsGrid;
