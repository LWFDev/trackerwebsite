
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Award, CheckCircle, Shield, TrendingUp } from "lucide-react";

const FeatureItem = ({ 
  icon, 
  title, 
  description, 
  delay = 0 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  delay?: number;
}) => {
  return (
    <ScrollReveal delay={delay} direction="up" className="flex items-start">
      <div className="mr-4 p-3 bg-zinc-900/80 rounded-lg border border-zinc-800 text-[#D4AF37]">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </ScrollReveal>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#D4AF37]/5 blur-[120px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-zinc-900/80 backdrop-blur-sm rounded-full border border-zinc-800 mb-6">
            <span className="text-sm text-[#D4AF37] uppercase font-medium tracking-wider">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">embroidery businesses</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our platform is designed specifically for the unique needs of garment decoration businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <FeatureItem 
            icon={<Award size={24} />}
            title="Industry-Specific Features"
            description="Tailored workflows designed specifically for embroidery and garment decoration businesses."
            delay={0}
          />
          
          <FeatureItem 
            icon={<TrendingUp size={24} />}
            title="Proven Results"
            description="Our customers report an average 32% increase in productivity after implementing our solution."
            delay={100}
          />
          
          <FeatureItem 
            icon={<Shield size={24} />}
            title="Secure & Reliable"
            description="99.9% uptime with enterprise-grade security to protect your business data."
            delay={200}
          />
          
          <FeatureItem 
            icon={<CheckCircle size={24} />}
            title="Easy Implementation"
            description="Be up and running in days, not weeks, with our guided onboarding process."
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
