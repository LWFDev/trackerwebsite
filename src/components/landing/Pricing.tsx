
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useLocalization } from "@/contexts/LocalizationContext";

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
}) => {
  const { locale } = useLocalization();
  
  // Currency conversion rate (USD to GBP)
  const USD_TO_GBP_RATE = 0.79;
  
  const convertPrice = (usdPrice: string) => {
    if (usdPrice === "Custom") return usdPrice;
    
    const numericPrice = parseInt(usdPrice.replace('$', ''));
    const gbpPrice = Math.round(numericPrice * USD_TO_GBP_RATE);
    
    return locale === 'UK' ? `£${gbpPrice}` : usdPrice;
  };

  return (
    <div className={`bg-zinc-900 rounded-lg border ${popular ? 'border-gold-DEFAULT ring-2 ring-gold-DEFAULT/20' : 'border-zinc-800'} shadow-sm p-6 relative transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${popular ? 'hover:shadow-gold-DEFAULT/30' : 'hover:shadow-zinc-800/30'}`}>
      {popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
            Most popular
          </span>
        </div>
      )}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="flex justify-center items-baseline mb-4">
          <span className={`text-4xl font-bold ${popular ? 'text-gold-DEFAULT' : 'text-white'}`}>{convertPrice(price)}</span>
          <span className="text-gray-500 ml-1">/month</span>
        </div>
        <Button className={`w-full mb-6 ${popular ? 'bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-white' : 'bg-zinc-800 hover:bg-zinc-700'}`}>
          {buttonText}
        </Button>
      </div>
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <Check className="h-5 w-5 text-gold-DEFAULT shrink-0 mr-2" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Pricing = () => {
  const { t } = useLocalization();

  return (
    <section id="pricing" className="py-20 bg-zinc-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-gold-DEFAULT/5 to-gold-light/10 blur-[120px] top-1/2 -right-1/4 transform -translate-y-1/2"></div>
        <div className="absolute w-[600px] h-[600px] rounded-full bg-zinc-800/30 blur-[100px] bottom-0 -left-1/4"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-1.5 bg-zinc-800/80 backdrop-blur-sm rounded-full border border-zinc-700 mb-6">
            <span className="text-sm text-gold-DEFAULT uppercase font-medium tracking-wider">{t("Pricing")}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("Simple, transparent")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-DEFAULT to-gold-light">{t("pricing")}</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t("No hidden fees, no surprise charges")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard
            title={t("Starter")}
            price="$29"
            features={[
              t("Up to 5 team members"),
              t("10GB storage"),
              t("Basic analytics"),
              t("24/7 support")
            ]}
            buttonText={t("Get started")}
          />
          
          <PricingCard
            title={t("Professional")}
            price="$79"
            features={[
              t("Up to 20 team members"),
              t("50GB storage"),
              t("Advanced analytics"),
              t("Priority support"),
              t("Custom integrations")
            ]}
            buttonText={t("Get started")}
            popular={true}
          />
          
          <PricingCard
            title={t("Enterprise")}
            price="$149"
            features={[
              t("Unlimited team members"),
              t("Unlimited storage"),
              t("Custom reporting"),
              t("Dedicated support"),
              t("Advanced security"),
              t("Custom branding")
            ]}
            buttonText={t("Contact sales")}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
