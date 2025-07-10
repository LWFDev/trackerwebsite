import React, { useState } from "react";
import { Check, X, ChevronDown, ChevronUp } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion, AnimatePresence } from "framer-motion";
interface ComparisonFeature {
  feature: string;
  starter: string | boolean;
  professional: string | boolean;
  enterprise: string | boolean;
}
const FeatureComparison = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoverRow, setHoverRow] = useState<number | null>(null);
  const comparisonFeatures: ComparisonFeature[] = [
    {
      feature: "Full User Licenses",
      starter: "2 included",
      professional: "5 included", 
      enterprise: "Custom"
    },
    {
      feature: "Department Licenses",
      starter: "2 included",
      professional: "5 included",
      enterprise: "Custom"
    },
    {
      feature: "Station Licenses", 
      starter: "2 included",
      professional: "5 included",
      enterprise: "Custom"
    },
    {
      feature: "Storage",
      starter: "25GB included",
      professional: "100GB included",
      enterprise: "Unlimited"
    },
    {
      feature: "Modules",
      starter: "4 core modules",
      professional: "7 modules + analytics",
      enterprise: "All modules + custom"
    },
    {
      feature: "Support",
      starter: "Email & community",
      professional: "Priority chat & phone",
      enterprise: "24/7 dedicated manager"
    },
    {
      feature: "API Access",
      starter: "Basic API",
      professional: "Advanced API + webhooks", 
      enterprise: "Custom API development"
    },
    {
      feature: "Integrations",
      starter: "1 integration",
      professional: "5 integrations",
      enterprise: "Unlimited"
    },
    {
      feature: "Training",
      starter: "Self-service",
      professional: "Live sessions",
      enterprise: "On-site + custom program"
    },
    {
      feature: "Custom Branding",
      starter: false,
      professional: false,
      enterprise: true
    },
    {
      feature: "Multi-location Support",
      starter: false,
      professional: false,
      enterprise: true
    },
    {
      feature: "SLA Guarantees",
      starter: false,
      professional: false,
      enterprise: true
    }
  ];

  // Initial visible features
  const visibleFeatures = isExpanded ? comparisonFeatures : comparisonFeatures.slice(0, 5);
  const renderCell = (value: string | boolean, isPro: boolean = false) => {
    if (typeof value === 'boolean') {
      return value ? <motion.div whileHover={{
        scale: 1.2,
        rotate: 10
      }} className="flex justify-center">
          <Check className={`h-5 w-5 ${isPro ? 'text-gold-light' : 'text-gold'}`} />
        </motion.div> : <X className="h-5 w-5 text-gray-500 mx-auto" />;
    }
    return <span className="text-gray-300">{value}</span>;
  };

  // Animation variants
  const tableVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const rowVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
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
  return <div className="py-20 bg-gradient-to-b from-black to-zinc-900 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal threshold={0.1} delay={100}>
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" initial={{
          opacity: 0,
          y: -20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          type: "spring",
          stiffness: 300
        }}>
            <motion.span className="text-gold-gradient inline-block" animate={{
            backgroundPosition: ['0% center', '100% center', '0% center']
          }} transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }} style={{
            backgroundSize: '200% auto'
          }}>
              Compare
            </motion.span> Plan Features
          </motion.h2>
        </ScrollReveal>
        
        <ScrollReveal threshold={0.1} delay={200} className="overflow-x-auto max-w-6xl mx-auto">
          <div className="min-w-[768px]">
            <motion.table className="w-full border-collapse" variants={tableVariants} initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.1
          }}>
              <thead>
                <motion.tr className="border-b border-zinc-800" variants={rowVariants}>
                  <th className="p-5 text-left text-gray-400 font-medium">Features</th>
                  <th className="p-5 text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-white mb-1">Starter</span>
                      
                    </div>
                  </th>
                  <th className="p-5 text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-white mb-1">Decorator</span>
                      
                    </div>
                  </th>
                  <th className="p-5 text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-white mb-1">Enterprise</span>
                      <span className="text-sm text-gray-400">Custom pricing</span>
                    </div>
                  </th>
                </motion.tr>
              </thead>
              <tbody>
                {visibleFeatures.map((item, index) => <motion.tr key={index} className={`border-b border-zinc-800 ${index % 2 === 0 ? 'bg-zinc-900/30' : ''}`} variants={rowVariants} onMouseEnter={() => setHoverRow(index)} onMouseLeave={() => setHoverRow(null)} animate={{
                backgroundColor: hoverRow === index ? 'rgba(30, 30, 30, 0.6)' : index % 2 === 0 ? 'rgba(24, 24, 27, 0.3)' : 'transparent'
              }}>
                    <td className="p-5 text-left font-medium">{item.feature}</td>
                    <td className="p-5 text-center">
                      {renderCell(item.starter)}
                    </td>
                    <td className="p-5 text-center">
                      {renderCell(item.professional)}
                    </td>
                    <td className="p-5 text-center">
                      {renderCell(item.enterprise)}
                    </td>
                  </motion.tr>)}
              </tbody>
            </motion.table>
            
            {/* Expand/collapse button */}
            <motion.div className="mt-6 text-center" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.5
          }}>
              <motion.button className="inline-flex items-center px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-sm font-medium gap-2 transition-colors" onClick={() => setIsExpanded(!isExpanded)} whileHover={{
              y: -2
            }} whileTap={{
              y: 0
            }}>
                {isExpanded ? <>
                    Show Less <ChevronUp className="h-4 w-4" />
                  </> : <>
                    Show All Features <ChevronDown className="h-4 w-4" />
                  </>}
              </motion.button>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </div>;
};
export default FeatureComparison;