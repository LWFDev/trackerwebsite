
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Modern SaaS for growing your business
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our platform helps you build, scale, and optimize your SaaS application. Get started today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Button size="lg" className="bg-[#7C3AED] hover:bg-[#6D28D9] gap-2">
              Get started <ChevronRight size={16} />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              View documentation <ArrowRight size={16} />
            </Button>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 opacity-30 blur-xl"></div>
            <div className="relative bg-white rounded-lg border border-gray-200 shadow-xl overflow-hidden">
              <div className="h-[350px] sm:h-[450px] bg-gray-100 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                  alt="Application screenshot" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
