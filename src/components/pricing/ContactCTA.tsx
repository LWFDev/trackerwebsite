
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { MessageSquare, Trophy, HeadphonesIcon } from "lucide-react";

const ContactCTA = () => {
  return (
    <div className="py-24 bg-gradient-to-t from-zinc-900 to-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-[#D4AF37]/5 blur-[100px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute inset-0 bg-dot-pattern opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal threshold={0.1} delay={100} className="max-w-4xl mx-auto">
          <div className="bg-zinc-900/70 backdrop-blur-md border border-zinc-800 rounded-xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">Custom Solution</span>?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Our team is ready to help you find the perfect plan for your business needs. Let us know what your requirements are, and we'll create a tailored solution.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-zinc-800/50 rounded-lg p-6 text-center">
                <div className="bg-[#D4AF37]/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="text-[#D4AF37] h-6 w-6" />
                </div>
                <h3 className="font-medium mb-2">24/7 Support</h3>
                <p className="text-sm text-gray-400">Get help whenever you need it from our dedicated support team</p>
              </div>
              
              <div className="bg-zinc-800/50 rounded-lg p-6 text-center">
                <div className="bg-[#D4AF37]/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Trophy className="text-[#D4AF37] h-6 w-6" />
                </div>
                <h3 className="font-medium mb-2">Premium Features</h3>
                <p className="text-sm text-gray-400">Access to exclusive features tailored to your business needs</p>
              </div>
              
              <div className="bg-zinc-800/50 rounded-lg p-6 text-center">
                <div className="bg-[#D4AF37]/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <HeadphonesIcon className="text-[#D4AF37] h-6 w-6" />
                </div>
                <h3 className="font-medium mb-2">Dedicated Manager</h3>
                <p className="text-sm text-gray-400">Your personal account manager to ensure your success</p>
              </div>
            </div>
            
            <div className="text-center">
              <Link to="/contact">
                <Button variant="gold" size="lg" className="font-medium px-8 py-6 text-base">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default ContactCTA;
