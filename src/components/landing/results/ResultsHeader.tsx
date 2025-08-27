
import React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLocalization } from "@/contexts/LocalizationContext";

const ResultsHeader = () => {
  const { t } = useLocalization();
  return (
    <div className="text-center mb-16 max-w-3xl mx-auto">
      <div className="inline-block px-4 py-1.5 bg-gray-800/80 dark:bg-zinc-900/80 light:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-700 dark:border-zinc-800 light:border-gray-700 mb-6">
        <span className="text-sm text-gold uppercase font-medium tracking-wider">{t("Results")}</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in text-white">
        {t("Real results from")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">{t("real customers")}</span>
      </h2>
      <p className="text-lg text-gray-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        {t("See how businesses like yours are using Tracker to streamline their workflows and increase productivity.")}
      </p>
    </div>
  );
};

export default ResultsHeader;
