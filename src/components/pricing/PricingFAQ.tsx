
import React, { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const PricingFAQ = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  
  const faqs: FAQItem[] = [{
    question: "Can I switch plans later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, your new features will be available immediately. If downgrading, the changes will apply at the start of your next billing cycle."
  }, {
    question: "What happens after my free trial?",
    answer: "After your free trial ends, your account will automatically convert to the plan you selected during signup. You'll only be charged once the trial is over, and we'll send you a reminder before this happens."
  }, {
    question: "Do you offer discounts for annual billing?",
    answer: "Yes, you save up to 20% by choosing annual billing over monthly billing, which is automatically calculated and applied to the displayed prices."
  }, {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and bank transfers for annual enterprise plans."
  }, {
    question: "Can I get a refund if I'm not satisfied?",
    answer: "We offer a 30-day money-back guarantee for all new subscriptions. If you're not satisfied, contact our support team within 30 days of your purchase for a full refund."
  }, {
    question: "Do I need technical knowledge to use your platform?",
    answer: "No, our platform is designed to be user-friendly for both technical and non-technical users. We provide comprehensive documentation and support to help you get started."
  }, {
    question: "Can I customize the platform to match my brand?",
    answer: "Yes, our Professional and Enterprise plans include white-labeling options that allow you to customize the platform with your company's branding, colors, and logo."
  }];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
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
    <div className="py-20 bg-black relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#D4AF37]/5 blur-[120px] bottom-0 right-0"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-[#D4AF37]/30 rounded-full w-2 h-2"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: Math.random() * 0.5 + 0.3
              }}
              animate={{
                y: [null, "-20vh"],
                opacity: [null, 0]
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                scale: Math.random() * 0.5 + 0.5
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <ScrollReveal threshold={0.1} delay={100}>
          <motion.div 
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-zinc-800/80 backdrop-blur-sm rounded-full border border-zinc-700 mb-6">
              <Sparkles size={16} className="text-[#D4AF37]" />
              <span className="text-sm text-[#D4AF37] uppercase font-medium tracking-wider">Common Questions</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">Questions</span>
            </h2>
          </motion.div>
        </ScrollReveal>
        
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <AccordionItem 
                  value={`faq-${index}`} 
                  className={`border border-zinc-800 rounded-lg overflow-hidden bg-zinc-900/80 backdrop-blur-sm transition-all duration-300 ${hoveredItem === index ? 'border-[#D4AF37]/50 shadow-lg shadow-[#D4AF37]/10' : ''}`}
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-zinc-800 transition-colors text-left">
                    <span className="text-left">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-300">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingFAQ;
