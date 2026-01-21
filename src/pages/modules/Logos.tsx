import ModuleLayout from "@/components/modules/ModuleLayout";
import { Image, Share2, Tags, Users, Search, Shield, Globe, UploadCloud, Folder, Clock, File, Download, Lock, Briefcase, Edit, History, Smartphone, CheckCircle, BarChart2, RefreshCw } from "lucide-react";
import logosHero from "@/assets/modules/logos-hero.jpg";

const Logos = () => {
  return (
    <ModuleLayout
      title="Logos"
      description="Upload, categorize, and manage customer logos and artwork files with built-in version tracking."
      color="purple"
      heroImage={logosHero}
      heroImageCallouts={[
        {
          text: "Logo Library Browser",
          position: { top: "15%", left: "-20%" },
          icon: <Search className="h-4 w-4" />,
          delay: "0.5s"
        },
        {
          text: "Advanced Filtering System",
          position: { top: "35%", right: "-20%" },
          icon: <Tags className="h-4 w-4" />,
          delay: "1s"
        },
        {
          text: "Logo Status Management",
          position: { bottom: "20%", left: "-20%" },
          icon: <CheckCircle className="h-4 w-4" />,
          delay: "1.5s"
        }
      ]}
      stats={[
        {
          value: "65%",
          label: "Reduction in Logo Search Time",
          icon: <Clock className="h-8 w-8 text-gold" />
        },
        {
          value: "10k+",
          label: "Average Assets Managed Per Client",
          icon: <Image className="h-8 w-8 text-gold" />
        },
        {
          value: "99.9%",
          label: "Platform Availability",
          icon: <CheckCircle className="h-8 w-8 text-gold" />
        },
        {
          value: "42%",
          label: "Improvement in Brand Consistency",
          icon: <Shield className="h-8 w-8 text-gold" />
        }
      ]}
      mainSection={{
        title: "The Ultimate Logo Management Solution",
        description: "Logos provides a central repository for all your customer brand assets, ensuring everyone in your organization has access to the right files in the right formats, every time."
      }}
      keyFeatures={{
        title: "Comprehensive Logo Management",
        description: "Everything you need to organize, manage, and utilize customer logos",
        features: [
          {
            title: "Centralized Logo Repository",
            description: "Store logos, images, and brand assets in one secure, organized location accessible from anywhere.",
            icon: <Folder className="h-6 w-6" />
          },
          {
            title: "Detailed Version Control",
            description: "Track changes with complete version history, approval workflows, and the ability to restore previous versions.",
            icon: <History className="h-6 w-6" />
          },
          {
            title: "Advanced Logo Organization",
            description: "Organize files with customizable metadata, tags, categories, and AI-powered auto-tagging for effortless searching.",
            icon: <Tags className="h-6 w-6" />
          },
          {
            title: "Granular Access Control",
            description: "Control who can view, download, and modify assets with user roles, permissions, and approval workflows.",
            icon: <Lock className="h-6 w-6" />
          },
          {
            title: "Seamless Logo Distribution",
            description: "Share assets internally or externally with secure, trackable links, expiration dates, and usage analytics.",
            icon: <Share2 className="h-6 w-6" />
          },
          {
            title: "Format Conversion & Resizing",
            description: "Automatically generate assets in multiple formats and sizes for different decoration methods and use cases.",
            icon: <Edit className="h-6 w-6" />
          }
        ]
      }}
      specialSection={{
        title: "Enterprise Brand Management",
        subtitle: "Beyond Storage",
        description: "Our platform goes beyond simple logo storage to provide comprehensive logo management capabilities.",
        items: [
          { text: "Digital brand guidelines with asset context and usage instructions", icon: <Briefcase className="h-5 w-5" /> },
          { text: "Logo usage analytics showing how assets are being utilized", icon: <BarChart2 className="h-5 w-5" /> },
          { text: "Simplified distribution to production teams and artworkers", icon: <Users className="h-5 w-5" /> },
          { text: "Mobile access with our dedicated app for on-the-go logo management", icon: <Smartphone className="h-5 w-5" /> },
          { text: "Automated format conversion for different decoration methods", icon: <RefreshCw className="h-5 w-5" /> },
          { text: "Brand protection with watermarking and usage tracking", icon: <Shield className="h-5 w-5" /> }
        ]
      }}
      ctaSection={{
        title: "Ready to Transform Your Logo Management?",
        description: "Join thousands of businesses that manage their customer logos effectively with our Logo module.",
        primaryButtonText: "Get Started",
        primaryButtonLink: "/get-started",
        secondaryButtonText: "Request Demo",
        secondaryButtonLink: "/pricing"
      }}
      relatedModules={[
        {
          title: "Product Designer",
          icon: <Image className="h-8 w-8" />,
          description: "Seamlessly integrate logos into your product design workflow.",
          link: "/modules/product-designer"
        },
        {
          title: "Artworkers",
          icon: <Edit className="h-8 w-8" />,
          description: "Assign artwork tasks and manage approvals for customer logos.",
          link: "/modules/artworkers"
        },
        {
          title: "Customer Portal",
          icon: <Users className="h-8 w-8" />,
          description: "Give customers access to review and approve their logos and designs.",
          link: "/modules/customer-portal"
        }
      ]}
    />
  );
};

export default Logos;
