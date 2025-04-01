
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Info, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const PricingPage = () => {
  const [billingInterval, setBillingInterval] = useState<"monthly" | "annually">("annually");
  
  const pricingPlans = [
    {
      name: "Starter",
      price: billingInterval === "annually" ? "$899" : "$999",
      description: "For small businesses getting started",
      features: [
        "Up to 10 users",
        "5GB storage",
        "Standard report generation",
        "Email support",
        "Basic analytics dashboard",
        "Standard API access",
        "Community support",
      ],
      buttonText: "Get Started",
      highlighted: false
    },
    {
      name: "Professional",
      price: billingInterval === "annually" ? "$1,499" : "$1,699",
      description: "For growing businesses that need more features",
      features: [
        "Up to 50 users",
        "50GB storage", 
        "Advanced report generation",
        "Priority email & chat support",
        "Custom reporting dashboards",
        "White-label options",
        "Full integration capabilities",
        "Custom workflow automations",
        "Advanced API access",
      ],
      buttonText: "Get Started",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with advanced needs",
      features: [
        "Unlimited users",
        "Unlimited storage",
        "Advanced report generation",
        "24/7 priority support",
        "Custom analytics dashboards",
        "Dedicated account manager",
        "SLA guarantees",
        "Advanced security features",
        "Custom API integrations",
      ],
      buttonText: "Contact Sales",
      highlighted: false
    }
  ];

  const comparisonFeatures = [
    {
      feature: "Users",
      starter: "Up to 10",
      professional: "Up to 50",
      enterprise: "Unlimited"
    },
    {
      feature: "Storage",
      starter: "5GB",
      professional: "50GB",
      enterprise: "Unlimited"
    },
    {
      feature: "Report Generation",
      starter: "Basic",
      professional: "Advanced",
      enterprise: "Advanced"
    },
    {
      feature: "API Access",
      starter: "Limited",
      professional: "Full Access",
      enterprise: "Custom"
    },
    {
      feature: "Support",
      starter: "Email only",
      professional: "Email, Chat & Phone",
      enterprise: "24/7 Priority"
    },
    {
      feature: "Analytics",
      starter: "Basic",
      professional: "Advanced",
      enterprise: "Advanced"
    },
    {
      feature: "Custom Branding",
      starter: false,
      professional: true,
      enterprise: true
    },
    {
      feature: "Dedicated Account Manager",
      starter: false,
      professional: false,
      enterprise: true
    },
    {
      feature: "SLA Guarantees",
      starter: false,
      professional: false,
      enterprise: true
    }
  ];

  const faqs = [
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
    }
  ];
  
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-zinc-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute w-[600px] h-[600px] rounded-full bg-[#D4AF37]/5 blur-[120px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">Pricing</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Choose the plan that's right for your business
          </p>
          
          {/* Billing Toggle */}
          <div className="flex justify-center items-center space-x-4 mb-12">
            <button
              onClick={() => setBillingInterval("monthly")}
              className={cn(
                "px-4 py-2 rounded-md",
                billingInterval === "monthly" 
                  ? "bg-zinc-800 text-[#D4AF37]" 
                  : "text-zinc-400 hover:text-white"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingInterval("annually")}
              className={cn(
                "px-4 py-2 rounded-md flex items-center",
                billingInterval === "annually" 
                  ? "bg-zinc-800 text-[#D4AF37]" 
                  : "text-zinc-400 hover:text-white"
              )}
            >
              Annual (Save 10%)
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="py-16 bg-black relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={cn(
                  "bg-zinc-900 rounded-lg border shadow-sm p-6 relative transition-all duration-300 hover:-translate-y-1",
                  plan.highlighted 
                    ? "border-[#D4AF37] ring-2 ring-[#D4AF37]/20 hover:shadow-[#D4AF37]/30" 
                    : "border-zinc-800 hover:shadow-zinc-800/30"
                )}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-gradient-to-r from-[#D4AF37] to-[#F2D675] text-black text-xs font-semibold px-4 py-1 rounded-full">
                      Most popular
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <div className="flex justify-center items-baseline mb-4">
                    <span className={`text-4xl font-bold ${plan.highlighted ? 'text-[#D4AF37]' : 'text-white'}`}>
                      {plan.price}
                    </span>
                    {plan.price !== "Custom" && (
                      <span className="text-gray-500 ml-1">/month</span>
                    )}
                  </div>
                  <p className="text-gray-400 mb-6 text-sm">{plan.description}</p>
                  <Button 
                    className={`w-full mb-6 ${
                      plan.highlighted 
                        ? 'bg-gradient-to-r from-[#D4AF37] to-[#F2D675] hover:from-[#F2D675] hover:to-[#D4AF37] text-black' 
                        : 'bg-zinc-800 hover:bg-zinc-700'
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-medium text-gray-300 mb-2">WHAT'S INCLUDED:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-[#D4AF37] shrink-0 mr-2" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center text-gray-400 mt-8 text-sm max-w-2xl mx-auto">
            All plans include a 14-day free trial. No credit card required.
          </div>
        </div>
      </div>

      {/* Feature Comparison Table */}
      <div className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">Compare</span> Plan Features
          </h2>
          
          <div className="overflow-x-auto max-w-6xl mx-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="p-4 text-left text-gray-400">Features</th>
                  <th className="p-4 text-center">Starter</th>
                  <th className="p-4 text-center">Professional</th>
                  <th className="p-4 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((item, index) => (
                  <tr key={index} className="border-b border-zinc-800">
                    <td className="p-4 text-left font-medium">{item.feature}</td>
                    <td className="p-4 text-center">
                      {typeof item.starter === 'boolean' ? (
                        item.starter ? <Check className="h-5 w-5 text-[#D4AF37] mx-auto" /> : <X className="h-5 w-5 text-gray-500 mx-auto" />
                      ) : (
                        <span className="text-gray-300">{item.starter}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof item.professional === 'boolean' ? (
                        item.professional ? <Check className="h-5 w-5 text-[#D4AF37] mx-auto" /> : <X className="h-5 w-5 text-gray-500 mx-auto" />
                      ) : (
                        <span className="text-gray-300">{item.professional}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof item.enterprise === 'boolean' ? (
                        item.enterprise ? <Check className="h-5 w-5 text-[#D4AF37] mx-auto" /> : <X className="h-5 w-5 text-gray-500 mx-auto" />
                      ) : (
                        <span className="text-gray-300">{item.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-black">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">Questions</span>
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="border border-zinc-800 rounded-lg overflow-hidden bg-zinc-900"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-zinc-800 transition-colors">
                  <span className="text-left">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Contact Sales CTA */}
      <div className="py-16 bg-zinc-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-[#D4AF37]/5 blur-[100px] top-1/2 -left-1/4 transform -translate-y-1/2"></div>
          <div className="absolute w-[500px] h-[500px] rounded-full bg-[#D4AF37]/5 blur-[100px] bottom-0 -right-1/4"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Need a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">Custom Solution</span>?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team is ready to help you find the perfect plan for your business needs. Let us know what your requirements are, and we'll create a tailored solution.
            </p>
            <Button variant="gold" size="lg" className="font-medium">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
