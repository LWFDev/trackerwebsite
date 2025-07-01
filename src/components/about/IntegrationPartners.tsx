
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
      <div className="text-center mb-20">
        <Badge variant="outline" className="mb-8 px-8 py-4 text-emerald-700 border-emerald-300 bg-gradient-to-r from-emerald-50 to-green-50 shadow-sm hover:shadow-md transition-all">
          <Link2 className="h-5 w-5 mr-2 text-emerald-600" />
          Integration Partners
        </Badge>
        <h2 className="text-5xl md:text-6xl font-bold mb-10">
          <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-slate-700 bg-clip-text text-transparent">
            Seamless Partnerships
          </span>
        </h2>
        <p className="text-xl md:text-2xl text-slate-600 max-w-5xl mx-auto leading-relaxed">
          We work closely with other cloud-based platforms to ensure <span className="text-emerald-600 font-semibold">seamless integration</span> for our clients. This includes Xero, Sage, QuickBooks, HubSpot, Shopify, DPD, and WordPress.
        </p>
      </div>
      
      <Card className="bg-gradient-to-br from-white/90 via-emerald-50/40 to-green-50/30 backdrop-blur-lg border-slate-200/60 shadow-2xl hover:shadow-3xl transition-all duration-500">
        <CardContent className="p-12 md:p-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
            {integrationPartners.map((partner, index) => (
              <div 
                key={index}
                className="group h-28 flex items-center justify-center p-6 rounded-3xl bg-gradient-to-br from-white/80 via-slate-50/50 to-emerald-50/30 border border-slate-200 hover:border-emerald-300 hover:from-emerald-50 hover:via-green-50 hover:to-white transition-all duration-300 hover:scale-110 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="text-center">
                  <Zap className="h-6 w-6 text-emerald-500 group-hover:text-green-600 mx-auto mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <span className="text-slate-700 group-hover:text-emerald-700 text-sm font-bold text-center leading-tight transition-colors block">
                    {partner}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default IntegrationPartners;
