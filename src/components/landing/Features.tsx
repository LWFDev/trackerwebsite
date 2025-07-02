
import React from "react";
import FeaturesSection from "./features/FeaturesSection";
import ModulesSection from "./features/ModulesSection";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import BackgroundElements from "./features/BackgroundElements";
import { Separator } from "@/components/ui/separator";

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-br from-white via-emerald-50/30 to-green-50/20 dark:from-black dark:via-emerald-950/20 dark:to-green-950/10 light:from-gray-50 light:via-emerald-50/30 light:to-green-50/20 text-gray-900 dark:text-white light:text-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Enhanced background elements with green theme */}
      <BackgroundElements />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <FeaturesSection />
        </ScrollReveal>
        
        <div className="my-16">
          <Separator className="h-px bg-gradient-to-r from-transparent via-emerald-400/30 dark:via-emerald-600/30 light:via-emerald-400/30 to-transparent" />
        </div>
        
        <ScrollReveal delay={300}>
          <ModulesSection />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Features;
