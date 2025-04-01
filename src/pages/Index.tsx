
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Integration from "@/components/landing/Integration";
import Workflow from "@/components/landing/Workflow";
import Results from "@/components/landing/Results";
import CTA from "@/components/landing/CTA";
import Testimonials from "@/components/landing/Testimonials";

const Index = () => {
  // Partner logos array with their details
  const partnerLogos = [
    {
      name: "ShipStation",
      src: "/lovable-uploads/7ad5af34-3861-4db6-80dd-b70029b53b1a.png",
      width: 200
    },
    {
      name: "Shopify",
      src: "/lovable-uploads/c9d06f4a-98af-4be4-83f8-407caa641ded.png",
      width: 180
    },
    {
      name: "WooCommerce",
      src: "/lovable-uploads/e7305916-46db-45fc-aa31-9c74a6cddaf5.png",
      width: 200
    },
    {
      name: "alphabroder",
      src: "/lovable-uploads/cbe69707-61aa-46c2-9047-49656e89459c.png",
      width: 180
    },
    {
      name: "SanMar",
      src: "/lovable-uploads/306ecd7f-001d-4958-ae16-8ae72964eb98.png",
      width: 180
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <main className="pt-16"> {/* Added padding-top to accommodate fixed header */}
        <Hero />
        <div className="py-12 bg-zinc-900 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute w-[600px] h-[600px] rounded-full bg-[#D4AF37]/5 blur-[120px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h3 className="text-lg text-[#D4AF37] mb-8 font-medium">TRUSTED BY INDUSTRY LEADERS</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
              {partnerLogos.map((logo, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center h-16 transition-all duration-300 hover:opacity-80"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.name} 
                    className="max-h-full max-w-full object-contain filter grayscale opacity-70 hover:opacity-100 transition-all duration-300"
                    style={{ width: 'auto', maxWidth: logo.width + 'px' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Features />
        <Integration />
        <Workflow />
        <Results />
        <Testimonials />
        <CTA />
      </main>
    </div>
  );
};

export default Index;
