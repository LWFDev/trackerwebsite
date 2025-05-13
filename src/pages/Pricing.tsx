
import React, { useEffect, useState, Suspense, lazy } from "react";
import { motion } from "framer-motion";

// Eagerly load critical components
import PricingHero from "@/components/pricing/PricingHero";
import PricingPlans from "@/components/pricing/PricingPlans";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import InteractiveGlowBackground from "@/components/pricing/InteractiveGlowBackground";
import SplashEffect from "@/components/pricing/SplashEffect";
import BubbleAnimation from "@/components/pricing/BubbleAnimation";

// Lazy load non-critical components
const FeatureComparison = lazy(() => import("@/components/pricing/FeatureComparison"));
const PricingFAQ = lazy(() => import("@/components/pricing/PricingFAQ"));
const ContactCTA = lazy(() => import("@/components/pricing/ContactCTA"));
const GeometricObjects = lazy(() => import("@/components/pricing/GeometricObjects"));
const VisualElements = lazy(() => import("@/components/pricing/VisualElements"));
const FloatingObjects = lazy(() => import("@/components/pricing/FloatingObjects"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="w-full py-12 flex justify-center">
    <motion.div
      className="w-10 h-10 rounded-full border-2 border-transparent border-t-[#D4AF37] border-r-[#D4AF37]"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

const PricingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isClientRendered, setIsClientRendered] = useState(false);
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  
  // Performance optimization - progressive loading
  useEffect(() => {
    // Initial quick loading state
    const quickLoader = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Track visible sections for progressive enhancement
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => [...prev, entry.target.id]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Observe section elements
    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => observer.observe(section));
    
    // Flag that client-side rendering is complete
    setIsClientRendered(true);
    
    return () => {
      clearTimeout(quickLoader);
      observer.disconnect();
    };
  }, []);

  // Handle section visibility
  const isSectionVisible = (id: string) => visibleSections.includes(id);

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
          {/* Interactive glow background - always rendered */}
          <InteractiveGlowBackground intensity={0.08} />
          
          {/* Top section with splash effects */}
          <div className="relative">
            <SplashEffect position="left" topOffset="15%" size="large" />
            <SplashEffect position="right" topOffset="30%" size="medium" />
            <BubbleAnimation count={12} area="top" />
          </div>
          
          {/* Visual elements - lazy loaded based on client-side rendering */}
          {isClientRendered && (
            <Suspense fallback={null}>
              <VisualElements />
            </Suspense>
          )}
          
          {/* Hero section */}
          <PricingHero />
          
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-[#D4AF37]/5 rounded-full blur-[150px] -z-10 animate-pulse-light"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-[#D4AF37]/5 rounded-full blur-[150px] -z-10 animate-pulse-light" style={{ animationDelay: '1s' }}></div>
            
            {/* Geometric objects */}
            {isClientRendered && (
              <Suspense fallback={null}>
                <GeometricObjects density="medium" />
              </Suspense>
            )}
            
            {/* Pricing plans section */}
            <div id="pricing-plans" data-section="pricing-plans">
              <PricingPlans />
            </div>
            
            {/* Consultation CTA section */}
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
                  {/* Decorative elements */}
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
                  
                  {/* Bottom bubbles */}
                  {isClientRendered && (
                    <div className="absolute -bottom-10 left-0 w-full">
                      <BubbleAnimation count={8} area="bottom" opacity={0.1} />
                    </div>
                  )}
                  
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
            
            {/* Feature comparison section - lazy loaded */}
            <div id="feature-comparison" data-section="feature-comparison">
              <Suspense fallback={<LoadingFallback />}>
                <FeatureComparison />
              </Suspense>
            </div>
            
            {/* Visual separator with gradient line */}
            <div className="max-w-7xl mx-auto my-16">
              <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent"></div>
            </div>
            
            {/* Floating objects - only rendered when section becomes visible */}
            {isClientRendered && isSectionVisible("pricing-faq") && (
              <Suspense fallback={null}>
                <FloatingObjects />
              </Suspense>
            )}
            
            {/* FAQ section - lazy loaded */}
            <div id="pricing-faq" data-section="pricing-faq">
              <Suspense fallback={<LoadingFallback />}>
                <PricingFAQ />
              </Suspense>
            </div>
            
            {/* Contact CTA - lazy loaded */}
            <div id="contact-cta" data-section="contact-cta">
              <Suspense fallback={<LoadingFallback />}>
                <ContactCTA />
              </Suspense>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default PricingPage;
