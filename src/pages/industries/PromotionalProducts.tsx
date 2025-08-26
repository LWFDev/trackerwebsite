import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Gift, CheckCircle, TrendingUp, Clock, Users, BarChart3, Package, Star } from "lucide-react";
import PageSEO from "@/components/seo/PageSEO";


const PromotionalProducts = () => {
  const challenges = [
    "Tracking promotional items through complex decoration processes",
    "Managing diverse product types and decoration methods",
    "Coordinating from order placement to final shipment",
    "Maintaining quality across varied promotional items"
  ];

  const solutions = [
    {
      icon: <BarChart3 className="w-6 h-6 text-gold" />,
      title: "End-to-End Tracking",
      description: "Monitor promotional items from order placement through decoration to shipment"
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald" />,
      title: "Multi-Product Management",
      description: "Handle diverse promotional products with different decoration requirements"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-gold" />,
      title: "Customer Satisfaction",
      description: "Enhance satisfaction with transparent tracking and timely delivery"
    }
  ];

  const features = [
    {
      icon: <Package className="w-8 h-8 text-gold" />,
      title: "Multi-Product Coordination",
      description: "Coordinate diverse promotional products with different decoration methods and timelines."
    },
    {
      icon: <Star className="w-8 h-8 text-emerald" />,
      title: "Quality Control System",
      description: "Maintain consistent quality standards across all promotional items and decoration processes."
    }
  ];

  return (
    <div className="min-h-screen theme-background theme-text transition-colors duration-300">
      <PageSEO seo={{
        title: "Promotional Products Distributors Software",
        description: "End-to-end tracking from order to shipment across diverse products and methods.",
        keywords: "promotional products software, decoration tracking",
        canonical: "https://tracker-systems.com/industries/promotional-products"
      }} />
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-red-500/5"></div>
        <div className="container mx-auto px-4 relative z-10 py-[64px]">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <Gift className="w-12 h-12 text-gold" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gold to-emerald bg-clip-text text-transparent">
                Promotional Product Distributors
              </h1>
            </div>
            <p className="text-xl theme-text-secondary mb-8 leading-relaxed">
              Enable efficient tracking of promotional items from order placement through final decoration and shipment, enhancing customer satisfaction with transparent processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="gold">
                <Link to="/get-started" onClick={() => window.scrollTo(0, 0)}>Get Started</Link>
              </Button>
              <Button asChild variant="emerald-outline" size="lg">
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Schedule Demo</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 theme-surface theme-border border-y">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Promotional Product Challenges
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 bg-gold rounded-full mt-3 flex-shrink-0"></div>
                  <p className="theme-text-secondary">{challenge}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Promotional Excellence with Tracker
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full theme-surface theme-border hover:border-gold-opacity-50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      {solution.icon}
                      <CardTitle className="text-xl">{solution.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="theme-text-secondary">
                      {solution.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Features Section */}
      <section className="py-16 theme-surface theme-border border-y">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Promotional Products Specialization
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full theme-surface theme-border">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Package className="w-6 h-6 text-gold" />
                    <CardTitle className="text-xl">Multi-Product Coordination</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="theme-text-secondary mb-4">
                    Coordinate diverse promotional products with different decoration methods, timelines, and quality requirements.
                  </CardDescription>
                  <ul className="space-y-2 theme-text-secondary">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald rounded-full mt-2 flex-shrink-0"></div>
                      Multi-product workflow management
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald rounded-full mt-2 flex-shrink-0"></div>
                      Decoration method coordination
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald rounded-full mt-2 flex-shrink-0"></div>
                      Timeline optimization
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full theme-surface theme-border">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Star className="w-6 h-6 text-emerald" />
                    <CardTitle className="text-xl">Customer Transparency Hub</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="theme-text-secondary mb-4">
                    Provide customers with complete visibility into their promotional order status from placement to delivery.
                  </CardDescription>
                  <ul className="space-y-2 theme-text-secondary">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                      Real-time order tracking
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                      Decoration progress updates
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                      Shipment notifications
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points Deep Dive */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Solving Promotional Product Challenges
            </h2>
            <div className="space-y-8">
              <motion.div 
                className="border-l-4 border-gold pl-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3">Multi-Product Complexity</h3>
                <p className="theme-text-secondary mb-3">
                  Managing diverse promotional products with different decoration methods, materials, and timelines 
                  creates coordination challenges that can impact delivery schedules and customer satisfaction.
                </p>
                <p className="theme-text-secondary">
                  <strong className="text-emerald">Tracker Solution:</strong> Unified product management system 
                  coordinates all decoration methods and timelines for seamless multi-product fulfillment.
                </p>
              </motion.div>

              <motion.div 
                className="border-l-4 border-emerald pl-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3">Customer Communication</h3>
                <p className="theme-text-secondary mb-3">
                  Promotional product customers expect regular updates and transparency throughout the decoration 
                  process, requiring efficient communication systems that scale with order volume.
                </p>
                <p className="theme-text-secondary">
                  <strong className="text-gold">Tracker Solution:</strong> Automated customer notifications and 
                  real-time tracking portals keep customers informed at every stage of the process.
                </p>
              </motion.div>

              <motion.div 
                className="border-l-4 border-gold pl-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3">Quality Consistency</h3>
                <p className="theme-text-secondary mb-3">
                  Maintaining consistent quality across diverse promotional items and decoration processes while 
                  meeting tight deadlines requires comprehensive quality control and monitoring systems.
                </p>
                <p className="theme-text-secondary">
                  <strong className="text-emerald">Tracker Solution:</strong> Automated quality checkpoints and 
                  process monitoring ensure consistent results across all promotional products and decoration methods.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 theme-surface theme-border border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Results You Can Expect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-4xl font-bold text-gold mb-2">80%</div>
                <p className="theme-text-secondary">Better Order Visibility</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald mb-2">60%</div>
                <p className="theme-text-secondary">Faster Processing Times</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-gold mb-2">85%</div>
                <p className="theme-text-secondary">Customer Satisfaction Rate</p>
              </div>
            </div>
            <Button asChild size="lg" variant="gold">
              <Link to="/get-started" onClick={() => window.scrollTo(0, 0)}>Boost Your Promotions Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PromotionalProducts;