
import ModuleLayout from "@/components/modules/ModuleLayout";
import { UserCheck, CheckCircle, Clock, File, Shield, MessageSquare, FileText, LockIcon, Calendar, CreditCard } from "lucide-react";

const CustomerPortal = () => {
  return (
    <ModuleLayout
      title="Client Portal"
      description="Provide your clients with a secure, branded portal where they can access documents, make payments, and communicate with your team."
      color="green"
      stats={[
        {
          value: "85%",
          label: "Increase in client satisfaction",
          icon: <CheckCircle className="h-8 w-8 text-green-500" />
        },
        {
          value: "40%",
          label: "Reduction in document-related inquiries",
          icon: <File className="h-8 w-8 text-green-500" />
        },
        {
          value: "30%",
          label: "Faster payment processing",
          icon: <CreditCard className="h-8 w-8 text-green-500" />
        }
      ]}
      mainSection={{
        title: "Enhance Your Client Experience",
        description: "Our Client Portal module provides all the tools you need to deliver exceptional client service."
      }}
      keyFeatures={{
        title: "Key Features",
        description: "Everything you need to deliver a seamless client experience",
        features: [
          {
            title: "Secure Document Sharing",
            description: "Share documents securely with clients and track when they've been viewed or downloaded.",
            icon: <FileText className="h-6 w-6" />
          },
          {
            title: "Online Payments",
            description: "Allow clients to view invoices and make payments directly through the portal.",
            icon: <CreditCard className="h-6 w-6" />
          },
          {
            title: "Messaging & Communication",
            description: "Built-in messaging system for secure communication between clients and your team.",
            icon: <MessageSquare className="h-6 w-6" />
          },
          {
            title: "Project Updates",
            description: "Keep clients informed with real-time project updates, milestones, and progress reports.",
            icon: <Calendar className="h-6 w-6" />
          },
          {
            title: "Custom Branding",
            description: "Customize the portal with your brand colors, logo, and domain for a seamless client experience.",
            icon: <File className="h-6 w-6" />
          },
          {
            title: "Self-Service Tools",
            description: "Empower clients with self-service tools like appointment scheduling and form submissions.",
            icon: <Wrench className="h-6 w-6" />
          }
        ]
      }}
      specialSection={{
        title: "Your Client Data is Safe With Us",
        subtitle: "Enterprise-grade Security",
        description: "Our Client Portal is built with security at its core, ensuring your sensitive client information is always protected.",
        items: [
          { text: "End-to-end encryption for all data", icon: <LockIcon className="h-5 w-5" /> },
          { text: "Two-factor authentication", icon: <Shield className="h-5 w-5" /> },
          { text: "Role-based access controls", icon: <UserCheck className="h-5 w-5" /> },
          { text: "GDPR and CCPA compliant", icon: <CheckCircle className="h-5 w-5" /> }
        ]
      }}
      ctaSection={{
        title: "Ready to Elevate Your Client Experience?",
        description: "Join thousands of businesses that have transformed their client relationships with NuboSync.",
        primaryButtonText: "Get Started Today",
        secondaryButtonText: "Request Demo"
      }}
      relatedModules={[
        {
          title: "Document Management",
          icon: <FileText className="h-8 w-8" />,
          description: "Store, organize, and share documents securely across your organization.",
          link: "/modules/document-management"
        },
        {
          title: "Project Management",
          icon: <File className="h-8 w-8" />,
          description: "Plan, track, and manage projects with ease.",
          link: "/modules/project-management"
        },
        {
          title: "Finance & Accounting",
          icon: <CreditCard className="h-8 w-8" />,
          description: "Manage financial transactions and accounting processes efficiently.",
          link: "/modules/finance-accounting"
        }
      ]}
    />
  );
};

export default CustomerPortal;
