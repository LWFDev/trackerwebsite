
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <div className="py-16 bg-zinc-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#D4AF37]/5 blur-[100px] top-1/2 -left-1/4 transform -translate-y-1/2"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#D4AF37]/5 blur-[100px] bottom-0 -right-1/4"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">Custom Solution</span>?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team is ready to help you find the perfect plan for your business needs. Let us know what your requirements are, and we'll create a tailored solution.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="lg" className="font-medium">
              Contact Sales
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactCTA;
