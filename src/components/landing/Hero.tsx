
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 bg-black text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#D4AF37]/20 to-[#F2D675]/10 blur-[130px] -top-40 -right-40"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-zinc-800/30 blur-[100px] -bottom-60 -left-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-10 md:mb-0">
            <div className="inline-block px-4 py-1.5 bg-zinc-900/80 backdrop-blur-sm rounded-full border border-zinc-800 mb-6">
              <div className="text-sm text-[#D4AF37] uppercase font-medium tracking-wider flex items-center">
                <span className="bg-[#D4AF37] w-2 h-2 rounded-full mr-2"></span>
                AUTOMATE. ORGANIZE. SIMPLIFY.
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Digitize production, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">enable profit.</span>
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 max-w-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
              The end-to-end platform that <span className="text-[#D4AF37]">automates order handling</span>, <span className="text-[#D4AF37]">manages inventory</span>, and <span className="text-[#D4AF37]">optimizes production instantly</span> - simpler, clearer and more effectively.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#D4AF37] to-[#F2D675] text-black px-6 shadow-lg hover:shadow-[#D4AF37]/20 transition-all hover:-translate-y-1"
              >
                Get Started <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all hover:-translate-y-1"
              >
                Contact Sales
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="bg-zinc-900/60 backdrop-blur-sm p-4 rounded-lg border border-zinc-800 hover:border-[#D4AF37]/50 transition-all duration-300">
                <div className="text-3xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">1,000,000+</div>
                <div className="text-gray-400 text-sm">Garments Processed</div>
              </div>
              <div className="bg-zinc-900/60 backdrop-blur-sm p-4 rounded-lg border border-zinc-800 hover:border-[#D4AF37]/50 transition-all duration-300">
                <div className="text-3xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">2,000+</div>
                <div className="text-gray-400 text-sm">Workflows Automated</div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute w-20 h-20 bg-gradient-to-r from-[#D4AF37]/30 to-[#F2D675]/20 rounded-xl blur-lg -top-6 -left-6 animate-pulse-light"></div>
              <div className="absolute w-16 h-16 bg-zinc-800/50 rounded-xl blur-lg -bottom-4 -right-4 animate-pulse-light" style={{ animationDelay: '1s' }}></div>
              
              {/* Main image */}
              <div className="bg-zinc-900 rounded-xl shadow-2xl overflow-hidden border border-zinc-800 hover:border-[#D4AF37]/50 transition-all duration-500 transform hover:-translate-y-1 hover:shadow-[#D4AF37]/20 hover:shadow-xl relative z-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent z-20 pointer-events-none"></div>
                <img 
                  src="https://placehold.co/900x500/2a2a2a/CCCCCC" 
                  alt="Platform dashboard" 
                  className="w-full h-auto opacity-90"
                />
              </div>
              
              {/* New Features badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#D4AF37] to-[#F2D675] text-black px-4 py-2 rounded-lg font-medium shadow-lg z-30 animate-float">
                New Features
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
