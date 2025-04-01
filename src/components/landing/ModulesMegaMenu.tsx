
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Image, 
  FileText, 
  ShoppingCart, 
  Layers, 
  Receipt, 
  Check 
} from "lucide-react";
import { Button } from "@/components/ui/button";

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
      title: "Logo Hub",
      description: "Store, organize, and manage all your logos in one central location",
      icon: <Image className="text-blue-600" />,
      learnMoreLink: "#logo-hub"
    },
    {
      title: "Orders",
      description: "Track and process customer orders with ease and efficiency",
      icon: <ShoppingCart className="text-blue-800" />,
      learnMoreLink: "#orders"
    },
    {
      title: "Production",
      description: "Oversee production processes and optimize workflows",
      icon: <Layers className="text-blue-400" />,
      learnMoreLink: "#production"
    },
    {
      title: "Invoice Manager",
      description: "Create and manage invoices with automated workflows",
      icon: <Receipt className="text-blue-800" />,
      learnMoreLink: "#invoice-manager"
    }
  ],
  categories: [
    {
      title: "Financial",
      description: "Accounting, invoicing, and financial reporting tools",
      icon: <FileText className="text-green-600" />,
      learnMoreLink: "#financial-modules"
    },
    {
      title: "Operations",
      description: "Manufacturing, logistics, and supply chain management",
      icon: <Layers className="text-purple-600" />,
      learnMoreLink: "#operations-modules"
    },
    {
      title: "Sales",
      description: "CRM, order processing, and customer management",
      icon: <ShoppingCart className="text-orange-600" />,
      learnMoreLink: "#sales-modules"
    }
  ],
  all: [
    {
      title: "Logo Hub",
      description: "Store, organize, and manage all your logos in one central location",
      icon: <Image className="text-blue-600" />,
      learnMoreLink: "#logo-hub"
    },
    {
      title: "Orders",
      description: "Track and process customer orders with ease and efficiency",
      icon: <ShoppingCart className="text-blue-800" />,
      learnMoreLink: "#orders"
    },
    // Additional modules would be listed here
  ]
};

const ModulesMegaMenu = () => {
  const [activeTab, setActiveTab] = useState("popular");

  return (
    <div className="absolute top-full left-0 w-full bg-white border-t border-zinc-200 shadow-lg animate-fade-in z-50">
      <div className="container mx-auto p-6">
        <Tabs defaultValue="popular" onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-between items-center mb-6">
            <TabsList className="bg-gray-100">
              <TabsTrigger value="popular" className="text-sm">Popular</TabsTrigger>
              <TabsTrigger value="categories" className="text-sm">Categories</TabsTrigger>
              <TabsTrigger value="all" className="text-sm">All Modules</TabsTrigger>
            </TabsList>
            <a href="#all-modules" className="text-blue-500 text-sm hover:underline">
              View all modules
            </a>
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
                      <a href={module.learnMoreLink} className="text-blue-500 text-sm hover:underline">Learn more</a>
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
                    <a href={category.learnMoreLink} className="text-blue-500 text-sm hover:underline">View modules</a>
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
                    <a href={module.learnMoreLink} className="text-blue-500 text-sm hover:underline">Learn more</a>
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
