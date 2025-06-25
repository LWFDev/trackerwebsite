
import ModuleLayout from "@/components/modules/ModuleLayout";
import { Users, Search, Filter, FileText, MessageSquare, Clock, List, Calendar, Zap, BarChart2, ShoppingCart, UserCheck, Globe } from "lucide-react";

const CustomerDatabase = () => {
  return (
    <ModuleLayout
      title="Customer Database"
      description="Store all customer details, communication logs, and order history in one centralized, searchable profile."
      color="teal"
      heroImage="/lovable-uploads/d746be04-9858-4d51-88d0-94c9e02b8a79.png"
      stats={[
        {
          value: "360°",
          label: "Customer view with complete history",
          icon: <Users className="h-8 w-8 text-teal-500" />
        },
        {
          value: "85%",
          label: "Faster customer lookups",
          icon: <Search className="h-8 w-8 text-teal-500" />
        },
        {
          value: "45%",
          label: "Improvement in customer retention",
          icon: <UserCheck className="h-8 w-8 text-teal-500" />
        },
        {
          value: "25%",
          label: "Increase in repeat business",
          icon: <ShoppingCart className="h-8 w-8 text-teal-500" />
        }
      ]}
      mainSection={{
        title: "Centralize Your Customer Information",
        description: "Our Customer Database module creates a single source of truth for all customer data, making it easy to access complete information and provide exceptional service."
      }}
      keyFeatures={{
        title: "Comprehensive Customer Management",
        description: "Everything you need to build and maintain strong customer relationships",
        features: [
          {
            title: "Unified Customer Profiles",
            description: "Create detailed customer profiles with contact information, preferences, order history, and communication logs in one place.",
            icon: <Users className="h-6 w-6" />
          },
          {
            title: "Advanced Search & Filtering",
            description: "Quickly find any customer using powerful search tools with filtering by location, purchase history, tags, and custom fields.",
            icon: <Search className="h-6 w-6" />
          },
          {
            title: "Communication Management",
            description: "Track all customer interactions with integrated email, call logs, and message history for consistent service.",
            icon: <MessageSquare className="h-6 w-6" />
          },
          {
            title: "Complete Order History",
            description: "View a customer's entire purchase history, including quotes, current orders, and past purchases with detailed status tracking.",
            icon: <FileText className="h-6 w-6" />
          },
          {
            title: "Customer Segmentation",
            description: "Group customers by behavior, value, industry, or custom criteria for targeted marketing and personalized service.",
            icon: <Filter className="h-6 w-6" />
          },
          {
            title: "Activity Timeline",
            description: "See all customer interactions chronologically with complete context for each touchpoint in the relationship.",
            icon: <Clock className="h-6 w-6" />
          }
        ]
      }}
      specialSection={{
        title: "Customer Intelligence",
        subtitle: "Beyond Contact Management",
        description: "Our Customer Database provides actionable insights to help you serve customers better and grow relationships.",
        items: [
          { text: "Customer health scores to identify at-risk accounts", icon: <BarChart2 className="h-5 w-5" /> },
          { text: "Purchase pattern analysis for targeted recommendations", icon: <List className="h-5 w-5" /> },
          { text: "Follow-up reminders and scheduled check-ins", icon: <Calendar className="h-5 w-5" /> },
          { text: "Opportunity identification based on customer history", icon: <Zap className="h-5 w-5" /> },
          { text: "Multi-location support for businesses with multiple sites", icon: <Globe className="h-5 w-5" /> },
          { text: "Customizable fields for industry-specific information", icon: <FileText className="h-5 w-5" /> }
        ]
      }}
      ctaSection={{
        title: "Ready to Transform Your Customer Management?",
        description: "Join thousands of businesses that have improved customer satisfaction and loyalty with our Customer Database.",
        primaryButtonText: "Get Started Today",
        primaryButtonLink: "/get-started",
        secondaryButtonText: "Schedule Demo",
        secondaryButtonLink: "/pricing"
      }}
      relatedModules={[
        {
          title: "Sales & Orders",
          icon: <ShoppingCart className="h-8 w-8" />,
          description: "Manage incoming orders, quotes, and job details in one streamlined dashboard.",
          link: "/modules/sales-orders"
        },
        {
          title: "Customer Portal",
          icon: <UserCheck className="h-8 w-8" />,
          description: "Give customers a branded login to review orders, approve proofs, and track job progress in real-time.",
          link: "/modules/customer-portal"
        },
        {
          title: "Production",
          icon: <Calendar className="h-8 w-8" />,
          description: "Schedule, assign, and track every job from setup through final output with visual production queues.",
          link: "/modules/production"
        }
      ]}
    />
  );
};

export default CustomerDatabase;
