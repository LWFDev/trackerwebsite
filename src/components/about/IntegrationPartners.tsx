
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const IntegrationPartners = () => {
  const integrationPartners = [
    "Barudan", "DPD", "FedEx", "HubSpot", "Pencarrie", "QuickBooks", 
    "Ralawise", "Royal Mail", "Shopify", "Tajima", "UPS", "Wilcom", 
    "WordPress", "Xero"
  ];

  return (
    <section>
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-6 px-6 py-3 text-emerald-700 border-emerald-200 bg-emerald-50">
          Integration Partners
        </Badge>
        <h2 className="text-5xl font-bold mb-8">
          <span className="bg-gradient-to-r from-emerald-600 to-slate-700 bg-clip-text text-transparent">
            Partnering...
          </span>
        </h2>
        <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
          We work closely with other cloud-based platforms to ensure seamless integration for our clients. This includes Xero, Sage, QuickBooks, HubSpot, Shopify, DPD, and WordPress.
        </p>
      </div>
      
      <Card className="bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-xl">
        <CardContent className="p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {integrationPartners.map((partner, index) => (
              <div 
                key={index}
                className="group h-24 flex items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:border-emerald-200 hover:from-emerald-50 hover:to-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <span className="text-slate-600 group-hover:text-emerald-600 text-sm font-semibold text-center leading-tight transition-colors">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default IntegrationPartners;
