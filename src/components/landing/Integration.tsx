
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { scrollToTop } from "@/utils/navigation";

const Integration = () => {
  // Define the integration logos with their names, paths, and background colors
  const integrationLogos = [
    {
      name: "Shopify",
      image: "/lovable-uploads/a061c746-21cc-421c-8f26-239f553bcf06.png",
      bgColor: "bg-gradient-to-br from-green-500/20 to-green-600/30"
    },
    {
      name: "WooCommerce",
      image: "/lovable-uploads/c25b44a2-426c-4f30-9e20-b4cf6ae40e2e.png",
      bgColor: "bg-gradient-to-br from-purple-500/20 to-purple-600/30"
    },
    {
      name: "ShipStation",
      image: "/lovable-uploads/70e89c9a-2a2a-47bf-84af-d0d6cecca1e3.png",
      bgColor: "bg-gradient-to-br from-blue-500/20 to-blue-600/30"
    },
    {
      name: "alphabroder",
      image: "/lovable-uploads/43dfb005-d4c4-43ef-846a-545265bad44a.png",
      bgColor: "bg-gradient-to-br from-orange-500/20 to-orange-600/30"
    },
    {
      name: "SanMar",
      image: "/lovable-uploads/e4f4a469-9951-418c-b168-1634003acc41.png",
      bgColor: "bg-gradient-to-br from-red-500/20 to-red-600/30"
    }
  ];

  return (
    <section className="py-20 bg-gray-900 dark:bg-black light:bg-gray-900 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-gray-800/30 dark:bg-zinc-900/30 light:bg-gray-800/30 blur-[100px] bottom-0 right-0"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gold-opacity-5 blur-[120px] top-20 left-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <div className="inline-block px-4 py-1.5 bg-gray-800/80 dark:bg-zinc-900/80 light:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-700 dark:border-zinc-800 light:border-gray-700 mb-6">
              <span className="text-sm text-gold uppercase font-medium tracking-wider">Integrations</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in text-white">
              Seamlessly integrate with <span className="text-gold-gradient">your existing tools</span>
            </h2>
            <p className="text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Tracker seamlessly links with tools you already use, creating a unified workflow that will increase ease and production efficiency.
            </p>
            
            <div className="space-y-5 mb-8">
              <div className="flex items-center p-3 bg-gray-800/60 dark:bg-zinc-900/60 light:bg-gray-800/60 backdrop-blur-sm rounded-lg border border-gray-700 dark:border-zinc-800 light:border-gray-700 transform transition-all duration-300 hover:border-gold-opacity-50 hover:-translate-y-1 hover:shadow-lg animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-white">Connect with popular e-commerce platforms</span>
              </div>
              <div className="flex items-center p-3 bg-gray-800/60 dark:bg-zinc-900/60 light:bg-gray-800/60 backdrop-blur-sm rounded-lg border border-gray-700 dark:border-zinc-800 light:border-gray-700 transform transition-all duration-300 hover:border-gold-opacity-50 hover:-translate-y-1 hover:shadow-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-white">Sync with your accounting software</span>
              </div>
              <div className="flex items-center p-3 bg-gray-800/60 dark:bg-zinc-900/60 light:bg-gray-800/60 backdrop-blur-sm rounded-lg border border-gray-700 dark:border-zinc-800 light:border-gray-700 transform transition-all duration-300 hover:border-gold-opacity-50 hover:-translate-y-1 hover:shadow-lg animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-white">Import designs from Adobe Creative Cloud</span>
              </div>
              <div className="flex items-center p-3 bg-gray-800/60 dark:bg-zinc-900/60 light:bg-gray-800/60 backdrop-blur-sm rounded-lg border border-gray-700 dark:border-zinc-800 light:border-gray-700 transform transition-all duration-300 hover:border-gold-opacity-50 hover:-translate-y-1 hover:shadow-lg animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-white">Integrate with your production equipment</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-2 gap-6 relative">
            {integrationLogos.map((logo, index) => (
              <div 
                key={index}
                className={`${logo.bgColor} backdrop-blur-sm rounded-xl h-32 border border-gray-700 dark:border-zinc-800 light:border-gray-700 transform transition-all duration-300 hover:border-gold-opacity-50 hover:-translate-y-1 hover:shadow-lg group animate-fade-in`}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="w-full h-full flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img 
                    src={logo.image} 
                    alt={logo.name} 
                    className="h-12 w-auto max-w-[80%] object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
            
            {/* Learn More button positioned in bottom right of grid */}
            <div className="flex flex-col items-center justify-center rounded-xl h-32 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <p className="text-white text-sm mb-2">Don't see your integration?</p>
              <Link to="/integrations" onClick={scrollToTop}>
                <Button variant="gold" className="text-white [text-shadow:0_1px_2px_#474747]">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
