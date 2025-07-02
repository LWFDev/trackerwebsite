
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

// Fixed section dividers with proper SVG paths
const WaveDivider = ({ className = "" }: { className?: string }) => {
  const isMobile = useIsMobile();
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg 
        className={`w-full ${isMobile ? 'h-8' : 'h-16'}`} 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
          opacity=".25" 
          fill="currentColor"
        />
        <path 
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
          opacity=".5" 
          fill="currentColor"
        />
        <path 
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

const CurveDivider = ({ className = "" }: { className?: string }) => {
  const isMobile = useIsMobile();
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg 
        className={`w-full ${isMobile ? 'h-8' : 'h-16'}`} 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
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
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" 
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
        className={`w-full ${isMobile ? 'h-8' : 'h-16'}`} 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M649.97,0L550.03,0,599.91,54.12,649.97,0Z" 
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
          <WaveDivider />
        </div>
        
        <Workflow />
        
        <div className="relative text-emerald-600 dark:text-emerald-400 mb-[-1px]">
          <TriangleDivider />
        </div>
        
        <Results />
        
        <div className="relative text-green-600 dark:text-green-400 mb-[-1px]">
          <CurveDivider />
        </div>
        
        {/* StoryTelling component */}
        <StoryTelling />
        
        <div className="relative text-emerald-600 dark:text-emerald-400 mb-[-1px]">
          <WaveDivider />
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
          <CurveDivider />
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
