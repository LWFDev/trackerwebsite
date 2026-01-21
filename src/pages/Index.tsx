import React, { useEffect } from 'react';
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Integration from "@/components/landing/Integration";
import Workflow from "@/components/landing/Workflow";
import CTA from "@/components/landing/CTA";
import Results from "@/components/landing/Results";
import StatsSection from "@/components/landing/StatsSection";
import { Separator } from "@/components/ui/separator";
import ScrollAnimationInit from "@/components/ui/scroll-animation-init";
import AnimatedBoxesDivider from "@/components/landing/AnimatedBoxesDivider";
import { useIsMobile } from "@/hooks/use-mobile";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import PageSEO from "@/components/seo/PageSEO";
import { homeSEO, homeBreadcrumb } from "@/data/seoData";
import { organizationSchema } from "@/utils/seo";

// Enhanced floating icons with gold and green harmony
const FloatingIcons = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-10 h-10 rounded-lg border border-gold-opacity-30 opacity-50 rotate-12 shadow-lg shadow-gold"></div>
        <div className="absolute top-[60%] right-[10%] w-16 h-16 rounded-full border border-emerald-400/20 opacity-30 -rotate-12"></div>
        <div className="absolute top-[40%] right-[5%] w-12 h-12 rounded-md border border-gold-opacity-20 opacity-40 rotate-45"></div>
      </div>
    );
  }
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[20%] left-[10%] w-16 h-16 rounded-lg border border-gold-opacity-40 opacity-60 rotate-12 shadow-xl shadow-gold-lg"></div>
      <div className="absolute top-[60%] right-[5%] w-24 h-24 rounded-full border border-emerald-400/30 opacity-40 -rotate-12"></div>
      <div className="absolute top-[40%] left-[80%] w-20 h-20 rounded-md border border-gold-opacity-40 opacity-50 rotate-45 shadow-lg shadow-gold"></div>
      <div className="absolute top-[15%] right-[20%] w-14 h-14 rounded-full border-2 border-gold-opacity-30 opacity-45 animate-spin-slow"></div>
      <div className="absolute bottom-[20%] left-[15%] w-18 h-18 rounded-lg border border-emerald-500/25 opacity-35 rotate-12"></div>
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
      <PageSEO seo={homeSEO} breadcrumbs={homeBreadcrumb} extraSchema={organizationSchema} />
      
      {/* Professional background with gold and green gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full max-w-[800px] h-[600px] rounded-full bg-gradient-to-br from-gold-light-opacity-30 via-slate-50/20 to-emerald-100/20 dark:from-gold-opacity-20 dark:via-slate-900/30 dark:to-emerald-900/15 blur-[120px] opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-full max-w-[700px] h-[500px] rounded-full bg-gradient-to-tl from-emerald-100/25 via-slate-100/15 to-gold-light-opacity-20 dark:from-emerald-900/15 dark:via-slate-900/20 dark:to-gold-opacity-15 blur-[100px] opacity-50"></div>
      </div>
      
      <main className="pt-16 relative">
        {/* Hero Section - Professional gold coloring */}
        <div className="bg-gradient-to-b from-white via-gold-light-opacity-30 to-slate-50/40 dark:from-black dark:via-gold-opacity-10 dark:to-slate-950/20">
          <Hero />
        </div>
        
        {/* Production Flow Divider */}
        <div className="relative bg-gradient-to-b from-slate-50/40 via-emerald-50/20 to-slate-100/30 dark:from-slate-950/20 dark:via-emerald-950/10 dark:to-slate-900/15">
          <AnimatedBoxesDivider />
        </div>
        
        {/* Stats Section - Moved from Results */}
        <StatsSection />
        
        {/* Features Section */}
        <div className="bg-gradient-to-b from-slate-100/30 via-emerald-50/25 to-gold-light-opacity-20 dark:from-slate-900/15 dark:via-emerald-950/10 dark:to-gold-opacity-10">
          <Features />
        </div>
        
        {/* Workflow Section */}
        <div className="bg-gradient-to-b from-gold-light-opacity-20 via-slate-50/30 to-emerald-50/25 dark:from-gold-opacity-10 dark:via-slate-950/15 dark:to-emerald-950/10">
          <Workflow />
        </div>
        
        {/* Results Section */}
        <div className="bg-gradient-to-b from-emerald-50/25 via-slate-100/20 to-gold-light-opacity-30 dark:from-emerald-950/10 dark:via-slate-900/10 dark:to-gold-opacity-15">
          <Results />
        </div>
        
        {/* Integration Section */}
        <div className="bg-gradient-to-b from-gold-light-opacity-30 via-emerald-50/20 to-slate-50/25 dark:from-gold-opacity-15 dark:via-emerald-950/10 dark:to-slate-950/10">
          <Integration />
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-b from-emerald-50/30 via-slate-100/15 to-white dark:from-emerald-950/15 dark:via-slate-900/10 dark:to-black">
          <CTA />
        </div>
        
        {/* Enhanced floating icons with professional styling */}
        <FloatingIcons />
      </main>
    </motion.div>
  );
};

export default Index;
