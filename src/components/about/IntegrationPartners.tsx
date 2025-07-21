
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link2, Zap } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";

const IntegrationPartners = () => {
  const integrationPartners = [
    "Barudan", "DPD", "FedEx", "HubSpot", "Pencarrie", "QuickBooks", 
    "Ralawise", "Royal Mail", "Shopify", "Tajima", "UPS", "Wilcom", 
    "WordPress", "Xero"
  ];

  return (
    <section>
      <ScrollReveal preset="enterprise" delay={100}>
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 px-6 py-3 text-gray-300 border-gray-600 bg-gray-800 font-medium">
            <Link2 className="h-4 w-4 mr-2 text-emerald-600" />
            Integration Partners
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Seamless Partnerships
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
            We work closely with other cloud-based platforms to ensure <span className="text-emerald-600 font-semibold">seamless integration</span> for our clients. This includes Xero, Sage, QuickBooks, HubSpot, Shopify, DPD, and WordPress.
          </p>
        </div>
      </ScrollReveal>
      
      <ScrollReveal preset="confident" delay={300}>
        <div className="relative w-3/4 mx-auto">
          <div className="relative overflow-hidden">
            <ScrollReveal preset="enterprise" delay={200}>
              <div className="flex animate-scroll-seamless whitespace-nowrap py-8">
                {Array(4).fill(integrationPartners).flat().map((partner, index) => (
                  <div 
                    key={index}
                    className="inline-flex items-center justify-center mx-8 min-w-[120px] flex-shrink-0"
                  >
                    <div className="flex flex-col items-center">
                      <Zap className="h-5 w-5 text-emerald-500 mb-2" />
                      <span className="text-emerald-400 text-sm font-semibold whitespace-nowrap">
                        {partner}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
          
          {/* Fade effects */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
        </div>
      </ScrollReveal>
    </section>
  );
};

export default IntegrationPartners;
