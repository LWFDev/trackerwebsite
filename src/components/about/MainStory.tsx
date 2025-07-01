
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const MainStory = () => {
  return (
    <section className="mb-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="relative">
            <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-slate-400 rounded-full"></div>
            <div className="pl-12 space-y-8">
              <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
                <p className="text-2xl text-slate-800 font-semibold leading-tight">
                  As with many great business ventures, Tracker is built on years of first-hand personal experience, dissatisfaction with how things are, and an insatiable quest for improvement.
                </p>
                <p>
                  Will - our founder - has spent the past 20+ years owning, running, working in – and with - various physical product-based businesses, which led to a comprehensive cloud software solution that enables owners, managers and teams to have transparency throughout their businesses.
                </p>
                <div className="bg-gradient-to-r from-emerald-50 to-slate-50 p-6 rounded-2xl border-l-4 border-emerald-500">
                  <p className="text-slate-800 font-medium">
                    While Tracker is able to support any physical product-based business, we believe in doing what we are best at and love doing. This led to us focusing on the <span className="text-emerald-600 font-semibold">garment and decoration industry</span> - where our roots were built.
                  </p>
                </div>
                <p>
                  We address the business and leadership needs to best manage production requirements. This can include everything from creating detailed reports to managing 'on demand', 'drop shipping' and 'high volume seasonality' – as well as 3PL and potentially multi-site operations.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/30 to-slate-200/30 rounded-3xl blur-2xl"></div>
          <Card className="relative bg-white/80 backdrop-blur-sm border-slate-200/50 shadow-xl">
            <CardContent className="p-8">
              <img 
                src="/lovable-uploads/a9e097b4-1467-4e2f-8684-c553ad3b8eff.png" 
                alt="Tracker team member working in modern warehouse facility" 
                className="w-full rounded-2xl shadow-lg"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MainStory;
