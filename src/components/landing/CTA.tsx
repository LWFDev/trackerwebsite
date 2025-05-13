
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ui/scroll-reveal";

const CTA = () => {
  return <section className="py-20 bg-zinc-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {/* Animated gradient blob */}
        <div className="absolute w-[900px] h-[900px] rounded-full bg-gradient-to-br from-[#D4AF37]/10 via-[#F2D675]/5 to-[#D4AF37]/10 blur-[150px] opacity-60 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-morph"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-[10%] w-16 h-16 rounded-full border border-[#D4AF37]/10 opacity-30 animate-float" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute bottom-20 right-[15%] w-24 h-24 rounded-md border border-[#D4AF37]/10 opacity-20 rotate-45 animate-float" style={{ animationDelay: '1.3s' }}></div>
        <div className="absolute top-1/3 right-[25%] w-12 h-12 rounded-full border border-zinc-500/20 opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto relative">
            {/* Glowing background effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37]/20 to-[#F2D675]/20 rounded-2xl blur-xl opacity-70"></div>
            
            <div className="relative backdrop-blur-md p-10 rounded-2xl bg-zinc-900/70 border border-zinc-800 hover:border-[#D4AF37]/30 transition-all duration-500 shadow-xl">
              <div className="inline-block px-4 py-1.5 bg-black/30 backdrop-blur-sm rounded-full border border-zinc-700 mb-6 animate-fade-in">
                <span className="text-sm text-[#D4AF37] uppercase font-medium tracking-wider flex items-center">
                  <span className="bg-[#D4AF37] w-2 h-2 rounded-full mr-2 animate-pulse"></span>
                  Get Started Today
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in" style={{
              animationDelay: '0.1s'
            }}>
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675] relative">
                  transform your workflow?
                  <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#D4AF37]/30" viewBox="0 0 400 12" preserveAspectRatio="none">
                    <path d="M0,1 C150,12 250,12 400,1" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
                Start your free 14-day trial today. No credit card required.
              </p>
              
              <Link to="/get-started">
                <Button size="lg" className="group px-8 shadow-xl bg-gradient-to-r from-[#D4AF37] to-[#F2D675] hover:from-[#F2D675] hover:to-[#D4AF37] text-black transform transition-all duration-300 hover:-translate-y-1 relative overflow-hidden animate-fade-in" style={{
                animationDelay: '0.3s'
              }}>
                  <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  <span className="relative z-10 flex items-center">
                    Get Started <ArrowRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>
              
              <p className="mt-8 text-sm text-gray-400 animate-fade-in" style={{
              animationDelay: '0.4s'
            }}>
                Join <span className="text-[#D4AF37]">garment decoration</span> businesses using Tracker
              </p>
              
              {/* Decorative dots */}
              <div className="absolute -top-6 -right-6 flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37]/30"></div>
                <div className="w-2 h-2 rounded-full bg-[#D4AF37]/50"></div>
                <div className="w-2 h-2 rounded-full bg-[#D4AF37]/70"></div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>;
};

export default CTA;
