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
      feature: "Base Garments Module",
      starter: true,
      professional: true,
      enterprise: true
    },
    // Expanded detailed features
    {
      feature: "Customer Database Management",
      starter: "Basic contact info & order history",
      professional: "Advanced CRM with segmentation",
      enterprise: "360° customer view with analytics"
    },
    {
      feature: "Sales Order Management",
      starter: "Basic order creation & tracking",
      professional: "Advanced workflow automation",
      enterprise: "Multi-location order orchestration"
    },
    {
      feature: "Production Tracking",
      starter: "Basic job status updates",
      professional: "Real-time production monitoring",
      enterprise: "AI-powered production optimization"
    },
    {
      feature: "Product Designer Tool",
      starter: false,
      professional: "Built-in design editor with templates",
      enterprise: "Advanced 3D design with mockups"
    },
    {
      feature: "Artwork & Logo Management",
      starter: false,
      professional: "Centralized artwork library",
      enterprise: "Version control & brand compliance"
    },
    {
      feature: "Inventory Management",
      starter: false,
      professional: "Stock tracking & reorder alerts",
      enterprise: "Multi-warehouse with forecasting"
    },
    {
      feature: "Customer Portal Access",
      starter: false,
      professional: "Self-service order placement",
      enterprise: "White-label portal with branding"
    },
    {
      feature: "Analytics & Reporting",
      starter: "Basic sales reports",
      professional: "Advanced KPI dashboards",
      enterprise: "Custom reports & data export"
    },
    {
      feature: "Purchase Order Management",
      starter: false,
      professional: "Supplier management & PO tracking",
      enterprise: "Automated procurement workflows"
    },
    {
      feature: "Warehouse Management",
      starter: false,
      professional: "Basic warehouse operations",
      enterprise: "Advanced WMS with barcode scanning"
    },
    {
      feature: "Project Management Tools",
      starter: false,
      professional: "Task tracking & deadlines",
      enterprise: "Advanced project workflows"
    },
    {
      feature: "Finance & Accounting Integration",
      starter: false,
      professional: "Basic invoicing & payments",
      enterprise: "Full ERP integration"
    },
    {
      feature: "Document Management",
      starter: "Basic file storage",
      professional: "Organized document library",
      enterprise: "Advanced document workflows"
    },
    {
      feature: "Supplier Management",
      starter: false,
      professional: "Supplier database & communications",
      enterprise: "Supplier performance analytics"
    },
    {
      feature: "Quality Control Features",
      starter: false,
      professional: "Basic quality checkpoints",
      enterprise: "Advanced QC workflows & reporting"
    },
    {
      feature: "Multi-Location Support",
      starter: false,
      professional: false,
      enterprise: "Unlimited locations with consolidation"
    },
    {
      feature: "Advanced User Permissions",
      starter: "Basic role-based access",
      professional: "Department-based permissions",
      enterprise: "Granular permission controls"
    },
    {
      feature: "API Access & Integrations",
      starter: "1 basic integration",
      professional: "5 integrations + webhook support",
      enterprise: "Unlimited + custom API development"
    },
    {
      feature: "Data Import/Export Tools",
      starter: "CSV import/export",
      professional: "Advanced data mapping",
      enterprise: "Real-time data synchronization"
    },
    {
      feature: "Automated Workflows",
      starter: false,
      professional: "Basic automation rules",
      enterprise: "Advanced workflow designer"
    },
    {
      feature: "Mobile App Access",
      starter: "Basic mobile view",
      professional: "Native mobile app",
      enterprise: "Custom mobile solutions"
    },
    {
      feature: "Backup & Data Recovery",
      starter: "Weekly backups",
      professional: "Daily backups with 30-day retention",
      enterprise: "Real-time backup with unlimited retention"
    },
    {
      feature: "Security Features",
      starter: "Basic SSL encryption",
      professional: "Advanced security protocols",
      enterprise: "Enterprise-grade security & compliance"
    },
    {
      feature: "Customer Support",
      starter: "Email & community forum",
      professional: "Priority chat, phone & email",
      enterprise: "24/7 dedicated account manager"
    },
    {
      feature: "Training & Onboarding",
      starter: "Self-service video tutorials",
      professional: "Live guided training sessions",
      enterprise: "On-site training & custom programs"
    },
    {
      feature: "Implementation Support",
      starter: "Self-guided setup",
      professional: "Assisted implementation",
      enterprise: "Full white-glove implementation"
    },
    {
      feature: "Custom Branding Options",
      starter: false,
      professional: false,
      enterprise: "Full white-label customization"
    },
    {
      feature: "Advanced Analytics",
      starter: false,
      professional: "Standard business intelligence",
      enterprise: "AI-powered predictive analytics"
    },
    {
      feature: "Compliance & Audit Tools",
      starter: false,
      professional: "Basic compliance reporting",
      enterprise: "Full audit trails & compliance suite"
    },
    {
      feature: "Service Level Agreement",
      starter: false,
      professional: "99.5% uptime guarantee",
      enterprise: "99.9% uptime with penalties"
    },
    {
      feature: "Dedicated Infrastructure",
      starter: false,
      professional: false,
      enterprise: "Private cloud deployment options"
    },
    {
      feature: "Custom Module Development",
      starter: false,
      professional: false,
      enterprise: "Bespoke feature development"
    },
    {
      feature: "Enterprise SSO Integration",
      starter: false,
      professional: false,
      enterprise: "SAML, LDAP, Active Directory"
    },
    {
      feature: "Advanced Reporting Suite",
      starter: false,
      professional: "Standard business reports",
      enterprise: "Custom report builder & scheduling"
    },
    {
      feature: "Data Migration Services",
      starter: "Basic CSV import assistance",
      professional: "Guided data migration support",
      enterprise: "Full data migration & validation"
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
                  <th className="p-5 text-center bg-zinc-800/30 rounded-t-lg">
                    <div className="flex flex-col items-center">
                      <motion.span className="text-gold-light mb-1 relative" whileInView={{
                      textShadow: ['0 0 0px hsl(var(--gold-light) / 0)', '0 0 10px hsl(var(--gold-light) / 0.5)', '0 0 0px hsl(var(--gold-light) / 0)']
                    }} transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop"
                    }}>
                        Decorator
                      </motion.span>
                      
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
                    <td className="p-5 text-center bg-zinc-800/30">
                      {renderCell(item.professional, true)}
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