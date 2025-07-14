import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Check, ChevronDown, Sparkles, Users, Database, Headphones, Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";
import { PricingTier } from "@/data/pricingData";
import { useLocalization } from "@/contexts/LocalizationContext";
import CustomQuoteModal from "./CustomQuoteModal";
interface DetailedPricingCardProps {
  tier: PricingTier;
  billingCycle: 'monthly' | 'annually';
}
const DetailedPricingCard: React.FC<DetailedPricingCardProps> = ({
  tier,
  billingCycle
}) => {
  const {
    locale
  } = useLocalization();
  const [showDetails, setShowDetails] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  // Enterprise plan custom license counts
  const [customLicenses, setCustomLicenses] = useState({
    fullUsers: 10,
    departments: 5,
    stations: 15
  });
  const updateLicense = (type: keyof typeof customLicenses, increment: boolean) => {
    setCustomLicenses(prev => ({
      ...prev,
      [type]: Math.max(1, prev[type] + (increment ? 1 : -1))
    }));
  };

  // Currency conversion
  const USD_TO_GBP_RATE = 0.79;
  const formatPrice = (price: number) => {
    if (price === 0) return "Custom";
    const finalPrice = billingCycle === 'annually' ? price * 0.8 : price; // 20% discount for annual
    const convertedPrice = locale === 'UK' ? Math.round(finalPrice * USD_TO_GBP_RATE) : finalPrice;
    const currency = locale === 'UK' ? '£' : '$';
    return `${currency}${convertedPrice.toLocaleString()}`;
  };
  const basePrice = formatPrice(tier.basePrice);
  const tierPrice = formatPrice(tier.tierPrice);
  const onboardingFee = formatPrice(tier.onboardingFee);
  return <motion.div className={`relative h-full ${tier.highlighted ? 'z-30' : 'z-20'} isolate`} whileHover={{
    y: -5,
    scale: tier.highlighted ? 1.05 : 1.02
  }} transition={{
    type: "spring",
    stiffness: 300,
    damping: 20
  }} style={{
    transformStyle: 'preserve-3d',
    backfaceVisibility: 'hidden'
  }}>
      <Card className={`bg-zinc-900 border ${tier.highlighted ? 'border-yellow-400 ring-2 ring-yellow-400/30 shadow-2xl shadow-yellow-400/20' : 'border-zinc-800'} h-full overflow-hidden relative z-10`}>
        
        {/* Highlighted badge */}
        {tier.highlighted && <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-40">
            <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold shadow-lg whitespace-nowrap px-3 py-1">
              <Sparkles className="w-3 h-3 mr-1" />
              Most Popular
            </Badge>
          </div>}

        {/* Savings badge */}
        {tier.savings && <div className="absolute -top-4 right-2 z-40">
            <Badge className="bg-green-500/20 text-green-400 border border-green-500/30 text-xs whitespace-nowrap px-2 py-1">
              {tier.savings}
            </Badge>
          </div>}

        <CardHeader className="text-center pb-4 pt-10">
          <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
          <p className="text-gray-400 text-sm mb-6">{tier.description}</p>
          
          {/* Pricing display */}
          <div className="space-y-2">
            {tier.basePrice > 0 ? <>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                  <span>Monthly:</span>
                  <span className={tier.highlighted ? 'text-yellow-400' : 'text-white'}>{basePrice}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className={`text-4xl font-bold ${tier.highlighted ? 'text-yellow-400' : 'text-white'}`}>
                    {tierPrice}
                  </span>
                  <span className="text-gray-500">On-Boarding Fee</span>
                </div>
                
                {billingCycle === 'annually' && <div className="text-xs text-green-400">
                    20% discount applied for annual billing
                  </div>}
              </> : <div className="text-4xl font-bold text-white">Custom</div>}
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* License overview */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white flex items-center gap-2">
              <Users className="w-4 h-4" />
              {tier.name === 'Enterprise' ? 'License Configuration' : 'Included Licenses'}
            </h4>
            {tier.name === 'Enterprise' ? <div className="grid grid-cols-1 gap-4 text-sm">
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-300 font-medium">Full Users:</span>
                  <div className="flex items-center gap-3">
                    <Button size="icon" variant="outline" onClick={() => updateLicense('fullUsers', false)} className="h-8 w-8 bg-zinc-800 border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600 text-gray-300 hover:text-white">
                      <Minus className="w-3 h-3" />
                    </Button>
                    <span className="text-white font-semibold min-w-[2rem] text-center">{customLicenses.fullUsers}</span>
                    <Button size="icon" variant="outline" onClick={() => updateLicense('fullUsers', true)} className="h-8 w-8 bg-zinc-800 border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600 text-gray-300 hover:text-white">
                      <Plus className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-300 font-medium">Departments:</span>
                  <div className="flex items-center gap-3">
                    <Button size="icon" variant="outline" onClick={() => updateLicense('departments', false)} className="h-8 w-8 bg-zinc-800 border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600 text-gray-300 hover:text-white">
                      <Minus className="w-3 h-3" />
                    </Button>
                    <span className="text-white font-semibold min-w-[2rem] text-center">{customLicenses.departments}</span>
                    <Button size="icon" variant="outline" onClick={() => updateLicense('departments', true)} className="h-8 w-8 bg-zinc-800 border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600 text-gray-300 hover:text-white">
                      <Plus className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-300 font-medium">Stations:</span>
                  <div className="flex items-center gap-3">
                    <Button size="icon" variant="outline" onClick={() => updateLicense('stations', false)} className="h-8 w-8 bg-zinc-800 border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600 text-gray-300 hover:text-white">
                      <Minus className="w-3 h-3" />
                    </Button>
                    <span className="text-white font-semibold min-w-[2rem] text-center">{customLicenses.stations}</span>
                    <Button size="icon" variant="outline" onClick={() => updateLicense('stations', true)} className="h-8 w-8 bg-zinc-800 border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600 text-gray-300 hover:text-white">
                      <Plus className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div> : <div className="grid grid-cols-1 gap-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">Full Users:</span>
                  <span className="text-white">{tier.licenses.full.included}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Department:</span>
                  <span className="text-white">{tier.licenses.department.included}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Station:</span>
                  <span className="text-white">{tier.licenses.station.included}</span>
                </div>
              </div>}
          </div>

          {/* Key features */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white flex items-center gap-2">
              <Database className="w-4 h-4" />
              Key Features
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                <span className="text-gray-300 text-sm">{tier.features.storage}</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                <span className="text-gray-300 text-sm">
                  {tier.name === 'Starter' ? '4 modules included' : 
                   tier.name === 'Decorator' ? '7 modules included' : 
                   'All modules included'}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Headphones className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <span className="text-gray-300 text-sm">{tier.features.support[0]}</span>
              </div>
            </div>
          </div>

          {/* Expandable details */}
          <Collapsible open={showDetails} onOpenChange={setShowDetails}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full text-gray-400 hover:text-white" size="sm">
                <span>View detailed breakdown</span>
                <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${showDetails ? 'rotate-180' : ''}`} />
              </Button>
            </CollapsibleTrigger>
            
            <CollapsibleContent className="space-y-4 mt-4">
              {/* All modules */}
              <div>
                <h5 className="font-medium text-white mb-2">Included Modules</h5>
                <div className="space-y-1">
                  {tier.features.modules.map((module, idx) => <div key={idx} className="flex items-start gap-2">
                      <Check className="w-3 h-3 text-green-400 mt-1 shrink-0" />
                      <span className="text-gray-300 text-xs">{module}</span>
                    </div>)}
                </div>
              </div>

              {/* Support & Training */}
              <div>
                <h5 className="font-medium text-white mb-2">Support & Training</h5>
                <div className="space-y-1">
                  {tier.features.support.concat(tier.features.training).map((item, idx) => <div key={idx} className="flex items-start gap-2">
                      <Check className="w-3 h-3 text-blue-400 mt-1 shrink-0" />
                      <span className="text-gray-300 text-xs">{item}</span>
                    </div>)}
                </div>
              </div>

              {/* License pricing */}
              <div>
                <h5 className="font-medium text-white mb-2">Additional License Pricing</h5>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Extra Full Users:</span>
                    <span className="text-gray-300">{tier.licenses.full.additional}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Extra Department:</span>
                    <span className="text-gray-300">{tier.licenses.department.additional}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Extra Station:</span>
                    <span className="text-gray-300">{tier.licenses.station.additional}</span>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* CTA Button */}
          <Button className={`w-full ${tier.highlighted ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold' : 'bg-zinc-800 hover:bg-zinc-700 text-white'}`} onClick={() => tier.name === 'Enterprise' ? setShowQuoteModal(true) : undefined}>
            {tier.name === 'Enterprise' ? 'Get Custom Quote' : 'Get Started'}
          </Button>
        </CardContent>
      </Card>

      {/* Custom Quote Modal */}
      <CustomQuoteModal isOpen={showQuoteModal} onClose={() => setShowQuoteModal(false)} selectedLicenses={customLicenses} />
    </motion.div>;
};
export default DetailedPricingCard;