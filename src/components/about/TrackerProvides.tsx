
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap, ArrowRight, Target } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";

const TrackerProvides = () => {
  const keyFeatures = [
    {
      text: "End-to-end process tracking",
      icon: <Target className="h-5 w-5" />
    },
    {
      text: "Real-time business intelligence",
      icon: <Zap className="h-5 w-5" />
    },
    {
      text: "Secure cloud access",
      icon: <CheckCircle className="h-5 w-5" />
    },
    {
      text: "Multi-site operations support",
      icon: <ArrowRight className="h-5 w-5" />
    }
  ];

  return (
    <section className="mb-24">
      <ScrollReveal preset="enterprise" delay={100}>
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 px-6 py-3 text-gray-300 border-gray-600 bg-gray-800 font-medium">
            <Zap className="h-4 w-4 mr-2 text-emerald-600" />
            Our Solution
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Tracker Provides...
          </h2>
        </div>
      </ScrollReveal>
      
      <ScrollReveal preset="confident" delay={300}>
        <Card className="border-gray-700 bg-gray-800 shadow-lg">
          <CardContent className="p-12">
            <div className="grid lg:grid-cols-2 gap-12">
              <ScrollReveal direction="left" preset="enterprise" delay={200}>
                <div className="space-y-8">
                  <Card className="border-emerald-700 bg-emerald-900/20 shadow-sm">
                    <CardContent className="p-6">
                      <img src="/lovable-uploads/74104891-c670-4c0b-95bd-58f41eb753f3.png" alt="Warehouse worker packing orders with Tracker system" className="w-full h-auto rounded-lg shadow-sm" />
                    </CardContent>
                  </Card>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="right" preset="enterprise" delay={400}>
                <div className="space-y-4">
                  <ScrollReveal preset="gentle" delay={100}>
                    <Card className="border-gold-opacity-30 bg-gold-opacity-10 shadow-sm">
                      <CardContent className="p-6">
                        <p className="text-lg leading-relaxed text-gray-200">
                          Tracker provides confidence and clarity – for today's requirements as well as supporting the strategic needs and planning for tomorrow. In a fast-paced and changing world, Tracker also allows key people to have instant and secure access to business intelligence and data from anywhere there is an internet connection.
                        </p>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                  
                  <ScrollReveal preset="enterprise" stagger delay={300}>
                    {keyFeatures.map((feature, index) => (
                      <Card key={index} className="border-gray-700 bg-gray-800 hover:border-emerald-300 hover:shadow-md transition-all group">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center text-white shadow-sm">
                              {feature.icon}
                            </div>
                            <span className="font-semibold flex-1 text-gray-200">{feature.text}</span>
                            <ArrowRight className="h-4 w-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </ScrollReveal>
                </div>
              </ScrollReveal>
            </div>
          </CardContent>
        </Card>
      </ScrollReveal>
    </section>
  );
};

export default TrackerProvides;
