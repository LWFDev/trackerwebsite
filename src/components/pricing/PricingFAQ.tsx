
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface FAQItem {
  question: string;
  answer: string;
}

const PricingFAQ = () => {
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

  return (
    <div className="py-20 bg-black relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#D4AF37]/5 blur-[120px] bottom-0 right-0"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <ScrollReveal threshold={0.1} delay={100}>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">Questions</span>
          </h2>
        </ScrollReveal>
        
        <ScrollReveal threshold={0.1} delay={200} className="space-y-4">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`} 
                className="border border-zinc-800 rounded-lg overflow-hidden bg-zinc-900/80 backdrop-blur-sm"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-zinc-800 transition-colors text-left">
                  <span className="text-left">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default PricingFAQ;
