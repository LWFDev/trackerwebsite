
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Clock, Award } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

const CTA = () => {
  return (
    <section className="py-24 bg-zinc-900 dark:bg-zinc-900 light:bg-white text-white dark:text-white light:text-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#D4AF37]/10 blur-[120px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <div className="inline-block px-6 py-2 bg-zinc-800/90 dark:bg-zinc-800/90 light:bg-gray-100/90 backdrop-blur-md rounded-full border border-[#D4AF37]/30 mb-8 transition-colors duration-300">
              <span className="text-sm text-[#D4AF37] uppercase font-semibold tracking-wider flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-[#D4AF37] mr-2 animate-pulse"></span>
                GET STARTED TODAY
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white dark:text-white light:text-gray-900 transition-colors duration-300">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">transform your workflow</span>?
            </h2>
            <p className="text-xl text-gray-300 dark:text-gray-300 light:text-gray-600 mb-8 leading-relaxed transition-colors duration-300">
              Start your free 14-day trial today. No credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/get-started">
                <Button size="lg" className="group bg-gradient-to-r from-[#D4AF37] to-[#F2D675] text-black px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                  <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  <span className="relative z-10 flex items-center">
                    Get Started <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>
              
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black px-8 py-4 text-lg font-semibold transition-all duration-300 hover:-translate-y-1">
                  Schedule Demo
                </Button>
              </Link>
            </div>
            
            <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 mb-8 transition-colors duration-300">
              Join <span className="text-[#D4AF37] font-semibold">garment decoration</span> businesses using Tracker
            </p>
          </div>
        </ScrollReveal>

        {/* Trust indicators */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-center">
            <div className="flex items-center">
              <Shield className="w-5 h-5 text-[#D4AF37] mr-2" />
              <span className="text-gray-300 dark:text-gray-300 light:text-gray-600 transition-colors duration-300">14 Day Guarantee</span>
            </div>
            
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-[#D4AF37] mr-2" />
              <span className="text-gray-300 dark:text-gray-300 light:text-gray-600 transition-colors duration-300">24/7 Support Available</span>
            </div>
            
            <div className="flex items-center">
              <Award className="w-5 h-5 text-[#D4AF37] mr-2" />
              <span className="text-gray-300 dark:text-gray-300 light:text-gray-600 transition-colors duration-300">99.9% Uptime</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTA;
