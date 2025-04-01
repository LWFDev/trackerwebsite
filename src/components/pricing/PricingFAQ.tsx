
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
  }];

  return (
    <div className="py-16 bg-black">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">Questions</span>
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => <AccordionItem key={index} value={`faq-${index}`} className="border border-zinc-800 rounded-lg overflow-hidden bg-zinc-900">
            <AccordionTrigger className="px-6 py-4 hover:bg-zinc-800 transition-colors">
              <span className="text-left">{faq.question}</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-gray-400">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>)}
        </Accordion>
      </div>
    </div>
  );
};

export default PricingFAQ;
