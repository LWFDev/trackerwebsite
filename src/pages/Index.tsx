
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Integration from "@/components/landing/Integration";
import Workflow from "@/components/landing/Workflow";
import Results from "@/components/landing/Results";
import CTA from "@/components/landing/CTA";
import Testimonials from "@/components/landing/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <main className="pt-16">
        <Hero />
        <Features />
        <Integration />
        <Workflow />
        <Results />
        <Testimonials />
        <CTA />
      </main>
    </div>
  );
};

export default Index;
