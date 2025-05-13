
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const StatsBanner = () => {
  return (
    <section className="bg-gradient-to-r from-zinc-900 to-black py-12 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-1/2 bg-gradient-to-b from-[#D4AF37]/5 to-transparent opacity-50"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#D4AF37]/5 blur-[100px] -top-1/4 -right-1/4"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <ScrollReveal delay={0} duration={800}>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-sm text-gray-400">Active Businesses</div>
          </ScrollReveal>
          
          <ScrollReveal delay={100} duration={800}>
            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675] mb-2">1M+</div>
            <div className="text-sm text-gray-400">Orders Processed</div>
          </ScrollReveal>
          
          <ScrollReveal delay={200} duration={800}>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-sm text-gray-400">Uptime</div>
          </ScrollReveal>
          
          <ScrollReveal delay={300} duration={800}>
            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675] mb-2">24/7</div>
            <div className="text-sm text-gray-400">Customer Support</div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
