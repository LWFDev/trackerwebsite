
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const MainStory = () => {
  return (
    <section className="mb-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-emerald-500 rounded-full"></div>
            <div className="pl-8 space-y-8">
              <div className="relative bg-emerald-900/30 p-8 rounded-xl border border-emerald-700">
                <Quote className="absolute top-4 left-4 h-6 w-6 text-emerald-500/60" />
                <p className="text-xl md:text-2xl text-white font-semibold leading-tight pl-6">
                  As with many great business ventures, Tracker is built on years of first-hand personal experience, dissatisfaction with how things are, and an insatiable quest for improvement.
                </p>
              </div>
              
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <Card className="border-gray-700 bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <p>
                      Will - our founder - has spent the past 20+ years owning, running, working in – and with - various physical product-based businesses, which led to a comprehensive cloud software solution that enables owners, managers and teams to have transparency throughout their businesses.
                    </p>
                  </CardContent>
                </Card>
                
                <div className="bg-gold-opacity-10 p-6 rounded-xl border-l-4 border-gold">
                  <p className="text-gray-200 font-medium">
                    While Tracker is able to support any physical product-based business, we believe in doing what we are best at and love doing. This led to us focusing on the <span className="text-emerald-400 font-semibold bg-emerald-900/30 px-2 py-1 rounded">garment and decoration industry</span> - where our roots were built.
                  </p>
                </div>
                
                <Card className="border-gray-700 bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <p>
                      We address the business and leadership needs to best manage production requirements. This can include everything from creating detailed reports to managing 'on demand', 'drop shipping' and 'high volume seasonality' – as well as 3PL and potentially multi-site operations.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <Card className="border-gray-700 bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/a9e097b4-1467-4e2f-8684-c553ad3b8eff.png" 
                  alt="Tracker team member working in modern warehouse facility" 
                  className="w-full rounded-lg hover:scale-105 transition-transform duration-500"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MainStory;
