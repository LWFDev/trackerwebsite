
import React from 'react';
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Integration from "@/components/landing/Integration";
import Workflow from "@/components/landing/Workflow";
import Testimonials from "@/components/landing/Testimonials";
import CTA from "@/components/landing/CTA";
import Results from "@/components/landing/Results";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <main className="pt-16">
        <Hero />
        <Features />
        <Workflow />
        <Results />
        <Integration />
        <Testimonials />
        <CTA />
      </main>
    </div>
  );
};

export default Index;
