
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
    <section className="mb-24">
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-6 px-6 py-3 text-gray-700 border-gray-200 bg-gray-50 font-medium">
          <Zap className="h-4 w-4 mr-2 text-emerald-600" />
          Our Solution
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
          Tracker Provides...
        </h2>
      </div>
      
      <Card className="border-gray-200 shadow-lg">
        <CardContent className="p-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="border-emerald-100 bg-emerald-50/50 shadow-sm">
                <CardContent className="p-6">
                  <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                    Our clients are able to track their processes from beginning to end – from enquiry and quotations, to providing design or logo proofs, moving on to production priorities, stock management and control, inventory, production, quality and despatch.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-gold/20 bg-gold/5 shadow-sm">
                <CardContent className="p-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Tracker provides confidence and clarity – for today's requirements as well as supporting the strategic needs and planning for tomorrow. In a fast-paced and changing world, Tracker also allows key people to have instant and secure access to business intelligence and data from anywhere there is an internet connection.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-4">
              {keyFeatures.map((feature, index) => (
                <Card key={index} className="border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all group">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center text-white shadow-sm">
                        {feature.icon}
                      </div>
                      <span className="text-gray-800 font-semibold flex-1">{feature.text}</span>
                      <ArrowRight className="h-4 w-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default TrackerProvides;
