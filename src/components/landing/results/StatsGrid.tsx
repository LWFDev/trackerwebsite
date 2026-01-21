
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <FeaturedStat number="1.5M+" label={t("Orders Processed")} bgColor="bg-gradient-to-r from-gold to-amber-500 dark:from-gold-dark dark:to-amber-600" />
        <FeaturedStat number="2M+" label={t("Garments Designed")} bgColor="bg-gradient-to-r from-amber-500 to-emerald-400 dark:from-amber-600 dark:to-emerald-500" />
        <FeaturedStat number="7.3%" label={t("Average profit increase")} bgColor="bg-gradient-to-r from-emerald-400 to-emerald-500 dark:from-emerald-500 dark:to-emerald-600" />
        <FeaturedStat number="32%" label={t("Average time saved")} bgColor="bg-gradient-to-r from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700" />
      </div>
    </ScrollReveal>
  );
};

export default StatsGrid;
