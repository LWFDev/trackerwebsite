
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Target, Zap, ArrowRight, Sparkles } from "lucide-react";

const AboutStory = () => {
  const integrationPartners = [
    "Barudan", "DPD", "FedEx", "HubSpot", "Pencarrie", "QuickBooks", 
    "Ralawise", "Royal Mail", "Shopify", "Tajima", "UPS", "Wilcom", 
    "WordPress", "Xero"
  ];

  const keyFeatures = [
    "End-to-end process tracking",
    "Real-time business intelligence", 
    "Secure cloud access",
    "Multi-site operations support"
  ];

  const clientTypes = [
    {
      title: "Dynamic Growth Companies",
      description: "Businesses ready to scale with systematic approaches to operations and data-driven decision making.",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "System Evolution Stage",
      description: "Companies recognizing gaps in their current processes and seeking integrated solutions for the next phase.",
      icon: <Sparkles className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.15)_1px,transparent_0)] [background-size:24px_24px]"></div>
      
      {/* Floating geometric elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-100 to-green-200 rounded-full opacity-20 blur-xl animate-float"></div>
      <div className="absolute top-60 right-20 w-24 h-24 bg-gradient-to-br from-slate-200 to-gray-300 rounded-full opacity-30 blur-lg animate-pulse"></div>
      <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-br from-emerald-200 to-slate-200 rounded-full opacity-25 blur-md animate-bounce"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 py-16">
        
        {/* Hero Section */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 px-6 py-3 text-emerald-700 border-emerald-200 bg-emerald-50 text-sm font-medium">
            Our Foundation Story
          </Badge>
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-slate-800 via-emerald-600 to-slate-700 bg-clip-text text-transparent">
              The Story Continued
            </span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-slate-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Built on decades of hands-on experience and an unwavering commitment to transforming how businesses operate.
          </p>
        </div>

        {/* Main Story Section */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-slate-400 rounded-full"></div>
                <div className="pl-12 space-y-8">
                  <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
                    <p className="text-2xl text-slate-800 font-semibold leading-tight">
                      As with many great business ventures, Tracker is built on years of first-hand personal experience, dissatisfaction with how things are, and an insatiable quest for improvement.
                    </p>
                    <p>
                      Will - our founder - has spent the past 20+ years owning, running, working in – and with - various physical product-based businesses, which led to a comprehensive cloud software solution that enables owners, managers and teams to have transparency throughout their businesses.
                    </p>
                    <div className="bg-gradient-to-r from-emerald-50 to-slate-50 p-6 rounded-2xl border-l-4 border-emerald-500">
                      <p className="text-slate-800 font-medium">
                        While Tracker is able to support any physical product-based business, we believe in doing what we are best at and love doing. This led to us focusing on the <span className="text-emerald-600 font-semibold">garment and decoration industry</span> - where our roots were built.
                      </p>
                    </div>
                    <p>
                      We address the business and leadership needs to best manage production requirements. This can include everything from creating detailed reports to managing 'on demand', 'drop shipping' and 'high volume seasonality' – as well as 3PL and potentially multi-site operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/30 to-slate-200/30 rounded-3xl blur-2xl"></div>
              <Card className="relative bg-white/80 backdrop-blur-sm border-slate-200/50 shadow-xl">
                <CardContent className="p-8">
                  <img 
                    src="/lovable-uploads/a9e097b4-1467-4e2f-8684-c553ad3b8eff.png" 
                    alt="Tracker team member working in modern warehouse facility" 
                    className="w-full rounded-2xl shadow-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What Tracker Provides Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 px-6 py-3 text-slate-700 border-slate-200 bg-slate-50">
              <Zap className="h-4 w-4 mr-2" />
              Our Solution
            </Badge>
            <h2 className="text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-slate-800 to-emerald-600 bg-clip-text text-transparent">
                Tracker Provides...
              </span>
            </h2>
          </div>
          
          <Card className="bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-xl">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <p className="text-xl text-slate-800 leading-relaxed">
                    Our clients are able to track their processes from beginning to end – from enquiry and quotations, to providing design or logo proofs, moving on to production priorities, stock management and control, inventory, production, quality and despatch.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Tracker provides confidence and clarity – for today's requirements as well as supporting the strategic needs and planning for tomorrow. In a fast-paced and changing world, Tracker also allows key people to have instant and secure access to business intelligence and data from anywhere there is an internet connection.
                  </p>
                </div>
                
                <div className="space-y-6">
                  {keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-slate-50 border border-emerald-100 hover:border-emerald-200 transition-all duration-300 group">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-slate-700 font-medium group-hover:text-slate-800 transition-colors">{feature}</span>
                      <ArrowRight className="h-4 w-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Who We Work With Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 px-6 py-3 text-slate-700 border-slate-200 bg-slate-50">
              <Users className="h-4 w-4 mr-2" />
              Our Clients
            </Badge>
            <h2 className="text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                We Work With...
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Dynamic and ambitious businesses with an appetite that aligns to ours – to improve and grow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {clientTypes.map((client, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border-slate-200/50 hover:border-emerald-200 transition-all duration-300 group hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-white mr-4">
                      {client.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800">{client.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{client.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card className="bg-gradient-to-r from-slate-50 to-emerald-50 border-slate-200/50 inline-block">
              <CardContent className="p-8">
                <p className="text-lg text-slate-700 leading-relaxed max-w-4xl">
                  Very often our clients are at a pivotal stage and recognise the need to gain more control, improve profitability and efficiency, or simply support a desired growth strategy. Most businesses are not deliberate in their system development – it is more a case of evolution - and through this, ineffective gaps often appear.
                </p>
                <div className="mt-6 p-4 bg-white/60 rounded-xl border border-emerald-200">
                  <p className="text-slate-800 font-medium">
                    <span className="text-emerald-600 font-semibold">Tracker aims to be the glue</span> that pulls everything together to enable the next phase of development for a growing business.
                  </p>
                </div>
                <p className="text-slate-600 mt-6">
                  While much of our focus is within the <span className="text-emerald-600 font-semibold">garment and personalisation space</span>, we continue to also provide solutions to a number of other medium-sized enterprises including retailers and manufacturers.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Integration Partners Section */}
        <section>
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 px-6 py-3 text-emerald-700 border-emerald-200 bg-emerald-50">
              Integration Partners
            </Badge>
            <h2 className="text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-emerald-600 to-slate-700 bg-clip-text text-transparent">
                Partnering...
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              We work closely with other cloud-based platforms to ensure seamless integration for our clients. This includes Xero, Sage, QuickBooks, HubSpot, Shopify, DPD, and WordPress.
            </p>
          </div>
          
          <Card className="bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-xl">
            <CardContent className="p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
                {integrationPartners.map((partner, index) => (
                  <div 
                    key={index}
                    className="group h-24 flex items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:border-emerald-200 hover:from-emerald-50 hover:to-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <span className="text-slate-600 group-hover:text-emerald-600 text-sm font-semibold text-center leading-tight transition-colors">
                      {partner}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default AboutStory;
