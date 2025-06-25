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
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

// Improved section dividers
const ZigzagDivider = ({ className = "" }: { className?: string }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg className={`w-full ${isMobile ? 'h-8' : 'h-16'}`} viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M1440 48L1380 42.7C1320 37.3 1200 26.7 1080 21.3C960 16 840 16 720 24C600 32 480 48 360 48C240 48 120 32 60 24L0 16V0H60C120 0 240 0 360 0C480 0 600 0 720 0C840 0 960 0 1080 0C1200 0 1320 0 1380 0H1440V48Z" fill="currentColor" />
      </svg>
    </div>
  );
};

const ArrowDivider = ({ className = "" }: { className?: string }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg className={`w-full ${isMobile ? 'h-8' : 'h-12'}`} viewBox="0 0 1200 30" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M1200 30L1150 25C1100 20 1000 10 900 5C800 0 700 0 600 10C500 20 400 30 300 30C200 30 100 20 50 15L0 10V0H1200V30Z" fill="currentColor" />
      </svg>
    </div>
  );
};

const CurvyDivider = ({ className = "" }: { className?: string }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg className={`w-full ${isMobile ? 'h-10' : 'h-16'}`} viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M1440,0 C1200,100 720,100 0,0 L0,100 L1440,100 Z" fill="currentColor" />
      </svg>
    </div>
  );
};

const TriangleDivider = ({ className = "" }: { className?: string }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg className={`w-full ${isMobile ? 'h-8' : 'h-16'}`} viewBox="0 0 100 10" preserveAspectRatio="none">
        <polygon points="100 0 50 10 0 0 0 10 100 10" fill="currentColor"/>
      </svg>
    </div>
  );
};

// SVG curve divider - flipped horizontally
const SlopesDivider = ({ className = "" }: { className?: string }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg className={`w-full ${isMobile ? 'h-8' : 'h-16'}`} viewBox="0 0 100 10" preserveAspectRatio="none">
        <path d="M100 10 L100 0 L65 5 L35 0 L0 5 L0 10 Z" fill="currentColor" />
      </svg>
    </div>
  );
};

// Reduced number of floating icons for performance
const FloatingIcons = () => {
  const isMobile = useIsMobile();
  
  if (isMobile) {
    // Fewer floating icons for mobile
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-10 h-10 rounded-lg border border-[#D4AF37]/20 opacity-40 rotate-12"></div>
        <div className="absolute top-[60%] right-[10%] w-16 h-16 rounded-full border border-[#D4AF37]/20 opacity-30 -rotate-12"></div>
      </div>
    );
  }
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[20%] left-[10%] w-16 h-16 rounded-lg border border-[#D4AF37]/20 opacity-40 rotate-12"></div>
      <div className="absolute top-[60%] right-[5%] w-24 h-24 rounded-full border border-[#D4AF37]/20 opacity-30 -rotate-12"></div>
      <div className="absolute top-[40%] left-[80%] w-20 h-20 rounded-md border border-[#D4AF37]/20 opacity-25 rotate-45"></div>
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
          duration: 3000,
        });
      }, 1500);
    }
  }, [isMobile, toast]);

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };
  
  return (
    <motion.div 
      className="min-h-screen flex flex-col bg-black text-white relative"
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
    >
      <ScrollAnimationInit />
      
      {/* Simplified static background gradients instead of animated */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full max-w-[600px] h-[600px] rounded-full bg-[#D4AF37]/5 blur-[150px] opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-full max-w-[500px] h-[500px] rounded-full bg-zinc-800/20 blur-[100px] opacity-40"></div>
      </div>
      
      <main className="pt-16 relative">
        <Hero />
        
        <div className="relative text-zinc-900 mb-[-1px]">
          <AnimatedTruckDivider />
        </div>
        
        <Features />
        
        <div className="relative text-black mb-[-1px]">
          <SlopesDivider />
        </div>
        
        <Workflow />
        
        <div className="relative text-zinc-900 mb-[-1px]">
          <TriangleDivider />
        </div>
        
        <Results />
        
        <div className="relative text-zinc-900 mb-[-1px]">
          <ZigzagDivider />
        </div>
        
        {/* New StoryTelling component */}
        <StoryTelling />
        
        <div className="relative text-zinc-950 mb-[-1px]">
          <CurvyDivider />
        </div>
        
        {/* Add WhyChooseUs section */}
        <WhyChooseUs />
        
        <div className="relative">
          <Separator className="h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent my-0" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black border border-[#D4AF37]/30 flex items-center justify-center transform rotate-45">
            <div className="w-6 h-6 rounded-sm bg-gradient-to-br from-[#D4AF37]/30 to-[#F2D675]/20"></div>
          </div>
        </div>
        
        <Integration />
        
        <div className="relative text-zinc-900 mb-[-1px]">
          <CurvyDivider />
        </div>
        
        <Testimonials />
        
        <div className="relative text-zinc-900 mb-[-1px]">
          <AnimatedTruckDivider />
        </div>
        
        <CTA />
        
        {/* Simplified static floating icons */}
        <FloatingIcons />
      </main>
    </motion.div>
  );
};

export default Index;
