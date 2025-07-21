
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link2, Zap } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";

const IntegrationPartners = () => {
  const integrationPartners = [
    "Shopify", "WooCommerce", "BigCommerce", "Magento", "Squarespace", "Wix", "PrestaShop", "OpenCart",
    "QuickBooks", "Xero", "Sage", "FreshBooks", "Wave", "Zoho Books", "NetSuite", "SAP",
    "HubSpot", "Salesforce", "Pipedrive", "Zoho CRM", "Monday.com", "Asana", "Trello", "Notion",
    "Mailchimp", "Constant Contact", "ConvertKit", "ActiveCampaign", "Campaign Monitor", "Klaviyo", "SendGrid", "Mailgun",
    "Stripe", "PayPal", "Square", "Braintree", "Authorize.Net", "2Checkout", "Adyen", "Worldpay",
    "AWS", "Google Cloud", "Microsoft Azure", "DigitalOcean", "Heroku", "Vercel", "Netlify", "Cloudflare",
    "Slack", "Microsoft Teams", "Discord", "Zoom", "WebEx", "GoToMeeting", "Skype", "Google Meet",
    "WordPress", "Drupal", "Joomla", "Ghost", "Webflow", "Contentful", "Strapi", "Sanity",
    "FedEx", "UPS", "DHL", "USPS", "Royal Mail", "DPD", "TNT", "Canada Post",
    "Google Analytics", "Adobe Analytics", "Mixpanel", "Hotjar", "Crazy Egg", "Kissmetrics", "Segment", "Amplitude",
    "Barudan", "Tajima", "Wilcom", "Brother", "SWF", "Melco", "ZSK", "Ricoma",
    "Pencarrie", "Ralawise", "Gildan", "Fruit of the Loom", "Bella Canvas", "Next Level", "American Apparel", "Hanes",
    "Adobe Creative Suite", "Canva", "Figma", "Sketch", "InVision", "Marvel", "Principle", "Framer",
    "GitHub", "GitLab", "Bitbucket", "Azure DevOps", "Jenkins", "CircleCI", "Travis CI", "Docker",
    "Twilio", "SendBird", "Pusher", "Socket.IO", "Firebase", "PubNub", "Ably", "Stream",
    "Zendesk", "Intercom", "Freshdesk", "Help Scout", "Crisp", "LiveChat", "Drift", "Olark"
  ];

  return (
    <section>
      <ScrollReveal preset="enterprise" delay={100}>
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 px-6 py-3 text-gray-300 border-gray-600 bg-gray-800 font-medium">
            <Link2 className="h-4 w-4 mr-2 text-emerald-600" />
            Integration Partners
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Seamless Partnerships
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
            We work closely with other cloud-based platforms to ensure <span className="text-emerald-600 font-semibold">seamless integration</span> for our clients. This includes Xero, Sage, QuickBooks, HubSpot, Shopify, DPD, and WordPress.
          </p>
        </div>
      </ScrollReveal>
      
      <ScrollReveal preset="confident" delay={300}>
        <div className="w-full mx-auto">
          <div className="overflow-hidden relative">
            {/* Fade gradients on left and right */}
            <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex animate-scroll-ultra-fast whitespace-nowrap py-8">
              {integrationPartners.map((partner, index) => (
                <div 
                  key={index}
                  className="inline-flex items-center justify-center mx-6 min-w-[160px] flex-shrink-0"
                >
                  <div className="flex flex-col items-center">
                    <Zap className="h-5 w-5 text-emerald-500 mb-2" />
                    <span className="text-emerald-400 text-sm font-semibold whitespace-nowrap">
                      {partner}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default IntegrationPartners;
