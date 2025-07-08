import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Factory, Palette, Shirt, Building2, Gift, Trophy, HardHat, Sparkles, Monitor, Settings } from "lucide-react";
const Industries = () => {
  const industries = [{
    title: "High-Volume Embroidery Operations",
    description: "Ideal for companies running 150+ embroidery machines to precisely track orders, streamline production scheduling, and boost operational efficiency.",
    icon: <Factory className="w-8 h-8 text-[#D4AF37]" />,
    gradient: "from-blue-500/10 to-indigo-500/10",
    link: "/industries/high-volume-embroidery"
  }, {
    title: "Screen Printing Facilities",
    description: "Helps screen printing companies optimize workflow, improve delivery times, and manage multiple simultaneous orders without confusion.",
    icon: <Palette className="w-8 h-8 text-[#D4AF37]" />,
    gradient: "from-purple-500/10 to-pink-500/10",
    link: "/industries/screen-printing"
  }, {
    title: "Apparel Manufacturing",
    description: "Provides apparel manufacturers real-time insight into production statuses, reducing bottlenecks and ensuring consistent output quality.",
    icon: <Shirt className="w-8 h-8 text-[#D4AF37]" />,
    gradient: "from-green-500/10 to-emerald-500/10",
    link: "/industries/apparel-manufacturing"
  }, {
    title: "Corporate Apparel Suppliers",
    description: "Allows suppliers of corporate wear to closely monitor complex, customized orders for various corporate clients, ensuring precise fulfillment.",
    icon: <Building2 className="w-8 h-8 text-[#D4AF37]" />,
    gradient: "from-gray-500/10 to-slate-500/10",
    link: "/industries/corporate-apparel"
  }, {
    title: "Promotional Product Distributors",
    description: "Enables efficient tracking of promotional items from order placement through final decoration and shipment, enhancing customer satisfaction.",
    icon: <Gift className="w-8 h-8 text-[#D4AF37]" />,
    gradient: "from-orange-500/10 to-red-500/10",
    link: "/industries/promotional-products"
  }, {
    title: "Sportswear and Team Uniform Providers",
    description: "Streamlines production and delivery of team uniforms and customized sportswear, helping providers manage seasonal demand spikes smoothly.",
    icon: <Trophy className="w-8 h-8 text-[#D4AF37]" />,
    gradient: "from-yellow-500/10 to-amber-500/10",
    link: "/industries/sports-and-uniforms"
  }, {
    title: "Workwear and Uniform Services",
    description: "Ideal for uniform service companies managing continuous order flow, ensuring timely production, accurate fulfillment, and improved inventory control.",
    icon: <HardHat className="w-8 h-8 text-[#D4AF37]" />,
    gradient: "from-cyan-500/10 to-teal-500/10",
    link: "/industries/workwear-uniforms"
  }, {
    title: "Fashion Brands & Private Labels",
    description: "Supports private-label and fashion brands in closely monitoring quality, production timelines, and adherence to customization specs.",
    icon: <Sparkles className="w-8 h-8 text-[#D4AF37]" />,
    gradient: "from-violet-500/10 to-purple-500/10",
    link: "/industries/fashion-brands"
  }, {
    title: "Online Print-on-Demand Businesses",
    description: "Enables seamless integration with online stores to provide transparent order progress tracking directly to end customers.",
    icon: <Monitor className="w-8 h-8 text-[#D4AF37]" />,
    gradient: "from-blue-500/10 to-cyan-500/10",
    link: "/industries/print-on-demand"
  }, {
    title: "Contract Decoration Facilities",
    description: "Designed for businesses offering contracted decoration services, simplifying complex workflows by providing full visibility into production stages, client-specific requirements, and deadlines.",
    icon: <Settings className="w-8 h-8 text-[#D4AF37]" />,
    gradient: "from-indigo-500/10 to-blue-500/10",
    link: "/industries/contract-decoration"
  }];
  return <div className="min-h-screen theme-background theme-text transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-emerald-500/5"></div>
        <div className="container mx-auto px-4 relative z-10 py-[64px]">
          <motion.div className="text-center max-w-4xl mx-auto" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#D4AF37] to-[#F2D675] bg-clip-text text-transparent">
              Industry Solutions
            </h1>
            <p className="text-xl theme-text-secondary mb-8 leading-relaxed">
              Discover how Tracker transforms operations across diverse industries in the garment decoration and apparel manufacturing space.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-[#D4AF37] to-[#F2D675] text-black hover:opacity-90 font-semibold">
              <Link to="/get-started">Get Started Today</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center mb-12">
              Tailored Solutions for Every Industry
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => <ScrollReveal key={index} delay={index * 100}>
                <Link to={industry.link} className="block h-full">
                  <Card className={`h-full theme-surface theme-border hover:border-[#D4AF37]/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden relative bg-gradient-to-br ${industry.gradient} cursor-pointer`}>
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        {industry.icon}
                        <CardTitle className="text-xl">{industry.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="theme-text-secondary leading-relaxed">
                        {industry.description}
                      </CardDescription>
                      <div className="mt-4 text-[#D4AF37] font-medium flex items-center gap-1">
                        Learn More
                        <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </ScrollReveal>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 theme-surface theme-border border-t">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl theme-text-secondary mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses across these industries who trust Tracker to streamline their operations and boost efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-[#D4AF37] to-[#F2D675] text-black hover:opacity-90 font-semibold">
                <Link to="/get-started">Start Your Free Trial</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black">
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>;
};
export default Industries;