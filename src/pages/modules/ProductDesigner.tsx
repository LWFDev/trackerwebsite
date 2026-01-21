
import ModuleLayout from "@/components/modules/ModuleLayout";
import { Paintbrush, Clock, Image, Layout, Share2, FileOutput, Star, File, CheckCircle, Users, Layers, Grid, Monitor, Palette, Settings, Sliders, MousePointer2, Type } from "lucide-react";

const ProductDesigner = () => {
  return (
    <ModuleLayout
      title="Product Designer"
      description="Allow users to customize garments visually with drag-and-drop logos, text, and artwork placements."
      color="teal"
      heroImage="https://nubosync.com/wp-content/uploads/2025/04/Screenshot-2025-04-02-101424.png"
      heroImageCallouts={[
        {
          text: "Drag-and-Drop Editor",
          position: { top: "20%", left: "-20%" },
          icon: <MousePointer2 className="h-4 w-4" />,
          delay: "0.5s"
        },
        {
          text: "Template Gallery",
          position: { top: "40%", right: "-20%" },
          icon: <Grid className="h-4 w-4" />,
          delay: "0.7s"
        },
        {
          text: "Text & Logo Tools",
          position: { top: "65%", left: "-15%" },
          icon: <Type className="h-4 w-4" />,
          delay: "0.9s"
        },
        {
          text: "Export Options",
          position: { top: "80%", right: "-15%" },
          icon: <FileOutput className="h-4 w-4" />,
          delay: "1.1s"
        }
      ]}
      stats={[
        {
          value: "85%",
          label: "Time Saved on Design Creation",
          icon: <Clock className="h-8 w-8 text-teal-500" />
        },
        {
          value: "1,000+",
          label: "Professional Templates",
          icon: <Layout className="h-8 w-8 text-teal-500" />
        },
        {
          value: "12,000+",
          label: "Active Users Worldwide",
          icon: <Users className="h-8 w-8 text-teal-500" />
        },
        {
          value: "4.9/5",
          label: "Customer Satisfaction Rating",
          icon: <Star className="h-8 w-8 text-teal-500" />
        }
      ]}
      mainSection={{
        title: "Design Stunning Products in Minutes",
        description: "Whether you're creating custom garments, promotional items, or branded merchandise, our designer makes it fast and easy to produce professional results that impress."
      }}
      keyFeatures={{
        title: "Powerful Design Tools",
        description: "Everything you need to create stunning custom products",
        features: [
          {
            title: "Intuitive Drag-and-Drop Editor",
            description: "Create stunning designs with our intuitive interface that requires no design skills or software training.",
            icon: <Layout className="h-6 w-6" />
          },
          {
            title: "Premium Template Library",
            description: "Access professionally designed templates for apparel, promotional products, signage, and more.",
            icon: <Grid className="h-6 w-6" />
          },
          {
            title: "Seamless Logo Integration",
            description: "Import logos and artwork directly from Logos or your computer for instant use.",
            icon: <Image className="h-6 w-6" />
          },
          {
            title: "Real-time Collaboration",
            description: "Work together with team members and clients through shared projects, comments, and approval workflows.",
            icon: <Users className="h-6 w-6" />
          },
          {
            title: "Smart Approval System",
            description: "Streamline the review process with customizable approval workflows, version tracking, and feedback tools.",
            icon: <CheckCircle className="h-6 w-6" />
          },
          {
            title: "Versatile Export Options",
            description: "Export your designs in multiple formats (PNG, JPG, PDF, SVG) and resolutions for any use case.",
            icon: <FileOutput className="h-6 w-6" />
          }
        ]
      }}
      specialSection={{
        title: "Designed for Every Industry",
        subtitle: "Versatile Applications",
        description: "Our Product Designer adapts to your specific industry needs and workflows.",
        items: [
          { text: "Apparel decoration with precise placement options", icon: <Layers className="h-5 w-5" /> },
          { text: "Promotional product customization", icon: <Palette className="h-5 w-5" /> },
          { text: "Digital marketing materials and templates", icon: <Monitor className="h-5 w-5" /> },
          { text: "Environmental branding and signage visualization", icon: <Layout className="h-5 w-5" /> },
          { text: "Print materials with accurate bleed and trim marks", icon: <Sliders className="h-5 w-5" /> },
          { text: "Client presentation decks with branded elements", icon: <Settings className="h-5 w-5" /> }
        ]
      }}
      ctaSection={{
        title: "Ready to revolutionize your design process?",
        description: "Join thousands of businesses already using our Product Designer to streamline their workflow and impress clients.",
        primaryButtonText: "Get Started",
        primaryButtonLink: "/get-started",
        secondaryButtonText: "Schedule Demo",
        secondaryButtonLink: "/pricing"
      }}
      relatedModules={[
        {
          title: "Logos",
          icon: <Image className="h-8 w-8" />,
          description: "Upload, categorize, and manage customer logos and artwork files with built-in version tracking.",
          link: "/modules/logos"
        },
        {
          title: "Base Garments",
          icon: <File className="h-8 w-8" />,
          description: "Set up your core product catalog, including styles, sizes, colors, and default pricing.",
          link: "/modules/base-garments"
        },
        {
          title: "Customer Portal",
          icon: <Users className="h-8 w-8" />,
          description: "Give customers a branded login to review orders, approve proofs, and track job progress in real-time.",
          link: "/modules/customer-portal"
        }
      ]}
    />
  );
};

export default ProductDesigner;
