
import { Check } from "lucide-react";

const FeatureCard = ({ 
  title, 
  description
}: { 
  title: string, 
  description: string
}) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful features for your business
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to build, scale, and grow your SaaS application
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Easy Integration",
              description: "Integrate with your favorite tools and services with just a few clicks."
            },
            {
              title: "Advanced Analytics",
              description: "Get detailed insights into your application's performance and user behavior."
            },
            {
              title: "Scalable Infrastructure",
              description: "Our platform automatically scales with your business needs."
            },
            {
              title: "Team Collaboration",
              description: "Work together with your team in real-time with our collaborative tools."
            },
            {
              title: "Security First",
              description: "Enterprise-grade security to protect your data and your customers."
            },
            {
              title: "24/7 Support",
              description: "Our dedicated support team is available around the clock to help you."
            }
          ].map((feature, index) => (
            <FeatureCard 
              key={index} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
