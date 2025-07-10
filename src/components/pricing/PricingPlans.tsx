
import React, { useState, useEffect } from "react";
import DetailedPricingCard from "./DetailedPricingCard";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Switch } from "@/components/ui/switch";
import { Check, Sparkles } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { useLocalization } from "@/contexts/LocalizationContext";
import { pricingTiers } from "@/data/pricingData";

const PricingPlans = () => {
  const { locale, t } = useLocalization();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('annually');
  const [animateSwitch, setAnimateSwitch] = useState(false);
  
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
    <div className="py-12 sm:py-16 lg:py-20 bg-black relative z-10">
      {/* Dynamic background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-emerald-500/10 blur-[150px] -top-[200px] right-0 animate-pulse-light"></div>
        <div className="absolute w-[800px] h-[800px] rounded-full bg-gold-opacity-8 blur-[150px] -bottom-[300px] left-0 animate-pulse-light" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal className="text-center mb-12" threshold={0.1} delay={100}>
          <div className={`flex items-center justify-center gap-4 mb-8 ${animateSwitch ? 'animate-bounce-light' : ''}`}>
            <span className={`text-sm ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>{t("Monthly")}</span>
            <Switch 
              checked={billingCycle === 'annually'} 
              onCheckedChange={toggleBillingCycle}
              className="data-[state=checked]:bg-emerald-500 relative"
            >
              {animateSwitch && (
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
                </span>
              )}
            </Switch>
            <div className="flex flex-col items-start">
              <span className={`text-sm ${billingCycle === 'annually' ? 'text-white' : 'text-gray-400'}`}>
                {t("Annually")}
              </span>
              {billingCycle === 'annually' && (
              <span className="text-xs text-emerald-400 flex items-center gap-1">
                <Sparkles className="h-3 w-3" /> {t("Save 20%")}
              </span>
              )}
            </div>
          </div>
        </ScrollReveal>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {pricingTiers.map((tier, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              className="flex justify-center"
            >
              <div className="w-full max-w-sm">
                <DetailedPricingCard 
                  tier={tier}
                  billingCycle={billingCycle}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <ScrollReveal className="text-center text-gray-400 mt-12 text-sm max-w-2xl mx-auto px-4" threshold={0.1} delay={400}>
          <div className="flex items-center justify-center gap-2">
            <Check className="h-4 w-4 text-emerald-400 shrink-0" />
            <p>{t("Guaranteed results with every plan.")}</p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default PricingPlans;
