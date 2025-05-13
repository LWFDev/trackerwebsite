
import React from "react";
import { Check, X } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface ComparisonFeature {
  feature: string;
  starter: string | boolean;
  professional: string | boolean;
  enterprise: string | boolean;
}

const FeatureComparison = () => {
  const comparisonFeatures: ComparisonFeature[] = [{
    feature: "Users",
    starter: "Up to 10",
    professional: "Up to 50",
    enterprise: "Unlimited"
  }, {
    feature: "Storage",
    starter: "5GB",
    professional: "50GB",
    enterprise: "Unlimited"
  }, {
    feature: "Report Generation",
    starter: "Basic",
    professional: "Advanced",
    enterprise: "Advanced"
  }, {
    feature: "API Access",
    starter: "Limited",
    professional: "Full Access",
    enterprise: "Custom"
  }, {
    feature: "Support",
    starter: "Email only",
    professional: "Email, Chat & Phone",
    enterprise: "24/7 Priority"
  }, {
    feature: "Analytics",
    starter: "Basic",
    professional: "Advanced",
    enterprise: "Advanced"
  }, {
    feature: "Custom Branding",
    starter: false,
    professional: true,
    enterprise: true
  }, {
    feature: "Dedicated Account Manager",
    starter: false,
    professional: false,
    enterprise: true
  }, {
    feature: "SLA Guarantees",
    starter: false,
    professional: false,
    enterprise: true
  }];

  const renderCell = (value: string | boolean, isPro: boolean = false) => {
    if (typeof value === 'boolean') {
      return value ? 
        <Check className={`h-5 w-5 ${isPro ? 'text-[#F2D675]' : 'text-[#D4AF37]'} mx-auto`} /> : 
        <X className="h-5 w-5 text-gray-500 mx-auto" />;
    }
    
    return <span className="text-gray-300">{value}</span>;
  };

  return (
    <div className="py-20 bg-gradient-to-b from-black to-zinc-900 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal threshold={0.1} delay={100}>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">Compare</span> Plan Features
          </h2>
        </ScrollReveal>
        
        <ScrollReveal threshold={0.1} delay={200} className="overflow-x-auto max-w-6xl mx-auto">
          <div className="min-w-[768px]">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="p-5 text-left text-gray-400 font-medium">Features</th>
                  <th className="p-5 text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-white mb-1">Starter</span>
                      <span className="text-sm text-gray-400">$899/year</span>
                    </div>
                  </th>
                  <th className="p-5 text-center bg-zinc-800/30 rounded-t-lg">
                    <div className="flex flex-col items-center">
                      <span className="text-[#F2D675] mb-1">Professional</span>
                      <span className="text-sm text-gray-400">$1,499/year</span>
                    </div>
                  </th>
                  <th className="p-5 text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-white mb-1">Enterprise</span>
                      <span className="text-sm text-gray-400">Custom pricing</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((item, index) => (
                  <tr key={index} className={`border-b border-zinc-800 ${index % 2 === 0 ? 'bg-zinc-900/30' : ''}`}>
                    <td className="p-5 text-left font-medium">{item.feature}</td>
                    <td className="p-5 text-center">
                      {renderCell(item.starter)}
                    </td>
                    <td className="p-5 text-center bg-zinc-800/30">
                      {renderCell(item.professional, true)}
                    </td>
                    <td className="p-5 text-center">
                      {renderCell(item.enterprise)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default FeatureComparison;
