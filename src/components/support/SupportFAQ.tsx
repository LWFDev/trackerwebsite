
import React from 'react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const SupportFAQ = () => {
  const faqs = [
    {
      question: "How do I reset my password?",
      answer: "You can reset your password by clicking the 'Forgot Password' link on the login page. You'll receive an email with instructions to create a new password."
    },
    {
      question: "What browsers are supported?",
      answer: "Tracker works best with modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version of your preferred browser for optimal performance."
    },
    {
      question: "How do I contact technical support?",
      answer: "You can contact our technical support team through the ticket form below, via email at support@tracker.com, or through our live chat feature available 24/7."
    },
    {
      question: "What are your support hours?",
      answer: "Our support team is available 24/7 to assist you. Priority support is available for Enterprise customers with guaranteed response times."
    },
    {
      question: "Is Tracker available globally or just in the UK?",
      answer: "Tracker is available globally and supports multiple currencies and languages. Our cloud-based platform ensures reliable access from anywhere in the world."
    },
    {
      question: "Do I need anything special to be able to use Tracker?",
      answer: "No special software or hardware is required. Tracker is a cloud-based solution that works through your web browser with a standard internet connection."
    },
    {
      question: "How is training / onboarding managed?",
      answer: "We provide comprehensive onboarding including personalized training sessions, video tutorials, documentation, and ongoing support to ensure your team gets up to speed quickly."
    },
    {
      question: "Can I see / talk to someone already using Tracker?",
      answer: "Yes! We can arrange customer references and case study calls with existing Tracker users in similar businesses to yours."
    },
    {
      question: "How long does it take to get support?",
      answer: "Our average response time is under 2 hours for standard issues. Critical issues are prioritized with faster response times, especially for Enterprise customers."
    }
  ];

  return (
    <section className="py-20 bg-zinc-900/50">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up" distance="30px" duration={600}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Find quick answers to common questions about Tracker
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" distance="30px" duration={600} delay={200}>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-zinc-800/30 border border-zinc-700/50 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-white hover:text-[#D4AF37] transition-colors py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SupportFAQ;
