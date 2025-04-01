
import React from "react";
import { Check, X } from "lucide-react";

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

  return (
    <div className="py-16 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">Compare</span> Plan Features
        </h2>
        
        <div className="overflow-x-auto max-w-6xl mx-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="p-4 text-left text-gray-400">Features</th>
                <th className="p-4 text-center">Starter</th>
                <th className="p-4 text-center">Professional</th>
                <th className="p-4 text-center">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((item, index) => <tr key={index} className="border-b border-zinc-800">
                <td className="p-4 text-left font-medium">{item.feature}</td>
                <td className="p-4 text-center">
                  {typeof item.starter === 'boolean' ? item.starter ? <Check className="h-5 w-5 text-[#D4AF37] mx-auto" /> : <X className="h-5 w-5 text-gray-500 mx-auto" /> : <span className="text-gray-300">{item.starter}</span>}
                </td>
                <td className="p-4 text-center">
                  {typeof item.professional === 'boolean' ? item.professional ? <Check className="h-5 w-5 text-[#D4AF37] mx-auto" /> : <X className="h-5 w-5 text-gray-500 mx-auto" /> : <span className="text-gray-300">{item.professional}</span>}
                </td>
                <td className="p-4 text-center">
                  {typeof item.enterprise === 'boolean' ? item.enterprise ? <Check className="h-5 w-5 text-[#D4AF37] mx-auto" /> : <X className="h-5 w-5 text-gray-500 mx-auto" /> : <span className="text-gray-300">{item.enterprise}</span>}
                </td>
              </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FeatureComparison;
