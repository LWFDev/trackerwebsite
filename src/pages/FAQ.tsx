
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Sparkles, HelpCircle, DollarSign, Settings, Globe } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  icon: React.ReactNode;
  faqs: FAQItem[];
}

const FAQ = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const faqSections: FAQSection[] = [
    {
      title: "General Questions",
      icon: <HelpCircle size={20} className="text-[#D4AF37]" />,
      faqs: [
        {
          question: "How do I know if Tracker is right for us?",
          answer: "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."
        },
        {
          question: "Can I have a demo to see Tracker in action?",
          answer: "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."
        },
        {
          question: "Is Tracker only for garment decoration businesses?",
          answer: "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."
        },
        {
          question: "What size / type of businesses use Tracker?",
          answer: "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."
        }
      ]
    },
    {
      title: "Pricing & Costs",
      icon: <DollarSign size={20} className="text-[#D4AF37]" />,
      faqs: [
        {
          question: "How much is Tracker?",
          answer: "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."
        },
        {
          question: "Do I have to pay for scoping?",
          answer: "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."
        },
        {
          question: "Are there hidden costs once I have Tracker?",
          answer: "All costs will be clear on your project agreement and licensing agreement. Nobody likes those sorts of surprises!"
        }
      ]
    },
    {
      title: "Implementation & Setup",
      icon: <Settings size={20} className="text-[#D4AF37]" />,
      faqs: [
        {
          question: "How long does it take to implement Tracker?",
          answer: "Depending on the complexity of the setup, it can be anything from 6 weeks to 12-18 months. Very big projects with multiple integrations (e.g. ERPs) will take longer than a smaller business with just website/accounts integration."
        },
        {
          question: "Do I need anything special to be able to use Tracker?",
          answer: "Once setup, you can use Tracker anywhere you have an internet connection, via a modern web browser."
        },
        {
          question: "How is training / onboarding managed?",
          answer: "This will be agreed as part of the implementation process, and can be online / face to face, or a 'train the trainer' approach. Most onboarding is a mixture of online and in-person, depending on your location and the nature of the project."
        },
        {
          question: "Can I see / talk to someone already using Tracker?",
          answer: "As part of the discovery/onboarding process, we can arrange this for you."
        }
      ]
    },
    {
      title: "Support & Access",
      icon: <Globe size={20} className="text-[#D4AF37]" />,
      faqs: [
        {
          question: "Is Tracker available globally or just in the UK?",
          answer: "We have customers in UK/Europe and USA, but the system can be accessed from any internet connection. Currently we only offer the interface in English, however."
        }
      ]
    },
    {
      title: "Account Management",
      icon: <Sparkles size={20} className="text-[#D4AF37]" />,
      faqs: [
        {
          question: "Can I switch plans later?",
          answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, your new features will be available immediately. If downgrading, the changes will apply at the start of your next billing cycle."
        },
        {
          question: "What happens after my free trial?",
          answer: "After your free trial ends, your account will automatically convert to the plan you selected during signup. You'll only be charged once the trial is over, and we'll send you a reminder before this happens."
        },
        {
          question: "Do you offer discounts for annual billing?",
          answer: "Yes, you save up to 20% by choosing annual billing over monthly billing, which is automatically calculated and applied to the displayed prices."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and bank transfers for annual enterprise plans."
        },
        {
          question: "Can I get a refund if I'm not satisfied?",
          answer: "We offer a 30-day money-back guarantee for all new subscriptions. If you're not satisfied, contact our support team within 30 days of your purchase for a full refund."
        },
        {
          question: "Do I need technical knowledge to use your platform?",
          answer: "No, our platform is designed to be user-friendly for both technical and non-technical users. We provide comprehensive documentation and support to help you get started."
        },
        {
          question: "Can I customize the platform to match my brand?",
          answer: "Yes, our Professional and Enterprise plans include white-labeling options that allow you to customize the platform with your company's branding, colors, and logo."
        }
      ]
    }
  ];

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
    <div className="min-h-screen bg-black relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#D4AF37]/5 blur-[120px] top-1/4 right-0"></div>
        <div className="absolute w-[800px] h-[800px] rounded-full bg-[#D4AF37]/3 blur-[150px] bottom-0 left-0"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-[#D4AF37]/20 rounded-full w-2 h-2"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                opacity: Math.random() * 0.5 + 0.3
              }}
              animate={{
                y: [null, "-20vh"],
                opacity: [null, 0]
              }}
              transition={{
                duration: Math.random() * 15 + 20,
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

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Hero Section */}
        <ScrollReveal threshold={0.1} delay={100}>
          <motion.div 
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-zinc-800/80 backdrop-blur-sm rounded-full border border-zinc-700 mb-6">
              <HelpCircle size={16} className="text-[#D4AF37]" />
              <span className="text-sm text-[#D4AF37] uppercase font-medium tracking-wider">Support Center</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">Questions</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Find answers to common questions about Tracker, our pricing, implementation, and support.
            </p>
          </motion.div>
        </ScrollReveal>

        {/* FAQ Sections */}
        <div className="max-w-4xl mx-auto space-y-12">
          {faqSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 mb-6">
                {section.icon}
                <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                {section.faqs.map((faq, index) => {
                  const itemId = `${section.title}-${index}`;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      onMouseEnter={() => setHoveredItem(itemId)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <AccordionItem 
                        value={`faq-${sectionIndex}-${index}`} 
                        className={`border border-zinc-800 rounded-lg overflow-hidden bg-zinc-900/80 backdrop-blur-sm transition-all duration-300 ${hoveredItem === itemId ? 'border-[#D4AF37]/50 shadow-lg shadow-[#D4AF37]/10' : ''}`}
                      >
                        <AccordionTrigger className="px-6 py-4 hover:bg-zinc-800 transition-colors text-left">
                          <span className="text-left font-medium">{faq.question}</span>
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
                  );
                })}
              </Accordion>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <ScrollReveal threshold={0.1} delay={300} className="mt-20">
          <div className="text-center bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Still have questions?</h3>
            <p className="text-gray-400 mb-6">
              Can't find the answer you're looking for? Our team is here to help you get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-[#D4AF37] to-[#F2D675] hover:from-[#F2D675] hover:to-[#D4AF37] text-black px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1"
              >
                Contact Support
              </a>
              <a 
                href="/get-started" 
                className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default FAQ;
