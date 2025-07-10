import React, { useState } from "react";
import { Check, X, ChevronDown, ChevronUp } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

interface ComparisonFeature {
  feature: string;
  tracker: string | boolean;
  others: string | boolean;
  category: string;
}

const FeatureComparison = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoverRow, setHoverRow] = useState<number | null>(null);

  const comparisonFeatures: ComparisonFeature[] = [
    // Industry Specialization
    {
      feature: "Built for Decoration Industry",
      tracker: "100% decoration-focused workflows",
      others: "Generic business management",
      category: "Specialization"
    },
    {
      feature: "Decoration Method Support",
      tracker: "Embroidery, screen printing, DTG, vinyl",
      others: "Basic manufacturing only",
      category: "Specialization"
    },
    {
      feature: "Industry Templates",
      tracker: "Pre-built decoration workflows",
      others: "Generic templates require customization",
      category: "Specialization"
    },
    {
      feature: "Decoration Terminology",
      tracker: "Native garment, color, size terminology",
      others: "Generic product terminology",
      category: "Specialization"
    },

    // Design & Artwork
    {
      feature: "Integrated Product Designer",
      tracker: "Built-in decoration mockup tools",
      others: "External design software required",
      category: "Design Tools"
    },
    {
      feature: "Logo Hub with Version Control",
      tracker: "Centralized artwork with brand compliance",
      others: "Basic file storage without versioning",
      category: "Design Tools"
    },
    {
      feature: "Decoration Preview Generator",
      tracker: "Real-time garment visualization",
      others: "Static images or no previews",
      category: "Design Tools"
    },
    {
      feature: "Brand Guidelines Enforcement",
      tracker: "Automated brand compliance checks",
      others: "Manual brand management",
      category: "Design Tools"
    },

    // Production Management
    {
      feature: "Decoration Production Tracking",
      tracker: "Step-by-step decoration workflows",
      others: "Generic manufacturing steps",
      category: "Production"
    },
    {
      feature: "Equipment Integration",
      tracker: "Native embroidery/printing machine sync",
      others: "Limited or no equipment integration",
      category: "Production"
    },
    {
      feature: "Color Management System",
      tracker: "Thread/ink color matching & inventory",
      others: "Basic color fields without matching",
      category: "Production"
    },
    {
      feature: "Setup Time Calculations",
      tracker: "Decoration-specific setup cost tracking",
      others: "Generic labor time tracking",
      category: "Production"
    },

    // Customer Experience
    {
      feature: "Self-Service Ordering Portal",
      tracker: "Decoration-specific ordering with previews",
      others: "Basic order forms without previews",
      category: "Customer Portal"
    },
    {
      feature: "Real-Time Decoration Quotes",
      tracker: "Instant pricing with decoration variables",
      others: "Manual quote generation required",
      category: "Customer Portal"
    },
    {
      feature: "Approval Workflow for Artwork",
      tracker: "Built-in artwork approval process",
      others: "Email-based or manual approvals",
      category: "Customer Portal"
    },
    {
      feature: "Customer Design Library",
      tracker: "Personal logo/design storage per customer",
      others: "No customer-specific design storage",
      category: "Customer Portal"
    },

    // Pricing Intelligence
    {
      feature: "Decoration Cost Calculator",
      tracker: "Smart pricing based on decoration complexity",
      others: "Basic markup pricing only",
      category: "Pricing"
    },
    {
      feature: "Multi-Method Pricing",
      tracker: "Different rates per decoration method",
      others: "Single pricing model",
      category: "Pricing"
    },
    {
      feature: "Volume Discount Automation",
      tracker: "Decoration quantity break pricing",
      others: "Manual discount application",
      category: "Pricing"
    },
    {
      feature: "Margin Optimization Tools",
      tracker: "Decoration profitability analysis",
      others: "Basic profit reporting",
      category: "Pricing"
    },

    // Industry Integrations
    {
      feature: "Supplier Network Integration",
      tracker: "Direct connection to decoration suppliers",
      others: "Generic supplier management",
      category: "Integrations"
    },
    {
      feature: "Shipping Provider Optimization",
      tracker: "Garment-specific shipping calculations",
      others: "Basic shipping rate tables",
      category: "Integrations"
    },
    {
      feature: "Accounting System Sync",
      tracker: "Decoration-specific chart of accounts",
      others: "Generic accounting integration",
      category: "Integrations"
    },
    {
      feature: "E-commerce Platform Sync",
      tracker: "Decoration product sync with variants",
      others: "Basic product sync without decoration options",
      category: "Integrations"
    },

    // Mobile & Field Operations
    {
      feature: "Shop Floor Production App",
      tracker: "Mobile tracking for decoration stations",
      others: "Basic mobile web interface",
      category: "Mobile"
    },
    {
      feature: "Delivery Route Optimization",
      tracker: "Garment delivery route planning",
      others: "Generic delivery tracking",
      category: "Mobile"
    },
    {
      feature: "Quality Control Checkpoints",
      tracker: "Decoration-specific QC workflows",
      others: "Generic quality control",
      category: "Mobile"
    },
    {
      feature: "Customer Site Installation",
      tracker: "On-site uniform fitting & delivery tracking",
      others: "Basic delivery confirmation",
      category: "Mobile"
    }
  ];

  // Always show all features, but control visibility with animation
  const initialFeatureCount = 8;

  // Key terms mapping for highlighting and linking
  const keyTermsMap = {
    // Module-related terms (green highlighting)
    'Product Designer': { link: '/modules/product-designer', color: 'green' },
    'Logo Hub': { link: '/modules/logos', color: 'green' },
    'Customer Portal': { link: '/modules/customer-portal', color: 'green' },
    'Sales Orders': { link: '/modules/sales-orders', color: 'green' },
    'Inventory': { link: '/modules/inventory', color: 'green' },
    'Production': { link: '/modules/production', color: 'green' },
    'Suppliers': { link: '/modules/suppliers', color: 'green' },
    'Purchase Orders': { link: '/modules/purchase-orders', color: 'green' },
    'Warehouse': { link: '/modules/warehouse', color: 'green' },
    'Product Design': { link: '/modules/product-design', color: 'green' },
    
    // Industry-related terms (orange highlighting)
    'Embroidery': { link: '/industries/high-volume-embroidery', color: 'orange' },
    'Screen Printing': { link: '/industries/screen-printing', color: 'orange' },
    'Decoration Industry': { link: '/industries', color: 'orange' },
    'Corporate Apparel': { link: '/industries/corporate-apparel', color: 'orange' },
    'Promotional Products': { link: '/industries/promotional-products', color: 'orange' },
    'DTG': { link: '/industries/screen-printing', color: 'orange' },
    'Vinyl': { link: '/industries/screen-printing', color: 'orange' },
    
    // General page links (green highlighting)
    'Documentation': { link: '/documentation', color: 'green' },
    'Support': { link: '/support', color: 'green' },
    'Case Studies': { link: '/case-studies', color: 'green' }
  };

  // Function to enhance text with highlights and links
  const enhanceText = (text: string) => {
    if (typeof text !== 'string') return text;
    
    let enhancedText = text;
    const replacements: Array<{ original: string; replacement: JSX.Element; index: number }> = [];
    
    Object.entries(keyTermsMap).forEach(([term, config]) => {
      const regex = new RegExp(`\\b${term}\\b`, 'gi');
      const matches = [...text.matchAll(regex)];
      
      matches.forEach((match) => {
        if (match.index !== undefined) {
          const key = `${term}-${match.index}`;
          const replacement = (
            <Link
              key={key}
              to={config.link}
              className={`
                inline-block px-1 rounded transition-all duration-200 hover:scale-105
                ${config.color === 'green' 
                  ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30 border-b border-green-500/50' 
                  : 'bg-orange-500/20 text-orange-400 hover:bg-orange-500/30 border-b border-orange-500/50'
                }
                hover:shadow-lg hover:shadow-${config.color}-500/20
              `}
              aria-label={`Learn more about ${term}`}
            >
              {match[0]}
            </Link>
          );
          
          replacements.push({
            original: match[0],
            replacement,
            index: match.index
          });
        }
      });
    });
    
    if (replacements.length === 0) {
      return <span className="text-gray-300">{text}</span>;
    }
    
    // Sort by index to process from right to left
    replacements.sort((a, b) => b.index - a.index);
    
    // Build the enhanced JSX
    const parts: Array<string | JSX.Element> = [text];
    
    replacements.forEach(({ original, replacement, index }) => {
      const currentText = parts[0] as string;
      const before = currentText.slice(0, index);
      const after = currentText.slice(index + original.length);
      
      parts[0] = before;
      parts.splice(1, 0, replacement, after);
    });
    
    return (
      <span className="text-gray-300">
        {parts.map((part, index) => 
          typeof part === 'string' ? part : React.cloneElement(part as JSX.Element, { key: index })
        )}
      </span>
    );
  };
  
  const renderCell = (value: string | boolean, isTracker: boolean = false) => {
    if (typeof value === 'boolean') {
      return value ? 
        <motion.div 
          whileHover={{ scale: 1.2, rotate: 10 }} 
          className="flex justify-center"
        >
          <Check className={`h-5 w-5 ${isTracker ? 'text-gold-light' : 'text-green-500'}`} />
        </motion.div> : 
        <X className="h-5 w-5 text-gray-500 mx-auto" />;
    }
    return <span className="text-gray-300">{value}</span>;
  };

  // Animation variants
  const tableVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const rowVariants = {
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
    <div className="py-20 bg-gradient-to-b from-black to-zinc-900 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal threshold={0.1} delay={100}>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.span 
              className="text-gold-gradient inline-block"
              animate={{ backgroundPosition: ['0% center', '100% center', '0% center'] }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
              }}
              style={{ backgroundSize: '200% auto' }}
            >
              Why Tracker
            </motion.span>{" "}
            Outperforms Other Software
          </motion.h2>
        </ScrollReveal>
        
        <ScrollReveal threshold={0.1} delay={200} className="overflow-x-auto max-w-6xl mx-auto">
          <div className="min-w-[768px]">
            <motion.table 
              className="w-full border-collapse" 
              variants={tableVariants} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.1 }}
            >
              <thead>
                <motion.tr className="border-b border-zinc-800" variants={rowVariants}>
                  <th className="p-5 text-left text-gray-400 font-medium">Capability</th>
                  <th className="p-5 text-center bg-zinc-800/30 rounded-t-lg">
                    <div className="flex flex-col items-center">
                      <motion.span 
                        className="text-gold-light mb-1 relative"
                        whileInView={{
                          textShadow: [
                            '0 0 0px hsl(var(--gold-light) / 0)', 
                            '0 0 10px hsl(var(--gold-light) / 0.5)', 
                            '0 0 0px hsl(var(--gold-light) / 0)'
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "loop"
                        }}
                      >
                        Tracker
                      </motion.span>
                      <span className="text-sm text-gray-400">Decoration-focused</span>
                    </div>
                  </th>
                  <th className="p-5 text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-white mb-1">Other Software</span>
                      <span className="text-sm text-gray-400">Generic solutions</span>
                    </div>
                  </th>
                </motion.tr>
              </thead>
              <tbody>
                <AnimatePresence mode="wait">
                  {comparisonFeatures.map((item, index) => (
                    <motion.tr 
                      key={`feature-${index}`}
                      className={`border-b border-zinc-800 ${index % 2 === 0 ? 'bg-zinc-900/30' : ''}`}
                      initial={index >= initialFeatureCount ? { opacity: 0, height: 0 } : { opacity: 1, height: "auto" }}
                      animate={{ 
                        opacity: isExpanded || index < initialFeatureCount ? 1 : 0,
                        height: isExpanded || index < initialFeatureCount ? "auto" : 0,
                        backgroundColor: hoverRow === index 
                          ? 'rgba(30, 30, 30, 0.6)' 
                          : index % 2 === 0 
                            ? 'rgba(24, 24, 27, 0.3)' 
                            : 'transparent'
                      }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index >= initialFeatureCount ? (index - initialFeatureCount) * 0.05 : 0,
                        type: "spring",
                        stiffness: 300,
                        damping: 25
                      }}
                      onMouseEnter={() => setHoverRow(index)}
                      onMouseLeave={() => setHoverRow(null)}
                      style={{ 
                        overflow: 'hidden',
                        display: (isExpanded || index < initialFeatureCount) ? 'table-row' : 'none'
                      }}
                    >
                      <td className="p-5 text-left font-medium">{enhanceText(item.feature)}</td>
                      <td className="p-5 text-center bg-zinc-800/30">
                        {renderCell(item.tracker, true)}
                      </td>
                      <td className="p-5 text-center">
                        {renderCell(item.others)}
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </motion.table>
            
            {/* Expand/collapse button */}
            <motion.div 
              className="mt-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button 
                className="inline-flex items-center px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-sm font-medium gap-2 transition-colors"
                onClick={() => setIsExpanded(!isExpanded)}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {isExpanded ? (
                  <>
                    Show Less <ChevronUp className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    Show All Capabilities <ChevronDown className="h-4 w-4" />
                  </>
                )}
              </motion.button>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default FeatureComparison;