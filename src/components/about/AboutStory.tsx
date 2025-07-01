
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const AboutStory = () => {
  const integrationPartners = [
    "Barudan", "DPD", "FedEx", "HubSpot", "Pencarrie", "QuickBooks", 
    "Ralawise", "Royal Mail", "Shopify", "Tajima", "UPS", "Wilcom", 
    "WordPress", "Xero"
  ];

  return (
    <div className="py-20 bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* The Story Continued Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-lg text-gold-DEFAULT mb-4 tracking-wide uppercase">The Story Continued...</h2>
            <h3 className="text-4xl md:text-5xl font-bold gold-gradient-text mb-8">
              Built on experience and expertise
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                As with many great business ventures, Tracker is built on years of first hand personal experience, dissatisfaction with how things are and an insatiable quest for improvement. Will - our founder - has spent the past 20+ years owning, running, working in – and with - various physical product-based businesses - which lead to a comprehensive cloud software solution that enables owners, managers and teams to have transparency throughout their businesses.
              </p>
              <p>
                While Tracker is able to support any physical product-based business, we believe in doing what we are best at and love doing. This led to us focusing on the garment and decoration industry - where our roots were built.
              </p>
              <p>
                We address the business and leadership needs to best manage production requirements. This can include everything from creating detailed reports to managing 'on demand', 'drop shipping' and 'high volume seasonality' – as well as 3PL and potentially multi-site operations.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gold-DEFAULT/20 blur-3xl rounded-full"></div>
                <img 
                  src="/lovable-uploads/a9e097b4-1467-4e2f-8684-c553ad3b8eff.png" 
                  alt="Tracker employee packing merchandise in warehouse with embroidery machines" 
                  className="relative w-full max-w-md rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tracker Provides Section */}
        <section className="mb-20">
          <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <h2 className="text-lg text-gold-DEFAULT mb-4 tracking-wide uppercase">What We Provide</h2>
                <h3 className="text-4xl font-bold gold-gradient-text mb-8">Tracker Provides...</h3>
              </div>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
                <p>
                  Our clients are able to track their processes from beginning to end – from enquiry and quotations, to providing design or logo proofs, moving on to production priorities, stock management and control, inventory, production, quality and despatch.
                </p>
                <p>
                  Tracker provides confidence and clarity – for today's requirements as well as supporting the strategic needs and planning for tomorrow. In a fast paced and changing world, Tracker also allows key people to have instant and secure access to business intelligence and data from anywhere there is an internet connection.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* We Work With Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-lg text-gold-DEFAULT mb-4 tracking-wide uppercase">Our Clients</h2>
            <h3 className="text-4xl font-bold gold-gradient-text mb-8">We Work With...</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-zinc-900/30 border-zinc-800">
              <CardContent className="p-8">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Dynamic and ambitious businesses with an appetite that aligns to ours – to improve and grow.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Very often our clients are at a pivotal stage and recognise the need to gain more control, improve profitability and efficiency, or simply support a desired growth strategy.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-zinc-900/30 border-zinc-800">
              <CardContent className="p-8">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Most businesses are not deliberate in their system development – it is more a case of evolution - and through this, ineffective gaps often appear.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Tracker aims to be the glue that pulls everything together to enable the next phase of development for a growing business.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
              While much of our focus is within the garment and personalisation space, we continue to also provide solutions to a number of other medium-sized enterprises including retailers and manufacturers.
            </p>
          </div>
        </section>

        {/* Integration Partners Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-lg text-gold-DEFAULT mb-4 tracking-wide uppercase">Integration Partners</h2>
            <h3 className="text-4xl font-bold gold-gradient-text mb-8">Partnering...</h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto mb-12">
              We also work closely with other cloud-based platforms to ensure a smooth integration for our clients. This includes Xero, Sage, Quickbooks, Hubspot, Shopify, DPD, WordPress
            </p>
          </div>
          
          <Card className="bg-zinc-900/30 border-zinc-800">
            <CardContent className="p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
                {integrationPartners.map((partner, index) => (
                  <div 
                    key={index}
                    className="h-16 w-24 flex items-center justify-center p-3 rounded-lg bg-zinc-800/50 hover:bg-zinc-700/50 transition-colors"
                  >
                    <span className="text-gray-300 text-sm font-medium text-center leading-tight">
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
