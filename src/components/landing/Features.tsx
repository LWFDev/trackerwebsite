
import { CheckCircle, BarChart, Zap } from "lucide-react";

const FeatureCard = ({ 
  icon: Icon,
  title, 
  description,
  delay = 0
}: { 
  icon: React.ElementType,
  title: string, 
  description: string,
  delay?: number
}) => {
  return (
    <div 
      className="bg-zinc-900/80 backdrop-blur-sm p-8 rounded-xl border border-zinc-800 shadow-lg hover:shadow-[#D4AF37]/20 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/30 group animate-fade-in"
      style={{ 
        animationDelay: `${delay}s`,
      }}
    >
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-black to-zinc-900 flex items-center justify-center mb-6 group-hover:shadow-inner shadow-lg transition-all duration-300">
        <Icon className="w-7 h-7 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" />
      </div>
      <h3 className="text-xl font-semibold mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">{title}</h3>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{description}</p>
    </div>
  );
};

const ModuleCard = ({
  icon,
  title,
  description,
  delay = 0
}: {
  icon: React.ReactNode,
  title: string,
  description: string,
  delay?: number
}) => {
  return (
    <div 
      className="bg-zinc-900/80 backdrop-blur-sm p-6 rounded-xl border border-zinc-800 shadow-md hover:shadow-[#D4AF37]/20 hover:border-[#D4AF37]/30 transition-all duration-300 hover:-translate-y-1 group animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">{title}</h3>
      <p className="text-gray-400 text-sm mb-3 group-hover:text-gray-300 transition-colors duration-300">{description}</p>
      <a href="#" className="text-[#D4AF37] text-sm font-medium hover:underline inline-flex items-center">
        Learn more 
        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-zinc-900/30 blur-[100px] top-40 -left-20"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#D4AF37]/5 blur-[120px] bottom-20 right-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 bg-zinc-900/80 backdrop-blur-sm rounded-full border border-zinc-800 mb-6">
            <span className="text-sm text-[#D4AF37] uppercase font-medium tracking-wider">Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Everything You Need in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">One Platform</span>
          </h2>
          <p className="text-lg text-gray-400 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            TRACKER covers all of your key needs in one business platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <FeatureCard 
            icon={CheckCircle}
            title="Streamlined Workflow" 
            description="A common intuitive place and streamline your workflow from sales ordering to fulfillment." 
            delay={0.1}
          />
          <FeatureCard 
            icon={Zap}
            title="Centralized Data" 
            description="Keep all your business data in one place for easy access and better decision making." 
            delay={0.2}
          />
          <FeatureCard 
            icon={BarChart}
            title="Real-time Insights" 
            description="Get real-time insights into your business performance with powerful analytics tools." 
            delay={0.3}
          />
        </div>

        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 bg-zinc-900/80 backdrop-blur-sm rounded-full border border-zinc-800 mb-6">
            <span className="text-sm text-[#D4AF37] uppercase font-medium tracking-wider">Modules</span>
          </div>
          <h2 className="text-3xl font-bold mb-6 animate-fade-in">
            Modular Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">Every Need</span>
          </h2>
          <p className="text-lg text-gray-400 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Tracker offers a comprehensive suite of modules that can be combined to create the perfect solution for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ModuleCard
            icon={<div className="w-10 h-10 bg-gradient-to-br from-black to-zinc-900 text-[#D4AF37] rounded-lg flex items-center justify-center shadow-md group-hover:shadow-[#D4AF37]/20 transition-all duration-300 border border-[#D4AF37]/20">S</div>}
            title="Sales & Order Management"
            description="Manage quotes, track sales, email orders directly from your dashboard."
            delay={0.1}
          />
          <ModuleCard
            icon={<div className="w-10 h-10 bg-gradient-to-br from-black to-zinc-900 text-[#D4AF37] rounded-lg flex items-center justify-center shadow-md group-hover:shadow-[#D4AF37]/20 transition-all duration-300 border border-[#D4AF37]/20">F</div>}
            title="Finance & Accounting"
            description="Manage financial data and reporting for better decision making."
            delay={0.2}
          />
          <ModuleCard
            icon={<div className="w-10 h-10 bg-gradient-to-br from-black to-zinc-900 text-[#D4AF37] rounded-lg flex items-center justify-center shadow-md group-hover:shadow-[#D4AF37]/20 transition-all duration-300 border border-[#D4AF37]/20">P</div>}
            title="Product Design"
            description="Create and manage product designs with collaborative tools."
            delay={0.3}
          />
          <ModuleCard
            icon={<div className="w-10 h-10 bg-gradient-to-br from-black to-zinc-900 text-[#D4AF37] rounded-lg flex items-center justify-center shadow-md group-hover:shadow-[#D4AF37]/20 transition-all duration-300 border border-[#D4AF37]/20">C</div>}
            title="Customer Service"
            description="Manage customer support issues faster, improving the experience."
            delay={0.4}
          />
          <ModuleCard
            icon={<div className="w-10 h-10 bg-gradient-to-br from-black to-zinc-900 text-[#D4AF37] rounded-lg flex items-center justify-center shadow-md group-hover:shadow-[#D4AF37]/20 transition-all duration-300 border border-[#D4AF37]/20">I</div>}
            title="Inventory & Logistics"
            description="Track inventory and manage shipping operations seamlessly."
            delay={0.5}
          />
          <ModuleCard
            icon={<div className="w-10 h-10 bg-gradient-to-br from-black to-zinc-900 text-[#D4AF37] rounded-lg flex items-center justify-center shadow-md group-hover:shadow-[#D4AF37]/20 transition-all duration-300 border border-[#D4AF37]/20">P</div>}
            title="Production & Manufacturing"
            description="Track production schedules, allocations, and resource utilization."
            delay={0.6}
          />
          <ModuleCard
            icon={<div className="w-10 h-10 bg-gradient-to-br from-black to-zinc-900 text-[#D4AF37] rounded-lg flex items-center justify-center shadow-md group-hover:shadow-[#D4AF37]/20 transition-all duration-300 border border-[#D4AF37]/20">A</div>}
            title="Analytics & Reporting"
            description="Get powerful insights from your data, events, and reports."
            delay={0.7}
          />
          <ModuleCard
            icon={<div className="w-10 h-10 bg-gradient-to-br from-black to-zinc-900 text-[#D4AF37] rounded-lg flex items-center justify-center shadow-md group-hover:shadow-[#D4AF37]/20 transition-all duration-300 border border-[#D4AF37]/20">I</div>}
            title="Integration Platform"
            description="Seamlessly integrate with your own data and third party tools."
            delay={0.8}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
