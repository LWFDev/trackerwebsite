
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingCard = ({ 
  title, 
  price, 
  features, 
  buttonText, 
  popular = false
}: { 
  title: string, 
  price: string, 
  features: string[], 
  buttonText: string, 
  popular?: boolean
}) => (
  <div className={`bg-white rounded-lg border ${popular ? 'border-[#7C3AED] ring-2 ring-[#7C3AED] ring-opacity-20' : 'border-gray-200'} shadow-sm p-6 relative`}>
    {popular && (
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span className="bg-[#7C3AED] text-white text-xs font-semibold px-4 py-1 rounded-full">
          Most popular
        </span>
      </div>
    )}
    <div className="text-center">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="flex justify-center items-baseline mb-4">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-gray-500 ml-1">/month</span>
      </div>
      <Button className={`w-full mb-6 ${popular ? 'bg-[#7C3AED] hover:bg-[#6D28D9]' : 'bg-gray-800 hover:bg-gray-700'}`}>
        {buttonText}
      </Button>
    </div>
    <ul className="space-y-3">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start">
          <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No hidden fees, no surprise charges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard
            title="Starter"
            price="$29"
            features={[
              "Up to 5 team members",
              "10GB storage",
              "Basic analytics",
              "24/7 support"
            ]}
            buttonText="Get started"
          />
          
          <PricingCard
            title="Professional"
            price="$79"
            features={[
              "Up to 20 team members",
              "50GB storage",
              "Advanced analytics",
              "Priority support",
              "Custom integrations"
            ]}
            buttonText="Get started"
            popular={true}
          />
          
          <PricingCard
            title="Enterprise"
            price="$149"
            features={[
              "Unlimited team members",
              "Unlimited storage",
              "Custom reporting",
              "Dedicated support",
              "Advanced security",
              "Custom branding"
            ]}
            buttonText="Contact sales"
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
