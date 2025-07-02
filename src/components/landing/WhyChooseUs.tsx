
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Zap, Shield, Users } from "lucide-react";
import ProcessJourney from "./whychooseus/ProcessJourney";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast Implementation",
      description: "Get up and running in weeks, not months. Our streamlined process ensures rapid deployment without compromising quality."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise-Grade Security",
      description: "Your data is protected with bank-level encryption and compliance with industry standards including SOC 2 and GDPR."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Dedicated Support Team",
      description: "24/7 expert support from real humans who understand your business and are committed to your success."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-black dark:via-gray-900/50 dark:to-black relative overflow-hidden transition-colors duration-300">
      {/* Process Journey Background */}
      <div className="absolute inset-0 z-0">
        <ProcessJourney />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header section */}
          <div className="text-center mb-16 relative z-20">
            <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#D4AF37]/20 to-[#F2D675]/20 rounded-full border border-[#D4AF37]/30 mb-6 backdrop-blur-sm">
              <span className="text-sm text-[#D4AF37] uppercase font-medium tracking-wider">Why Choose Tracker</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">your success</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join thousands of businesses who trust Tracker to streamline their operations and accelerate growth.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-3 gap-8 relative z-20 mt-32">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-[#D4AF37]/30"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-[#D4AF37] to-[#F2D675] rounded-xl mb-6 text-black group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#D4AF37]/30">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {feature.description}
                </p>
                <div className="flex items-center text-[#D4AF37] font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm">Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
