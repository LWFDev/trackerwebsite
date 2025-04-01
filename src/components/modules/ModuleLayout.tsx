
import { ReactNode, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Star } from 'lucide-react';

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

interface ModuleLayoutProps {
  title: string;
  description: string;
  color: string;
  heroImage?: string;
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
    secondaryButtonText?: string;
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

  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Hero Section */}
      <section className={`pt-24 pb-16 ${getBgColor()} text-white`}>
        <div className="container mx-auto px-4">
          <Link 
            to="/modules" 
            className="inline-flex items-center text-white/80 hover:text-gold-DEFAULT mb-6 transition"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to all modules
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
              <p className="text-lg md:text-xl text-white/90 mb-6">{description}</p>
              
              <div className="flex space-x-4 mb-8">
                <Button variant="gold">Get Started</Button>
                <Button variant="outline" className="bg-zinc-800/50 text-white border-zinc-700 hover:bg-zinc-700 hover:border-gold-DEFAULT">
                  Request Demo
                </Button>
              </div>
              
              {rating && (
                <div className="flex items-center">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={18} 
                        className={i < Math.floor(rating) ? "text-gold-DEFAULT fill-gold-DEFAULT" : "text-zinc-700"} 
                      />
                    ))}
                  </div>
                  <span className="text-white font-medium">{rating}</span>
                  <span className="text-white/70 ml-1">({reviews} reviews)</span>
                </div>
              )}
            </div>
            
            {heroImage && (
              <div className="flex justify-center">
                <div className="bg-zinc-800/50 p-4 rounded-lg shadow-lg border border-zinc-700">
                  <img src={heroImage} alt={title} className="w-full h-auto rounded max-h-[300px] object-contain" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {stats && stats.length > 0 && (
        <section className="py-16 bg-zinc-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  {stat.icon && <div className="mb-4">{stat.icon}</div>}
                  <div className="text-3xl font-bold mb-2 text-gold-DEFAULT">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Section */}
      {mainSection && (
        <section ref={mainRef} className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">{mainSection.title}</h2>
              <p className="text-gray-400">{mainSection.description}</p>
            </div>
            
            {mainSection.image && (
              <div className="flex justify-center">
                <img 
                  src={mainSection.image} 
                  alt={mainSection.title} 
                  className="max-w-full rounded-lg shadow-lg border border-zinc-800"
                />
              </div>
            )}
          </div>
        </section>
      )}

      {/* Key Features Section */}
      {keyFeatures && (
        <section className="py-16 bg-zinc-900">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-sm font-semibold tracking-wider text-gold-DEFAULT uppercase mb-2">Features</span>
              <h2 className="text-3xl font-bold mb-4 text-white">{keyFeatures.title}</h2>
              <p className="text-gray-400">{keyFeatures.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyFeatures.features.map((feature, index) => (
                <div key={index} className="bg-zinc-800 p-6 rounded-lg shadow-md border border-zinc-700 hover:border-gold-DEFAULT transition-all">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 text-gold-DEFAULT">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Special Section */}
      {specialSection && (
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              {specialSection.subtitle && (
                <span className="inline-block text-sm font-semibold tracking-wider text-gold-DEFAULT uppercase mb-2">
                  {specialSection.subtitle}
                </span>
              )}
              <h2 className="text-3xl font-bold mb-4 text-white">{specialSection.title}</h2>
              {specialSection.description && <p className="text-gray-400">{specialSection.description}</p>}
            </div>
            
            {specialSection.image && (
              <div className="flex justify-center mb-12">
                <img 
                  src={specialSection.image} 
                  alt={specialSection.title} 
                  className="max-w-full rounded-lg shadow-lg border border-zinc-800"
                />
              </div>
            )}
            
            {specialSection.items && specialSection.items.length > 0 && (
              <div className="max-w-3xl mx-auto">
                <ul className="space-y-4">
                  {specialSection.items.map((item, index) => (
                    <li key={index} className="flex items-center">
                      {item.icon ? (
                        <span className="mr-3 text-gold-DEFAULT">{item.icon}</span>
                      ) : (
                        <svg className="w-5 h-5 mr-3 text-gold-DEFAULT" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                      <span className="text-gray-300">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {specialSection.content && specialSection.content}
          </div>
        </section>
      )}

      {/* Related Modules Section */}
      {relatedModules && relatedModules.length > 0 && (
        <section className="py-16 bg-zinc-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Related Modules</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedModules.map((module, index) => (
                <div key={index} className="bg-zinc-800 p-6 rounded-lg shadow-md border border-zinc-700 hover:border-gold-DEFAULT transition-all">
                  <div className="text-gold-DEFAULT mb-4">{module.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{module.title}</h3>
                  <p className="text-gray-400 mb-4">{module.description}</p>
                  <Link to={module.link} className="text-gold-DEFAULT hover:underline">Learn more</Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {ctaSection && (
        <section className={`py-16 ${getBgColor()} text-white`}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">{ctaSection.title}</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">{ctaSection.description}</p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {ctaSection.primaryButtonText && (
                <Button variant="gold">
                  {ctaSection.primaryButtonText}
                </Button>
              )}
              
              {ctaSection.secondaryButtonText && (
                <Button variant="outline" className="bg-zinc-800/50 text-white border-zinc-700 hover:bg-zinc-700 hover:border-gold-DEFAULT">
                  {ctaSection.secondaryButtonText}
                </Button>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ModuleLayout;
