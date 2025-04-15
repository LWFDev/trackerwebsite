
import ModuleLayout from "@/components/modules/ModuleLayout";
import { Image, Share2, Tags, Users, Search, Shield, Globe, UploadCloud, Folder, Clock, File, Download, Lock, Briefcase, Edit, History, Smartphone, CheckCircle, BarChart2, RefreshCw } from "lucide-react";

const LogoManagement = () => {
  return (
    <ModuleLayout
      title="Logo Management"
      description="Upload, categorize, and manage customer logos and artwork files with built-in version tracking."
      color="purple"
      stats={[
        {
          value: "65%",
          label: "Reduction in Logo Search Time",
          icon: <Clock className="h-8 w-8 text-gold-DEFAULT" />
        },
        {
          value: "10k+",
          label: "Average Assets Managed Per Client",
          icon: <Image className="h-8 w-8 text-gold-DEFAULT" />
        },
        {
          value: "99.9%",
          label: "Platform Availability",
          icon: <CheckCircle className="h-8 w-8 text-gold-DEFAULT" />
        },
        {
          value: "42%",
          label: "Improvement in Brand Consistency",
          icon: <Shield className="h-8 w-8 text-gold-DEFAULT" />
        }
      ]}
      mainSection={{
        title: "The Ultimate Brand Asset Management Solution",
        description: "Logo Management provides a central repository for all your customer logos and artwork, ensuring everyone in your organization has access to the right files in the right formats, every time."
      }}
      keyFeatures={{
        title: "Comprehensive Brand Asset Management",
        description: "Everything you need to organize, manage, and distribute your customer artwork",
        features: [
          {
            title: "Centralized Asset Repository",
            description: "Store logos, images, vectors, and artwork in one secure, organized location accessible from anywhere.",
            icon: <Folder className="h-6 w-6" />
          },
          {
            title: "Detailed Version Control",
            description: "Track changes with complete version history, approval workflows, and the ability to restore previous versions.",
            icon: <History className="h-6 w-6" />
          },
          {
            title: "Advanced Asset Organization",
            description: "Organize files with customizable metadata, tags, categories, and AI-powered auto-tagging for effortless searching.",
            icon: <Tags className="h-6 w-6" />
          },
          {
            title: "Granular Access Control",
            description: "Control who can view, download, and modify assets with user roles, permissions, and approval workflows.",
            icon: <Lock className="h-6 w-6" />
          },
          {
            title: "Seamless Asset Distribution",
            description: "Share assets internally or externally with secure, trackable links, expiration dates, and usage analytics.",
            icon: <Share2 className="h-6 w-6" />
          },
          {
            title: "Format Conversion & Resizing",
            description: "Automatically generate assets in multiple formats and sizes for different production methods and applications.",
            icon: <Edit className="h-6 w-6" />
          }
        ]
      }}
      specialSection={{
        title: "Enterprise Brand Management",
        subtitle: "Beyond Storage",
        description: "Our platform goes beyond simple asset storage to provide comprehensive artwork management capabilities.",
        items: [
          { text: "Customer-specific artwork catalogs with usage history", icon: <Briefcase className="h-5 w-5" /> },
          { text: "Artwork usage analytics showing placement and frequency", icon: <BarChart2 className="h-5 w-5" /> },
          { text: "Simplified distribution to production teams and departments", icon: <Users className="h-5 w-5" /> },
          { text: "Mobile access with our dedicated app for on-the-go brand management", icon: <Smartphone className="h-5 w-5" /> },
          { text: "Automated format conversion for different production methods", icon: <RefreshCw className="h-5 w-5" /> },
          { text: "Brand protection with watermarking and usage tracking", icon: <Shield className="h-5 w-5" /> }
        ]
      }}
      ctaSection={{
        title: "Ready to Transform Your Logo Management?",
        description: "Join thousands of businesses that manage their customer artwork effectively with Logo Management.",
        primaryButtonText: "Start Free Trial",
        primaryButtonLink: "/get-started",
        secondaryButtonText: "Request Demo",
        secondaryButtonLink: "/pricing"
      }}
      relatedModules={[
        {
          title: "Product Designer",
          icon: <File className="h-8 w-8" />,
          description: "Use managed logos directly in your product design workflow.",
          link: "/modules/product-designer"
        },
        {
          title: "Artworkers",
          icon: <Image className="h-8 w-8" />,
          description: "Assign artwork tasks and manage the artwork approval process.",
          link: "/modules/artworkers"
        },
        {
          title: "Customer Portal",
          icon: <Folder className="h-8 w-8" />,
          description: "Let customers access and approve their logos and artwork.",
          link: "/modules/customer-portal"
        }
      ]}
    />
  );
};

export default LogoManagement;
