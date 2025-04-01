
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
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const categoryMapping = {
  "All": "all",
  "Sales": ["Sales & Order Management"],
  "Finance": ["Finance & Accounting"],
  "Design": ["Product Design", "Logo Hub", "Document Management"],
  "Support": ["Customer Service", "Customer Portal"],
  "Inventory": ["Inventory & Logistics"],
  "Production": ["Production & Manufacturing"],
  "Analytics": ["Analytics & Reporting", "Project Management"],
  "Integrations": ["Integration Platform"]
};

const moduleCategories = [
  {
    title: "Business Operations",
    modules: [
      {
        title: "Sales & Order Management",
        description: "Connect teams, close more deals, and simplify your sales process.",
        icon: <ShoppingCart className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/sales-order-management",
        color: "bg-blue-500/20",
        category: "Sales"
      },
      {
        title: "Finance & Accounting",
        description: "Manage financial transactions and accounting processes efficiently.",
        icon: <Receipt className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/finance-accounting",
        color: "bg-indigo-500/20",
        category: "Finance"
      },
      {
        title: "Inventory & Logistics",
        description: "Track inventory and manage logistics operations seamlessly.",
        icon: <Package className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/inventory-logistics",
        color: "bg-cyan-500/20",
        category: "Inventory"
      },
      {
        title: "Production & Manufacturing",
        description: "Oversee production processes, schedules, and resource allocation.",
        icon: <Layers className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/production-manufacturing",
        color: "bg-purple-500/20",
        category: "Production"
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
        color: "bg-teal-500/20",
        category: "Support"
      },
      {
        title: "Customer Portal",
        description: "Provide your customers with a self-service portal for support and information.",
        icon: <UserCheck className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/customer-portal",
        color: "bg-teal-500/20",
        category: "Support"
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
        color: "bg-emerald-500/20",
        category: "Design"
      },
      {
        title: "Logo Hub",
        description: "Centralize and manage all your brand logos in one place.",
        icon: <Image className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/logo-hub",
        color: "bg-emerald-500/20",
        category: "Design"
      },
      {
        title: "Document Management",
        description: "Store, organize, and share documents securely across your organization.",
        icon: <FileText className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/document-management",
        color: "bg-emerald-500/20",
        category: "Design"
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
        color: "bg-amber-500/20",
        category: "Analytics"
      },
      {
        title: "Analytics & Reporting",
        description: "Get powerful insights from your data, anytime, anywhere.",
        icon: <BarChart2 className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/analytics-reporting",
        color: "bg-amber-500/20",
        category: "Analytics"
      },
      {
        title: "Integration Platform",
        description: "Connect your teams and data with apps built in clicks, not code.",
        icon: <Zap className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/integration-platform",
        color: "bg-rose-500/20",
        category: "Integrations"
      }
    ]
  }
];

// Get all modules in a flat array
const allModules = moduleCategories.flatMap(category => category.modules);

const ModuleIndex = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredModules, setFilteredModules] = useState(allModules);
  
  // Effect to filter modules when category changes
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredModules(allModules);
    } else {
      setFilteredModules(
        allModules.filter(module => module.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  // Function to handle smooth scrolling and navigation
  const handleModuleClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Navigate after scroll starts
    setTimeout(() => {
      window.location.href = link;
    }, 100);
  };

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
      
      {/* Category selector */}
      <div className="bg-zinc-900/80 backdrop-blur-sm py-6 sticky top-16 z-10 border-b border-zinc-800">
        <div className="container mx-auto px-4">
          <ToggleGroup 
            type="single" 
            defaultValue="All" 
            value={selectedCategory}
            onValueChange={(value) => {
              if (value) setSelectedCategory(value);
            }}
            className="flex flex-wrap justify-center gap-2"
          >
            <ToggleGroupItem 
              value="All" 
              className={cn(
                "rounded-full px-6 py-2 text-sm font-medium transition-all",
                selectedCategory === "All" 
                  ? "bg-blue-600 text-white" 
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              )}
            >
              All
            </ToggleGroupItem>
            <ToggleGroupItem 
              value="Sales" 
              className={cn(
                "rounded-full px-6 py-2 text-sm font-medium transition-all",
                selectedCategory === "Sales" 
                  ? "bg-blue-600 text-white" 
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              )}
            >
              Sales
            </ToggleGroupItem>
            <ToggleGroupItem 
              value="Finance" 
              className={cn(
                "rounded-full px-6 py-2 text-sm font-medium transition-all",
                selectedCategory === "Finance" 
                  ? "bg-blue-600 text-white" 
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              )}
            >
              Finance
            </ToggleGroupItem>
            <ToggleGroupItem 
              value="Design" 
              className={cn(
                "rounded-full px-6 py-2 text-sm font-medium transition-all",
                selectedCategory === "Design" 
                  ? "bg-blue-600 text-white" 
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              )}
            >
              Design
            </ToggleGroupItem>
            <ToggleGroupItem 
              value="Support" 
              className={cn(
                "rounded-full px-6 py-2 text-sm font-medium transition-all",
                selectedCategory === "Support" 
                  ? "bg-blue-600 text-white" 
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              )}
            >
              Support
            </ToggleGroupItem>
            <ToggleGroupItem 
              value="Inventory" 
              className={cn(
                "rounded-full px-6 py-2 text-sm font-medium transition-all",
                selectedCategory === "Inventory" 
                  ? "bg-blue-600 text-white" 
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              )}
            >
              Inventory
            </ToggleGroupItem>
            <ToggleGroupItem 
              value="Production" 
              className={cn(
                "rounded-full px-6 py-2 text-sm font-medium transition-all",
                selectedCategory === "Production" 
                  ? "bg-blue-600 text-white" 
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              )}
            >
              Production
            </ToggleGroupItem>
            <ToggleGroupItem 
              value="Analytics" 
              className={cn(
                "rounded-full px-6 py-2 text-sm font-medium transition-all",
                selectedCategory === "Analytics" 
                  ? "bg-blue-600 text-white" 
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              )}
            >
              Analytics
            </ToggleGroupItem>
            <ToggleGroupItem 
              value="Integrations" 
              className={cn(
                "rounded-full px-6 py-2 text-sm font-medium transition-all",
                selectedCategory === "Integrations" 
                  ? "bg-blue-600 text-white" 
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              )}
            >
              Integrations
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          {selectedCategory === "All" ? "All Modules" : `${selectedCategory} Modules`}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredModules.map((module, index) => (
            <div 
              key={index} 
              className={cn(
                "rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-zinc-800 hover:border-[#D4AF37]",
                module.color || "bg-zinc-900"
              )}
            >
              <div className="bg-zinc-900 p-4 flex items-center space-x-4">
                <div className="bg-zinc-800 p-3 rounded-lg border border-zinc-700 group-hover:border-[#D4AF37]">
                  {module.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{module.title}</h3>
              </div>
              
              <div className="p-6 bg-black/40 backdrop-blur-sm">
                <p className="text-gray-300 mb-6">{module.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400 text-sm">{module.category}</span>
                  <Link 
                    to={module.link} 
                    onClick={(e) => handleModuleClick(e, module.link)}
                    className="inline-flex items-center text-gold-DEFAULT hover:text-gold-light"
                  >
                    Explore 
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
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
