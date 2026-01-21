import React from "react";
import StatsGrid from "./results/StatsGrid";

const StatsSection = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-slate-50/40 via-gold-light-opacity-20 to-slate-100/30 dark:from-slate-950/20 dark:via-gold-opacity-10 dark:to-slate-900/15 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <StatsGrid />
      </div>
    </section>
  );
};

export default StatsSection;
