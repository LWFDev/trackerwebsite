
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { useEffect, useRef, useState } from "react";

const CTA = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Track mouse position for glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !glowRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setMousePosition({ x, y });

      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        glowRef.current.style.opacity = '1';
        glowRef.current.style.transform = `translate(${x}px, ${y}px)`;
      } else {
        glowRef.current.style.opacity = '0';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="py-20 bg-zinc-900 text-white relative overflow-hidden">
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
        
        {/* Additional floating elements */}
        <div className="absolute top-1/4 left-[30%] w-20 h-20 rounded-lg border border-[#D4AF37]/10 opacity-25 -rotate-12 animate-float" style={{ animationDelay: '1.1s' }}></div>
        <div className="absolute bottom-1/3 left-[5%] w-14 h-14 rounded-full border border-zinc-500/20 opacity-20 animate-float" style={{ animationDelay: '0.9s' }}></div>
        
        {/* Animated symbols */}
        <div className="absolute top-[35%] right-[10%] animate-float opacity-25" style={{ animationDelay: '1.6s' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#D4AF37]/30">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </div>
        <div className="absolute bottom-[20%] left-[15%] animate-float opacity-30" style={{ animationDelay: '2.2s' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#D4AF37]/30">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="12" y1="8" x2="12" y2="16"></line>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal direction="up" distance="40px" duration={900}>
          <div className="max-w-3xl mx-auto relative">
            {/* Interactive glow effect that follows cursor */}
            <div 
              ref={containerRef} 
              className="relative backdrop-blur-md p-10 rounded-2xl bg-zinc-900/70 border border-zinc-800 hover:border-[#D4AF37]/30 transition-all duration-500 shadow-xl overflow-hidden"
            >
              <div 
                ref={glowRef}
                className="absolute w-[200px] h-[200px] rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none opacity-0 transition-opacity duration-300"
                style={{
                  transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) translate(-50%, -50%)`,
                }}
              ></div>
              
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-2xl p-[1px] overflow-hidden">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/30 to-[#D4AF37]/0 animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
              </div>
              
              <div className="relative z-10">
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
                
                {/* Interactive decorative elements */}
                <div className="absolute -top-6 -right-6 flex space-x-2 animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37]/30"></div>
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37]/50"></div>
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37]/70"></div>
                </div>
                
                {/* Corner decorations */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden opacity-30">
                  <div className="absolute -top-10 -right-10 w-20 h-20 border-t-2 border-r-2 border-[#D4AF37]/20 rounded-tr-3xl"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-20 h-20 overflow-hidden opacity-30">
                  <div className="absolute -bottom-10 -left-10 w-20 h-20 border-b-2 border-l-2 border-[#D4AF37]/20 rounded-bl-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
        
        {/* Floating statistics badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          <ScrollReveal delay={300} direction="up" className="bg-zinc-900/80 backdrop-blur-sm px-5 py-3 rounded-full border border-zinc-800 flex items-center gap-2 shadow-lg hover:border-[#D4AF37]/30 transition-all duration-300">
            <div className="w-3 h-3 rounded-full bg-[#D4AF37]/40 animate-pulse"></div>
            <span className="text-gray-300 text-sm">1,000+ Active Users</span>
          </ScrollReveal>
          
          <ScrollReveal delay={400} direction="up" className="bg-zinc-900/80 backdrop-blur-sm px-5 py-3 rounded-full border border-zinc-800 flex items-center gap-2 shadow-lg hover:border-[#D4AF37]/30 transition-all duration-300">
            <div className="w-3 h-3 rounded-full bg-[#D4AF37]/40 animate-pulse"></div>
            <span className="text-gray-300 text-sm">24/7 Support Available</span>
          </ScrollReveal>
          
          <ScrollReveal delay={500} direction="up" className="bg-zinc-900/80 backdrop-blur-sm px-5 py-3 rounded-full border border-zinc-800 flex items-center gap-2 shadow-lg hover:border-[#D4AF37]/30 transition-all duration-300">
            <div className="w-3 h-3 rounded-full bg-[#D4AF37]/40 animate-pulse"></div>
            <span className="text-gray-300 text-sm">99.9% Uptime</span>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CTA;
