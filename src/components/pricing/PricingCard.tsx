
import React from "react";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface PricingPlanProps {
  plan: {
    name: string;
    price: string;
    description: string;
    features: string[];
    buttonText: string;
    highlighted: boolean;
  };
}

const PricingCard: React.FC<PricingPlanProps> = ({ plan }) => {
  return (
    <motion.div
      className={`bg-zinc-900 rounded-lg border ${
        plan.highlighted ? "border-[#D4AF37] ring-2 ring-[#D4AF37]/20" : "border-zinc-800"
      } shadow-sm p-6 relative transition-all duration-300 group h-full`}
      whileHover={{ 
        y: -5,
        boxShadow: plan.highlighted ? 
          "0 25px 50px -12px rgba(212, 175, 55, 0.25)" : 
          "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.5
      }}
    >
      {/* Decorative elements */}
      <div 
        className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ willChange: 'opacity' }}
      ></div>
      <div 
        className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ willChange: 'opacity' }}
      ></div>
      
      {plan.highlighted && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <motion.div 
            className="bg-gradient-to-r from-[#D4AF37] to-[#F2D675] text-black text-xs font-semibold px-5 py-1.5 rounded-full flex items-center gap-1.5"
            initial={{ y: -5 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
          >
            <Sparkles size={12} />
            <span>Most popular</span>
          </motion.div>
        </div>
      )}
      
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
        <div className="flex justify-center items-baseline mb-4">
          <span className={`text-4xl font-bold ${plan.highlighted ? 'text-[#D4AF37]' : 'text-white'}`}>
            {plan.price}
          </span>
          {plan.price !== "Custom" && <span className="text-gray-500 ml-1">/month</span>}
        </div>
        <p className="text-gray-400 mb-4">{plan.description}</p>
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          className="mb-6"
        >
          <Button 
            className={`w-full ${
              plan.highlighted 
                ? 'bg-gradient-to-r from-[#D4AF37] to-[#F2D675] hover:from-[#F2D675] hover:to-[#D4AF37] text-black' 
                : 'bg-zinc-800 hover:bg-zinc-700'
            }`}
          >
            {plan.buttonText}
          </Button>
        </motion.div>
      </div>
      
      <ul className="space-y-3">
        {plan.features.map((feature, i) => (
          <motion.li 
            key={i} 
            className="flex items-start"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Check className="h-5 w-5 text-[#D4AF37] shrink-0 mr-2" />
            <span className="text-gray-300">{feature}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default PricingCard;
