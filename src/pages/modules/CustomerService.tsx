
import ModuleLayout from "@/components/modules/ModuleLayout";
import { MessageSquare, Users, Clock, CheckCircle, PhoneCall, Mail, Settings, Globe, BarChart2, HeadphonesIcon, File, Database, Zap, BookOpen, Bot, Shield, UserCheck } from "lucide-react";

const CustomerService = () => {
  return (
    <ModuleLayout
      title="Customer Service"
      description="Deliver exceptional support experiences across every channel with our comprehensive customer service platform."
      color="purple"
      stats={[
        {
          value: "45%",
          label: "Faster Resolution Time",
          icon: <Clock className="h-8 w-8 text-purple-500" />
        },
        {
          value: "92%",
          label: "Customer Satisfaction Rate",
          icon: <CheckCircle className="h-8 w-8 text-purple-500" />
        },
        {
          value: "24/7",
          label: "Omnichannel Support Coverage",
          icon: <HeadphonesIcon className="h-8 w-8 text-purple-500" />
        },
        {
          value: "60%",
          label: "Reduction in Support Costs",
          icon: <Zap className="h-8 w-8 text-purple-500" />
        }
      ]}
      mainSection={{
        title: "Unify Your Customer Support Experience",
        description: "Our Customer Service module brings together all your support channels, customer data, and team collaboration tools into one powerful platform designed to enhance customer satisfaction and agent productivity."
      }}
      keyFeatures={{
        title: "Comprehensive Support Tools",
        description: "Everything you need to deliver outstanding customer service at scale",
        features: [
          {
            title: "Unified Ticketing System",
            description: "Manage all customer inquiries from a single queue with intelligent routing, prioritization, and SLA tracking.",
            icon: <MessageSquare className="h-6 w-6" />
          },
          {
            title: "Omnichannel Support",
            description: "Provide seamless support across email, live chat, phone, social media, and messaging apps with unified conversation history.",
            icon: <Globe className="h-6 w-6" />
          },
          {
            title: "Self-Service Knowledge Base",
            description: "Empower customers to find answers with a searchable knowledge base, AI-powered suggestions, and guided troubleshooting.",
            icon: <BookOpen className="h-6 w-6" />
          },
          {
            title: "Intelligent Automation",
            description: "Reduce repetitive tasks with customizable workflows, canned responses, and AI-assisted resolution suggestions.",
            icon: <Bot className="h-6 w-6" />
          },
          {
            title: "Customer 360° View",
            description: "Access complete customer profiles with interaction history, purchase data, and personalized conversation context.",
            icon: <UserCheck className="h-6 w-6" />
          },
          {
            title: "Performance Analytics",
            description: "Monitor key metrics with customizable dashboards for team performance, customer satisfaction, and support trends.",
            icon: <BarChart2 className="h-6 w-6" />
          }
        ]
      }}
      specialSection={{
        title: "Enterprise-Grade Support Infrastructure",
        subtitle: "Built for Reliability",
        description: "Our platform is designed with the scalability, security and resilience that modern support teams require.",
        items: [
          { text: "99.99% uptime SLA for mission-critical support operations", icon: <CheckCircle className="h-5 w-5" /> },
          { text: "End-to-end encryption for all customer communications", icon: <Shield className="h-5 w-5" /> },
          { text: "Flexible deployment options including cloud and hybrid", icon: <Database className="h-5 w-5" /> },
          { text: "Enterprise-level compliance with GDPR, HIPAA, and more", icon: <Shield className="h-5 w-5" /> },
          { text: "Seamless integration with CRM, ERP and business systems", icon: <Settings className="h-5 w-5" /> },
          { text: "Advanced AI capabilities with natural language processing", icon: <Bot className="h-5 w-5" /> }
        ]
      }}
      ctaSection={{
        title: "Ready to Transform Your Customer Support?",
        description: "Join thousands of businesses that deliver exceptional customer service with our comprehensive platform.",
        primaryButtonText: "Get Started",
        primaryButtonLink: "/get-started",
        secondaryButtonText: "Schedule a Demo",
        secondaryButtonLink: "/pricing"
      }}
      relatedModules={[
        {
          title: "Customer Portal",
          icon: <Users className="h-8 w-8" />,
          description: "Provide customers with a branded self-service hub for support, account management, and more.",
          link: "/modules/customer-portal"
        },
        {
          title: "Analytics & Reporting",
          icon: <BarChart2 className="h-8 w-8" />,
          description: "Get comprehensive insights into customer experience, agent performance, and support operations.",
          link: "/modules/analytics-reporting"
        },
        {
          title: "Document Management",
          icon: <File className="h-8 w-8" />,
          description: "Organize and share support documentation, policies, and procedural guides.",
          link: "/modules/document-management"
        }
      ]}
    />
  );
};

export default CustomerService;
