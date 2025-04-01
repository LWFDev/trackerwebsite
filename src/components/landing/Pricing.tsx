
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
  <div className={`bg-zinc-900 rounded-lg border ${popular ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/20' : 'border-zinc-800'} shadow-sm p-6 relative transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${popular ? 'hover:shadow-[#D4AF37]/30' : 'hover:shadow-zinc-800/30'}`}>
    {popular && (
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span className="bg-gradient-to-r from-[#D4AF37] to-[#F2D675] text-black text-xs font-semibold px-4 py-1 rounded-full">
          Most popular
        </span>
      </div>
    )}
    <div className="text-center">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="flex justify-center items-baseline mb-4">
        <span className={`text-4xl font-bold ${popular ? 'text-[#D4AF37]' : 'text-white'}`}>{price}</span>
        <span className="text-gray-500 ml-1">/month</span>
      </div>
      <Button className={`w-full mb-6 ${popular ? 'bg-gradient-to-r from-[#D4AF37] to-[#F2D675] hover:from-[#F2D675] hover:to-[#D4AF37] text-black' : 'bg-zinc-800 hover:bg-zinc-700'}`}>
        {buttonText}
      </Button>
    </div>
    <ul className="space-y-3">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start">
          <Check className="h-5 w-5 text-[#D4AF37] shrink-0 mr-2" />
          <span className="text-gray-300">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-zinc-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#D4AF37]/5 to-[#F2D675]/10 blur-[120px] top-1/2 -right-1/4 transform -translate-y-1/2"></div>
        <div className="absolute w-[600px] h-[600px] rounded-full bg-zinc-800/30 blur-[100px] bottom-0 -left-1/4"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-1.5 bg-zinc-800/80 backdrop-blur-sm rounded-full border border-zinc-700 mb-6">
            <span className="text-sm text-[#D4AF37] uppercase font-medium tracking-wider">Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">pricing</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
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
