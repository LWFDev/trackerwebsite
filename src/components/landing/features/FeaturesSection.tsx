
import React from "react";
import { CheckCircle, Zap, BarChart } from "lucide-react";
import FeatureCard from "./FeatureCard";
import SectionTitle from "./SectionTitle";

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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
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
    </>
  );
};

export default FeaturesSection;
