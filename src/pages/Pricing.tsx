
import React, { useEffect, useState } from "react";
import PricingHero from "@/components/pricing/PricingHero";
import PricingPlans from "@/components/pricing/PricingPlans";
import FeatureComparison from "@/components/pricing/FeatureComparison";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import ContactCTA from "@/components/pricing/ContactCTA";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import VisualElements from "@/components/pricing/VisualElements";
import FloatingObjects from "@/components/pricing/FloatingObjects";

const PricingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Performance optimization - lazy loading
  const [isClientRendered, setIsClientRendered] = useState(false);
  
  // Loading animation
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Flag that client-side rendering is complete
    setIsClientRendered(true);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {isLoading ? (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <motion.div
            className="w-12 h-12 rounded-full border-2 border-transparent border-t-[#D4AF37] border-r-[#D4AF37]"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Visual elements rendered only on client side for performance */}
          {isClientRendered && (
            <>
              <VisualElements />
              <FloatingObjects />
            </>
          )}
          
          <PricingHero />
          
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-[#D4AF37]/5 rounded-full blur-[150px] -z-10 animate-pulse-light"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-[#D4AF37]/5 rounded-full blur-[150px] -z-10 animate-pulse-light" style={{ animationDelay: '1s' }}></div>
            
            <PricingPlans />
            
            <ScrollReveal threshold={0.1} delay={300} className="py-10 md:py-16">
              <div className="container mx-auto px-4">
                <motion.div 
                  className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-xl p-6 md:p-8 relative overflow-hidden"
                  whileHover={{ 
                    boxShadow: '0 20px 80px -10px rgba(212, 175, 55, 0.15)',
                    y: -5
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  {/* Visual accents */}
                  <motion.div 
                    className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#D4AF37]/5"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.3, 0.5],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  />
                  
                  <div className="text-center md:text-left relative z-10">
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">Need help choosing the right plan?</h3>
                    <p className="text-gray-400">Our team is ready to assist you with any questions you might have.</p>
                  </div>
                  <a href="/contact" className="shrink-0 relative z-10">
                    <motion.button 
                      className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-lg transition-colors relative overflow-hidden group"
                      whileHover={{ y: -2 }}
                      whileTap={{ y: 0 }}
                    >
                      <motion.span 
                        className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/20 to-[#D4AF37]/0"
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 1
                        }}
                      />
                      <span className="relative z-10">Schedule a consultation</span>
                    </motion.button>
                  </a>
                </motion.div>
              </div>
            </ScrollReveal>
            
            <FeatureComparison />
            
            {/* Visual separator with gradient line */}
            <div className="max-w-7xl mx-auto my-16">
              <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent"></div>
            </div>
            
            <PricingFAQ />
            <ContactCTA />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default PricingPage;
