
import { CheckCircle, BarChart, Zap } from "lucide-react";

const FeatureCard = ({ 
  icon: Icon,
  title, 
  description
}: { 
  icon: React.ElementType,
  title: string, 
  description: string
}) => {
  return (
    <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-5">
        <Icon className="w-6 h-6 text-amber-500" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ModuleCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode,
  title: string,
  description: string,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      <a href="#" className="text-blue-600 text-sm font-medium hover:underline">Learn more</a>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need in One Platform
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            TRACKER covers all of your key needs in one business platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <FeatureCard 
            icon={CheckCircle}
            title="Streamlined Workflow" 
            description="A common intuitive place and streamline your workflow from sales ordering to fulfillment." 
          />
          <FeatureCard 
            icon={Zap}
            title="Centralized Data" 
            description="Keep all your business data in one place for easy access and better decision making." 
          />
          <FeatureCard 
            icon={BarChart}
            title="Real-time Insights" 
            description="Get real-time insights into your business performance with powerful analytics tools." 
          />
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Modular Solutions for Every Need
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tracker offers a comprehensive suite of modules that can be combined to create the perfect solution for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ModuleCard
            icon={<div className="w-8 h-8 bg-blue-100 text-blue-600 rounded flex items-center justify-center">S</div>}
            title="Sales & Order Management"
            description="Manage quotes, track sales, email orders directly from your dashboard."
          />
          <ModuleCard
            icon={<div className="w-8 h-8 bg-green-100 text-green-600 rounded flex items-center justify-center">F</div>}
            title="Finance & Accounting"
            description="Manage financial data and reporting for better decision making."
          />
          <ModuleCard
            icon={<div className="w-8 h-8 bg-purple-100 text-purple-600 rounded flex items-center justify-center">P</div>}
            title="Product Design"
            description="Create and manage product designs with collaborative tools."
          />
          <ModuleCard
            icon={<div className="w-8 h-8 bg-sky-100 text-sky-600 rounded flex items-center justify-center">C</div>}
            title="Customer Service"
            description="Manage customer support issues faster, improving the experience."
          />
          <ModuleCard
            icon={<div className="w-8 h-8 bg-amber-100 text-amber-600 rounded flex items-center justify-center">I</div>}
            title="Inventory & Logistics"
            description="Track inventory and manage shipping operations seamlessly."
          />
          <ModuleCard
            icon={<div className="w-8 h-8 bg-orange-100 text-orange-600 rounded flex items-center justify-center">P</div>}
            title="Production & Manufacturing"
            description="Track production schedules, allocations, and resource utilization."
          />
          <ModuleCard
            icon={<div className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded flex items-center justify-center">A</div>}
            title="Analytics & Reporting"
            description="Get powerful insights from your data, events, and reports."
          />
          <ModuleCard
            icon={<div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded flex items-center justify-center">I</div>}
            title="Integration Platform"
            description="Seamlessly integrate with your own data and third party tools."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
