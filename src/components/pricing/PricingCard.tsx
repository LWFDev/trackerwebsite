
import React from "react";
import { Button } from "@/components/ui/button";
import { Check, Star, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

  // Subtle shimmer animation for highlighted card
  const shimmerVariants = {
    initial: { x: '-100%' },
    animate: { 
      x: '100%',
      transition: { 
        repeat: Infinity,
        repeatType: "loop" as const,
        duration: 2,
        ease: "linear",
        repeatDelay: 4
      }
    }
  };

  // Features animation
  const featureVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({ 
      opacity: 1, 
      x: 0,
      transition: { 
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <motion.div 
      className={cn(
        "bg-zinc-900/80 backdrop-blur-md rounded-xl border shadow-lg p-8 relative transition-all duration-300 h-full flex flex-col", 
        plan.highlighted 
          ? "border-[#D4AF37] ring-2 ring-[#D4AF37]/20" 
          : "border-zinc-800"
      )}
      whileHover={{ 
        y: -8, 
        boxShadow: plan.highlighted 
          ? '0 20px 40px -5px rgba(212, 175, 55, 0.25)' 
          : '0 20px 40px -5px rgba(0, 0, 0, 0.3)'
      }}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      {plan.highlighted && (
        <>
          {/* Shimmer effect for highlighted card */}
          <motion.div 
            className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent"
            variants={shimmerVariants}
            initial="initial"
            animate="animate"
            style={{ backgroundSize: '200% 100%' }}
          />
          
          {/* Popular badge */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <motion.div 
              className="bg-gradient-to-r from-[#D4AF37] to-[#F2D675] text-black text-xs font-semibold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Most popular</span>
            </motion.div>
          </div>
        </>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold mb-3">{plan.name}</h3>
        <div className="flex flex-col justify-center items-center mb-4">
          <motion.span 
            className={`text-5xl font-bold ${plan.highlighted ? 'text-[#D4AF37]' : 'text-white'} relative`}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {plan.price}
            {plan.highlighted && (
              <motion.div 
                className="absolute -inset-2 -z-10 rounded-xl bg-[#D4AF37]/10"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.2, 0.5]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
            )}
          </motion.span>
          {plan.price !== "Custom" && <span className="text-gray-500 text-sm mt-2">Billed annually</span>}
        </div>
        <p className="text-gray-400 mb-6">{plan.description}</p>
      </div>
      
      <div className="space-y-4 mb-8 flex-grow">
        <p className="text-sm font-medium text-gray-300 mb-3 tracking-wide">WHAT'S INCLUDED:</p>
        <ul className="space-y-3.5">
          {plan.features.map((feature, i) => (
            <motion.li 
              key={i} 
              className="flex items-start"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={featureVariants}
            >
              <motion.div 
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="mr-3 mt-0.5"
              >
                <Check className={`h-5 w-5 ${plan.highlighted ? 'text-[#F2D675]' : 'text-[#D4AF37]'} shrink-0`} />
              </motion.div>
              <span className="text-gray-300 text-sm">{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>
      
      <Link to={buttonLink} className="mt-auto">
        <Button 
          className={cn(
            "w-full py-6 text-base font-medium relative overflow-hidden group", 
            plan.highlighted 
              ? "bg-gradient-to-r from-[#D4AF37] to-[#F2D675] hover:from-[#F2D675] hover:to-[#D4AF37] text-black transition-all duration-300" 
              : "bg-zinc-800 hover:bg-zinc-700 text-white"
          )}
          onMouseOver={(e) => {
            if (plan.highlighted) {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              e.currentTarget.style.setProperty('--x', `${x}px`);
              e.currentTarget.style.setProperty('--y', `${y}px`);
            }
          }}
        >
          {plan.highlighted && (
            <span className="absolute inset-0 bg-white/20 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
              style={{
                background: 'radial-gradient(circle 80px at var(--x) var(--y), rgba(255,255,255,0.2), transparent)',
                '--x': '50%',
                '--y': '50%'
              } as React.CSSProperties}
            />
          )}
          <span className="relative z-10 flex items-center justify-center">
            {plan.buttonText}
            {plan.highlighted && <Sparkles className="ml-2 h-4 w-4" />}
          </span>
        </Button>
      </Link>
    </motion.div>
  );
};

export default PricingCard;
