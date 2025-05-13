
import React from "react";
import PricingHero from "@/components/pricing/PricingHero";
import PricingPlans from "@/components/pricing/PricingPlans";
import FeatureComparison from "@/components/pricing/FeatureComparison";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import ContactCTA from "@/components/pricing/ContactCTA";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const PricingPage = () => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <PricingHero />
      
      <div className="relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-[#D4AF37]/5 rounded-full blur-[150px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-[#D4AF37]/5 rounded-full blur-[150px] -z-10"></div>
        
        <PricingPlans />
        
        <ScrollReveal threshold={0.1} delay={300} className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-xl p-6 md:p-8">
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">Need help choosing the right plan?</h3>
                <p className="text-gray-400">Our team is ready to assist you with any questions you might have.</p>
              </div>
              <a href="/contact" className="shrink-0">
                <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-lg transition-colors">
                  Schedule a consultation
                </button>
              </a>
            </div>
          </div>
        </ScrollReveal>
        
        <FeatureComparison />
        <PricingFAQ />
        <ContactCTA />
      </div>
    </div>
  );
};

export default PricingPage;
