
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
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-white via-white to-emerald-50/30 dark:from-black dark:via-black dark:to-emerald-950/20">
          <Hero />
        </div>
        
        {/* Truck Divider */}
        <div className="relative bg-gradient-to-b from-emerald-50/30 to-green-50/20 dark:from-emerald-950/20 dark:to-green-950/10">
          <AnimatedTruckDivider />
        </div>
        
        {/* Features Section */}
        <div className="bg-gradient-to-b from-green-50/20 via-emerald-50/30 to-white dark:from-green-950/10 dark:via-emerald-950/20 dark:to-black">
          <Features />
        </div>
        
        {/* Workflow Section */}
        <div className="bg-gradient-to-b from-white via-gray-50/30 to-emerald-50/20 dark:from-black dark:via-zinc-950/30 dark:to-emerald-950/20">
          <Workflow />
        </div>
        
        {/* Results Section */}
        <div className="bg-gradient-to-b from-emerald-50/20 to-green-100/30 dark:from-emerald-950/20 dark:to-green-950/30">
          <Results />
        </div>
        
        {/* StoryTelling Section */}
        <div className="bg-gradient-to-b from-green-100/30 via-emerald-50/40 to-white dark:from-green-950/30 dark:via-emerald-950/40 dark:to-black">
          <StoryTelling />
        </div>
        
        {/* WhyChooseUs Section */}
        <div className="bg-gradient-to-b from-white via-gray-50/20 to-emerald-50/30 dark:from-black dark:via-zinc-950/20 dark:to-emerald-950/30">
          <WhyChooseUs />
        </div>
        
        {/* Elegant separator with gradient */}
        <div className="relative bg-gradient-to-b from-emerald-50/30 to-green-50/20 dark:from-emerald-950/30 dark:to-green-950/20 py-8">
          <Separator className="h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent my-0" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-black border border-emerald-500/30 flex items-center justify-center transform rotate-45">
            <div className="w-6 h-6 rounded-sm bg-gradient-to-br from-emerald-500/30 to-green-400/20"></div>
          </div>
        </div>
        
        {/* Integration Section */}
        <div className="bg-gradient-to-b from-green-50/20 via-emerald-50/30 to-gray-50/20 dark:from-green-950/20 dark:via-emerald-950/30 dark:to-zinc-950/20">
          <Integration />
        </div>
        
        {/* Testimonials Section */}
        <div className="bg-gradient-to-b from-gray-50/20 via-white to-emerald-50/20 dark:from-zinc-950/20 dark:via-black dark:to-emerald-950/20">
          <Testimonials />
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-b from-emerald-50/20 to-white dark:from-emerald-950/20 dark:to-black">
          <CTA />
        </div>
        
        {/* Enhanced floating icons with green accents */}
        <FloatingIcons />
      </main>
    </motion.div>
  );
};

export default Index;
