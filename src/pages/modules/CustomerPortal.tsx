
import ModuleLayout from "@/components/modules/ModuleLayout";
import { UserCheck, CheckCircle, Clock, File, Shield, MessageSquare, FileText, LockIcon, Calendar, CreditCard, Settings, Users, Smartphone, Globe, Layers, Zap, PenTool } from "lucide-react";

const CustomerPortal = () => {
  return (
    <ModuleLayout
      title="Customer Portal"
      description="Give customers a branded login to review orders, approve proofs, and track job progress in real-time."
      color="green"
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
        description: "Our Customer Portal creates a seamless digital experience that enables your clients to interact with your business on their terms, increasing satisfaction and loyalty while reducing support costs."
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
        title: "Enterprise-Grade Security",
        subtitle: "Built for Trust",
        description: "Our Customer Portal is designed with the highest security standards to protect your sensitive client information.",
        items: [
          { text: "End-to-end encryption for all data and communications", icon: <LockIcon className="h-5 w-5" /> },
          { text: "Multi-factor authentication with customizable security policies", icon: <Shield className="h-5 w-5" /> },
          { text: "Granular role-based access controls and permissions", icon: <UserCheck className="h-5 w-5" /> },
          { text: "Comprehensive compliance with GDPR, CCPA, and industry regulations", icon: <CheckCircle className="h-5 w-5" /> },
          { text: "Detailed audit trails of all portal activities", icon: <FileText className="h-5 w-5" /> },
          { text: "Regular security updates and vulnerability testing", icon: <Shield className="h-5 w-5" /> }
        ]
      }}
      ctaSection={{
        title: "Ready to Elevate Your Client Experience?",
        description: "Join thousands of businesses that have transformed their client relationships with our comprehensive portal solution.",
        primaryButtonText: "Start Free Trial",
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
