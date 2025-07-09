
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { scrollToTop } from "@/utils/navigation";

const CtaSection = () => {
  return (
    <div className="bg-zinc-900 text-white py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-gold-opacity-5 blur-[120px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl font-bold mb-4">Ready to Supercharge Your Business?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Get started with any of our modules or bundle them together for maximum efficiency.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/get-started">
            <Button variant="gold" size="lg">
              Get Started
            </Button>
          </Link>
          <Link to="/contact" onClick={scrollToTop}>
            <Button 
              variant="outline" 
              className="border-zinc-700 text-gray-300 hover:bg-zinc-800 hover:border-gold" 
              size="lg"
            >
              Contact Sales
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
