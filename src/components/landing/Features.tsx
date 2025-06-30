
import React from "react";
import FeaturesSection from "./features/FeaturesSection";
import ModulesSection from "./features/ModulesSection";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import BackgroundElements from "./features/BackgroundElements";
import { Separator } from "@/components/ui/separator";

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white dark:bg-black text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Animated background elements */}
      <BackgroundElements />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <FeaturesSection />
        </ScrollReveal>
        
        <div className="my-16">
          <Separator className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-zinc-800 to-transparent" />
        </div>
        
        <ScrollReveal delay={300}>
          <ModulesSection />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Features;
