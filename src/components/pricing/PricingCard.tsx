
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  highlighted: boolean;
}

interface PricingCardProps {
  plan: PricingPlan;
}

const PricingCard = ({ plan }: PricingCardProps) => {
  // Determine the button link based on the plan name
  const buttonLink = plan.name === "Enterprise" ? "/contact" : "/get-started";

  return (
    <div className={cn("bg-zinc-900 rounded-lg border shadow-sm p-6 relative transition-all duration-300 hover:-translate-y-1", plan.highlighted ? "border-[#D4AF37] ring-2 ring-[#D4AF37]/20 hover:shadow-[#D4AF37]/30" : "border-zinc-800 hover:shadow-zinc-800/30")}>
      {plan.highlighted && <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span className="bg-gradient-to-r from-[#D4AF37] to-[#F2D675] text-black text-xs font-semibold px-4 py-1 rounded-full">
          Most popular
        </span>
      </div>}
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
        <div className="flex flex-col justify-center items-center mb-4">
          <span className={`text-4xl font-bold ${plan.highlighted ? 'text-[#D4AF37]' : 'text-white'}`}>
            {plan.price}
          </span>
          {plan.price !== "Custom" && <span className="text-gray-500 text-sm mt-1">Billed annually</span>}
        </div>
        <p className="text-gray-400 mb-6 text-sm">{plan.description}</p>
        <Link to={buttonLink}>
          <Button className={`w-full mb-6 ${plan.highlighted ? 'bg-gradient-to-r from-[#D4AF37] to-[#F2D675] hover:from-[#F2D675] hover:to-[#D4AF37] text-black' : plan.name === 'Starter' || plan.name === 'Enterprise' ? 'bg-zinc-800 hover:bg-zinc-700 text-white' : 'bg-zinc-800 hover:bg-zinc-700'}`}>
            {plan.buttonText}
          </Button>
        </Link>
      </div>
      <div className="space-y-3">
        <p className="text-sm font-medium text-gray-300 mb-2">WHAT'S INCLUDED:</p>
        <ul className="space-y-3">
          {plan.features.map((feature, i) => <li key={i} className="flex items-start">
            <Check className="h-5 w-5 text-[#D4AF37] shrink-0 mr-2" />
            <span className="text-gray-300 text-sm">{feature}</span>
          </li>)}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
