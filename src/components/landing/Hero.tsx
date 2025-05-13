
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

const Hero = () => {
  const blobRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Animate the background blob on mount
  useEffect(() => {
    if (!blobRef.current) return;
    
    const animateBlob = () => {
      const x = Math.random() * 10 - 5;
      const y = Math.random() * 10 - 5;
      
      if (blobRef.current) {
        blobRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
      
      setTimeout(animateBlob, 3000);
    };
    
    animateBlob();
  }, []);

  // Parallax effect for floating elements
  useEffect(() => {
    if (isMobile) return; // Skip parallax on mobile for better performance
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!floatingElementsRef.current) return;
      
      const elements = floatingElementsRef.current.querySelectorAll('.parallax-element');
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Calculate distance from center (normalized)
      const moveX = (clientX - centerX) / centerX;
      const moveY = (clientY - centerY) / centerY;
      
      elements.forEach((element, index) => {
        const factor = (index + 1) * 5; // Different factors for different elements
        const x = moveX * factor;
        const y = moveY * factor;
        (element as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  return (
    <section className="relative pt-16 md:pt-24 pb-8 md:pb-16 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Animated gradient blob */}
        <div 
          ref={blobRef}
          className="absolute w-full h-full max-w-[700px] max-h-[700px] rounded-full bg-gradient-to-r from-[#D4AF37]/10 via-[#F2D675]/5 to-[#D4AF37]/10 blur-[80px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-3000 ease-in-out"
        ></div>
        
        {/* Floating elements with parallax effect - reduced for mobile */}
        <div ref={floatingElementsRef} className={`absolute inset-0 pointer-events-none ${isMobile ? 'hidden md:block' : ''}`}>
          <div className="absolute top-20 left-[10%] w-16 h-16 border border-[#D4AF37]/20 rounded-full animate-float parallax-element opacity-20"></div>
          <div className="absolute bottom-40 right-[15%] w-24 h-24 border border-[#D4AF37]/20 rounded-full animate-float parallax-element opacity-30" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-[30%] right-[10%] w-32 h-32 border-2 border-[#D4AF37]/10 rounded-xl rotate-45 animate-float parallax-element opacity-20" style={{ animationDelay: '1.5s' }}></div>
          
          {/* Additional floating elements, hidden on mobile */}
          <div className="hidden md:block absolute top-[40%] left-[5%] w-12 h-12 bg-gradient-to-r from-[#D4AF37]/5 to-[#F2D675]/5 rounded-lg animate-float parallax-element opacity-30" style={{ animationDelay: '2.5s' }}></div>
          <div className="hidden md:block absolute top-[15%] right-[20%] w-16 h-16 border border-[#D4AF37]/10 rounded-md rotate-12 animate-float parallax-element opacity-20" style={{ animationDelay: '0.7s' }}></div>
          <div className="hidden md:block absolute bottom-[30%] right-[5%] w-28 h-28 border-2 border-[#D4AF37]/5 rounded-full animate-float parallax-element opacity-15" style={{ animationDelay: '1.3s' }}></div>
        </div>
        
        {/* Grid pattern - lighter on mobile */}
        <div className={`absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djLIMzR2LTJoMnptMC0xMHYyaC0ydi0yaDJ6bTEwIDBoMnYyaC0ydi0yek0yMCAyNGgydjJoLTJ2LTJ6bS0xMCAwaDJ2MmgtMnYtMnptMTAgMTBoMnYyaC0ydi0yek0zMCAyNGgydjJoLTJ2LTJ6bTEwIDBo')] ${isMobile ? 'opacity-[0.02]' : 'opacity-[0.03]'}`}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 md:pr-8 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 bg-zinc-900/80 backdrop-blur-md rounded-full border border-zinc-800 mb-6 shadow-lg shadow-black/20 hover:shadow-[#D4AF37]/10 transition-all duration-500">
              <div className="text-sm text-[#D4AF37] uppercase font-medium tracking-wider flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-[#D4AF37] mr-2 animate-pulse"></span>
                AUTOMATE. ORGANIZE. SIMPLIFY.
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Digitize production, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675] relative">
                enable profit.
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#D4AF37]/30" viewBox="0 0 400 12" preserveAspectRatio="none">
                  <path d="M0,1 C150,12 250,12 400,1" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-300 mb-8 max-w-lg animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              The end-to-end platform that <span className="text-[#D4AF37]">automates order handling</span>, <span className="text-[#D4AF37]">manages inventory</span>, and <span className="text-[#D4AF37]">optimizes production instantly</span> - simpler, clearer and more effectively.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              <Link to="/get-started" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto group bg-gradient-to-r from-[#D4AF37] to-[#F2D675] text-black px-6 shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                  <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  <span className="relative z-10 flex items-center">
                    Get Started <ArrowRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto group border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                  <span className="absolute inset-0 w-full h-full bg-[#D4AF37]/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  <span className="relative z-10">Contact Sales</span>
                </Button>
              </Link>
            </div>
            
            <div className={`mt-12 grid grid-cols-2 gap-4 sm:gap-8 animate-fade-in ${isMobile ? 'mx-auto max-w-md' : ''}`} style={{
            animationDelay: '0.4s'
          }}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 to-[#F2D675]/20 rounded-lg blur-sm transform group-hover:scale-105 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="bg-zinc-900/60 backdrop-blur-sm p-4 rounded-lg border border-zinc-800 hover:border-[#D4AF37]/50 transition-all duration-300 relative z-10">
                  <div className="text-2xl md:text-3xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675] group-hover:from-[#F2D675] group-hover:to-[#D4AF37] transition-all duration-300">1,000,000+</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Garments Processed</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 to-[#F2D675]/20 rounded-lg blur-sm transform group-hover:scale-105 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="bg-zinc-900/60 backdrop-blur-sm p-4 rounded-lg border border-zinc-800 hover:border-[#D4AF37]/50 transition-all duration-300 relative z-10">
                  <div className="text-2xl md:text-3xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675] group-hover:from-[#F2D675] group-hover:to-[#D4AF37] transition-all duration-300">2,000+</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Workflows Optimized</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 w-full animate-fade-in" 
            style={{ animationDelay: '0.5s' }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D4AF37] to-[#F2D675] opacity-20 blur-lg rounded-xl transform group-hover:scale-105 transition-all duration-300"></div>
              <div className="rounded-xl shadow-2xl overflow-hidden relative border border-zinc-800">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent z-10"></div>
                <img alt="Platform dashboard" className="w-full h-auto" src="https://mebuisworks.com/wp-content/uploads/2024/11/1-1024x680.webp" />
              </div>
              
              {/* Floating feature badges - simplified for mobile */}
              {!isMobile && (
                <>
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#D4AF37] to-[#F2D675] text-black px-4 py-2 rounded-lg font-medium shadow-lg z-30 animate-float flex items-center gap-1">
                    <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
                    New Features
                  </div>
                  
                  <div className="absolute top-10 -right-8 bg-zinc-900/90 backdrop-blur-sm px-4 py-3 rounded-lg font-medium shadow-lg z-30 animate-float border border-[#D4AF37]/30 text-white" style={{ animationDelay: '1s' }}>
                    <div className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#D4AF37]">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span>Real-time Updates</span>
                    </div>
                  </div>
                  
                  <div className="absolute -left-6 bottom-20 bg-zinc-900/90 backdrop-blur-sm px-4 py-3 rounded-lg font-medium shadow-lg z-30 animate-float border border-[#D4AF37]/30 text-white" style={{ animationDelay: '1.5s' }}>
                    <div className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#D4AF37]">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                      <span>Advanced Security</span>
                    </div>
                  </div>
                </>
              )}
              
              {/* Mobile-only feature badge */}
              {isMobile && (
                <div className="absolute -bottom-2 right-2 bg-gradient-to-r from-[#D4AF37] to-[#F2D675] text-black px-3 py-1 rounded-lg text-xs font-medium shadow-lg z-30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse"></span>
                  New Features
                </div>
              )}
              
              {/* Decorative elements - reduced for mobile */}
              <div className={`absolute -top-6 -left-6 w-12 h-12 border border-[#D4AF37]/30 rounded-full animate-spin-slow ${isMobile ? 'hidden sm:block' : ''}`}></div>
              <div className="absolute -bottom-10 left-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
