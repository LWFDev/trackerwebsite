
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link2, Zap } from "lucide-react";

const IntegrationPartners = () => {
  const integrationPartners = [
    "Barudan", "DPD", "FedEx", "HubSpot", "Pencarrie", "QuickBooks", 
    "Ralawise", "Royal Mail", "Shopify", "Tajima", "UPS", "Wilcom", 
    "WordPress", "Xero"
  ];

  return (
    <section>
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-6 px-6 py-3 text-gray-700 border-gray-200 bg-gray-50 font-medium">
          <Link2 className="h-4 w-4 mr-2 text-emerald-600" />
          Integration Partners
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
          Seamless Partnerships
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
          We work closely with other cloud-based platforms to ensure <span className="text-emerald-600 font-semibold">seamless integration</span> for our clients. This includes Xero, Sage, QuickBooks, HubSpot, Shopify, DPD, and WordPress.
        </p>
      </div>
      
      <Card className="border-gray-200 shadow-lg">
        <CardContent className="p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {integrationPartners.map((partner, index) => (
              <Card 
                key={index}
                className="h-24 flex items-center justify-center border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all group cursor-pointer"
              >
                <CardContent className="p-4 text-center">
                  <Zap className="h-4 w-4 text-emerald-500 mx-auto mb-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-gray-700 group-hover:text-emerald-700 text-sm font-semibold transition-colors">
                    {partner}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default IntegrationPartners;
