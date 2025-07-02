import React, { useEffect } from 'react';
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Integration from "@/components/landing/Integration";
import Workflow from "@/components/landing/Workflow";
import Testimonials from "@/components/landing/Testimonials";
import CTA from "@/components/landing/CTA";
import Results from "@/components/landing/Results";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import StoryTelling from "@/components/landing/StoryTelling";
import { Separator } from "@/components/ui/separator";
import ScrollAnimationInit from "@/components/ui/scroll-animation-init";
import AnimatedTruckDivider from "@/components/landing/AnimatedTruckDivider";
import { useIsMobile } from "@/hooks/use-mobile";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

// Improved section dividers with green accents
const ZigzagDivider = ({ className = "" }: { className?: string }) => {
  const isMobile = useIsMobile();
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg 
        className={`w-full ${isMobile ? 'h-8' : 'h-16'}`} 
        viewBox="0 0 1440 48" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        preserveAspectRatio="none"
      >
        <path 
          d="M0 0L60 8C120 16 240 32 360 32C480 32 600 16 720 24C840 32 960 48 1080 42.7C1200 37.3 1320 21.3 1380 13.3L1440 5.3V48H1380C1320 48 1200 48 1080 48C960 48 840 48 720 48C600 48 480 48 360 48C240 48 120 48 60 48H0V0Z" 
          fill="currentColor" 
        />
      </svg>
    </div>
  );
};

const ArrowDivider = ({ className = "" }: { className?: string }) => {
  const isMobile = useIsMobile();
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg 
        className={`w-full ${isMobile ? 'h-8' : 'h-12'}`} 
        viewBox="0 0 1200 30" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        preserveAspectRatio="none"
      >
        <path 
          d="M0 0L50 5C100 10 200 20 300 20C400 20 500 10 600 20C700 30 800 30 900 25C1000 20 1100 10 1150 5L1200 0V30H0V0Z" 
          fill="currentColor" 
        />
      </svg>
    </div>
  );
};

const CurvyDivider = ({ className = "" }: { className?: string }) => {
  const isMobile = useIsMobile();
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg 
        className={`w-full ${isMobile ? 'h-10' : 'h-16'}`} 
        viewBox="0 0 1440 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        preserveAspectRatio="none"
      >
        <path 
          d="M0 0C240 60 480 100 720 100C960 100 1200 60 1440 0V100H0V0Z" 
          fill="currentColor" 
        />
      </svg>
    </div>
  );
};

const TriangleDivider = ({ className = "" }: { className?: string }) => {
  const isMobile = useIsMobile();
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg 
        className={`w-full ${isMobile ? 'h-8' : 'h-16'}`} 
        viewBox="0 0 1440 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        preserveAspectRatio="none"
      >
        <path 
          d="M0 100L720 0L1440 100H0Z" 
          fill="currentColor" 
        />
      </svg>
    </div>
  );
};

// SVG curve divider - flipped horizontally
const SlopesDivider = ({ className = "" }: { className?: string }) => {
  const isMobile = useIsMobile();
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg 
        className={`w-full ${isMobile ? 'h-8' : 'h-16'}`} 
        viewBox="0 0 100 10" 
        preserveAspectRatio="none"
      >
        <path 
          d="M0 0L35 5L65 0L100 5V10H0V0Z" 
          fill="currentColor" 
        />
      </svg>
    </div>
  );
};

// Enhanced floating icons with green accents
const FloatingIcons = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-10 h-10 rounded-lg border border-emerald-500/20 opacity-40 rotate-12"></div>
        <div className="absolute top-[60%] right-[10%] w-16 h-16 rounded-full border border-green-400/20 opacity-30 -rotate-12"></div>
      </div>
    );
  }
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[20%] left-[10%] w-16 h-16 rounded-lg border border-emerald-500/20 opacity-40 rotate-12"></div>
      <div className="absolute top-[60%] right-[5%] w-24 h-24 rounded-full border border-green-400/20 opacity-30 -rotate-12"></div>
      <div className="absolute top-[40%] left-[80%] w-20 h-20 rounded-md border border-emerald-600/20 opacity-25 rotate-45"></div>
    </div>
  );
};

const Index = () => {
  const isMobile = useIsMobile();
  const { toast } = useToast();

  // Show welcome toast for mobile users
  useEffect(() => {
    if (isMobile) {
      setTimeout(() => {
        toast({
          title: "Welcome to Tracker",
          description: "Optimized for your mobile device",
          duration: 3000
        });
      }, 1500);
    }
  }, [isMobile, toast]);

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <motion.div 
      className="min-h-screen flex flex-col bg-white dark:bg-black text-gray-900 dark:text-white relative transition-colors duration-300" 
      initial="hidden" 
      animate="visible" 
      variants={fadeInVariants}
    >
      <ScrollAnimationInit />
      
      {/* Enhanced background with green gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full max-w-[600px] h-[600px] rounded-full bg-gradient-to-br from-emerald-500/10 via-green-400/5 to-[#D4AF37]/5 blur-[150px] opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-full max-w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-green-600/10 via-emerald-400/5 to-gray-200/20 dark:to-zinc-800/20 blur-[100px] opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] rounded-full bg-gradient-to-r from-emerald-300/5 via-green-500/3 to-emerald-600/5 blur-[200px] opacity-30"></div>
      </div>
      
      <main className="pt-16 relative">
        <Hero />
        
        <div className="relative text-emerald-600 dark:text-emerald-400 mb-[-1px]">
          <AnimatedTruckDivider />
        </div>
        
        <Features />
        
        <div className="relative text-green-600 dark:text-green-400 mb-[-1px]">
          <SlopesDivider />
        </div>
        
        <Workflow />
        
        <div className="relative text-emerald-600 dark:text-emerald-400 mb-[-1px]">
          <TriangleDivider />
        </div>
        
        <Results />
        
        <div className="relative text-green-600 dark:text-green-400 mb-[-1px]">
          <ZigzagDivider />
        </div>
        
        {/* StoryTelling component */}
        <StoryTelling />
        
        <div className="relative text-emerald-600 dark:text-emerald-400 mb-[-1px]">
          <CurvyDivider />
        </div>
        
        {/* WhyChooseUs section */}
        <WhyChooseUs />
        
        <div className="relative">
          <Separator className="h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent my-0" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-black border border-emerald-500/30 flex items-center justify-center transform rotate-45">
            <div className="w-6 h-6 rounded-sm bg-gradient-to-br from-emerald-500/30 to-green-400/20"></div>
          </div>
        </div>
        
        <Integration />
        
        <div className="relative text-green-600 dark:text-green-400 mb-[-1px]">
          <CurvyDivider />
        </div>
        
        <Testimonials />
        
        <div className="relative text-emerald-600 dark:text-emerald-400 mb-[-1px]">
          <AnimatedTruckDivider />
        </div>
        
        <CTA />
        
        {/* Enhanced floating icons with green accents */}
        <FloatingIcons />
      </main>
    </motion.div>
  );
};

export default Index;
