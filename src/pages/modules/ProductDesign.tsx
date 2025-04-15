
import ModuleLayout from "@/components/modules/ModuleLayout";
import { PaintBrush, Clock, Image, Layout, Share2, FileOutput, Star, File, CheckCircle, Users, Layers, Grid, Monitor, Palette, Settings, Sliders } from "lucide-react";

const ProductDesigner = () => {
  return (
    <ModuleLayout
      title="Product Designer"
      description="Allow users to customize garments visually with drag-and-drop logos, text, and artwork placements."
      color="teal"
      heroImage="https://nubosync.com/wp-content/uploads/2025/04/Screenshot-2025-04-02-101424.png"
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
        title: "Design Custom Garments in Minutes",
        description: "Whether you're creating branded apparel, promotional products, or client mockups, our designer makes it fast and easy to produce professional results that impress."
      }}
      keyFeatures={{
        title: "Powerful Design Tools",
        description: "Everything you need to create stunning customized garments and professional mockups",
        features: [
          {
            title: "Intuitive Drag-and-Drop Editor",
            description: "Create stunning designs with our intuitive interface that requires no design skills or software training.",
            icon: <Layout className="h-6 w-6" />
          },
          {
            title: "Premium Template Library",
            description: "Access 1,000+ professionally designed templates for products, packaging, apparel, signage, and more.",
            icon: <Grid className="h-6 w-6" />
          },
          {
            title: "Seamless Asset Integration",
            description: "Import logos, images and brand assets directly from Logo Management or your computer for instant use.",
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
          { text: "Apparel and promotional product customization with placement options", icon: <Layers className="h-5 w-5" /> },
          { text: "Multi-location print specifications with precise measurements", icon: <Palette className="h-5 w-5" /> },
          { text: "Digital marketing materials and mockup creation", icon: <Monitor className="h-5 w-5" /> },
          { text: "Environmental branding and signage visualization", icon: <Layout className="h-5 w-5" /> },
          { text: "Print materials with accurate bleed and trim marks", icon: <Sliders className="h-5 w-5" /> },
          { text: "Client presentation samples with branded elements", icon: <Settings className="h-5 w-5" /> }
        ]
      }}
      ctaSection={{
        title: "Ready to revolutionize your design process?",
        description: "Join thousands of businesses already using our Product Designer to streamline their workflow and impress clients.",
        primaryButtonText: "Start Free Trial",
        primaryButtonLink: "/get-started",
        secondaryButtonText: "Schedule Demo",
        secondaryButtonLink: "/pricing"
      }}
      relatedModules={[
        {
          title: "Logo Management",
          icon: <Image className="h-8 w-8" />,
          description: "Centralize and manage all your brand logos and assets in one secure place.",
          link: "/modules/logo-management"
        },
        {
          title: "Base Garment",
          icon: <File className="h-8 w-8" />,
          description: "Set up your core product catalog, including styles, sizes, colors, and default pricing.",
          link: "/modules/base-garment"
        },
        {
          title: "Customer Portal",
          icon: <Users className="h-8 w-8" />,
          description: "Share designs with clients through a branded self-service portal.",
          link: "/modules/customer-portal"
        }
      ]}
    />
  );
};

export default ProductDesigner;
