
import ModuleLayout from "@/components/modules/ModuleLayout";
import { Image, Share2, Tags, Users, Search, Shield, Globe, UploadCloud, Folder, Clock, File } from "lucide-react";
import Footer from "@/components/landing/Footer";

const LogoHub = () => {
  return (
    <>
      <ModuleLayout
        title="Logo Hub"
        description="Centralize and manage all your brand logos in one place with powerful organization and sharing capabilities."
        color="purple"
        stats={[
          {
            value: "65%",
            label: "Time saved on logo searches",
            icon: <Clock className="h-8 w-8 text-purple-500" />
          },
          {
            value: "10k+",
            label: "Logos managed per account",
            icon: <Image className="h-8 w-8 text-purple-500" />
          },
          {
            value: "99.9%",
            label: "Uptime for logo access",
            icon: <Users className="h-8 w-8 text-purple-500" />
          },
          {
            value: "42%",
            label: "Reduction in brand inconsistencies",
            icon: <Shield className="h-8 w-8 text-purple-500" />
          }
        ]}
        mainSection={{
          title: "Central Brand Asset Management",
          description: "Keep all your brand assets organized, accessible, and consistent across your organization."
        }}
        keyFeatures={{
          title: "Key Features",
          description: "Everything you need to efficiently manage your logo and brand assets",
          features: [
            {
              title: "Centralized Storage",
              description: "Store all your logos and brand assets in one secure, accessible location.",
              icon: <Folder className="h-6 w-6" />
            },
            {
              title: "Version Control",
              description: "Track changes and maintain version history for all your logo files.",
              icon: <Clock className="h-6 w-6" />
            },
            {
              title: "Intelligent Tagging",
              description: "Organize logos with custom tags and metadata for easy searching and filtering.",
              icon: <Tags className="h-6 w-6" />
            },
            {
              title: "Role-Based Access",
              description: "Control who can view, download, and modify logos with granular permissions.",
              icon: <Users className="h-6 w-6" />
            },
            {
              title: "Instant Sharing",
              description: "Share logos internally or externally with secure, trackable links.",
              icon: <Share2 className="h-6 w-6" />
            },
            {
              title: "Global Accessibility",
              description: "Access your logos from anywhere with our cloud-based platform.",
              icon: <Globe className="h-6 w-6" />
            }
          ]
        }}
        specialSection={{
          title: "Brand Consistency Made Simple",
          description: "Ensure your brand is represented consistently across all channels with our comprehensive logo management system.",
          items: [
            { text: "Maintain brand guidelines alongside logo assets", icon: <Users className="h-5 w-5" /> },
            { text: "Track logo usage and provide analytics on brand consistency", icon: <Users className="h-5 w-5" /> },
            { text: "Simplify logo distribution to partners and vendors", icon: <Users className="h-5 w-5" /> },
            { text: "Automatic format conversion for different platforms and media", icon: <Users className="h-5 w-5" /> },
            { text: "Protect brand identity with watermarking and usage tracking", icon: <Users className="h-5 w-5" /> }
          ]
        }}
        ctaSection={{
          title: "Ready to Organize Your Brand Assets?",
          description: "Join thousands of businesses that manage their brand identity effectively with Logo Hub.",
          primaryButtonText: "Get Started Today",
          secondaryButtonText: "Request Demo"
        }}
        relatedModules={[
          {
            title: "Document Management",
            icon: <File className="h-8 w-8" />,
            description: "Store, organize, and share documents securely across your organization.",
            link: "/modules/document-management"
          },
          {
            title: "Product Design",
            icon: <Image className="h-8 w-8" />,
            description: "Create and manage product designs with powerful customization tools.",
            link: "/modules/product-design"
          },
          {
            title: "Project Management",
            icon: <File className="h-8 w-8" />,
            description: "Plan, track, and manage projects with ease.",
            link: "/modules/project-management"
          }
        ]}
      />
    </>
  );
};

export default LogoHub;
