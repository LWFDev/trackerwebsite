
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to transform your workflow?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your free 14-day trial today. No credit card required.
          </p>
          
          <Button size="lg" className="bg-gold-DEFAULT text-black hover:bg-gold-hover px-8">
            Get Started
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
