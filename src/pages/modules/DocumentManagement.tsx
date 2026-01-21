
import ModuleLayout from "@/components/modules/ModuleLayout";
import { FileText, Search, Lock, Users, Share2, Clock, UploadCloud, Tags, CheckCircle, Shield, File, Database, History, Edit, Download, PenTool, Layers, Smartphone } from "lucide-react";

const DocumentManagement = () => {
  return (
    <ModuleLayout
      title="Document Management"
      description="Store, organize, and share documents securely across your organization with our enterprise-grade document management system."
      color="orange"
      stats={[
        {
          value: "60%",
          label: "Reduction in Document Search Time",
          icon: <Clock className="h-8 w-8 text-orange-500" />
        },
        {
          value: "1M+",
          label: "Documents Managed Per Enterprise Client",
          icon: <FileText className="h-8 w-8 text-orange-500" />
        },
        {
          value: "99.99%",
          label: "Platform Uptime Guarantee",
          icon: <CheckCircle className="h-8 w-8 text-orange-500" />
        },
        {
          value: "45%",
          label: "Improvement in Team Collaboration",
          icon: <Users className="h-8 w-8 text-orange-500" />
        }
      ]}
      mainSection={{
        title: "Enterprise Document Management Simplified",
        description: "Our Document Management system provides a comprehensive solution for storing, organizing, and collaborating on all your important business documents with enterprise-grade security and powerful search capabilities."
      }}
      keyFeatures={{
        title: "Comprehensive Document Control",
        description: "Everything you need to efficiently manage your organization's documents",
        features: [
          {
            title: "Intelligent Document Repository",
            description: "Store all document types with unlimited storage, automatic OCR, and content indexing for powerful searchability.",
            icon: <UploadCloud className="h-6 w-6" />
          },
          {
            title: "Advanced Search & Discovery",
            description: "Find documents instantly with full-text search, filters, saved searches, and AI-powered content recognition.",
            icon: <Search className="h-6 w-6" />
          },
          {
            title: "Comprehensive Version Control",
            description: "Track document changes with complete version history, comparison tools, and the ability to restore previous versions.",
            icon: <History className="h-6 w-6" />
          },
          {
            title: "Enterprise-Grade Security",
            description: "Protect sensitive information with granular access controls, encryption, and detailed audit trails.",
            icon: <Lock className="h-6 w-6" />
          },
          {
            title: "Smart Document Organization",
            description: "Organize files with customizable metadata, automated tagging, and intelligent categorization for intuitive navigation.",
            icon: <Tags className="h-6 w-6" />
          },
          {
            title: "Secure Collaboration Tools",
            description: "Collaborate effectively with document sharing, annotations, approvals, and real-time co-editing capabilities.",
            icon: <Share2 className="h-6 w-6" />
          }
        ]
      }}
      specialSection={{
        title: "Built for Enterprise Compliance",
        subtitle: "Security & Compliance",
        description: "Our platform meets the most stringent security and compliance requirements for organizations of all sizes.",
        items: [
          { text: "End-to-end encryption for all documents in transit and at rest", icon: <Shield className="h-5 w-5" /> },
          { text: "Customizable retention policies and legal holds", icon: <Clock className="h-5 w-5" /> },
          { text: "Comprehensive audit logs and compliance reporting", icon: <FileText className="h-5 w-5" /> },
          { text: "Multi-factor authentication and SSO integration", icon: <Lock className="h-5 w-5" /> },
          { text: "Advanced data loss prevention capabilities", icon: <Shield className="h-5 w-5" /> },
          { text: "Compliance with GDPR, HIPAA, SOC 2, and other standards", icon: <CheckCircle className="h-5 w-5" /> }
        ]
      }}
      ctaSection={{
        title: "Ready to Transform Your Document Management?",
        description: "Join thousands of organizations that manage their documents securely and efficiently with our platform.",
        primaryButtonText: "Get Started",
        primaryButtonLink: "/get-started",
        secondaryButtonText: "Request Demo",
        secondaryButtonLink: "/pricing"
      }}
      relatedModules={[
        {
          title: "Project Management",
          icon: <FileText className="h-8 w-8" />,
          description: "Seamlessly integrate documents with project workflows and team collaboration.",
          link: "/modules/project-management"
        },
        {
          title: "Logo Hub",
          icon: <File className="h-8 w-8" />,
          description: "Manage brand assets alongside your documents for consistent brand identity.",
          link: "/modules/logo-hub"
        },
        {
          title: "Customer Portal",
          icon: <Users className="h-8 w-8" />,
          description: "Share documents securely with customers through a branded portal.",
          link: "/modules/customer-portal"
        }
      ]}
    />
  );
};

export default DocumentManagement;
