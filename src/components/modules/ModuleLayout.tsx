import { ReactNode, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Star, ArrowRight, X, ZoomIn } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface Stats {
  value: string;
  label: string;
  icon?: ReactNode;
}
interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
}
interface KeyFeatureSection {
  title: string;
  description: string;
  features: Feature[];
}
interface HeroImageCallout {
  text: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  icon?: ReactNode;
  delay?: string;
}
interface ModuleLayoutProps {
  title: string;
  description: string;
  color: string;
  heroImage?: string;
  heroImageCallouts?: HeroImageCallout[];
  stats?: Stats[];
  mainSection?: {
    title: string;
    description: string;
    image?: string;
  };
  keyFeatures?: KeyFeatureSection;
  specialSection?: {
    title: string;
    subtitle?: string;
    description?: string;
    image?: string;
    items?: {
      icon?: ReactNode;
      text: string;
    }[];
    content?: ReactNode;
  };
  ctaSection?: {
    title: string;
    description: string;
    primaryButtonText?: string;
    primaryButtonLink?: string;
    secondaryButtonText?: string;
    secondaryButtonLink?: string;
  };
  rating?: number;
  reviews?: number;
  relatedModules?: {
    title: string;
    icon: ReactNode;
    description: string;
    link: string;
  }[];
}
const ModuleLayout = ({
  title,
  description,
  color,
  heroImage,
  heroImageCallouts,
  stats,
  mainSection,
  keyFeatures,
  specialSection,
  ctaSection,
  rating = 4.8,
  reviews = 92,
  relatedModules
}: ModuleLayoutProps) => {
  const mainRef = useRef<HTMLDivElement>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  
  const getBgColor = () => {
    switch (color) {
      case 'blue':
        return 'bg-gradient-to-br from-zinc-800 to-zinc-900';
      case 'green':
        return 'bg-gradient-to-br from-zinc-800 to-zinc-900';
      case 'teal':
        return 'bg-gradient-to-br from-zinc-800 to-zinc-900';
      case 'purple':
        return 'bg-gradient-to-br from-zinc-800 to-zinc-900';
      case 'orange':
        return 'bg-gradient-to-br from-zinc-800 to-zinc-900';
      case 'red':
        return 'bg-gradient-to-br from-zinc-800 to-zinc-900';
      default:
        return 'bg-gradient-to-br from-zinc-800 to-zinc-900';
    }
  };
  
  const scrollToMain = () => {
    if (mainRef.current) {
      mainRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  const getModuleCardColor = (moduleTitle: string) => {
    switch (moduleTitle) {
      case 'Sales & Orders':
        return 'bg-blue-500/20 border-blue-500/40 hover:border-blue-500';
      case 'Warehouse':
        return 'bg-indigo-500/20 border-indigo-500/40 hover:border-indigo-500';
      case 'Inventory':
        return 'bg-cyan-500/20 border-cyan-500/40 hover:border-cyan-500';
      case 'Production':
        return 'bg-purple-500/20 border-purple-500/40 hover:border-purple-500';
      case 'Customer Database':
      case 'Customer Portal':
        return 'bg-teal-500/20 border-teal-500/40 hover:border-teal-500';
      case 'Product Designer':
      case 'Logos':
      case 'Artworkers':
        return 'bg-emerald-500/20 border-emerald-500/40 hover:border-emerald-500';
      case 'Base Garments':
      case 'Suppliers':
        return 'bg-gold-opacity-20 border-gold-opacity-40 hover:border-gold';
      case 'Purchase Orders':
        return 'bg-rose-500/20 border-rose-500/40 hover:border-rose-500';
      default:
        return 'bg-zinc-800 border-zinc-700 hover:border-gold';
    }
  };
  
  const getModuleIcon = (moduleTitle: string) => {
    switch (moduleTitle) {
      case 'Sales & Orders':
        return <img src="/lovable-uploads/e43639fe-8f28-4447-8659-16c1baee9b53.png" alt="Sales & Orders" className="h-8 w-8" />;
      case 'Warehouse':
        return <img src="/lovable-uploads/2788046a-56b7-45e9-8c62-0dcdf981aad7.png" alt="Warehouse" className="h-8 w-8" />;
      case 'Inventory':
        return <img src="/lovable-uploads/513894e2-04e7-42fc-a8be-9bc390b066ed.png" alt="Inventory" className="h-8 w-8" />;
      case 'Production':
        return <img src="/lovable-uploads/d42f1f67-bb61-4af4-bf00-41e4dd3055e8.png" alt="Production" className="h-8 w-8" />;
      case 'Customer Database':
        return <img src="/lovable-uploads/f888f0f0-5dc9-4944-b5ed-64b239b1e58e.png" alt="Customers" className="h-8 w-8" />;
      case 'Customer Portal':
        return <img src="/lovable-uploads/c78cb5cd-6b30-4b76-ab3d-95defabc532a.png" alt="Customer Portal" className="h-8 w-8" />;
      case 'Product Designer':
        return <img src="/lovable-uploads/165c6ded-645a-41df-ba0c-b54b428c3953.png" alt="Product Designer" className="h-8 w-8" />;
      case 'Logos':
        return <img src="/lovable-uploads/9ed005ea-9015-43b6-b721-149fd7e96dc3.png" alt="Logos" className="h-8 w-8" />;
      case 'Artworkers':
        return <img src="/lovable-uploads/5a59d4b9-43ac-485e-830d-ee80fc2e0905.png" alt="Artworkers" className="h-8 w-8" />;
      case 'Base Garments':
        return <img src="/lovable-uploads/9646681d-05d8-4c78-9601-8a8b99451f0e.png" alt="Base Garments" className="h-8 w-8" />;
      case 'Suppliers':
        return <img src="/lovable-uploads/89eb9fd7-66d8-4124-b584-7895d0032ef3.png" alt="Suppliers" className="h-8 w-8" />;
      case 'Purchase Orders':
        return <img src="/lovable-uploads/9a36183f-4238-4b3a-b0e0-43a4488f0214.png" alt="Purchase Orders" className="h-8 w-8" />;
      default:
        return <div className="h-8 w-8 bg-gold rounded"></div>;
    }
  };
  
  const getHeaderModuleIcon = (moduleTitle: string) => {
    // Use the same icons as the module cards
    switch (moduleTitle) {
      case 'Sales & Order Management':
      case 'Sales Orders':
      case 'Sales & Orders':
        return <img src="/lovable-uploads/e43639fe-8f28-4447-8659-16c1baee9b53.png" alt="Sales & Orders" className="h-10 w-10" />;
      case 'Warehouse':
        return <img src="/lovable-uploads/2788046a-56b7-45e9-8c62-0dcdf981aad7.png" alt="Warehouse" className="h-10 w-10" />;
      case 'Inventory':
      case 'Inventory & Logistics':
      case 'Inventory Management':
        return <img src="/lovable-uploads/513894e2-04e7-42fc-a8be-9bc390b066ed.png" alt="Inventory" className="h-10 w-10" />;
      case 'Production':
      case 'Production & Manufacturing':
      case 'Production Management':
        return <img src="/lovable-uploads/d42f1f67-bb61-4af4-bf00-41e4dd3055e8.png" alt="Production" className="h-10 w-10" />;
      case 'Customer Database':
        return <img src="/lovable-uploads/f888f0f0-5dc9-4944-b5ed-64b239b1e58e.png" alt="Customers" className="h-10 w-10" />;
      case 'Customer Portal':
        return <img src="/lovable-uploads/c78cb5cd-6b30-4b76-ab3d-95defabc532a.png" alt="Customer Portal" className="h-10 w-10" />;
      case 'Product Designer':
      case 'Product Design':
        return <img src="/lovable-uploads/165c6ded-645a-41df-ba0c-b54b428c3953.png" alt="Product Designer" className="h-10 w-10" />;
      case 'Logos':
      case 'Logo Hub':
        return <img src="/lovable-uploads/9ed005ea-9015-43b6-b721-149fd7e96dc3.png" alt="Logos" className="h-10 w-10" />;
      case 'Artworkers':
        return <img src="/lovable-uploads/5a59d4b9-43ac-485e-830d-ee80fc2e0905.png" alt="Artworkers" className="h-10 w-10" />;
      case 'Base Garments':
        return <img src="/lovable-uploads/9646681d-05d8-4c78-9601-8a8b99451f0e.png" alt="Base Garments" className="h-10 w-10" />;
      case 'Suppliers':
        return <img src="/lovable-uploads/89eb9fd7-66d8-4124-b584-7895d0032ef3.png" alt="Suppliers" className="h-10 w-10" />;
      case 'Purchase Orders':
        return <img src="/lovable-uploads/9a36183f-4238-4b3a-b0e0-43a4488f0214.png" alt="Purchase Orders" className="h-10 w-10" />;
      // For modules without specific uploaded icons, use a default
      case 'Analytics & Reporting':
      case 'Customer Service':
      case 'Document Management':
      case 'Finance & Accounting':
      case 'Integrations Platform':
      case 'Project Management':
        return <div className="h-10 w-10 bg-gold rounded flex items-center justify-center text-gold-foreground font-bold text-xs">{moduleTitle.charAt(0)}</div>;
      default:
        return <div className="h-10 w-10 bg-gold rounded"></div>;
    }
  };
  
  return <div className="min-h-screen flex flex-col bg-black">
      {/* Hero Section */}
      <section className={`pt-24 pb-16 ${getBgColor()} text-white`}>
        <div className="container mx-auto px-4">
          <Link to="/modules" className="inline-flex items-center text-white/80 hover:text-gold mb-6 transition">
            <ArrowLeft size={16} className="mr-2" />
            Back to all modules
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Module Icon and Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 ${getModuleCardColor(title)} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  {getHeaderModuleIcon(title)}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
              </div>
              
              <p className="text-lg md:text-xl text-white/90 mb-6">{description}</p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button variant="gold" className="shadow-md" onClick={scrollToMain}>
                  Learn More <ArrowRight className="ml-1 h-5 w-5" />
                </Button>
                <Link to="/get-started">
                  <Button variant="outline" className="bg-zinc-800/50 text-white border-zinc-700 hover:bg-zinc-700 hover:border-gold">
                    Request Demo
                  </Button>
                </Link>
              </div>
              
              {rating && <div className="flex items-center">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => <Star key={i} size={18} className={i < Math.floor(rating) ? "text-gold fill-gold" : "text-zinc-700"} />)}
                  </div>
                  <span className="text-white font-medium">{rating}</span>
                  <span className="text-white/70 ml-1">({reviews} reviews)</span>
                </div>}
            </div>
            
            {heroImage && <div className="flex justify-center">
                <div className="relative">
                  <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
                    <DialogTrigger asChild>
                      <div className="relative bg-zinc-800/50 p-4 rounded-lg shadow-lg border border-zinc-700 cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-gold-opacity-50">
                        <img src={heroImage} alt={title} className="w-full h-auto rounded max-h-[300px] object-contain transition-all duration-300 group-hover:brightness-110" />
                        
                        {/* Hover overlay with zoom icon */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <div className="bg-gold-opacity-90 backdrop-blur-sm px-3 py-2 rounded-lg flex items-center gap-2 text-gold-foreground font-medium transform scale-90 group-hover:scale-100 transition-transform duration-300">
                            <ZoomIn className="h-4 w-4" />
                            <span className="text-sm">View Fullscreen</span>
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                    
                    <DialogContent className="max-w-6xl w-[95vw] h-[95vh] p-0 bg-black/95 border-zinc-800">
                      <div className="relative w-full h-full flex items-center justify-center p-4">
                        <img 
                          src={heroImage} 
                          alt={title} 
                          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                        />
                        
                        {/* Close button */}
                        <button 
                          onClick={() => setIsLightboxOpen(false)}
                          className="absolute top-4 right-4 p-2 bg-zinc-800/80 hover:bg-zinc-700/80 rounded-full transition-colors group"
                        >
                          <X className="h-5 w-5 text-white group-hover:text-gold" />
                        </button>
                        
                        {/* Image title overlay */}
                        <div className="absolute bottom-4 left-4 bg-zinc-900/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                          <h3 className="text-white font-semibold">{title}</h3>
                          <p className="text-gray-400 text-sm">Click outside or press ESC to close</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  {/* Floating Callout Boxes - RESTORED */}
                  {heroImageCallouts && heroImageCallouts.map((callout, index) => 
                    <div key={index} className="absolute bg-zinc-900/90 backdrop-blur-sm px-3 py-2 rounded-lg text-xs font-medium shadow-lg z-30 animate-float border border-gold-opacity-30 text-white pointer-events-none" style={{
                      ...callout.position,
                      animationDelay: callout.delay || '0s'
                    }}>
                      <div className="flex items-center gap-2">
                        {callout.icon && <span className="text-gold">{callout.icon}</span>}
                        <span>{callout.text}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {stats && stats.length > 0 && <section className="py-16 bg-zinc-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => <div key={index} className="flex flex-col items-center text-center p-6 bg-zinc-800/50 rounded-lg border border-zinc-700 hover:border-gold transition-all duration-300 hover:-translate-y-1">
                  {stat.icon && <div className="mb-4">{stat.icon}</div>}
                  <div className="text-3xl font-bold mb-2 text-gold">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>)}
            </div>
          </div>
        </section>}

      {/* Main Section */}
      {mainSection && <section ref={mainRef} className="py-16 relative bg-gradient-to-br from-black via-zinc-950 to-black overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gold-opacity-5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-75"></div>
            <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-purple-500/5 rounded-full blur-2xl animate-float"></div>
          </div>
          
          {/* Dot pattern overlay */}
          <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="px-4 py-2 bg-gold-opacity-10 border border-gold-opacity-30 rounded-full text-gold text-sm font-semibold tracking-wide uppercase">
                    Transform Your Business
                  </span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {mainSection.title}
                  </span>
                </h2>
                
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-gold to-transparent rounded-full"></div>
                  <p className="text-gray-300 text-lg leading-relaxed pl-6">
                    {mainSection.description}
                  </p>
                </div>
                
                {/* Interactive stats or features could go here */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800/50 rounded-lg border border-zinc-700/50">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-300 text-sm">Real-time Updates</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800/50 rounded-lg border border-zinc-700/50">
                    <div className="w-2 h-2 bg-gold rounded-full animate-pulse delay-75"></div>
                    <span className="text-gray-300 text-sm">Advanced Analytics</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="relative group">
                  {/* Glowing border effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-gold-opacity-50 to-blue-500/50 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                  
                  <div className="relative bg-zinc-800/50 p-4 rounded-lg shadow-2xl border border-zinc-700/50 backdrop-blur-sm">
                    <img src="/lovable-uploads/bd71cf26-6d3f-4aa3-a4e0-d2aa9db5670f.png" alt="Inventory tracking in action" className="w-full max-h-[525px] rounded-lg shadow-lg border border-zinc-800 object-contain transform transition-transform duration-300 group-hover:scale-105" />
                    
                    {/* Floating indicators */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gold rounded-full animate-pulse delay-150"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {mainSection.image && <div className="flex justify-center mt-12">
                <img src={mainSection.image} alt={mainSection.title} className="max-w-full rounded-lg shadow-lg border border-zinc-800" />
              </div>}
          </div>
        </section>}

      {/* Key Features Section */}
      {keyFeatures && <section className="py-16 bg-zinc-900">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-sm font-semibold tracking-wider text-gold uppercase mb-2">Features</span>
              <h2 className="text-3xl font-bold mb-4 text-white">{keyFeatures.title}</h2>
              <p className="text-gray-400">{keyFeatures.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyFeatures.features.map((feature, index) => <div key={index} className="bg-zinc-800 p-6 rounded-lg shadow-md border border-gold hover:-translate-y-1 transition-transform">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 text-gold">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </section>}

      {/* Special Section */}
      {specialSection && <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              {specialSection.subtitle && <span className="inline-block text-sm font-semibold tracking-wider text-gold uppercase mb-2">
                  {specialSection.subtitle}
                </span>}
              <h2 className="text-3xl font-bold mb-4 text-white">{specialSection.title}</h2>
              {specialSection.description && <p className="text-gray-400">{specialSection.description}</p>}
            </div>
            
            {specialSection.image && <div className="flex justify-center mb-12">
                <img src={specialSection.image} alt={specialSection.title} className="max-w-full rounded-lg shadow-lg border border-zinc-800" />
              </div>}
            
            {specialSection.items && specialSection.items.length > 0 && <div className="max-w-3xl mx-auto">
                <ul className="space-y-4">
                  {specialSection.items.map((item, index) => <li key={index} className="flex items-center bg-zinc-800/50 p-3 rounded-lg transition-transform hover:translate-x-1">
                      {item.icon ? <span className="mr-3 text-gold">{item.icon}</span> : <svg className="w-5 h-5 mr-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>}
                      <span className="text-gray-300">{item.text}</span>
                    </li>)}
                </ul>
              </div>}
            
            {specialSection.content && specialSection.content}
          </div>
        </section>}

      {/* Related Modules Section */}
      {relatedModules && relatedModules.length > 0 && <section className="py-16 bg-zinc-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Related Modules</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedModules.map((module, index) => 
                <Link 
                  key={index} 
                  to={module.link} 
                  className={`block p-6 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 ${getModuleCardColor(module.title)} group cursor-pointer`}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <div className="mb-4">{getModuleIcon(module.title)}</div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-gold transition-colors">{module.title}</h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">{module.description}</p>
                  <div className="text-gold hover:underline inline-flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </Link>
              )}
            </div>
          </div>
        </section>}

      {/* CTA Section */}
      {ctaSection && <section className={`py-16 ${getBgColor()} text-white`}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">{ctaSection.title}</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">{ctaSection.description}</p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {ctaSection.primaryButtonText && <Link to={ctaSection.primaryButtonLink || "/get-started"}>
                  <Button variant="gold" className="shadow-md">
                    {ctaSection.primaryButtonText} <ArrowRight className="ml-1 h-5 w-5" />
                  </Button>
                </Link>}
              
              {ctaSection.secondaryButtonText && <Link to={ctaSection.secondaryButtonLink || "/pricing"}>
                  <Button variant="outline" className="bg-zinc-800/50 text-white border-zinc-700 hover:bg-zinc-700 hover:border-gold">
                    {ctaSection.secondaryButtonText}
                  </Button>
                </Link>}
            </div>
          </div>
        </section>}
    </div>;
};
export default ModuleLayout;
