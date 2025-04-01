
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
        icon: <ShoppingCart className="h-8 w-8 text-blue-500" />,
        link: "/modules/sales-order-management",
        color: "bg-blue-50 text-blue-500 border-blue-100"
      },
      {
        title: "Finance & Accounting",
        description: "Manage financial transactions and accounting processes efficiently.",
        icon: <Receipt className="h-8 w-8 text-green-500" />,
        link: "/modules/finance-accounting",
        color: "bg-green-50 text-green-500 border-green-100"
      },
      {
        title: "Inventory & Logistics",
        description: "Track inventory and manage logistics operations seamlessly.",
        icon: <Package className="h-8 w-8 text-amber-500" />,
        link: "/modules/inventory-logistics",
        color: "bg-amber-50 text-amber-500 border-amber-100"
      },
      {
        title: "Production & Manufacturing",
        description: "Oversee production processes, schedules, and resource allocation.",
        icon: <Layers className="h-8 w-8 text-indigo-500" />,
        link: "/modules/production-manufacturing",
        color: "bg-indigo-50 text-indigo-500 border-indigo-100"
      }
    ]
  },
  {
    title: "Client Management",
    modules: [
      {
        title: "Customer Service",
        description: "Manage customer support cases faster across every channel.",
        icon: <MessagesSquare className="h-8 w-8 text-purple-500" />,
        link: "/modules/customer-service",
        color: "bg-purple-50 text-purple-500 border-purple-100"
      },
      {
        title: "Customer Portal",
        description: "Provide your customers with a self-service portal for support and information.",
        icon: <UserCheck className="h-8 w-8 text-blue-500" />,
        link: "/modules/customer-portal",
        color: "bg-blue-50 text-blue-500 border-blue-100"
      }
    ]
  },
  {
    title: "Design & Content",
    modules: [
      {
        title: "Product Design",
        description: "Create and manage product designs with powerful customization tools.",
        icon: <Paintbrush className="h-8 w-8 text-teal-500" />,
        link: "/modules/product-design",
        color: "bg-teal-50 text-teal-500 border-teal-100"
      },
      {
        title: "Logo Hub",
        description: "Centralize and manage all your brand logos in one place.",
        icon: <Image className="h-8 w-8 text-rose-500" />,
        link: "/modules/logo-hub",
        color: "bg-rose-50 text-rose-500 border-rose-100"
      },
      {
        title: "Document Management",
        description: "Store, organize, and share documents securely across your organization.",
        icon: <FileText className="h-8 w-8 text-orange-500" />,
        link: "/modules/document-management",
        color: "bg-orange-50 text-orange-500 border-orange-100"
      }
    ]
  },
  {
    title: "Project & Analytics",
    modules: [
      {
        title: "Project Management",
        description: "Plan, track, and manage projects with ease.",
        icon: <ClipboardList className="h-8 w-8 text-purple-500" />,
        link: "/modules/project-management",
        color: "bg-purple-50 text-purple-500 border-purple-100"
      },
      {
        title: "Analytics & Reporting",
        description: "Get powerful insights from your data, anytime, anywhere.",
        icon: <BarChart2 className="h-8 w-8 text-blue-500" />,
        link: "/modules/analytics-reporting",
        color: "bg-blue-50 text-blue-500 border-blue-100"
      },
      {
        title: "Integration Platform",
        description: "Connect your teams and data with apps built in clicks, not code.",
        icon: <Zap className="h-8 w-8 text-amber-500" />,
        link: "/modules/integration-platform",
        color: "bg-amber-50 text-amber-500 border-amber-100"
      }
    ]
  }
];

const ModuleIndex = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-24 pb-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            All Modules
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Discover our comprehensive suite of business modules designed to streamline your operations and drive growth.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        {moduleCategories.map((category, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-2xl font-bold mb-8 border-b border-gray-200 pb-2">
              {category.title}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.modules.map((module, moduleIndex) => (
                <div 
                  key={moduleIndex} 
                  className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 transition hover:shadow-md"
                >
                  <div className={`inline-flex p-3 rounded-lg mb-4 ${module.color}`}>
                    {module.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
                  <p className="text-gray-600 mb-4">{module.description}</p>
                  <Link to={module.link}>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Supercharge Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get started with any of our modules or bundle them together for maximum efficiency.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="gold" size="lg">
              Get Started
            </Button>
            <Button variant="outline" className="border-zinc-700 text-gray-300 hover:bg-zinc-800" size="lg">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleIndex;
