
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  buttonText, 
  popular = false,
  delay = 0
}: { 
  title: string, 
  price: string, 
  description: string, 
  features: string[], 
  buttonText: string, 
  popular?: boolean,
  delay?: number
}) => (
  <Card className={`border ${popular ? 'border-flick-purple shadow-lg' : 'border-gray-200'} animate-fade-in`} style={{ animationDelay: `${delay}s` }}>
    {popular && (
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span className="bg-flick-purple text-white text-xs font-semibold px-4 py-1 rounded-full">
          Most Popular
        </span>
      </div>
    )}
    <CardHeader className="pb-4">
      <CardTitle className="text-xl">{title}</CardTitle>
      <div className="mt-1">
        <span className="text-3xl font-bold">{price}</span>
        {price !== "Free" && <span className="text-gray-500 ml-1">/month</span>}
      </div>
      <CardDescription className="mt-2">{description}</CardDescription>
    </CardHeader>
    <CardContent className="pb-4">
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="text-flick-purple mr-2 h-5 w-5 mt-0.5 shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Button 
        className={`w-full ${popular 
          ? 'bg-flick-purple hover:bg-flick-purple/90' 
          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
      >
        {buttonText}
      </Button>
    </CardFooter>
  </Card>
);

const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Choose the perfect plan for your needs. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard
            title="Starter"
            price="Free"
            description="Perfect for personal projects and learning"
            features={[
              "40+ essential components",
              "Basic theme customization",
              "Community support",
              "MIT licensed",
              "TypeScript support"
            ]}
            buttonText="Get Started"
            delay={0.3}
          />
          
          <PricingCard
            title="Pro"
            price="$49"
            description="Great for professional projects and teams"
            features={[
              "100+ premium components",
              "Advanced theme system",
              "Priority support",
              "Premium plugins & templates",
              "Use in unlimited projects",
              "Updates for 1 year"
            ]}
            buttonText="Subscribe Now"
            popular={true}
            delay={0.4}
          />
          
          <PricingCard
            title="Enterprise"
            price="$149"
            description="Complete solution for large organizations"
            features={[
              "All Pro features",
              "Dedicated support",
              "Design consultations",
              "Custom component development",
              "Extended license",
              "Lifetime updates"
            ]}
            buttonText="Contact Sales"
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
