
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-flick-purple/10 via-flick-blue/10 to-flick-pink/10 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Start Building Beautiful React Apps Today
          </h2>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Join thousands of developers who are creating stunning interfaces with Flick
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-12 focus-visible:ring-flick-purple"
            />
            <Button className="h-12 bg-flick-purple hover:bg-flick-purple/90 gap-2">
              Get Started <ArrowRight size={16} />
            </Button>
          </div>
          
          <p className="text-sm text-gray-500 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            No credit card required. Start with a free 14-day trial.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
