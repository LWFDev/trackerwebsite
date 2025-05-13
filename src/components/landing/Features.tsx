
import React from "react";
import FeaturesSection from "./features/FeaturesSection";
import ModulesSection from "./features/ModulesSection";
import ScrollReveal from "@/components/ui/scroll-reveal";

const Features = () => {
  return (
    <section id="features" className="py-20 bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {/* Flowing gradient */}
        <div className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#D4AF37]/5 via-[#F2D675]/3 to-[#D4AF37]/8 blur-[120px] animate-morph top-20 -left-20"></div>
        <div className="absolute w-[600px] h-[600px] rounded-full bg-zinc-900/30 blur-[100px] bottom-20 right-10"></div>
        
        {/* Floating elements */}
        <div className="absolute top-32 left-[15%] w-8 h-8 rounded-md border border-[#D4AF37]/20 animate-float" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute bottom-40 right-[25%] w-12 h-12 rounded-full border border-[#D4AF37]/10 animate-float" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-1/2 right-[10%] w-16 h-16 rounded-lg border border-zinc-700/30 rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-10 h-10 rounded-full border-2 border-[#D4AF37]/10 animate-float" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Dot pattern */}
        <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <FeaturesSection />
        </ScrollReveal>
        
        <ScrollReveal delay={300}>
          <ModulesSection />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Features;
