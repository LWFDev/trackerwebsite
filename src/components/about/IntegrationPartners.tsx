
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link2, Zap } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";

const IntegrationPartners = () => {
  const integrationPartners = [
    "Barudan", "DPD", "Fedex", "Hubspot", "PENCARRIE", "Intuit QuickBooks", "Ralawise.com", "Royal Mail", "Shopify", "Tajima", "UPS", "Wilcom", "Wordpress", "Xero",
    "Barudan", "DPD", "Fedex", "Hubspot", "PENCARRIE", "Intuit QuickBooks", "Ralawise.com", "Royal Mail", "Shopify", "Tajima", "UPS", "Wilcom", "Wordpress", "Xero",
    "Barudan", "DPD", "Fedex", "Hubspot", "PENCARRIE", "Intuit QuickBooks", "Ralawise.com", "Royal Mail", "Shopify", "Tajima", "UPS", "Wilcom", "Wordpress", "Xero",
    "Barudan", "DPD", "Fedex", "Hubspot", "PENCARRIE", "Intuit QuickBooks", "Ralawise.com", "Royal Mail", "Shopify", "Tajima", "UPS", "Wilcom", "Wordpress", "Xero",
    "Barudan", "DPD", "Fedex", "Hubspot", "PENCARRIE", "Intuit QuickBooks", "Ralawise.com", "Royal Mail", "Shopify", "Tajima", "UPS", "Wilcom", "Wordpress", "Xero"
  ];

  const partnerLogos: { [key: string]: string } = {
    "Barudan": "/lovable-uploads/5104b57e-c8e1-4f5a-81c7-e2d705f154b5.png",
    "DPD": "/lovable-uploads/3cba64f2-6bfa-44ff-8f5e-8516494488a3.png",
    "Fedex": "/lovable-uploads/6e41e956-7dc7-4977-b71f-6e95c488d7ac.png",
    "Hubspot": "/lovable-uploads/cda3209a-ee6e-4ed1-abe2-967689393771.png",
    "PENCARRIE": "/lovable-uploads/c5bc6394-8878-40cf-b727-46518c77cef4.png",
    "Intuit QuickBooks": "/lovable-uploads/55ebbf90-7d8e-4b14-9d0c-c3789d9c0e14.png",
    "Ralawise.com": "/lovable-uploads/c07f111b-fabd-474c-b091-b282314a4fc4.png",
    "Royal Mail": "/lovable-uploads/ae2372c1-9dbc-4a78-9cdb-756f06a75ba7.png",
    "Shopify": "/lovable-uploads/e26f2549-0a6d-4799-9ca8-8a33eddc1600.png",
    "Tajima": "/lovable-uploads/aadccf67-7e7b-486f-a53b-f6e0a8bb36ae.png",
    "UPS": "/lovable-uploads/d7e2c947-cd8e-44d9-bb92-872a7935f17b.png",
    "Wilcom": "/lovable-uploads/049dda9c-7e52-4984-97da-e310719790f0.png",
    "Wordpress": "/lovable-uploads/c2f57b8f-7498-43e4-9ef0-cf99d50f16ec.png",
    "Xero": "/lovable-uploads/e65dad35-88a5-4575-a2d3-f36c4cef5ab8.png"
  };

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
        <div className="w-full mx-auto">
          <div className="overflow-hidden relative">
            {/* Fade gradients on left and right */}
            <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex animate-scroll-ultra-fast whitespace-nowrap py-8">
              {integrationPartners.map((partner, index) => (
                <div 
                  key={index}
                  className="inline-flex items-center justify-center mx-6 min-w-[160px] flex-shrink-0"
                >
                  <div className="flex flex-col items-center">
                    {partnerLogos[partner] ? (
                      <img 
                        src={partnerLogos[partner]} 
                        alt={partner} 
                        className="h-8 w-auto mb-2 filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                      />
                    ) : (
                      <Zap className="h-5 w-5 text-emerald-500 mb-2" />
                    )}
                    <span className="text-emerald-400 text-sm font-semibold whitespace-nowrap">
                      {partner}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default IntegrationPartners;
