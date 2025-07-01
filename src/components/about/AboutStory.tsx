
import React from "react";

const AboutStory = () => {
  return (
    <div className="py-16 bg-zinc-900">
      <div className="container mx-auto px-4">
        {/* The Story Continued Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="flex-1">
            <h3 className="text-lg text-gold-DEFAULT mb-4">The Story Continued...</h3>
            <h2 className="text-3xl font-bold mb-6 gold-gradient-text">Built on experience and expertise</h2>
            <div className="space-y-4 text-gray-300">
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
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-md aspect-square rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/a9e097b4-1467-4e2f-8684-c553ad3b8eff.png" 
                alt="Tracker employee packing merchandise in warehouse with embroidery machines" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Tracker Provides Section */}
        <div className="mb-16">
          <h3 className="text-lg text-gold-DEFAULT mb-4">What We Provide</h3>
          <h2 className="text-3xl font-bold mb-6 gold-gradient-text">Tracker Provides...</h2>
          <div className="space-y-4 text-gray-300 max-w-4xl">
            <p>
              Our clients are able to track their processes from beginning to end – from enquiry and quotations, to providing design or logo proofs, moving on to production priorities, stock management and control, inventory, production, quality and despatch.
            </p>
            <p>
              Tracker provides confidence and clarity – for today's requirements as well as supporting the strategic needs and planning for tomorrow. In a fast paced and changing world, Tracker also allows key people to have instant and secure access to business intelligence and data from anywhere there is an internet connection.
            </p>
          </div>
        </div>

        {/* We Work With Section */}
        <div className="mb-16">
          <h3 className="text-lg text-gold-DEFAULT mb-4">Our Clients</h3>
          <h2 className="text-3xl font-bold mb-6 gold-gradient-text">We Work With...</h2>
          <div className="space-y-4 text-gray-300 max-w-4xl">
            <p>
              Dynamic and ambitious businesses with an appetite that aligns to ours – to improve and grow.
            </p>
            <p>
              Very often our clients are at a pivotal stage and recognise the need to gain more control, improve profitability and efficiency, or simply support a desired growth strategy. Most businesses are not deliberate in their system development – it is more a case of evolution - and through this, ineffective gaps often appear. Tracker aims to be the glue that pulls everything together to enable the next phase of development for a growing business.
            </p>
            <p>
              While much of our focus is within the garment and personalisation space, we continue to also provide solutions to a number of other medium-sized enterprises including retailers and manufacturers.
            </p>
          </div>
        </div>

        {/* Partnering Section */}
        <div>
          <h3 className="text-lg text-gold-DEFAULT mb-4">Integration Partners</h3>
          <h2 className="text-3xl font-bold mb-6 gold-gradient-text">Partnering...</h2>
          <p className="text-gray-300 mb-8 max-w-4xl">
            We also work closely with other cloud-based platforms to ensure a smooth integration for our clients. This includes Xero, Sage, Quickbooks, Hubspot, Shopify, DPD, WordPress
          </p>
          
          {/* Integration Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center opacity-60">
            <div className="h-12 flex items-center justify-center">
              <span className="text-gray-400 text-sm font-medium">Barudan</span>
            </div>
            <div className="h-12 flex items-center justify-center">
              <span className="text-gray-400 text-sm font-medium">DPD</span>
            </div>
            <div className="h-12 flex items-center justify-center">
              <span className="text-gray-400 text-sm font-medium">FedEx</span>
            </div>
            <div className="h-12 flex items-center justify-center">
              <span className="text-gray-400 text-sm font-medium">HubSpot</span>
            </div>
            <div className="h-12 flex items-center justify-center">
              <span className="text-gray-400 text-sm font-medium">Pencarrie</span>
            </div>
            <div className="h-12 flex items-center justify-center">
              <span className="text-gray-400 text-sm font-medium">QuickBooks</span>
            </div>
            <div className="h-12 flex items-center justify-center">
              <span className="text-gray-400 text-sm font-medium">Ralawise</span>
            </div>
            <div className="h-12 flex items-center justify-center">
              <span className="text-gray-400 text-sm font-medium">Royal Mail</span>
            </div>
            <div className="h-12 flex items-center justify-center">
              <span className="text-gray-400 text-sm font-medium">Shopify</span>
            </div>
            <div className="h-12 flex items-center justify-center">
              <span className="text-gray-400 text-sm font-medium">Tajima</span>
            </div>
            <div className="h-12 flex items-center justify-center">
              <span className="text-gray-400 text-sm font-medium">UPS</span>
            </div>
            <div className="h-12 flex items-center justify-center">
              <span className="text-gray-400 text-sm font-medium">Wilcom</span>
            </div>
            <div className="h-12 flex items-center justify-center">
              <span className="text-gray-400 text-sm font-medium">WordPress</span>
            </div>
            <div className="h-12 flex items-center justify-center">
              <span className="text-gray-400 text-sm font-medium">Xero</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStory;
