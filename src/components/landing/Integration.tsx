
import React from 'react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Integration = () => {
  const integrations = [
    {
      name: 'SanMar',
      logo: '/lovable-uploads/89eb9fd7-66d8-4124-b584-7895d0032ef3.png',
      description: 'Direct product catalog and pricing integration',
      category: 'Suppliers'
    },
    {
      name: 'ShipStation',
      logo: '/lovable-uploads/9a36183f-4238-4b3a-b0e0-43a4488f0214.png',
      description: 'Automated shipping and fulfillment',
      category: 'Logistics'
    },
    {
      name: 'Shopify',
      logo: '/lovable-uploads/369d3355-34ed-4efa-a369-eadbdacb23d9.png',
      description: 'E-commerce platform integration',
      category: 'E-commerce'
    },
    {
      name: 'Alphabroder',
      logo: '/lovable-uploads/27c70a05-dca6-4c0b-a0d7-aaf05443a139.png',
      description: 'Wholesale apparel supplier integration',
      category: 'Suppliers'
    }
  ];

  return (
    <section className="py-24 bg-zinc-900 dark:bg-zinc-900 light:bg-white text-white dark:text-white light:text-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#D4AF37]/10 blur-[120px] top-0 right-0 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full bg-zinc-800/50 dark:bg-zinc-800/50 light:bg-gray-200/50 blur-[80px] bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="inline-block px-6 py-2 bg-zinc-800/90 dark:bg-zinc-800/90 light:bg-gray-100/90 backdrop-blur-md rounded-full border border-[#D4AF37]/30 mb-8 transition-colors duration-300">
              <span className="text-sm text-[#D4AF37] uppercase font-semibold tracking-wider">INTEGRATIONS</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white dark:text-white light:text-gray-900 transition-colors duration-300">
              Seamlessly integrate with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">your existing tools</span>
            </h2>
            <p className="text-xl text-gray-300 dark:text-gray-300 light:text-gray-600 leading-relaxed transition-colors duration-300">
              Tracker seamlessly links with tools you already use, creating a unified workflow that will increase ease and production efficiency.
            </p>
          </div>
        </ScrollReveal>

        {/* Integration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {integrations.map((integration, index) => (
            <ScrollReveal key={integration.name} delay={index * 0.1}>
              <div className="group bg-zinc-800/60 dark:bg-zinc-800/60 light:bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-zinc-700 dark:border-zinc-700 light:border-gray-200 hover:border-[#D4AF37]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#D4AF37]/10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-lg bg-zinc-700 dark:bg-zinc-700 light:bg-gray-100 border border-zinc-600 dark:border-zinc-600 light:border-gray-200 flex items-center justify-center mr-4 overflow-hidden group-hover:border-[#D4AF37]/50 transition-all duration-300">
                    <img 
                      src={integration.logo} 
                      alt={integration.name}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-white dark:text-white light:text-gray-900 group-hover:text-[#D4AF37] transition-colors duration-300">
                      {integration.name}
                    </h3>
                    <span className="text-sm text-[#D4AF37] font-medium">{integration.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 mb-6 transition-colors duration-300">
                  {integration.description}
                </p>
                
                <div className="flex items-center text-[#D4AF37] font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span className="mr-2">Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Benefits section */}
        <ScrollReveal delay={0.5}>
          <div className="bg-zinc-800/40 dark:bg-zinc-800/40 light:bg-white/60 backdrop-blur-sm rounded-xl p-8 border border-zinc-700 dark:border-zinc-700 light:border-gray-200 transition-colors duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white dark:text-white light:text-gray-900 transition-colors duration-300">
                  Why our integrations matter
                </h3>
                <div className="space-y-4">
                  {[
                    'Eliminate manual data entry between systems',
                    'Real-time synchronization across all platforms',
                    'Reduce errors and improve accuracy',
                    'Save hours of administrative work weekly'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#D4AF37] mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 transition-colors duration-300">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-[#D4AF37]/20 border-4 border-[#D4AF37]/30 mb-6">
                  <div className="text-3xl font-bold text-[#D4AF37]">15+</div>
                </div>
                <h4 className="text-xl font-semibold text-white dark:text-white light:text-gray-900 mb-2 transition-colors duration-300">
                  Supported Integrations
                </h4>
                <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 transition-colors duration-300">
                  Connect with the tools you already love
                </p>
                <Button 
                  variant="outline" 
                  className="mt-6 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
                >
                  View All Integrations
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Integration;
