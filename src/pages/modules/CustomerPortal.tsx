import ModuleLayout from "@/components/modules/ModuleLayout";
import { UserCheck, CheckCircle, Clock, File, Cpu, MessageSquare, FileText, Settings, Calendar, CreditCard, Users, Smartphone, Globe, Layers, Zap, PenTool } from "lucide-react";
import customerPortalHero from "@/assets/modules/customer-portal-hero.jpg";
import customerPortalMain from "@/assets/modules/customer-portal-main.jpg";

const CustomerPortal = () => {
  return (
    <ModuleLayout
      title="Customer Portal"
      description="Give customers a branded login to review orders, approve proofs, and track job progress in real-time."
      color="green"
      heroImage={customerPortalHero}
      heroImageCallouts={[
        {
          text: "Customer Search Interface",
          position: { top: "20%", left: "-25%" },
          icon: <Users className="h-4 w-4" />,
          delay: "0.5s"
        },
        {
          text: "Advanced Filtering Options",
          position: { top: "40%", right: "-25%" },
          icon: <Settings className="h-4 w-4" />,
          delay: "1s"
        },
        {
          text: "Customer Account Management",
          position: { bottom: "25%", left: "-25%" },
          icon: <UserCheck className="h-4 w-4" />,
          delay: "1.5s"
        }
      ]}
      stats={[
        {
          value: "85%",
          label: "Increase in Client Satisfaction",
          icon: <CheckCircle className="h-8 w-8 text-green-500" />
        },
        {
          value: "40%",
          label: "Reduction in Support Inquiries",
          icon: <MessageSquare className="h-8 w-8 text-green-500" />
        },
        {
          value: "30%",
          label: "Faster Payment Processing",
          icon: <CreditCard className="h-8 w-8 text-green-500" />
        },
        {
          value: "24/7",
          label: "Client Access & Self-Service",
          icon: <Clock className="h-8 w-8 text-green-500" />
        }
      ]}
      mainSection={{
        title: "Transform Your Client Experience",
        description: "Our Customer Portal creates a seamless digital experience that enables your clients to interact with your business on their terms, increasing satisfaction and loyalty while reducing support costs.",
        image: customerPortalMain
      }}
      keyFeatures={{
        title: "Comprehensive Client Engagement",
        description: "Everything you need to deliver an exceptional client experience",
        features: [
          {
            title: "Secure Document Sharing",
            description: "Share documents, contracts, and deliverables securely with automatic notifications and access tracking.",
            icon: <FileText className="h-6 w-6" />
          },
          {
            title: "Integrated Payment System",
            description: "Enable clients to view invoices, make payments, and manage payment methods with our secure payment processing.",
            icon: <CreditCard className="h-6 w-6" />
          },
          {
            title: "Real-time Messaging",
            description: "Provide direct communication channels with threaded conversations, file sharing, and notification preferences.",
            icon: <MessageSquare className="h-6 w-6" />
          },
          {
            title: "Project Transparency",
            description: "Keep clients informed with real-time project updates, milestones, and deliverable tracking.",
            icon: <Calendar className="h-6 w-6" />
          },
          {
            title: "White-Label Branding",
            description: "Customize the portal with your brand colors, logo, domain, and personalized messaging for a seamless experience.",
            icon: <PenTool className="h-6 w-6" />
          },
          {
            title: "Self-Service Tools",
            description: "Empower clients with appointment scheduling, form submissions, and knowledge base access for instant support.",
            icon: <Settings className="h-6 w-6" />
          }
        ]
      }}
      specialSection={{
        title: "Advanced Machine Management",
        subtitle: "Built for Efficiency",
        description: "Our Customer Portal integrates sophisticated machine monitoring to keep clients informed about production progress.",
        items: [
          { text: "End-to-end production tracking with real-time updates", icon: <File className="h-5 w-5" /> },
          { text: "Multi-factor verification for equipment operating parameters", icon: <Cpu className="h-5 w-5" /> },
          { text: "Granular production scheduling and resource allocation", icon: <UserCheck className="h-5 w-5" /> },
          { text: "Comprehensive compliance with industry quality standards", icon: <CheckCircle className="h-5 w-5" /> },
          { text: "Detailed audit trails of all production activities", icon: <FileText className="h-5 w-5" /> },
          { text: "Regular performance optimization and preventative maintenance", icon: <Settings className="h-5 w-5" /> }
        ]
      }}
      ctaSection={{
        title: "Ready to Elevate Your Client Experience?",
        description: "Join thousands of businesses that have transformed their client relationships with our comprehensive portal solution.",
        primaryButtonText: "Get Started",
        primaryButtonLink: "/get-started",
        secondaryButtonText: "Schedule Demo",
        secondaryButtonLink: "/pricing"
      }}
      relatedModules={[
        {
          title: "Customer Database",
          icon: <FileText className="h-8 w-8" />,
          description: "Store all customer details, communication logs, and order history in one centralized, searchable profile.",
          link: "/modules/customer-database"
        },
        {
          title: "Sales & Orders",
          icon: <Calendar className="h-8 w-8" />,
          description: "Manage incoming orders, quotes, and job details in one streamlined dashboard.",
          link: "/modules/sales-orders"
        },
        {
          title: "Artworkers",
          icon: <CreditCard className="h-8 w-8" />,
          description: "Assign artwork tasks, manage approvals, and ensure timely proof delivery for every order.",
          link: "/modules/artworkers"
        }
      ]}
    />
  );
};

export default CustomerPortal;
