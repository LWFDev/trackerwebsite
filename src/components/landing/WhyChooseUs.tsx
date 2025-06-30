
import React from 'react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { Shield, Zap, Users, Award, TrendingUp, Clock } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: 'Industry-Specific Features',
      description: 'Tailored workflows designed specifically for embroidery and garment decoration businesses.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Our customers report an average 32% increase in productivity after implementing our solution.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Advanced Machine Management',
      description: 'Sophisticated monitoring and control for all your production equipment with real-time alerts.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Quick Implementation',
      description: 'Be up and running in days, not weeks, with our guided onboarding process.',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-zinc-900 light:bg-gray-50 text-gray-900 dark:text-white light:text-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#D4AF37]/5 blur-[120px] top-1/4 -right-1/4"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full bg-gray-200 dark:bg-zinc-800/20 light:bg-gray-200/50 blur-[80px] bottom-1/4 -left-1/4"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1.5 bg-gray-100 dark:bg-zinc-900/80 light:bg-white backdrop-blur-sm rounded-full border border-gray-300 dark:border-zinc-800 light:border-gray-200 mb-6 transition-colors duration-300">
              <span className="text-sm text-[#D4AF37] uppercase font-medium tracking-wider">Why Choose Us</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white light:text-gray-900 transition-colors duration-300">
              Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">embroidery businesses</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 light:text-gray-600 transition-colors duration-300">
              Our platform is designed specifically for the unique needs of garment decoration businesses
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 0.1}>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl blur-xl from-[#D4AF37] to-[#F2D675]"></div>
                <div className="relative bg-white dark:bg-zinc-900/80 light:bg-white backdrop-blur-sm p-8 rounded-xl border border-gray-200 dark:border-zinc-800 light:border-gray-200 hover:border-[#D4AF37]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#D4AF37]/10">
                  <div className="flex items-start mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-zinc-800 light:bg-gray-100 border border-gray-200 dark:border-zinc-700 light:border-gray-200 flex items-center justify-center mr-4 group-hover:border-[#D4AF37]/50 transition-all duration-300">
                      <feature.icon className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white light:text-gray-900 group-hover:text-[#D4AF37] transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 light:text-gray-600 leading-relaxed transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Integration showcase */}
        <ScrollReveal delay={0.6}>
          <div className="bg-gray-50 dark:bg-zinc-900/50 light:bg-white backdrop-blur-sm rounded-xl p-8 border border-gray-200 dark:border-zinc-800 light:border-gray-200 transition-colors duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white light:text-gray-900 transition-colors duration-300">
                Seamlessly integrate with <span className="text-[#D4AF37]">your existing tools</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 light:text-gray-600 max-w-2xl mx-auto transition-colors duration-300">
                Tracker seamlessly links with tools you already use, creating a unified workflow that will increase ease and production efficiency.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Barudan/Tajima', type: 'Embroidery Machines' },
                { name: 'QuickBooks', type: 'Accounting' },
                { name: 'Shopify', type: 'E-commerce' },
                { name: 'Pulse/bNET', type: 'Machine Control' }
              ].map((integration, index) => (
                <div key={integration.name} className="text-center p-4 bg-white dark:bg-zinc-800/50 light:bg-gray-50 rounded-lg border border-gray-200 dark:border-zinc-700 light:border-gray-200 hover:border-[#D4AF37]/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-zinc-700 light:bg-gray-100 mx-auto mb-3 flex items-center justify-center">
                    <div className="w-6 h-6 rounded bg-[#D4AF37]/20"></div>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white light:text-gray-900 mb-1 transition-colors duration-300">{integration.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 light:text-gray-500 transition-colors duration-300">{integration.type}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhyChooseUs;
