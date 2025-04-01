
import React from "react";
import PricingCard from "./PricingCard";

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  highlighted: boolean;
}

const PricingPlans = () => {
  const pricingPlans: PricingPlan[] = [{
    name: "Starter",
    price: "$899",
    description: "For small businesses getting started",
    features: ["Up to 10 users", "5GB storage", "Standard report generation", "Email support", "Basic analytics dashboard", "Standard API access", "Community support"],
    buttonText: "Get Started",
    highlighted: false
  }, {
    name: "Professional",
    price: "$1,499",
    description: "For growing businesses that need more features",
    features: ["Up to 50 users", "50GB storage", "Advanced report generation", "Priority email & chat support", "Custom reporting dashboards", "White-label options", "Full integration capabilities", "Custom workflow automations", "Advanced API access"],
    buttonText: "Get Started",
    highlighted: true
  }, {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with advanced needs",
    features: ["Unlimited users", "Unlimited storage", "Advanced report generation", "24/7 priority support", "Custom analytics dashboards", "Dedicated account manager", "SLA guarantees", "Advanced security features", "Custom API integrations"],
    buttonText: "Contact Sales",
    highlighted: false
  }];

  return (
    <div className="py-16 bg-black relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
        
        <div className="text-center text-gray-400 mt-8 text-sm max-w-2xl mx-auto">All plans include a 14-day free trial.</div>
      </div>
    </div>
  );
};

export default PricingPlans;
