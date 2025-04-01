
import React from "react";
import PricingHero from "@/components/pricing/PricingHero";
import PricingPlans from "@/components/pricing/PricingPlans";
import FeatureComparison from "@/components/pricing/FeatureComparison";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import ContactCTA from "@/components/pricing/ContactCTA";

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <PricingHero />
      <PricingPlans />
      <FeatureComparison />
      <PricingFAQ />
      <ContactCTA />
    </div>
  );
};

export default PricingPage;
