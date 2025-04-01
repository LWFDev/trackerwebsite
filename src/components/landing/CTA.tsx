
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-zinc-900 text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-gold-DEFAULT/5 blur-[150px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center backdrop-blur-sm p-10 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-gold-DEFAULT/30 transition-all duration-500 shadow-xl">
          <div className="inline-block px-4 py-1.5 bg-black/30 backdrop-blur-sm rounded-full border border-zinc-700 mb-6 animate-fade-in">
            <span className="text-sm text-gold-DEFAULT uppercase font-medium tracking-wider flex items-center">
              <span className="bg-gold-DEFAULT w-2 h-2 rounded-full mr-2"></span>
              Get Started Today
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-DEFAULT to-gold-light">transform your workflow?</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Start your free 14-day trial today. No credit card required.
          </p>
          
          <Button 
            size="lg" 
            className="px-8 shadow-xl bg-gradient-to-r from-gold-DEFAULT to-gold-light hover:from-gold-light hover:to-gold-DEFAULT text-black transform transition-all duration-300 hover:-translate-y-1 animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            Get Started <ArrowRight className="ml-1 h-5 w-5" />
          </Button>
          
          <p className="mt-8 text-sm text-gray-400 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Join <span className="text-gold-DEFAULT">10,000+</span> businesses using Tracker
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
