import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return <section className="relative pt-24 pb-16 text-white overflow-hidden">
      {/* Removed background elements */}
      
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
            
            <div className="mt-12 grid grid-cols-2 gap-8 animate-fade-in" style={{
            animationDelay: '0.4s'
          }}>
              <div className="bg-zinc-900/60 backdrop-blur-sm p-4 rounded-lg border border-zinc-800 hover:border-[#D4AF37]/50 transition-all duration-300">
                <div className="text-3xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">1,000,000+</div>
                <div className="text-gray-400 text-sm">Garments Processed</div>
              </div>
              <div className="bg-zinc-900/60 backdrop-blur-sm p-4 rounded-lg border border-zinc-800 hover:border-[#D4AF37]/50 transition-all duration-300">
                <div className="text-3xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">2,000+</div>
                <div className="text-gray-400 text-sm">Workflows Optimized</div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 animate-fade-in" style={{
          animationDelay: '0.5s'
        }}>
            <div className="relative">
              {/* Removed decorative background elements */}
              
              {/* Main image */}
              <div className="bg-zinc-900 rounded-xl shadow-2xl overflow-hidden hover:shadow-[#D4AF37]/20 hover:shadow-xl relative z-10">
                <img alt="Platform dashboard" className="w-full h-auto" src="https://mebuisworks.com/wp-content/uploads/2024/11/1-1024x680.webp" />
              </div>
              
              {/* New Features badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#D4AF37] to-[#F2D675] text-black px-4 py-2 rounded-lg font-medium shadow-lg z-30 animate-float">
                New Features
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
