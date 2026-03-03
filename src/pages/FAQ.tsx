
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
              Tracker is designed for <a href="/about" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>garment decoration businesses</a> of all sizes — from a single-head embroidery shop to a multi-location enterprise running embroidery, DTG, DTF, screen printing, heat seal, and licensed team gear simultaneously. If you manage customer logos, send proofs for approval, schedule production across machines, track operator time, or source blank garments from distributors like SanMar and alphabroder, Tracker replaces the spreadsheets, shared drives, and disconnected tools you currently juggle. We offer <a href="/contact" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>personalised demos</a> tailored to your specific decoration methods, volume, and integration needs so you can evaluate fit before committing. Most customers see ROI within the first 90 days through reduced reprints, faster proof cycles, and better machine utilisation.
            </>
          )
        },
        {
          question: "What decoration methods does Tracker support?",
          answer: (
            <>
              Tracker supports every major garment decoration method used in commercial production: multi-head and single-head embroidery, direct-to-garment (DTG) printing, DTF (direct-to-film) transfers, screen printing (manual and automatic presses), heat-seal and heat-transfer vinyl (HTV), sublimation, and hybrid workflows that combine multiple methods on a single order. The platform manages <a href="/logo-management" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>logo files</a> in the appropriate format for each method — EMB and DST for embroidery, high-resolution print files for DTG and DTF, and colour-separated films for screen printing. <a href="/production-scheduling" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>Production scheduling</a> is method-aware, so thread-colour optimisation applies to embroidery jobs while ink-channel management applies to DTG queues.
            </>
          )
        },
        {
          question: "Can I have a demo to see Tracker in action?",
          answer: (
            <>
              Absolutely! We provide personalised demos tailored to your specific business needs, decoration methods, and operational challenges. During a typical 45-minute demo, we walk through the <a href="/modules" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>modules</a> most relevant to you — whether that's <a href="/logo-management" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>cloud logo management</a> with EMB/DST file handling, <a href="/proof-approvals" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>digital proof approvals</a> with customer commenting, <a href="/production-scheduling" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>production scheduling</a> with thread-colour optimisation and barcode-to-machine integration, or distributor feeds from SanMar and alphabroder. Demos are conducted live by a product specialist who understands garment decoration workflows. <a href="/contact" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>Contact our sales team</a> to schedule a session.
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
              Tracker provides <a href="/logo-management" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>cloud-based logo management</a> with full support for industry-standard embroidery formats including EMB, DST, PES, EXP, JEF, and XXX. When you upload an embroidery file, Tracker auto-detects the format, reads stitch count and colour-stop data, and indexes the file by customer, logo name, thread palette, and hoop size. Every logo is automatically versioned with a complete audit trail showing who uploaded, edited, or approved each revision. When production begins, operators scan a job barcode and Tracker pushes the correct file version directly to the embroidery machine controller — Barudan via bNET or Tajima via Pulse/DG16 — with pre-configured needle assignments and thread sequences. This eliminates USB transfers, wrong-version errors, and the 3–5% reprint rate that plagues shops using shared drives.
            </>
          )
        },
        {
          question: "How do digital proof approvals work?",
          answer: (
            <>
              Tracker's <a href="/proof-approvals" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>digital proof approval system</a> generates professional proofs from your cloud logo library. You select a logo, choose a garment mockup (polo, hoodie, cap, bag), position the decoration, and add thread-chart or ink specifications. The proof is sent to your customer via email with a unique approval link, or through the customer portal. Customers review on any device — desktop, tablet, or mobile — zoom into stitch detail, and leave threaded comments directly on the proof image. When satisfied, they click 'Approve' and the job automatically releases to <a href="/production-scheduling" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>production scheduling</a> with the approved file version locked. For licensed team gear, proofs can be routed through multiple stakeholders (coach, compliance officer, purchasing manager) before reaching production.
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
              Tracker's barcode-to-machine integration supports the industry's most widely used production equipment. For embroidery: Barudan machines via the bNET protocol and Tajima machines via Pulse/DG16 controllers — the design file, thread chart, speed settings, and needle assignments are pushed directly to the machine controller. For DTG printing: Brother GTX series, Epson SureColor F-series, and Kornit digital printers with platen assignment and pre-treatment workflow management. For DTF: Epson-based DTF systems with film-print, powder-cure, and press-application stage scheduling. For screen printing: M&R and ROQ automatic presses with screen-burn sequence scheduling. For heat seal: temperature, pressure, and dwell-time parameters are pre-loaded per job. See the full list on our <a href="/integrations" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>integrations page</a>.
            </>
          )
        },
        {
          question: "How does thread colour optimisation improve production?",
          answer: (
            <>
              Tracker's <a href="/production-scheduling" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>production scheduler</a> analyses all queued embroidery jobs and groups them by thread palette similarity. Orders that share the same thread colours are batched together into sequential runs, eliminating redundant needle re-threading. The algorithm considers needle positions (which colours are loaded on which needles), colour proximity (grouping similar palettes even if not identical), due dates (ensuring urgent orders aren't delayed by batching), and hoop compatibility (matching similar garment sizes). Combined with order stacking — where multiple small orders are placed on the same hoop run — Tracker customers report 20–25% more stitches per machine-hour and up to 40% fewer thread changeovers. For a typical 12-head Barudan machine, this translates to 1.5–2 additional productive hours per shift.
            </>
          )
        },
        {
          question: "Does Tracker track operator time and machine efficiency?",
          answer: (
            <>
              Yes. Operators clock on and off each job by scanning a barcode at their workstation. Tracker captures the actual run time for every job, compares it to the estimated time from your quoting system, and calculates labour cost per piece and per decoration method. Real-time dashboards display head utilisation percentages, downtime reasons (thread break, maintenance, setup), stitch counts per hour, and job completion rates across all machines and shifts. Supervisors can view performance by operator, machine, or decoration method to identify training opportunities and equipment issues. The time-tracking data feeds back into Tracker's quoting engine so future quotes reflect actual production costs rather than guesswork — improving margin accuracy by 15–20% on average.
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
              Tracker connects to blank-garment distributors including SanMar (50,000+ styles with live inventory, volume-tier pricing, and size/colour matrix), alphabroder (real-time stock and pricing API), and S&S Activewear. These <a href="/integrations" className="text-emerald-400 hover:text-emerald-300 underline font-medium" onClick={scrollToTop}>integrations</a> pull product catalogues, live pricing, and warehouse inventory directly into Tracker so your sales team quotes with accurate blank-garment costs. For PLM and ERP, Tracker integrates with SAP Business One, Oracle NetSuite, Sage 50/Intacct, QuickBooks Online and Desktop, Xero, and Microsoft Dynamics 365 — providing bi-directional data flow for invoices, payments, cost of goods, and general-ledger postings. E-commerce integrations with <a href="/integrations/shopify" className="text-emerald-400 hover:text-emerald-300 underline font-medium" onClick={scrollToTop}>Shopify</a> and <a href="/integrations/woocommerce" className="text-emerald-400 hover:text-emerald-300 underline font-medium" onClick={scrollToTop}>WooCommerce</a> sync orders, inventory, and fulfilment status.
            </>
          )
        },
        {
          question: "Can Tracker connect to my Shopify or WooCommerce store?",
          answer: (
            <>
              Yes. Tracker's e-commerce integrations provide two-way sync with <a href="/integrations/shopify" className="text-emerald-400 hover:text-emerald-300 underline font-medium" onClick={scrollToTop}>Shopify</a> (including Shopify Plus) and <a href="/integrations/woocommerce" className="text-emerald-400 hover:text-emerald-300 underline font-medium" onClick={scrollToTop}>WooCommerce</a> stores. Orders placed on your webstore flow into Tracker's production pipeline automatically — including decoration specifications like logo selection, placement, thread colours, and garment sizes if you use a product configurator. Inventory levels sync across channels to prevent overselling. When orders are fulfilled, Tracker pushes tracking numbers and shipping status back to the store so customers receive automated fulfilment notifications. Product data (descriptions, images, pricing) can also be synchronised from Tracker to the storefront for consistent catalogue management.
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
              Tracker offers three <a href="/pricing" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>pricing tiers</a> — Starter, Professional, and Enterprise — based on the modules you need, user count, and decoration volume. All plans include cloud hosting, customer support, software updates, and data backups. The Starter plan suits small shops with core needs (order management, logo storage, basic scheduling). Professional adds advanced features like barcode-to-machine integration, distributor feeds, and digital proof approvals. Enterprise includes multi-location support, custom integrations, dedicated account management, and SLA guarantees. Pricing is subscription-based with no per-transaction fees. <a href="/contact" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>Contact us</a> for a custom quote tailored to your configuration.
            </>
          )
        },
        {
          question: "Are there hidden costs once I have Tracker?",
          answer: (
            <>
              No. All costs are documented in your project scope and licensing agreement before implementation begins. Your subscription includes cloud hosting, <a href="/support" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>support</a>, software updates, and security patches. If you need additional modules, integrations, or user seats in the future, these are discussed, scoped, and agreed upon before any work begins — with clear pricing. There are no per-transaction fees, no storage overage charges, and no surprise maintenance costs. Implementation services (data migration, integration configuration, training) are quoted separately at the start of the project so you know the total investment before signing.
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
              Implementation timelines depend on your business complexity, data migration requirements, and number of <a href="/integrations" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>integrations</a>. A small embroidery shop with basic order management and logo storage can go live in as few as 6 weeks. Mid-size operations with distributor integrations (SanMar, alphabroder), machine connections (Barudan, Tajima), and e-commerce sync (Shopify) typically take 3–4 months. Large multi-location enterprises with ERP connectors (SAP, NetSuite), custom workflows, and data migration from legacy systems may require 6–12 months. Every implementation includes a dedicated project manager, data migration support, integration configuration, user training (online or on-site), and a parallel-run period. <a href="/get-started" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>Get started</a> today.
            </>
          )
        },
        {
          question: "Is Tracker available globally?",
          answer: (
            <>
              Yes. Tracker is a cloud-based SaaS platform accessible from any internet connection worldwide. We have active customers in the United Kingdom, across Europe, and throughout the United States. The platform infrastructure is hosted on enterprise-grade cloud servers with data centres in multiple regions for low-latency access. The interface is currently available in English, with multi-language support on the roadmap. Currency handling supports GBP, EUR, USD, and other currencies for international operations. Support is provided during UK and US business hours with emergency coverage available for Enterprise customers.
            </>
          )
        },
        {
          question: "Do I need technical knowledge to use Tracker?",
          answer: (
            <>
              No. Tracker is designed for garment decoration professionals — production managers, sales coordinators, shop-floor operators, and business owners — not IT specialists. Day-to-day operations like entering orders, managing logos, sending proofs, and scanning barcodes are intuitive and require minimal training. We provide comprehensive onboarding including role-based training sessions, detailed <a href="/documentation" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>documentation</a> with step-by-step guides, <a href="/videos" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>video walkthroughs</a> for every major workflow, and ongoing <a href="/support" className="text-gold hover:text-gold-light underline font-medium" onClick={scrollToTop}>support</a> via phone, email, and live chat. Most operators are proficient within 1–2 weeks.
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
