
import React, { useState } from "react";
import PricingCard from "./PricingCard";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Switch } from "@/components/ui/switch";
import { Check } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface PricingPlan {
  name: string;
  price: {
    monthly: string;
    annually: string;
  };
  description: string;
  features: string[];
  buttonText: string;
  highlighted: boolean;
}

const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('annually');
  
  const toggleBillingCycle = () => {
    const newCycle = billingCycle === 'annually' ? 'monthly' : 'annually';
    setBillingCycle(newCycle);
    toast({
      title: `Switched to ${newCycle} billing`,
      description: newCycle === 'annually' ? "You'll save 20% with annual billing!" : "Monthly billing selected",
      duration: 3000,
    });
  };

  const pricingPlans: PricingPlan[] = [{
    name: "Starter",
    price: {
      monthly: "$1,099",
      annually: "$899",
    },
    description: "For small businesses getting started",
    features: ["Up to 10 users", "5GB storage", "Standard report generation", "Email support", "Basic analytics dashboard", "Standard API access", "Community support"],
    buttonText: "Get Started",
    highlighted: false
  }, {
    name: "Professional",
    price: {
      monthly: "$1,899",
      annually: "$1,499",
    },
    description: "For growing businesses that need more features",
    features: ["Up to 50 users", "50GB storage", "Advanced report generation", "Priority email & chat support", "Custom reporting dashboards", "White-label options", "Full integration capabilities", "Custom workflow automations", "Advanced API access"],
    buttonText: "Get Started",
    highlighted: true
  }, {
    name: "Enterprise",
    price: {
      monthly: "Custom",
      annually: "Custom",
    },
    description: "For large organizations with advanced needs",
    features: ["Unlimited users", "Unlimited storage", "Advanced report generation", "24/7 priority support", "Custom analytics dashboards", "Dedicated account manager", "SLA guarantees", "Advanced security features", "Custom API integrations"],
    buttonText: "Contact Sales",
    highlighted: false
  }];

  return (
    <div className="py-16 bg-black relative z-10">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-12" threshold={0.1} delay={100}>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
            <Switch 
              checked={billingCycle === 'annually'} 
              onCheckedChange={toggleBillingCycle}
              className="data-[state=checked]:bg-[#D4AF37]"
            />
            <div className="flex flex-col items-start">
              <span className={`text-sm ${billingCycle === 'annually' ? 'text-white' : 'text-gray-400'}`}>
                Annually
              </span>
              {billingCycle === 'annually' && (
                <span className="text-xs text-[#D4AF37]">Save 20%</span>
              )}
            </div>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <ScrollReveal key={index} threshold={0.1} delay={100 + index * 100}>
              <PricingCard 
                plan={{
                  ...plan, 
                  price: plan.price[billingCycle]
                }} 
              />
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal className="text-center text-gray-400 mt-8 text-sm max-w-2xl mx-auto" threshold={0.1} delay={400}>
          <div className="flex items-center justify-center gap-2 mt-8">
            <Check className="h-4 w-4 text-[#D4AF37]" />
            <p>All plans include a 14-day free trial with no credit card required</p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default PricingPlans;
