
import React from 'react';
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Integration from "@/components/landing/Integration";
import Workflow from "@/components/landing/Workflow";
import Testimonials from "@/components/landing/Testimonials";
import CTA from "@/components/landing/CTA";
import Results from "@/components/landing/Results";
import { Separator } from "@/components/ui/separator";
import ScrollAnimationInit from "@/components/ui/scroll-animation-init";

// Simplified section dividers
const WaveDivider = ({ className = "", inverted = false }: { className?: string; inverted?: boolean }) => (
  <div className={`w-full overflow-hidden ${className}`}>
    <svg className="w-full h-24" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d={inverted 
          ? "M0 5C0 5 187.06 74 720 74C1252.94 74 1440 5 1440 5V0H0V5Z" 
          : "M1440 69C1440 69 1252.94 0 720 0C187.06 0 0 69 0 69V74H1440V69Z"
        } 
        fill="currentColor" 
      />
    </svg>
  </div>
);

const ZigzagDivider = ({ className = "" }: { className?: string }) => (
  <div className={`w-full overflow-hidden ${className}`}>
    <svg className="w-full h-16" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 48L60 42.7C120 37.3 240 26.7 360 21.3C480 16 600 16 720 24C840 32 960 48 1080 48C1200 48 1320 32 1380 24L1440 16V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V48Z" fill="currentColor" />
    </svg>
  </div>
);

const ArrowDivider = ({ className = "" }: { className?: string }) => (
  <div className={`w-full overflow-hidden ${className}`}>
    <svg className="w-full h-12" viewBox="0 0 1200 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 30L50 25C100 20 200 10 300 5C400 0 500 0 600 10C700 20 800 30 900 30C1000 30 1100 20 1150 15L1200 10V0H0V30Z" fill="currentColor" />
    </svg>
  </div>
);

// Simplified dividers
const CurvyDivider = ({ className = "" }: { className?: string }) => (
  <div className={`w-full overflow-hidden ${className}`}>
    <svg className="w-full h-16" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path d="M0,0 C240,100 720,100 1440,0 L1440,100 L0,100 Z" fill="currentColor" />
    </svg>
  </div>
);

const TriangleDivider = ({ className = "" }: { className?: string }) => (
  <div className={`w-full overflow-hidden ${className}`}>
    <svg className="w-full h-16" viewBox="0 0 100 10" preserveAspectRatio="none">
      <polygon points="100 0 50 10 0 0 0 10 100 10" fill="currentColor"/>
    </svg>
  </div>
);

// Reduced number of floating icons for performance
const FloatingIcons = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-[20%] left-[10%] w-16 h-16 rounded-lg border border-[#D4AF37]/20 opacity-40 rotate-12"></div>
    <div className="absolute top-[60%] right-[5%] w-24 h-24 rounded-full border border-[#D4AF37]/20 opacity-30 -rotate-12"></div>
    <div className="absolute top-[40%] left-[80%] w-20 h-20 rounded-md border border-[#D4AF37]/20 opacity-25 rotate-45"></div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white relative">
      <ScrollAnimationInit />
      
      {/* Simplified static background gradients instead of animated */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full bg-[#D4AF37]/5 blur-[150px] opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-zinc-800/20 blur-[100px] opacity-40"></div>
      </div>
      
      <main className="pt-16 relative">
        <Hero />
        
        <div className="relative text-zinc-900 mb-[-1px]">
          <WaveDivider />
        </div>
        
        <Features />
        
        <div className="relative text-black mb-[-1px]">
          <CurvyDivider />
        </div>
        
        <Workflow />
        
        <div className="relative text-zinc-900 mb-[-1px]">
          <TriangleDivider />
        </div>
        
        <Results />
        
        <div className="relative">
          <Separator className="h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent my-0" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black border border-[#D4AF37]/30 flex items-center justify-center transform rotate-45">
            <div className="w-6 h-6 rounded-sm bg-gradient-to-br from-[#D4AF37]/30 to-[#F2D675]/20"></div>
          </div>
        </div>
        
        <Integration />
        
        <div className="relative">
          <Separator className="h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent my-0" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black border border-[#D4AF37]/30 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#D4AF37]/30 to-[#F2D675]/20"></div>
          </div>
        </div>
        
        <Testimonials />
        
        <div className="relative text-zinc-900 mb-[-1px]">
          <WaveDivider inverted={true} />
        </div>
        
        <CTA />
        
        {/* Simplified static floating icons */}
        <FloatingIcons />
      </main>
    </div>
  );
};

export default Index;
