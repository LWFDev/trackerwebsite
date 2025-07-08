
import ModuleLayout from "@/components/modules/ModuleLayout";
import { Image, Share2, Tags, Users, Search, Shield, Globe, UploadCloud, Folder, Clock, File, Download, Lock, Briefcase, Edit, History, Smartphone, CheckCircle, BarChart2, RefreshCw } from "lucide-react";

const LogoHub = () => {
  return (
    <ModuleLayout
      title="Logo Hub"
      description="Centralize and manage all your brand assets in one secure platform with powerful organization, collaboration, and distribution features."
      color="purple"
      heroImage="/lovable-uploads/9a36183f-4238-4b3a-b0e0-43a4488f0214.png"
      heroImageCallouts={[
        {
          text: "Logo Browser",
          position: { top: "15%", left: "-20%" },
          icon: <Image className="h-4 w-4" />,
          delay: "0.5s"
        },
        {
          text: "Asset Organization",
          position: { top: "35%", right: "-20%" },
          icon: <Folder className="h-4 w-4" />,
          delay: "0.7s"
        },
        {
          text: "Approval Workflow",
          position: { top: "55%", left: "-15%" },
          icon: <CheckCircle className="h-4 w-4" />,
          delay: "0.9s"
        },
        {
          text: "Brand Management",
          position: { top: "75%", right: "-15%" },
          icon: <Shield className="h-4 w-4" />,
          delay: "1.1s"
        }
      ]}
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
        description: "Logo Hub provides a central repository for all your brand assets, ensuring everyone in your organization has access to the right files in the right formats, every time."
      }}
      keyFeatures={{
        title: "Comprehensive Brand Asset Management",
        description: "Everything you need to organize, manage, and distribute your brand assets",
        features: [
          {
            title: "Centralized Asset Repository",
            description: "Store logos, images, videos, fonts, and brand guidelines in one secure, organized location accessible from anywhere.",
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
            description: "Automatically generate assets in multiple formats and sizes for different channels and use cases.",
            icon: <Edit className="h-6 w-6" />
          }
        ]
      }}
      specialSection={{
        title: "Enterprise Brand Management",
        subtitle: "Beyond Storage",
        description: "Our platform goes beyond simple asset storage to provide comprehensive brand management capabilities.",
        items: [
          { text: "Digital brand guidelines with asset context and usage instructions", icon: <Briefcase className="h-5 w-5" /> },
          { text: "Brand usage analytics showing how assets are being utilized", icon: <BarChart2 className="h-5 w-5" /> },
          { text: "Simplified distribution to external partners and vendors", icon: <Users className="h-5 w-5" /> },
          { text: "Mobile access with our dedicated app for on-the-go brand management", icon: <Smartphone className="h-5 w-5" /> },
          { text: "Automated format conversion for different platforms and media", icon: <RefreshCw className="h-5 w-5" /> },
          { text: "Brand protection with watermarking and usage tracking", icon: <Shield className="h-5 w-5" /> }
        ]
      }}
      ctaSection={{
        title: "Ready to Transform Your Brand Asset Management?",
        description: "Join thousands of businesses that manage their brand identity effectively with Logo Hub.",
        primaryButtonText: "Start Free Trial",
        primaryButtonLink: "/get-started",
        secondaryButtonText: "Request Demo",
        secondaryButtonLink: "/pricing"
      }}
      relatedModules={[
        {
          title: "Document Management",
          icon: <File className="h-8 w-8" />,
          description: "Extend your asset management to all company documents and files.",
          link: "/modules/document-management"
        },
        {
          title: "Product Design",
          icon: <Image className="h-8 w-8" />,
          description: "Seamlessly integrate brand assets into your product design workflow.",
          link: "/modules/product-design"
        },
        {
          title: "Project Management",
          icon: <Folder className="h-8 w-8" />,
          description: "Incorporate brand assets directly into your project workflows.",
          link: "/modules/project-management"
        }
      ]}
    />
  );
};

export default LogoHub;
