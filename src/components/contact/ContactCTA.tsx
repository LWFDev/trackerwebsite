
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ContactCTA = () => {
  return (
    <div className="py-16 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#D4AF37]/5 blur-[100px] top-1/2 -left-1/4 transform -translate-y-1/2"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#D4AF37]/5 blur-[100px] bottom-0 -right-1/4"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">Custom Solutions</span>?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team is ready to help you find the perfect solution for your business needs. Let's schedule a call to discuss your requirements.
          </p>
          <Link to="/get-started" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Button variant="gold" size="lg" className="font-medium">
              Schedule a Call
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactCTA;
