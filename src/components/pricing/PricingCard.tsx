
import React from "react";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
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
    <div 
      className={cn(
        "bg-zinc-900/80 backdrop-blur-md rounded-xl border shadow-lg p-8 relative transition-all duration-300 hover:-translate-y-2 h-full flex flex-col", 
        plan.highlighted 
          ? "border-[#D4AF37] ring-2 ring-[#D4AF37]/20 hover:shadow-[#D4AF37]/30" 
          : "border-zinc-800 hover:shadow-zinc-800/30"
      )}
    >
      {plan.highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-[#D4AF37] to-[#F2D675] text-black text-xs font-semibold px-4 py-1.5 rounded-full flex items-center gap-1.5">
            <Star className="h-3.5 w-3.5" />
            <span>Most popular</span>
          </div>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold mb-3">{plan.name}</h3>
        <div className="flex flex-col justify-center items-center mb-4">
          <span className={`text-5xl font-bold ${plan.highlighted ? 'text-[#D4AF37]' : 'text-white'}`}>
            {plan.price}
          </span>
          {plan.price !== "Custom" && <span className="text-gray-500 text-sm mt-2">Billed annually</span>}
        </div>
        <p className="text-gray-400 mb-6">{plan.description}</p>
      </div>
      
      <div className="space-y-4 mb-8 flex-grow">
        <p className="text-sm font-medium text-gray-300 mb-3 tracking-wide">WHAT'S INCLUDED:</p>
        <ul className="space-y-3.5">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <Check className="h-5 w-5 text-[#D4AF37] shrink-0 mr-3 mt-0.5" />
              <span className="text-gray-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <Link to={buttonLink} className="mt-auto">
        <Button 
          className={cn(
            "w-full py-6 text-base font-medium", 
            plan.highlighted 
              ? "bg-gradient-to-r from-[#D4AF37] to-[#F2D675] hover:from-[#F2D675] hover:to-[#D4AF37] text-black transition-all duration-300" 
              : "bg-zinc-800 hover:bg-zinc-700 text-white"
          )}
        >
          {plan.buttonText}
        </Button>
      </Link>
    </div>
  );
};

export default PricingCard;
