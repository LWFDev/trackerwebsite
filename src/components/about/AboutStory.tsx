
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Target, Zap } from "lucide-react";

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

  return (
    <div className="py-20 bg-gradient-to-b from-black via-zinc-900 to-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl top-20 left-10 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-slate-400/10 rounded-full blur-3xl top-40 right-20 animate-pulse delay-1000"></div>
        <div className="absolute w-72 h-72 bg-green-400/8 rounded-full blur-3xl bottom-40 left-1/3 animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* The Story Continued Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-emerald-400 border-emerald-400/30 bg-emerald-400/5">
              Our Foundation
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-emerald-400 via-slate-300 to-green-400 bg-clip-text text-transparent">
                The Story Continued...
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-green-400 mx-auto mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-emerald-400 to-green-400 rounded-full"></div>
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed pl-8">
                  <p className="text-xl text-slate-200 font-medium">
                    As with many great business ventures, Tracker is built on years of first hand personal experience, dissatisfaction with how things are and an insatiable quest for improvement.
                  </p>
                  <p>
                    Will - our founder - has spent the past 20+ years owning, running, working in – and with - various physical product-based businesses - which lead to a comprehensive cloud software solution that enables owners, managers and teams to have transparency throughout their businesses.
                  </p>
                  <p>
                    While Tracker is able to support any physical product-based business, we believe in doing what we are best at and love doing. This led to us focusing on the <span className="text-emerald-400 font-semibold">garment and decoration industry</span> - where our roots were built.
                  </p>
                  <p>
                    We address the business and leadership needs to best manage production requirements. This can include everything from creating detailed reports to managing 'on demand', 'drop shipping' and 'high volume seasonality' – as well as 3PL and potentially multi-site operations.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-green-400/20 blur-2xl rounded-3xl group-hover:blur-xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-slate-800/80 to-zinc-900/80 backdrop-blur-sm p-2 rounded-3xl border border-slate-600/30">
                  <img 
                    src="/lovable-uploads/a9e097b4-1467-4e2f-8684-c553ad3b8eff.png" 
                    alt="Tracker employee packing merchandise in warehouse with embroidery machines" 
                    className="w-full max-w-md rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tracker Provides Section */}
        <section className="mb-24">
          <Card className="bg-gradient-to-br from-slate-900/90 to-zinc-900/90 border-slate-700/50 backdrop-blur-sm shadow-2xl">
            <CardContent className="p-12">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-emerald-400 mr-3" />
                  <Badge variant="outline" className="px-4 py-2 text-emerald-400 border-emerald-400/30 bg-emerald-400/5">
                    Our Solution
                  </Badge>
                </div>
                <h3 className="text-4xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-slate-300 via-emerald-400 to-green-400 bg-clip-text text-transparent">
                    Tracker Provides...
                  </span>
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                  <p className="text-slate-200">
                    Our clients are able to track their processes from beginning to end – from enquiry and quotations, to providing design or logo proofs, moving on to production priorities, stock management and control, inventory, production, quality and despatch.
                  </p>
                  <p>
                    Tracker provides confidence and clarity – for today's requirements as well as supporting the strategic needs and planning for tomorrow. In a fast paced and changing world, Tracker also allows key people to have instant and secure access to business intelligence and data from anywhere there is an internet connection.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 group">
                      <CheckCircle className="h-6 w-6 text-emerald-400 group-hover:text-green-400 transition-colors" />
                      <span className="text-slate-300 group-hover:text-white transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* We Work With Section */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-slate-400 mr-3" />
              <Badge variant="outline" className="px-4 py-2 text-slate-400 border-slate-400/30 bg-slate-400/5">
                Our Clients
              </Badge>
            </div>
            <h3 className="text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text text-transparent">
                We Work With...
              </span>
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-emerald-900/20 to-green-900/20 border-emerald-700/30 hover:border-emerald-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <Target className="h-8 w-8 text-emerald-400 mb-4" />
                <p className="text-slate-200 text-lg leading-relaxed mb-6">
                  Dynamic and ambitious businesses with an appetite that aligns to ours – to improve and grow.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Very often our clients are at a pivotal stage and recognise the need to gain more control, improve profitability and efficiency, or simply support a desired growth strategy.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-slate-900/40 to-zinc-900/40 border-slate-700/30 hover:border-slate-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <Zap className="h-8 w-8 text-slate-400 mb-4" />
                <p className="text-slate-200 text-lg leading-relaxed mb-6">
                  Most businesses are not deliberate in their system development – it is more a case of evolution - and through this, ineffective gaps often appear.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Tracker aims to be the glue that pulls everything together to enable the next phase of development for a growing business.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Card className="bg-gradient-to-r from-slate-900/60 to-zinc-900/60 border-slate-600/30 inline-block">
              <CardContent className="p-6">
                <p className="text-slate-300 text-lg leading-relaxed max-w-4xl">
                  While much of our focus is within the <span className="text-emerald-400 font-semibold">garment and personalisation space</span>, we continue to also provide solutions to a number of other medium-sized enterprises including retailers and manufacturers.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Integration Partners Section */}
        <section>
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 px-4 py-2 text-green-400 border-green-400/30 bg-green-400/5">
              Integration Partners
            </Badge>
            <h3 className="text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-slate-300 bg-clip-text text-transparent">
                Partnering...
              </span>
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed max-w-4xl mx-auto mb-12">
              We also work closely with other cloud-based platforms to ensure a smooth integration for our clients. This includes Xero, Sage, Quickbooks, Hubspot, Shopify, DPD, WordPress
            </p>
          </div>
          
          <Card className="bg-gradient-to-br from-slate-900/60 to-zinc-900/60 border-slate-700/40 shadow-2xl">
            <CardContent className="p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-items-center">
                {integrationPartners.map((partner, index) => (
                  <div 
                    key={index}
                    className="group h-20 w-28 flex items-center justify-center p-4 rounded-xl bg-gradient-to-br from-slate-800/80 to-zinc-800/80 border border-slate-600/30 hover:border-emerald-400/40 hover:from-emerald-900/20 hover:to-green-900/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-400/10"
                  >
                    <span className="text-slate-300 group-hover:text-emerald-300 text-sm font-medium text-center leading-tight transition-colors">
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
