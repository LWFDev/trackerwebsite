
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Sparkles, HelpCircle, DollarSign, Settings, Globe } from "lucide-react";
import { scrollToTop } from "@/utils/navigation";
import PageSEO from "@/components/seo/PageSEO";
import { faqSEO, faqBreadcrumb } from "@/data/seoData";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
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
      icon: <HelpCircle size={20} className="text-gold" />,
      faqs: [
        {
          question: "How do I know if Tracker is right for us?",
          answer: (
            <>
              Tracker is designed for <a href="/about" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>garment decoration businesses</a> of all sizes, from small startups to large enterprises. If you're managing orders, inventory, production, or customer relationships in the custom apparel industry, Tracker can streamline your operations. We offer <a href="/contact" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>demos and consultations</a> to help you evaluate if our platform fits your specific needs.
            </>
          )
        },
        {
          question: "Can I have a demo to see Tracker in action?",
          answer: (
            <>
              Absolutely! We provide personalized demos tailored to your business needs. During the demo, we'll show you how Tracker's <a href="/modules" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>modules</a> work together to manage your entire workflow, from order intake to production and delivery. <a href="/contact" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>Contact our sales team</a> to schedule a demo at your convenience.
            </>
          )
        },
        {
          question: "Is Tracker only for garment decoration businesses?",
          answer: (
            <>
              Yes, Tracker is specifically designed for the garment decoration industry, including screen printing, embroidery, promotional products, and custom apparel businesses. Our specialized <a href="/modules" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>modules and workflows</a> are built to handle the unique challenges of this industry, from <a href="/modules/logos" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>artwork management</a> to <a href="/modules/production" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>production scheduling</a>.
            </>
          )
        },
        {
          question: "What size / type of businesses use Tracker?",
          answer: (
            <>
              Tracker serves businesses ranging from small family-owned shops to large commercial operations. Our customers include screen printers, embroiderers, promotional product companies, corporate apparel suppliers, and multi-location enterprises. Our scalable platform grows with your business needs. Learn more <a href="/about" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>about our story</a> and the businesses we serve.
            </>
          )
        }
      ]
    },
    {
      title: "Pricing & Costs",
      icon: <DollarSign size={20} className="text-gold" />,
      faqs: [
        {
          question: "How much is Tracker?",
          answer: (
            <>
              Tracker offers flexible <a href="/pricing" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>pricing plans</a> to suit different business sizes and needs. Our pricing is based on the <a href="/modules" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>modules</a> you need and the number of users. We offer Starter, Professional, and Enterprise tiers, with the option to customize your package. <a href="/contact" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>Contact us</a> for detailed pricing information and to discuss which plan works best for your business.
            </>
          )
        },
        {
          question: "Do I have to pay for scoping?",
          answer: (
            <>
              Initial <a href="/contact" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>consultations</a> and basic scoping are provided at no cost to help us understand your requirements. For complex implementations requiring extensive customization or integration work, detailed scoping may be part of the implementation project cost. We'll always be transparent about any costs involved upfront.
            </>
          )
        },
        {
          question: "Are there hidden costs once I have Tracker?",
          answer: (
            <>
              All costs will be clear on your project agreement and licensing agreement. Nobody likes those sorts of surprises! Our <a href="/pricing" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>pricing</a> includes hosting, <a href="/support" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>support</a>, and regular updates. Any additional costs for extra <a href="/modules" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>modules</a>, integrations, or customizations will be discussed and agreed upon before implementation.
            </>
          )
        }
      ]
    },
    {
      title: "Implementation & Setup",
      icon: <Settings size={20} className="text-gold" />,
      faqs: [
        {
          question: "How long does it take to implement Tracker?",
          answer: (
            <>
              Depending on the complexity of the setup, it can be anything from 6 weeks to 12-18 months. Very big projects with multiple <a href="/modules/integration-platform" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>integrations</a> (e.g. ERPs) will take longer than a smaller business with just website/accounts integration. We'll provide a detailed timeline during the scoping phase based on your specific requirements. <a href="/get-started" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>Get started</a> with our implementation process today.
            </>
          )
        },
        {
          question: "Do I need anything special to be able to use Tracker?",
          answer: (
            <>
              Once setup, you can use Tracker anywhere you have an internet connection, via a modern web browser. No special software installation is required on your computers. We recommend using updated versions of Chrome, Firefox, Safari, or Edge for the best experience. Learn more about our system requirements in our <a href="/documentation" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>documentation</a>.
            </>
          )
        },
        {
          question: "How is training / onboarding managed?",
          answer: (
            <>
              This will be agreed as part of the implementation process, and can be online / face to face, or a 'train the trainer' approach. Most onboarding is a mixture of online and in-person, depending on your location and the nature of the project. We provide comprehensive <a href="/documentation" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>documentation</a>, video tutorials, and ongoing <a href="/support" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>support</a> to ensure your team is successful.
            </>
          )
        },
        {
          question: "Can I see / talk to someone already using Tracker?",
          answer: (
            <>
              As part of the discovery/onboarding process, we can arrange this for you. We have many satisfied customers who are happy to share their experiences and discuss how Tracker has improved their operations. Customer references and case studies can be provided upon request. <a href="/contact" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>Contact us</a> to arrange a customer reference call.
            </>
          )
        }
      ]
    },
    {
      title: "Support & Access",
      icon: <Globe size={20} className="text-emerald-400" />,
      faqs: [
        {
          question: "Is Tracker available globally or just in the UK?",
          answer: (
            <>
              We have customers in UK/Europe and USA, but the system can be accessed from any internet connection. Currently we only offer the interface in English, however. Our cloud-based platform ensures reliable access worldwide with data centers strategically located for optimal performance. Learn more <a href="/about" className="text-emerald-400 hover:text-emerald-300 underline font-medium" onClick={scrollToTop}>about our global reach</a>.
            </>
          )
        }
      ]
    },
    {
      title: "Account Management",
      icon: <Sparkles size={20} className="text-gold" />,
      faqs: [
        {
          question: "Can I switch plans later?",
          answer: (
            <>
              Yes, you can upgrade or downgrade your <a href="/pricing" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>plan</a> at any time. When upgrading, your new features will be available immediately. If downgrading, the changes will apply at the start of your next billing cycle. Our team will help ensure a smooth transition and assist with any <a href="/modules" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>module</a> adjustments needed.
            </>
          )
        },
        {
          question: "What happens after my free trial?",
          answer: (
            <>
              After your trial period, you'll have the opportunity to choose the <a href="/pricing" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>plan</a> that best fits your needs. We'll work with you to ensure you're selecting the right <a href="/modules" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>modules</a> and user count for your business. There's no automatic billing - we'll discuss your options and help you make an informed decision.
            </>
          )
        },
        {
          question: "Do you offer discounts for annual billing?",
          answer: (
            <>
              Yes, we offer significant savings for customers who choose annual billing over monthly payments. The exact discount varies by <a href="/pricing" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>plan level</a>, and we'll calculate the savings for your specific configuration. Annual billing also simplifies your budgeting and reduces administrative overhead.
            </>
          )
        },
        {
          question: "What payment methods do you accept?",
          answer: (
            <>
              We accept various payment methods including bank transfers, checks, and major credit cards for smaller accounts. For enterprise customers, we can work with your preferred payment terms and methods. Our billing team will coordinate with your accounts payable process to ensure smooth payments. <a href="/contact" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>Contact us</a> for specific payment arrangements.
            </>
          )
        },
        {
          question: "Can I get a refund if I'm not satisfied?",
          answer: (
            <>
              We stand behind our product and want you to be completely satisfied. While refund policies are determined on a case-by-case basis, we work hard to address any concerns and ensure you're getting value from Tracker. Our extensive trial and <a href="/contact" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>demo process</a> helps ensure a good fit before you commit.
            </>
          )
        },
        {
          question: "Do I need technical knowledge to use your platform?",
          answer: (
            <>
              No, Tracker is designed to be user-friendly for garment decoration professionals, not IT experts. While some admin functions may require basic technical understanding, day-to-day operations are intuitive. We provide comprehensive <a href="/documentation" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>training and documentation</a> and <a href="/support" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>support</a> to help your team become proficient quickly.
            </>
          )
        },
        {
          question: "Can I customize the platform to match my brand?",
          answer: (
            <>
              Yes, Tracker can be customized to reflect your brand identity. This includes adding your logo, adjusting color schemes, and customizing certain interface elements. More extensive customizations are available depending on your <a href="/pricing" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>plan level</a> and specific requirements. We'll discuss branding options during implementation.
            </>
          )
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
    <div className="min-h-screen bg-black">
      <PageSEO seo={faqSEO} breadcrumbs={faqBreadcrumb} />
      {/* Dark theme header gradient */}
      <div className="bg-gradient-to-r from-zinc-900 via-black to-emerald-950 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-96 h-96 rounded-full bg-gold-opacity-10 -top-48 -right-48"></div>
          <div className="absolute w-64 h-64 rounded-full bg-emerald-500/10 top-32 right-1/4"></div>
          <div className="absolute w-32 h-32 rounded-full bg-gold-opacity-15 bottom-16 right-16"></div>
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-opacity-20 backdrop-blur-sm rounded-full border border-gold-opacity-40 mb-8">
              <HelpCircle size={16} className="text-gold" />
              <span className="text-sm text-gold font-medium tracking-wide">SUPPORT CENTER</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6 leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              Find answers to common questions about Tracker, our pricing, implementation, and support.
            </p>
          </motion.div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container mx-auto px-6 py-16 bg-black">
        <div className="max-w-4xl mx-auto">
          {faqSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="mb-16"
            >
              {/* Section Header */}
              <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-zinc-800">
                <div className={`w-10 h-10 ${section.title === "Pricing & Costs" || section.title === "Account Management" ? "bg-gold-opacity-20 border-gold-opacity-40" : "bg-emerald-500/20 border-emerald-500/40"} rounded-lg flex items-center justify-center`}>
                  {React.cloneElement(section.icon as React.ReactElement, { 
                    size: 20, 
                    className: section.title === "Pricing & Costs" || section.title === "Account Management" ? "text-gold" : "text-emerald-400"
                  })}
                </div>
                <h2 className="text-2xl font-medium text-white">{section.title}</h2>
              </div>
              
              {/* FAQ Items */}
              <div className="space-y-4">
                {section.faqs.map((faq, index) => {
                  const itemId = `${section.title}-${index}`;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      onMouseEnter={() => setHoveredItem(itemId)}
                      onMouseLeave={() => setHoveredItem(null)}
                      className={`bg-zinc-900/50 border border-zinc-800 rounded-lg shadow-sm transition-all duration-200 ${
                        hoveredItem === itemId ? 'shadow-lg border-gold-opacity-40 bg-zinc-900/70' : ''
                      }`}
                    >
                      <Accordion type="single" collapsible>
                        <AccordionItem 
                          value={`faq-${sectionIndex}-${index}`} 
                          className="border-none"
                        >
                          <AccordionTrigger className="px-6 py-5 hover:no-underline text-left font-medium text-white hover:text-gold data-[state=open]:text-gold transition-colors">
                            <span className="text-left">{faq.question}</span>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-5 text-gray-300 leading-relaxed">
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {faq.answer}
                            </motion.div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA - Salesforce style */}
        <div className="max-w-4xl mx-auto mt-20">
          <div className="bg-gradient-to-r from-zinc-900/80 to-zinc-800/80 backdrop-blur-sm rounded-2xl p-12 text-center border border-gold-opacity-30">
            <div className="w-16 h-16 bg-gold-opacity-20 border border-gold-opacity-40 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-gold" />
            </div>
            <h3 className="text-3xl font-light text-white mb-4">Still have questions?</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Can't find the answer you're looking for? Our team is here to help you get started with Tracker.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gold hover:bg-gold-light text-gold-foreground px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Contact Support
              </a>
              <a 
                href="/get-started" 
                className="bg-zinc-800 hover:bg-zinc-700 text-gold px-8 py-3 rounded-lg font-medium border-2 border-gold-opacity-40 transition-all duration-200 hover:shadow-md hover:border-gold"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
