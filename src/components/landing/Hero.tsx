
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return <section className="relative pt-24 pb-16 text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#D4AF37]/5 blur-[150px] top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-zinc-800/30 blur-[100px] bottom-0 right-0"></div>
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
            
            <p className="text-lg text-gray-300 mb-8 max-w-lg animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              The end-to-end platform that <span className="text-[#D4AF37]">automates order handling</span>, <span className="text-[#D4AF37]">manages inventory</span>, and <span className="text-[#D4AF37]">optimizes production instantly</span> - simpler, clearer and more effectively.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              <Link to="/get-started">
                <Button size="lg" className="bg-gradient-to-r from-[#D4AF37] to-[#F2D675] text-black px-6 shadow-lg hover:shadow-[#D4AF37]/20 transition-all hover:-translate-y-1">
                  Get Started <ArrowRight className="ml-1 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all hover:-translate-y-1">
                  Contact Sales
                </Button>
              </Link>
            </div>
            
            {/* Key benefits */}
            <div className="mt-8 space-y-4 animate-fade-in" style={{
            animationDelay: '0.4s'
          }}>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <p className="text-gray-300">Reduce order processing time by up to 75%</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <p className="text-gray-300">End-to-end encrypted data security</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <p className="text-gray-300">Lightning-fast implementation (avg. 2 weeks)</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 animate-fade-in" style={{
          animationDelay: '0.5s'
        }}>
            <div className="relative">
              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 bg-zinc-900/80 backdrop-blur-sm p-3 rounded-lg border border-zinc-800 z-20 shadow-xl animate-float" style={{ animationDelay: '0.7s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                    <span className="text-[#D4AF37] font-bold">+32%</span>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Efficiency Boost</p>
                    <p className="text-gray-400 text-xs">Last month</p>
                  </div>
                </div>
              </div>
              
              {/* Main image */}
              <div className="rounded-xl shadow-2xl overflow-hidden hover:shadow-[#D4AF37]/20 hover:shadow-xl relative z-10 border border-zinc-800">
                <img alt="Platform dashboard" className="w-full h-auto" src="https://mebuisworks.com/wp-content/uploads/2024/11/1-1024x680.webp" />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
              </div>
              
              {/* New Features badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#D4AF37] to-[#F2D675] text-black px-4 py-2 rounded-lg font-medium shadow-lg z-30 animate-float">
                New Features
              </div>
              
              {/* Stats card */}
              <div className="absolute -bottom-8 left-1/4 transform -translate-x-1/2 bg-zinc-900/90 backdrop-blur-sm p-4 rounded-xl border border-zinc-800 shadow-xl z-20 animate-float" style={{ animationDelay: '1s' }}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-[#D4AF37]">1M+</div>
                    <div className="text-xs text-gray-400">Garments Processed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#D4AF37]">2K+</div>
                    <div className="text-xs text-gray-400">Workflows Optimized</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
