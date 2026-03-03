import ModuleLayout from "@/components/modules/ModuleLayout";
import { UserCheck, CheckCircle, Clock, File, Cpu, MessageSquare, FileText, Settings, Calendar, CreditCard, Users, PenTool } from "lucide-react";

const CustomerPortal = () => {
  return (
    <ModuleLayout
      title="Customer Portal"
      description="Digital proof approvals and customer portal for garment decoration. Customers review orders, approve embroidery proofs, track DTG/DTF jobs, and comment on designs in real-time."
      color="green"
      heroImage="/lovable-uploads/ef76fc5f-ac19-42c6-9b19-ebeae2578340.png"
      heroImageCallouts={[
        {
          text: "Customer Search Interface",
          position: { top: "20%", left: "-25%" },
          icon: <Users className="h-4 w-4" />,
          delay: "0.5s"
        },
        {
          text: "Digital Proof Approvals",
          position: { top: "40%", right: "-25%" },
          icon: <Settings className="h-4 w-4" />,
          delay: "1s"
        },
        {
          text: "Order & Job Tracking",
          position: { bottom: "25%", left: "-25%" },
          icon: <UserCheck className="h-4 w-4" />,
          delay: "1.5s"
        }
      ]}
      seoKeywords="digital proof approvals, quick proof creation, customer portal garment decoration, embroidery proof approval, DTG proof review, licensed team gear ordering, team gear customization portal"
      stats={[
        {
          value: "85%",
          label: "Increase in Client Satisfaction",
          icon: <CheckCircle className="h-8 w-8 text-green-500" />
        },
        {
          value: "40%",
          label: "Reduction in Proof Revision Cycles",
          icon: <MessageSquare className="h-8 w-8 text-green-500" />
        },
        {
          value: "30%",
          label: "Faster Payment Processing",
          icon: <CreditCard className="h-8 w-8 text-green-500" />
        },
        {
          value: "24/7",
          label: "Client Proof Access & Self-Service",
          icon: <Clock className="h-8 w-8 text-green-500" />
        }
      ]}
      mainSection={{
        title: "Digital Proof Approvals & Customer Self-Service Portal",
        description: "Empower your garment decoration customers with a branded portal for digital proof approvals with comments, real-time order tracking, licensed team gear ordering, and team gear customization. Reduce proof revision cycles and support inquiries while accelerating approvals."
      }}
      keyFeatures={{
        title: "Comprehensive Proof Approval & Client Engagement",
        description: "Everything you need to manage digital proofs and deliver an exceptional garment decoration client experience",
        features: [
          {
            title: "Digital Proof Approvals",
            description: "Quick proof creation with customer review, comments, and approval workflows for embroidery, DTG, DTF, screen printing, and heat seal designs.",
            icon: <FileText className="h-6 w-6" />
          },
          {
            title: "Integrated Payment System",
            description: "Enable clients to view invoices, make payments, and manage payment methods with secure payment processing for garment decoration orders.",
            icon: <CreditCard className="h-6 w-6" />
          },
          {
            title: "Real-time Messaging",
            description: "Provide direct communication channels for proof feedback with threaded conversations, file sharing, and notification preferences.",
            icon: <MessageSquare className="h-6 w-6" />
          },
          {
            title: "Order & Production Tracking",
            description: "Keep clients informed with real-time order updates, production milestones, and delivery tracking for embroidery, DTG/DTF & screen print jobs.",
            icon: <Calendar className="h-6 w-6" />
          },
          {
            title: "White-Label Branding",
            description: "Customize the portal with your brand colors, logo, domain, and personalized messaging for a seamless garment decoration client experience.",
            icon: <PenTool className="h-6 w-6" />
          },
          {
            title: "Licensed Team Gear Ordering",
            description: "Enable team gear customization and licensed team gear ordering with logo selection, size management, and roster-based ordering workflows.",
            icon: <Settings className="h-6 w-6" />
          }
        ]
      }}
      specialSection={{
        title: "Built for Garment Decoration Client Management",
        subtitle: "Built for Efficiency",
        description: "Customer portal designed for embroidery, DTG, DTF, screen printing & heat seal businesses with integrated proof approval workflows.",
        items: [
          { text: "End-to-end order tracking from proof approval through production to shipping", icon: <File className="h-5 w-5" /> },
          { text: "Embroidery Wilcom EMB/DST rendering previews for customer review", icon: <Cpu className="h-5 w-5" /> },
          { text: "Licensed team gear ordering with roster management and size collection", icon: <UserCheck className="h-5 w-5" /> },
          { text: "Quality checkpoints visible to customers for transparency", icon: <CheckCircle className="h-5 w-5" /> },
          { text: "Complete audit trails of proof approvals, comments, and revisions", icon: <FileText className="h-5 w-5" /> },
          { text: "PLM and ERP integration for seamless order-to-production flow", icon: <Settings className="h-5 w-5" /> }
        ]
      }}
      ctaSection={{
        title: "Ready to Streamline Proof Approvals?",
        description: "Join garment decorators who have transformed client relationships with digital proof approvals and self-service ordering.",
        primaryButtonText: "Get Started",
        primaryButtonLink: "/get-started",
        secondaryButtonText: "Schedule Demo",
        secondaryButtonLink: "/pricing"
      }}
      relatedModules={[
        {
          title: "Customer Database",
          icon: <FileText className="h-8 w-8" />,
          description: "Store all customer details, communication logs, and garment decoration order history in one searchable profile.",
          link: "/modules/customer-database"
        },
        {
          title: "Sales & Orders",
          icon: <Calendar className="h-8 w-8" />,
          description: "Manage incoming garment decoration orders, quotes, and job details in one streamlined dashboard.",
          link: "/modules/sales-orders"
        },
        {
          title: "Artworkers",
          icon: <CreditCard className="h-8 w-8" />,
          description: "Assign artwork tasks, manage proof creation, and ensure timely delivery for every garment decoration order.",
          link: "/modules/artworkers"
        }
      ]}
    />
  );
};

export default CustomerPortal;
