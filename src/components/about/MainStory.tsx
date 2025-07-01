
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const MainStory = () => {
  return (
    <section className="mb-28">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-10">
          <div className="relative">
            <div className="absolute -left-8 top-0 w-2 h-full bg-gradient-to-b from-emerald-500 via-green-400 to-slate-400 rounded-full shadow-lg"></div>
            <div className="pl-16 space-y-10">
              <div className="relative bg-gradient-to-r from-emerald-50 to-green-50 p-8 rounded-3xl border border-emerald-200 shadow-lg">
                <Quote className="absolute top-4 left-4 h-8 w-8 text-emerald-500 opacity-50" />
                <p className="text-2xl md:text-3xl text-slate-800 font-bold leading-tight pl-8">
                  As with many great business ventures, Tracker is built on years of first-hand personal experience, dissatisfaction with how things are, and an insatiable quest for improvement.
                </p>
              </div>
              
              <div className="space-y-8 text-slate-700 text-lg leading-relaxed">
                <p className="bg-white/70 p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  Will - our founder - has spent the past 20+ years owning, running, working in – and with - various physical product-based businesses, which led to a comprehensive cloud software solution that enables owners, managers and teams to have transparency throughout their businesses.
                </p>
                
                <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-slate-50 p-8 rounded-3xl border-l-4 border-emerald-500 shadow-lg hover:shadow-xl transition-all duration-300">
                  <p className="text-slate-800 font-semibold text-lg">
                    While Tracker is able to support any physical product-based business, we believe in doing what we are best at and love doing. This led to us focusing on the <span className="text-emerald-600 font-bold bg-emerald-100 px-2 py-1 rounded-lg">garment and decoration industry</span> - where our roots were built.
                  </p>
                </div>
                
                <p className="bg-white/70 p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  We address the business and leadership needs to best manage production requirements. This can include everything from creating detailed reports to managing 'on demand', 'drop shipping' and 'high volume seasonality' – as well as 3PL and potentially multi-site operations.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/40 via-green-200/30 to-slate-200/40 rounded-3xl blur-3xl transform rotate-3"></div>
          <Card className="relative bg-white/90 backdrop-blur-md border-slate-200/60 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            <CardContent className="p-10">
              <div className="relative overflow-hidden rounded-3xl">
                <img 
                  src="/lovable-uploads/a9e097b4-1467-4e2f-8684-c553ad3b8eff.png" 
                  alt="Tracker team member working in modern warehouse facility" 
                  className="w-full rounded-3xl shadow-xl hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 via-transparent to-transparent rounded-3xl"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MainStory;
