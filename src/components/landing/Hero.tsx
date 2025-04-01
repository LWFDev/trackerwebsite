
import { Button } from "@/components/ui/button";
import { ChevronRight, Code, Star, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-flick-off-white px-4 py-2 rounded-full border mb-6 animate-fade-in">
            <Star className="text-yellow-500" size={16} />
            <span className="text-sm font-medium text-gray-600">Beautiful UI components for React</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            A modern, beautiful <span className="gradient-text">UI library</span> for React apps
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Build stunning interfaces with our 100+ customizable components. Save weeks of design and development time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="bg-flick-purple hover:bg-flick-purple/90 gap-2">
              Get Started <ChevronRight size={16} />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Code size={16} /> View Documentation
            </Button>
          </div>

          <div className="relative w-full max-w-5xl mx-auto animate-fade-in glass-card" style={{ animationDelay: '0.5s' }}>
            {/* Purple glow effect */}
            <div className="absolute -z-10 -inset-0.5 bg-gradient-to-r from-flick-purple/30 to-flick-blue/30 rounded-2xl blur-xl opacity-50 animate-pulse-light"></div>

            {/* Component showcase */}
            <div className="relative bg-white/95 shadow-xl rounded-2xl border border-gray-200 overflow-hidden flex flex-col">
              <div className="bg-gray-50 border-b border-gray-200 p-3 flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="p-6 flex flex-col md:flex-row gap-6 items-center justify-around">
                <div className="flex flex-col gap-4 w-full max-w-xs">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-flick-purple/10 border border-flick-purple/20">
                    <Zap className="text-flick-purple" size={20} />
                    <span className="font-medium">Fast & Lightweight</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-flick-blue/10 border border-flick-blue/20">
                    <Zap className="text-flick-blue" size={20} />
                    <span className="font-medium">Fully Customizable</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-flick-pink/10 border border-flick-pink/20">
                    <Zap className="text-flick-pink" size={20} />
                    <span className="font-medium">Accessible Components</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
                  <Button className="bg-flick-purple hover:bg-flick-purple/90">Primary Button</Button>
                  <Button variant="outline" className="border-flick-purple text-flick-purple">Secondary Button</Button>
                  <div className="flex items-center gap-2 p-2 rounded-md border border-gray-200 bg-white">
                    <div className="w-4 h-4 rounded-sm border border-flick-purple"></div>
                    <span>Checkbox Component</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-md border border-gray-200 bg-white">
                    <span>Dropdown</span>
                    <ChevronRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
