
import React from "react";
import { CheckCircle, Zap, BarChart, Cpu, Globe } from "lucide-react";
import FeatureCard from "./FeatureCard";
import SectionTitle from "./SectionTitle";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const FeaturesSection = () => {
  return (
    <>
      <SectionTitle
        label="Features"
        title={
          <>
            Everything You Need in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">One Platform</span>
          </>
        }
        description="TRACKER covers all of your key needs in one business platform"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard 
          icon={CheckCircle}
          title="Streamlined Workflow" 
          description="A common intuitive place and streamline your workflow from sales ordering to fulfillment." 
          delay={0.1}
        />
        <FeatureCard 
          icon={Zap}
          title="Centralized Data" 
          description="Keep all your business data in one place for easy access and better decision making." 
          delay={0.2}
        />
        <FeatureCard 
          icon={BarChart}
          title="Real-time Insights" 
          description="Get real-time insights into your business performance with powerful analytics tools." 
          delay={0.3}
        />
      </div>

      <ScrollReveal>
        <div className="relative p-8 bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-xl border border-zinc-800 overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#D4AF37]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-xl">
                <h3 className="text-2xl font-bold mb-4">Advanced <span className="text-[#D4AF37]">Machine Management</span></h3>
                <p className="text-gray-400">Our platform offers sophisticated machine monitoring and control systems with 99.99% reliability, ensuring your production equipment is always operating at peak efficiency.</p>
              </div>
              
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-[#D4AF37] mb-2">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <span className="text-sm text-gray-400">Smart Monitoring</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-[#D4AF37] mb-2">
                    <Globe className="w-5 h-5" />
                  </div>
                  <span className="text-sm text-gray-400">Remote Access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </>
  );
};

export default FeaturesSection;
