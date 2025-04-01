
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Image, 
  FileText, 
  ShoppingCart, 
  Layers, 
  Receipt, 
  Check,
  BarChart2,
  Zap,
  Users,
  FileSearch,
  ClipboardList,
  UserCheck,
  PieChart,
  TrendingUp,
  Package,
  Truck,
  Paintbrush,
  MessagesSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Define module types
interface Module {
  title: string;
  description: string;
  icon: React.ReactNode;
  learnMoreLink: string;
}

// Create module data
const modules: Record<string, Module[]> = {
  popular: [
    {
      title: "Sales & Order Management",
      description: "Connect teams, close more deals, and simplify your sales process",
      icon: <ShoppingCart className="text-blue-600" />,
      learnMoreLink: "/modules/sales-order-management"
    },
    {
      title: "Analytics & Reporting",
      description: "Get powerful insights from your data, anytime, anywhere",
      icon: <BarChart2 className="text-blue-400" />,
      learnMoreLink: "/modules/analytics-reporting"
    },
    {
      title: "Logo Hub",
      description: "Centralize and manage all your brand logos in one place",
      icon: <Image className="text-blue-600" />,
      learnMoreLink: "/modules/logo-hub"
    },
    {
      title: "Customer Portal",
      description: "Provide your customers with a self-service portal for support and information",
      icon: <UserCheck className="text-blue-800" />,
      learnMoreLink: "/modules/customer-portal"
    }
  ],
  categories: [
    {
      title: "Business Operations",
      description: "Modules for managing your core business operations",
      icon: <TrendingUp className="text-green-600" />,
      learnMoreLink: "#business-operations"
    },
    {
      title: "Customer Management",
      description: "Tools for managing customer relationships and service",
      icon: <Users className="text-purple-600" />,
      learnMoreLink: "#customer-management"
    },
    {
      title: "Production & Design",
      description: "Solutions for product design and manufacturing",
      icon: <Paintbrush className="text-orange-600" />,
      learnMoreLink: "#production-design"
    }
  ],
  all: [
    {
      title: "Sales & Order Management",
      description: "Connect teams, close more deals, and simplify your sales process",
      icon: <ShoppingCart className="text-blue-600" />,
      learnMoreLink: "/modules/sales-order-management"
    },
    {
      title: "Finance & Accounting",
      description: "Manage financial transactions and accounting processes efficiently",
      icon: <Receipt className="text-green-600" />,
      learnMoreLink: "/modules/finance-accounting"
    },
    {
      title: "Product Design",
      description: "Create and manage product designs with powerful customization tools",
      icon: <Paintbrush className="text-purple-600" />,
      learnMoreLink: "/modules/product-design"
    },
    {
      title: "Customer Service",
      description: "Manage customer support cases faster across every channel",
      icon: <MessagesSquare className="text-blue-500" />,
      learnMoreLink: "/modules/customer-service"
    },
    {
      title: "Inventory & Logistics",
      description: "Track inventory and manage logistics operations seamlessly",
      icon: <Package className="text-amber-600" />,
      learnMoreLink: "/modules/inventory-logistics"
    },
    {
      title: "Production & Manufacturing",
      description: "Oversee production processes, schedules, and resource allocation",
      icon: <Layers className="text-blue-700" />,
      learnMoreLink: "/modules/production-manufacturing"
    },
    {
      title: "Analytics & Reporting",
      description: "Get powerful insights from your data, anytime, anywhere",
      icon: <BarChart2 className="text-blue-400" />,
      learnMoreLink: "/modules/analytics-reporting"
    },
    {
      title: "Integration Platform",
      description: "Connect your teams and data with apps built in clicks, not code",
      icon: <Zap className="text-indigo-500" />,
      learnMoreLink: "/modules/integration-platform"
    },
    {
      title: "Logo Hub",
      description: "Centralize and manage all your brand logos in one place",
      icon: <Image className="text-blue-600" />,
      learnMoreLink: "/modules/logo-hub"
    },
    {
      title: "Document Management",
      description: "Store, organize, and share documents securely across your organization",
      icon: <FileText className="text-gray-600" />,
      learnMoreLink: "/modules/document-management"
    },
    {
      title: "Project Management",
      description: "Plan, track, and manage projects with ease",
      icon: <ClipboardList className="text-teal-600" />,
      learnMoreLink: "/modules/project-management"
    },
    {
      title: "Customer Portal",
      description: "Provide your customers with a self-service portal for support and information",
      icon: <UserCheck className="text-blue-800" />,
      learnMoreLink: "/modules/customer-portal"
    }
  ]
};

const ModulesMegaMenu = () => {
  const [activeTab, setActiveTab] = useState("popular");

  return (
    <div className="fixed top-[60px] left-0 w-full bg-white shadow-lg z-50 border-t border-zinc-200">
      <div className="container mx-auto p-6">
        <Tabs defaultValue="popular" onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-between items-center mb-6">
            <TabsList className="bg-gray-100">
              <TabsTrigger value="popular" className="text-sm">Popular</TabsTrigger>
              <TabsTrigger value="categories" className="text-sm">Categories</TabsTrigger>
              <TabsTrigger value="all" className="text-sm">All Modules</TabsTrigger>
            </TabsList>
            <Link to="/modules" className="text-blue-500 text-sm hover:underline">
              View all modules
            </Link>
          </div>

          <TabsContent value="popular" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                {modules.popular.map((module, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-4 bg-gray-100 p-3 rounded-lg h-fit">
                      {module.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">{module.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{module.description}</p>
                      <Link to={module.learnMoreLink} className="text-blue-500 text-sm hover:underline">Learn more</Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">New to Tracker?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Discover how our integrated modules can streamline your business operations.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-700">
                    <Check size={16} className="mr-2 text-green-500" />
                    Explore all modules
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <Check size={16} className="mr-2 text-green-500" />
                    See customer stories
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <Check size={16} className="mr-2 text-green-500" />
                    View pricing options
                  </li>
                </ul>
                <Button variant="gold" className="w-full">Get Started</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="categories" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {modules.categories.map((category, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mr-4 bg-gray-100 p-3 rounded-lg h-fit">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">{category.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{category.description}</p>
                    <Link to={category.learnMoreLink} className="text-blue-500 text-sm hover:underline">View modules</Link>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {modules.all.map((module, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mr-4 bg-gray-100 p-3 rounded-lg h-fit">
                    {module.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">{module.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{module.description}</p>
                    <Link to={module.learnMoreLink} className="text-blue-500 text-sm hover:underline">Learn more</Link>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ModulesMegaMenu;
