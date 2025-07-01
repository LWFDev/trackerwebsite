
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap, ArrowRight, Target } from "lucide-react";

const TrackerProvides = () => {
  const keyFeatures = [
    { text: "End-to-end process tracking", icon: <Target className="h-5 w-5" /> },
    { text: "Real-time business intelligence", icon: <Zap className="h-5 w-5" /> }, 
    { text: "Secure cloud access", icon: <CheckCircle className="h-5 w-5" /> },
    { text: "Multi-site operations support", icon: <ArrowRight className="h-5 w-5" /> }
  ];

  return (
    <section className="mb-28">
      <div className="text-center mb-20">
        <Badge variant="outline" className="mb-8 px-8 py-4 text-slate-700 border-slate-300 bg-gradient-to-r from-slate-50 via-[#D4AF37]/10 to-emerald-50 shadow-sm hover:shadow-md transition-all">
          <Zap className="h-5 w-5 mr-2 text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-emerald-600" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-emerald-700">Our Solution</span>
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          <span className="bg-gradient-to-r from-slate-800 via-[#D4AF37] via-emerald-600 to-green-500 bg-clip-text text-transparent">
            Tracker Provides...
          </span>
        </h2>
      </div>
      
      <Card className="bg-gradient-to-br from-white/80 via-[#D4AF37]/5 via-emerald-50/30 to-green-50/20 backdrop-blur-lg border-slate-200/60 shadow-2xl hover:shadow-3xl transition-all duration-500">
        <CardContent className="p-12 md:p-16">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-10">
              <p className="text-xl md:text-2xl text-slate-800 leading-relaxed font-medium bg-gradient-to-r from-white/80 via-[#D4AF37]/5 to-emerald-50/60 p-6 rounded-2xl border border-[#D4AF37]/20 shadow-sm">
                Our clients are able to track their processes from beginning to end – from enquiry and quotations, to providing design or logo proofs, moving on to production priorities, stock management and control, inventory, production, quality and despatch.
              </p>
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed bg-gradient-to-r from-[#D4AF37]/10 via-emerald-50 to-green-50 p-6 rounded-2xl border border-emerald-200">
                Tracker provides confidence and clarity – for today's requirements as well as supporting the strategic needs and planning for tomorrow. In a fast-paced and changing world, Tracker also allows key people to have instant and secure access to business intelligence and data from anywhere there is an internet connection.
              </p>
            </div>
            
            <div className="space-y-6">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-6 p-6 rounded-2xl bg-gradient-to-r from-white/70 via-[#D4AF37]/10 via-emerald-50/50 to-green-50/30 border border-[#D4AF37]/30 hover:border-emerald-300 hover:from-[#D4AF37]/15 hover:via-emerald-50 hover:to-green-50 transition-all duration-300 group hover:scale-105 shadow-lg hover:shadow-xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#D4AF37] via-emerald-500 via-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <span className="text-slate-800 font-semibold text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#D4AF37] group-hover:to-emerald-700 transition-all duration-300 flex-1">{feature.text}</span>
                  <ArrowRight className="h-5 w-5 text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-emerald-500 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
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
