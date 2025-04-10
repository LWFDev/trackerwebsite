
import React from "react";
import FeaturesSection from "./features/FeaturesSection";
import ModulesSection from "./features/ModulesSection";

const Features = () => {
  return (
    <section id="features" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-zinc-900/30 blur-[100px] top-40 -left-20"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#D4AF37]/5 blur-[120px] bottom-20 right-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <FeaturesSection />
        <ModulesSection />
      </div>
    </section>
  );
};

export default Features;
