
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
        <Card className="border-gray-700 bg-gray-800 shadow-lg">
          <CardContent className="p-12">
            <ScrollReveal preset="enterprise" stagger delay={200}>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
                {integrationPartners.map((partner, index) => (
                  <Card 
                    key={index}
                    className="h-24 flex items-center justify-center border-emerald-600 bg-gray-700 shadow-md cursor-pointer hover:shadow-lg transition-all duration-300"
                  >
                    <CardContent className="p-4 text-center">
                      <Zap className="h-4 w-4 text-emerald-500 mx-auto mb-2" />
                      <span className="text-emerald-400 text-sm font-semibold">
                        {partner}
                      </span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollReveal>
          </CardContent>
        </Card>
      </ScrollReveal>
    </section>
  );
};

export default IntegrationPartners;
