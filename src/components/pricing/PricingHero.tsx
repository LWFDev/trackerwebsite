
import React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Star, Award, ShieldCheck } from "lucide-react";

const PricingHero = () => {
  return (
    <div className="pt-28 pb-20 bg-gradient-to-b from-zinc-900 to-black text-white relative overflow-hidden flex items-center min-h-[40vh]">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-[#D4AF37]/10 blur-[120px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-light"></div>
        <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center" threshold={0.1} delay={100}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-zinc-800/80 backdrop-blur-sm rounded-full border border-zinc-700 mb-6">
            <Star size={16} className="text-[#D4AF37]" />
            <span className="text-sm text-[#D4AF37] uppercase font-medium tracking-wider">Premium Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">Pricing</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Choose the plan that's right for your business without hidden fees or complicated terms
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <Award className="text-[#D4AF37] h-5 w-5" />
              <span className="text-sm text-gray-300">14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-[#D4AF37] h-5 w-5" />
              <span className="text-sm text-gray-300">No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="text-[#D4AF37] h-5 w-5" />
              <span className="text-sm text-gray-300">Cancel anytime</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default PricingHero;
