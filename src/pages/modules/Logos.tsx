
import ModuleLayout from "@/components/modules/ModuleLayout";
import { Image, Share2, Tags, Users, Search, Shield, Folder, Clock, Lock, Briefcase, Edit, History, Smartphone, CheckCircle, BarChart2, RefreshCw } from "lucide-react";

const Logos = () => {
  return (
    <ModuleLayout
      title="Logos"
      description="Cloud-based embroidery logo management with EMB/DST files, print separation files, version tracking, and direct machine delivery for garment decoration."
      color="purple"
      heroImage="/lovable-uploads/8286bf20-d222-4f89-8b71-0dcf23a14319.png"
      heroImageCallouts={[
        {
          text: "Embroidery File Browser",
          position: { top: "15%", left: "-20%" },
          icon: <Search className="h-4 w-4" />,
          delay: "0.5s"
        },
        {
          text: "Print Separation Files",
          position: { top: "35%", right: "-20%" },
          icon: <Tags className="h-4 w-4" />,
          delay: "1s"
        },
        {
          text: "Logo Status & Approvals",
          position: { bottom: "20%", left: "-20%" },
          icon: <CheckCircle className="h-4 w-4" />,
          delay: "1.5s"
        }
      ]}
      seoKeywords="embroidery logo software, cloud logo management, print separation files, EMB DST file management, logo version tracking, garment decoration logo system, embroidery machine delivery, Barudan Tajima integration"
      stats={[
        {
          value: "65%",
          label: "Reduction in Logo Search Time",
          icon: <Clock className="h-8 w-8 text-gold" />
        },
        {
          value: "10k+",
          label: "Average Logos Managed Per Client",
          icon: <Image className="h-8 w-8 text-gold" />
        },
        {
          value: "99.9%",
          label: "Cloud Platform Availability",
          icon: <CheckCircle className="h-8 w-8 text-gold" />
        },
        {
          value: "42%",
          label: "Improvement in Brand Consistency",
          icon: <Shield className="h-8 w-8 text-gold" />
        }
      ]}
      mainSection={{
        title: "Advanced Logo Management for Garment Decoration",
        description: "The ultimate embroidery logo software providing a central repository for all customer logos, EMB/DST embroidery files, and print separation files. Deliver logos directly to embroidery machines via bNET/Pulse, send images to DTG/DTF printers, and manage screen burning files — all from one cloud platform."
      }}
      keyFeatures={{
        title: "Comprehensive Embroidery & Print Logo Management",
        description: "Everything you need to manage logos across embroidery, DTG, DTF, screen printing & heat seal workflows",
        features: [
          {
            title: "Centralized Logo Repository",
            description: "Store embroidery files (EMB, DST), print separation files, and brand assets in one secure cloud location accessible from anywhere.",
            icon: <Folder className="h-6 w-6" />
          },
          {
            title: "Detailed Version Control",
            description: "Track changes with complete version history, digital proof approval workflows, and the ability to restore previous logo versions.",
            icon: <History className="h-6 w-6" />
          },
          {
            title: "Advanced Logo Organization",
            description: "Organize files with customizable metadata, tags, categories, and AI-powered auto-tagging for effortless searching across decoration methods.",
            icon: <Tags className="h-6 w-6" />
          },
          {
            title: "Granular Access Control",
            description: "Control who can view, download, and modify logos with user roles, permissions, and approval workflows for garment decoration teams.",
            icon: <Lock className="h-6 w-6" />
          },
          {
            title: "Machine-Ready Distribution",
            description: "Deliver logos directly to embroidery machines (Barudan/Tajima), DTG printers, DTF systems, and screen burners with barcode integrations.",
            icon: <Share2 className="h-6 w-6" />
          },
          {
            title: "Format Conversion for Decoration Methods",
            description: "Automatically generate logos in multiple formats for embroidery, DTG printing, DTF transfers, screen printing, and heat seal applications.",
            icon: <Edit className="h-6 w-6" />
          }
        ]
      }}
      specialSection={{
        title: "Enterprise Embroidery & Print Logo Management",
        subtitle: "Beyond Storage",
        description: "Cloud logo management that goes beyond storage to power your entire garment decoration workflow.",
        items: [
          { text: "Digital brand guidelines with logo usage instructions for each decoration method", icon: <Briefcase className="h-5 w-5" /> },
          { text: "Logo usage analytics showing how embroidery and print assets are utilized", icon: <BarChart2 className="h-5 w-5" /> },
          { text: "Simplified distribution to production teams, artworkers, and embroidery machines", icon: <Users className="h-5 w-5" /> },
          { text: "Mobile access for on-the-go logo management and proof approvals", icon: <Smartphone className="h-5 w-5" /> },
          { text: "Automated format conversion for embroidery, DTG, DTF, screen print & heat seal", icon: <RefreshCw className="h-5 w-5" /> },
          { text: "Brand protection with watermarking, licensed team gear compliance, and usage tracking", icon: <Shield className="h-5 w-5" /> }
        ]
      }}
      ctaSection={{
        title: "Ready to Transform Your Logo Management?",
        description: "Join garment decorators managing embroidery logos, print files, and digital proofs with our cloud-based Logo module.",
        primaryButtonText: "Get Started",
        primaryButtonLink: "/get-started",
        secondaryButtonText: "Request Demo",
        secondaryButtonLink: "/pricing"
      }}
      relatedModules={[
        {
          title: "Product Designer",
          icon: <Image className="h-8 w-8" />,
          description: "Seamlessly integrate logos into garment decoration product design workflows.",
          link: "/modules/product-designer"
        },
        {
          title: "Artworkers",
          icon: <Edit className="h-8 w-8" />,
          description: "Assign artwork tasks and manage digital proof approvals for customer logos.",
          link: "/modules/artworkers"
        },
        {
          title: "Customer Portal",
          icon: <Users className="h-8 w-8" />,
          description: "Give customers access to review and approve logos, proofs, and garment designs.",
          link: "/modules/customer-portal"
        }
      ]}
    />
  );
};

export default Logos;
