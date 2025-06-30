
import React from "react";
import FeatureCard from "./FeatureCard";
import SectionTitle from "./SectionTitle";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Cpu, Globe } from "lucide-react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const FeaturesSection = () => {
  return <>
      <SectionTitle label="Features" title={<>
            Everything You Need in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">One Platform</span>
          </>} description="TRACKER covers all of your key needs in one business platform" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard title="Streamlined Workflow" description="A common intuitive place and streamline your workflow from sales ordering to fulfillment." delay={0.1} />
        <FeatureCard title="Centralized Data" description="The ultimate Logo, Proof, and Approvals management system, to include Wilcom EMB/DST renderings, Job Sheets, in-plant order management, scheduling, and tracking as well as fulfillment logistics tracking." delay={0.2} lottieSource="https://lottie.host/220d2e76-382d-4908-a817-6bcc6f3e87b8/DgUxlrKJnu.lottie" />
        <FeatureCard title="Real-time Insights" description="Art jobs & productivity, Scheduling and production dashboards, staging, orders on the floor, QA/QC & fulfilment. Metabase & PowerBI dashboarding available." delay={0.3} lottieSource="https://lottie.host/0df94694-68d2-4628-9b38-8bcf2ff9d8a0/zEiHejuuNO.lottie" />
      </div>

      <ScrollReveal>
        <div className="relative p-8 bg-gradient-to-br from-zinc-900 to-zinc-950 dark:from-zinc-900 dark:to-zinc-950 light:from-gray-800 light:to-gray-900 rounded-xl border border-zinc-800 dark:border-zinc-800 light:border-gray-700 overflow-hidden mb-12 transition-colors duration-300">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#D4AF37]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <div className="w-full md:w-1/5 flex justify-center">
                <DotLottieReact
                  src="https://lottie.host/42cb4351-92d9-47af-9771-a3a52b08e4f7/AKXN004kzA.lottie"
                  loop
                  autoplay
                />
              </div>
              
              <div className="max-w-xl">
                <h3 className="text-2xl font-bold mb-4 text-white">Advanced <span className="text-[#D4AF37]">Management</span></h3>
                <p className="text-gray-400 dark:text-gray-400 light:text-gray-300 transition-colors duration-300">Our platform will deliver logos directly to embroidery machines (Barudan/Tajima) using bNET or Pulse.  Sending images to screen burners or tablets next to heat seal to get orientations correct.  From orders to logos to proofs to production and fulfillment its all cloud based - you can access it from anywhere.</p>
              </div>
              
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 dark:bg-zinc-800 light:bg-gray-700 border border-zinc-700 dark:border-zinc-700 light:border-gray-600 flex items-center justify-center text-[#D4AF37] mb-2 transition-colors duration-300">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <span className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-300 transition-colors duration-300">Smart Monitoring</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 dark:bg-zinc-800 light:bg-gray-700 border border-zinc-700 dark:border-zinc-700 light:border-gray-600 flex items-center justify-center text-[#D4AF37] mb-2 transition-colors duration-300">
                    <Globe className="w-5 h-5" />
                  </div>
                  <span className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-300 transition-colors duration-300">Remote Access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </>;
};
export default FeaturesSection;
