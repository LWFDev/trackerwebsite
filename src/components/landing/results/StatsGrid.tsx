
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

const StatsGrid = () => {
  const { t } = useLocalization();
  
  return (
    <ScrollReveal className="mb-12">
      <h3 className="text-xl md:text-2xl text-center mb-6 text-gray-700 dark:text-gray-300">
        <span className="font-bold">2025</span> Year In Review
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <FeaturedStat number="1.39M" label={t("Orders Processed")} bgColor="bg-gradient-to-r from-gold/75 to-gold-light/75 dark:from-gold-dark/75 dark:to-gold/75" />
        <FeaturedStat number="39.4M" label={t("Units Through Production")} bgColor="bg-gradient-to-r from-gold-light/75 to-amber-500/75 dark:from-gold/75 dark:to-amber-600/75" />
        <FeaturedStat number="$150M+" label={t("Tracked Order Value")} bgColor="bg-gradient-to-r from-amber-500/75 to-emerald-500/75 dark:from-amber-600/75 dark:to-emerald-600/75" />
        <FeaturedStat number="5" label={t("Currencies Supported")} bgColor="bg-gradient-to-r from-emerald-500/75 to-emerald-600/75 dark:from-emerald-600/75 dark:to-emerald-700/75" />
      </div>
    </ScrollReveal>
  );
};

export default StatsGrid;
