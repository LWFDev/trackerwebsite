
import ModuleLayout from "@/components/modules/ModuleLayout";
import { MessageSquare, Users, Clock, CheckCircle, PhoneCall, Mail, Settings, Globe, BarChart2, HeadphonesIcon, File } from "lucide-react";

const CustomerService = () => {
  return (
    <ModuleLayout
      title="Customer Service"
      description="Manage customer support cases faster across every channel with our comprehensive customer service solution."
      color="purple"
      stats={[
        {
          value: "45%",
          label: "Faster Resolution Time",
          icon: <Clock className="h-8 w-8 text-purple-500" />
        },
        {
          value: "92%",
          label: "Customer Satisfaction",
          icon: <CheckCircle className="h-8 w-8 text-purple-500" />
        },
        {
          value: "24/7",
          label: "Support Coverage",
          icon: <HeadphonesIcon className="h-8 w-8 text-purple-500" />
        },
        {
          value: "10+",
          label: "Support Channels",
          icon: <Globe className="h-8 w-8 text-purple-500" />
        }
      ]}
      mainSection={{
        title: "Omnichannel Customer Support",
        description: "Provide exceptional customer support across all communication channels from a single platform."
      }}
      keyFeatures={{
        title: "Key Features",
        description: "Everything you need to deliver outstanding customer service",
        features: [
          {
            title: "Ticketing System",
            description: "Organize, assign, and track customer support cases with our robust ticketing system.",
            icon: <MessageSquare className="h-6 w-6" />
          },
          {
            title: "Omnichannel Support",
            description: "Manage customer conversations across email, chat, phone, social media, and more from a single inbox.",
            icon: <Globe className="h-6 w-6" />
          },
          {
            title: "Knowledge Base",
            description: "Create and manage a comprehensive knowledge base for customer self-service and agent support.",
            icon: <File className="h-6 w-6" />
          },
          {
            title: "Automated Workflows",
            description: "Automate routine support tasks with customizable workflows and triggers.",
            icon: <Settings className="h-6 w-6" />
          },
          {
            title: "Customer History",
            description: "Access complete customer interaction history for personalized and context-aware support.",
            icon: <Users className="h-6 w-6" />
          },
          {
            title: "Support Analytics",
            description: "Gain insights into support performance with comprehensive analytics and reporting.",
            icon: <BarChart2 className="h-6 w-6" />
          }
        ]
      }}
      ctaSection={{
        title: "Ready to Transform Your Customer Support?",
        description: "Join thousands of businesses that deliver exceptional customer service with NuboSync.",
        primaryButtonText: "Get Started Today",
        secondaryButtonText: "Request Demo"
      }}
      relatedModules={[
        {
          title: "Customer Portal",
          icon: <Users className="h-8 w-8" />,
          description: "Provide your customers with a self-service portal for support and information.",
          link: "/modules/customer-portal"
        },
        {
          title: "Analytics & Reporting",
          icon: <BarChart2 className="h-8 w-8" />,
          description: "Get powerful insights from your data, anytime, anywhere.",
          link: "/modules/analytics-reporting"
        },
        {
          title: "Document Management",
          icon: <File className="h-8 w-8" />,
          description: "Store, organize, and share documents securely across your organization.",
          link: "/modules/document-management"
        }
      ]}
    />
  );
};

export default CustomerService;
