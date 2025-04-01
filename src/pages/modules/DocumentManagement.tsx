
import ModuleLayout from "@/components/modules/ModuleLayout";
import { FileText, Search, Lock, Users, Share2, Clock, UploadCloud, Tags, CheckCircle, Shield, File } from "lucide-react";

const DocumentManagement = () => {
  return (
    <ModuleLayout
      title="Document Management"
      description="Store, organize, and share documents securely across your organization with our powerful document management system."
      color="orange"
      stats={[
        {
          value: "60%",
          label: "Less time spent searching for documents",
          icon: <Clock className="h-8 w-8 text-orange-500" />
        },
        {
          value: "1M+",
          label: "Documents stored securely",
          icon: <FileText className="h-8 w-8 text-orange-500" />
        },
        {
          value: "99.99%",
          label: "Uptime for document access",
          icon: <CheckCircle className="h-8 w-8 text-orange-500" />
        },
        {
          value: "45%",
          label: "Increase in team collaboration",
          icon: <Users className="h-8 w-8 text-orange-500" />
        }
      ]}
      mainSection={{
        title: "Document Management Made Simple",
        description: "Our Document Management system provides everything you need to organize, secure, and collaborate on your important files."
      }}
      keyFeatures={{
        title: "Key Features",
        description: "Everything you need to efficiently manage your documents",
        features: [
          {
            title: "Centralized Storage",
            description: "Store all your documents in one secure, accessible location with unlimited storage.",
            icon: <UploadCloud className="h-6 w-6" />
          },
          {
            title: "Advanced Search",
            description: "Find documents instantly with powerful full-text search and filters.",
            icon: <Search className="h-6 w-6" />
          },
          {
            title: "Version Control",
            description: "Track changes and maintain version history for all your documents.",
            icon: <FileText className="h-6 w-6" />
          },
          {
            title: "Role-Based Access",
            description: "Control who can view, edit, and share documents with granular permissions.",
            icon: <Lock className="h-6 w-6" />
          },
          {
            title: "Intelligent Organization",
            description: "Organize documents with folders, tags, and metadata for intuitive navigation.",
            icon: <Tags className="h-6 w-6" />
          },
          {
            title: "Secure Sharing",
            description: "Share documents internally or externally with secure, trackable links.",
            icon: <Share2 className="h-6 w-6" />
          }
        ]
      }}
      specialSection={{
        title: "Enterprise-Grade Security",
        description: "Keep your sensitive documents safe with our comprehensive security features.",
        items: [
          { text: "End-to-end encryption for all documents", icon: <CheckCircle className="h-5 w-5" /> },
          { text: "Customizable retention policies", icon: <CheckCircle className="h-5 w-5" /> },
          { text: "Detailed audit logs and compliance reporting", icon: <CheckCircle className="h-5 w-5" /> },
          { text: "Two-factor authentication", icon: <CheckCircle className="h-5 w-5" /> },
          { text: "Data loss prevention", icon: <CheckCircle className="h-5 w-5" /> },
          { text: "GDPR and CCPA compliance", icon: <CheckCircle className="h-5 w-5" /> }
        ]
      }}
      ctaSection={{
        title: "Ready to Organize Your Documents?",
        description: "Join thousands of businesses that manage their documents efficiently with NuboSync.",
        primaryButtonText: "Get Started Today",
        secondaryButtonText: "Request Demo"
      }}
      relatedModules={[
        {
          title: "Project Management",
          icon: <FileText className="h-8 w-8" />,
          description: "Plan, track, and manage projects with ease.",
          link: "/modules/project-management"
        },
        {
          title: "Logo Hub",
          icon: <FileText className="h-8 w-8" />,
          description: "Centralize and manage all your brand logos in one place.",
          link: "/modules/logo-hub"
        },
        {
          title: "Customer Portal",
          icon: <Users className="h-8 w-8" />,
          description: "Provide your customers with a self-service portal for support and information.",
          link: "/modules/customer-portal"
        }
      ]}
    />
  );
};

export default DocumentManagement;
