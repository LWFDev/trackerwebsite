
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Integration from "@/components/landing/Integration";
import Workflow from "@/components/landing/Workflow";
import Results from "@/components/landing/Results";
import CTA from "@/components/landing/CTA";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import Header from "@/components/landing/Header";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <main className="pt-16"> {/* Added padding-top to accommodate fixed header */}
        <Hero />
        <div className="py-12 bg-zinc-900 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute w-[600px] h-[600px] rounded-full bg-[#D4AF37]/5 blur-[120px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h3 className="text-lg text-[#D4AF37] mb-8 font-medium">TRUSTED BY INDUSTRY LEADERS</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {[...Array(5)].map((_, index) => (
                <div 
                  key={index} 
                  className="bg-zinc-800/60 backdrop-blur-sm h-12 rounded-lg border border-zinc-700 hover:border-[#D4AF37]/40 transition-all duration-300 animate-pulse-light"
                  style={{ animationDelay: `${index * 0.2}s` }}
                ></div>
              ))}
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
