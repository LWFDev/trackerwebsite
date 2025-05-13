
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const Hero = () => {
  const blobRef = useRef<HTMLDivElement>(null);

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

  return (
    <section className="relative pt-24 pb-16 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Animated gradient blob */}
        <div 
          ref={blobRef}
          className="absolute w-[900px] h-[900px] rounded-full bg-gradient-to-r from-[#D4AF37]/10 via-[#F2D675]/5 to-[#D4AF37]/10 blur-[80px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-3000 ease-in-out"
        ></div>
        
        {/* Floating shapes */}
        <div className="absolute top-20 left-[10%] w-16 h-16 border border-[#D4AF37]/20 rounded-full animate-float opacity-20"></div>
        <div className="absolute bottom-40 right-[15%] w-24 h-24 border border-[#D4AF37]/20 rounded-full animate-float opacity-30" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[30%] right-[10%] w-32 h-32 border-2 border-[#D4AF37]/10 rounded-xl rotate-45 animate-float opacity-20" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-[10%] left-[20%] w-20 h-20 border-2 border-[#D4AF37]/10 rounded-full animate-float opacity-10" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djLIMzR2LTJoMnptMC0xMHYyaC0ydi0yaDJ6bTEwIDBoMnYyaC0ydi0yek0yMCAyNGgydjJoLTJ2LTJ6bS0xMCAwaDJ2MmgtMnYtMnptMTAgMTBoMnYyaC0ydi0yek0zMCAyNGgydjJoLTJ2LTJ6bTEwIDBo')] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-10 md:mb-0">
            <div className="inline-block px-4 py-1.5 bg-zinc-900/80 backdrop-blur-md rounded-full border border-zinc-800 mb-6 shadow-lg shadow-black/20 hover:shadow-[#D4AF37]/10 transition-all duration-500">
              <div className="text-sm text-[#D4AF37] uppercase font-medium tracking-wider flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-[#D4AF37] mr-2 animate-pulse"></span>
                AUTOMATE. ORGANIZE. SIMPLIFY.
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Digitize production, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675] relative">
                enable profit.
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#D4AF37]/30" viewBox="0 0 400 12" preserveAspectRatio="none">
                  <path d="M0,1 C150,12 250,12 400,1" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 max-w-lg animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              The end-to-end platform that <span className="text-[#D4AF37]">automates order handling</span>, <span className="text-[#D4AF37]">manages inventory</span>, and <span className="text-[#D4AF37]">optimizes production instantly</span> - simpler, clearer and more effectively.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              <Link to="/get-started">
                <Button size="lg" className="group bg-gradient-to-r from-[#D4AF37] to-[#F2D675] text-black px-6 shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                  <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  <span className="relative z-10 flex items-center">
                    Get Started <ArrowRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="group border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                  <span className="absolute inset-0 w-full h-full bg-[#D4AF37]/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  <span className="relative z-10">Contact Sales</span>
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8 animate-fade-in" style={{
            animationDelay: '0.4s'
          }}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 to-[#F2D675]/20 rounded-lg blur-sm transform group-hover:scale-105 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="bg-zinc-900/60 backdrop-blur-sm p-4 rounded-lg border border-zinc-800 hover:border-[#D4AF37]/50 transition-all duration-300 relative z-10">
                  <div className="text-3xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675] group-hover:from-[#F2D675] group-hover:to-[#D4AF37] transition-all duration-300">1,000,000+</div>
                  <div className="text-gray-400 text-sm">Garments Processed</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 to-[#F2D675]/20 rounded-lg blur-sm transform group-hover:scale-105 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="bg-zinc-900/60 backdrop-blur-sm p-4 rounded-lg border border-zinc-800 hover:border-[#D4AF37]/50 transition-all duration-300 relative z-10">
                  <div className="text-3xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675] group-hover:from-[#F2D675] group-hover:to-[#D4AF37] transition-all duration-300">2,000+</div>
                  <div className="text-gray-400 text-sm">Workflows Optimized</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 animate-fade-in" style={{
          animationDelay: '0.5s'
        }}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D4AF37] to-[#F2D675] opacity-20 blur-lg rounded-xl transform group-hover:scale-105 transition-all duration-300"></div>
              <div className="rounded-xl shadow-2xl overflow-hidden relative border border-zinc-800">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent z-10"></div>
                <img alt="Platform dashboard" className="w-full h-auto" src="https://mebuisworks.com/wp-content/uploads/2024/11/1-1024x680.webp" />
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#D4AF37] to-[#F2D675] text-black px-4 py-2 rounded-lg font-medium shadow-lg z-30 animate-float flex items-center gap-1">
                <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
                New Features
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 border border-[#D4AF37]/30 rounded-full animate-spin-slow"></div>
              <div className="absolute -bottom-10 left-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
