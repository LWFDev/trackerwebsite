
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap, ArrowRight } from "lucide-react";

const TrackerProvides = () => {
  const keyFeatures = [
    "End-to-end process tracking",
    "Real-time business intelligence", 
    "Secure cloud access",
    "Multi-site operations support"
  ];

  return (
    <section className="mb-24">
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-6 px-6 py-3 text-slate-700 border-slate-200 bg-slate-50">
          <Zap className="h-4 w-4 mr-2" />
          Our Solution
        </Badge>
        <h2 className="text-5xl font-bold mb-8">
          <span className="bg-gradient-to-r from-slate-800 to-emerald-600 bg-clip-text text-transparent">
            Tracker Provides...
          </span>
        </h2>
      </div>
      
      <Card className="bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-xl">
        <CardContent className="p-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <p className="text-xl text-slate-800 leading-relaxed">
                Our clients are able to track their processes from beginning to end – from enquiry and quotations, to providing design or logo proofs, moving on to production priorities, stock management and control, inventory, production, quality and despatch.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Tracker provides confidence and clarity – for today's requirements as well as supporting the strategic needs and planning for tomorrow. In a fast-paced and changing world, Tracker also allows key people to have instant and secure access to business intelligence and data from anywhere there is an internet connection.
              </p>
            </div>
            
            <div className="space-y-6">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-slate-50 border border-emerald-100 hover:border-emerald-200 transition-all duration-300 group">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-slate-700 font-medium group-hover:text-slate-800 transition-colors">{feature}</span>
                  <ArrowRight className="h-4 w-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default TrackerProvides;
