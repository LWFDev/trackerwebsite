
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to transform your workflow?
          </h2>
          <p className="text-xl text-indigo-200 mb-8">
            Start your free 14-day trial today. No credit card required.
          </p>
          
          <Button size="lg" className="bg-white text-indigo-900 hover:bg-gray-100 px-8">
            Get Started
          </Button>
          
          <p className="mt-8 text-sm text-indigo-300">
            Join 10,000+ businesses using Tracker
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
