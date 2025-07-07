
import React, { useState, useEffect } from "react";
import PricingCard from "./PricingCard";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Switch } from "@/components/ui/switch";
import { Check, Sparkles } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { useLocalization } from "@/contexts/LocalizationContext";

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
  const { locale, t } = useLocalization();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('annually');
  const [animateSwitch, setAnimateSwitch] = useState(false);
  
  // Currency conversion rate (USD to GBP)
  const USD_TO_GBP_RATE = 0.79;
  
  const convertPrice = (usdPrice: string) => {
    if (usdPrice === "Custom") return usdPrice;
    
    const numericPrice = parseInt(usdPrice.replace('$', '').replace(',', ''));
    const gbpPrice = Math.round(numericPrice * USD_TO_GBP_RATE);
    
    return locale === 'UK' ? `£${gbpPrice.toLocaleString()}` : usdPrice;
  };
  
  // Add pulse animation effect to pricing toggle periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateSwitch(true);
      setTimeout(() => setAnimateSwitch(false), 1000);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
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
    name: t("Starter"),
    price: {
      monthly: "$1,099",
      annually: "$899",
    },
    description: t("For small businesses getting started"),
    features: [
      t("Up to 10 users"), 
      t("5GB storage"), 
      t("Standard report generation"), 
      t("Email support"), 
      t("Basic analytics dashboard"), 
      t("Standard API access"), 
      t("Community support")
    ],
    buttonText: t("Get Started"),
    highlighted: false
  }, {
    name: t("Professional"),
    price: {
      monthly: "$1,899",
      annually: "$1,499",
    },
    description: t("For growing businesses that need more features"),
    features: [
      t("Up to 50 users"), 
      t("50GB storage"), 
      t("Advanced report generation"), 
      t("Priority email & chat support"), 
      t("Custom reporting dashboards"), 
      t("White-label options"), 
      t("Full integration capabilities"), 
      t("Custom workflow automations"), 
      t("Advanced API access")
    ],
    buttonText: t("Get Started"),
    highlighted: true
  }, {
    name: t("Enterprise"),
    price: {
      monthly: "Custom",
      annually: "Custom",
    },
    description: t("For large organizations with advanced needs"),
    features: [
      t("Unlimited users"), 
      t("Unlimited storage"), 
      t("Advanced report generation"), 
      t("24/7 priority support"), 
      t("Custom analytics dashboards"), 
      t("Dedicated account manager"), 
      t("SLA guarantees"), 
      t("Advanced security features"), 
      t("Custom API integrations")
    ],
    buttonText: t("Contact Sales"),
    highlighted: false
  }];

  // Staggered animation for cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <div className="py-16 bg-black relative z-10">
      {/* Dynamic background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#D4AF37]/5 blur-[150px] -top-[200px] right-0 animate-pulse-light"></div>
        <div className="absolute w-[800px] h-[800px] rounded-full bg-[#D4AF37]/5 blur-[150px] -bottom-[300px] left-0 animate-pulse-light" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center mb-12" threshold={0.1} delay={100}>
          <div className={`flex items-center justify-center gap-4 mb-8 ${animateSwitch ? 'animate-bounce-light' : ''}`}>
            <span className={`text-sm ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>{t("Monthly")}</span>
            <Switch 
              checked={billingCycle === 'annually'} 
              onCheckedChange={toggleBillingCycle}
              className="data-[state=checked]:bg-[#D4AF37] relative"
            >
              {animateSwitch && (
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D4AF37]"></span>
                </span>
              )}
            </Switch>
            <div className="flex flex-col items-start">
              <span className={`text-sm ${billingCycle === 'annually' ? 'text-white' : 'text-gray-400'}`}>
                {t("Annually")}
              </span>
              {billingCycle === 'annually' && (
              <span className="text-xs text-emerald-DEFAULT flex items-center gap-1">
                <Sparkles className="h-3 w-3" /> {t("Save 20%")}
              </span>
              )}
            </div>
          </div>
        </ScrollReveal>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div key={index} variants={cardVariants}>
              <PricingCard 
                plan={{
                  ...plan, 
                  price: convertPrice(plan.price[billingCycle])
                }} 
              />
            </motion.div>
          ))}
        </motion.div>
        
        <ScrollReveal className="text-center text-gray-400 mt-8 text-sm max-w-2xl mx-auto" threshold={0.1} delay={400}>
          <div className="flex items-center justify-center gap-2 mt-8">
            <Check className="h-4 w-4 text-emerald-DEFAULT" />
            <p>{t("All plans include a 14-day free trial with no credit card required")}</p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default PricingPlans;
