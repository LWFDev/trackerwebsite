
import { ArrowRight, Brush, Code, Layout, Layers, Shield, Zap } from "lucide-react";

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  color = "purple",
  delay = 0 
}: { 
  icon: any, 
  title: string, 
  description: string, 
  color?: "purple" | "blue" | "pink",
  delay?: number
}) => {
  const colorClasses = {
    purple: {
      bg: "bg-flick-purple/10",
      border: "border-flick-purple/20",
      text: "text-flick-purple"
    },
    blue: {
      bg: "bg-flick-blue/10",
      border: "border-flick-blue/20",
      text: "text-flick-blue"
    },
    pink: {
      bg: "bg-flick-pink/10",
      border: "border-flick-pink/20",
      text: "text-flick-pink"
    }
  };

  const classes = colorClasses[color];

  return (
    <div 
      className="p-6 rounded-xl border border-gray-200 bg-white hover:shadow-md transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={`w-12 h-12 rounded-lg ${classes.bg} ${classes.border} flex items-center justify-center mb-4`}>
        <Icon className={classes.text} size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#" className="inline-flex items-center text-flick-purple hover:underline">
        Learn more <ArrowRight size={16} className="ml-1" />
      </a>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-20 bg-flick-off-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Powerful Features for Modern UIs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Everything you need to build beautiful React applications with minimal effort
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            icon={Layers} 
            title="100+ Components" 
            description="A comprehensive library of UI components for every use case and design need"
            color="purple"
            delay={0.3}
          />
          <FeatureCard 
            icon={Brush} 
            title="Customizable Themes" 
            description="Easily adapt the components to match your brand with our powerful theming system"
            color="blue"
            delay={0.4}
          />
          <FeatureCard 
            icon={Zap} 
            title="Performance Optimized" 
            description="Built with performance in mind - lightweight and efficient with minimal bundle size"
            color="pink"
            delay={0.5}
          />
          <FeatureCard 
            icon={Shield} 
            title="Accessible by Default" 
            description="All components follow WCAG guidelines and are fully accessible out of the box"
            color="purple"
            delay={0.6}
          />
          <FeatureCard 
            icon={Layout} 
            title="Responsive Design" 
            description="Components that look great on any device, from mobile to desktop"
            color="blue"
            delay={0.7}
          />
          <FeatureCard 
            icon={Code} 
            title="Developer Friendly" 
            description="Well-documented API with TypeScript support for a smooth developer experience"
            color="pink"
            delay={0.8}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
