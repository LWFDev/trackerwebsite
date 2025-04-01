
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Integration from "@/components/landing/Integration";
import Workflow from "@/components/landing/Workflow";
import Results from "@/components/landing/Results";
import CTA from "@/components/landing/CTA";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <main>
        <Hero />
        <div className="py-12 bg-zinc-900 text-center">
          <div className="container mx-auto px-4">
            <h3 className="text-lg text-gold-light mb-8">TRUSTED BY INDUSTRY LEADERS</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              <div className="bg-zinc-800 h-8 rounded"></div>
              <div className="bg-zinc-800 h-8 rounded"></div>
              <div className="bg-zinc-800 h-8 rounded"></div>
              <div className="bg-zinc-800 h-8 rounded"></div>
              <div className="bg-zinc-800 h-8 rounded"></div>
            </div>
          </div>
        </div>
        <Features />
        <Integration />
        <Workflow />
        <Results />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
    </div>
  );
};

export default Index;
