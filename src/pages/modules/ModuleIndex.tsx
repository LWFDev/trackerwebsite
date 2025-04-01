
import { Link } from "react-router-dom";
import { 
  ShoppingCart, 
  Receipt, 
  Paintbrush, 
  MessagesSquare, 
  Package, 
  Layers, 
  BarChart2, 
  Zap, 
  Image, 
  FileText, 
  ClipboardList, 
  UserCheck 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const moduleCategories = [
  {
    title: "Business Operations",
    modules: [
      {
        title: "Sales & Order Management",
        description: "Connect teams, close more deals, and simplify your sales process.",
        icon: <ShoppingCart className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/sales-order-management",
        color: "bg-zinc-800 text-white border-zinc-700 hover:border-[#D4AF37]"
      },
      {
        title: "Finance & Accounting",
        description: "Manage financial transactions and accounting processes efficiently.",
        icon: <Receipt className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/finance-accounting",
        color: "bg-zinc-800 text-white border-zinc-700 hover:border-[#D4AF37]"
      },
      {
        title: "Inventory & Logistics",
        description: "Track inventory and manage logistics operations seamlessly.",
        icon: <Package className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/inventory-logistics",
        color: "bg-zinc-800 text-white border-zinc-700 hover:border-[#D4AF37]"
      },
      {
        title: "Production & Manufacturing",
        description: "Oversee production processes, schedules, and resource allocation.",
        icon: <Layers className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/production-manufacturing",
        color: "bg-zinc-800 text-white border-zinc-700 hover:border-[#D4AF37]"
      }
    ]
  },
  {
    title: "Client Management",
    modules: [
      {
        title: "Customer Service",
        description: "Manage customer support cases faster across every channel.",
        icon: <MessagesSquare className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/customer-service",
        color: "bg-zinc-800 text-white border-zinc-700 hover:border-[#D4AF37]"
      },
      {
        title: "Customer Portal",
        description: "Provide your customers with a self-service portal for support and information.",
        icon: <UserCheck className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/customer-portal",
        color: "bg-zinc-800 text-white border-zinc-700 hover:border-[#D4AF37]"
      }
    ]
  },
  {
    title: "Design & Content",
    modules: [
      {
        title: "Product Design",
        description: "Create and manage product designs with powerful customization tools.",
        icon: <Paintbrush className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/product-design",
        color: "bg-zinc-800 text-white border-zinc-700 hover:border-[#D4AF37]"
      },
      {
        title: "Logo Hub",
        description: "Centralize and manage all your brand logos in one place.",
        icon: <Image className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/logo-hub",
        color: "bg-zinc-800 text-white border-zinc-700 hover:border-[#D4AF37]"
      },
      {
        title: "Document Management",
        description: "Store, organize, and share documents securely across your organization.",
        icon: <FileText className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/document-management",
        color: "bg-zinc-800 text-white border-zinc-700 hover:border-[#D4AF37]"
      }
    ]
  },
  {
    title: "Project & Analytics",
    modules: [
      {
        title: "Project Management",
        description: "Plan, track, and manage projects with ease.",
        icon: <ClipboardList className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/project-management",
        color: "bg-zinc-800 text-white border-zinc-700 hover:border-[#D4AF37]"
      },
      {
        title: "Analytics & Reporting",
        description: "Get powerful insights from your data, anytime, anywhere.",
        icon: <BarChart2 className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/analytics-reporting",
        color: "bg-zinc-800 text-white border-zinc-700 hover:border-[#D4AF37]"
      },
      {
        title: "Integration Platform",
        description: "Connect your teams and data with apps built in clicks, not code.",
        icon: <Zap className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/integration-platform",
        color: "bg-zinc-800 text-white border-zinc-700 hover:border-[#D4AF37]"
      }
    ]
  }
];

const ModuleIndex = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="pt-24 pb-16 bg-zinc-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute w-[600px] h-[600px] rounded-full bg-[#D4AF37]/5 blur-[120px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            All <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">Modules</span>
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Discover our comprehensive suite of business modules designed to streamline your operations and drive growth.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        {moduleCategories.map((category, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-2xl font-bold mb-8 border-b border-zinc-700 pb-2 text-white hover:text-[#D4AF37] transition-colors">
              {category.title}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.modules.map((module, moduleIndex) => (
                <div 
                  key={moduleIndex} 
                  className="bg-zinc-900 rounded-lg shadow-md border border-zinc-800 p-6 transition hover:shadow-lg hover:border-[#D4AF37] group"
                >
                  <div className={`inline-flex p-3 rounded-lg mb-4 bg-zinc-800 border border-zinc-700 group-hover:border-[#D4AF37] transition`}>
                    {module.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#D4AF37] transition">{module.title}</h3>
                  <p className="text-gray-400 mb-4">{module.description}</p>
                  <Link to={module.link}>
                    <Button variant="outline" className="w-full border-zinc-700 hover:border-[#D4AF37] hover:bg-zinc-800">
                      Learn More
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-zinc-900 text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute w-[600px] h-[600px] rounded-full bg-[#D4AF37]/5 blur-[120px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">Ready to Supercharge Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get started with any of our modules or bundle them together for maximum efficiency.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/get-started">
              <Button variant="gold" size="lg">
                Get Started
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="border-zinc-700 text-gray-300 hover:bg-zinc-800 hover:border-[#D4AF37]" 
              size="lg"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleIndex;
