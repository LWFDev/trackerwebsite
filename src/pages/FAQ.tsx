
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Sparkles, HelpCircle, DollarSign, Settings, Globe } from "lucide-react";
import { scrollToTop } from "@/utils/navigation";
import PageSEO from "@/components/seo/PageSEO";
import { faqSEO, faqBreadcrumb, faqPageSchema } from "@/data/seoData";
import { useLocalization } from "@/contexts/LocalizationContext";

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
  const { t } = useLocalization();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const faqSections: FAQSection[] = [
    {
      title: t("General Questions"),
      icon: <HelpCircle size={20} className="text-gold" />,
      faqs: [
        {
          question: "How do I know if Tracker is right for us?",
          answer: (
            <>
              Tracker is designed for <a href="/about" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>garment decoration businesses</a> of all sizes — from small embroidery shops to large multi-location enterprises. If you manage orders, logos, production, or inventory for embroidery, DTG, DTF, screen printing, heat seal, or licensed team gear, Tracker can streamline your operations. We offer <a href="/contact" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>personalised demos</a> to evaluate fit.
            </>
          )
        },
        {
          question: "What decoration methods does Tracker support?",
          answer: (
            <>
              Tracker supports all major garment decoration methods: embroidery (multi-head, single-head, and flat), direct-to-garment (DTG) printing, DTF transfers, screen printing, heat-seal/heat-transfer vinyl, sublimation, and hybrid workflows. The platform manages <a href="/logo-management" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>logo files</a> in the appropriate format for each method — EMB/DST for embroidery, print-ready files for DTG/DTF, and separation files for screen printing.
            </>
          )
        },
        {
          question: "Can I have a demo to see Tracker in action?",
          answer: (
            <>
              Absolutely! We provide personalised demos tailored to your business needs. During the demo, we'll show you how Tracker's <a href="/modules" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>modules</a> work together — from <a href="/logo-management" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>cloud logo management</a> and <a href="/proof-approvals" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>digital proof approvals</a> to <a href="/production-scheduling" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>production scheduling</a> with barcode-to-machine integration. <a href="/contact" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>Contact our sales team</a> to schedule.
            </>
          )
        }
      ]
    },
    {
      title: "Logo & Artwork Management",
      icon: <Sparkles size={20} className="text-gold" />,
      faqs: [
        {
          question: "How does Tracker handle embroidery logo files (EMB, DST)?",
          answer: (
            <>
              Tracker provides <a href="/logo-management" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>cloud-based logo management</a> with full support for embroidery formats (EMB, DST, PES, EXP, JEF, XXX) and print-separation files. Every logo is tagged to its customer, versioned with an audit trail, and delivered to embroidery machines (Barudan bNET, Tajima Pulse) or DTG printers via barcode scanning — eliminating wrong-version reprints.
            </>
          )
        },
        {
          question: "How do digital proof approvals work?",
          answer: (
            <>
              Tracker's <a href="/proof-approvals" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>digital proof approval system</a> generates professional proofs from your cloud logo library with garment mockups, thread charts, and placement views. Proofs are sent via email or customer portal. Customers review on any device, leave threaded comments, and approve digitally. On approval, the job auto-releases to <a href="/production-scheduling" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>production scheduling</a> with the approved file version locked.
            </>
          )
        }
      ]
    },
    {
      title: "Production & Machines",
      icon: <Settings size={20} className="text-gold" />,
      faqs: [
        {
          question: "What embroidery and printing machines does Tracker integrate with?",
          answer: (
            <>
              Tracker integrates with Barudan embroidery machines (via bNET), Tajima machines (via Pulse/DG16), Brother and Epson DTG printers, DTF transfer systems, Kornit digital printers, M&R and ROQ screen-printing presses, and heat-seal equipment. Barcode scanning triggers automatic file delivery and time tracking. See the full list on our <a href="/integrations" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>integrations page</a>.
            </>
          )
        },
        {
          question: "How does thread colour optimisation improve production?",
          answer: (
            <>
              Tracker's <a href="/production-scheduling" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>production scheduler</a> analyses queued jobs and groups them by thread palette, reducing changeovers by up to 40%. The algorithm considers needle positions, colour proximity, due dates, and hoop compatibility. Combined with order stacking (multiple small orders on one hoop run), shops report 20–25% more stitches per machine-hour.
            </>
          )
        },
        {
          question: "Does Tracker track operator time and machine efficiency?",
          answer: (
            <>
              Yes. Operators clock on/off each job via barcode scan. Tracker captures actual run times, compares to estimates, and feeds data into quoting for more accurate pricing. Real-time dashboards show head utilisation, downtime reasons, stitch counts per hour, and job completion rates across all machines and shifts.
            </>
          )
        }
      ]
    },
    {
      title: "Integrations & Supply Chain",
      icon: <Globe size={20} className="text-emerald-400" />,
      faqs: [
        {
          question: "What PLM and distributor integrations does Tracker support?",
          answer: (
            <>
              Tracker integrates with blank-garment distributors including SanMar, alphabroder, and S&S Activewear for real-time inventory, pricing, and product catalogues. For PLM, Tracker connects to ERP systems (SAP, NetSuite, Sage, QuickBooks), e-commerce platforms (Shopify, WooCommerce), and shipping providers (ShipStation, UPS, FedEx). See the full ecosystem on our <a href="/integrations" className="text-emerald-400 hover:text-emerald-300 underline font-medium" onClick={scrollToTop}>integrations page</a>.
            </>
          )
        },
        {
          question: "Can Tracker connect to my Shopify or WooCommerce store?",
          answer: (
            <>
              Yes. Tracker's e-commerce integrations provide two-way sync of orders, inventory, and products with <a href="/integrations/shopify" className="text-emerald-400 hover:text-emerald-300 underline font-medium" onClick={scrollToTop}>Shopify</a> and <a href="/integrations/woocommerce" className="text-emerald-400 hover:text-emerald-300 underline font-medium" onClick={scrollToTop}>WooCommerce</a>. Orders flow into Tracker's production pipeline automatically. Fulfilment status and tracking numbers push back to the store so customers see live updates.
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
              Tracker offers flexible <a href="/pricing" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>pricing plans</a> based on the modules you need and user count. We offer Starter, Professional, and Enterprise tiers. Pricing includes hosting, support, and regular updates. <a href="/contact" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>Contact us</a> for a custom quote.
            </>
          )
        },
        {
          question: "Are there hidden costs once I have Tracker?",
          answer: (
            <>
              No. All costs are documented in your project and licensing agreements. <a href="/pricing" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>Pricing</a> includes hosting, <a href="/support" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>support</a>, and updates. Any additional modules, integrations, or customisations are discussed and agreed upon before implementation.
            </>
          )
        }
      ]
    },
    {
      title: "Implementation & Support",
      icon: <Settings size={20} className="text-gold" />,
      faqs: [
        {
          question: "How long does it take to implement Tracker?",
          answer: (
            <>
              Depending on complexity, implementation ranges from 6 weeks to 12–18 months. A small embroidery shop with basic <a href="/integrations" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>integrations</a> goes live quickly, while large multi-location enterprises with ERP connectors need more time. We provide a detailed timeline during scoping. <a href="/get-started" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>Get started</a> today.
            </>
          )
        },
        {
          question: "Is Tracker available globally?",
          answer: (
            <>
              Yes. We have customers in the UK, Europe, and USA, and the platform is accessible from any internet connection worldwide. The interface is currently available in English. Our cloud infrastructure ensures reliable performance globally.
            </>
          )
        },
        {
          question: "Do I need technical knowledge to use Tracker?",
          answer: (
            <>
              No. Tracker is designed for garment decoration professionals, not IT experts. Day-to-day operations are intuitive. We provide comprehensive <a href="/documentation" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>documentation</a>, <a href="/videos" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>video guides</a>, and ongoing <a href="/support" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>support</a> to ensure your team is proficient quickly.
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
      <PageSEO seo={faqSEO} breadcrumbs={faqBreadcrumb} extraSchema={faqPageSchema} />
      {/* Dark theme header gradient */}
      <div className="bg-gradient-to-r from-zinc-900 via-black to-emerald-950 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-96 h-96 rounded-full bg-gold-opacity-10 -top-48 -right-48"></div>
          <div className="absolute w-64 h-64 rounded-full bg-emerald-500/10 top-32 right-1/4"></div>
          <div className="absolute w-32 h-32 rounded-full bg-gold-opacity-15 bottom-16 right-16"></div>
        </div>

        <div className="container mx-auto px-6 pt-32 md:pt-36 pb-20 relative z-10">
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
              {t("Frequently Asked Questions")}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              {t("Find answers to common questions about Tracker, our pricing, implementation, and support.")}
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
