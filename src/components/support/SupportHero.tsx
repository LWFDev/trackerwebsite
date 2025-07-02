
import React from 'react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { Headphones, Clock, MessageCircle } from 'lucide-react';

const SupportHero = () => {
  return (
    <section className="relative pt-32 pb-16 bg-gradient-to-b from-black to-zinc-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal direction="up" distance="30px" duration={600}>
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-zinc-800/50 rounded-full border border-zinc-700/60 mb-8">
              <Headphones className="w-4 h-4 text-[#D4AF37] mr-2" />
              <span className="text-sm font-medium text-gray-300">24/7 Support Available</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">
                Support
              </span>{' '}
              <span className="text-white">Center</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
              Get the help you need, when you need it. Our dedicated support team is here to ensure your success with Tracker.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#D4AF37] to-[#F2D675] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Fast Response</h3>
                <p className="text-gray-400 text-sm">Average response time under 2 hours</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#D4AF37] to-[#F2D675] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Expert Help</h3>
                <p className="text-gray-400 text-sm">Support from Tracker specialists</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#D4AF37] to-[#F2D675] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-lg font-semibold mb-2">24/7 Available</h3>
                <p className="text-gray-400 text-sm">Round-the-clock support coverage</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SupportHero;
