
import ModuleLayout from "@/components/modules/ModuleLayout";
import { Paintbrush, Clock, Image, Layout, Share2, FileOutput, Star, File, CheckCircle, Users } from "lucide-react";

const ProductDesign = () => {
  return (
    <ModuleLayout
      title="Proof & Mockup Designer"
      description="Create professional mockups and proofs in seconds with our intuitive designer."
      color="teal"
      stats={[
        {
          value: "85%",
          label: "Time Saved",
          icon: <Clock className="h-8 w-8 text-teal-500" />
        },
        {
          value: "1000+",
          label: "Mockup Templates",
          icon: <Layout className="h-8 w-8 text-teal-500" />
        },
        {
          value: "12,000+",
          label: "Active Users",
          icon: <Users className="h-8 w-8 text-teal-500" />
        },
        {
          value: "4.9/5",
          label: "Customer Rating",
          icon: <Star className="h-8 w-8 text-teal-500" />
        }
      ]}
      mainSection={{
        title: "Key Features",
        description: "Everything you need to create stunning mockups and proofs"
      }}
      keyFeatures={{
        title: "Key Features",
        description: "Everything you need to create stunning mockups and proofs",
        features: [
          {
            title: "Drag-and-Drop Editor",
            description: "Create mockups with our intuitive drag-and-drop interface. No design skills required.",
            icon: <Layout className="h-6 w-6" />
          },
          {
            title: "Template Library",
            description: "Access 1000+ pre-designed templates for various products and use cases.",
            icon: <File className="h-6 w-6" />
          },
          {
            title: "Logo Integration",
            description: "Seamlessly integrate with Logo Hub to access all your brand assets.",
            icon: <Image className="h-6 w-6" />
          },
          {
            title: "Real-time Collaboration",
            description: "Collaborate with team members and clients in real-time with comments and annotations.",
            icon: <Users className="h-6 w-6" />
          },
          {
            title: "Approval Workflows",
            description: "Streamline the approval process with customizable workflows and notifications.",
            icon: <CheckCircle className="h-6 w-6" />
          },
          {
            title: "Export Options",
            description: "Export your designs in various formats including PNG, JPG, PDF, and more.",
            icon: <FileOutput className="h-6 w-6" />
          }
        ]
      }}
      ctaSection={{
        title: "Ready to create professional mockups in seconds?",
        description: "Join thousands of businesses already using our Proof & Mockup Designer to streamline their design process.",
        primaryButtonText: "Start Free Trial",
        secondaryButtonText: "Talk to Sales"
      }}
      relatedModules={[
        {
          title: "Logo Hub",
          icon: <Image className="h-8 w-8" />,
          description: "Centralize and manage all your brand logos in one place.",
          link: "/modules/logo-hub"
        },
        {
          title: "Project Management",
          icon: <ClipboardList className="h-8 w-8" />,
          description: "Plan, track, and manage projects with ease.",
          link: "/modules/project-management"
        },
        {
          title: "Customer Portal",
          icon: <UserCheck className="h-8 w-8" />,
          description: "Provide your customers with a self-service portal for support and information.",
          link: "/modules/customer-portal"
        }
      ]}
    />
  );
};

export default ProductDesign;
