
import React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLocalization } from "@/contexts/LocalizationContext";

interface FeaturedStatProps {
  number: string;
  label: string;
}

const FeaturedStat = ({ number, label }: FeaturedStatProps) => {
  return (
    <div className="p-6 flex flex-col items-center justify-center h-full text-center">
      <div className="text-4xl font-bold mb-2 text-white">{number}</div>
      <div className="text-sm opacity-80 text-white">{label}</div>
    </div>
  );
};

const StatsGrid = () => {
  const { t } = useLocalization();
  
  return (
    <ScrollReveal className="mb-12">
      <div className="rounded-xl overflow-hidden bg-gradient-to-r from-gold via-emerald-500 to-emerald-600 dark:from-gold-dark dark:via-emerald-600 dark:to-emerald-700">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
          <FeaturedStat number="1.5M+" label={t("Orders Processed")} />
          <FeaturedStat number="2M+" label={t("Garments Designed")} />
          <FeaturedStat number="7.3%" label={t("Average profit increase")} />
          <FeaturedStat number="32%" label={t("Average time saved")} />
        </div>
      </div>
    </ScrollReveal>
  );
};

export default StatsGrid;
