
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-zinc-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to transform your workflow?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your free 14-day trial today. No credit card required.
          </p>
          
          <Button 
            size="lg" 
            variant="gold" 
            className="px-8 shadow-lg"
          >
            Get Started <ArrowRight className="ml-1 h-5 w-5" />
          </Button>
          
          <p className="mt-8 text-sm text-gray-400">
            Join 10,000+ businesses using Tracker
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
